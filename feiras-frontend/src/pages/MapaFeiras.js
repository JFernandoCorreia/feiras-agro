/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

// Botão de Centralização
function CentralizarBotao({ center }) {
  const map = useMap();

  const handleClick = () => {
    if (center) {
      map.setView(center, 13); // Define a visão central e o zoom
    } else {
      alert('Localização do usuário não disponível.');
    }
  };

  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-10 md:right-10 bg-recifeBlue text-white px-3 py-2 text-sm md:text-base rounded shadow hover:bg-recifeGold z-50"
    >
      📍 Centralizar
    </button>
  );
}

function MapaFeiras() {
  const [feiras, setFeiras] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [filtro, setFiltro] = useState(''); // Filtro por tipo de cultivo

  // Função para acompanhar a localização do usuário em tempo real
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      },
      (error) => {
        console.error("Erro ao acompanhar a localização: ", error);
      },
      {
        enableHighAccuracy: true, // Maior precisão possível
        maximumAge: 0,
        timeout: 5000,
      }
    );

    // Limpa o watchPosition ao desmontar
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  // Função para buscar hortas do banco de dados
  const fetchFeiras = async () => {
    try {
      const response = await axios.get('/api/feiras'); // Substituir pela URL da API
      setFeiras(response.data);
    } catch (error) {
      console.error("Erro ao buscar feiras:", error);
    }
  };

  // Atualiza hortas periodicamente
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
    fetchFeiras();
    const intervalId = setInterval(() => {
      fetchFeiras();
    }, 15000);

    return () => clearInterval(intervalId); // Limpeza do intervalo ao desmontar o componente
  }, []);

  return (
    <>
    <div className="flex flex-col items-center min-h-screen">
      <input
        type="text"
        placeholder="Filtrar por tipo"
        onChange={(e) => setFiltro(e.target.value)}
        className="border p-2 mb-4 w-full max-w-sm"
      />

      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 relative">

        {/* Caixa branca contendo o mapa */}
        <div className="bg-white p-4 rounded-md shadow-md relative z-10">
          <h2 className="text-recifeBlue text-3xl font-bold mb-4 text-center">Mapa das Feiras</h2>
          
          <MapContainer
            center={userLocation || [-8.0476, -34.8770]}
            zoom={userLocation ? 13 : 10}
            style={{
              height: '60vh', // Mantém altura ajustada dentro da caixa
              width: '100%',
              minHeight: '300px',
              marginTop: '10px',
            }}
            className="relative"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {userLocation && <CentralizarBotao center={userLocation} />}

            {userLocation && (
              <Marker position={userLocation}>
                <Popup>Você está aqui!</Popup>
              </Marker>
            )}

            {feiras
              .filter((feira) => feira.tipo.toLowerCase().includes(filtro.toLowerCase()))
              .map((feira, index) => (
                <Marker key={feira.id || index} position={[feira.latitude, feira.longitude]}>
                  <Popup>
                    <strong>{feira.nome}</strong>
                    <br />
                    {feira.tipo}
                  </Popup>
                </Marker>
              ))
            }
          </MapContainer>
        </div>
      </div>
    </div>
    
    <footer className="w-full bg-recifeBlue text-recifeWhite text-center p-4 mt-18 bottom-0">
        <p>&copy; 2025 Prefeitura do Recife</p>
        <div className="flex justify-center space-x-4 mt-4">
          {[ 
            { href: "https://www.facebook.com/prefeituradorecife", src: "Facebook_logo.png", alt: "Facebook" },
            { href: "https://x.com/prefrecife", src: "x.png", alt: "X" },
            { href: "https://www.instagram.com/prefeiturarecife/", src: "instagram.jpeg", alt: "Instagram" },
            { href: "https://www.youtube.com/channel/UCxMRq-Mv3UimnqOl6aRrM6Q", src: "youtube.png", alt: "YouTube" },
            { href: "https://www.flickr.com/photos/prefeituradorecife/", src: "flickr.png", alt: "Flickr" },
          ].map(({ href, src, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/${src}`} alt={alt} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}

export default MapaFeiras;

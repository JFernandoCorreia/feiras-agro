import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import React from 'react';


const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Cabeçalho fixo no topo */}
      <header className="bg-recifeBlue fixed top-0 left-0 w-full z-50 shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <img
            src={`${process.env.PUBLIC_URL}/images/logo-seau.png`}
            alt={t("Prefeitura do Recife")}
            className="w-40 h-auto"
            loading="lazy"
          />

          <div className="w-full flex justify-center mb-0 sm:mb-3">
            <a
              href={process.env.REACT_APP_API_URL || 'http://localhost:3001/'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-recifeWhite font-bold text-2xl sm:text-4xl hover:underline text-center mt-auto"
            >
              Flor da Cidade
            </a>
          </div>

          {/* Navegação simplificada */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/login" className="text-recifeWhite hover:underline">{t("Acesso")}</Link>
            <Link to="/register" className="text-recifeWhite hover:underline">{t("Cadastro")}</Link>
            <Link to="/maps" className="text-recifeWhite hover:underline">{t("Mapas")}</Link>
            <Link to="/about" className="text-recifeWhite hover:underline">{t("Sobre")}</Link>
          </nav>
        </div>
      </header>

      {/* Corpo do site com seções empilhadas */}
      <main className="mt-16 flex flex-col items-center">
        <div className="relative w-full max-w-4xl bg-white p-12 rounded-lg shadow-lg space-y-6 z-10 mt-14">
          {/* Seção de boas-vindas */}
          <section className="w-full py-16 text-center">
            <h1 className="text-recifeGold text-4xl sm:text-5xl font-bold">{t("Bem-vindo às Feiras Agroecológicas")}</h1>
            <p className="text-recifeBlue font-bold mt-4 text-lg">{t("As Feiras Agroecológicas são espaços dedicados à venda de produtos orgânicos e sustentáveis, promovendo a conexão entre produtores locais e consumidores conscientes. Nosso objetivo é apoiar a agricultura sustentável, a saúde e a preservação ambiental.")}</p>
          </section>

          {/* Seções empilhadas (cadastros, mapas, sobre, etc.) */}
          <section className="w-full py-16 text-center">
            <h2 className="text-3xl font-bold text-recifeGold">{t("Cadastre-se para Acesso às Feiras")}</h2>
            <p className="text-recifeBlue font-bold mt-4 text-lg">{t("Cadastre-se para ter acesso às informações sobre as feiras agroecológicas em sua região.")}</p>
            <Link to="/register" className="mt-6 inline-block bg-recifeBlue text-white px-6 py-3 rounded-lg shadow-md hover:bg-recifeGold hover:text-recifeBlue transition duration-300">
              {t("Cadastre-se Agora")}
            </Link>
          </section>

          {/* Mapa das Feiras */}
          <section className="w-full py-16 text-center">
            <h2 className="text-3xl font-bold text-recifeGold">{t("Mapa das Feiras")}</h2>
            <p className="text-recifeBlue font-bold mt-4 text-lg">{t("Encontre as feiras agroecológicas mais próximas e conheça os produtores locais que promovem práticas sustentáveis.")}</p>
            
            {/* Mapa */}
            <MapContainer
              center={[-8.0476, -34.8768]}
              zoom={13}
              className="map-container w-full h-96"
            >

              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </MapContainer>

            <Link to="/maps" className="mt-6 inline-block bg-recifeBlue text-white px-6 py-3 rounded-lg shadow-md hover:bg-recifeGold hover:text-recifeBlue transition duration-300">
              {t("Visite as Feiras")}
            </Link>
          </section>

          <section className="w-full py-16 text-center">
            <h2 className="text-3xl font-bold text-recifeGold">{t("Sobre o Projeto")}</h2>
            <p className="text-recifeBlue font-bold mt-4 text-lg">{t("Saiba mais sobre nosso compromisso em promover feiras agroecológicas, práticas de cultivo sustentável e a transformação da relação entre produtores e consumidores.")}</p>
            <Link to="/about" className="mt-6 inline-block bg-recifeBlue text-white px-6 py-3 rounded-lg shadow-md  hover:bg-recifeGold hover:text-recifeBlue transition duration-300">
              {t("Conhecer Mais")}
            </Link>
          </section>
        </div>
      </main>

      {/* Rodapé atualizado */}
      <footer className="bg-recifeBlue text-recifeWhite p-6 text-center mt-auto">
        <p>&copy; 2025 {t("Prefeitura do Recife")}</p>
        <div className="flex justify-center space-x-4 mt-4">
          {[ 
            { href: "https://www.facebook.com/prefeituradorecife", src: "Facebook_logo.png", alt: "Facebook" },
            { href: "https://x.com/prefrecife", src: "x.png", alt: "X" },
            { href: "https://www.instagram.com/prefeiturarecife/", src: "instagram.jpeg", alt: "Instagram" },
            { href: "https://www.youtube.com/channel/UCxMRq-Mv3UimnqOl6aRrM6Q", src: "youtube.png", alt: "YouTube" },
            { href: "https://www.flickr.com/photos/prefeituradorecife/", src: "flickr.png", alt: "Flickr" },
          ].map(({ href, src, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/${src}`} alt={alt} className="w-6 h-6"/>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

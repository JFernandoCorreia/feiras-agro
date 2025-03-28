import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <div className="relative h-screen flex flex-col">
      <header className="bg-recifeBlue  bg-opacity-100 p-4 sm:p-4 shadow-lg">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 items-center text-center sm:text-left">
          {/* Texto da Secretaria */}
          <div className="flex justify-center sm:justify-start mb-2 sm:mb-0">
            <img src={`${process.env.PUBLIC_URL}/images/logo-seau.png`} 
            alt="Prefeitura do Recife" 
            className="w-30 sm:w-56 flex-shrink-0"
            loading="lazy" />
          </div>

          <div className="w-full flex justify-center mb-4 sm:mb-0">
            <a
              href={process.env.REACT_APP_API_URL || 'http://localhost:3000/'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-recifeWhite font-bold text-3xl sm:text-4xl hover:underline"
            >
              Flor da Cidade
            </a>
          </div>
        </div>
      </header>

      {/* Corpo principal */}
      <main className="flex-grow flex flex-col items-center justify-center bg-white bg-opacity-80 p-4 sm:p-8 rounded-lg shadow-lg mb-20" 
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/backimage3.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-8 text-recifeBlue">Bem-vindo as Feiras</h1>
        <div className="space-y-4 w-full sm:w-3/4 max-w-md text-center">
          <Link to="/login" className="bg-recifeBlue text-recifeWhite px-4 sm:px-6 py-3 rounded-lg shadow-xl hover:bg-recifeGold hover:text-recifeBlue transition duration-300 block">
            Acesso para Todos
          </Link>
          <Link to="/register" className="bg-recifeBlue text-recifeWhite px-4 sm:px-6 py-3 rounded-lg shadow-xl hover:bg-recifeGold hover:text-recifeBlue transition duration-300 block">
            Cadastro de Novas Feiras
          </Link>
          <Link to="/maps" className="bg-recifeBlue text-recifeWhite px-4 sm:px-6 py-3 rounded-lg shadow-xl hover:bg-recifeGold hover:text-recifeBlue transition duration-300 block">
            Mapa das Feiras
          </Link>
          <Link to="/sobre" className="bg-recifeBlue text-recifeWhite px-4 sm:px-6 py-3 rounded-lg shadow-xl hover:bg-recifeGold hover:text-recifeBlue transition duration-300 block">
            Sobre o Projeto das Feiras
          </Link>
        </div>
      </main>

      <footer className="bg-recifeBlue bg-opacity-100 p-3 sm:p-4 shadow-lg fixed bottom-0 w-full">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center sm:text-left">
        
        <div className="flex items-center justify-center space-x-4 mx-auto">
          <p className="text-recifeWhite text-base md:text-lg">&copy; 2025 Prefeitura do Recife</p>
          <img src={`${process.env.PUBLIC_URL}/images/transferir7.png`} alt="Prefeitura do Recife" className="w-12 sm:w-16 h-auto" />
        </div>

        <div className="flex items-center space-x-2 md:space-x-2">
          <a href="https://www.facebook.com/prefeituradorecife" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src={`${process.env.PUBLIC_URL}/images/Facebook_logo.png`} alt="Facebook" className="w-5 h-5" />
          </a>
          <a href="https://x.com/prefrecife" target="_blank" rel="noopener noreferrer" aria-label="X">
            <img src={`${process.env.PUBLIC_URL}/images/x.png`} alt="X" className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/prefeiturarecife/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={`${process.env.PUBLIC_URL}/images/instagram.jpeg`} alt="Instagram" className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/channel/UCxMRq-Mv3UimnqOl6aRrM6Q" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <img src={`${process.env.PUBLIC_URL}/images/youtube.png`} alt="YouTube" className="w-5 h-5" />
          </a>
          <a href="https://www.flickr.com/photos/prefeituradorecife/" target="_blank" rel="noopener noreferrer" aria-label="Flickr">
            <img src={`${process.env.PUBLIC_URL}/images/flickr.png`} alt="Flickr" className="w-5 h-5" />
          </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;

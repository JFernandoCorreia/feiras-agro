import React from 'react';

const AboutPage = () => (
  <>
  <div className="container mx-auto p-8 text-recifeBlue text-center bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/images/fundo.jpg')" }}>
    {/* Caixa branca para melhorar a legibilidade do texto */}
    <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Sobre o Projeto de Feiras Agroecológicas</h2>

      <p className="text-lg leading-relaxed max-w-3xl mx-auto">
        O <strong>Projeto Feiras Agroecológicas Recife</strong> nasceu da necessidade de incentivar a produção e o consumo de alimentos orgânicos, sustentáveis e acessíveis à população.  
        A iniciativa busca conectar agricultores familiares, produtores locais e consumidores, promovendo o comércio justo e a valorização da agricultura ecológica.
      </p>

      <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4">
        Através das feiras agroecológicas, proporcionamos um espaço onde os produtores podem vender diretamente ao público, garantindo alimentos mais frescos e saudáveis, sem o uso de agrotóxicos ou insumos químicos.  
        Além disso, o projeto fortalece a economia local e fomenta a conscientização ambiental, incentivando práticas agrícolas que respeitam a biodiversidade e o solo.
      </p>

      <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4">
        As feiras são também espaços de <strong>educação e troca de conhecimentos</strong>, onde ocorrem oficinas, palestras e atividades interativas sobre alimentação saudável, cultivo sustentável e práticas agroecológicas.  
        O objetivo é transformar a relação da população com o alimento, promovendo um estilo de vida mais consciente e equilibrado.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Nossos Parceiros</h3>
      <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-2">
        O projeto conta com o apoio da <strong>Prefeitura do Recife</strong>, cooperativas de agricultores, ONGs e voluntários que trabalham para expandir a agroecologia na cidade.  
        Além disso, diversas instituições acadêmicas e empresas comprometidas com a sustentabilidade contribuem com pesquisa, capacitação e estruturação das feiras.
      </p>

      <p className="text-lg font-bold mt-6 text-recifeBlue">
        🥕🌎 Participe! Apoie a agricultura familiar e ajude a construir uma cidade mais sustentável e saudável! 🌿✨  
      </p>
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

export default AboutPage;

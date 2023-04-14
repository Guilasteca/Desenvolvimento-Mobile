import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    id: 1,
    imageUrl: 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/ea/SSHD_Bow_Icon.png/revision/latest?cb=20210718235443',
    description: 'Arco: este artigo é sobre a arma recorrente. Para o acessório de moda, veja Fita .',
  },
  {
    id: 2,
    imageUrl: 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/e5/LANS_Boomerang_Model.png/revision/latest?cb=20200218224035',
    description: 'Bumerangue: Este artigo é sobre o Boomerang normal. Para outras variantes, veja Magical Boomerang , Gale Boomerang e Nice Boomerang .',
  },
  {
    id: 3,
    imageUrl: 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/5/56/OoT3D_Magic_Bean_Model.png/revision/latest?cb=20200509011110',
    description: 'feijão mágico: Feijões Mágicos são Itens recorrentes na série The Legend of Zelda . Eles podem ser plantados em solo macio , [1] [2] onde eventualmente se transformarão em uma planta mágica que pode transportar Link para lugares inacessíveis.',
  },
];


const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.imageUrl} alt={image.description} style={{ width: '100%' }} />
            <div style={{ padding: '20px' }}>
              <h3>{image.description}</h3>
              <button>Ver detalhes</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default App;

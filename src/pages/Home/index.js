/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {/* {dadosIniciais.length === 0 && (<div>Loading...</div>)} */}

      {dadosIniciais.length > 0 && (
        <div>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription={dadosIniciais[0].videos[0].description}
          />
          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />

          <Carousel
            category={dadosIniciais[1]}
          />

          <Carousel
            category={dadosIniciais[2]}
          />

          <Carousel
            category={dadosIniciais[3]}
          />

          <Carousel
            category={dadosIniciais[4]}
          />
        </div>
      )}
    </PageDefault>
  );
}

export default Home;

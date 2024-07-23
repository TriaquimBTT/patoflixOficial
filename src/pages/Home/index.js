/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Faz a requisição para a API
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        if (categoriasComVideos && categoriasComVideos.length > 0) {
          console.log('Categorias com vídeos:', categoriasComVideos);
          setDadosIniciais(categoriasComVideos);
        } else {
          console.log('Nenhuma categoria com vídeos encontrada.');
        }
      })
      .catch((err) => {
        console.error('Erro ao carregar categorias:', err.message);
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <div>
        Erro ao carregar dados:
        {error}
      </div>
    );
  }

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length > 0 ? (
        <>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo || 'Título não encontrado'}
            url={dadosIniciais[0].videos[0].url || ''}
            videoDescription={dadosIniciais[0].videos[0].description || 'Descrição não encontrada'}
          />
          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />

          {dadosIniciais.slice(1).map((categoria) => (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          ))}
        </>
      ) : (
        <div>Nenhum dado disponível</div>
      )}
    </PageDefault>
  );
}

export default Home;

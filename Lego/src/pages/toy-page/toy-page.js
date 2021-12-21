import React from "react";
import { useSelector} from 'react-redux';
import { ToyBuy } from "../../components/toy-buy";
import { ToyCover } from "../../components/toy-cover/toy-cover";
import { ToyGenre } from "../../components/toy-genre";
import "./toy-page.css";

export const ToyPage = () => {
  const toy = useSelector(state => state.toys.currentToy);

  if(!toy) return null

  return (
    <div className="toy-page">
      <h1 className="toy-page__title">{ toy.title }</h1>
      <div className="toy-page__content">
        <div className="toy-page__left">
          <iframe
            width="90%"
            height="400px"
            src={toy.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="toy-page__right">
          <ToyCover image={toy.image} />
          <p>{toy.description}</p>
          <p className="secondary-text">Популярные метки для этого продукта:</p>
          {toy.genres.map((genre) => (
            <ToyGenre genre={genre} key={genre} />
          ))}
          <div className="toy-page__buy-toy">
            <ToyBuy toy={toy} />
          </div>
        </div>
      </div>
    </div>
  );
};

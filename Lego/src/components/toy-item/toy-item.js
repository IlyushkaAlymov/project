import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToyGenre } from "../toy-genre";
import { ToyBuy } from "../toy-buy";
import { ToyCover } from "../toy-cover/toy-cover";
import { setCurrentToy } from "../../store/toys/reducer";
import "./toy-item.css";

export const ToyItem = ({ toy }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentToy(toy));
    history.push(`/app/${toy.title}`);
  };

  return (
    <div className="toy-item" onClick={handleClick}>
      <ToyCover image={toy.image} />
      <div className="toy-item__details">
        <span className="toy-item__title">{toy.title}</span>
        <div className="toy-item__genre">
          {toy.genres.map((genre) => (
            <ToyGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="toy-item__buy">
          <ToyBuy toy={toy} />
        </div>
      </div>
    </div>
  );
};

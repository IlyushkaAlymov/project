import React from 'react';
import './toy-genre.css';

export const ToyGenre = ({ genre = '' }) => {
    return <span className="toy-genre">{ genre }</span>
}

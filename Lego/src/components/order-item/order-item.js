import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ToyCover } from '../toy-cover/toy-cover';
import './order-item.css';
import { deleteItemFromCart } from '../../store/cart/reducer';

export const OrderItem = ({ toy }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(toy.id))
    }
    return (
        <div className="order-item">
            <div className="order-item__cover">
                <ToyCover image={ toy.image }/>
            </div>
            <div className="order-item__title">
                <span> { toy.title } </span>
            </div>
            <div className="order-item__price">
                <span>{ toy.price } руб.</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div>
    )
}

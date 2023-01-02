import React, { useContext, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import CartItem from '../CartItem/CartItem'
import OverlayInfo from '../OverlayInfo/OverlayInfo'
import AppContext from '../../context'

import { ReactComponent as Arrow } from '../../assets/icons/arrowRight.svg'
import { ReactComponent as CancelIcon } from '../../assets/icons/plus.svg'

import styles from './Overlay.module.scss'


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Overlay = ({ onClose, items = [], onRemove, opened }) => {
    const [isOrderCompleted, setIsOrderCompleted] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { setCartItems, cartItems } = useContext(AppContext);

    const handleClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://63a98589100b7737b99480ec.mockapi.io/orders', {
                items: cartItems
            })
            setOrderId(data.id);
            setIsOrderCompleted(true);
            setCartItems([]);

            //Trouble mockapi
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`https://63a98589100b7737b99480ec.mockapi.io/cart/` + item.id);
                await delay(1000);
            }
        } catch (error) {
            alert('Не удалось создать заказ :(');
        }
        setIsLoading(false);
    }

    const totalPrice = cartItems.reduce((acc, obj) => acc + obj.price, 0);

    return (
        <div className={`${styles.overlay} ${opened && styles.overlayVisible}`}>
            <div className={styles.drawer}>
                <div className={styles.cardHeader}>
                    <h2>Корзина</h2>
                    <button className={styles.buttonCancel} onClick={onClose}>
                        <CancelIcon className={styles.cancel} />
                    </button>
                </div>

                {items.length > 0 ?
                    (<>
                        <div className={styles.cartItems}>
                            {items.map((item) => (
                                <CartItem
                                    name={item.name}
                                    key={item.id}
                                    price={item.price}
                                    imgUrl={item.imgUrl}
                                    onRemove={onRemove}
                                    obj={item}
                                />
                            ))}
                        </div>
                        <div className={styles.cartFooter}>
                            <ul className={styles.cartSubmit}>
                                <li>
                                    <span>Итого: </span>
                                    <div></div>
                                    <b>{totalPrice + Math.round(totalPrice / 100 * 5)} грн </b>
                                </li>
                                <li>
                                    <span>Налог 5%: </span>
                                    <div></div>
                                    <b>{Math.round(totalPrice / 100 * 5)} грн</b>
                                </li>
                            </ul>
                            <button
                                disabled={isLoading}
                                className={styles.buttonSubmit}
                                onClick={handleClickOrder}
                            >
                                <span>Оформить заказ</span>
                                <Arrow className={styles.arrowRight} />
                            </button>
                        </div>
                    </>) :
                    (<OverlayInfo
                        title={isOrderCompleted ? 'Заказ оформлен!' : 'Корзина пустая'}
                        description={isOrderCompleted ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                        imgSource={isOrderCompleted ? 'images/orderSuccess.webp' : 'images/cartEmpty.webp'}
                    />)
                }
            </div>
        </div>
    )
}

Overlay.propTypes = {
    onClose: PropTypes.func,
    items: PropTypes.array,
    onRemove: PropTypes.func,
    opened: PropTypes.bool
}

export default Overlay
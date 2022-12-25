import React from 'react'
import styles from './CartItem.module.scss'
import SneakersImg from '../../assets/img/sneakers1.jpg'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import { ReactComponent as CancelIcon } from '../../assets/icons/plus.svg'

const CartItem = () => {
    return (
        <div className={styles.cartItem}>
            <img src={SneakersImg} alt="Sneakers" />
            <div className={styles.cartItem__info}>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <span>12 999 грн</span>
            </div>
            <ButtonPrimary>
                <CancelIcon className={styles.cancel} />
            </ButtonPrimary>
        </div>
    )
}

export default CartItem
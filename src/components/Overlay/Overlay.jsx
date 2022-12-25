import React from 'react'
import CartItem from '../CartItem/CartItem'
import { ReactComponent as ArrowRight } from '../../assets/icons/arrowRight.svg'
import styles from './Overlay.module.scss'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import { ReactComponent as CancelIcon } from '../../assets/icons/plus.svg'

const Overlay = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <div className={styles.cardHeader}>
                    <h2>Корзина</h2>
                    <ButtonPrimary>
                        <CancelIcon className={styles.cancel}/>
                    </ButtonPrimary>
                </div>
                <div className={styles.cartItems}>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <ul className={styles.cartSubmit}>
                    <li>
                        <span>Итого: </span>
                        <div></div>
                        <b>21 498 грн </b>
                    </li>
                    <li>
                        <span>Налог 5%: </span>
                        <div></div>
                        <b>1074 грн</b>
                    </li>
                </ul>
                <button className={styles.buttonSubmit}>
                    <span>Оформить заказ</span>
                    <ArrowRight className={styles.arrowRight} />
                </button>
            </div>
        </div>
    )
}

export default Overlay
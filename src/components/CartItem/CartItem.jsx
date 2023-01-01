import React from 'react'
import styles from './CartItem.module.scss'
import PropTypes from 'prop-types'
import { ReactComponent as CancelIcon } from '../../assets/icons/plus.svg'

const CartItem = ({ name, price, imgUrl, onRemove, obj }) => {
    return (
        <div className={styles.cartItem}>
            <img src={imgUrl} alt="Sneakers" />
            <div className={styles.cartItem__info}>
                <p>{name}</p>
                <span>{price} грн</span>
            </div>
            <button className={styles.remove} onClick={() => onRemove(obj.id)}>
                <CancelIcon className={styles.cancel} />
            </button>
        </div>
    )
}

CartItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    imgUrl: PropTypes.string,
    onRemove: PropTypes.func,
    id: PropTypes.number
}

export default CartItem
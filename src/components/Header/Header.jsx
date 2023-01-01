import React, { useContext } from 'react'
import styles from './Header.module.scss'
import PropTypes from 'prop-types'
import Logo from '../../assets/img/logo.jpg'
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg'
import { ReactComponent as FavoriteIcon } from '../../assets/icons/favorite.svg'
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg'
import { Link } from 'react-router-dom'
import AppContext from '../../context'

const Header = ({ onClickCart }) => {

    const { cartItems } = useContext(AppContext);

    const totalPrice = cartItems.reduce((acc, obj) => acc + obj.price, 0);

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <Link to='/'>
                        <div className={styles.header__left}>
                            <img src={Logo} alt="logo" />
                            <div className={styles.header__left__text}>
                                <h3>React Sneakers</h3>
                                <p>Магазин лучших кроссовок</p>
                            </div>
                        </div>
                    </Link>
                    <ul className={styles.header__right}>
                        <li onClick={onClickCart}>
                            <Link to='' className={styles.header__right__cart}>
                                <CartIcon />
                                <span>{totalPrice} ₴</span>
                            </Link>
                        </li>
                        <li><Link to='/favorites' className={styles.header__right__favorite}><FavoriteIcon /></Link></li>
                        <li><Link to='/orders' className={styles.header__right__user}><UserIcon /></Link></li>
                    </ul>
                </div>
            </div>
        </header >
    )
}

Header.propTypes = {
    onClickCart: PropTypes.func
}

export default Header
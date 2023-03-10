import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Header.module.scss'

import Logo from '../../assets/img/logo.jpg'
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg'
import { ReactComponent as FavoriteIcon } from '../../assets/icons/favorite.svg'
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg'
import { ReactComponent as MenuIcon } from '../../assets/icons/menuHamburger.svg'
import { ReactComponent as CancelIcon } from '../../assets/icons/plus.svg'

import AppContext from '../../context'


const Header = ({ onClickCart }) => {

    const { cartItems } = useContext(AppContext);
    const [isMenuOpened, setIsMenuOpened] = useState(false);


    const totalPrice = cartItems.reduce((acc, obj) => acc + obj.price, 0);

    const handleClickHamburgerMenu = () => {
        setIsMenuOpened(!isMenuOpened);
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <div className={styles.header__main}>
                        <Link to='/ReactSneakers/'>
                            <div className={styles.header__left}>
                                <img src={Logo} alt="logo" />
                                <div className={styles.header__left__text}>
                                    <h3>React Sneakers</h3>
                                    <p>Магазин лучших кроссовок</p>
                                </div>
                            </div>
                        </Link>
                        <div
                            className={styles.header__burger}
                            onClick={handleClickHamburgerMenu}
                        >
                            <MenuIcon className={styles.menu} />
                        </div>
                        <ul className={styles.header__right}>
                            <li onClick={onClickCart}>
                                <button className={styles.header__right__cart}>
                                    <CartIcon />
                                    <span>{totalPrice} ₴</span>
                                </button>
                            </li>
                            <li><Link to='/ReactSneakers/favorites' className={styles.header__right__favorite}><FavoriteIcon /></Link></li>
                            <li><Link to='/ReactSneakers/orders' className={styles.header__right__user}><UserIcon /></Link></li>
                        </ul>
                    </div>
                    {isMenuOpened &&
                        <ul className={styles.header__burger__opened}>
                            <li onClick={onClickCart}>
                                <button onClick={() => setIsMenuOpened(false)}>
                                    <CartIcon className={styles.icon} />
                                    <span>Корзина</span>
                                </button>
                            </li>
                            <li>
                                <Link
                                    to='/ReactSneakers/favorites'
                                    className={styles.header__burger__body__menu__favorite}
                                    onClick={() => setIsMenuOpened(false)}
                                >
                                    <FavoriteIcon className={styles.icon} />
                                    Мои закладки
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/ReactSneakers/orders'
                                    className={styles.header__burger__body__menu__orders}
                                    onClick={() => setIsMenuOpened(false)}
                                >
                                    <UserIcon className={styles.icon} />
                                    Мои заказы
                                </Link>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </header >
    )
}

Header.propTypes = {
    onClickCart: PropTypes.func
}

export default Header
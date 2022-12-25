import React from 'react'
import styles from './Header.module.scss'

import Logo from '../../assets/img/logo.jpg'
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg'
import { ReactComponent as FavoriteIcon } from '../../assets/icons/favorite.svg'
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header__wrapper}>
                    <div className={styles.header__left}>
                        <img src={Logo} alt="logo" />
                        <div className={styles.header__left__text}>
                            <Link to='/'><h3>React Sneakers</h3></Link>
                            <p>Магазин лучших кроссовок</p>
                        </div>
                    </div>
                    <ul className={styles.header__right}>
                        <li>
                            <Link to='' className={styles.header__right__cart}>
                                <CartIcon />
                                <span>1205 грн</span>
                            </Link>
                        </li>
                        <li><Link to=''><FavoriteIcon /></Link></li>
                        <li><Link to=''><UserIcon /></Link></li>
                    </ul>
                </div>
            </div>
        </header >
    )
}

export default Header
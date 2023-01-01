import React, { useContext } from 'react'
import AppContext from '../../context'
import PropTypes from 'prop-types'
import styles from './OverlayInfo.module.scss'
import { ReactComponent as Arrow } from '../../assets/icons/arrowRight.svg'

const OverlayInfo = ({ title, description, imgSource }) => {

    const { setCartOpened } = useContext(AppContext);

    return (
        <div className={styles.cartEmpty}>
            <div className={styles.cartEmpty__header}>
                <div className={styles.cartEmpty__header__image}>
                    <img src={imgSource} alt="cart-empty" />
                </div>
                <div className={styles.cartEmpty__header__text}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <button
                className={styles.buttonPrev}
                onClick={() => setCartOpened(false)}
            >
                <Arrow className={styles.arrowLeft} />
                <span>Вернуться назад</span>
            </button>
        </div>
    )
}

OverlayInfo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imgSource: PropTypes.string,
}

export default OverlayInfo
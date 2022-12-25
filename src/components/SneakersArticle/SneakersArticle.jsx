import React from 'react'
import styles from './SneakersArticle.module.scss'
import SneakersImage from '../../assets/img/sneakers1.jpg'
import { ReactComponent as FavoriteIcon } from '../../assets/icons/favorite.svg'
import { ReactComponent as AddIcon } from '../../assets/icons/plus.svg'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'

const SneakersArticle = () => {
  return (
    <div className={styles.sneakersArticle}>
      <div className={styles.sneakersArticle__image}>
        <img src={SneakersImage} alt="sneakers" />
        <ButtonPrimary className={styles.favorite}>
          <FavoriteIcon />
        </ButtonPrimary>
      </div>
      <p className={styles.sneakersArticle__name}>
        Nike Blazer Mid Suede
      </p>
      <div className={styles.sneakersArticle__footer}>
        <div className={styles.sneakersArticle__price}>
          <span>Цена:</span>
          <p>12 999 грн</p>
        </div>
        <ButtonPrimary>
          <AddIcon />
        </ButtonPrimary>
      </div>
    </div >
  )
}

export default SneakersArticle
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'

import styles from './SneakersArticle.module.scss'

import { ReactComponent as UnlikedIcon } from '../../assets/icons/unliked.svg'
import { ReactComponent as LikedIcon } from '../../assets/icons/liked.svg'
import { ReactComponent as AddIcon } from '../../assets/icons/plus.svg'
import { ReactComponent as CheckmarkIcon } from '../../assets/icons/checkmark.svg'

import AppContext from '../../context'


const SneakersArticle = (
  {
    id,
    name,
    price,
    imgUrl,
    onPlus,
    favorited = false,
    onFavorite,
    loading = false
  }
) => {

  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const { isItemAdded } = useContext(AppContext);

  const obj = { id, parentId: id, name, price, imgUrl };

  const handleClick = () => {
    onPlus(obj);
  }

  const handleFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.sneakersArticle}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.sneakersArticle__image}>
            <img src={imgUrl} alt="sneakers" />
            {onFavorite && <button
              className={isFavorite ? (styles.liked) : (styles.unliked)}
              onClick={handleFavorite}
            >
              {isFavorite ? <LikedIcon /> : <UnlikedIcon />}
            </button>}

          </div>
          <p className={styles.sneakersArticle__name}>
            {name}
          </p>
          <div className={styles.sneakersArticle__footer}>
            <div className={styles.sneakersArticle__price}>
              <span>Цена:</span>
              <p>{price} ₴</p>
            </div>
            {onPlus && <button
              className={isItemAdded(id) ? (styles.added) : (styles.plus)}
              onClick={handleClick}
            >
              {isItemAdded(id) ? <CheckmarkIcon /> : <AddIcon />}
            </button>
            }
          </div>
        </>
      )}
    </div >
  )
}

SneakersArticle.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  imgUrl: PropTypes.string,
  onPlus: PropTypes.func,
  onFavorite: PropTypes.func,
  loading: PropTypes.bool
}

export default SneakersArticle
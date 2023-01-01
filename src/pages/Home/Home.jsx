import React, { useContext } from 'react'
import styles from './Home.module.scss'
import SneakersArticle from '../../components/SneakersArticle/SneakersArticle'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as ClearIcon } from '../../assets/icons/plus.svg'
import PropTypes from 'prop-types'
import AppContext from '../../context'

const Home = (
  {
    searchValue,
    onChangeSearchInput,
    onRemoveSearchItems,
    isLoading
  }
) => {

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <SneakersArticle
        key={index}
        {...item}
        onPlus={(item) => onAddToCart(item)}
        onFavorite={(item) => onAddToFavorite(item)}
        loading={isLoading}
      />
    ));
  }

  const { items, onAddToCart, onAddToFavorite } = useContext(AppContext);

  return (
    <main>
      <div className="container">
        <div className={styles.page}>
          <section className={styles.slider}>

          </section>
          <section className={styles.sneakers}>
            <div className={styles.sneakers__wrapper}>
              <div className={styles.sneakers__header}>
                <h1>
                  {
                    searchValue ?
                      `Поиск по запросу: ${searchValue}` :
                      'Все кроссовки'
                  }
                </h1>
                <div className={styles.sneakers__header__search}>
                  <label htmlFor="search">
                    <SearchIcon className={styles.searchIcon} />
                  </label>
                  <input
                    onChange={onChangeSearchInput}
                    type="text"
                    placeholder='Поиск...'
                    value={searchValue}
                  />
                  {searchValue && (
                    <button
                      className={styles.clear}
                      onClick={onRemoveSearchItems}
                    >
                      <ClearIcon className={styles.clear__icon} />
                    </button>
                  )}

                </div>

              </div>
              <div className={styles.sneakers__list}>
                {renderItems()}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

Home.propTypes = {
  items: PropTypes.array,
  searchValue: PropTypes.string,
  onChangeSearchInput: PropTypes.func,
  onAddToFavorite: PropTypes.func,
  onAddToCart: PropTypes.func,
  onRemoveSearchItems: PropTypes.func,
  cartItems: PropTypes.array,
  isReady: PropTypes.bool
}

export default Home
import React from 'react'
import styles from './Home.module.scss'
import Layout from '../../components/Layout/Layout'
import SneakersArticle from '../../components/SneakersArticle/SneakersArticle'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'

const Home = () => {
  return (
    <Layout>
      <section className={styles.slider}>

      </section>
      <section className={styles.sneakers}>
        <div className={styles.sneakers__wrapper}>
          <div className={styles.sneakers__header}>
            <h1>Все кроссовки</h1>
            <div className={styles.sneakers__header__search}>
              <label htmlFor="search"><SearchIcon className={styles.searchIcon} /></label>
              <input
                type="text"
                name="search"
                id="search"
                placeholder='Поиск...'
              />
            </div>

          </div>
          <div className={styles.sneakers__list}>
            <SneakersArticle />
            <SneakersArticle />
            <SneakersArticle />
            <SneakersArticle />
          </div>
        </div>
      </section>
    </Layout >
  )
}

export default Home
import React, { useContext } from 'react'
import styles from './Favorites.module.scss'
import SneakersArticle from '../../components/SneakersArticle/SneakersArticle'
import AppContext from '../../context'
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg'
import { Link } from 'react-router-dom'
import { ReactComponent as SadSmile } from '../../assets/icons/smile1.svg'
import { ReactComponent as Arrow } from '../../assets/icons/arrowRight.svg'

const Favorites = () => {

    const { favorites, onAddToFavorite } = useContext(AppContext);

    return (
        <main>
            <div className="container">
                <section className={styles.favorites}>
                    {favorites.length > 0 ? (
                        <div className={styles.favorites__wrapper}>
                            <div className={styles.favorites__header}>
                                <Link to='/' className={styles.favorites__header__back}>
                                    <BackIcon />
                                </Link>
                                <h1 className={styles.favorites__header__caption}>Мои закладки </h1>
                            </div>



                            <div className={styles.favorites__list}>
                                {favorites.map((item) => (
                                    <SneakersArticle
                                        key={item.id}
                                        {...item}
                                        favorited={true}
                                        onFavorite={onAddToFavorite}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.noItems__wrapper}>
                            <div className={styles.noItems}>
                                <div className={styles.noItems__header}>
                                    <SadSmile className={styles.noItems__header__image} />
                                    <div className={styles.noItems__header__text}>
                                        <h3>Закладок нет :(</h3>
                                        <p>Вы ничего не добавляли в закладки</p>
                                    </div>
                                </div>
                                <Link to='/' className={styles.buttonBack}>
                                    <Arrow className={styles.arrowLeft} />
                                    <span>Вернуться назад</span>
                                </Link>
                            </div>
                        </div>

                    )}

                </section>
            </div>
        </main >
    )
}


export default Favorites
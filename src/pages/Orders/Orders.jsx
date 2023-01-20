import React, { useState, useEffect } from 'react'
import styles from './Orders.module.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SneakersArticle from '../../components/SneakersArticle/SneakersArticle'
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg'
import { ReactComponent as SadSmile } from '../../assets/icons/smile1.svg'
import { ReactComponent as Arrow } from '../../assets/icons/arrowRight.svg'

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://63a98589100b7737b99480ec.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при запросе заказов :(');
                console.log(error);
            }

        })();


    }, [])

    return (
        <main>
            <div className="container">
                <section className={`${styles.orders} ${orders.length > 0 ? '' : styles.ordersFullHeight}`}>
                    {orders.length > 0 ? (
                        <div className={styles.orders__wrapper}>
                            <div className={styles.orders__header}>
                                <Link to='/ReactSneakers/' className={styles.orders__header__back}>
                                    <BackIcon />
                                </Link>
                                <h1 className={styles.orders__header__caption}>Мои заказы</h1>
                            </div>
                            <div className={styles.orders__list}>
                                {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                                    <SneakersArticle
                                        key={index}
                                        {...item}
                                        loading={isLoading}
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
                                        <h3>У вас нет заказов</h3>
                                        <p>Вы нищеброд? <br /> Оформите хотя бы один заказ.</p>
                                    </div>
                                </div>
                                <Link to='/ReactSneakers/' className={styles.buttonBack}>
                                    <Arrow className={styles.arrowLeft} />
                                    <span>Вернуться назад</span>
                                </Link>
                            </div>
                        </div>
                    )
                    }

                </section>
            </div>
        </main>

    )
}

export default Orders
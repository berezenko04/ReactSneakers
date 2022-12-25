import React from 'react'
import Header from '../Header/Header'
import PropTypes from 'prop-types'
import styles from './Layout.module.scss'
import Overlay from '../Overlay/Overlay'


const Layout = ({ children }) => {
    return (
        <>
            <Overlay />
            <div className={styles.body}>
                <div className={styles.wrapper}>
                    <div className="container">
                        <Header />
                        <main>
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.element
}

export default Layout
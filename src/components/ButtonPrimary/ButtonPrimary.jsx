import React from 'react'
import styles from './ButtonPrimary.module.scss'
import PropTypes from 'prop-types'

const ButtonPrimary = ({ children }) => {
    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}

ButtonPrimary.propTypes = {
    children: PropTypes.element
}

export default ButtonPrimary
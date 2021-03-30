import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import styles from '../layout/layout.module.css'

const layout = (props) => {
    return (
        <div className={styles.container}>
            <div
                className={styles.header}>
                <Header

                    {
                    ...props
                    } />
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
            <div
                className={styles.footer}>
                <Footer className={styles.footer} />
            </div>
        </ div>
    )
}

export default layout

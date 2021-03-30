import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'
import Navbar from '../navbar/navbar'

const header = (props) => {
    return (
        <div
            style={{
                background: "no-repeat linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(" + props.headerimg + ") center/100% no-repeat",
                width: "100%",
                height: "100%",
            }}
        >
            <div classname={styles.container}>
                <div className={styles.top}>
                    <div className={styles.image}>
                        <Link href="/">
                            <Image
                                src='/watotokabisa.svg'
                                width={200}
                                height={200} />
                        </Link>
                    </div>
                    <Navbar />
                </div>
                <h1 className={styles.title}>{props.title}</h1>
                <h3 className={styles.title}>{props.subtitle}</h3>
            </div>
        </div>
    )
}

export default header
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/Link'
import { useRouter } from "next/router"


const navbar = (props) => {
    const router = useRouter()
    return (
        <nav>
            <div className={styles.nav}>
                <Link href="/donate">
                    <a className={router.pathname == "/donate" ? styles.navBtnActive : styles.navBtn}>
                        Spenden
                        </a>
                </Link>
                <Link href="/projects">
                    <a className={router.pathname == "/projects" ? styles.navBtnActive : styles.navBtn}>
                        Projekte
                        </a>
                </Link>
                <Link href="/membership">
                    <a className={router.pathname == "/membership" ? styles.navBtnActive : styles.navBtn}>
                        Mitglied werden
                        </a>
                </Link>
                <Link href="/giftcards">
                    <a className={router.pathname == "/giftcards" ? styles.navBtnActive : styles.navBtn}>
                        Geschenkkarten
                        </a>
                </Link>
            </div>
        </nav>
    )
}
export default navbar
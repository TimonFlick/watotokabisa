import React from 'react'
import Layout from '../components/layout/layout'
import styles from '../styles/home.module.css'
import Image from 'next/image'

const home = (props) => {
    return (
        <Layout
            headerimg='./header_4.jpg'
            title="Karibu!"
            subtitle="auf der WEBSEITE von Watoto Kabisa">
            <div className={styles.container}>
                <img 
                src="/header_3.jpg"
                className={styles.image}
                width={400}
                height={400}
                />
                <div className={styles.text}>
                    <h3>Wer sind wir?</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et ex et urna ullamcorper consequat nec sed nisi. Aliquam auctor sem dignissim leo imperdiet, in interdum ante fermentum. Mauris et metus ut lacus congue iaculis a a lacus. Curabitur fringilla malesuada pretium. Quisque eget facilisis odio. Praesent tellus quam, vestibulum ac sem non, faucibus convallis erat. Sed vel lorem tincidunt, sodales tortor auctor, accumsan diam.
                        Aliquam placerat aliquet purus, quis volutpat enim tincidunt vel. Nunc nec maximus libero. Nulla eget odio volutpat, dictum quam at, placerat sapien. Duis suscipit eu nisl pretium scelerisque. Phasellus aliquam, mi quis suscipit sodales, mi nisl rutrum lectus.
                    </p>
                </div>


            </div>

        </Layout>
    )
}

export default home
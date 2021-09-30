//This components folder contains any components that are not pages (routes)
//Convention: use lowercase for pages and Uppercase for any other components
//Layout will wrap around any child components (_app.js)
import Nav from './Nav'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout
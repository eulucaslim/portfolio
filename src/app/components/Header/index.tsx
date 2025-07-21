import styles from './styles.module.scss'

export function Header(){
    return (
        <header className={styles.contentHeader}>
            <div className={styles.container}> 
                <img src="/logo.png" alt="Profile Picture" />
                <nav className={styles.navBar}>
                    <a href="#">Home</a>
                    <a href="#">Infos</a>
                    <a href="#">About</a>
                </nav>
            </div>
        </header>
    );
}
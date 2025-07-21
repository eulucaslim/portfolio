import styles from './styles.module.scss'

export function MainPage(){
    return (
        <main>
            <div className={styles.mainContent}>
                <img src="/profile.jpeg" alt="profile" />
            </div>
        </main>
    )
}

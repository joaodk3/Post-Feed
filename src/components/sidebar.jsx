import styles from './sidebar.module.css';
import { Pencil } from '@phosphor-icons/react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}> 
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1623476408624-721c9185d569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <img 
                    className={styles.avatar}
                    src="https://github.com/joaodk3.png" />
            </div>


            <div className={styles.profile}>
                <strong> Victor Santos </strong>
                <span> Web Developer </span>
            </div>            

            <footer>
                <a href="#"> 
                <Pencil size={20} />
                    Edit Profile    
                </a>
            </footer>
        </aside> 
    )
};
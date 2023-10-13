import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr';
import styles from './comment.module.css';
import { Avatar } from './avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gportdev.png"/>
            
            <div className={styles.commentBox}>
                
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Gabriel Porteiro </strong>
                            <time dateTime='2023-10-11 20:13:04' title="11 de Maio as 20:13"> Cerca de 1 hora atras </time>
                        </div>

                        <button type="button" title="Deletar Comentario">
                            <Trash size={24} />
                        </button>
                    </header>


                    <p>Very good! Congratulations!</p>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
                
            </div>
        </div>
    </div>
    )
}
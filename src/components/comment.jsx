import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr';
import styles from './comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/joaodk3.png" alt=""/>
            <div className={styles.commentBox}>
                
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Joao Santos </strong>
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
import styles from './post.module.css';

export function Post(){    
    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://github.com/joaodk3.png" />
                    <div className={styles.authorInfo}> 
                        <strong> Joao Santos </strong>
                        <span> Web Developer </span>
                    </div>
                </div>

                <time dateTime='2023-10-11 20:13:04' title="11 de Maio as 20:13"> Publicado a 1 hora </time>
            </header>

            <div className={styles.content}>
                <p>Hello y'all! 👋 </p>
                <p>I just uploaded another project to my portfolio. It's a project I created during the NLW Return, a Rocketseat event. The project's name is Feed Post 🚀</p>
                <p><a href="#">👉{" "} jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a> {" "}
                    <a href="#">#nlw </a> {" "}
                    <a href="#">#rocketseat</a> {" "}
                </p>
            </div>

            <form className={styles.commentForm}>
                <storng> Deixe seu feedback </storng>
                <textarea placeholder="Leave your comment" />
                <footer>
                    <button type="submit"> Comment </button>
                </footer>

            </form>
        </article>  


    )
}
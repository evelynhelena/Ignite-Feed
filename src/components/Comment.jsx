import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/evelynhelena.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Evelyn Helena</strong>
              <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

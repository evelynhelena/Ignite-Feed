import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import {format, formatDistanceToNow} from "date-fns"
import ptBr from "date-fns/locale/pt-BR"
export function Post({author,publishedAt,content}) {

  const publishedDateFormat = format(publishedAt,"dd 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBr
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBr,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>

      {content.map(({type,content}) => {
        if(type === 'paragraph' ){
          return <p>{content}</p>
        }else{
          return <p><a href='#'>{content}</a></p>
        }
      })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixa um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

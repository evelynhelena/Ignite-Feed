import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { useState } from "react";
export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([{id:1 , content: "Post muito bacana!"}]);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormat = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBr,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCreateComment() {
    event.preventDefault();
    setComments([...comments, {id: comments.length + 1, content: newComment}]);
    setNewComment('');
  }

  function deleteComment(id){
    setComments(comments.filter(el => el.id !== id));
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity("Este campo é obrigatório");
    console.log(event)
  }

  const isNewCommentEmpty = !newComment;

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
        {content.map(({ type, content, id }) => {
          if (type === "paragraph") {
            return <p key={id}>{content}</p>;
          } else {
            return (
              <p key={id}>
                <a href="#">{content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixa um comentário..."
          value={newComment}
          onChange={({ target }) => {setNewComment(target.value); event.target.setCustomValidity("");}}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment.id} id={comment.id} content={comment.content} onDeleteComment={deleteComment}/>
        ))}
      </div>
    </article>
  );
}

import { useEffect, useState } from "react";
import styles from "./Comments.module.scss";
import { useCommentsStore } from "../../store/commentsStore";
import { TextField } from "@mui/material";

export const Comments = ({ id }) => {
  const { getCommentsByProductId, comments, createComment, commentDelete } =
    useCommentsStore();
  const [isComment, setComment] = useState("");

  useEffect(() => {
    getCommentsByProductId(id);
  }, []);

  const submitComment = async (e) => {
    e.preventDefault();
    if (isComment !== "") {
      createComment({
        comment: isComment,
        productId: id,
      });
    }
    setComment("");
  };

  return (
    <div className={styles.comments}>
      {comments &&
        comments.map((comment) => (
          <div className={styles.comment} key={comment._id}>
            <p>{comment.comment}</p>
            <button onClick={() => commentDelete(comment._id)}>DELETE</button>
          </div>
        ))}
      <form onSubmit={submitComment}>
        <TextField
          value={isComment}
          onChange={(e) => setComment(e.target.value)}
          label="Comment"
          color="black"
          fullWidth
          variant="outlined"
        />
      </form>
    </div>
  );
};

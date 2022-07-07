import React, { createRef } from "react";
import { MyPostPropsType } from "../../../redux/State";
import styles from "./MyPost.module.css";
import { Post } from "./Post/Post";
import { addPost } from "../../../redux/State";
import { Button } from "@material-ui/core";

export const MyPost = (props: MyPostPropsType) => {
  let postsElements = props.posts.map((post) => (
    <Post key={post.id} post={post.post} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    let text = newPostElement.current ? newPostElement.current.value : "---";
    props.addPostCallBack(text);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <Button variant={"contained"} color={"inherit"} onClick={addPost}>
            Add post
          </Button>
        </div>
        <div className={styles.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

import React from "react";
import { MyPostPropsType } from "../../../redux/State";
import styles from "./MyPost.module.css";
import { Post } from "./Post/Post";
import { Button } from "@material-ui/core";

export const MyPost = (props: MyPostPropsType) => {
  let postsElements = props.posts.map((post) => (
    <Post key={post.id} post={post.post} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
   debugger; 
    props.addPostCallBack();
    props.updateNewPostText("");
  };

  let onPostChange = () => {
    debugger; 
    let text = newPostElement.current ? newPostElement.current.value : "";
    props.updateNewPostText(text);
 
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.messageForNewPost}
          ></textarea>
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

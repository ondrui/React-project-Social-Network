import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    //props.addPost();
    props.dispatch({
      type: 'ADD-POST',
    });
    //очистку поля после отправки переносим в итоге в state.js
  };

  let onPostChange = (event) => {
    let text = newPostElement.current.value;
    //props.updateNewPostText(text);
    let action = {
      type: 'UPDATE-NEW-POST-TEXT',
      newTextPost: text,
    };
    props.dispatch(action);
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            //placeholder='Hi,'
            value={props.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

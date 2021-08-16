import React from "react";
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  /*let posts = [
    {id: 1, message: 'Good news!!!', likeCount: 15},
    {id: 2, message: 'It\'s my first post', likeCount: 27},
    {id: 3, message: 'Blabla', likeCount: 21},
    {id: 4, message: 'yo yo yo', likeCount: 10}
  ]*/

  let postsElements = props.posts
    .map(p => <Post message={p.message} likeCount={p.likeCount}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    //let text = newPostElement.current.value;
    //let text = props.postText.value;
    props.addPost();
    //очистку поля после отправки переносим в итоге в state.js
    //props.postText.value = '';
    //newPostElement.current.value = '';
    //props.updateNewPostText('');
  }

  let onPostChange = (event) => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    //props.changePostText1();
    //props.changePostText.value = event.target.value;

  }

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            //placeholder='Hi,'
            value={props.newPostText}
            //value={props.changePostText.value}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;

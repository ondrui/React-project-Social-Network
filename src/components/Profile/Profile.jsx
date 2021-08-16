 import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
 import ProfileInfo from "./Profileinfo/Profileinfo";


const Profile = (props) => {
 /* let posts = [
    {id: 1, message: 'Good news!!!', likeCount: 15},
    {id: 2, message: 'It\'s my first post', likeCount: 27},
    {id: 3, message: 'Blabla', likeCount: 21},
    {id: 4, message: 'yo yo yo', likeCount: 10}
  ]*/

  return (
    <div>
      <ProfileInfo/>
      <MyPosts
        posts={props.profilePage.posts}
        postText={props.profilePage.postText}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
        changePostText1={props.changePostText}
      />
    </div>
  );
};

export default Profile;
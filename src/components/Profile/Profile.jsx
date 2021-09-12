//import style from './Profile.module.css';
import ProfileInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;

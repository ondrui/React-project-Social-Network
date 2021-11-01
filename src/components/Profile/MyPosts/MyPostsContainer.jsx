import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    //что передается в props - аргументы какие и отслеживаются изменения в этих свойствах
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }

}

let mapDispatchToProps = (dispatch) => {
  return {
    //колбеки передаются через props
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => dispatch(addPostActionCreator())
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

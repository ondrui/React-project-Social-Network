const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  newPostText: 'Hi, ',
  posts: [
    {id: 1, message: 'Good news!!!', likeCount: 15},
    {id: 2, message: 'It\'s my first post', likeCount: 27},
    {id: 3, message: 'Blabla', likeCount: 21},
    {id: 4, message: 'yo yo yo', likeCount: 10},
  ],
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likeCount: 1,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case  UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newTextPost
      };
    case  SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newTextPost: text,
  };
};
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export default profileReducer;
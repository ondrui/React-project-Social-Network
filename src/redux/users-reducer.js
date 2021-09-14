const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    /*{
      id: 1,
      photoUrl: 'https://api.bnnapp.com/__proxy_host/i.mycdn.me/image?id=897778402728&t=43&plc=MOBILE&ts=00000000310000034c&tkn=*Vaz3pKenDfwAMAHu83JG_4RtMm4',
      followed: false,
      fullName: 'Andrei',
      status: 'I am a boss',
      location: {city: 'Moscow', country: 'Russia'}
    },
    {
      id: 2,
      photoUrl: 'https://chpic.su/_data/stickers/t/thelegendofaang/thelegendofaang_106.webp',
      followed: true,
      fullName: 'Olga',
      status: 'Cool girl',
      location: {city: 'Moscow', country: 'Russia'}
    },
    {
      id: 3,
      photoUrl: 'https://avatanplus.com/files/photos/original/567e8dd041ec8151de59f58e.jpg',
      followed: false,
      fullName: 'Tom',
      status: 'Good boy',
      location: {city: 'Chicago', country: 'USA'}
    }*/
  ]
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userId) {
              return {...u, followed: true}
            }
            return u
          })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state;
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ( {type: UNFOLLOW, userId} );
export const setUsersAC = (users) => ( {type: SET_USERS, users} );



export default usersReducer;
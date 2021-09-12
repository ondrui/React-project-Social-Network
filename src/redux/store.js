import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsListReducer from "./friendsList-reducer";

let store = {
  _state: {
    profilePage: {
      newPostText: 'Hi, ',
      posts: [
        {id: 1, message: 'Good news!!!', likeCount: 15},
        {id: 2, message: "It's my first post", likeCount: 27},
        {id: 3, message: 'Blabla', likeCount: 21},
        {id: 4, message: 'yo yo yo', likeCount: 10},
      ],
    },
    dialogsPage: {
      newMessageBody: '',
      dialogs: [
        {
          id: 1,
          name: 'Andrei',
          avatar:
            'https://api.bnnapp.com/__proxy_host/i.mycdn.me/image?id=897778402728&t=43&plc=MOBILE&ts=00000000310000034c&tkn=*Vaz3pKenDfwAMAHu83JG_4RtMm4',
        },
        {
          id: 2,
          name: 'Lena',
          avatar:
            'https://chpic.su/_data/stickers/t/thelegendofaang/thelegendofaang_106.webp',
        },
        {
          id: 3,
          name: 'Sergei',
          avatar:
            'https://chpic.su/_data/stickers/t/thelegendofaang/thelegendofaang_105.webp',
        },
        {
          id: 4,
          name: 'Masha',
          avatar:
            'https://static-s.aa-cdn.net/img/gp/20600012995755/i8fGO7LrghUKcBCijVf09Vy_FET5-tCh35O6FTFjkHUMixnCRokmaKMZOKNvf4k2P3Y=s300?v=1',
        },
        {
          id: 5,
          name: 'Alex',
          avatar:
            'https://www.sleekfood.com/wp-content/uploads/2021/02/WhatsApp-avatar-stickers.png',
        },
        {
          id: 6,
          name: 'Tom',
          avatar:
            'https://avatanplus.com/files/photos/original/567e8dd041ec8151de59f58e.jpg',
        },
      ],
      messages: [
        {id: 1, message: 'Hi', owner: 1},
        {id: 2, message: 'How are you?', owner: 0},
        {id: 3, message: 'Go home!', owner: 1},
        {id: 4, message: 'Go', owner: 0},
        {id: 5, message: 'Ga ga', owner: 1},
      ],
    },
    friendsList: {
      list: [
        {
          id: 4,
          name: 'Masha',
          avatar:
            'https://static-s.aa-cdn.net/img/gp/20600012995755/i8fGO7LrghUKcBCijVf09Vy_FET5-tCh35O6FTFjkHUMixnCRokmaKMZOKNvf4k2P3Y=s300?v=1',
        },
        {
          id: 5,
          name: 'Alex',
          avatar:
            'https://www.sleekfood.com/wp-content/uploads/2021/02/WhatsApp-avatar-stickers.png',
        },
        {
          id: 6,
          name: 'Tom',
          avatar:
            'https://avatanplus.com/files/photos/original/567e8dd041ec8151de59f58e.jpg',
        },
      ],
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // { type: 'ADD-POST' }
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dislogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.friendsList = friendsListReducer(this._state.friendsList, action);

    this._callSubscriber(this._state);

  },
};

export default store;

//чтобы в консоли увидеть текущий state
//window.store = store;
// store - OOP

let store = {
  _state: {
    profilePage: {
      newPostText: 'Bla bla bla',
      posts: [
        {id: 1, message: 'Good news!!!', likeCount: 15},
        {id: 2, message: 'It\'s my first post', likeCount: 27},
        {id: 3, message: 'Blabla', likeCount: 21},
        {id: 4, message: 'yo yo yo', likeCount: 10}
      ]
    },
    dialogsPage: {
      newMessageText: '',
      dialogs: [
        {
          id: 1,
          name: 'Andrei',
          avatar: 'https://api.bnnapp.com/__proxy_host/i.mycdn.me/image?id=897778402728&t=43&plc=MOBILE&ts=00000000310000034c&tkn=*Vaz3pKenDfwAMAHu83JG_4RtMm4'
        },
        {id: 2, name: 'Lena', avatar: 'https://chpic.su/_data/stickers/t/thelegendofaang/thelegendofaang_106.webp'},
        {id: 3, name: 'Sergei', avatar: 'https://chpic.su/_data/stickers/t/thelegendofaang/thelegendofaang_105.webp'},
        {
          id: 4,
          name: 'Masha',
          avatar: 'https://static-s.aa-cdn.net/img/gp/20600012995755/i8fGO7LrghUKcBCijVf09Vy_FET5-tCh35O6FTFjkHUMixnCRokmaKMZOKNvf4k2P3Y=s300?v=1'
        },
        {
          id: 5,
          name: 'Alex',
          avatar: 'https://www.sleekfood.com/wp-content/uploads/2021/02/WhatsApp-avatar-stickers.png'
        },
        {id: 6, name: 'Tom', avatar: 'https://avatanplus.com/files/photos/original/567e8dd041ec8151de59f58e.jpg'}
      ],
      messages: [
        {id: 1, message: 'Hi', owner: 1},
        {id: 2, message: 'How are you?', owner: 0},
        {id: 3, message: 'Go home!', owner: 1},
        {id: 4, message: 'Go', owner: 0},
        {id: 5, message: 'Ga ga', owner: 1}
      ]
    },
    friendsList: {
      list: [
        {
          id: 4,
          name: 'Masha',
          avatar: 'https://static-s.aa-cdn.net/img/gp/20600012995755/i8fGO7LrghUKcBCijVf09Vy_FET5-tCh35O6FTFjkHUMixnCRokmaKMZOKNvf4k2P3Y=s300?v=1'
        },
        {
          id: 5,
          name: 'Alex',
          avatar: 'https://www.sleekfood.com/wp-content/uploads/2021/02/WhatsApp-avatar-stickers.png'
        },
        {id: 6, name: 'Tom', avatar: 'https://avatanplus.com/files/photos/original/567e8dd041ec8151de59f58e.jpg'}
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed');
  },
  addPost() {
    let newPost = {
      id: this._state.profilePage.posts.length + 1,
      message: this._state.profilePage.newPostText,
      likeCount: 1
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: this._state.dialogsPage.messages.length + 1,
      message: this._state.dialogsPage.newMessageText,
      owner: 1
    };

    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;

//чтобы в консоли увидеть текущий state
window.store = store;
// store - OOP
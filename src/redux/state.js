let rerenderEntireTree = () => {
  console.log('State changed');
}

let state = {
  profilePage: {
    postText: {value: 'Hi, '},
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
      {id: 1, name: 'Andrei', avatar: 'https://api.bnnapp.com/__proxy_host/i.mycdn.me/image?id=897778402728&t=43&plc=MOBILE&ts=00000000310000034c&tkn=*Vaz3pKenDfwAMAHu83JG_4RtMm4'},
      {id: 2, name: 'Lena', avatar: 'https://chpic.su/_data/stickers/t/thelegendofaang/thelegendofaang_106.webp'},
      {id: 3, name: 'Sergei', avatar: 'https://chpic.su/_data/stickers/t/thelegendofaang/thelegendofaang_105.webp'},
      {id: 4, name: 'Masha', avatar: 'https://static-s.aa-cdn.net/img/gp/20600012995755/i8fGO7LrghUKcBCijVf09Vy_FET5-tCh35O6FTFjkHUMixnCRokmaKMZOKNvf4k2P3Y=s300?v=1'},
      {id: 5, name: 'Alex', avatar: 'https://www.sleekfood.com/wp-content/uploads/2021/02/WhatsApp-avatar-stickers.png'},
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
      {id: 4, name: 'Masha', avatar: 'https://static-s.aa-cdn.net/img/gp/20600012995755/i8fGO7LrghUKcBCijVf09Vy_FET5-tCh35O6FTFjkHUMixnCRokmaKMZOKNvf4k2P3Y=s300?v=1'},
      {id: 5, name: 'Alex', avatar: 'https://www.sleekfood.com/wp-content/uploads/2021/02/WhatsApp-avatar-stickers.png'},
      {id: 6, name: 'Tom', avatar: 'https://avatanplus.com/files/photos/original/567e8dd041ec8151de59f58e.jpg'}
    ]
  }
}

//чтобы в консоли увидеть текущий state
window.state = state;

// export let changePostText = () => rerenderEntireTree(state);

export const addPost = () => {
  let newPost = {
    id: state.profilePage.posts.length+1,
    message: state.profilePage.newPostText,
    likeCount: 1
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const addMessage = () => {
  let newMessage = {
    id: state.dialogsPage.messages.length+1,
    message: state.dialogsPage.newMessageText,
    owner: 1
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
}

//определим функцию внутри которой будем передавать callback
export const subscribe = (observer) => {
  rerenderEntireTree = observer; //паттерн observer
}

export default state;

// store - OOP
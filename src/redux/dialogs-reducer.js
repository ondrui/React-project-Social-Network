const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      let id = state.messages.length + 1;
      let newMessage = {
        id: id,
        message: body,
        owner: 1,
      };
      return {
        ...state,
        newMessageBody: '',
        //вместо push() используем спред оператор
        messages: [...state.messages, newMessage]
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    default:
      return state;
  }
}
//action creator
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  }
}

export default dialogsReducer;
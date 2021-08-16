import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {
  //console.log(props);

 /* let dialogs = [
    {id: 1, name: 'Andrei'},
    {id: 2, name: 'Lena'},
    {id: 3, name: 'Sergei'},
    {id: 4, name: 'Masha'},
    {id: 5, name: 'Alex'},
    {id: 6, name: 'Tom'}
  ]

  let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Go home!'},
    {id: 4, message: 'Go'},
    {id: 5, message: 'Ga ga'}
  ]*/

  let dialogsElements = props.dialogsPage.dialogs
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

  /*  [
    <DialogItem
    name={dialogs[0].name}
    id={dialogs[0].id}
  />,
    <DialogItem
      name={dialogs[1].name}
      id={dialogs[1].id}
    />,
    <DialogItem
      name={dialogs[0].name}
      id={dialogs[0].id}
    />
  ]
*/

  let messagesElements = props.dialogsPage.messages
    .map( m => <Message message={m.message} owner={m.owner}/>);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>

        { dialogsElements }

       {/* <DialogItem
          name={dialogs[0].name}
          id={dialogs[0].id}
        />
        <DialogItem
          name={dialogs[1].name}
          id={dialogs[1].id}
        />
        <DialogItem
          name={dialogs[2].name}
          id={dialogs[2].id}
        />
        <DialogItem
          name={dialogs[3].name}
          id={dialogs[3].id}
        />
        <DialogItem
          name={dialogs[4].name}
          id={dialogs[4].id}
        />
        <DialogItem
          name={dialogs[5].name}
          id={dialogs[5].id}
        />*/}
      </div>
      <div className={style.messages}>
        <div>
          { messagesElements }

          {/* <Message
          message={messages[0].message}
        />
        <Message
          message={messages[1].message}
        />
        <Message
          message={messages[2].message}
        />
        <Message
          message={messages[3].message}
        />
        <Message
          message={messages[4].message}
        />*/}
        </div>
        <div className={style.textArea}>
          <textarea
            ref={newMessageElement}
            value={props.dialogsPage.newMessageText}
            onChange={onMessageChange}
            //placeholder='Hi,'
          />
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>

  )
}

export default Dialogs;
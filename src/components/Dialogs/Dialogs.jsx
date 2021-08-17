import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

  let messagesElements = props.dialogsPage.messages
    .map(m => <Message message={m.message} owner={m.owner}/>);

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

        {dialogsElements}

      </div>
      <div className={style.messages}>
        <div>
          {messagesElements}

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
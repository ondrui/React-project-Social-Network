import style from './../Dialogs.module.css'

const Message = (props) => {
  let status = props.owner ? style.own : style.other;
  return (
    <div className={props.owner ? style.primary : null}>
      <div className={`${style.message} ${status}`}>{props.message}</div>
    </div>
  )
}

export default Message;
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;

  return (
    <div className={style.dialog}>
      <NavLink to={path} activeClassName={style.active}>
        <img
          src={props.avatar}
          alt='avatar'
        />
        <span>
          {props.name}
        </span>
      </NavLink>
    </div>
  )
}

export default DialogItem;
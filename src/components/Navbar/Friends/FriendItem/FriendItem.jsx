import style from "./FriendItem.module.css"

const FriendItem = (props) => {
  return (
    <div className={style.item}>
      <img
        src={props.avatar}
        alt='avatar'
      />
      <div className={style.name}>
        <span>{props.name}</span>
      </div>
    </div>
  );
};

export default FriendItem;

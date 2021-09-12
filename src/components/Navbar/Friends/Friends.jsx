import style from "./../Navbar.module.css";
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {
  let friendsElements = props.state.list
    .map(f => <FriendItem name={f.name} key={f.id} id={f.id} avatar={f.avatar}/>);

  return (
    <div className={style.friendsBlock}>
      <h3>Friends</h3>
      <div className={style.friendsList}>
        {friendsElements}
      </div>
    </div>
  )
}

export default Friends;
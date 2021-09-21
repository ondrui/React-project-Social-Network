import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  if (pagesCount > 10) {
    for (let i = 1; i <= 10; i++) {
      pages.push(i);
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }

  return (
    <div>
      <div className={style.pagePagination}>
        {pages.map(p => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? style.selectedPage : style.itemPagePagination}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >{p}</span>
          )
        })}
      </div>
      {
        props.users.map(u =>
          <div key={u.id}>
            <div style={{display: 'inline-block'}}>
              <div>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"
                     className={style.userPhoto}/>
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => {
                    props.unfollow(u.id)
                  }}>Unfollow</button>
                  : <button onClick={() => {
                    props.follow(u.id)
                  }}>Follow</button>
                }

              </div>
            </div>

            <div style={{display: 'inline-block'}}>
              <div style={{display: 'inline-block'}}>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div style={{display: 'inline-block', marginLeft: '50px'}}>
                <div>{'u.location.city'}</div>
                <div>{'u.location.country'}</div>
              </div>
            </div>
          </div>)
      }
    </div>
  )
}

export default Users;
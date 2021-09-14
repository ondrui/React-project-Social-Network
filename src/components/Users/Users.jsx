import style from './Users.module.css';
import axios from "axios";

let Users = (props) => {

  if (props.users.length === 0) {

    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://api.bnnapp.com/__proxy_host/i.mycdn.me/image?id=897778402728&t=43&plc=MOBILE&ts=00000000310000034c&tkn=*Vaz3pKenDfwAMAHu83JG_4RtMm4',
        followed: false,
        fullName: 'Andrei',
        status: 'I am a boss',
        location: {city: 'Moscow', country: 'Russia'}
      },
      {
        id: 2,
        photoUrl: 'https://chpic.su/_data/stickers/t/thelegendofaang/thelegendofaang_106.webp',
        followed: true,
        fullName: 'Olga',
        status: 'Cool girl',
        location: {city: 'Moscow', country: 'Russia'}
      },
      {
        id: 3,
        photoUrl: 'https://avatanplus.com/files/photos/original/567e8dd041ec8151de59f58e.jpg',
        followed: false,
        fullName: 'Tom',
        status: 'Good boy',
        location: {city: 'Chicago', country: 'USA'}
      }
    ])
  }

  return (
    <div>
      {
        props.users.map(u =>
          <div key={u.id}>
            <div style={{display: 'inline-block'}}>
              <div>
                <img src={u.photoUrl} alt="avatar" className={style.userPhoto}/>
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
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </div>
              <div style={{display: 'inline-block'}}>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
              </div>
            </div>
          </div>)
      }
    </div>
  )
}

export default Users;
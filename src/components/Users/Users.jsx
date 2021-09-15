import style from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'
import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
    alert("NEW");
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
      });

  }

  render() {
    return (
      <div>
        {
          this.props.users.map(u =>
            <div key={u.id}>
              <div style={{display: 'inline-block'}}>
                <div>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"
                       className={style.userPhoto}/>
                </div>
                <div>
                  {u.followed
                    ? <button onClick={() => {
                      this.props.unfollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                      this.props.follow(u.id)
                    }}>Follow</button>
                  }

                </div>
              </div>

              <div style={{display: 'inline-block'}}>
                <div style={{display: 'inline-block'}}>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </div>
                <div style={{display: 'inline-block'}}>
                  <div>{'u.location.city'}</div>
                  <div>{'u.location.country'}</div>
                </div>
              </div>
            </div>)
        }
      </div>
    )
  }
}

export default Users;
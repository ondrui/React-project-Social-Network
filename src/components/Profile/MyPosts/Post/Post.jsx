import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.item}>
      <img
        src='https://api.bnnapp.com/__proxy_host/i.mycdn.me/image?id=897778402728&t=43&plc=MOBILE&ts=00000000310000034c&tkn=*Vaz3pKenDfwAMAHu83JG_4RtMm4'
        alt='avatar'
      />
      {props.message};
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;

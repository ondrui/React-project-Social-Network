import style from './Profileinfo.module.css';
import Preloader from '../../common/Preloader/Preloader';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img
          style={{width: '100%'}}
          src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
          alt='fon'
        />
      </div>
      <div className={style.descriptionBlock}>
        <div className={style.descriptionBlock_Img}>
          <img src={props.profile.photos.small} alt="profile"/>
        </div>
        <div className={style.descriptionBlock_Text}>
          <ul>
            <li className={style.fullName}>{props.profile.fullName}</li>
            <li>facebook: <span>{props.profile.contacts.facebook}</span></li>
            <li>twitter: <span>{props.profile.contacts.twitter}</span></li>
            <li>Обо мне: <span>{props.profile.aboutMe}</span></li>
            <li>Ищу работу: {props.profile.lookingForAJob ? <span>&#x1F44D;</span> : <span>&#x1F44E;</span>}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

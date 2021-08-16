import style from './Profileinfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          style={{width: '100%'}}
          src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
          alt='fon'
        />
      </div>
      <div className={style.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {Route} from "react-router-dom";

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar state={props.state.friendsList}/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
               render={() => <Dialogs
                 dialogsPage={props.state.dialogsPage}
                 addMessage={props.addMessage}
                 updateNewMessageText={props.updateNewMessageText}
               />}
        />
        <Route path='/profile'
               render={() => <Profile
                 profilePage={props.state.profilePage}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}
               />}
        />
        <Route exact path='/'
               render={() => <Dialogs
                 dialogsPage={props.state.dialogsPage}
                 addMessage={props.addMessage}
                 updateNewMessageText={props.updateNewMessageText}
               />}
        />
        <Route path='/news' render={() => <News/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/setting' render={() => <Setting/>}/>
      </div>
    </div>
  );
};

export default App;
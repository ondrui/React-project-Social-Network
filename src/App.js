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

  /*let posts = [
    {id: 1, message: 'Good news!!!', likeCount: 15},
    {id: 2, message: 'It\'s my first post', likeCount: 27},
    {id: 3, message: 'Blabla', likeCount: 21},
    {id: 4, message: 'yo yo yo', likeCount: 10}
  ]*/

  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar state={props.state.friendsList}/>
      <div className='app-wrapper-content'>
        {/*<Route path='/dialogs' component={Dialogs}/>*/}
        {/*<Route path='/profile' component={Profile}/>*/}
        {/*<Route path='/news' component={News}/>*/}
        {/*<Route path='/music' component={Music}/>*/}
        {/*<Route path='/setting' component={Setting}/>*/}

        <Route path='/dialogs'
               render={() => <Dialogs
                 /*dialogs={props.state.dialogsPage.dialogs}
                 messages={props.state.dialogsPage.messages}*/
                 dialogsPage={props.state.dialogsPage}
                 addMessage={props.addMessage}
                 updateNewMessageText={props.updateNewMessageText}
               />}
        />
        <Route path='/profile'
               render={() => <Profile
                 // posts={props.state.profilePage.posts}
                 profilePage={props.state.profilePage}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}
                 changePostText={props.changePostText}
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
      {/*<Profile />*/}
    </div>
  );
};

export default App;
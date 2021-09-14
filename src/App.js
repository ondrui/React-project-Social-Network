import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from './redux/store';
import UsersContainer from "./components/Users/UsersContainer";

let state = store.getState();

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar state={state.friendsList}/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
               render={() => <DialogsContainer/>}
        />
        <Route path='/profile'
               render={() => <Profile/>}
        />
        <Route exact path='/'
               render={() => <DialogsContainer/>}
        />
        <Route path='/users'
               render={() => <UsersContainer/>}
        />
        <Route path='/news' render={() => <News/>}/>
        <Route path='/music' render={() => <Music/>}/>
        <Route path='/setting' render={() => <Setting/>}/>
      </div>
    </div>
  );
};

export default App;

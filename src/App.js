import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {Redirect, Route, Switch} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import store from './redux/store';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

let state = store.getState();

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <Navbar state={state.friendsList}/>
      <div className='app-wrapper-content'>
        <Switch>
          <Route path='/dialogs'
                 render={() => <DialogsContainer/>}
          />
          <Route path='/profile/:userId?'
                 render={() => <ProfileContainer/>}
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
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;

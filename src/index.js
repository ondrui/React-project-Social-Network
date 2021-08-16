import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, {subscribe} from './redux/state';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';
import {BrowserRouter} from "react-router-dom";

console.log(React.version);
//addPost('good news!!!!');

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        updateNewPostText={updateNewPostText}
        updateNewMessageText={updateNewMessageText}
        // changePostText={changePostText}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
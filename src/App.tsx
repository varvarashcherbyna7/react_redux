import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
// import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props: {
    state: object;
    updateNewMessageText: any;
    addMessage: any;
    updateNewPostText: any;
    addPost: any } ) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state}/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => (<Dialogs
                        state={props.state}
                        addMessage={props.addMessage}
                        updateNewMessageText={props.updateNewMessageText}
                /> )} />
                <Route path='/profile' render={() => (<Profile
                    state={props.state}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />)} />
                <Route path='/news' render={() => (<News/>)}/>
                <Route path='/music' render={() => (<Music/>)}/>
                <Route path='/settings' render={() => (<Settings/>)}/>
            </div>
            {/*<Footer/>*/}
        </div>
    );
};

export default App;

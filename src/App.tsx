import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/FindUsers/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
// import Footer from "./components/Footer/Footer";

const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                // @ts-ignore
                <Route path='/dialogs' render={() => (< DialogsContainer/>)}/>
                // @ts-ignore
                <Route path='/profile/:userId' render={() => (<ProfileContainer/>)}/>
                // @ts-ignore
                <Route path='/news' render={() => (<News/>)}/>
                // @ts-ignore
                <Route path='/music' render={() => (<Music/>)}/>
                // @ts-ignore
                <Route path='/settings' render={() => (<Settings/>)}/>
                // @ts-ignore
                <Route path='/findUsers' render={() => (<UsersContainer/>)}/>
            </div>
            {/*<Footer/>*/}
        </div>
    );
};

export default App;

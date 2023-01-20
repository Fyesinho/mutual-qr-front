import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import Landing from "./pages/Home";
import PersonalData from "./pages/PersonalData";
import MyCourses from "./pages/MyCourses";
import QrScanner from "./pages/QRScanner/QRScanner";
import UserState from "./context/user/User.state";
import MyPanels from "./pages/MyPanels/MyPanels";
import Login from "./pages/Login/Login";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path={'/'} element={
                    <UserState>
                        <Login/>
                    </UserState>
                }/>
                <Route path={'/home'} element={
                    <UserState>
                        <Landing/>
                    </UserState>
                }/>
                <Route path={'/personal-data'} element={
                    <UserState>
                        <PersonalData/>
                    </UserState>
                }/>
                <Route path={'/my-courses'} element={
                    <UserState>
                        <MyCourses/>
                    </UserState>
                }/>
                <Route path={'/qr'} element={
                    <UserState>
                        <QrScanner/>
                    </UserState>
                }/>
                <Route path={'/my-panels'} element={
                    <UserState>
                        <MyPanels/>
                    </UserState>
                }/>
                <Route path={'/error'} element={
                    <UserState>
                        <Error/>
                    </UserState>
                }/>
                <Route path={'/error-not-found'} element={
                    <UserState>
                        <NotFound/>
                    </UserState>
                }/>
            </Routes>
        </div>
    );
}


export default App;

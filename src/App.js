import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import Landing from "./pages/Home";
import PersonalData from "./pages/PersonalData";
import MyCourses from "./pages/MyCourses";
import Qrscan from "./components/QrScan/QrSCan";

function App() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
        try {
            const response = await fetch("http://localhost:4000/user/18138055-1", requestOptions);
            const result = await response.json();
            setUser(result);
            setLoading(false);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className='App'>
            <Routes>
                <Route path={'/'} element={<Landing user={user} loading={loading} />} />
                <Route path={'/personal-data'} element={<PersonalData user={user} />} />
                <Route path={'/my-courses'} element={<MyCourses user={user} />} />
                <Route path={'/qr'} element={<Qrscan />} />
            </Routes>
        </div>
    );
}

export default App;

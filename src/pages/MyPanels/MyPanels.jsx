import React from 'react';
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

const MyPanels = () => {
    return (
        <div>
            <Header/>
            <iframe id='bi' title='bi' style={{height: '500px'}}
                src='https://app.powerbi.com/view?r=eyJrIjoiZGU2NWMzMTgtMWViMi00ZmNhLWEyY2QtNmRmNGU5ZWZjNmMyIiwidCI6IjU3OTUyNTYyLWJhZTItNGI3OS04YWQ0LWUzNzVhM2RjZWQ5NyIsImMiOjR9'>
            </iframe>
            <Navigation/>
        </div>
    );
};

export default MyPanels;
import React, {useContext, useEffect} from 'react';
import Header from "../../components/Header/Header";
import Menu from "./Menu/Menu";
import Logout from "./Logout/Logout";
import Navigation from "../../components/Navigation/Navigation";
import Loading from "../../components/Loading/Loading";
import UserContext from "../../context/user/User.context";

const Landing = () => {

    const {
        getUserByLogin,
        loadingLoginUser,
        getUserByQR,
        loadingSelectedUser,
        loginUser,
        selectedUserId,
        selectedUser,
    } = useContext(UserContext);

    useEffect(() => {
        const rut = selectedUserId === '' ? '18138055-1' : selectedUserId;
        loginUser.length === 0 && getUserByLogin('18138055-1');
        if (selectedUser.length === 0) {
            getUserByQR(rut)
        } else {
            selectedUser[0]['Rut Colaborador'] !== rut && getUserByQR(rut);
        }
    }, []);
    return (
        <>
            {(loadingLoginUser || loadingSelectedUser) && <Loading/>}
            <Header/>
            <Menu/>
            <Navigation/>
        </>
    );
};

export default Landing;
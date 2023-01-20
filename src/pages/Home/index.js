import React, {useContext, useEffect} from 'react';
import Header from "../../components/Header/Header";
import Menu from "./Menu/Menu";
// import Logout from "./Logout/Logout";
import Navigation from "../../components/Navigation/Navigation";
import Loading from "../../components/Loading/Loading";
import UserContext from "../../context/user/User.context";
import withAuth from "../../hooks/withAuth";

const Landing = () => {

    const {
        getUserByQR,
        loadingSelectedUser,
        selectedUserId,
        selectedUser,
    } = useContext(UserContext);

    const rutLocal = JSON.parse(localStorage.getItem('user')).rut

    useEffect(() => {
        const rut = selectedUserId === '' ? rutLocal : selectedUserId;
        if (selectedUser.length === 0) {
            getUserByQR(rut)
        } else {
            selectedUser[0]['Rut Colaborador'] !== rut && getUserByQR(rut);
        }
        // eslint-disable-next-line
    }, []);
    return (
        <>
            {(loadingSelectedUser) && <Loading/>}
            <Header/>
            <Menu/>
            <Navigation from='landing'/>
        </>
    );
};

export default withAuth(Landing);
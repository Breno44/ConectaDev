import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { signOut } from '../../../../actions/accountActions'

function Account() {
    const account = useSelector((state) => state.account)
    const [isOpen, setOpen] = useState(false)
    const ref = useRef();
    const dispatch = useDispatch();
    const navigate = useHistory(); 

    const isAuthenticated = !!account.user;

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSignOut = () => {
       handleClose();

       dispatch(signOut())
       navigate('/')
    }

    return (
        <>
            <Avatar onClick={handleOpen} alt="avatar" src={account.user && account.user.avatar} />
            {
                isAuthenticated 
                ?
            <Menu 
                anchorEl={ref.current}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right', 
                }}
                open={isOpen}
                onClose={handleClose}
                getContentAnchorEl={null} 
            >
                <MenuItem>Perfil</MenuItem>
                <MenuItem>Meus favoritos</MenuItem>
                <MenuItem>Meus posts</MenuItem>
                <MenuItem>Minhas Conexões</MenuItem>
                <MenuItem onClick={handleSignOut}>Sair</MenuItem>
            </Menu>
            :
            <Menu 
                anchorEl={ref.current}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right', 
                }}
                open={isOpen}
                onClose={handleClose}
                getContentAnchorEl={null} 
            >
                <MenuItem>Registrar</MenuItem>
                <MenuItem>Entrar</MenuItem>
            </Menu>
            }
        </>
    )
}

export default Account;

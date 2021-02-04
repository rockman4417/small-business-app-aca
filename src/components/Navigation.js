import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, 
    Typography, Button } from '@material-ui/core'

import { Link } from 'react-router-dom'
import cookie from 'cookie'


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    console.log('looking up cookies')
    return cookies["loggedIn"] ? true : false
    
}

const Navigation = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)


    useEffect (() => {checkAuth() ? setLoggedIn(true) : setLoggedIn(false)}, [])
        
    
    const logout = () => {
        document.cookie = "loggedIn=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        
        if(loggedIn) {
            window.location.replace("/login")
        }
    }



    

    return (

        <div>
                <AppBar position="relative" style={{backgroundColor: '#44B952'}}>
                <Toolbar >
                    
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        Lubbock Small Business
                    </Typography>
                    <ul className="nav-list" style={{listStyleType: "none", display: "flex"}}>
                        <li className="nav-list-item">
                            <Link to="/listings" style={{ textDecoration: 'none', color: "white"  }}><Button color="inherit">Listings</Button></Link>
                        </li>
                        {loggedIn ? 
                        <li className="nav-list-item">
                            <Link to="/add" style={{ textDecoration: 'none', color: "white" }}><Button color="inherit">Add</Button></Link>
                        </li>  
                        : null}
                        <li className="nav-list-item">
                            <Link to="/login" onClick={logout} style={{ textDecoration: 'none', color: "white"  }}><Button color="inherit" >{loggedIn ? "Logout" : "Login"}</Button></Link>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
            {loggedIn ? 
            <AppBar position="relative" style={{backgroundColor: '#B8B8B8', height: '25px', marginBottom: '50px'}}>
            <Toolbar style={{display: 'flex', alignItems: 'flex-start'}}>
                    
                    <Typography variant="p" style={{ flexGrow: "1" }}>
                        Logged in as: {props.user.username} 
                    </Typography>
                    
                </Toolbar>
            </AppBar>  
            : null}
            </div>
        )
    
}

export default Navigation
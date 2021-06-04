import React from 'react'

import '../../css/login.css'


class LoginButton extends React.Component{
    render(){
        return(
            <div  className='mx-3'>
                <a href="/#">
                    Login
                </a>
            </div>
        )
    }
}


export default LoginButton
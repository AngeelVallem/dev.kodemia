import React from 'react'
import LinksSideBar from './linksSideBar'

import '../../css/leftAside/index.css'

class LeftSideBar extends React.Component{
    render(){
        return(
            <div className='my-5'>
            <LinksSideBar/>
            </div>
        )
    }
}


export default LeftSideBar
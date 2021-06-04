import React from 'react'

import '../css/main/index.css'

class AppCard extends React.Component{
    constructor(props){
        super(props)
        
        this.props = props

    }
    render(){
        const  {img} =  this.props
        if(img){
        return(
            <div className='card my-4 shadow-sm post'>
                <img className="card-img-top" src={img} alt=""  />
                <div className='card-body p-4'>
                    {this.props.children}
                </div>
            </div>
        )
        }
        return(
            <div className='card my-4 shadow-sm post'>
                <div className='card-body'>
                    {this.props.children}
                </div>
            </div>
        )

    }
}


export default AppCard
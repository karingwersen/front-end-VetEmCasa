import React from 'react'
import LogoVetEmCasa from '../logo.png'
import '../Logo.css';


export class Logo extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className='divLogo'>
                <img src={LogoVetEmCasa} />
            </div>
        );
    }
}
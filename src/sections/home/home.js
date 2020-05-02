import React from 'react';
import classes from './home.module.scss';
import linkedin from '../../assets/linkedin.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'



export default function Home() {
   
  return (
    <div className = {classes.Home}  >
        <h1>Hi,</h1>
        <h2>I' am Gintu Tom</h2>
        <h3>developer, designer</h3>
        <div>
            <a href='#' ><img src={linkedin} alt={'linkedin'}/></a>
            <a href='#' ><img src={facebook} alt={'facebbok'}/></a>
            <a href='#' ><img src={youtube} alt={'youtube'}/></a>          
        </div>
    </div>
  );
}

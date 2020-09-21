import React, {useState, useEffect} from 'react';
import './Nav.css';
function Nav(){
const [show, handleShow]= useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
             });
             return()=>{
                 window.removeEventListener('scroll')
             };
    }, []);
    return(
        <div className={`nav ${show && 'nav_black '}`}>
            <img className='nav_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png'
            alt='Netflix Logo'
            />

            <img className='nav_avatar'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTza9nCLauMcITomKDSyjPjAdm0h8mtXmp7A&usqp=CAU'
            alt='Netflix Logo'
            />

        </div>
    )
}
export default Nav;
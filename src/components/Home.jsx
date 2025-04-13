import React from 'react';
import logo from "../assets/LogoBrancoHome.png";
import "../styles/Home.css";


function Home(){
        return (
            <section id='home'>
                <div className='home_container'>
                    <img src={logo} alt='Logo' className='background_logo'/>
                </div>
            </section>
        
    );
}

export default Home;
import React from 'react'
import logo from '.././images/froggit-logo-white.png'
import Footer from './Footer';
import Navigation from './Navigation';

function About() {
    return (
        <>
            <div class='p-10 bg-gray-800 bg-opacity-50 rounded-tl-lg rounded-tr-lg'>
                <div class="rounded-lg overflow-hidden">
                    <center><img alt="content" class="object-center md:h-12 md:w-auto sm:h-8 sm:w-auto  lg:h-16 w-auto " src={logo} /></center>
                </div>
                <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">FCM Notifications Tester</h2>
                <p class="leading-relaxed text-base">Just a simple tool to test your firebase push notifications.</p>
                <Navigation/>
            </div>
            <Footer />
        </>
    );
}

export default About; 
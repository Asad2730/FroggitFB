import React from 'react'
import {
    Link
} from "react-router-dom";


function Toggle() {
    return (
        <>
            <center class="mt-4">
                <div class="rounded-3xl text-white">
                    <ul className="  items-center justify-center space-y-0 md:flex md:space-x-6 md:space-y-0">
                        <Link to="/">
                            <li className="hover:text-blue-600 transform hover:scale-125 transition-all">
                                <a href="/">Send Notifications</a>
                            </li>
                        </Link>
                        <li className="mx-20">
                            |
                        </li>
                        <Link to="/receive">
                            <li className="hover:text-blue-600 transform hover:scale-125 transition-all">
                                <a href="/recive">Receive Notifications</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </center>
        </>
    );
}

export default Toggle
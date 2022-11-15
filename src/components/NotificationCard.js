import React, { useState, useEffect } from "react";
import { messaging } from "../firebase";
import { onMessage } from "firebase/messaging";

function NotificationCard() {

    const [payload, setpayload] = useState([]);
    const addObjectToArray = obj => {
        console.log('obj', obj)
        setpayload(current => [...current, obj]);
        console.log('DATA', payload)
    };

    useEffect(() => {
        console.log('this')
        onMessage(messaging, (payload) => {
            console.log('msg', payload.notification.body)
            console.log('title', payload.notification.title)
            addObjectToArray({
                body: payload.notification.body,
                title: payload.notification.title,
                icon: payload.notification.icon,
            })
        });

    })

    return (
        <>

            {
                payload.map(i => (
                    <div class="bg-gray-900 bg-opacity-40 p-2 rounded-2xl w-full mt-2">
                        <span class="inline-flex items-center">
                            <img alt="testimonial" src={i.icon} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                            <span class="flex-grow flex flex-col pl-4 mt-2 -mb-2 object-center">
                                <span class="title-font font-medium text-white">{i.title}</span>
                                <p class="leading-relaxed mb-6">{i.body} </p>
                            </span>
                        </span>
                    </div>
                )).reverse()
            }
        </>
    );
}

export default NotificationCard
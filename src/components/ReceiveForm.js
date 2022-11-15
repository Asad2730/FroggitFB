import React, { useState, useEffect } from "react";
import { messaging } from "../firebase";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import { onMessage, getToken } from "firebase/messaging";
import { vapidKey, serverKey } from './cred'

function ReceiveForm() {


    const [tokken, settokken] = useState("");
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");
    const [alertTxt, setAlertTxt] = useState("");
    const [alertIcon, setAlertIcon] = useState("");

    const [payload, setpayload] = useState([]);

    const addObjectToArray = obj => {
        console.log('obj', obj)
        setpayload(current => [...current, obj]);
        console.log('DATA', payload)
    };


    useEffect(() => {

        onMessage(messaging, (payload) => {
            console.log('msg', payload.notification.body)
            console.log('title', payload.notification.title)
            addObjectToArray({
                body: payload.notification.body,
                title: payload.notification.title
            })
        });

        getToken(messaging, { vapidKey: vapidKey })
            .then((currentToken) => {
                if (currentToken) {
                    console.log('current token for client: ', currentToken);
                    settokken(currentToken)
                } else {

                    console.log('No registration token available. Request permission to generate one.');
                }
            })
            .catch((err) => {
                console.log('An error occurred while retrieving token. ', err.message);
            });

    }, [])




    useEffect(() => {
        const timer = setTimeout(() => {
            setAlertIcon("");
            setAlertTxt("");
        }, 5000);
        return () => clearTimeout(timer);
    }, [alertTxt, alertIcon]);



    const onSubmit = () => {
        console.log('OK')
        console.log(serverKey, tokken);
        const headers = {
            Authorization: `key=${serverKey}`,
            "Content-Type": "application/json",
        };

        const data = {
            mode: "cors",
            notification: {
                body: body,
                title: title,
            },
            data: {
                body: body,
                title: title,
                key_1: "Value for key_1",
                key_2: "Value for key_2",
            },
            to: tokken,
        };

        axios
            .post("https://fcm.googleapis.com/fcm/send", data, { headers })
            .then((response) => {
                console.log("sucess", response);
                setAlertTxt("Successfully Notified!");
                setAlertIcon("success");
            })
            .catch((error) => {
                console.log(error);
                setAlertTxt(`Some thing went wrong.\n ${error.message}`);
                setAlertIcon("error");
            });
    };

    const customAlert = (type, text) => <Alert severity={type}>{text}</Alert>;

    return (
        <>
            <div class='px-10 py-8 bg-gray-800 bg-opacity-50 rounded-lg'>
                <h2 class="title-font text-2xl font-medium text-white mb-1">Test Notifications </h2>
                <div class="mb-2">
                    <label for="email" class="leading-7 text-sm text-gray-400">FCM Registration Token (Device Token) <span class='text-red-600'>*</span> </label>
                    <input type="email"
                        id="email"
                        name="email"
                        class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        readOnly
                        value={tokken}
                    />
                </div>
                <div class="mb-2">
                    <label for="email" class="leading-7 text-sm text-gray-400">Server Key <span class='text-red-600'>*</span> </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        readOnly
                        value={serverKey}
                    />
                </div>
                <button class="w-full text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-2"
                    onClick={onSubmit}
                >Push Notification</button>

                {customAlert(alertIcon, alertTxt)}
            </div>

        </>
    );
}

export default ReceiveForm
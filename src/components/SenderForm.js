import React, { useState } from "react";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";

function SenderForm() {

    const [serverKey, setserverKey] = useState("");
    const [tokken, settokken] = useState("");
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");
    const [iconUrl, setIConUrl] = useState("");
    const [actionUrl, setActionUrl] = useState("");
    const [data, setData] = useState("");
    const [alertTxt, setAlertTxt] = useState("");
    const [alertIcon, setAlertIcon] = useState("");

    const onSubmit = () => {
        console.log(serverKey, tokken);

        const headers = {
            Authorization: `key=${serverKey}`,
            "Content-Type": "application/json",
        };

        const postData = {
            mode: "cors",
            notification: {
                body: body,
                title: title,
                click_action: actionUrl,
                icon: iconUrl,
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
            .post("https://fcm.googleapis.com/fcm/send", postData, { headers })
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
            <div class='px-10 mb-8'>
                <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">Send Notifications </h2>
                <div class="mb-2">
                    <label for="email" class="leading-7 text-sm text-gray-400">Server Key <span class='text-red-600'>*</span> </label>
                    <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => {
                            setserverKey(e.target.value);
                        }}
                        value={serverKey}
                    />
                </div>
                <div class="mb-2">
                    <label for="email" class="leading-7 text-sm text-gray-400">FCM Registration Token (Device Token) <span class='text-red-600'>*</span> </label>
                    <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => {
                            settokken(e.target.value);
                        }}
                        value={tokken}
                    />
                </div>
                <div class="mb-2">
                    <label for="email" class="leading-7 text-sm text-gray-400">Title <span class='text-red-600'>*</span> </label>
                    <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        value={title}
                    />
                </div>
                <div class="mb-2">
                    <label for="email" class="leading-7 text-sm text-gray-400">Body <span class='text-red-600'>*</span> </label>
                    <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => {
                            setBody(e.target.value);
                        }}
                        value={body}
                    />
                </div>
                <div class="mb-2">
                    <label for="email" class="leading-7 text-sm text-gray-400">Click Action URL - (optional) </label>
                    <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => {
                            setActionUrl(e.target.value);
                        }}
                        value={actionUrl}
                    />
                </div>
                <div class="mb-2">
                    <label for="email" class="leading-7 text-sm text-gray-400">Icon URL - (optional) </label>
                    <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => {
                            setIConUrl(e.target.value);
                        }}
                        value={iconUrl}
                    />
                </div>
                <div class="mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-400">Data - (optional) </label>
                    <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => {
                            setData(e.target.value);
                        }}
                        value={data}
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

export default SenderForm
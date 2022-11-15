import React from 'react'
import NotificationCard from './NotificationCard';

function Notification() {
    return (
        <>
            <section class="p-10 bg-gray-800 bg-opacity-50 rounded-lg mt-5">
                <div class="container px-5 py-8 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <h1 class="text-3xl font-medium title-font text-white mb-4 text-center">Notifications</h1>
                        <div class="overflow-auto w-full h-52">
                            <NotificationCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Notification
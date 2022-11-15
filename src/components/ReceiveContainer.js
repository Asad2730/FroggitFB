import React from 'react'
import About from './About';
import Notification from './Notification';
import ReceiveForm from './ReceiveForm';

function ReceiveContainer() {
    return (
        <>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap lg:-mt-8">
                        <div class="scale-90 text-center  sm:w-1/2 lg:h-80 md:h-96 lg:mt-52 sm:mt-6 md:mt-16">
                            <About />
                        </div>
                        <div class="scale-90 sm:w-1/2 mb-10 sm:mt-6 md:mt-12 lg:mt-10 lg:-mb-10">
                            <ReceiveForm />
                            <Notification/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ReceiveContainer;


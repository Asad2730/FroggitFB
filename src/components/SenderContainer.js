import React from 'react'
import About from './About';
import SenderForm from './SenderForm';

function SendContainer() {
    return (
        <>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap lg:-mt-8">
                        <div class="scale-90 text-center bg-gray-800 bg-opacity-50 rounded-lg sm:w-1/2 lg:h-80 md:h-96 lg:mt-52 sm:mt-6 md:mt-16">
                            <About />
                        </div>
                        <div class="scale-90 bg-gray-800 bg-opacity-50 rounded-lg  sm:w-1/2 mb-10 sm:mt-6 md:mt-16 lg:mt-10 lg:-mb-10">
                            <SenderForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SendContainer;


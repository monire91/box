import React from 'react';
import Head from "next/head";
import Navbar from "../components/navbar/navbar";

const Properties = () => {
    return (
        <div className='font-dana'>
            <Head>
                <title>subkhoone</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Navbar page='login' activeItem={3}/>

                <div className='flex justify-center justify-evenly  mt-56'>
                    <div className='w-1/5 border-2 rounded-3xl overflow-hidden border-gray-300 border-solid'>
                        <div className=' overflow-hidden h-64 relative  w-full'>
                            <p className='w-full pr-6 pt-6 text-right absolute z-10'>اپارامان نوساز افسریه</p>
                            <div className='w-full pl-6 pb-4 text-left text-white bottom-0 absolute z-10 flex items-center'>
                                <span>تهران-تهران</span>
                                <span className='r-location ml-2 leading-3'/>
                            </div>
                            <div>
                                <img
                                    className='object-cover absolute rounded-3xl bottom-0 h-40 w-full transition-all duration-500 ease-out hover:h-full'
                                    src='https://api2.subkhoone.com//uploads/CKHtZ48WUsQSmTYMPyCk/thumb_c09add48-4ac9-45c6-a0e5-157c43842f54.jpg'/>
                            </div>

                        </div>
                        <div className='flex justify-end pt-6 pb-6'>
                            <div>
                                <span className='block'>نوع ملک</span>
                                <span className='block text-right'>اداری</span>
                            </div>
                            <span className='r-person pr-6 pl-6'/>
                        </div>
                    </div>
                </div>

            </main>

            <footer>

            </footer>
        </div>
    );
};

export default Properties;

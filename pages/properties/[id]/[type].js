import React from 'react';
import Head from "next/head";
import Navbar from "../../../components/navbar/navbar";
import Asset from "../../../components/asset";

const Type = () => {
    return (
        <div>
            <Head>
                <title>subkhoone</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className='mt-56'>
                <Navbar page='login' activeItem={3}/>
                <div className='flex'>
                    <div className='flex-initial w-tall border-2 rounded-3xl overflow-hidden border-gray-300'>
                        <div className='flex justify-between'>
                            <div className='rtl'>
                                <span>2000</span>
                                <span>صاب</span>
                            </div>
                            <div>
                                <span>کل صاب</span>
                                <span className='r-clock'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex-initial w-full'>
                        bb

                    </div>
                </div>

            </main>

            <footer>

            </footer>
        </div>
    );
};

export default Type;

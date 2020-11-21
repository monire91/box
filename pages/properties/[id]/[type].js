import React from 'react';
import Head from "next/head";
import Navbar from "../../../components/navbar/navbar";
import Asset from "../../../components/asset";
import Modal from "../../../components/modal";

const Type = () => {
    return (
        <div>
            <Head>
                <title>subkhoone</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main >
                <Modal activeItem={4}/>
                <Navbar page='login' activeItem={3}/>
                <div className='flex dana' style={{marginTop:100}}>
                    <div className='mx-20'>
                        <div
                            className='w-medium text-sm border-2 rounded-3xl overflow-hidden border-gray-300 pt-4 pb-4 px-4'>
                            <div>
                                <div className='flex justify-between relative mb-4'>
                                    <div className='rtl'>
                                        <span>2000</span>
                                        <span className='mr-1'>صاب</span>
                                    </div>

                                    <div>
                                        <span>کل صاب</span>
                                        <span className='r-clock ml-2'/>
                                    </div>
                                </div>
                                <div className='h-1 w-1/2 gradient mx-auto'/>
                            </div>
                            <div>
                                <div className='flex justify-between relative mb-4 mt-4'>
                                    <div className='rtl'>
                                        <span>0</span>
                                        <span className='mr-1'>صاب</span>
                                    </div>
                                    <div>
                                        <span>کمترین صاب خریداری شده</span>
                                        <span className='r-clock ml-2'/>
                                    </div>
                                </div>
                                <div className='h-1 w-1/2 gradient mx-auto'/>
                            </div>
                            <div>
                                <div className='flex justify-between relative mb-4 mt-4'>
                                    <div className='rtl'>
                                        <span>0</span>
                                        <span className='mr-1'>صاب</span>
                                    </div>
                                    <div>
                                        <span>بیشترین صاب خریداری شده</span>
                                        <span className='r-clock ml-2'/>
                                    </div>
                                </div>
                                <div className='h-1 w-1/2 gradient mx-auto'/>
                            </div>
                            <div>
                                <div className='flex justify-between relative mb-4 mt-4'>
                                    <div className='rtl'>
                                        <span>0</span>
                                    </div>
                                    <div>
                                        <span>تعداد مشارکت کننده ها</span>
                                        <span className='r-clock ml-2'/>
                                    </div>
                                </div>
                                <div className='h-1 w-1/2 gradient mx-auto'/>
                            </div>
                            <div>
                                <div className='flex justify-between relative mb-4 mt-4'>
                                    <div className='rtl'>
                                        <span>1393/10/11</span>
                                    </div>
                                    <div>
                                        <span>تاریخ شروع فروش</span>
                                        <span className='r-clock ml-2'/>
                                    </div>
                                </div>
                                <div className='h-1 w-1/2 gradient mx-auto'/>
                            </div>
                            <div>
                                <div className='flex justify-between relative mb-4 mt-4'>
                                    <div className='rtl'>
                                        <span>2151 روز 10 ساعت</span>
                                    </div>
                                    <div>
                                        <span>زمان اتمام فروش</span>
                                        <span className='r-clock ml-2'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className='cursor-pointer text-center rounded-2xl border-gray-300 w-full bg-accent text-white py-6 px-10 mt-8'>ثبت
                            پیشنهاد خرید
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

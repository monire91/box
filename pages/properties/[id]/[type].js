import React from 'react';
import Head from "next/head";
import Navbar from "../../../components/navbar/navbar";
import Asset from "../../../components/asset";
import Modal from "../../../components/modal";
import Modal2 from "../../../components/modal2";

const Type = () => {

    const openModal = () => {
        let modal = document.getElementById('myModal2');
        modal.style.display = "block";
    };

    return (
        <div>
            <Head>
                <title>subkhoone</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Modal activeItem={4}/>
                <Modal2 activeItem={4}/>

                <Navbar page='login' activeItem={3}/>
                <div className='grid  grid-cols-7 dana' style={{marginTop: 100}}>
                    <div className='ml-20 col-span-2'>
                        <div
                            className='w-full  text-sm border-2 rounded-3xl overflow-hidden border-gray-300 pt-4 pb-4 px-4'>
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
                                        <span className='r-calendar ml-2'/>
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
                                        <span className='r-clockloop ml-2'/>
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
                                        <span className='r-statistical ml-2'/>
                                    </div>
                                </div>
                                <div className='h-1 w-1/2 gradient mx-auto'/>
                            </div>
                            <div>
                                <div className='flex justify-between relative mb-4 mt-4'>
                                    <div className='rtl'>
                                        <span>10000</span>
                                    </div>
                                    <div>
                                        <span>کمترین قیمت قابل پیشنهاد</span>
                                        <span className='r-calendar ml-2'/>
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
                                        <span className='r-men ml-2'/>
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
                                        <span className='r-men ml-2'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={openModal}
                            className='cursor-pointer text-center rounded-2xl border-gray-300 w-full bg-accent text-white py-6 px-10 mt-8'>ثبت
                            پیشنهاد خرید
                        </div>
                    </div>
                    <div className='col-span-5 pr-20 flex flex-col items-end'>
                        <div className=' ml-10 overflow-hidden rounded-3xl object-cover h-taller'>
                            <img className='w-full' src='/img/1019-1000x600.jpg'/>
                        </div>
                        <h2 className='text-right text-neutral1 mt-20 mb-4'>بازار اولیه</h2>
                        <h1 className='text-right dana-black text-3xl mb-20'>باشگاه کسب و کار دانش بنیان</h1>
                        <div
                            className='w-full mb-20 text-sm border-2 rounded-3xl overflow-hidden border-gray-300 pt-4 pb-4 px-4'>
                            <div className='flex items-center justify-end'>
                                <span className='dana-black text-sm '>پیشنهادات</span>
                                <span className='r-money ml-4 leading-4'/>
                            </div>

                            <div className='grid grid-cols-4 mt-20'>
                                <div className='text-center'>تجمعی</div>
                                <div className='text-center'>قیمت <span className='text-neutral1'>(تومان)</span></div>
                                <div className='text-center'>تعداد صاب</div>
                                <div className='text-center mb-6'>تعداد افراد</div>
                                <div className='col-span-4 bg-neutral2 grid grid-cols-4 font-bold py-6 rounded-lg'>
                                    <p className='text-center rtl'>5105 <span>صاب</span></p>
                                    <p className='text-center'>1000000000</p>
                                    <p className='text-center rtl'>50 <span>صاب</span></p>
                                    <p className='text-center'>1</p>
                                </div>
                                <div className='col-span-4 grid grid-cols-4 font-bold py-6  rounded-lg'>
                                    <p className='text-center rtl'>5105 <span>صاب</span></p>
                                    <p className='text-center'>1000000000</p>
                                    <p className='text-center rtl'>50 <span>صاب</span></p>
                                    <p className='text-center'>1</p>
                                </div>
                                <div className='col-span-4 grid grid-cols-4 bg-neutral3 text-neutral1 py-6  rounded-lg'>
                                    <p className='text-center rtl'>5105 <span>صاب</span></p>
                                    <p className='text-center'>1000000000</p>
                                    <p className='text-center rtl'>50 <span>صاب</span></p>
                                    <p className='text-center'>1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <footer>

            </footer>
        </div>
    );
};

export default Type;

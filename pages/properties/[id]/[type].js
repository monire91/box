import React, {useEffect, useState} from 'react';
import Head from "next/head";
import Navbar from "../../../components/navbar/navbar";
import Modal from "../../../components/modals/modal";
import Modal2 from "../../../components/modals/modal2";
import Offers from "../../../components/offers";
import MyOffers from "../../../components/myOffers";

const AssetDetails = ({asset}) => {

    let endData = new Date(asset.present_primary_market.end_date_time);
    const oneDay = 24 * 60 * 60 * 1000;

    const numberOfDays = Math.round(endData / oneDay * 10) / 10;

    const days = numberOfDays.toString().split(".")[0];
    const hours = numberOfDays.toString().split(".")[1];

    const openModal = () => {
        let modal = document.getElementById('myModal2');
        modal.style.display = "block";
    };

    const [startDate, setStartDate] = useState('');
    useEffect(() => {
        let startData = new Date(asset.present_primary_market.start_date_time).toLocaleDateString('fa-IR');
        setStartDate(startData);
    }, []);

    return (
        <div>
            <Head>
                <title>subkhoone</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Modal activeItem={4}/>
                <Modal2 id={asset.id} primaryID={asset.present_primary_market.id}/>

                <Navbar page='login' activeItem={3}/>
                <div className='grid grid-cols-7 dana' style={{marginTop: 100}}>
                    <div className='lg:mx-20 mx-4 xl:mr-4 col-span-7 lg:col-span-7 xl:col-span-2'>
                        <div
                            className='w-full  text-sm border-2 rounded-3xl overflow-hidden border-gray-300 pt-4 pb-4 px-4'>
                            <div>
                                <div className='flex justify-between relative mb-4'>
                                    <div className='rtl'>
                                        <span>{asset.all_number_of_shares}</span>
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
                                        <span>{asset.smallest_shares}</span>
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
                                        <span>{asset.largest_shares}</span>
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
                                        <span>{asset.number_of_contributors}</span>
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
                                        <span>{asset.present_primary_market.low_price}</span>
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
                                        <span>{startDate}</span>
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
                                        <span>{days} روز {hours} ساعت</span>
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

                        <MyOffers marketID={asset.present_primary_market.id}/>
                    </div>
                    <div
                        className='col-span-7 lg:col-span-7 xl:mt-0 mt-20 xl:col-span-5 xl:pr-20 flex flex-col items-end'>
                        <div className=' xl:ml-10 mx-auto overflow-hidden rounded-3xl object-cover h-taller'>
                            <img className='w-full' src='/img/1019-1000x600.jpg'/>
                        </div>
                        <h2 className='text-right text-neutral1 mt-20 mb-4'>بازار اولیه</h2>
                        <h1 className='text-right dana-black text-3xl mb-20'>{asset.name}</h1>
                        <Offers assetID={asset.id}/>
                    </div>
                </div>

            </main>

            <footer>

            </footer>
        </div>
    );
};
AssetDetails.getInitialProps = async (ctx) => {
    const {id} = ctx.query;
    const res = await fetch(`https://api2.subkhoone.com/api/assets/${id}`);
    const json = await res.json();

    return {asset: json.data}
};

export default AssetDetails;

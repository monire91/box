import React, {useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import APIHelper from "../apiHelper";

const MyOffers = ({marketID}) => {

    const [cookies, setCookie] = useCookies(['Authorization']);
    const [data, setData] = useState([]);

    useEffect(() => {

        const request = {
            data: {},
            method: 'GET',
            headers: {'Authorization': `Bearer ${cookies['Authorization']}`},
            url: `https://api2.subkhoone.com/api/my/primary_markets/${marketID}/primary_offers/`
        };
        const result = APIHelper(request);
        result.then(res => {
            console.log('my offers  ', res);
            setData(res.data.data)

        }).catch(err => {
            console.log(err)
        })


    }, []);


    return (
        <div className='w-full mt-10 text-sm border-2 rounded-3xl overflow-hidden border-gray-300 pt-4 pb-4 px-4'>
            <div className='flex items-center justify-end p-2'>
                <span className='dana-black text-sm '>پیشنهاد شما</span>
                <span className='r-money ml-4 leading-4'/>
            </div>

            <div className='col-span-4 grid grid-cols-2 font-bold py-6 rounded-lg'>
                <span className='dana text-sm text-center'> قیمت <span>(تومان)</span> </span>
                <span className='dana text-sm text-center'>تعداد صاب</span>
            </div>
            <div className='col-span-4 bg-neutral2 grid grid-cols-2 font-bold py-6 rounded-lg'>
                <p className='text-center'>1555}</p>
                <p className='text-center rtl'>5105<span>صاب</span></p>
            </div>
            <p className='w-full bg-primary mt-12 cursor-pointer text-white rounded-lg  py-5 text-center'>ویرایش</p>
            <p className='text-center text-accent mt-6 cursor-pointer'>حذف</p>
        </div>
    );
};


export default MyOffers;

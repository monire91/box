import React, {useEffect, useState} from 'react';
import apiHelper from "../apiHelper";

const Offers = ({assetID}) => {

    assetID = 1;

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const request = {
            data: {},
            method: 'GET',
            url: `https://api2.subkhoone.com/api/assets/1/primary_markets/${assetID}/primary_offers`
        };
        const result = apiHelper(request);
        result.then(res => {
            setOffers(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }, []);

    return (
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

                {offers.map((item, index) => {

                    const bgColor = index % 2 === 0 ? 'bg-neutral2' : '';

                    return <div key={index}
                                className={`col-span-4 ${bgColor} grid grid-cols-4 font-bold py-6 rounded-lg`}>
                        <p className='text-center rtl'>5105<span>صاب</span></p>
                        <p className='text-center'>{item.price}</p>
                        <p className='text-center rtl'>{item.number_of_shares}<span>صاب</span></p>
                        <p className='text-center'>{index + 1}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Offers;

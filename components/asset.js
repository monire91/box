import {React, useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import {useCities, useStates, useTransactionTypes, useUseTypes} from "../hooks/useResources";
import {useResources} from "../contexts/resources";

const Asset = ({asset}) => {
    const router = useRouter();
    useTransactionTypes();
    useUseTypes();
    useStates();
    useCities();

    const state = useResources();
    // console.log(state)
    const handleClick = () => {
        router.push(`/properties/${asset.id}/secondary`)
    };

    const getType = (arr, value) => {
        const a = arr.find(item => item.id === value);
        if(a!==undefined){
            // console.log(a.name)
            return a.name
        }
    };

    return (state.transactionTypes !== undefined &&
        <div onClick={handleClick}
             className='w-full sm-w-1/2 md:w-1/3 xl:w-1/5 ml-8 mr-10 mt-10 border-2 rounded-3xl overflow-hidden border-gray-300'>
            <div className='overflow-hidden h-tall relative w-full group'>
                <p className='w-full pr-6 pt-6 text-right absolute z-10 group-hover:text-primary'>{asset.name}</p>
                <div
                    className='w-full pl-6 pb-4 text-left text-white bottom-0 absolute z-10 flex items-center'>
                    <span>تهران-تهران</span>
                    <span className='r-location ml-2 leading-3'/>
                </div>
                <div>
                    <img
                        className='object-cover absolute rounded-3xl bottom-0 h-48 w-full transition-all duration-500 ease-out group-hover:h-full group-hover:rounded-3xl rounded-tl-big'
                        src='https://api2.subkhoone.com//uploads/CKHtZ48WUsQSmTYMPyCk/thumb_c09add48-4ac9-45c6-a0e5-157c43842f54.jpg'/>
                    <span
                        className='transition-all duration-300 ease-out rounded text-white p-2
                        text-xs bg-secondary absolute ml-6 mt-32 group-hover:opacity-0 transition
                        transform group-hover:-translate-y-16'>{getType(state.transactionTypes, asset.market_status_id)}</span>
                </div>

            </div>
            <div className='flex justify-end pt-6 pb-6'>
                <div>
                    <span className='block'>نوع ملک</span>
                    <span className='block text-right'>اداری</span>
                </div>
                <span className='r-coins-dollar text-primary pr-6 pl-6'/>
            </div>
        </div>
    );
};

export default Asset;

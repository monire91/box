import React from 'react';
import apiHelper from "../../apiHelper";
import {useCookies} from "react-cookie";

const Mobile = ({setPhoneNumber, phoneNumber,setStep}) => {
    const handleChange = (e) => {
        setPhoneNumber(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = {
            data: {phone_number: phoneNumber},
            method: 'POST',
            url: 'https://api2.subkhoone.com/api/users/one_time_password/new'
        };
        const result = apiHelper(request);
        result.then(res => {
            console.log('mobile', res);
            if (res.status === 201) {
                setStep(prevState => prevState + 1);
                localStorage.setItem('temp_token',res.data.data.temp_token)
            }

        }).catch(err => {
            console.log(err)
        })
    };
    return (
        <div>
            <div className="border-neutral  border rounded bg-white rounded-lg mb-4 p-4">
                <p className='text-gray-700'>موبایل</p>
                <input
                    onChange={handleChange}
                    className="text-right w-full appearance-none text-gray-700 text-xl leading-tight focus:outline-none "
                    type="number" placeholder="موبایل"/>
            </div>
            <button
                className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
                type="button">
                دریافت کد
            </button>
        </div>
    );
};

export default Mobile;

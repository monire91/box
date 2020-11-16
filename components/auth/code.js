import React, {useState} from 'react';
import apiHelper from "../../apiHelper";
import {useCookies} from "react-cookie";

const Code = ({phoneNumber, setStep}) => {
    const [code, setCode] = useState('');
    const [cookies, setCookie] = useCookies(['Authorization']);

    const handleChange = (e) => {
        setCode(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = {
            data: {phone_number: phoneNumber, password: code, temp_token: localStorage.getItem('temp_token')},
            method: 'POST',
            url: 'https://api2.subkhoone.com/api/users/one_time_password/login'
        };
        const result = apiHelper(request);
        result.then(res => {
            console.log('code', res);
            if (res.status === 200) {
                setStep(prevState => prevState + 1)
                localStorage.removeItem('temp_token');
                setCookie('Authorization', res.data.data.jwt_token);
            }

        }).catch(err => {
            console.log(err)
        })
    };
    return (
        <div>
            <div className="border-neutral  border rounded bg-white rounded-lg mb-4 p-4">
                <p className='text-gray-700'>کد</p>
                <input
                    onChange={handleChange}
                    className="text-right w-full appearance-none text-gray-700 text-xl leading-tight focus:outline-none "
                    type="number" placeholder="کد"/>
            </div>
            <button
                className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
                type="button">
                ورود
            </button>
        </div>
    );
};

export default Code;

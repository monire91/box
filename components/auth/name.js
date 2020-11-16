import React, {useState} from 'react';
import apiHelper from "../../apiHelper";
import {useCookies} from "react-cookie";

const Name = ({setPhoneNumber, phoneNumber, setStep}) => {

    const [cookies, setCookie] = useCookies(['Authorization']);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleChange = (e, key) => {
        if (key === 'firstName') {
            setFirstName(e.target.value)
        } else if (key === 'lastName') {
            setLastName(e.target.value)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const request = {
            data: {
                user: {
                    first_name: firstName, last_name: lastName
                }
            },
            headers: {'Authorization': `Bearer ${cookies['Authorization']}`},
            method: 'POST',
            url: 'https://api2.subkhoone.com/api/users/my/update'
        };
        console.log(request)
        const result = apiHelper(request);
        result.then(res => {
            console.log('name', res);
            if (res.status === 201) {
                setStep(prevState => prevState + 1)
            }

        }).catch(err => {
            console.log(err)
        })
    };
    return (
        <div>
            <div className="border-neutral  border rounded bg-white rounded-lg mb-4 p-4">
                <p className='text-gray-700'>نام</p>
                <input
                    onChange={e => handleChange(e, 'firstName')}
                    className="text-right w-full appearance-none text-gray-700 text-xl leading-tight focus:outline-none "
                    type="text" placeholder="نام"/>
            </div>
            <div className="mt-8 border-neutral  border rounded bg-white rounded-lg mb-4 p-4">
                <p className='text-gray-700'>نام خانوادگی</p>
                <input
                    onChange={e => handleChange(e, 'lastName')}
                    className="text-right w-full appearance-none text-gray-700 text-xl leading-tight focus:outline-none "
                    type="text" placeholder="نام خانوادگی"/>
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

export default Name;

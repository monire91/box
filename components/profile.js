import Link from "next/link";
import {useCookies} from 'react-cookie';
import {useAuth} from '../hooks/useAuth'
import axios from 'axios'
import {useEffect, useState} from "react";

export default function Profile({page}) {
    const [cookies, setCookie] = useCookies(['Authorization']);
    const fetcher = url => {
        // setCookie('Authorization', 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtYXJrZXRfbWFuYWdlcl92MiIsImV4cCI6MTYwNTc3MTU5MywiaWF0IjoxNjAzMzUyMzkzLCJpc3MiOiJtYXJrZXRfbWFuYWdlcl92MiIsImp0aSI6IjEwMWM3YjEyLTA4MmEtNDE2ZS04MDE3LWI5ODk3YWE5NTA1ZCIsIm5iZiI6MTYwMzM1MjM5Miwic3ViIjoiMSIsInR5cCI6ImFjY2VzcyJ9.gAhY70Qpj58KHRLwlzH7Uq28esuRtRcXGiUg_nr-P0apqq7gbTzlvKI4-dT5cxr5I3T8SSvjdi7eGjK92rPjxw')
        const data = {};
        const options = {
            method: 'GET',
            headers: {'Authorization': `Bearer ${cookies['Authorization']}`},
            data: data,
            url,
        };
        return axios(options);
    };
    const {data, error} = useAuth("/api/users/my", fetcher);

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open)
    };

    const close = () => {
        setOpen(false)
    }

    const skeleton = <div className='relative'>
      <span
          onClick={toggle}
          className={`r-person px-4 cursor-pointer hover:text-primary xl:text-black ${page === 'home' ? "text-white" : "text-primary"}`}
      />
        <div className={`${open ? "block" : "hidden"}`}>
            <Link href={`/auth/login`}>
                <a>
                    <div onClick={close}
                         className='shadow flex justify-end rounded-2xl mt-8 items-center absolute left-1/2 transform -translate-x-1/2 w-64 h-16 bg-white'>
                        <p>ورود یا ثبت نام</p>
                        <span
                            className='r-person px-4 text-black
                            cursor-pointer hover:text-primary '/>
                    </div>
                </a>
            </Link>
        </div>
    </div>;

    if (error) return skeleton;
    if (!data) return skeleton;

    return (
        data && <div className='flex items-center'>
            <div className='mr-4'>
                <span className='text-base'>{data.data.data.last_name}</span>
                <span className='text-base inline-block ml-1'>{data.data.data.first_name}</span>
                <p className='text-base text-right'>{data.data.data.balance}</p>
            </div>
            <img className='w-12 h-12 rounded-full' src={`https://api2.subkhoone.com/${data.data.data.image_url}`}/>
        </div>
    )
}

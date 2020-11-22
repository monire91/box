import Link from "next/link";
import {useCookies} from 'react-cookie';
import {useAuth} from '../hooks/useAuth'
import {useState} from "react";
import APIHelper from '../apiHelper'
import {numberWithCommas} from '../utils/Utils'

export default function Profile({page}) {
    const [cookies, setCookie] = useCookies(['Authorization']);
    const fetcher = url => {
        const request = {
            data: {},
            method: 'GET',
            headers: {'Authorization': `Bearer ${cookies['Authorization']}`},
            url
        };
        return APIHelper(request);
    };
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
    if (cookies['Authorization'] === undefined) return skeleton

    const {data, error} = useAuth("api/users/my", fetcher);
    if (error) return skeleton;
    if (!data) return skeleton;

    return (
        data && <div className='flex items-center'>
            <div className='mr-4 text-right dana hidden md:block'>
                <span className='text-base'>{data.data.data.last_name}</span>
                <span className='text-base inline-block ml-1'>{data.data.data.first_name}</span>
                <p className='text-base text-xm text-right text-neutral1'>{numberWithCommas(data.data.data.balance)}</p>
            </div>
            <div className='sm:w-12  w-8 '>
                <img className='rounded-full h-full w-full'
                     src={`https://api2.subkhoone.com/${data.data.data.image_url}`}/>
            </div>
        </div>
    )
}

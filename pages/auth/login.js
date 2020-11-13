import Head from 'next/head'
import React, {useState} from "react";
import Navbar from "../../components/navbar";

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api2.subkhoone.com/api/users/one_time_password/new`)
    const data = await res.json()

    // Pass data to the page via props
    return {props: {data}}
}

function Login({data}) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleChange = (e) => {
        setPhoneNumber(e.target.value)
    };
    return (
        <div className='font-dana'>
            <Head>
                <title>subkhoone</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Navbar page='login'/>
                <div className='flex absolute right-0 justify-end'>
                    <div className='flex-1'>
                    </div>
                    <div className=' overflow-hidden'>
                        <img
                            alt='building'
                            src="/img/login.7531521154f799b3e72b9209676c370d.png"
                        />
                    </div>
                    <div className='absolute pl-10 pr-40 text-right pt-40 bg-white h-full w-2/5 left-0'>
                        <p className='pt-4 pb-4 text-4xl'>ورود</p>
                        <p className='rtl mb-8'>تمام فیلد ها را به صورت صحیح وارد کنید.</p>
                        <form>
                            <div className="border-neutral  border rounded bg-white rounded-lg mb-4 p-4">
                                <p className='text-gray-700'>موبایل</p>
                                <input
                                    onChange={handleChange}
                                    className="text-right appearance-none text-gray-700 text-xl leading-tight focus:outline-none "
                                    type="number" placeholder="موبایل"/>
                            </div>
                            <button
                                className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl focus:outline-none focus:shadow-outline"
                                type="button">
                                دریافت کد
                            </button>
                        </form>
                    </div>
                    <img className='absolute left-40% h-full'
                         alt='divider'
                         src="/img/login.svg"
                    />
                </div>
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default Login

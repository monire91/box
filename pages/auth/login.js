import Head from 'next/head'
import React, {useState} from "react";
import Navbar from "../../components/navbar";
import apiHelper from "../../apiHelper";
import Mobile from "../../components/auth/mobile";
import Code from "../../components/auth/code";
import Name from "../../components/auth/name";

// export async function getServerSideProps() {
//     const rawResponse = await fetch('https://api2.subkhoone.com/api/users/one_time_password/new', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({phone_number: "989104924319"})
//     });
//     const posts = await rawResponse.json();
//     return {
//         props: {
//             results: posts,
//         }
//     }
// }

function Login(props) {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [step, setStep] = useState(0);

    console.log('step', step)
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
                    <div className='sm:block hidden overflow-hidden'>
                        <img
                            alt='building'
                            src="/img/login.7531521154f799b3e72b9209676c370d.png"
                        />
                    </div>
                    <div className='sm:absolute fixed pl-10 xl:pr-40 pr-10 text-right pt-40 bg-white h-full w-full sm:w-2/5 left-0'>
                        <p className='pt-4 pb-4 text-4xl'>ورود</p>
                        <p className='rtl mb-8 aaa'>تمام فیلد ها را به صورت صحیح وارد کنید.</p>
                        <form>
                            {step === 0 &&
                            <Mobile setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} setStep={setStep}/>}
                            {step === 1 &&
                            <Code phoneNumber={phoneNumber} setStep={setStep}/>}
                            {step === 2 &&
                            <Name setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} setStep={setStep}/>}
                        </form>
                    </div>
                    <img className='sm:block hidden absolute left-40% h-full'
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

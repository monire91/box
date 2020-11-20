import React from 'react';
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Asset from "../components/asset";
import Modal from "../components/modal";

const Properties = ({assets}) => {

    return (
        <div>
            <Head>
                <title>subkhoone</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className='mt-56 mb-56'>
                <Modal activeItem={4}/>
                <Navbar page='login' activeItem={3}/>
                <div className='flex flex-wrap flex-row xl:justify-between justify-start justify-center'>
                    {assets.map((item, index) => {
                        return <Asset key={index} asset={item}/>
                    })}
                </div>

            </main>

            <footer>

            </footer>
        </div>
    );
};

Properties.getInitialProps = async () => {
    const res = await fetch('https://api2.subkhoone.com/api/assets');
    const json = await res.json();

    return {assets: json.data}
};


export default Properties;

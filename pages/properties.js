import React, {useEffect, useState} from 'react';
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Asset from "../components/asset";
import Modal from "../components/modal";

const Properties = ({assets}) => {

    const [data, setData] = useState([]);

    const normalize = () => {
        console.log(assets)
            assets.map((item, index) => {
                if (item.present_primary_market_id != null) {
                    // data.push({item: item, useType: 'primary'})
                    setData(...data, {item: item, useType: 'primary'});
                }
                if (item.present_secondary_market_id != null) {
                    // data.push({item: item, useType: 'secondary'})
                    setData(...data, {item: item, useType: 'secondary'});

                }
                if (item.present_exit_market_id != null) {
                    // data.push({item: item, useType: 'exit'})
                    setData(...data, {item: item, useType: 'exit'});

                }
            });
            console.log(data)
        }
    ;

    useEffect(() => {
        normalize()
    }, []);

    return (
        data.length>0 && <div>
            <Head>
                <title>subkhoone</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className='mt-56 mb-56'>
                <Modal activeItem={4}/>
                <Navbar page='login' activeItem={3}/>
                <div className='flex flex-wrap flex-row xl:justify-between justify-start justify-center'>
                    {data.map((item, index) => {
                        console.log(item)
                        // return <Asset key={index} asset={item.item}/>
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

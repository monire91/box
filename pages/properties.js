import React, {useEffect, useState} from 'react';
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Asset from "../components/asset";
import Modal from "../components/modals/modal";

const Properties = ({assets}) => {

    const [Data, setData] = useState([]);

    console.log(assets);

    const normalize = () => {
            const data = [];
            assets.map((item) => {
                if(item.parent_id===null){
                    if (item.present_primary_market_id != null) {
                        data.push({item: item, useType: 'بازار اولیه', path: 'primary'})
                        // setData(...data, {item: item, useType: 'primary'});
                    }
                    if (item.present_secondary_market_id != null) {
                        data.push({item: item, useType: 'بازار ثانویه', path: 'secondary'})
                        // setData(...data, {item: item, useType: 'secondary'});

                    }
                    if (item.present_exit_market_id != null) {
                        data.push({item: item, useType: 'بازار خروج', path: 'exit'})
                        // setData(...data, {item: item, useType: 'exit'});
                    }
                }
            });
            setData(data)
        };

    useEffect(() => {
        normalize()
    }, []);

    return (
        Data.length > 0 && <div>
            <Head>
                <title>subkhoone</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className='mt-56 mb-56'>
                <Modal activeItem={4}/>
                <Navbar page='login' activeItem={3}/>
                <div className='flex flex-wrap flex-row  justify-start justify-center'>
                    {Data.map((item, index) => {
                        console.log(item)
                        return <Asset key={index} asset={item.item} useType={item.useType} path={item.path}/>
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

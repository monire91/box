import Head from 'next/head'
import React from "react";
import Link from 'next/link'
import Navbar from "../components/navbar/navbar";


export default function Home() {
    return (
        <div>
            <Head>
                <title>subkhoone</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Navbar page='home' activeItem={4}/>
                <div className='relative'>
                    <img
                        alt='building'
                        src="/img/head.024f4ec2ccee69d96bc60b3dc7a56ca7.png"
                    />
                    <img className='absolute bottom-0'
                         alt='divider'
                         src="/img/index.svg"
                    />
                </div>
            </main>

            <footer>

            </footer>
        </div>
    )
}

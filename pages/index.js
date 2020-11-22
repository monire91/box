import Head from 'next/head'
import Navbar from "../components/navbar/navbar";
import Modal from "../components/modals/modal";

export default function Home() {
    return (
        <div>
            <Head>
                <title>subkhoone</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Modal activeItem={4}/>
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

import Link from "next/link";
import Profile from "../profile";
import {items} from './navbarItems'

export default function Navbar({page, activeItem}) {
    const toggleNavbar = () => {
        let modal = document.getElementById('myModal');
        let navToggler = document.getElementById('navToggler');
        let toggleNavbarClose = document.getElementById('toggleNavbarClose');
        navToggler.style.display = "none";
        toggleNavbarClose.style.display = "block";
        modal.style.display = "block";
      };

    const toggleNavbarClose = () => {
        let modal = document.getElementById('myModal');
        let navToggler = document.getElementById('navToggler');
        let toggleNavbarClose = document.getElementById('toggleNavbarClose');
        navToggler.style.display = "block";
        toggleNavbarClose.style.display = "none";
        modal.style.display = "none";
    };
    return (
        <nav className='py-4 w-full grid grid-cols-3 xl:grid-cols-5 absolute top-0 z-20'>
            <div className='col-span-1 xl:flex hidden justify-end items-center cursor-pointer'>
                <span
                    className='bg-primary rounded-2xl h-16 w-56 text-white flex justify-center
                    items-center dana'>ملک خود را ثبت کنید</span>
            </div>
            <div className='flex justify-start px-4 items-center text-2xl '>
                <Profile page={page}/>
                <Link href={`#`}>
                    <a>
                        <span
                            className={`r-search px-4 cursor-pointer hover:text-primary xl:text-black ${page === 'home' ? "text-white" : "text-primary"}`}
                        />
                    </a>
                </Link>
            </div>
            <ul id='nav'
                className='xl:flex hidden justify-center items-center col-span-2'>
                {items.map((item, index) => {
                    return <Link key={index} href={`${item.url}`}>
                        <a>
                            <li className={`dana-black text-lg ${activeItem === index ? 'navItem-active' : 'navItem'}`}>
                                {item.name}
                            </li>
                        </a>
                    </Link>
                })}
            </ul>
            {page === 'home' && <>
                <div className='xl:flex hidden justify-center cursor-pointer'>
                    <img
                        alt='building'
                        src="/img/logo.svg"
                    />
                </div>

                <div className='xl:hidden flex justify-center cursor-pointer'>
                    <Link href={`/`}>
                        <a>
                            <img
                                alt='building'
                                src="/img/white-logo.svg"
                            />
                        </a>
                    </Link>

                </div>
            </>}

            {page === 'login' && <>
                <div className='flex justify-center cursor-pointer'>
                    <Link href={`/`}>
                        <a>
                            <img
                                alt='building'
                                src="/img/logo.svg"
                            />
                        </a>
                    </Link>

                </div>
            </>}

            <span id='toggleNavbarClose'
                  onClick={toggleNavbarClose}
                className='r-cancel hidden xl:hidden px-4 justify-self-center cursor-pointer text-white'/>

            <div
                id='navToggler'
                onClick={toggleNavbar}
                className='xl:hidden px-4 justify-self-center block cursor-pointer'>
                <div className='flex'>
                    <div
                        className={`rounded-r-full rounded-l-full  w-1 h-1 m-1 ${page === 'home' ? "bg-white" : "bg-primary"}`}/>
                    <div
                        className={`rounded-r-full rounded-l-full  w-1 h-1 m-1 ${page === 'home' ? "bg-white" : "bg-primary"}`}/>
                </div>
                <div className='flex'>
                    <div
                        className={`rounded-r-full rounded-l-full  w-1 h-1 m-1 ${page === 'home' ? "bg-white" : "bg-primary"}`}/>
                    <div
                        className={`rounded-r-full rounded-l-full  w-1 h-1 m-1 ${page === 'home' ? "bg-white" : "bg-primary"}`}/>
                </div>
            </div>
        </nav>
    )
}

import Link from "next/link";
import Profile from "./profile";

export default function Navbar({page}) {
    return (
        <nav className='py-4 w-full grid grid-cols-3 xl:grid-cols-4 absolute top-0 z-10'>
            <div className='col-span-1 xl:flex hidden justify-end items-center cursor-pointer'>
                <span
                    className='font-semibold bg-primary rounded-2xl h-16 w-56 text-white flex justify-center
                    items-center'>ملک خود را ثبت کنید</span>
            </div>
            <div className='flex justify-start px-4 items-center text-2xl '>
                <Profile page={page}/>
                <Link href={`/#`}>
                    <a>
                        <span
                            className={`r-search px-4 cursor-pointer hover:text-primary xl:text-black ${page === 'home' ? "text-white" : "text-primary"}`}
                        />
                    </a>
                </Link>
            </div>
            <ul className='xl:flex hidden justify-center items-center'>
                <li className='navItem'>وبلاگ</li>
                <li className='navItem'>تماس باما</li>
                <li className='navItem'>چراما</li>
                <li className='navItem'>املاک</li>
                <li className='navItem'>خانه</li>
            </ul>
            {page === 'home' && <>
                <div className='xl:flex hidden justify-center cursor-pointer'>
                    <img
                        alt='building'
                        src="/img/logo.svg"
                    />
                </div>

                <div className='xl:hidden flex justify-center cursor-pointer'>
                    <img
                        alt='building'
                        src="/img/white-logo.svg"
                    />
                </div>
            </>}

            {page === 'login' && <>
                <div className='flex justify-center cursor-pointer'>
                    <img
                        alt='building'
                        src="/img/logo.svg"
                    />
                </div>
            </>}

            <div className='xl:hidden px-4 justify-self-center cursor-pointer'>
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

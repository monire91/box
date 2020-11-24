import React, {useEffect} from 'react';
import {itemsCollapsed} from "../navbar/navbarItems";
import Link from "next/link";
import {useResources} from "../../contexts/resources";

const Modal = () => {

    const data = useResources();

    useEffect(() => {
        const modal = document.getElementById('myModal');
        const modal2 = document.getElementById('myModal2');

        window.onclick = function (event) {
            if (event.target === modal ||event.target === modal2) {
                modal.style.display = "none";
                modal2.style.display = "none";
                let toggleNavbarClose = document.getElementById('toggleNavbarClose');
                toggleNavbarClose.style.display = "none"
                let navToggler = document.getElementById('navToggler');

                let intElemClientWidth = window.innerWidth ;
                if(intElemClientWidth<1280){
                    navToggler.style.display = "block"
                }
            }
        }
    }, []);

    return (
        <div id="myModal" className="modal z-20 fixed">
            <div className="modal-content rounded-2xl overflow-hidden modal-width-1">
                <div className="pr-10 text-right">
                    {itemsCollapsed.map((item, index) => {
                        return <Link key={index} href={`${item.url}`}>
                            <a>
                                <p className={`pt-6 pb-6 dana-black ${data.activeNavItem === item.name ? 'text-primary mx-4' : 'navItem'}`}>
                                    {item.name}
                                </p>
                            </a>
                        </Link>
                    })}
                </div>
            </div>

            <p className='modal-content mt-10 bg-primary text-white rounded-2xl text-center pt-6 pb-6 border-none'>ملک خود را ثبت کنید</p>

        </div>
    );
};

export default Modal;

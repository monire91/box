import React, {useEffect} from 'react';
import {itemsCollapsed} from "./navbar/navbarItems";
import Link from "next/link";

const Modal = (activeItem) => {

    console.log(activeItem)

    useEffect(() => {
        const modal = document.getElementById('myModal');
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
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
            <div className="modal-content rounded-2xl overflow-hidden">
                <div className="pr-10 text-right">
                    {itemsCollapsed.map((item, index) => {
                        return <Link key={index} href={`${item.url}`}>
                            <a>
                                <p className={`pt-6 pb-6 ${activeItem === index ? 'text-primary' : 'navItem'}`}>
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

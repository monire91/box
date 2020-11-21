import React, {useEffect} from 'react';
import {itemsCollapsed} from "./navbar/navbarItems";
import Link from "next/link";

const Modal2 = (activeItem) => {

    console.log(activeItem)

    const closeModal = () => {
        let modal = document.getElementById('myModal2');
        modal.style.display = "none";
    };

    return (
        <div id="myModal2" className="modal z-20 fixed">
            <div className="modal-content rounded overflow-hidden modal-width-2">
                <div className='p-4 flex space-between items-center'>
                    <span
                        onClick={closeModal}
                        className='justify-self-start r-cancel text-xs'/>
                    <div>
                        <span className='text-2xl dana font-bold'>ثبت پیشنهاد</span>
                        <span className='r-hands-and-gestures text-2xl ml-4'/>
                    </div>

                </div>
                <div className='bg-neutral3 rounded-3xl pt-20 px-20 pb-10'>
                    <p className='text-xl dana font-bold text-center mb-12'>مشخص کردن ارقام</p>
                    <div className='grid grid-cols-8 '>
                        <span className='col-span-2 place-self-center'>میلیون تومان</span>
                        <input
                            type="number"
                            placeholder={0}
                            className="text-center h-20 dana appearance-none text-gray-700 text-xl leading-tight focus:outline-none "
                        />
                        <span className='col-span-2 place-self-center'>صاب به قیمت هر صاب</span>
                        <input
                            type="number"
                            placeholder={0}
                            className="text-center h-20 dana appearance-none text-gray-700 text-xl leading-tight focus:outline-none "
                        />
                        <span className='col-span-2 place-self-center'>ثبت پیشنهاد</span>
                    </div>
                    <div
                        className='mt-20 mx-auto cursor-pointer text-center rounded-2xl border-gray-300 w-1/4 bg-accent text-white py-5 px-10 mt-8 text-lg'>ثبت
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal2;

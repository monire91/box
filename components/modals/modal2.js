import apiHelper from "../../apiHelper";
import {useCookies} from "react-cookie";
import {useResources} from "../../contexts/resources";

const Modal2 = ({id, primaryID, setData, setInput, input}) => {

    const [cookies, setCookie] = useCookies(['Authorization']);

    const handleChange = (e, key) => {
        e.preventDefault();
        const num = parseInt(e.target.value);
        setInput({...input, [key]: num});
    };

    const closeModal = () => {
        let modal = document.getElementById('myModal2');
        modal.style.display = "none";
    };

    const data = useResources();

    const handleSubmit = () => {

        if (data.action === 'post') {
            const request = {
                data: {
                    "primary_offer": {
                        "number_of_shares": input.number_of_shares,
                        "price": input.price,
                    }
                },
                headers: {'Authorization': `Bearer ${cookies['Authorization']}`},
                method: 'POST',
                url: `https://api2.subkhoone.com/api/assets/${id}/primary_markets/${primaryID}/primary_offers`
            };

            const result = apiHelper(request);
            result.then(res => {
                console.log('submit ', res);
                setData(res.data.data);
                closeModal()

            }).catch(err => {
                console.log(err)
            })
        }

        if (data.action === 'update') {
            const request = {
                data: {
                    "primary_offer": {
                        "number_of_shares": input.number_of_shares,
                        "price": input.price,
                    }
                },
                headers: {'Authorization': `Bearer ${cookies['Authorization']}`},
                method: 'PATCH',
                url: `https://api2.subkhoone.com/api/assets/${id}/primary_markets/${primaryID}/primary_offers/${input.id}`
            };

            const result = apiHelper(request);
            result.then(res => {
                console.log('edit offer  ', res);
                setData(res.data.data);
                closeModal()

            }).catch(err => {
                console.log(err)
            })
        }
    };

    return (
        <div id="myModal2" className="modal z-20 fixed dana">
            <div className="modal-content rounded overflow-hidden w-4/5 xl:5/6">
                <div className='p-4 flex space-between items-center'>
                    <span
                        onClick={closeModal}
                        className='justify-self-start r-cancel text-xs'/>
                    <div>
                        <span className='text-2xl dana font-bold'>ثبت پیشنهاد</span>
                        <span className='r-hands-and-gestures text-2xl ml-4'/>
                    </div>

                </div>
                <div className='bg-neutral3 rounded-3xl pt-20 md:px-10 px-2 pb-10'>
                    <p className='text-xl dana font-bold text-center mb-12'>مشخص کردن ارقام</p>
                    <div className='grid grid-cols-8 '>
                        <span className='col-span-2 font-xs text-right place-self-center'>میلیون تومان</span>
                        <input
                            onChange={(e) => {
                                handleChange(e, 'price')
                            }}
                            type="number"
                            value={input.price !== undefined ? input.price : ''}
                            placeholder={input.price !== undefined ? input.price : 0}
                            className="text-center dana h-20 w-4/5 place-self-center appearance-none text-gray-700 text-xl leading-tight focus:outline-none "
                        />
                        <span className='col-span-2 font-xs text-right place-self-center'>صاب به قیمت هر صاب</span>
                        <input
                            onChange={(e) => {
                                handleChange(e, 'number_of_shares')
                            }}
                            type="number"
                            placeholder={input.number_of_shares !== undefined ? input.number_of_shares : 0}
                            value={input.number_of_shares !== undefined ? input.number_of_shares : ''}
                            className="text-center  h-20 place-self-center dana appearance-none w-4/5 text-gray-700 text-xl leading-tight focus:outline-none "
                        />
                        <span
                            className='col-span-2 font-xs text-right place-self-center'>ثبت پیشنهاد</span>
                    </div>
                    <div
                        onClick={handleSubmit}
                        className='mt-20 mx-auto cursor-pointer text-center rounded-2xl border-gray-300 w-1/4 bg-accent text-white py-5 px-10 mt-8 text-lg'>ثبت
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal2;

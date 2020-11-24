export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const isNumber = (num) => {
    if (isNaN(num)) {
        return false;
    }
};

export const openModal = () => {
    let modal = document.getElementById('myModal2');
    modal.style.display = "block";
};


export const closeModal2 = () => {
    let modal = document.getElementById('myModal2');
    modal.style.display = "none";
};

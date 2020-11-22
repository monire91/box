export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const isNumber = (num) => {
    if (isNaN(num)) {
        return false;
    }
};

import {useDispatchCount} from "../contexts/resources";
import apiHelper from "../apiHelper";
import React, {useEffect} from 'react';

export const getTransactionTypes = () => {

    const dispatch = useDispatchCount();
    const getTransactionTypes = (payload) => {
        dispatch({
            type: 'GET_TRANSACTION_TYPES',
            payload: payload
        });
    };
    useEffect(() => {

        const request = {
            data: {},
            method: 'GET',
            url: 'https://api2.subkhoone.com/api/transaction_types',
        };
        const result = apiHelper(request);
        result.then(res => {
            console.log('aaaaaa ',res)
            getTransactionTypes(res.data.data);
        }).catch(err => {
            console.log(err)
        });

    }, []);
};

export const getUseTypes = () => {

    const dispatch = useDispatchCount();
    const getUseTypes = (payload) => {
        dispatch({
            type: 'GET_USE_TYPES',
            payload: payload
        });
    };

    useEffect(() => {
        const request = {
            data: {},
            method: 'GET',
            url: 'https://api2.subkhoone.com/api/use_types',
        };
        const result = apiHelper(request);
        result.then(res => {
            getUseTypes(res.data);
        }).catch(err => {
            console.log(err)
        });
    }, []);
};

export const getStates = () => {

    const dispatch = useDispatchCount();
    const getStates = (payload) => {
        dispatch({
            type: 'GET_STATES',
            payload: payload
        });
    };

    useEffect(() => {
        const request = {
            data: {},
            method: 'GET',
            url: 'https://api2.subkhoone.com/api/states',
        };
        const result = apiHelper(request);
        result.then(res => {
            getStates(res.data);
        }).catch(err => {
            console.log(err)
        });
    }, []);
};

export const getCities = () => {

    const dispatch = useDispatchCount();
    const getCities = (payload) => {
        dispatch({
            type: 'GET_CITIES',
            payload: payload
        });
    };

    useEffect(() => {
        const request = {
            data: {},
            method: 'GET',
            url: 'https://api2.subkhoone.com/api/cities',
        };
        const result = apiHelper(request);
        result.then(res => {
            getCities(res.data);
        }).catch(err => {
            console.log(err)
        });
    }, []);
};




export const SET_EMAIL_PASS = 'SET_EMAIL_PASS'
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'
export const GET_EMAIL_PASS = 'GET_EMAIL_PASS'
export const GET_PRODUCT_ITEM = 'GET_PRODUCT_ITEM'
export const GET_LOCATIONS_ITEM = 'GET_LOCATIONS_ITEM'
export const GET_FAMILIES_ITEM = 'GET_FAMILIES_ITEM'
export const GET_TRANSACTIONS_ITEM = 'GET_TRANSACTIONS_ITEM'
export const SET_PRODUCT_PAGE = 'SET_PRODUCT_PAGE'



export const setEmailPass =(payload)=>({type:SET_EMAIL_PASS,payload})
export const getEmailPass =(payload)=>({type:GET_EMAIL_PASS,payload})
export const setAccessToken =(payload)=>({type:SET_ACCESS_TOKEN,payload})
export const getProductItem =(payload)=>({type:GET_PRODUCT_ITEM,payload})
export const getLocationItem =(payload)=>({type:GET_LOCATIONS_ITEM,payload})
export const getFamiliesItem =(payload)=>({type:GET_FAMILIES_ITEM,payload})
export const getTransactionItem =(payload)=>({type:GET_TRANSACTIONS_ITEM,payload})
export const setProductPage =(payload) =>({type:SET_PRODUCT_PAGE,payload})

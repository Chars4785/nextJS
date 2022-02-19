import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';

export default function useGetCompanyNews(){
    return useQuery( 'getcompanynews,',async () =>{
        const { data } = await axios.get('/api/getcompanynews')
        return data 
    })
}
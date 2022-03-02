import React from 'react'
import { useQuery,useQueries,QueryClient } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  })

const fetchCompany = async() =>{
    const { data } = await axios.get('/api/getcompanynews')
    return data
}

export default function useGetCompanyNews(){
    return useQuery( 'getcompanynews,', fetchCompany,
    {
        staleTime: 60 * 1000,
        initialData: () =>{
            const re = queryClient.getQueryData('todos')?.find(d => d.id === todoId)
            console.log("re",re);
            return re
        },
        initialDataUpdatedAt: () =>{
            const re2 = queryClient.getQueryState('todos')?.dataUpdatedAt
            console.log("re2",re2);
            return re2
        },
    })
}


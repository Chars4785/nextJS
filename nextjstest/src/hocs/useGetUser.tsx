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

const fetchUser = async(query) =>{
    const { data } = await axios.get(`/api/getUser`,{
        params:{
            query
        }
    })
    return data
}

export default function useGetUser(value){
    return useQuery( 'getUser', () => fetchUser(value),{
        initialData:{
            name:'lodaing...'
        }
    });
}


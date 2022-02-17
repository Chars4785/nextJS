import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useQuery } from 'react-query';

function Home(){

  const info = useQuery('todos',)
  return(
    <div>
      
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import useRequest from '../hocs/useGetCompanyNews'
import CompanyNews from './CompanyNews'

function Home(){
  return <CompanyNews/>
}

export default Home

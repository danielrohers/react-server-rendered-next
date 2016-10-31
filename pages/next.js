import React from 'react'
import Head from '../components/head'
import Navbar from '../components/navbar'
import Link from 'next/link'

export default () => (
  <div>
    <Head title="Next"/>
    <Navbar active="next"/>
    <h1>zeit next.js</h1>
    <p>A minimalistic framework for server-rendered React applications <Link href="https://zeit.co/blog/next">https://zeit.co/blog/next</Link></p>
  </div>
)

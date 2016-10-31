import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Navbar from '../components/navbar';

export default () => (
  <div>
    <Head title="Next" />
    <Navbar active="next" />
    <h1>zeit next.js</h1>
    <p>A minimalistic framework for server-rendered React applications <Link href="https://zeit.co/blog/next">https://zeit.co/blog/next</Link></p>
  </div>
);

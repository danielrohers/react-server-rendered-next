import React from 'react'
import Head from '../components/head'
import Navbar from '../components/navbar'

export default () => (
  <div>
    <Head title="Hello World"/>
    <Navbar active="index"/>
    <h1 id="hello-world">Hello world!</h1>
  </div>
)

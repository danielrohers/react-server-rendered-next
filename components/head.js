import React from 'react'
import Head from 'next/head'

export default class extends React.Component {

  static defaultProps = {
    title: 'React Next'
  }

  render() {
    return (
      <Head>
        <title>{ this.props.title }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <link href="/static/css/style.css" rel="stylesheet" />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      </Head>
    )
  }

}

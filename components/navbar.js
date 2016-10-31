import React from 'react'
import Link from 'next/link'

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'React Next'
    }
  }

  static defaultProps = {
    active: ''
  }

  render() {
    const active = this.props.active;
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">{ this.state.name }</a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav">
              <li className={ active === 'index' ? 'active' : '' }><Link href="/index">Index</Link></li>
              <li className={ active === 'next' ? 'active' : '' }><Link href="/next">Next</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}

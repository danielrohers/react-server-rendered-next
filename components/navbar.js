import React from 'react';
import Link from 'next/link';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'React Next',
    };
  }

  render() {
    const active = this.props.active;
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a href="/" className="navbar-brand">{ this.state.name }</a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav">
              <li className={active === 'index' ? 'active' : ''}><Link href="/">Index</Link></li>
              <li className={active === 'next' ? 'active' : ''}><Link href="/next">Next</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

Navbar.propTypes = {
  active: React.PropTypes.string,
};

Navbar.defaultProps = {
  active: '',
};

export default Navbar;

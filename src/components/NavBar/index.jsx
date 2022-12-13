import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            My App
          </a>
          <button
            className={`button navbar-burger ${this.state.isOpen ? 'is-active' : ''}`}
            onClick={this.toggleOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a className="navbar-item" href="/">
              Home
            </a>
            <a className="navbar-item" href="/about">
              About
            </a>
            <a className="navbar-item" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

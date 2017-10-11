import React from 'react';
import './Header.css'
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
			title : "Rural",
			desc : "A lightweight & fast country information lookup javascript module.",
			reason : "Why use a module over a lookup service? As these are effectively JSON data sets, the return is fast and with out network latency of look up services external to the project."
		};
  }

  render() {
    return <header>
						<h1>{this.state.title}</h1>
						<p>{this.state.desc}</p>
						<p>{this.state.reason}</p>
					</header>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Header;

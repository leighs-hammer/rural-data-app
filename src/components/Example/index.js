import React from 'react';
import Rural, {ruralIso, ruralName, ruralRaw} from 'rural';
import {map} from 'lodash';
import formatJson from 'format-json-pretty';
import JsonView from 'react-pretty-json';
import './Example.css';

class Example extends React.Component {
  constructor() {
    super();
    this.state = { 
			value : "US",
			dropDown : ""
		};
		this.handleChange = this.handleChange.bind(this);
  }
	handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return <div className="exampleBlock">
			<div className="thirty">			
				<h1>What can I use it for?</h1>
				<p>Rural was built purely to create a standard set of living country data that is referenced internally to your application (no external requests). The use cases that it was built for was for currency switching, based on fragmented or different data sets, eg having country codes in different formats or needing to do a quick FX conversion of a price, knowing either the country code or currency code.</p>
				<select value={this.state.value} onChange={this.handleChange}>
					{map(this.state.dropDown, (value,key) => {
						return <option value={key} key={key}>{key} : {value.name}</option>
					})}
				</select>
				<p>Select a country from the drop down to change quick examples.</p>
				
				
			</div>
			<div className="seventy">
				
				<h3>Output of default function:<span className="codeInline">Rural(<span className="valInline">'{this.state.value}'</span>)</span></h3>
				<p>the default function returns an object of all the information availale for a country. You can access sub data with dot notation.</p>
				<pre><JsonView json={Rural(this.state.value)} /></pre>
				
				<h3>Output of default function to key:<span className="codeInline">Rural(<span className="valInline">'{this.state.value}'</span>).name</span></h3>
				<p>You can access sub data with dot notation.</p>
				<pre><JsonView json={Rural(this.state.value).name} /></pre>

				<h3>Used in display: <span className="codeInline">Rural(<span className="valInline">'{this.state.value}'</span>).name</span> & <span className="codeInline">Rural(<span className="valInline">'{this.state.value}'</span>).captialCity</span></h3>
				<p>
					The capital city of <strong>{Rural(this.state.value).name}</strong> is <strong>{Rural(this.state.value).captialCity}</strong>
				</p>

				<h3>Used in a price display:  <span className="codeInline">Rural(<span className="valInline">'{this.state.value}'</span>).currencySymbol</span></h3>
				<p>NOTE: this first checks that currency meta is available. 'currencyMeta : true'</p>
				<p>
					<strong>{Rural(this.state.value).currencyMeta === true ? (Rural(this.state.value).currencySymbol) : (Rural(this.state.value).currency) }</strong> 
					100.00

				</p>

			</div>
		</div>;
  }

  componentDidMount() {
    this.setState({ dropDown : Rural()});
  }
}

export default Example;

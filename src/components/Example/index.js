import React from 'react';
import Rural, {ruralIso, ruralName, ruralRaw} from 'rural';
import {map} from 'lodash';
class Example extends React.Component {
  constructor() {
    super();
    this.state = { 
			value : "us",
			dropDown : ""
		};
  }

  render() {
    return <div className>
			<h1>What can I use it for?</h1>
			<p>Select a country from the drop down to change quick examples.</p>
			<select>
				{
					map(this.state.dropDown, (value,key) => {
						console.log(key);
						if(key === this.state.value.toUpperCase()) {
							return <option value={key} key={key} selected>{key} : {value.name}</option>
						} else {
							return <option value={key} key={key}>{key} : {value.name}</option>
						}
						
					})
				}
			</select>
		</div>;
  }

  componentDidMount() {
    this.setState({ dropDown : Rural()});
  }
}

export default Example;

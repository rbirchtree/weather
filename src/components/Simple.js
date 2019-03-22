import React, {Component} from 'react';

class Simple extends Component {
	constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			result: null		
		};
	}

	componentDidMount(){
		fetch("http://api.openweathermap.org/data/2.5/weather?zip=94015,us&APPID=71dd692b6e018b9ef955bdbff87a0067")
		.then( res => res.json()
			).then(
			(result) => {
				this.setState({
					isLoaded: true,
					result
				})
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		);
	}

  render() {
  	console.log(this.state)
  	if (this.state.result === null){
  		return (
  			<div>
  				Nothing to see here!
  			</div>
  			)
  	} else {
  		return (
  			<div>
  			     Weather in Daly City, CA is {this.state.result["weather"][0].description}.
  			</div>
  		)
  	};
  }
}

export default Simple;

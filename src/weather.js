import React, {Component} from 'react';
import axios from 'axios';

class Weather extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			temp : '',
			humid : 0,
			icon: '',
			wind: '',
			time: '',
			location: '',
			url :'http://api.wunderground.com/api/80dca8463834e03c/conditions/q/CA/Los_Angeles.json'
			//url :'https://newsapi.org/v2/top-headlines -G -d country=us -d apiKey=41596add1e7a4a5180abedd88bec4bdf'
		};
	}
	render() {
		return (
			<div className="section">
				<h4>Weather for {this.state.location} </h4>
				
				<ul className="nobullets">
					<li>{this.state.location}</li>
					<li>{this.state.time}</li>
					<li><img src={this.state.icon} width="100px"/></li>
					<li>{this.state.temp}</li>
					<li>{this.state.temp}</li>
					<li>{this.state.humid}</li>
					<li>{this.state.wind}</li>
				</ul>
			
			</div>
		)
	}
	componentDidMount() {
		axios.get(this.state.url)
			.then(res => {
				console.log(res.data.current_observation);
				let w = res.data.current_observation;
				
				this.setState({image_url: res.data.current_observation.image.url});
				this.setState({location: res.data.current_observation.display_location.full});
				this.setState({time: res.data.current_observation.local_time_rfc822});
				this.setState({temp: w.temperature_string});
				this.setState({humid: w.relative_humidity});
				this.setState({wind: w.wind_mph + ' ' + w.wind_dir});
				this.setState({icon: w.icon_url});
				//const posts = res.data.data.children.map(obj => obj.data);
				//this.setState({ posts });
			});
	}
}

export default Weather;
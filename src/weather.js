import React, {Component} from 'react';
import axios from 'axios';
import './weather.css';

class Weather extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			temp: '',
			uv: '',
			visibility: '',
			feelslike: '',
			humidity: '',
			icon: '',
			wind: '',
			time: '',
			weather: '',
			location: '',
			dewpoint: '',
			url: 'http://api.wunderground.com/api/80dca8463834e03c/conditions/q/CA/Los_Angeles.json'
			//url :'https://newsapi.org/v2/top-headlines -G -d country=us -d apiKey=41596add1e7a4a5180abedd88bec4bdf'
		};
	}
	
	render() {
		return (
			<div className="section weather">
				<h4>Weather for {this.state.location} </h4>
				<p className="weatherPanel">
					<ul className="nobullets">
						<li><img src={this.state.icon} width="100px" alt="weather"/></li>
						<li>UV index is {this.state.uv}</li>
						<li>Weather is {this.state.weather}</li>
						<li>Visibility {this.state.visibility} miles</li>
						<li>Temperature {this.state.temp}</li>
						<li>Feels like {this.state.feelslike}</li>
						<li>Humidity {this.state.humidity}</li>
						<li>Dewpoint {this.state.dewpoint}</li>
						<li>Wind {this.state.wind}</li>
						<li>{this.state.time}</li>
					</ul>
				</p>
			
			</div>
		)
	}
	
	componentDidMount() {
		axios.get(this.state.url)
			.then(res => {
				let w = res.data.current_observation;
				console.log(w, w.visibility_mi);
				
				this.setState({dewpoint: w.dewpoint_string});
				this.setState({image_url: w.image.url});
				this.setState({location: w.display_location.full});
				this.setState({time: w.observation_time});
				this.setState({temp: w.temperature_string});
				this.setState({uv: w.UV});
				this.setState({feelslike: w.feelslike_string});
				this.setState({humidity: w.relative_humidity});
				this.setState({weather: w.weather});
				this.setState({wind: w.wind_string});
				this.setState({icon: w.icon_url});
				this.setState({visibility: w.visibility_mi});
				
			});
	}
}

export default Weather;
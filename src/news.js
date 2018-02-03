import React, {Component} from 'react';
import axios from 'axios';
import './News.css';

class News extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			stories: [],
			url: "https://api.nytimes.com/svc/mostpopular/v2/mostviewed/U.S./1.json?api-key=fb66c16f01f34381ac10fa4f3ccf03e2"
		}
	}
	
	
	render() {
		return (
			<div className="section">
				<h4>Top News from NYT</h4>
				{this.state.stories.map(item =>
					<div>
						<p>
							<a href={item.url}> {item.title}</a>
							<p>
								{item.byline} {item.publish_date} in {item.source} {item.section}
							</p>
							<p>
								{item.abstract}
							</p>
						</p>
						<p>
							{item.media.map(media =>
								<img src={media['media-metadata'][2].url} alt={media.caption}/>
							)}
						</p>
					
					</div>
				)}
			</div>
		)
	}
	
	
	componentDidMount() {
		axios.get(this.state.url)
			.then(res => {
				let news = res.data.results;
				console.log(news);
				this.setState({stories: news});
			});
	}
}

export default News;

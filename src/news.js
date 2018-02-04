import React, {Component} from 'react';
import axios from 'axios';
import './news.css';
import {Card, Icon, Item, Image} from 'semantic-ui-react'

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
			<div className="section ">
				
				<Item.Group>
					<h2>Top News from NYT</h2>
					{this.state.stories.map(item =>
						<Item>
							{item.media.map(media =>
								<Item.Image size='small' src={media['media-metadata'][2].url} alt={media.caption}/>
							)}
							<Item.Content>
								<Item.Header><a href={item.url}> {item.title}</a></Item.Header>
								<Item.Extra>{item.byline.toLowerCase().split(' ')
									.map(word =>
										word[0].toUpperCase() + word.substr(1)
									).join(' ')}
								</Item.Extra>
								<Item.Meta>Abstract</Item.Meta>
								<Item.Description>
									{item.abstract}
								</Item.Description>
								<Item.Extra>{item.publish_date} in {item.source} {item.section}
								</Item.Extra>
							</Item.Content>
						</Item>
					)}
				</Item.Group>
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

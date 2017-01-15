import React from 'react';
import SocialLink from './SocialLink';
import Office from './Office';
	// Card component
export default class Card extends React.Component{
  constructor() {
		super();
    this.state = { animation: "", "hidden": "hidden"};
  }

  componentWillMount() {
		var el = this;
		setTimeout(function(){ el.startAnimation(); }, this.props.wait);
	}
  startAnimation() {
		this.setState({ animation: "card-animation-start", "hidden": ""});
	} 
	render(){
    var contact = this.props.contacts;

		return (
				<div className= {"col-md-6 col-md-offset-3 " + this.state.animation + " " + this.state.hidden}>
					<div className="panel panel-primary">
						<div className="panel-heading">
							<p className="d-inline-block m-0">{this.props.contact.role}</p>
							<SocialLink type="web" link={this.props.contact.url}/>
							<SocialLink type="youtube" link={this.props.contact.youtube}/>
							<SocialLink type="twitter" link={this.props.contact.twitter}/>
							<SocialLink type="facebook" link={this.props.contact.facebook}/>
						</div>
						<div className="panel-body">
							<div className="cont-heading row">
								<img className="col-sm-3 cont-photo" src={this.props.contact.photo} />
								<div className="col-sm-8-offset-1">
									<h2 className="text-center m-0"> {this.props.contact.official_full} </h2>
									<div className="offices">
										{this.props.contact.office_locations.map((office, i)=>{return (<Office key={i} office={office} officeId={i}/>)})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
};
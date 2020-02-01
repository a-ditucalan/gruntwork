import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGithubSquare,
	faFacebookSquare,
	faTwitterSquare,
	faYoutubeSquare,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const footerLinks = [
	{
		name: 'Product',
		links: [
			{
				title: 'Service Catalog',
				link: '#',
				external: false
			},
			{
				title: 'Reference Architecture',
				link: '#',
				external: false
			},
			{
				title: 'DevOps Training',
				link: '#',
				external: false
			},
			{
				title: 'Professional Services',
				link: '#',
				external: false
			},
			{
				title: 'Support',
				link: '#',
				external: false
			},
			{
				title: 'Pricing',
				link: '#',
				external: false
			}
		]
	},
	{
		name: 'Use Cases',
		links: [
			{
				title: 'Run Microservices on AWS',
				link: '#',
				external: false
			},
			{
				title: 'Run Microservices on GCP',
				link: '#',
				external: false
			},
			{
				title: 'Use Kubernetes on AWS',
				link: '#',
				external: false
			},
			{
				title: 'Use Kubernetes on GCP',
				link: '#',
				external: false
			},
			{
				title: 'Migrate to Cloud',
				link: '#',
				external: false
			},
			{
				title: 'Achieve Complience',
				link: '#',
				external: false
			},
			{
				title: 'Build an End-to-end Tech Stack on AWS',
				link: '#',
				external: false
			},
			{
				title: 'Build an End-to-end Tech Stack on GCP',
				link: '#',
				external: false
			}
		]
	},
	{
		name: 'Learn',
		links: [
			{
				title: 'What is DevOps as a Service?',
				link: '#',
				external: false
			},
			{
				title: 'Why Gruntwork?',
				link: '#',
				external: false
			},
			{
				title: 'Production Deployment Guides',
				link: '#',
				external: false
			},
			{
				title: 'FAQ',
				link: '#',
				external: false
			},
			{
				title: 'Docs',
				link: '#',
				external: false
			}
		]
	},
	{
		name: 'Company',
		links: [
			{
				title: 'About',
				link: '#',
				external: false
			},
			{
				title: 'How We Work',
				link: '#',
				external: false
			},
			{
				title: 'Careers',
				link: '#',
				external: false
			},
			{
				title: 'Blog',
				link: '#',
				external: false
			},
			{
				title: 'Newsletter',
				link: '#',
				external: false
			},
			{
				title: 'Contact Us',
				link: '#',
				external: false
			}
		]
	}
]

const footerLinks2 = [
	{
		link: '#',
		title: 'Terms of Service',
		external: false
	},
	{
		link: '#',
		title: 'Privacy Policy',
		external: false
	},
	{
		link: '#',
		title: 'Cookie Policy',
		external: false
	}
]

const FooterSocial = [
	{
		link: '#',
		icon: <FontAwesomeIcon icon={faGithubSquare} color="white" size="1x" />,
		external: false
	},
	{
		link: '#',
		icon: <FontAwesomeIcon icon={faFacebookSquare} color="white" size="1x" />,
		external: false
	},
	{
		link: '#',
		icon: <FontAwesomeIcon icon={faTwitterSquare} color="white" size="1x" />,
		external: false
	},
	{
		link: '#',
		icon: <FontAwesomeIcon icon={faLinkedin} color="white" size="1x" />,
		external: false
	},
	{
		link: '#',
		icon: <FontAwesomeIcon icon={faYoutubeSquare} color="white" size="1x" />,
		external: false
	}
]

export default class Header extends Component {
	render() {
		return (
			<div className="footer">
				<div className="custom-container">
					<div className="row">
						{footerLinks.map((content, i) => {
							return (
								<div className="col-md-6 col-lg-3" key={i}>
									<h2 className="footer--title sub-title">{content.name}</h2>
									<ul className="footer__item">
										{content.links.map((link, j) => {
											return (
												<li className="sub-text footer--text" key={j}>
													{link.external === true ? (
														<Link to={link.link} target="_blank">
															{link.title}
														</Link>
													) : (
														<Link to={link.link}>{link.title}</Link>
													)}
												</li>
											)
										})}
									</ul>
								</div>
							)
						})}
					</div>
					<div className="footer__copyright">
						<div className="footer__copyright--wrapper">
							<p className="copyright-text sub-text footer--text">
								© 2019 Gruntwork, Inc. All rights reserved.
							</p>
						</div>
						<div className="footer__copyright--wrapper sub-text footer--text">
							{footerLinks2.map((content, i) => {
								return (
									<span key={i} className="copyright-text">
										{content.external === true ? (
											<Link to={content.link} target="_blank">
												{content.title}
											</Link>
										) : (
											<Link to={content.link}>{content.title}</Link>
										)}
									</span>
								)
							})}
						</div>
						<div className="footer__copyright--wrapper">
							<div className="social-wrapper">
								{FooterSocial.map((content, i) => {
									return (
										<span>
											{content.external === true ? (
												<Link to={content.link} target="_blank" key={i}>
													{content.icon}
												</Link>
											) : (
												<Link to={content.link}>{content.icon}</Link>
											)}
										</span>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

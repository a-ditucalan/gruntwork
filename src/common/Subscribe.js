import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

function Subscribe({ content }) {
	return (
		<div className="subscribe">
			<h2 className="subscribe__main-title">{content.mainTitle}</h2>
			<ul className="subscribe__list">
				{content.list.map((item, i) => {
					return (
						<li className="subscribe__item" key={i}>
							<div className="subscribe__text">
								<h3 className="subscribe__title">{item.title}</h3>
								<p className="subscribe__description">
									{item.description} <Link to={item.link}> Learn More </Link>
								</p>
							</div>
						</li>
					)
				})}
			</ul>
			{content.button.map((btn, j) => {
				return (
					<div className="button__holder">
						<Link
							to={btn.buttonLink}
							className={classnames('button', {
								'button--gradient-blue': btn.blue,
								'button--transparent': btn.transparent
							})}
						>
							{btn.buttonText}
						</Link>
					</div>
				)
			})}
		</div>
	)
}

export default Subscribe

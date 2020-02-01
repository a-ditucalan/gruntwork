import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb({ content }) {
	return (
		<div className="breadcrumb--custom">
			<div className="custom-container">
				<ul className="breadcrumb__list">
					{content.map((item, i) => {
						return (
							<li className="breadcrumb__item" key={i}>
								<Link to={item.link} className="breadcrumb__link">
									{item.title}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Breadcrumb

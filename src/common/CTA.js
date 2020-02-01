import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const CTA = ({ content }) => {
	return (
		<div
			id="section-cta"
			className={classnames('cta__section', {
				'cta__background--blue-a': content.backgroundBlueA,
				'cta__background--blue-b': content.backgroundBlueB,
				'cta__background--white': content.backgroundWhite
			})}
		>
			<div className="custom-container">
				<div className="cta__wrapper">
					{content.hasImage === true ? (
						<div className="cta__image--holder">
							<img
								src={content.image}
								className={classnames('cta__image', {
									'cta__image--absolute': content.absoluteImage
								})}
								alt={content.name}
							/>
						</div>
					) : (
						' '
					)}
					<div className="cta__text--holder">
						<h2 className="cta__title"> {content.title}</h2>
						{content.hasDescription === true ? (
							<p className="cta__description"> {content.description}</p>
						) : (
							''
						)}
					</div>

					<div className="cta__button--holder">
						{content.external === true ? (
							<Link
								to={content.link}
								className={classnames('cta__button btn-hover', {
									'button--white': content.buttonWhite,
									'button--transparent': content.buttonTransparent
								})}
								target="_blank"
							>
								{content.linkText}
							</Link>
						) : (
							<Link
								to={content.link}
								className={classnames('cta__button', {
									'button--white': content.buttonWhite,
									'button--transparent': content.buttonTransparent
								})}
							>
								{' '}
								{content.linkText}{' '}
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CTA

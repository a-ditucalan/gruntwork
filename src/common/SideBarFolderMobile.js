import React from 'react'
import classnames from 'classnames'

import Times from '../assets/images/times.png'

const SideBarFolderMobile = ({ linkFolder, onClickLink, file }) => {
	return (
		<div className="preview__link-menu">
			<div className="preview__link-menu-wrapper">
				<div className="link-menu-folder">
					<div className="link-menu-folder__active">
						<div className="link-menu-folder__active-item">
							<img src={linkFolder[0].icon} className="link-menu-folder__icon" alt={linkFolder[0].name} />
							<p className="link-menu-folder__active-item--text">{file.title}</p>
						</div>
						<div className="times">
							<img onClick={onClickLink} src={Times} alt="times" />
						</div>
					</div>
					<ul className="link-menu-folder__wrapper">
						{linkFolder.map((item, i) => {
							return (
								<li
									className={classnames('link-menu-folder__item', {
										'link-menu-folder__item--active': item.activeLink
									})}
									key={i}
								>
									<a href={item.link} className="link-menu-folder__link">
										<img src={item.icon} className="link-menu-folder__icon" alt={item.name} />
										<span className="link-menu-folder__link--text">{item.title}</span>
									</a>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default SideBarFolderMobile

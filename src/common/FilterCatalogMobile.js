import React from 'react'
import NodeCheckbox from './NodeCheckbox'

import Times from '../assets/images/times.png'

const FilterCatalogMobile = ({ onChangeNodeCheckbox, overlay }) => {
	const onClose = () => {
		document.querySelector('.service-catalog__filter-mobile').classList.remove('d-block')
	}
	return (
		<div className={`service-catalog__filter-mobile service-catalog__filter-mobile-${overlay}`}>
			<div className="service-catalog__filter-mobile-title">
				<div className="service-catalog__filter-mobile--item">
					<p className="service-catalog__filter-mobile--text">Service Catalog Filter</p>
				</div>
				<div className="times">
					<img onClick={onClose} src={Times} alt="times" />
				</div>
			</div>
			<div className={`service-catalog__filter-mobile-holder`}>
				<div className="service-catalog__filter-mobile-item">
					<h3 className="service-catalog__filter-item--title sub-h3">License</h3>

					<NodeCheckbox
						onChange={onChangeNodeCheckbox}
						name="filter"
						checkboxlist={[ 'Open Source', 'Subscriber' ]}
					/>
				</div>
				<div className="service-catalog__filter-item">
					<h3 className="service-catalog__filter-item--title sub-h3">Compliance</h3>
					<NodeCheckbox
						onChange={onChangeNodeCheckbox}
						name="filter"
						checkboxlist={[ 'CIS Compliant', 'PCI Compliant', 'HIPAA Compliant' ]}
					/>
				</div>
				<div className="service-catalog__filter-item">
					<h3 className="service-catalog__filter-item--title sub-h3">WRITTEN</h3>
					<NodeCheckbox
						onChange={onChangeNodeCheckbox}
						name="filter"
						checkboxlist={[ 'Terraform', 'Go', 'Python', 'Bash' ]}
					/>
				</div>
			</div>
			<div className="btn-apply-holder">
				<button className="button btn-apply">Apply</button>
			</div>
		</div>
	)
}

export default FilterCatalogMobile

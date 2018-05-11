import React, { Component } from 'react'

export default class IconGraphItem extends Component {
	render() {
		const { id, index, label, value, icon } = this.props

		return (
			<div className={`graph-icon-item ${id}-${index}`}>
				<div className="icon">
					<img src={icon} alt={label} />
				</div>
				<div className="value" data-value={value}>
					0
				</div>
				<div className="label">
					{label}
				</div>
			</div>
		)
	}
}
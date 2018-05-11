import React, { Component } from 'react'

export default class BarGraphItem extends Component {
	render() {
		const { id, index, label, value, color, max, pre, app } = this.props

		const height = ( value / max ) * 100

		return (
			<div className={`graph-bar-item ${id}-${index}`}>
				<div className="bar" style={{ backgroundColor: color }} data-height={height}>
					<div className="bar-value">
						{pre}{value}{app}
					</div>
				</div>
				<div className="label">
					{label}
				</div>
			</div>
		)
	}
}
import React, { Component } from 'react'

import IconGraphItem from './icon-graph-item'

export default class IconGraph extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { id, data } = this.props

		var items = data.map((item, index) => {
			return <IconGraphItem 
				label={item.label} 
				value={item.value} 
				icon={item.icon}
				key={index} 
				index={index} 
				id={id} />
		})

		return (
			<div className="graph-icon" id={id}>
				<div className="graph-icon-inner">
					{ items }
				</div>
			</div>
		)
	}
}
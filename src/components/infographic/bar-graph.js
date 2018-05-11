import React, { Component } from 'react'

import BarGraphItem from './bar-graph-item'

export default class BarGraph extends Component {
	render() {
		const { id, data, pre, app } = this.props

		var max = 0

		for ( let i = 0; i < data.length; i++ ){
			max = max > data[i].value ? max : data[i].value
		}

		var items = data.map((item, index) => {
			return <BarGraphItem 
				label={item.label} 
				value={item.value} 
				max={max} 
				key={index} 
				index={index} 
				id={id} 
				color={item.color}
				pre={pre}
				app={app} />
		})

		return (
			<div className="graph-bar" id={id}>
				<div className="graph-bar-inner">
					{ items }
				</div>
			</div>
		)
	}
}
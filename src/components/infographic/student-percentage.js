import React, { Component } from 'react'
import anime from 'animejs'

import StudentPercentageItem from './student-percentage-item'

export default class StudentPercentage extends Component {
	componentDidMount() {
		const { id, nodes, percentage } = this.props

		var values = {
			perc: '0%'
		}

		anime({
			targets: values,
			perc: percentage +'%',
			easing: 'easeOutQuad',
			round: 1,
			duration: ( parseInt(nodes, 10) * 50 ) * ( percentage / 100 ),
			update: function() {
				const element = document.querySelector(`#${id} .percentage`);

				if ( element !== null ){
					element.innerHTML = values.perc;
				}
			}
		})
	}

	render() {
		const { id, nodes, percentage } = this.props

		const itemMaxPerc = 100 / parseInt(nodes, 10)

		// console.log(nodes)
		// console.log(itemMaxPerc)
		var items = []

		for ( let i = 0; i < parseInt(nodes, 10); i++ ){
			const remainingPerc = parseInt(percentage, 10) - ( ( i ) * itemMaxPerc )
			var itemPerc = 0

			// console.log(remainingPerc)

			if ( remainingPerc >= itemMaxPerc ){
				itemPerc = 100
			} else if ( remainingPerc > 0 && remainingPerc < itemMaxPerc ){
				itemPerc = Math.round( ( remainingPerc / itemMaxPerc ) * 100 )
			} else if ( remainingPerc < 0 ){
				itemPerc = 0
			}

			items.push( <StudentPercentageItem key={i} id={id} index={i} percentage={itemPerc} /> )
		}

		return (
			<div className="graph-student-percentage" id={id}>
				<div className="graph-student-percentage-inner">
					<div className="graph">
						{items}
					</div>
					<div className="percentage"></div>
				</div>
			</div>
		)
	}
}
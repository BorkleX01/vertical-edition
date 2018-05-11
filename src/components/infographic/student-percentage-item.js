import React, { Component } from 'react'
import anime from 'animejs'

import studentHat from '../../images/graduate-infographic-graduatehead.svg'

export default class StudentPercentageItem extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { id, index, percentage } = this.props

		if ( percentage > 0 ){
			anime({
				targets: `#${id} .${id}-${index} .fill`,
				width: percentage + '%',
				delay: 50 * index,
				duration: 50,
				easing: 'linear'
			})
		}
	}

	render() {
		const { id, index, percentage } = this.props

		return (
			<div className={`graph-student-percentage-item ${id}-${index}`}>
				<div className="fill">
					<img src={studentHat} alt="" />
				</div>
				<img src={studentHat} alt="" />
			</div>
		)
	}
}
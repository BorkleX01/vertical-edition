import React, { Component } from 'react'
import scrollMonitor from 'scrollmonitor'
import anime from 'animejs'

import ShareIcons from '../../ShareButtons'

import imgGender from '../../images/gender-infographic-femalemalefeature.svg'
import graphGender from '../../images/gender-infographic-graph.svg'
import graphGenderSmall from '../../images/gender-infographic-graph-mobile.svg'

export default class Gender extends Component {
	componentDidMount() {
		const illustrationCont = document.querySelector('#gender-infographic-inner .graphic-illustration')
		const circleCont = document.querySelector('#gender-infographic-inner .graph-circles')
		const graphCont = document.querySelector('#gender-infographic-inner .graph-svg')

		var illustrationShown = false
		var circleShown = false
		var graphShown = false

		var illustrationWatcher = scrollMonitor.create( illustrationCont )
		var circleWatcher = scrollMonitor.create( circleCont )
		var graphWatcher = scrollMonitor.create( graphCont )

		illustrationWatcher.enterViewport(function() {
			if ( !illustrationShown ){
				illustrationShown = true

				anime({
					targets: illustrationCont,
					opacity: [0, 1],
					translateY: ['-10%', '0%'],
					duration: 500,
					easing: 'easeOutQuad',
					delay: 100
				})

				illustrationWatcher.destroy()
			}
		})

		circleWatcher.enterViewport(function() {
			if ( !circleShown ){
				circleShown = true

				anime({
					targets: '#gender-infographic-inner .graph-circle',
					scale: [0, 1],
					opacity: [0, 1],
					delay: (target, index) => {
						return 200 * index
					},
					duration: 500
				})

				circleWatcher.destroy()
			}
		})

		graphWatcher.enterViewport(function() {
			if ( !graphShown ){
				graphShown = true

				anime({
					targets: graphCont,
					opacity: [0, 1],
					duration: 700,
					easing: 'easeInOutQuad'
				})

				anime({
					targets: '#gender-infographic-inner .graph-svg .wipe',
					width: 0,
					duration: 700,
					easing: 'easeInOutQuad'
				})

				anime({
					targets: '#gender-infographic-inner .graph-svg-label',
					scale: [0.6, 1],
					opacity: [0, 1],
					delay: (target, index) => {
						return 700 + (100 * index)
					},
					duration: 250
				})

				graphWatcher.destroy()
			}
		})
	}

	render() {
		return (
			<div className="poppy-outie" id="gender-infographic-inner">
				<div className="poppy-outie-inner">

					<div className="ranking">Infographic</div>
					<h2 className="post-title">Women are more educated than men...</h2>
					<ShareIcons slug={this.props.slug} title='Infographic: Women are more educated than men' excerpt='Australians who have a bachelor degree or higher by age bracket and gender (%)'/>

					<p className="description">Australians who have a bachelor degree or higher by age bracket and gender (%)</p>

					<div className="graphic">
						<div className="graphic-inner graphic-illustration">
							<img src={imgGender} alt="Illustration of a man and woman working" />
						</div>
					</div>

					<div className="graph-circles">
						<div className="graph-circles-left">
							<div className="graph-circle">
								<h3>45.1</h3>
								<h4>25-34</h4>
							</div>
							<div className="graph-circle dark-green graph-circle-md graph-circle-overlap">
								<h3>35.0</h3>
								<h4>20-64</h4>
							</div>
						</div>

						<div className="graph-circles-right">
							<div className="graph-circle red graph-circle-md">
								<h3>33.7</h3>
								<h4>25-34</h4>
							</div>
							<div className="graph-circle dark-red graph-circle-sm graph-circle-overlap">
								<h3>28.0</h3>
								<h4>20-64</h4>
							</div>
						</div>
					</div>

					<h2 className="post-title">...and the gender pay gap has narrowed.</h2>

					<p className="description">Undergraduate median starting salaries ($'000)</p>

					<div className="graph-svg graph-gender">
						<div className="wipe"></div>
						<div className="graph-svg-label label-men" aria-hidden="true">Men</div>
						<div className="graph-svg-label label-women" aria-hidden="true">Women</div>
						<img src={graphGender} alt="Graph of undergraduate median starting salaries" className="hidden-tablet hidden-mobile" />
						<img src={graphGenderSmall} alt="Graph of undergraduate median starting salaries" className="hidden-desktop" />
					</div>

					<p className="credit">Graphic: Michaela Pollock &nbsp; &nbsp; &nbsp; &nbsp;Source: ABS, AAGE, QILT</p>

				</div>
			</div>
		)
	}
}

import React, { Component } from 'react'
import { connect } from 'react-redux'
import throttle from 'lodash.throttle'

import { forEach, getElementHeight, getElementFromTop } from '../../helpers'

class Parallax extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false
		}

		this.parallaxEffect = throttle(this.parallaxEffect.bind(this), 50)
	}

	componentDidMount() {
		const { windowState } = this.props

		if ( !windowState.isMobile ){
			document.addEventListener('scroll', this.parallaxEffect)

			this.setState({
				active: true
			})
		}
	}

	componentWillReceiveProps(nextProps) {
		const { active } = this.state
		const { windowState } = this.props

		if ( !windowState.isMobile && !active ){
			document.addEventListener('scroll', this.parallaxEffect)

			this.setState({
				active: true
			})
		} else if ( windowState.isMobile && active ){
			document.removeEventListener('scroll', this.parallaxEffect)

			this.setState({
				active: false
			})
		}
	}

	parallaxEffect() {
		const { id, direction } = this.props

		const element = document.querySelector(`#${id}`)
		const top = getElementFromTop(element)
		const containerHeight = getElementHeight(element)
		const scrollTop = window.pageYOffset
		const winHeight = window.innerHeight

		if ( top <= scrollTop + winHeight && top + containerHeight >= scrollTop  ){
			const shift = (scrollTop - top) / 3
			const layers = element.querySelectorAll('.layer')

			forEach(layers, (index, layer) => {
				if ( direction === 'horizontal' ){
					const movement = -(shift * (index + 1))
					const translate3d = 'translate3d(' + movement + 'px, 0, 0)'
					
					layer.style['-webkit-transform'] = translate3d
				    layer.style['-moz-transform'] = translate3d
				    layer.style['-ms-transform'] = translate3d
				    layer.style['-o-transform'] = translate3d
				    layer.style.transform = translate3d
				} else {
					const movement = -(shift * (index + 1))
					const translate3d = 'translate3d(0, ' + movement + 'px, 0)'
					
					layer.style['-webkit-transform'] = translate3d
				    layer.style['-moz-transform'] = translate3d
				    layer.style['-ms-transform'] = translate3d
				    layer.style['-o-transform'] = translate3d
				    layer.style.transform = translate3d
				}
			})
		}
	}

	render() {
		const { active } = this.state
		const { id, className, children } = this.props

		if ( !active ){
			return null
		} else {
			return (
				<div className={className} id={id}>
					{children}
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
  const { windowState } = state

  return {
    windowState
  }
}

export default connect(mapStateToProps)(Parallax);
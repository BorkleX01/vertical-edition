import React, { Component } from 'react'

export default class LoadImage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			show: false
		}

		this.handleLoad = this.handleLoad.bind(this)
	}

	componentDidMount() {
		const { show } = this.state
		const { id } = this.props

		const target = document.querySelector('#' + id)

		target.addEventListener('load', () => {this.handleLoad(target)})
	}

	handleLoad(target) {
		const { show } = this.state

		if ( target && target.complete && !show ){
			target.removeEventListener('load', () => {this.handleLoad(target)})

			this.setState({
				show: true
			})
		}
	}

	render() {
		const { show } = this.state
		const { alt, src, id } = this.props

		return (
			<img className={show ? 'load-image show' : 'load-image'} alt={alt} src={src} id={id} />
		)
	}
}
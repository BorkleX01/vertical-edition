import React, { Component } from 'react'

export default class Tabs extends Component {
	constructor(props) {
		super(props)

		this.state = {
			active: 0
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(event, index, paging = false) {
		event.preventDefault()

		const { active } = this.state
		const { data, pager, infinite } = this.props

		if ( !paging ){
			this.setState({
				active: index
			})
		} else if ( paging === 'next' ){
			let end = pager && infinite ? 0 : data.length - 1

			this.setState({
				active: active < data.length - 1 ? active + 1 : end
			})
		} else if ( paging === 'prev' ){
			let end = pager && infinite ? data.length - 1 : 0

			this.setState({
				active: active > 0 ? active - 1 : end
			})
		}
	}

	pagination() {
		const { active } = this.state
		const { data, infinite } = this.props

		const showPrev = infinite || active !== 0 ? true : false
		const showNext = infinite || active !== data.length - 1 ? true : false

		return <div className="tabs-pager">
			<div className="pager-prev">
				<a 
					href="#prev" 
					className={showPrev ? 'active' : ''} 
					onClick={(event) => this.handleClick(event, null, 'prev')}>
					<span>Previous</span>
				</a>
			</div>
			<div className="pager-current">
				{data[active].label}
			</div>
			<div className="pager-next">
				<a 
					href="#next" 
					className={showNext ? 'active' : ''} 
					onClick={(event) => this.handleClick(event, null, 'next')}>
					<span>Next</span>
				</a>
			</div>
		</div>
	}

	render() {
		const { active } = this.state
		const { id, data, pager } = this.props
		
		var tabs = data.map((tab, index) => {
			return <li key={index}>
				<a 
					href={`#${id}-tab-${index}`} 
					className={active === index ? 'tab active' : 'tab'} 
					id={`${id}-tab-${index}`} 
					onClick={(event) => this.handleClick(event, index)}
					aria-controls={`#${id}-tab-pane-${index}`}
					aria-selected={active === index ? 'true' : 'false'}
					role="tab">
						{tab.label}
				</a>
			</li>
		})

		var panes = data.map((pane, index) => {
			return <div 
				key={index} 
				id={`${id}-tab-pane-${index}`} 
				className={active === index ? 'tab-pane show' : 'tab-pane'}
				aria-labelledby={`${id}-tab-${index}`} 
				aria-hidden={active === index ? 'false' : 'true'}
				role="tabpanel">
					{active === index ? pane.content : null}
			</div>
		})

		return (
			<div className="tabs">
				<ul className="tabs-nav" role="tablist">
					{tabs}
				</ul>
				{pager ? this.pagination() : null}
				<div className="tabs-content">
					{panes}
				</div>
			</div>
		)
	}
}
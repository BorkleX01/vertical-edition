import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getElementHeight, forEach } from '../../helpers'

class ViewMore extends Component {
	constructor(props) {
		super(props)

		this.state = {
			step: 1,
			maxSteps: null,
			parentHeight: null,
			stepHeight: null,
			itemHeight: null,
			active: false
		}

		this.handleClick = this.handleClick.bind(this)
		this.updateComponent = this.updateComponent.bind(this)
	}

	componentDidMount() {
		const { id } = this.props

		this.updateComponent()

		if ( this.state.active ){
			document.querySelector(`#${id} .view-more-inner`).classList.add('animate')
		}
	}

	componentWillReceiveProps(nextProps) {
		const { windowState, id } = this.props
		const style = document.querySelector(`#${id} style`)
		
		if ( style && windowState.width !== nextProps.windowState.width ){
			style.innerHTML = ''
		}

		this.updateComponent(nextProps)
	}

	updateComponent() {
		const { windowState, id, large, desktop, tablet, mobile, parentSelector, itemSelector } = this.props
		const { step } = this.state

		const parent = document.querySelector(`${parentSelector}`)
		const parentHeight = Math.floor(getElementHeight(parent))

		const items = document.querySelectorAll(`${parentSelector} ${itemSelector}`)
		var itemHeight = 0

		forEach(items, (index, item) => {
			let height = Math.floor(getElementHeight(item))

			if ( height > itemHeight ){
				itemHeight = height
			}
		})

		const windowWidth = window.innerWidth
		var rows = null

		if ( windowState.isLarge ){
			rows = parseInt(large, 10)
		} else if ( windowState.isDesktop ){
			rows = parseInt(desktop, 10)
		} else if ( windowState.isTablet ){
			rows = parseInt(tablet, 10)
		} else if ( windowState.isMobile ){
			rows = parseInt(mobile, 10)
		}

		const maxSteps = Math.floor( parentHeight / (rows * itemHeight) )

		this.setState({
			step: step > maxSteps ? maxSteps : step,
			maxSteps,
			parentHeight,
			stepHeight: rows * itemHeight,
			itemHeight,
			active: true
		})
	}

    handleClick(event) {
	event.preventDefault();
        
	const { step, maxSteps } = this.state;

	if ( step < maxSteps ){
	    this.setState({
		step: step + 1
	    });
	}
        console.log(this.props.id+" " +this.state.step);
        if(window.gtag){
            if (this.props.id == 'grid-view-more'){
                window.gtag('event', 'View More Grid Items', {'event_category':'Clicks', 'event_label':this.state.step});
            } else if (this.props.id == 'top100-view-more'){
                window.gtag('event', 'View More Top 100', {'event_category':'Clicks', 'event_label':this.state.step});
            }
        }
    }

	render() {
		const { parentSelector, itemSelector } = this.props
		const { active, parentHeight, step, stepHeight, maxSteps, itemHeight, showFade } = this.state

		var containerStyle = {
			height: 0
		}
		var fadeStyle = {
			height: 0
		}

		if ( active ){
			containerStyle.height = step === maxSteps ? parentHeight : stepHeight * step;
			
			if ( showFade ){
				fadeStyle.height = itemHeight / 2
			}
		}

		return (
			<div className={active ? 'view-more active' : 'view-more'}>
				<style>{parentSelector + ' ' + itemSelector + ' { min-height: ' + itemHeight + 'px; }'}</style>
				<div className="view-more-inner" style={containerStyle}>
					{this.props.children}
				</div>
				{ showFade ? <div className={step === maxSteps ? 'view-more-fade hidden' : 'view-more-fade'} style={fadeStyle}></div> : null }
				<div className={step === maxSteps ? 'view-more-overlay hidden' : 'view-more-overlay'}>
					<button type="button" className="view-more-expand" onClick={(event) => this.handleClick(event)}>View more</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  const { windowState } = state

  return {
    windowState
  }
}

export default connect(mapStateToProps)(ViewMore);

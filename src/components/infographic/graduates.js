import React, { Component } from 'react'
import scrollMonitor from 'scrollmonitor'
import anime from 'animejs'

import { forEach } from '../../helpers'
import Tabs from '../tabs'
import ShareIcons from '../../ShareButtons'
import StudentPercentage from './student-percentage'
import BarGraph from './bar-graph'
import IconGraph from './icon-graph'
import Parallax from './hero-parallax'

// Illustrations
import imgUniversity from '../../images/graduate-infographic-university.svg'

// Icons
import iconMedicine from '../../images/icons/1medicine.svg'
import iconPharmacy from '../../images/icons/2pharmacy.svg'
import iconDentistry from '../../images/icons/3dentistry.svg'
import iconRehab from '../../images/icons/4rehab.svg'
import iconTeaching from '../../images/icons/5teaching.svg'
import iconVetscience from '../../images/icons/6vetscience.svg'
import iconEngineering from '../../images/icons/7engineering.svg'
import iconNursing from '../../images/icons/8nursing.svg'
import iconBusiness from '../../images/icons/9business.svg'
import iconArchitecture from '../../images/icons/10architecture.svg'
import iconLaw from '../../images/icons/11law.svg'
import iconComputing from '../../images/icons/12computing.svg'
import iconHealthservices from '../../images/icons/13Healthservices.svg'
import iconSocialwork from '../../images/icons/14Socialwork.svg'
import iconAgriculture from '../../images/icons/15Ag.svg'
import iconTourism from '../../images/icons/16tourism.svg'
import iconSocialsciences from '../../images/icons/17socialsciences.svg'
import iconComms from '../../images/icons/18comms.svg'
import iconPsych from '../../images/icons/19psych.svg'
import iconSciencemaths from '../../images/icons/20sciencemaths.svg'
import iconCreativearts from '../../images/icons/21creativearts.svg'

export default class Graduates extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isMobile: window.innerWidth <= 576 ? true : false
		}
	}

	componentDidMount() {
		const applicationsCont = document.querySelector('#graduates-infographic-inner .graph-applications')
		const donutCont = document.querySelector('#graduates-infographic-inner .graph-donut')
		const attributesCont = document.querySelector('#important-attributes')
		const employedCont = document.querySelector('#grad-employment')
		const salariesCont = document.querySelector('#grad-salaries')

		var applicationsShown = false
		var donutShown = false
		var attributesShown = false
		var employedShown = false
		var salariesShown = false

		var applicationsWatcher = scrollMonitor.create( applicationsCont )
		var donutWatcher = scrollMonitor.create( donutCont )
		var attributesWatcher = scrollMonitor.create( attributesCont )
		var employedWatcher = scrollMonitor.create( employedCont )
		var salariesWatcher = scrollMonitor.create( salariesCont )

		applicationsWatcher.enterViewport(function() {
			if ( !applicationsShown ){
				applicationsShown = true

				var values = {
					applications: 0
				}

				anime({
					targets: values,
					applications: 9,
					easing: 'easeOutQuad',
					round: 1,
					duration: 500,
					update: function() {
						const applications = document.querySelector('#graduates-infographic-inner .graph-applications .count');

						if ( applications !== null ){
							applications.innerHTML = values.applications;
						}
					}
				})

				applicationsWatcher.destroy()
			}
		})

		donutWatcher.enterViewport(function() {
			if ( !donutShown ){
				donutShown = true

				anime({
					targets: '#graduates-infographic-inner .graph-donut .section',
					scale: [0.5, 1],
					opacity: [0, 1],
					delay: (target, index) => {
						return 100 * index
					},
					duration: 500
				})

				donutWatcher.destroy()
			}
		})

		attributesWatcher.enterViewport(function() {
			if ( !attributesShown ){
				attributesShown = true

				anime({
					targets: '#important-attributes .bar',
					width: (target) => {
						return target.getAttribute('data-height') + '%'
					},
					height: (target) => {
						return target.getAttribute('data-height') + '%'
					},
					delay: (target, index) => {
						return 100 * index
					},
					duration: 500
				})

				anime({
					targets: ['#important-attributes .label', '#important-attributes .bar-value'],
					opacity: [0, 1],
					delay: (target, index) => {
						return 100 * index
					},
					duration: 500
				})

				attributesWatcher.destroy()
			}
		}.bind(this))

		employedWatcher.enterViewport(function() {
			if ( !employedShown ){
				employedShown = true
				
				const employedItems = document.querySelectorAll('#grad-employment .graph-icon-item')

				forEach(employedItems, (index, element) => {
					var values = {
						employed: 0
					}

					anime({
						targets: values,
						employed: element.querySelector('.value').getAttribute('data-value'),
						easing: 'easeOutQuad',
						round: 1,
						duration: 500,
						update: function() {
							const employed = element.querySelector('.value')

							if ( employed !== null ){
								employed.innerHTML = values.employed;
							}
						},
						delay: 50 * index
					})
				})

				employedWatcher.destroy()
			}
		})

		salariesWatcher.enterViewport(function() {
			if ( !salariesShown ){
				salariesShown = true

				anime({
					targets: '#grad-salaries .bar',
					width: (target) => {
						return target.getAttribute('data-height') + '%'
					},
					height: (target) => {
						return target.getAttribute('data-height') + '%'
					},
					delay: (target, index) => {
						return 100 * index
					},
					duration: 500
				})

				anime({
					targets: ['#grad-salaries .label', '#grad-salaries .bar-value'],
					opacity: [0, 1],
					delay: (target, index) => {
						return 100 * index
					},
					duration: 500
				})

				salariesWatcher.destroy()
			}
		}.bind(this))
	}

	tabContent(item) {
		switch(item){
			case 1: return <StudentPercentage id="stay-5-years" nodes="12" percentage="50" />
			case 2: return <StudentPercentage id="work-overseas" nodes="12" percentage="75" />
			case 3: return <StudentPercentage id="top-3-employer" nodes="12" percentage="97" />
			default: return null
		}
	}

	render() {
		const tabContent = [
			{
				label: 'Plan to stay 5 years + with their employer',
				content: this.tabContent(1)
			},
			{
				label: 'Plan to work overseas during their career',
				content: this.tabContent(2)
			},
			{
				label: 'Are joining a company that was in their top 3 choice of employer',
				content: this.tabContent(3)
			}
		]

		const attributesContent = [
			{
				label: 'Teamwork',
				value: 71
			},
			{
				label: 'Cultural fit',
				value: 67
			},
			{
				label: 'Interpersonal skills',
				value: 64
			},
			{
				label: 'Communication skills',
				value: 63
			},
			{
				label: 'Motivational fit',
				value: 59
			}
		]

		const employedContent = [
			{
				icon: iconMedicine,
				label: 'Medicine',
				value: 96
			},
			{
				icon: iconPharmacy,
				label: 'Pharmacy',
				value: 95
			},
			{
				icon: iconDentistry,
				label: 'Dentistry',
				value: 87
			},
			{
				icon: iconRehab,
				label: 'Rehabilitation',
				value: 86
			},
			{
				icon: iconTeaching,
				label: 'Teaching',
				value: 82
			},
			{
				icon: iconVetscience,
				label: 'Vet science',
				value: 81
			},
			{
				icon: iconEngineering,
				label: 'Engineering',
				value: 80
			},
			{
				icon: iconNursing,
				label: 'Nursing',
				value: 79
			},
			{
				icon: iconBusiness,
				label: 'Business & mgmt',
				value: 76
			},
			{
				icon: iconArchitecture,
				label: 'Architecture',
				value: 75
			},
			{
				icon: iconLaw,
				label: 'Law & paralegal',
				value: 75
			},
			{
				icon: iconComputing,
				label: 'Computer',
				value: 73
			},
			{
				icon: iconHealthservices,
				label: 'Health services',
				value: 73
			},
			{
				icon: iconSocialwork,
				label: 'Social work',
				value: 71
			},
			{
				icon: iconAgriculture,
				label: 'Agriculture',
				value: 66
			},
			{
				icon: iconTourism,
				label: 'Tourism',
				value: 63
			},
			{
				icon: iconSocialsciences,
				label: 'Social sciences',
				value: 62
			},
			{
				icon: iconComms,
				label: 'Communications',
				value: 61
			},
			{
				icon: iconPsych,
				label: 'Psychology',
				value: 60
			},
			{
				icon: iconSciencemaths,
				label: 'Science & maths',
				value: 59
			},
			{
				icon: iconCreativearts,
				label: 'Creative arts',
				value: 53
			}
		]

		const salariesContent = [
			{
				label: 'Mining',
				value: 104,
				color: '#3EAB37'
			},
			{
				label: 'Energy & Resources',
				value: 76,
				color: '#3EAB37'
			},
			{
				label: 'Utilities',
				value: 72,
				color: '#3EAB37'
			},
			{
				label: 'Construction',
				value: 72,
				color: '#3EAB37'
			},
			{
				label: 'Engineering',
				value: 70,
				color: '#3EAB37'
			},
			{
				label: 'Average 2018',
				value: 64,
				color: 'black'
			},
			{
				label: 'Average 2017',
				value: 63,
				color: 'black'
			},
			{
				label: 'Accounting',
				value: 54
			},
			{
				label: 'Australian Govt',
				value: 60
			},
			{
				label: 'IT Services',
				value: 61
			},
			{
				label: 'Manufacturing',
				value: 63
			},
			{
				label: 'Telecomms',
				value: 63
			},
		]

		const svgCloud1 = <svg className="layer layer-1"  xmlns="http://www.w3.org/2000/svg" viewBox="-17152.025 2877.271 210.451 109.155">
			<path id="Path_679" data-name="Path 679" d="M189.2,55.887V54.723a38.7,38.7,0,0,0-38.714-38.713,34.735,34.735,0,0,0-13.681,2.62A54.034,54.034,0,0,0,95.765,0,55.186,55.186,0,0,0,46.282,31.145a56.524,56.524,0,0,0-6.986-.582C17.756,30.272,0,48.028,0,69.859a39.317,39.317,0,0,0,39.3,39.3H183.38a27.207,27.207,0,0,0,27.07-27.07A26.579,26.579,0,0,0,189.2,55.887Z" transform="translate(-17152.025 2877.271)"/>
		</svg>
		const svgCloud2 = <svg className="layer layer-2"  xmlns="http://www.w3.org/2000/svg" viewBox="-16817.945 2769.134 166.945 102.163">
			<path id="Path_669" data-name="Path 669" d="M165.67,52.462a24.265,24.265,0,0,0-27.059-16.291,18.749,18.749,0,0,0-16.843-9.94,24.167,24.167,0,0,0-4.418.552A24.037,24.037,0,0,0,94.432,11.045c-1.381,0-2.761.276-4.142.276A23.892,23.892,0,0,0,69.582,0,24.808,24.808,0,0,0,44.731,23.194a24.475,24.475,0,0,0-11.873-3.037A24.747,24.747,0,0,0,8.007,45.007a27.555,27.555,0,0,0,2.761,11.6A25.471,25.471,0,0,0,0,77.313a24.747,24.747,0,0,0,24.851,24.851H135.3a19.09,19.09,0,0,0,19.052-19.052V81.454A24.376,24.376,0,0,0,165.67,52.462Z" transform="translate(-16817.945 2769.134)"/>
		</svg>
		const svgCloud3 = <svg className="layer layer-3"  xmlns="http://www.w3.org/2000/svg" viewBox="-16292.789 2813.368 221.657 114.967">
			<path id="Path_670" data-name="Path 670" d="M199.277,58.863V57.637A40.757,40.757,0,0,0,158.5,16.862a36.585,36.585,0,0,0-14.409,2.759A56.911,56.911,0,0,0,100.865,0,58.124,58.124,0,0,0,48.746,32.8a59.534,59.534,0,0,0-7.358-.613C18.7,31.884,0,50.586,0,73.579a41.411,41.411,0,0,0,41.388,41.388H193.145a28.655,28.655,0,0,0,28.512-28.512C221.657,72.966,212.153,61.316,199.277,58.863Z" transform="translate(-16292.789 2813.368)"/>
		</svg>

		return (
			<div>
				<div className="poppy-outie" id="graduates-infographic-inner">
					<div className="poppy-outie-inner">

						<div className="ranking">Infographic</div>
						<h2 className="post-title">Graduates are finding it easier to get a job...</h2>
						<ShareIcons slug={this.props.slug} title='Infographic: Graduates are finding it easier to get a job.' excerpt='Snapshot of graduate employees, 2018'/>

						<p className="description">Snapshot of graduate employees, 2018</p>

						<div className="graph-applications">
							<div className="description"><small>Average job applications:</small></div>
							<div className="count">0</div>
						</div>

						<div className="horizontal-line hidden-desktop hidden-tablet"></div>

						<div className="graph-snapshot">
							<Tabs id="graduates-info" data={tabContent} pager={true} infinite={true} />
						</div>

						<div className="horizontal-line"></div>

						<div className="grid">

							<div className="tablet-50 bar-right">
								<p className="description">How well graduates believe their university prepared them for their job search (%)</p>
								<div className="graph-svg graph-donut">
									<div className="section other">
										<svg viewBox="0 0 347.3 347.4">
											<path className="st1" d="M171.5,91.8c0.7,0,1.4,0,2.1,0.1V0c-20.3-0.1-40.4,3.4-59.3,10.5L145.4,96C153.6,93.3,162.4,91.8,171.5,91.8z" />
										</svg>
									</div>
									<div className="section very-well">
										<svg viewBox="0 0 347.3 347.4">
											<path className="st4" d="M250.7,150l89-27.2C316.8,48.3,251.4,0,173.6,0v91.8C209.9,92.8,240.4,116.9,250.7,150z"/>
											<g transform="translate(205.061 39.066)">
												<text transform="matrix(1 0 0 1 -4.581250e-04 35.9999)" className="st5 st6 st7">20.3</text>
											</g>
											<g transform="translate(726.502 1108.855)">
												<text transform="matrix(1 0 0 1 -500.877 -1013.023)" className="st5 st9 st10">Very well</text>
											</g>
										</svg>
									</div>
									<div className="section well">
										<svg viewBox="0 0 347.3 347.4">
											<path className="st3" d="M339.7,122.9l-89,27.2c2.4,7.8,3.7,16.1,3.7,24.7c0,45.8-37.1,82.9-82.9,82.9c-31.2,0-58.3-17.2-72.5-42.6l-77,42.8c40.2,72.4,123.3,106,202.5,81.8C316.1,311.6,367.7,214.4,339.7,122.9z"/>
											<g transform="translate(179.7 259.812)">
												<text transform="matrix(1 0 0 1 -7.782500e-04 34.9999)" className="st5 st6 st8">46.6</text>
											</g>
											<g transform="translate(703.486 1328.268)">
												<text transform="matrix(1 0 0 1 -500.8766 -1013.023)" className="st5 st9 st10">Well</text>
											</g>
										</svg>
									</div>
									<div className="section not-well">
										<svg viewBox="0 0 347.3 347.4">
											<path className="st2" d="M145.4,96l-31.1-85.5c-8.6,3-16.9,6.7-24.8,11.2C5.7,68.2-24.7,173.8,21.8,257.6L99,214.9c-6.6-11.9-10.4-25.6-10.4-40.2C88.6,138,112.4,107,145.4,96z"/>
											<g transform="translate(15.919 109.414)">
												<text transform="matrix(1 0 0 1 9.218750e-04 34.9999)" className="st5 st6 st8">27.6</text>
											</g>
											<g transform="translate(522.135 1181.923)">
												<text transform="matrix(1 0 0 1 -500.8772 -1013.023)" className="st5 st9 st10">Not well</text>
											</g>
										</svg>
									</div>
								</div>
							</div>

							<div className="tablet-50">
								<p className="description">Graduates successfully employed full-time, by study area, 2017 (%)</p>
								<BarGraph id="important-attributes" data={attributesContent} />
							</div>

						</div>

						<div className="horizontal-line"></div>

						<div className="employedContent">
							<p className="description">Undergraduates successfully employed full-time, by study area, 2017 (%)</p>
							<IconGraph id="grad-employment" data={employedContent} />
						</div>

						<div className="horizontal-line"></div>

						<h2 className="post-title">...and they are attracting strong salaries.</h2>
						<p className="description">Best and worst paid graduates, 2018 by industry (ex superannuation)</p>
						<BarGraph id="grad-salaries" data={salariesContent} pre="$" app="K" />
					</div>
				</div>

				<div className="graphic">
					<div className="graphic-inner graphic-illustration">
						<img src={imgUniversity} alt="Illustration of a man and woman working" />
					</div>
					<Parallax id="university-bg" className="footer-parallax" direction="horizontal">
						{svgCloud1}
						{svgCloud2}
						{svgCloud3}
					</Parallax>
				</div>
				<div className="graphic-footer">
					<div className="poppy-outie poppy-outie-secondary">
						<div className="poppy-outie-inner">
							<p className="credit">Graphic: Michaela Pollock &nbsp; &nbsp; &nbsp; &nbsp;Source: ABS, AAGE, QILT</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

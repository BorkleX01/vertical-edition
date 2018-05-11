import React, { Component } from 'react'
import { getElementHeight } from './helpers'
import scrollMonitor from 'scrollmonitor'

class Header extends Component {
    constructor(props){
      super(props)

      this.state = {
        fixHeader: false
      }
    }
    componentDidMount() {
      const header = document.querySelector('#main-header')

      var headerWatcher = scrollMonitor.create(header)

      if ( headerWatcher.isFullyInViewport ){
        this.setState({
          fixHeader: false
        })
      } else if ( headerWatcher.isAboveViewport ){
        this.setState({
          fixHeader: true
        })
      }

      headerWatcher.stateChange((event, target) => {
        if ( target.isFullyInViewport ){
          this.setState({
            fixHeader: false
          })
        } else if ( target.isAboveViewport ){
          this.setState({
            fixHeader: true
          })
        }
      })
    }
    clickHandler=()=>{
        //console.log("Bact to top ");
        //window.scrollTo(0,0);
        //document.documentElement.scrollTop;
        document.querySelector('body').scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    render(){
        return(
            <div id="main-header">
              <div className="afr-rip">
                <header className={this.state.fixHeader ? 'header-fixed header-wrap gel-layout is_fm-sticky-navigation' : 'header-static header-wrap gel-layout is_fm-sticky-navigation'}>
                  <div className="header">
                    <div className="header-inner">
                      <button className="home-button" onClick={this.clickHandler} style={{width:"140px"}}>HOME</button>
                      <div className="header__block">
                        <div className="afr-rip-logo">
                          <a href="http://www.afr.com/" title="Financial Review - business, finance and investment news | afr.com">Financial Review - afr.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wrap">
                    <div className="navigation">
                      <nav role="navigation" className="nav nav--global gel-layout">

                        <ul className="nav__menu--primary">
                          <li className="nav__item--primary is-selected">
                            <a href="http://www.afr.com/">Home</a></li>
                          <li className="nav__item--primary has-subnav ">
                            <a href="http://www.afr.com/news" className="is_fm-toggle" id="fm-id-2">News</a>
                            <ul className="nav__menu--secondary">
                              <li className="">
                                <a href="http://www.afr.com/news/politics" className="is_fm-toggle" id="fm-id-3">Politics</a></li>
                              <li className="">
                                <a href="http://www.afr.com/news/policy" className="is_fm-toggle" id="fm-id-4">Policy</a></li>
                              <li className="">
                                <a href="http://www.afr.com/news/economy" className="is_fm-toggle" id="fm-id-5">Economy</a></li>
                              <li className="">
                                <a href="http://www.afr.com/news/world" className="is_fm-toggle" id="fm-id-6">World</a></li>
                              <li className="">
                                <a href="http://www.afr.com/news/special-reports" className="is_fm-toggle" id="fm-id-7">Special Reports</a></li>
                              <li className="">
                                <a href="http://www.afr.com/news/rba-interview-series" className="is_fm-toggle" id="fm-id-8">RBA Interview Series</a></li>
                              <li className="">
                                <a href="http://www.afr.com/news/investigations" className="is_fm-toggle" id="fm-id-9">Investigations</a></li>
                            </ul>
                          </li>
                          <li className="nav__item--primary has-subnav ">
                            <a href="http://www.afr.com/business" className="is_fm-toggle" id="fm-id-10">Business</a>
                            <ul className="nav__menu--secondary">
                              <li className="">
                                <a href="http://www.afr.com/business/banking-and-finance" className="is_fm-toggle" id="fm-id-11">Banking &amp; Finance</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/mining" className="is_fm-toggle" id="fm-id-12">Mining</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/energy" className="is_fm-toggle" id="fm-id-13">Energy</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/telecommunications" className="is_fm-toggle" id="fm-id-14">Telecommunications</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/retail" className="is_fm-toggle" id="fm-id-15">Retail</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/transport" className="is_fm-toggle" id="fm-id-16">Transport</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/media-and-marketing" className="is_fm-toggle" id="fm-id-17">Media &amp; Marketing</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/accounting" className="is_fm-toggle" id="fm-id-18">Accounting</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/legal" className="is_fm-toggle" id="fm-id-19">Legal</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/small-business" className="is_fm-toggle" id="fm-id-20">Small Business</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/insurance" className="is_fm-toggle" id="fm-id-21">Insurance</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/infrastructure" className="is_fm-toggle" id="fm-id-22">Infrastructure</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/health" className="is_fm-toggle" id="fm-id-23">Health</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/construction" className="is_fm-toggle" id="fm-id-24">Construction</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/tourism" className="is_fm-toggle" id="fm-id-25">Tourism</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/manufacturing" className="is_fm-toggle" id="fm-id-26">Manufacturing</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/agriculture" className="is_fm-toggle" id="fm-id-27">Agriculture</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/environmental-services" className="is_fm-toggle" id="fm-id-28">Environmental Services</a></li>
                              <li className="">
                                <a href="http://www.afr.com/business/sport" className="is_fm-toggle" id="fm-id-29">Sport</a></li>
                            </ul>
                          </li>
                          <li className="nav__item--primary has-subnav ">
                            <a href="http://www.afr.com/markets" className="is_fm-toggle" id="fm-id-30">Markets</a>
                            <ul className="nav__menu--secondary">
                              <li className="">
                                <a href="http://www.afr.com/markets/equity-markets" className="is_fm-toggle" id="fm-id-31">Equity Markets</a></li>
                              <li className="">
                                <a href="http://www.afr.com/markets/debt-markets" className="is_fm-toggle" id="fm-id-32">Debt Markets</a></li>
                              <li className="">
                                <a href="http://www.afr.com/markets/currencies" className="is_fm-toggle" id="fm-id-33">Currencies</a></li>
                              <li className="">
                                <a href="http://www.afr.com/markets/commodities" className="is_fm-toggle" id="fm-id-34">Commodities</a></li>
                              <li className="">
                                <a href="http://www.afr.com/markets/derivatives" className="is_fm-toggle" id="fm-id-35">Derivatives</a></li>
                              <li className="">
                                <a href="http://www.afr.com/markets/market-data" className="is_fm-toggle" id="fm-id-36">Market Data</a></li>
                            </ul>
                          </li>
                          <li className="nav__item--primary">
                            <a href="http://www.afr.com/street-talk">Street Talk</a></li>
                          <li className="nav__item--primary has-subnav ">
                            <a href="http://www.afr.com/real-estate" className="is_fm-toggle" id="fm-id-37">Real Estate</a>
                            <ul className="nav__menu--secondary">
                              <li className="">
                                <a href="http://www.afr.com/real-estate/commercial" className="is_fm-toggle" id="fm-id-38">Commercial</a></li>
                              <li className="">
                                <a href="http://www.afr.com/real-estate/residential" className="is_fm-toggle" id="fm-id-39">Residential</a></li>
                            </ul>
                          </li>
                          <li className="nav__item--primary has-subnav ">
                            <a href="http://www.afr.com/opinion" className="is_fm-toggle" id="fm-id-40">Opinion</a>
                            <ul className="nav__menu--secondary">
                              <li className="">
                                <a href="http://www.afr.com/opinion/editorials" className="is_fm-toggle" id="fm-id-41">Editorials</a></li>
                              <li className="">
                                <a href="http://www.afr.com/opinion/letters-to-the-editor" className="is_fm-toggle" id="fm-id-42">Letters to the Editor</a></li>
                              <li className="">
                                <a href="http://www.afr.com/opinion/columnists" className="is_fm-toggle" id="fm-id-43">Columnists</a></li>
                            </ul>
                          </li>
                          <li className="nav__item--primary has-subnav ">
                            <a href="http://www.afr.com/technology" className="is_fm-toggle" id="fm-id-44">Technology</a>
                            <ul className="nav__menu--secondary">
                              <li className="">
                                <a href="http://www.afr.com/technology/mobiles-and-tablets" className="is_fm-toggle" id="fm-id-45">Mobiles &amp; Tablets</a></li>
                              <li className="">
                                <a href="http://www.afr.com/technology/gadgets" className="is_fm-toggle" id="fm-id-46">Gadgets</a></li>
                              <li className="">
                                <a href="http://www.afr.com/technology/apps" className="is_fm-toggle" id="fm-id-47">Apps</a></li>
                              <li className="">
                                <a href="http://www.afr.com/technology/web" className="is_fm-toggle" id="fm-id-48">Web</a></li>
                              <li className="">
                                <a href="http://www.afr.com/technology/social-media" className="is_fm-toggle" id="fm-id-49">Social Media</a></li>
                              <li className="">
                                <a href="http://www.afr.com/technology/gaming" className="is_fm-toggle" id="fm-id-50">Gaming</a></li>
                              <li className="">
                                <a href="http://www.afr.com/technology/cloud-computing" className="is_fm-toggle" id="fm-id-51">Cloud Computing</a></li>
                              <li className="">
                                <a href="http://www.afr.com/technology/enterprise-it" className="is_fm-toggle" id="fm-id-52">Enterprise IT</a></li>
                              <li className="">
                                <a href="http://www.afr.com/technology/technology-companies" className="is_fm-toggle" id="fm-id-53">Technology Companies</a></li>
                            </ul>
                          </li>
                          <li className="nav__item--primary has-subnav ">
                            <a href="http://www.afr.com/personal-finance" className="is_fm-toggle" id="fm-id-54">Personal Finance</a>
                            <ul className="nav__menu--secondary">
                              <li className="">
                                <a href="http://www.afr.com/personal-finance/shares" className="is_fm-toggle" id="fm-id-55">Shares</a></li>
                              <li className="">
                                <a href="http://www.afr.com/personal-finance/managed-funds" className="is_fm-toggle" id="fm-id-56">Managed Funds</a></li>
                              <li className="">
                                <a href="http://www.afr.com/personal-finance/fixed-income" className="is_fm-toggle" id="fm-id-57">Fixed Income</a></li>
                              <li className="">
                                <a href="http://www.afr.com/personal-finance/trusts" className="is_fm-toggle" id="fm-id-58">Trusts</a></li>
                              <li className="">
                                <a href="http://www.afr.com/personal-finance/banking" className="is_fm-toggle" id="fm-id-59">Banking</a></li>
                              <li className="">
                                <a href="http://www.afr.com/personal-finance/budgeting" className="is_fm-toggle" id="fm-id-60">Budgeting</a></li>
                              <li className="">
                                <a href="http://www.afr.com/personal-finance/tax" className="is_fm-toggle" id="fm-id-61">Tax</a></li>
                              <li className="">
                                <a href="http://www.afr.com/personal-finance/insurance" className="is_fm-toggle" id="fm-id-62">Insurance</a></li>
                              <li className="">
                                <a href="http://www.afr.com/personal-finance/specialist-investments" className="is_fm-toggle" id="fm-id-63">Specialist Investments</a></li>
                              <li className="">
                                <a href="http://www.afr.com/personal-finance/superannuation-and-smsfs" className="is_fm-toggle" id="fm-id-64">Superannuation &amp; SMSFs</a></li>
                              <li className="">
                                <a href="http://www.afr.com/personal-finance/portfolio-management" className="is_fm-toggle" id="fm-id-65">Portfolio Management</a></li>
                            </ul>
                          </li>
                          <li className="nav__item--primary has-subnav ">
                            <a href="http://www.afr.com/leadership" className="is_fm-toggle" id="fm-id-66">Leadership</a>
                            <ul className="nav__menu--secondary">
                              <li className="">
                                <a href="http://www.afr.com/leadership/management" className="is_fm-toggle" id="fm-id-67">Management</a></li>
                              <li className="">
                                <a href="http://www.afr.com/leadership/careers" className="is_fm-toggle" id="fm-id-68">Careers</a></li>
                              <li className="">
                                <a href="http://www.afr.com/leadership/innovation" className="is_fm-toggle" id="fm-id-69">Innovation</a></li>
                              <li className="">
                                <a href="http://www.afr.com/leadership/entrepreneur" className="is_fm-toggle" id="fm-id-70">Entrepreneur</a></li>
                              <li className="">
                                <a href="http://www.afr.com/leadership/workplace" className="is_fm-toggle" id="fm-id-71">Workplace</a></li>
                              <li className="">
                                <a href="http://www.afr.com/leadership/afr-lists" className="is_fm-toggle" id="fm-id-72">AFR Lists</a></li>
                              <li className="">
                                <a href="http://www.afr.com/boss" className="is_fm-toggle" id="fm-id-73">Boss</a></li>
                            </ul>
                          </li>
                          <li className="nav__item--primary has-subnav ">
                            <a href="http://www.afr.com/lifestyle" className="is_fm-toggle" id="fm-id-74">Lifestyle</a>
                            <ul className="nav__menu--secondary">
                              <li className="">
                                <a href="http://www.afr.com/lifestyle/travel" className="is_fm-toggle" id="fm-id-75">Travel</a></li>
                              <li className="">
                                <a href="http://www.afr.com/lifestyle/food-and-wine" className="is_fm-toggle" id="fm-id-76">Food &amp; Wine</a></li>
                              <li className="">
                                <a href="http://www.afr.com/lifestyle/fashion" className="is_fm-toggle" id="fm-id-77">Fashion</a></li>
                              <li className="">
                                <a href="http://www.afr.com/lifestyle/watches-and-jewellery" className="is_fm-toggle" id="fm-id-78">Watches &amp; Jewellery</a></li>
                              <li className="">
                                <a href="http://www.afr.com/lifestyle/arts-and-entertainment" className="is_fm-toggle" id="fm-id-79">Arts &amp; Entertainment</a></li>
                              <li className="">
                                <a href="http://www.afr.com/lifestyle/cars-bikes-and-boats" className="is_fm-toggle" id="fm-id-80">Cars Bikes &amp; Boats</a></li>
                              <li className="">
                                <a href="http://www.afr.com/lifestyle/health" className="is_fm-toggle" id="fm-id-81">Health</a></li>
                              <li className="">
                                <a href="http://www.afr.com/lifestyle/home-design" className="is_fm-toggle" id="fm-id-82">Home Design</a></li>
                            </ul>
                          </li>
                          <li className="nav__item--primary has-subnav-sitelist">
                            <a href="javascript:;" className="is_fm-toggle" id="fm-id-83">All</a>
                            <div className="sitemap">

                              <div className="nav--sitelist flex-grid">
                                <div className="col-3-units">
                                  <a href="http://www.afr.com/news" className="is_fm-toggle" id="fm-id-84">News</a>
                                  <ul>
                                    <li><a href="http://www.afr.com/news/politics" className="is_fm-toggle" id="fm-id-85">Politics</a></li>
                                    <li><a href="http://www.afr.com/news/policy" className="is_fm-toggle" id="fm-id-86">Policy</a></li>
                                    <li><a href="http://www.afr.com/news/economy" className="is_fm-toggle" id="fm-id-87">Economy</a></li>
                                    <li><a href="http://www.afr.com/news/world" className="is_fm-toggle" id="fm-id-88">World</a></li>
                                    <li><a href="http://www.afr.com/news/special-reports" className="is_fm-toggle" id="fm-id-89">Special Reports</a></li>
                                    <li><a href="http://www.afr.com/rear-window" className="is_fm-toggle" id="fm-id-90">Rear Window</a></li>
                                  </ul>
                                </div>
                                <div className="col-3-units">
                                  <a href="http://www.afr.com/business" className="is_fm-toggle" id="fm-id-91">Business</a>
                                  <ul>
                                    <li><a href="http://www.afr.com/business/banking-and-finance" className="is_fm-toggle" id="fm-id-92">Banking &amp; Finance</a></li>
                                    <li><a href="http://www.afr.com/business/mining" className="is_fm-toggle" id="fm-id-93">Mining</a></li>
                                    <li><a href="http://www.afr.com/business/energy" className="is_fm-toggle" id="fm-id-94">Energy</a></li>
                                    <li><a href="http://www.afr.com/business/telecommunications" className="is_fm-toggle" id="fm-id-95">Telecommunications</a></li>
                                    <li><a href="http://www.afr.com/business/retail" className="is_fm-toggle" id="fm-id-96">Retail</a></li>
                                    <li><a href="http://www.afr.com/business/transport" className="is_fm-toggle" id="fm-id-97">Transport</a></li>
                                    <li><a href="http://www.afr.com/business/media-and-marketing" className="is_fm-toggle" id="fm-id-98">Media &amp; Marketing</a></li>
                                    <li><a href="http://www.afr.com/business/accounting" className="is_fm-toggle" id="fm-id-99">Accounting</a></li>
                                    <li><a href="http://www.afr.com/business/legal" className="is_fm-toggle" id="fm-id-100">Legal</a></li>
                                    <li><a href="http://www.afr.com/business/small-business" className="is_fm-toggle" id="fm-id-101">Small Business</a></li>
                                    <li><a href="http://www.afr.com/business/insurance" className="is_fm-toggle" id="fm-id-102">Insurance</a></li>
                                    <li><a href="http://www.afr.com/business/infrastructure" className="is_fm-toggle" id="fm-id-103">Infrastructure</a></li>
                                    <li><a href="http://www.afr.com/business/health" className="is_fm-toggle" id="fm-id-104">Health</a></li>
                                    <li><a href="http://www.afr.com/business/construction" className="is_fm-toggle" id="fm-id-105">Construction</a></li>
                                    <li><a href="http://www.afr.com/business/tourism" className="is_fm-toggle" id="fm-id-106">Tourism</a></li>
                                    <li><a href="http://www.afr.com/business/manufacturing" className="is_fm-toggle" id="fm-id-107">Manufacturing</a></li>
                                    <li><a href="http://www.afr.com/business/agriculture" className="is_fm-toggle" id="fm-id-108">Agriculture</a></li>
                                    <li><a href="http://www.afr.com/business/environmental-services" className="is_fm-toggle" id="fm-id-109">Environmental Services</a></li>
                                    <li><a href="http://www.afr.com/business/sport" className="is_fm-toggle" id="fm-id-110">Sport</a></li>
                                    <li><a href="http://www.afr.com/business/gambling" className="is_fm-toggle" id="fm-id-111">Gambling</a></li>
                                  </ul>
                                </div>
                                <div className="col-3-units">
                                  <a href="http://www.afr.com/markets" className="is_fm-toggle" id="fm-id-112">Markets</a>
                                  <ul>
                                    <li><a href="http://www.afr.com/markets/equity-markets" className="is_fm-toggle" id="fm-id-113">Equity Markets</a></li>
                                    <li><a href="http://www.afr.com/markets/debt-markets" className="is_fm-toggle" id="fm-id-114">Debt Markets</a></li>
                                    <li><a href="http://www.afr.com/markets/currencies" className="is_fm-toggle" id="fm-id-115">Currencies</a></li>
                                    <li><a href="http://www.afr.com/markets/commodities" className="is_fm-toggle" id="fm-id-116">Commodities</a></li>
                                    <li><a href="http://www.afr.com/markets/derivatives" className="is_fm-toggle" id="fm-id-117">Derivatives</a></li>
                                    <li><a href="http://www.afr.com/markets/market-data" className="is_fm-toggle" id="fm-id-118">Market Data</a></li>
                                  </ul>
                                  <a href="http://www.afr.com/street-talk" className="is_fm-toggle" id="fm-id-119">Street Talk</a>
                                  <a href="http://www.afr.com/real-estate" className="is_fm-toggle" id="fm-id-120">Real Estate</a>
                                  <ul>
                                    <li><a href="http://www.afr.com/real-estate/commercial" className="is_fm-toggle" id="fm-id-121">Commercial</a></li>
                                    <li><a href="http://www.afr.com/real-estate/residential" className="is_fm-toggle" id="fm-id-122">Residential</a></li>
                                  </ul>
                                  <a href="http://www.afr.com/opinion" className="is_fm-toggle" id="fm-id-123">Opinion</a>
                                  <ul>
                                    <li><a href="javascript:;" className="is_fm-toggle" id="fm-id-124">Columnists</a></li>
                                    <li><a href="javascript:;" className="is_fm-toggle" id="fm-id-125">Editorials</a></li>
                                    <li><a href="javascript:;" className="is_fm-toggle" id="fm-id-126">Letters to the Editor</a></li>
                                  </ul>
                                </div>
                                <div className="col-3-units">
                                  <a href="http://www.afr.com/technology" className="is_fm-toggle" id="fm-id-127">Technology</a>
                                  <ul>
                                    <li><a href="http://www.afr.com/technology/mobiles-and-tablets" className="is_fm-toggle" id="fm-id-128">Mobiles &amp; Tablets</a></li>
                                    <li><a href="http://www.afr.com/technology/gadgets" className="is_fm-toggle" id="fm-id-129">Gadgets</a></li>
                                    <li><a href="http://www.afr.com/technology/apps" className="is_fm-toggle" id="fm-id-130">Apps</a></li>
                                    <li><a href="http://www.afr.com/technology/web" className="is_fm-toggle" id="fm-id-131">Web</a></li>
                                    <li><a href="http://www.afr.com/technology/social-media" className="is_fm-toggle" id="fm-id-132">Social Media</a></li>
                                    <li><a href="http://www.afr.com/technology/gaming" className="is_fm-toggle" id="fm-id-133">Gaming</a></li>
                                    <li><a href="http://www.afr.com/technology/cloud-computing" className="is_fm-toggle" id="fm-id-134">Cloud Computing</a></li>
                                    <li><a href="http://www.afr.com/technology/enterprise-it" className="is_fm-toggle" id="fm-id-135">Enterprise IT</a></li>
                                    <li><a href="http://www.afr.com/technology/technology-companies" className="is_fm-toggle" id="fm-id-136">Technology Companies</a></li>
                                  </ul>

                                  <a href="http://www.afr.com/personal-finance" className="is_fm-toggle" id="fm-id-137">Personal Finance</a>
                                  <ul>
                                    <li><a href="http://www.afr.com/personal-finance/shares" className="is_fm-toggle" id="fm-id-138">Shares</a></li>
                                    <li><a href="http://www.afr.com/personal-finance/managed-funds" className="is_fm-toggle" id="fm-id-139">Managed Funds</a></li>
                                    <li><a href="http://www.afr.com/personal-finance/fixed-income" className="is_fm-toggle" id="fm-id-140">Fixed Income</a></li>
                                    <li><a href="http://www.afr.com/personal-finance/trusts" className="is_fm-toggle" id="fm-id-141">Trusts</a></li>
                                    <li><a href="http://www.afr.com/personal-finance/banking" className="is_fm-toggle" id="fm-id-142">Banking</a></li>
                                    <li><a href="http://www.afr.com/personal-finance/budgeting" className="is_fm-toggle" id="fm-id-143">Budgeting</a></li>
                                    <li><a href="http://www.afr.com/personal-finance/tax" className="is_fm-toggle" id="fm-id-144">Tax</a></li>
                                    <li><a href="http://www.afr.com/personal-finance/insurance" className="is_fm-toggle" id="fm-id-145">Insurance</a></li>
                                    <li><a href="http://www.afr.com/personal-finance/specialist-investments" className="is_fm-toggle" id="fm-id-146">Specialist Investments</a></li>
                                    <li><a href="http://www.afr.com/personal-finance/superannuation-and-smsfs" className="is_fm-toggle" id="fm-id-147">Superannuation &amp; SMSFs</a></li>
                                  </ul>
                                </div>
                                <div className="col-3-units">
                                  <a href="http://www.afr.com/leadership" className="is_fm-toggle" id="fm-id-148">Leadership</a>
                                  <ul>
                                    <li><a href="http://www.afr.com/leadership/management" className="is_fm-toggle" id="fm-id-149">Management</a></li>
                                    <li><a href="http://www.afr.com/leadership/careers" className="is_fm-toggle" id="fm-id-150">Careers</a></li>
                                    <li><a href="http://www.afr.com/leadership/company-culture" className="is_fm-toggle" id="fm-id-151">Company Culture</a></li>
                                    <li><a href="http://www.afr.com/leadership/innovation" className="is_fm-toggle" id="fm-id-152">Innovation</a></li>
                                    <li><a href="http://www.afr.com/leadership/entrepreneur" className="is_fm-toggle" id="fm-id-153">Entrepreneur</a></li>
                                    <li><a href="http://www.afr.com/boss" className="is_fm-toggle" id="fm-id-154">Boss</a></li>
                                  </ul>
                                  <a href="http://www.afr.com/lifestyle" className="is_fm-toggle" id="fm-id-155">Lifestyle</a>
                                  <ul>
                                    <li><a href="http://www.afr.com/lifestyle/travel" className="is_fm-toggle" id="fm-id-156">Travel</a></li>
                                    <li><a href="http://www.afr.com/lifestyle/food-and-wine" className="is_fm-toggle" id="fm-id-157">Food &amp; Wine</a></li>
                                    <li><a href="http://www.afr.com/lifestyle/fashion" className="is_fm-toggle" id="fm-id-158">Fashion</a></li>
                                    <li><a href="http://www.afr.com/lifestyle/watches-and-jewellery" className="is_fm-toggle" id="fm-id-159">Watches &amp; Jewellery</a></li>
                                    <li><a href="http://www.afr.com/lifestyle/arts-and-entertainment" className="is_fm-toggle" id="fm-id-160">Arts &amp; Entertainment</a></li>
                                    <li><a href="http://www.afr.com/lifestyle/cars-bikes-and-boats" className="is_fm-toggle" id="fm-id-161">Cars, Bikes &amp; Boats</a></li>
                                    <li><a href="http://www.afr.com/lifestyle/health" className="is_fm-toggle" id="fm-id-162">Health</a></li>
                                    <li><a href="http://www.afr.com/lifestyle/home-design" className="is_fm-toggle" id="fm-id-163">Home Design</a></li>
                                    <li><a href="http://www.afr.com/afr-magazine" className="is_fm-toggle" id="fm-id-164">The Australian Financial Review Magazine</a></li>
                                    <li><a href="http://www.afr.com/luxury" className="is_fm-toggle" id="fm-id-165">Luxury</a></li>
                                    <li><a href="http://www.afr.com/sophisticated-traveller" className="is_fm-toggle" id="fm-id-166">The Sophisticated Traveller</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </header>
              </div>
            </div>
        );
    };
};
export default Header;
/*
<div className="header" style={{height:"10vh", display:"flex", alignItems:"center", flexDirection:"row" , justifyContent:"space-between"}}>
              <img alt='phony-h1' style={{height:"3vh", paddingLeft:"2vw"}} src={process.env.PUBLIC_URL+"/svg-temp/hamburger.svg"}/>
              <img alt='phony-h1' style={{height:"3vh"}} src={process.env.PUBLIC_URL+"/svg-temp/afr-logo.svg"}/>
              <img alt='phony-h1' style={{height:"5vh", paddingRight:"2vw"}} src={process.env.PUBLIC_URL+"/svg-temp/search-icon.svg"}/>
            </div>
*/
/*

*/

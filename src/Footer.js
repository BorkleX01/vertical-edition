import React, { Component } from 'react';
class Footer extends Component {
    render(){
        return(<div className="afr-rip">
               <div className="outer-wrap">
        <div className="content wrap" id="content"></div>
        <div className="seo-footer"></div>
        <footer id="footer" className="footer gel-layout" role="contentinfo">
            <div className="footer__head">
                <div className="wrap">
                    <a className="afr-rip-logo-wrap" href="http://www.afr.com/">
                        <span className="afr-rip-logo"></span>
                            <span className="tagline">
                                <p>The Australian Financial Review</p>
                                <p>www.afr.com</p>
                            </span>
                        </a>

                </div>
            </div>
            <div className="wrap">
                <div className="footer__block my-afr">
                    <h5 className="footer__heading">Subscription Terms</h5>
                    <ul>
                        <li><a href="http://www.afr.com/digital-subscription-terms">Digital Subscription Terms</a></li>
                        <li><a href="http://www.afr.com/newspaper-subscription-terms">Newspaper Subscription Terms</a></li>
                        <li><a href="http://corporatesubscriptions.com.au/" target="_blank">Corporate Subscriptions</a></li>
                    </ul>
                </div>
                <div className="footer__block contact">
                    <h5 className="footer__heading">Contact &amp; Feedback</h5>
                    <ul>
                        <li><a href="http://www.afr.com/about-us">About us</a></li>
                        <li><a href="http://www.afr.com/our-events">Our Events</a></li>
                        <li><a href="http://www.afr.com/faq">FAQ</a></li>
                        <li><a href="http://www.afr.com/contact-us">Contact us</a></li>
                        <li><a href="http://www.afr.com/letters-to-the-editor">Letters to the Editor</a></li>
                        <li><a href="https://support.fairfaxmedia.com.au/hc/en-gb/requests/new" target="_blank">Give feedback</a></li>
                        <li><a href="http://adcentre.com.au/brands/australian-financial-review/" target="_blank">Advertise</a></li>
                        <li><a href="http://www.afr.com/sitemap">Site Map</a></li>
                        <li><a href="http://www.afr.com/accessibility">Accessibility</a></li>
                    </ul>
                </div>
                <div className="footer__block markets-data">
                    <h5 className="footer__heading">Markets Data</h5>
                    <ul>
                        <li className="premium-content"><a href="http://www.afr.com/markets-data">Markets Overview</a></li>
                        <li className="premium-content"><a href="http://www.afr.com/markets-data/world-equities">World Equities</a></li>
                        <li className="premium-content"><a href="http://www.afr.com/markets-data/commodities">Commodities</a></li>
                        <li className="premium-content"><a href="http://www.afr.com/markets-data/currencies">Currencies</a></li>
                        <li className="premium-content"><a href="http://www.afr.com/markets-data/derivatives">Derivatives</a></li>
                        <li className="premium-content"><a href="http://www.afr.com/markets-data/interest-rates">Interest Rates</a></li>
                        <li className="premium-content"><a href="http://www.afr.com/share-tables">Share Tables</a></li>
                    </ul>
                </div>
                <div className="footer__block brands">
                    <h5 className="footer__heading">Brands</h5>
                    <ul>
                        <li><a href="http://www.afr.com/afr-magazine">The Australian Financial Review Magazine</a></li>
                        <li><a href="http://www.afr.com/boss">BOSS</a></li>
                        <li><a href="http://www.afr.com/leadership/afr-lists">AFR Lists</a></li>
                        <li><a href="http://www.afr.com/chanticleer">Chanticleer</a></li>
                        <li><a href="http://www.afr.com/luxury">Luxury</a></li>
                        <li><a href="http://www.afr.com/rear-window">Rear Window</a></li>
                        <li><a href="http://www.afr.com/sophisticated-traveller">The Sophisticated Traveller</a></li>
                    </ul>
                </div>
                <div className="footer__block network">
                    <h5 className="footer__heading">Fairfax Network</h5>
                    <ul>
                        <li><a href="http://www.smh.com.au/">The Sydney Morning Herald</a></li>
                        <li><a href="http://www.theage.com.au/">The Age</a></li>
                        <li><a href="http://www.adzuna.com.au/">Adzuna</a></li>
                        <li><a href="http://www.domain.com.au/">Domain</a></li>
                        <li><a href="http://www.drive.com.au/">Drive</a></li>
                        <li><a href="http://www.rsvp.com.au/">RSVP</a></li>
                        <li><a href="http://www.essentialbaby.com.au/">Essential Baby</a></li>
                        <li><a href="http://www.domain.com.au/property-profile">Home Price Guide</a></li>
                        <li><a href="http://www.weatherzone.com.au/">Weatherzone</a></li>
                        <li><a href="https://www.oneflare.com.au/">Oneflare</a></li>
                        <li><a href="https://www.thestore.com.au/">The Store</a></li>
                    </ul>
                </div>
            </div>
            <div className="legal-wrap">
                <ul className="legal">
                    <li className="copyright">© Copyright 2018 Fairfax Media</li>
                    <li className="reprints"><a href="http://professional.fairfaxsyndication.com/C.aspx?VP3=CMS3&amp;VF=Home" target="_blank">Reprints &amp; Permissions</a></li>
                    <li className="privacy"><a href="http://www.fairfax.com.au/privacy.html" target="_blank">Privacy Policy</a></li>
                    <li className="t-and-c"><a href="http://fairfax.com.au/conditions.html" target="_blank">Terms &amp; Conditions of Use</a></li>
                </ul>
            </div>
        </footer>
    </div>
               </div>);
    }
}
export default Footer;

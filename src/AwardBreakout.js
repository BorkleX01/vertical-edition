import React, { Component } from 'react';
import {parse} from './html-parser';
import {serverString} from './serverInfo';

class AwardBreakout extends Component {
    componentWillMount(){
    }
    componentDidUpdate(){
    }
    render () {
        var record = this.props.acf.breakouts?
            this.props.acf.breakouts[this.props.count]
            :null;
        return(
            record !== null?
                <Breakout record={record}/>
                :
                <div></div>);
            
    }
}
//<img alt="badge winner" src={serverString+"/wp-content/uploads/2018/01/Badge-Winner-2018-222x300.png"}/>
const Breakout = (props) => {
    return(
        <div className="breakout-inner">
          {props.record.image.sizes?<img alt='breakout-thumb' src={props.record.image.sizes.medium}/>:null}
          <div className="breakout-body">      
            <div className="breakout-ribbon">
              <div className="breakout-ribbon-inner">
                <div className="breakout-ribbon-text">
                  <div className="winner">
                    WINNER
                  </div>
                  <div className="name">
                    {props.record.awarder}
                  </div>
                </div>
              </div>
            </div>
            <div className="breakout-list">
              {parse(props.record.body)}
            </div>
          </div>
          
        </div>);
};
export default AwardBreakout;



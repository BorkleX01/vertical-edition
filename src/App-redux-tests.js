import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from './FetchAllPosts';

class App extends Component {
    constructor(){
        super();
        this.state ={
        };
    }
    
    componentWillMount(){
        console.log("App: componentWillMount");
        var segment = window.location.pathname.split('/')[1];
        this.props.fetchAllPosts(segment);
    }
    
    
    componentDidUpdate(){
        // console.log("===============App update==============");
    }


    componentWillReceiveProps(nextProps){
        // console.log("App: componentWillReceiveProps");
        // console.log(nextProps);
        return true;
    }
    
    render(){
        // console.log("Render: ");
        // console.log(this.props.selection.data.length);
        return(
            <div className="App">
              RENDERED {this.props.selection.data.length};
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    posts: state.returnMatchedPosts,
    selection: state.returnSequencedPosts
});


export default connect(mapStateToProps, {fetchAllPosts})(App);

import React from 'react';
import HtmlToReact, {Parser} from 'html-to-react';
import CaseStudy from './CaseStudy';
import AwardBreakout from './AwardBreakout';

export function parse2(html, obj){
    var width;
    var isValidNode = function () {
        return true;
    };
    var parsedHTML = new Parser();
    var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
    var procHTML = [{
        shouldProcessNode: function (node) {
            //console.log(node);
            //console.log(node.name);
            return (node.type === "tag");
        },
        processNode: function(node, children, index){
            if(node.name === "img"){
                //console.log("ad dimensions");
                //console.log(node);
                //console.log(node.attribs.width);
                width = node.attribs.width;
                //console.log(node.attribs.height);
            }
        }
    }];

    var out = parsedHTML.parseWithInstructions(html, isValidNode, procHTML);
    
    //return out;
    return width;
}

export function parse_for_ad_url(html, obj){
    var width;
    var url;
    var isValidNode = function () {
        return true;
    };
    var parsedHTML = new Parser();
    var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
    var procHTML = [{
        shouldProcessNode: function (node) {
            //console.log(node);
            //console.log(node.name);
            return (node.type === "tag");
        },
        processNode: function(node, children, index){
            if(node.name === "a"){
                //console.log("ad dimensions");
                //console.log(node);
                //console.log(node.attribs.width);
                url = node.attribs.href;
                //console.log(node.attribs.height);
            }
        }
    }];

    var out = parsedHTML.parseWithInstructions(html, isValidNode, procHTML);
    
    //return out;
    return url;
}


export function parse(html, obj){
    var num_case_studies = -1;
    var num_breakouts = -1;
    var parsedHTML = new Parser();
    
    
    var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
    var isValidNode = function () {
        return true;
    };
    var procHTML = [
        {
            replaceChildren: true,
            shouldProcessNode: function (node) {
                return node.attribs && (node.attribs.class === 'breakout alignright') ;
            },
            processNode: function (node, children, index) {
                num_breakouts++;
                return (<AwardBreakout count={num_breakouts} acf={obj} key={index} position="right" children={children} node={node}/>);
                
            }
        },
        {
            replaceChildren: true,
            shouldProcessNode: function (node) {
                return node.attribs && (node.attribs.class === 'breakout alignleft') ;
            },
            processNode: function (node, children, index) {
                num_breakouts++;
                return (<AwardBreakout count={num_breakouts} acf={obj} key={index} position="left" children={children} node={node}/>);
                
            }
        },
        {
            replaceChildren: true,
            shouldProcessNode: function (node) {
                return node.attribs && (node.attribs.class === 'case-study alignleft') ;
            },
            processNode: function (node, children, index) {
                num_case_studies++;
                return (<CaseStudy count={num_case_studies} acf={obj} key={index} position="left" children={children} node={node}/>);
                
            }
        },
        {
            replaceChildren: true,
            shouldProcessNode: function (node) {
                return node.attribs && (node.attribs.class === 'case-study alignright') ;
            },
            processNode: function (node, children, index) {
                num_case_studies++;
                //console.log(num_case_studies);
                return (<CaseStudy count={num_case_studies} acf={obj} key={index} position="right" children={children} node={node}/>);
                
            }
        },
        {
            shouldProcessNode: function (node) {
                //console.log(node);
                return true;
            },
            processNode: processNodeDefinitions.processDefaultNode
        }];
    var out = parsedHTML.parseWithInstructions(html, isValidNode, procHTML);
    
    return out;
}

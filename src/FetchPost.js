import axios from 'axios';
import {serverString} from './serverInfo';

export function fetchOnePost(slug){
    return function(dispatch){
        //var wp_post_URL = serverString+"/wp-json/wp/v2/posts?slug="+slug;
        var wp_post_URL = "posts.json";
        const axObj = axios.create({
            //baseURL: serverString 
            baseURL: '/'
        });
        axObj.get(wp_post_URL)
            .then((response) => {
                dispatch({type:'post_received', slug:slug , payload:response.data});
            });
    };
}

import axios from 'axios';
import {serverString} from './serverInfo';

export function fetchOptions(){
    return function(dispatch){
        var wp_options_URL = serverString+"/wp-json/acf/v2/options";
        axios.get(wp_options_URL)
            .then((response) => {
                dispatch({type:'options_received', data:response.data});
            });
    };
}

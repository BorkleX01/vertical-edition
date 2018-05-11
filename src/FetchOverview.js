import axios from 'axios';
import {serverString} from './serverInfo';

//const wp_all_menus_URL = serverString+"/wp-json/wp-api-menus/v2/menus";
const wp_all_menus_URL = "3.json";

export function fetchOverview(list_name){
    return function(dispatch){
        const axObj = axios.create({
            //baseURL: serverString 
            baseURL: '/'
        });

        axObj.get(wp_all_menus_URL)
            .then(function(response){
                console.log("FETCH OVERVIEW ===========");
                console.log(response);
                function getMasterList(arr)
                {
                    return arr.slug === list_name;
                }
                var listID = response.data.find(getMasterList).ID;
                // console.log(wp_all_menus_URL+"/"+listID);
                return(wp_all_menus_URL+"/"+listID);
            })
            .then(function(menuURL){
                axios.get(menuURL)
                    .then(function(response){
                        //console.log(response.data.items);
                        dispatch({type:'menu_received', payload:response.data.items});
                    });
            });
    };
}

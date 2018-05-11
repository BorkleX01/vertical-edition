import axios from 'axios';
import {serverString} from './serverInfo';

export function fetchAllPosts(slug){
    return function(dispatch){

        var retrieval_object = {};
        var list_name = 'master-list';
        var menu_matched_posts = [];
        var matched_slug = 'no slug';
        var matched_slug_index = 0;
        var sequenced_posts = [];

        var wp_post_URL = serverString+"/wp-json/wp/v2/posts?per_page=100";
        const wp_all_menus_URL = serverString+"/wp-json/wp-api-menus/v2/menus";
        
        axios.get(wp_post_URL)
            .then((response) => {
                //dispatch({type:'all_posts_received', payload:response.data});
                Object.assign(retrieval_object, {allPosts:response.data});
                //console.log(retrieval_object);
            }).then(() =>{
                axios.get(wp_all_menus_URL)
                    .then((response)=>{
                        console.log("FETCH ALL ===========>");
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
                                //dispatch({type:'menu_received', payload:response.data.items});
                                Object.assign(retrieval_object, {menuItems:response.data.items});
                                //console.log(retrieval_object);
                            })
                            .then(()=>{
                                retrieval_object.menuItems.map((item)=>{
                                    var menuMatchedPost = retrieval_object.allPosts.find((el)=>{return (el.slug === item.object_slug)});
                                    //console.log(menuMatchedPost);
                                    menu_matched_posts.push(menuMatchedPost);
                                    return true;
                                });
                                Object.assign(retrieval_object, {menuSelectablePosts:menu_matched_posts});
                                //console.log(retrieval_object);
                                //Test browser slug against menu-matched posts
                                //console.log("match with: " + slug);
                                //if(menu_matched_posts.find((item, index)=>(slug === item.slug))){matched_slug=slug;matched_slug_index=index};
                                menu_matched_posts.map((item, index)=>{
                                    if(slug === item.slug){
                                        matched_slug = slug;
                                        matched_slug_index=index;
                                    }
                                    return true;
                                });
                                //console.log(matched_slug);
                                //console.log(matched_slug_index);
                                //Sequence collected posts
                                var k=(j) => (matched_slug === 'no slug'? 0 : matched_slug_index);
                                for (var i=0; i<menu_matched_posts.length; i++){
                                    //console.log("====Begin Sequence");
                                    for (var j=k(i); j<k(i)+menu_matched_posts.length; j++){
                                        //console.log(j%menu_matched_posts.length+ " " + menu_matched_posts[j%menu_matched_posts.length].slug);
                                        sequenced_posts.push(menu_matched_posts[j%menu_matched_posts.length]);
                                    }
                                    //console.log("====End Sequence: "+menu_matched_posts.length);
                                    break;
                                };

                                //console.log(retrieval_object);
                                //console.log(sequenced_posts);
                                
                                dispatch({type:'menu_matched_posts_received', payload:retrieval_object});
                                dispatch({type:'sequenced_posts_event', payload:sequenced_posts});

                            });
                    });
            })
    };
}

export function addMenuMatchedPosts(arr){
    return function (dispatch){
        // console.log("adding to matched post");
        dispatch({type:'add_to_matched', payload:arr});
    }
}



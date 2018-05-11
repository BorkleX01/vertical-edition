import { combineReducers } from 'redux';

const initialWindowWidth = window.innerWidth
const breakpoints = {
    mobile: 767,
    tablet: 991,
    desktop: 1300
}

const WINDOW = {
    isMobile: initialWindowWidth <= breakpoints.mobile ? true : false,
    isTablet: initialWindowWidth > breakpoints.mobile && initialWindowWidth <= breakpoints.tablet ? true : false,
    isDesktop: initialWindowWidth > breakpoints.tablet && initialWindowWidth <= breakpoints.desktop ? true : false,
    isLarge: initialWindowWidth > breakpoints.desktop ? true : false,
    width: initialWindowWidth
}

const INTERFACE = {
    modalVisible: false,
    modalPayload: {},
    sideNavVisible: false,
    sideNavPayload: {}
};

const MENU_MATCHED_POSTS = {
    allPosts: 'no data',
    menuItems: 'no data',
    menuSelectablePosts: 'no data'
};

const SEQUENCED_POSTS = {
    data: []
};

export function windowState (state=WINDOW, action){
    switch(action.type){
        case 'window_resize':
            const windowWidth = window.innerWidth
            return Object.assign({}, {
                isMobile: windowWidth <= breakpoints.mobile ? true : false,
                isTablet: windowWidth > breakpoints.mobile && windowWidth <= breakpoints.tablet ? true : false,
                isDesktop: windowWidth > breakpoints.tablet && windowWidth <= breakpoints.desktop ? true : false,
                isLarge: windowWidth > breakpoints.desktop ? true : false,
                width: windowWidth
            });
        default: 
            return state;
    }
}


const APP_OPTIONS = {
    data: 'no data'
};

export function appOptions (state = APP_OPTIONS, action){
    switch(action.type){
    case 'options_received':
        // console.log('options_received');
        return { ...state, data:action.data };
        
    default: return state;
    }
}

export function interfaceState (state=INTERFACE, action){
    switch(action.type){
    case 'modal_received':
        // console.log('modal_received');
        // console.log(action.state);
        return {...state, modalVisible:action.state, modalPayload:action.payload};
    case 'sideNav_control':
        //console.log('sideNav_control');
        //console.log(action.payload);
        return {...state, sideNavPayload:action.payload};
    default: return state;
    }
}
export function returnMatchedPosts (state=MENU_MATCHED_POSTS, action){
    switch(action.type){
    case 'menu_matched_posts_received':
        // console.log('************menu_matched_posts_received');
        //console.log(state);
        //console.log(action.payload);
        //console.log(state === action.payload);
        return Object.assign({}, {allPosts:action.payload.allPosts, menuItems:action.payload.menuItems, menuSelectablePosts:action.payload.menuSelectablePosts});
    default: return state;
    }
}
export function returnSequencedPosts (state=SEQUENCED_POSTS, action){
    switch(action.type){
    case 'sequenced_posts_event':
        // console.log('************sequenced_posts_event');
        //console.log(state);
        //console.log(action.payload);
        //console.log(state === action.payload);
        return Object.assign({}, {data:action.payload});
    default: return state;
    }
}
const rootReducer = combineReducers({windowState, appOptions, interfaceState, returnMatchedPosts, returnSequencedPosts});
export default rootReducer;




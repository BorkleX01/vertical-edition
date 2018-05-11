export function activateModal(bool, payload){
    return function(dispatch){
        console.log("activateModal dispatch: " + bool);
        
        if(window.gtag && bool){
            if(payload.title)
            {
                console.log(payload.title);
                window.gtag('event', 'Modal', {'event_category':'Clicks','event_label':payload.title});
            }
        }
        dispatch({type:'modal_received', state:bool, payload:payload});
    };
}

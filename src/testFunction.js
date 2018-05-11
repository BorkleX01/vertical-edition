var ticks = 0;
function timeIsTickingAway(){
    // console.log("ticks: " + ticks++);
    ticks>10?clearInterval(ticker):null;
}

var ticker = setInterval(timeIsTickingAway, 1000); //called while declared



        // console.log("side nav update");
        var options = {
            root: null, //must be ancestor of target!!!. Can't use post. Using Viewport (null).
            rootMargin: '0px 0px 0px 0px', //clockwise. Use Hero height. Only accepts px and %
            threshold: [0] //fraction of whole object in pixels
        };
        var vpObserver = new IntersectionObserver(detectPost, options); //viewport observes posts
        var postObserver = new IntersectionObserver(detectNav, null);//posts observe nav

        var heroes = document.querySelectorAll('.post-container');
        heroes.forEach((el)=>{
            // console.log(el);
            vpObserver.observe(el); //viewport now observes all post containers.
        });
        
        
        function detectPost (entries, observer){//entries of things that have happenned between observer and observed
            // console.log("Post is in view ");
            entries.forEach(entry => {
                if (entry.target.querySelector('.hero')){ //has content
                    //console.log(entry); //nature of the event
                    // console.log(entry.target);
                    // console.log(entry.isIntersecting);
                };
                
            });
        };
        function detectNav (entries, observer){
            entries.forEach(entry => {
                // console.log("bang clash! ");
                // console.log(entry.target.querySelector('.hero'));
                var heroDiv = entry.target.querySelector('.hero');

                // console.log(entry.intersectionRatio);
            });
        }
        //console.log(this.props.selection.data);
        //console.log(this.props.posts);

    
componentWillReceiveProps(nextProps){
        // console.log("App: componentWillReceiveProps");
        var a = this.props.selection.data;
        var b = nextProps.selection.data;

        // console.log(a);
        // console.log(b);
        // console.log("compare two props:");
        // console.log(a === b);
        return true;
    }
    
    shouldComponentUpdate(nextProps, nextState){
        // console.log("App: shouldComponentUpdate");
        
        var a = this.props.selection.data;
        var b = nextProps.selection.data;

        // console.log(a);
        // console.log(b);
        // console.log("compare two props:");
        // console.log(a == b);
        //return a == b?false:true;
        return true;
    }


if(document.querySelectorAll('.post-container').length > 0){ //dom is populated with base elements
    //Attach observers
    var options = {
        root: null, //must be ancestor of target
        rootMargin: '0px 0px 0px 0px', //clockwise. Only accepts px and %
        threshold: [0] //fraction of whole object in pixels
    };
    var viewport = new IntersectionObserver(this.postDetected, options); //viewport is now an observer
    var posts = document.querySelectorAll('.post-container');
    posts.forEach((post)=>{
        viewport.observe(post); //viewport now observes all post containers. Will trigger postDetected callback
    });
}

//callback - access dom only
postDetected(entries, observer){//entries of things that have happenned between observer and observed
    //'this' = observer
    //console.log("postDetected");
    entries.forEach(entry => {
        //console.log(entry.target.className + " " +(entry.isIntersecting?'entered':'exited')); //'this' = entry
        if (entry.target.querySelector('.hero')){ //has content, add other things to observe...
            //for Side Nav
            window.firstPost = document.querySelectorAll(['.post-container'])[0].getBoundingClientRect().top;
            observer.observe(entry.target.querySelector('.hero'));
            observer.observe(entry.target.querySelector('.advert'));

            //get next 2 posts
            window.thisPost = entry.target.id;
            entry.isIntersecting?window.informSideNav():null;

            //For tracking
            var cta_post = entry.isIntersecting?'enter: '+entry.target.id+' time: '+entry.time:'exit: '+entry.target.id+' time: '+entry.time;
            // console.log("cta: " + cta_post);
        };

        if (entry.target.className === "hero"){
            if(entry.isIntersecting){
                //window.currentObscurers.push(entry.target);
                window.currentHero = entry.target; //push to array if multiple obscurers in view.
                window.collDetect();
            }
        }
    });
}


window.currentHero = "";
window.firstPost = "";
window.thisPost = "";
window.sequence = "";
window.sn_informer = "no def";

window.informSideNav = function(){
    //console.log(">Inform Side Nav of next two posts from: " + window.thisPost);
    //console.log(window.sequence);
    var currentIndex = window.sequence.findIndex(function(el){return el.slug === window.thisPost;});

    //console.log(window.sn_informer);
    //window.sn_informer(currentIndex); //infinte loop
};

window.collDetect = function(){
    var sn = document.querySelector('.side-nav');
    var hr = window.currentHero;
    var collided = false;

    var snDIM; 
    var targetDIM;            
    var collisionBounds;            
    
    var marginTop;
    var belowGrid;

    window.onscroll = function(){
        snDIM = document.querySelector('.side-nav').getBoundingClientRect();
        targetDIM = hr.getBoundingClientRect();
        collisionBounds = ((snDIM.bottom >= targetDIM.top) && (snDIM.bottom <= targetDIM.bottom))||((snDIM.top >= targetDIM.top) && (snDIM.top <= targetDIM.bottom));

        window.firstPost = document.querySelectorAll(['.post-container'])[0].offsetTop;
        
        marginTop = window.firstPost;
        belowGrid = window.scrollY < marginTop;
        
        if(collisionBounds || belowGrid){
            collided = true;
            sn.style.visibility = "hidden";
        }
        else
        {
            sn.style.visibility = "visible";
        }
    };
};



//console.log("Organisational Profile");
        /*var fieldNames = [
            'application_dates',
            'apply_now_details',
            'disciplines_hired',
            'diversity_intake_figures',
            'graduate_intake',
            'graduate_intake_2017',
            'location',
            'malefemale_ratio',
            'no_employees'
        ];*/



const RIO = function(props, item, inView){
    var cta_post = inView.isIntersecting?'enter: '+inView.target.id+' time: '+inView.time:'exit: '+inView.target.id+' time: '+inView.time;
    // console.log(cta_post);
    var dir = inView.isIntersecting?'enter':'exit';
    //var eventObj = {direction:dir, 'slug':inView.target.id, 'time':inView.time};
    //var eventString = inView.target.id + " " + dir + " " + inView.time;
    //window.gtag('event', eventString);
    if(window.gtag){
        //console.log("GA: " + dir);
        //window.gtag('event', inView.target.id, {'direction':dir, 'time': inView.time});
        window.gtag('event', dir, {'event_category':'Scroll Behaviour','event_label':inView.target.id+" " +inView.time});
        
        //window.gtag('event', dir, {'event_category':'Scroll Behaviour','event_label':inView.time});
        //window.gtag('event', 'screen_view', {'app_name': serverString,  'screen_name': inView.target.id});
    }

    if(inView.isIntersecting){
        var navArr = [];
        var slug = inView.target.id;
        var selection = props.selection.data;
        var ind = selection.findIndex((el)=>el.slug === slug);
        //console.log(selection[hind].acf.kicker);
        var heading = (hind)=> selection[hind].acf.is_advertorial[0]?selection[hind].acf.name:selection[hind].acf.kicker?selection[hind].acf.kicker:'SPECIAL REPORT';
        
        navArr[0] = selection[ind]?{title: selection[ind].title.rendered, isAd: heading(ind)}:null;
        navArr[1] = selection[ind+1]?{title: selection[ind+1].title.rendered, isAd: heading(ind+1)}:null;
        navArr[2] = selection[ind+2]?{title: selection[ind+2].title.rendered, isAd: heading(ind+2)}:null;
        props.sideNavIns({navItems:navArr});
    };

};

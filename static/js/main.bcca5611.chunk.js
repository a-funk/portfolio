(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/alex.2f01ff01.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/ants.843a1f28.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/dev10218cc.2fb8ff7b.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/devs2619CC.8fbcafed.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/feb2.20.20.b8583c4d.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/grey_sunset_devs.edeb2f36.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/grey_sunset.0e9fff60.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/machinelearning.44cb027f.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/rockaway_cliffs.03747b28.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/martins_beach_rock.8e9e8ae5.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/genesislogo.dfea3ba7.jpeg"},40:function(e,t,a){e.exports=a(73)},45:function(e,t,a){},46:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(28),r=a.n(i),s=(a(45),a(3)),l=a(4),c=a(6),d=a(5),u=(a(46),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).addStyling=function(){return e.props.tab.id===e.props.activeTab?{backgroundColor:"#507A77",color:"white"}:{color:"#111"}},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"tab",style:this.addStyling(),onClick:this.props.changeTab.bind(this,this.props.tab.id)},this.props.tab.title)}}]),a}(n.Component)),p=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return this.props.tabs.map((function(t){return o.a.createElement(u,{tab:t,changeTab:e.props.changeTab,activeTab:e.props.activeTab})}))}}]),a}(n.Component),m=a(29),v=a.n(m),h=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.title="Alex Funk's Portfolio"}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"section"},o.a.createElement("div",{className:"s1-image"},o.a.createElement("img",{src:v.a,alt:"Me in San Francisco"})),o.a.createElement("div",null,o.a.createElement("h2",null,"Alex Funk, a short bio:"),o.a.createElement("hr",null),o.a.createElement("p",null,"Hello. I am Alex Funk.  I am a Computer Science Major, Philosophy Minor and Technology Managment Certificate pursuer. I love to paint, surf, hangout with my friends and play videogames. I have been working on a startup for the better part of a year.  Here you will see some of my paintings, videos, and movies I enjoy, and learn about Genesis.")))),o.a.createElement("button",{className:"scrollButton",style:{display:this.props.display},onClick:this.props.scrollToTop},"Scroll to Top"))}}]),a}(n.Component),b=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"img-child"},o.a.createElement("img",{src:this.props.image.src,onClick:this.props.enlarge.bind(this,this.props.image.src),alt:this.props.image.alt}),o.a.createElement("div",{className:"caption"},this.props.image.caption))}}]),a}(n.Component),f=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return this.props.images.map((function(t){return o.a.createElement(b,{image:t,enlarge:e.props.enlarge})}))}}]),a}(n.Component),y=a(30),g=a.n(y),E=a(31),j=a.n(E),O=a(32),k=a.n(O),T=a(33),S=a.n(T),C=a(34),w=a.n(C),M=a(35),B=a.n(M),N=a(36),x=a.n(N),I=a(37),D=a.n(I),A=a(38),L=a.n(A),P=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"enlarge",value:function(e){var t=document.createElement("img");t.className="lightbox-content",t.src=e,t.id="lbContent";var a=document.createElement("div");a.id="lb",a.className="lightbox",document.body.appendChild(a),document.getElementById("lb").appendChild(t),document.getElementById("lb").addEventListener("click",(function(e){"lightbox-content"!==e.target.className&&(document.getElementById("lb").removeChild(document.getElementById("lbContent")),document.body.removeChild(document.getElementById("lb")))}))}},{key:"componentDidMount",value:function(){document.title="Discover More"}},{key:"render",value:function(){var e=[{id:1,src:g.a,alt:"Ants",caption:"An abstract painting depicting the ants in my home"},{id:2,src:j.a,alt:"Devereux Sunset",caption:"Sunset at Devereux"},{id:3,src:k.a,alt:"Devs Sunset",caption:"Another Devereux Sunset"},{id:4,src:S.a,alt:"Another Sunset",caption:"ANOTHER ANOTHER Devereux Sunset"},{id:5,src:w.a,alt:"Sunset on Cloudy Day",caption:"Surfer and a Cloudy day"},{id:6,src:B.a,alt:"Grey Sunset",caption:"Grey Sunset over the cliffs at Campus Point"},{id:7,src:x.a,alt:"Machine Learning",caption:"Abstract painting of machine learning"},{id:8,src:D.a,alt:"Sunset at Rockaway",caption:"Sunset on the cliffs at Rockaway in Half Moon Bay"},{id:9,src:L.a,alt:"Martins Beach",caption:"Painting of my favorite beach in the world, Martins Beach"}];return o.a.createElement("div",null,o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"img-container"},o.a.createElement(f,{images:e,enlarge:this.enlarge}))),o.a.createElement("button",{className:"scrollButton",style:{display:this.props.display},onClick:this.props.scrollToTop},"Scroll to Top"))}}]),a}(n.Component),H=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"vid-child"},o.a.createElement("iframe",{height:"315",src:this.props.video.src,frameborder:"0",gesture:"media",allow:"autoplay; encrypted-media",allowfullscreen:!0,title:this.props.video.title}),o.a.createElement("div",{className:"vid-caption"},this.props.video.caption))}}]),a}(n.Component),U=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.props.videos.map((function(e){return o.a.createElement(H,{video:e})}))}}]),a}(n.Component),F=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.title="Fun Videos"}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"vid-container"},o.a.createElement(U,{videos:[{id:1,src:"https://www.youtube.com/embed/ZeQMxy-Uf3M",title:"Great Weird Video",caption:"Unbelievable geodome simulation"},{id:2,src:"https://www.youtube.com/embed/x7ZrKehQ_xc",title:"Gary's Mod Themepark",caption:"A surreal experience from beginning to end."},{id:3,src:"https://www.youtube.com/embed/14hO4omkZ0I",title:"Silly Meme Video",caption:"Hilarious compilation of memes!"}]}))),o.a.createElement("button",{className:"scrollButton",style:{display:this.props.display},onClick:this.props.scrollToTop},"Scroll to Top"))}}]),a}(n.Component),G=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"section"},o.a.createElement("div",null,o.a.createElement("img",{className:"proj-image",src:this.props.proj.src,alt:this.props.proj.alt})),o.a.createElement("div",null,o.a.createElement("h2",null,this.props.proj.title),o.a.createElement("p",null,this.props.proj.desc,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("a",{href:this.props.proj.link,target:"_blank",rel:"noopener noreferrer"},"Learn more and watch the pitch here.")))),o.a.createElement("hr",null))}}]),a}(n.Component),R=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.props.projects.map((function(e){return o.a.createElement(G,{proj:e})}))}}]),a}(n.Component),_=a(39),W=a.n(_),z=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.title="Genesis"}},{key:"render",value:function(){var e=[{id:1,src:W.a,alt:"Genesis Logo",title:"Genesis",desc:"What Genesis offers is consistent, high accuracy labeled data that our customers can use to build better, smarter and less expensive AI-solutions while offering gig-economy workers of any background economic mobility.",link:"https://www.newventure.live/finalists/#teamseven"}];return o.a.createElement("div",null,o.a.createElement("div",{className:"content"},o.a.createElement(R,{projects:e})),o.a.createElement("button",{className:"scrollButton",style:{display:this.props.display},onClick:this.props.scrollToTop},"Scroll to Top"))}}]),a}(n.Component),K=a(14),q=(a(17),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={src:"",title:"",director:"",imdb:"",plot:"",shouldUpdate:!1},e}return Object(l.a)(a,[{key:"dimPoster",value:function(e){e.target.style.opacity=.7}},{key:"resetPoster",value:function(e){e.target.style.opacity=1}},{key:"componentDidUpdate",value:function(e,t,a){this.state.shouldUpdate!==t.shouldUpdate&&this.render(),this.props.movie!==e.movie&&this.render()}},{key:"render",value:function(){return o.a.createElement("div",{className:"mov-child"},o.a.createElement("img",{src:this.props.src,onMouseEnter:this.dimPoster,onMouseLeave:this.resetPoster,onClick:this.props.enlarge.bind(this,this.props.src,this.props.title,this.props.director,this.props.imdb,this.props.plot,this.props.movie),alt:this.state.title}))}}]),a}(n.Component)),V=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return this.props.movieList.map((function(t){return o.a.createElement(q,{movie:t.id,src:t.src,title:t.name,director:t.director,imdb:t.imdb,plot:t.plot,enlarge:e.props.enlarge})}))}}]),a}(n.Component),Y={apiKey:"AIzaSyDPAqXyzrAYsLLwiEo9DrBbDL7RsqBz",authDomain:"funkportfolio.firebaseapp.com",databaseURL:"https://funkportfolio.firebaseio.com"},Z=a(27),J=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this)).myChangeHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(K.a)({},t,a));var o=document.getElementById("list").value;if("all"===o){var i=Z.database().ref("movies");i.once("value").then((function(e){var t=e.val(),a=[];for(var o in t)a.push({id:o,name:t[o].name,src:t[o].src,director:t[o].director,imdb:t[o].imdb,plot:t[o].plot});n.setState({lastMov:a[a.length-1]}),a.length<1e6?n.setState({displayButton:"none"}):n.setState({displayButton:"block"})})),i.orderByKey().limitToFirst(9).once("value").then((function(e){var t=[];for(var a in 1e4)t.push({id:a,name:1e4[a].name,src:1e4[a].src,director:1e4[a].director,imdb:1e4[a].imdb,plot:1e4[a].plot});n.setState({currPoint:t[t.length-1].id}),t.pop(),n.setState({movies:t})}))}else{var r=[];Z.database().ref("relations").once("value").then((function(e){var t=e.val();for(var a in t)t[a].list===o&&r.push(t[a].mov);Z.database().ref("movies").once("value").then((function(e){var t=e.val(),a=[];for(var o in t)r.includes(o)&&a.push({id:o,name:t[o].name,src:t[o].src,director:t[o].director,imdb:t[o].imdb,plot:t[o].plot});n.setState({movies:a}),n.setState({displayButton:"none"})}))}))}},n.state={currPoint:"",lastMov:"",movies:[],lists:[],listChoice:"all",displayButton:"none",shouldUpdate:!1},n}return Object(l.a)(a,[{key:"enlarge",value:function(e,t,a,n,o,i){document.body.style.overflow="hidden";var r=document.createElement("img");r.className="movLightbox-content",r.src=e,r.id="lbContent";var s=document.createElement("div");s.className="movLightbox-info",s.id="lbInfo",s.innerHTML="<span class='title'>"+t+"</span><br/><span class='director'>"+a+"</span><br/><br/><span class='rating'>IMDb Rating: "+n+"</span><p>"+o+"</p>";var l=document.createElement("div");l.id="lbMovie",l.className="movLightbox-container";var c=document.createElement("div");c.id="lb",c.className="movLightbox";var d=document.createElement("button");d.id="delButton",d.innerHTML="Delete Movie",d.onclick=function(){window.confirm("Are you sure you want to delete "+t+"?")&&(Z.database().ref("movies").once("value").then((function(e){var t=e.val();for(var a in t)a===i&&Z.database().ref("movies/"+a).remove()})),Z.database().ref("relations").once("value").then((function(e){var t=e.val();for(var a in t)t[a].mov===i&&Z.database().ref("relations/"+a).remove()})),document.getElementById("lb").removeChild(document.getElementById("lbMovie")),document.body.removeChild(document.getElementById("lb")),document.body.style.overflow="auto")},document.body.appendChild(c),document.getElementById("lb").appendChild(l),document.getElementById("lbMovie").appendChild(r),document.getElementById("lbMovie").appendChild(s),document.getElementById("lb").addEventListener("click",(function(e){"movLightbox"===e.target.className&&(document.getElementById("lb").removeChild(document.getElementById("lbMovie")),document.body.removeChild(document.getElementById("lb")),document.body.style.overflow="auto")}))}},{key:"componentWillUnmount",value:function(){this.ref.off(),this.listRef.off()}},{key:"componentDidMount",value:function(){var e=this;document.title="Great Movies",Z.apps.length||Z.initializeApp(Y),this.ref=Z.database().ref("movies"),this.ref.on("value",(function(t){var a=t.val(),n=[];for(var o in a)n.push({id:o,name:a[o].name,src:a[o].src,director:a[o].director,imdb:a[o].imdb,plot:a[o].plot});e.setState({lastMov:n[n.length-1]}),n.length<9?e.setState({displayButton:"none"}):e.setState({displayButton:"block"})})),this.ref.orderByKey().limitToFirst(9).on("value",(function(t){if("all"===e.state.listChoice){var a=t.val(),n=[];for(var o in a)n.push({id:o,name:a[o].name,src:a[o].src,director:a[o].director,imdb:a[o].imdb,plot:a[o].plot});e.setState({currPoint:n[n.length-1].id}),n.pop(),e.setState({movies:n})}else{var i=[];Z.database().ref("relations").once("value").then((function(t){var a=t.val();for(var n in a)a[n].list===e.state.listChoice&&i.push(a[n].mov);Z.database().ref("movies").once("value").then((function(t){var a=t.val(),n=[];for(var o in a)i.includes(o)&&n.push({id:o,name:a[o].name,src:a[o].src,director:a[o].director,imdb:a[o].imdb,plot:a[o].plot});e.setState({movies:n}),e.setState({displayButton:"none"})}))}))}})),this.listRef=Z.database().ref("lists"),this.listRef.on("value",(function(t){var a=t.val(),n=[];for(var o in a)n.push(a[o].name);e.setState({lists:n})}))}},{key:"componentDidUpdate",value:function(e,t,a){var n=this;if(this.state.shouldUpdate!==t.shouldUpdate){var o=Z.database().ref("movies");o.on("value",(function(e){var t=e.val(),a=[];for(var o in t)a.push({id:o,name:t[o].name,src:t[o].src,director:t[o].director,imdb:t[o].imdb,plot:t[o].plot});n.setState({lastMov:a[a.length-1]}),a.length<9?n.setState({displayButton:"none"}):n.setState({displayButton:"block"})})),o.orderByKey().limitToFirst(500).on("value",(function(e){var t=[];for(var a in 500)t.push({id:a,name:500[a].name,src:500[a].src,director:500[a].director,imdb:500[a].imdb,plot:500[a].plot});n.setState({currPoint:t[t.length-1].id}),t.pop(),n.setState({movies:t})})),Z.database().ref("lists").on("value",(function(e){var t=e.val(),a=[];for(var o in t)a.push(t[o].name);n.setState({lists:a})}))}}},{key:"getMoreMovies",value:function(){var e=this;Z.database().ref("movies").orderByKey().startAt(this.state.currPoint).limitToFirst(9).on("value",(function(t){var a=t.val(),n=[];for(var o in a)n.push({id:o,name:a[o].name,src:a[o].src,director:a[o].director,imdb:a[o].imdb,plot:a[o].plot});n[n.length-1].id===e.state.lastMov.id&&n.length<=500?e.setState({displayButton:"none"}):(e.setState({currPoint:n[n.length-1].id}),n.pop());var i=e.state.movies;i=i.concat(n),e.setState({movies:i})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"content"},o.a.createElement("div",{id:"top-bar"},o.a.createElement("div",{id:"list-container"})),o.a.createElement("div",{className:"mov-container"},o.a.createElement(V,{movieList:this.state.movies,enlarge:this.enlarge}))),o.a.createElement("button",{className:"scrollButton",style:{display:this.props.display},onClick:this.props.scrollToTop},"Scroll to Top"))}}]),a}(n.Component),Q=a(13),X=a(17),$=a(27),ee=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this)).myFormHandler=function(e){e.preventDefault();var t="https://www.omdbapi.com/?apikey=885fb928&i="+n.state.movId;n.getMovieName(Object(Q.a)(n),t)},n.inputHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(K.a)({},t,a))},n.state={movId:"",src:"",title:"",director:"",imdb:"",plot:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.title="Add a Movie",$.apps.length||$.initializeApp(Y)}},{key:"updateDb",value:function(e){var t={name:e.state.title,src:e.state.src,director:e.state.director,imdb:e.state.imdb,plot:e.state.plot},a=$.database().ref("movies");a.once("value").then((function(n){n.child(e.state.movId).exists()?alert("Movie has already been added."):(a.child(e.state.movId).set(t),alert("Movie successfully added!"))}))}},{key:"getMovieName",value:function(e,t){X.get(t).then((function(t){e.setState({src:t.data.Poster,title:t.data.Title,director:t.data.Director,imdb:t.data.imdbRating,plot:t.data.Plot})})).then((function(){e.updateDb(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{id:"add-box"},o.a.createElement("form",{onSubmit:this.myFormHandler},o.a.createElement("h2",null,"Add a Movie to the List"),o.a.createElement("p",null,"IMDb movie ID:"),o.a.createElement("input",{name:"movId",type:"text",size:"50",required:!0,onChange:this.inputHandler}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",id:"submit",name:"submit",value:"Add Movie"})))}}]),a}(n.Component),te=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).prepScroll=function(){var t=window.innerHeight;window.pageYOffset/t*100>25?e.setState({display:"block"}):e.setState({display:"none"})},e.scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})},e.displayContent=function(){var t=e.props.activeTab;return 1===t?o.a.createElement(h,{display:e.state.display,scrollToTop:e.scrollToTop}):2===t?o.a.createElement(P,{display:e.state.display,scrollToTop:e.scrollToTop}):3===t?o.a.createElement(F,{display:e.state.display,scrollToTop:e.scrollToTop}):4===t?o.a.createElement(z,{display:e.state.display,scrollToTop:e.scrollToTop}):6===t?o.a.createElement(J,{display:e.state.display,scrollToTop:e.scrollToTop}):7===t?o.a.createElement(ee,{display:e.state.display,scrollToTop:e.scrollToTop}):void 0},e.state={display:"none"},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.prepScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.prepScroll)}},{key:"render",value:function(){return this.displayContent()}}]),a}(n.Component),ae=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={activeTab:1},e.changeTab=function(t){e.setState({activeTab:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"body"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Alex Funk")," ",o.a.createElement("h2",null,"International Man of Mystery")),o.a.createElement("div",{className:"nav-bar"},o.a.createElement(p,{tabs:[{id:1,title:"Home"},{id:2,title:"Watercolor Paintings by Me"},{id:3,title:"Great YouTube videos"},{id:4,title:"Genesis"},{id:6,title:"Movie List"}],changeTab:this.changeTab,activeTab:this.state.activeTab})),o.a.createElement("div",{className:"main-body"},o.a.createElement(te,{activeTab:this.state.activeTab})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.bcca5611.chunk.js.map
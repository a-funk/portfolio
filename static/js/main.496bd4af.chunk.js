(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/alex.2f01ff01.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/ants.843a1f28.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/dev10218cc.2fb8ff7b.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/devs2619CC.8fbcafed.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/feb2.20.20.b8583c4d.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/grey_sunset_devs.edeb2f36.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/grey_sunset.0e9fff60.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/machinelearning.44cb027f.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/rockaway_cliffs.03747b28.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/martins_beach_rock.8e9e8ae5.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/genesislogo.dfea3ba7.jpeg"},40:function(e,t,a){e.exports=a(73)},45:function(e,t,a){},46:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(28),o=a.n(r),l=(a(45),a(3)),s=a(4),c=a(6),d=a(5),m=(a(46),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).addStyling=function(){return e.props.tab.id===e.props.activeTab?{backgroundColor:"#507A77",color:"white"}:{color:"#111"}},e}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"tab",style:this.addStyling(),onClick:this.props.changeTab.bind(this,this.props.tab.id)},this.props.tab.title)}}]),a}(n.Component)),u=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.props.tabs.map((function(t){return i.a.createElement(m,{tab:t,changeTab:e.props.changeTab,activeTab:e.props.activeTab})}))}}]),a}(n.Component),p=a(29),v=a.n(p),h=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title="Alex Funk's Portfolio"}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"s1-image"},i.a.createElement("img",{src:v.a,alt:"Me in San Francisco"})),i.a.createElement("div",null,i.a.createElement("h2",null,"Alex Funk, a short bio:"),i.a.createElement("hr",null),i.a.createElement("p",null,"Hello. I am Alex Funk.  I am a Computer Science Major, Philosophy Minor and Technology Managment Certificate pursuer. I love to paint, surf, hangout with my friends and play videogames. I have been working on a startup for the better part of a year.  Here you will see some of my paintings, videos, and movies I enjoy, and learn about Genesis.")))),i.a.createElement("button",{className:"scrollButton",style:{display:this.props.display},onClick:this.props.scrollToTop},"Scroll to Top"))}}]),a}(n.Component),b=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"img-child"},i.a.createElement("img",{src:this.props.image.src,onClick:this.props.enlarge.bind(this,this.props.image.src),alt:this.props.image.alt}),i.a.createElement("div",{className:"caption"},this.props.image.caption))}}]),a}(n.Component),f=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.props.images.map((function(t){return i.a.createElement(b,{image:t,enlarge:e.props.enlarge})}))}}]),a}(n.Component),y=a(30),g=a.n(y),E=a(31),j=a.n(E),O=a(32),C=a.n(O),T=a(33),k=a.n(T),M=a(34),S=a.n(M),w=a(35),N=a.n(w),B=a(36),x=a.n(B),L=a(37),I=a.n(L),D=a(38),A=a.n(D),H=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"enlarge",value:function(e){var t=document.createElement("img");t.className="lightbox-content",t.src=e,t.id="lbContent";var a=document.createElement("div");a.id="lb",a.className="lightbox",document.body.appendChild(a),document.getElementById("lb").appendChild(t),document.getElementById("lb").addEventListener("click",(function(e){"lightbox-content"!==e.target.className&&(document.getElementById("lb").removeChild(document.getElementById("lbContent")),document.body.removeChild(document.getElementById("lb")))}))}},{key:"componentDidMount",value:function(){document.title="Discover More"}},{key:"render",value:function(){var e=[{id:1,src:g.a,alt:"Ants",caption:"An abstract painting depicting the ants in my home"},{id:2,src:j.a,alt:"Devereux Sunset",caption:"Sunset at Devereux"},{id:3,src:C.a,alt:"Devs Sunset",caption:"Another Devereux Sunset"},{id:4,src:k.a,alt:"Another Sunset",caption:"ANOTHER ANOTHER Devereux Sunset"},{id:5,src:S.a,alt:"Sunset on Cloudy Day",caption:"Surfer and a Cloudy day"},{id:6,src:N.a,alt:"Grey Sunset",caption:"Grey Sunset over the cliffs at Campus Point"},{id:7,src:x.a,alt:"Machine Learning",caption:"Abstract painting of machine learning"},{id:8,src:I.a,alt:"Sunset at Rockaway",caption:"Sunset on the cliffs at Rockaway in Half Moon Bay"},{id:9,src:A.a,alt:"Martins Beach",caption:"Painting of my favorite beach in the world, Martins Beach"}];return i.a.createElement("div",null,i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"img-container"},i.a.createElement(f,{images:e,enlarge:this.enlarge}))),i.a.createElement("button",{className:"scrollButton",style:{display:this.props.display},onClick:this.props.scrollToTop},"Scroll to Top"))}}]),a}(n.Component),_=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"vid-child"},i.a.createElement("iframe",{height:"315",src:this.props.video.src,frameborder:"0",gesture:"media",allow:"autoplay; encrypted-media",allowfullscreen:!0,title:this.props.video.title}),i.a.createElement("div",{className:"vid-caption"},this.props.video.caption))}}]),a}(n.Component),F=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return this.props.videos.map((function(e){return i.a.createElement(_,{video:e})}))}}]),a}(n.Component),P=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title="Fun Videos"}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"vid-container"},i.a.createElement(F,{videos:[{id:1,src:"https://www.youtube.com/embed/ZeQMxy-Uf3M",title:"Great Weird Video",caption:"Unbelievable geodome simulation"},{id:2,src:"https://www.youtube.com/embed/x7ZrKehQ_xc",title:"Gary's Mod Themepark",caption:"A surreal experience from beginning to end."},{id:3,src:"https://www.youtube.com/embed/14hO4omkZ0I",title:"Silly Meme Video",caption:"Hilarious compilation of memes!"}]}))),i.a.createElement("button",{className:"scrollButton",style:{display:this.props.display},onClick:this.props.scrollToTop},"Scroll to Top"))}}]),a}(n.Component),U=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"section"},i.a.createElement("div",null,i.a.createElement("img",{className:"proj-image",src:this.props.proj.src,alt:this.props.proj.alt})),i.a.createElement("div",null,i.a.createElement("h2",null,this.props.proj.title),i.a.createElement("p",null,this.props.proj.desc,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:this.props.proj.link,target:"_blank",rel:"noopener noreferrer"},"Learn more and watch the pitch here.")))),i.a.createElement("hr",null))}}]),a}(n.Component),G=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return this.props.projects.map((function(e){return i.a.createElement(U,{proj:e})}))}}]),a}(n.Component),R=a(39),q=a.n(R),z=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title="Genesis"}},{key:"render",value:function(){var e=[{id:1,src:q.a,alt:"Genesis Logo",title:"Genesis",desc:"What Genesis offers is consistent, high accuracy labeled data that our customers can use to build better, smarter and less expensive AI-solutions while offering gig-economy workers of any background economic mobility.",link:"https://www.newventure.live/finalists/#teamseven"}];return i.a.createElement("div",null,i.a.createElement("div",{className:"content"},i.a.createElement(G,{projects:e})),i.a.createElement("button",{className:"scrollButton",style:{display:this.props.display},onClick:this.props.scrollToTop},"Scroll to Top"))}}]),a}(n.Component),J=a(10),W={apiKey:"AIzaSyDPAqXyzrAYsLLwiEo9DrBbDL7RsqBz",authDomain:"funkportfolio.firebaseapp.com",databaseURL:"https://funkportfolio.firebaseio.com"},Y=a(13),K=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).myFormHandler=function(e){if(e.preventDefault(),""===n.state.name)alert("Missing the following required field: name");else if(""===n.state.msg)alert("Missing the following required field: message");else if(""===n.state.visibility)alert("Missing the following required field: visibility");else{var t={name:n.state.name,desc:n.state.desc,msg:n.state.msg,visibility:n.state.visibility,email:n.state.email,date:Y.database.ServerValue.TIMESTAMP};Y.database().ref("data").push().set(t),n.setState({shouldUpdate:!0}),alert("Message successfully delivered!")}},n.myChangeHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(J.a)({},t,a))},n.state={name:"",desc:"",msg:"",visibility:"private",email:"",shouldUpdate:!1,data:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.title="Leave a Message",Y.apps.length||Y.initializeApp(W),Y.database().ref("data").on("value",(function(t){var a=t.val(),n=[],i=["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."];for(var r in a){var o=new Date(a[r].date),l=i[o.getMonth()]+" "+o.getDate()+", "+o.getFullYear()+" ("+o.getHours()+":"+o.getMinutes()+":"+o.getSeconds()+")";n.push({id:r,name:a[r].name,desc:a[r].desc,msg:a[r].msg,visibility:a[r].visibility,email:a[r].email,date:l})}e.setState({data:n})}))}},{key:"componentDidUpdate",value:function(e,t,a){var n=this;this.state.shouldUpdate!==t.shouldUpdate&&Y.database().ref("data").on("value",(function(e){var t=e.val(),a=[],i=["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."];for(var r in t){var o=new Date(t[r].date),l=i[o.getMonth()]+" "+o.getDate()+", "+o.getFullYear()+" ("+o.getHours()+":"+o.getMinutes()+":"+o.getSeconds()+")";a.push({id:r,name:t[r].name,desc:t[r].desc,msg:t[r].msg,visibility:t[r].visibility,email:t[r].email,date:l})}n.setState({data:a})}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"content"},i.a.createElement("div",{id:"form-section"},i.a.createElement("div",{className:"form animate__animated animate__fadeInLeft"},i.a.createElement("form",{onSubmit:this.myFormHandler},i.a.createElement("h2",null,"Leave Me a Message"),i.a.createElement("p",null,i.a.createElement("b",null,"*")," Enter your name:\xa0",i.a.createElement("input",{name:"name",type:"text",minLength:"6",maxLength:"19",required:!0,onChange:this.myChangeHandler})),i.a.createElement("p",null,"Add a description about yourself:",i.a.createElement("br",null),i.a.createElement("input",{name:"desc",type:"text",size:"50",maxLength:"99",onChange:this.myChangeHandler})),i.a.createElement("p",null,i.a.createElement("b",null,"*")," Leave your message:",i.a.createElement("br",null),i.a.createElement("textarea",{name:"msg",minLength:"16",maxLength:"499",required:!0,onChange:this.myChangeHandler})),i.a.createElement("p",null,i.a.createElement("b",null,"*")," Would you like your name and message to be viewable by the other guests of this site?",i.a.createElement("br",null),i.a.createElement("select",{id:"visibility",name:"visibility",required:!0,onChange:this.myChangeHandler},i.a.createElement("option",{value:"private"},"No"),i.a.createElement("option",{value:"public"},"Yes"))),i.a.createElement("p",null,"Your email:",i.a.createElement("input",{name:"email",type:"text",size:"30",onChange:this.myChangeHandler})),i.a.createElement("div",null,i.a.createElement("input",{type:"submit",id:"submit",name:"submit",value:"Submit Your Message"}),i.a.createElement("span",{className:"note"},i.a.createElement("b",null,"*"),": indicates a required field")))),i.a.createElement("div",{className:"responses animate__animated animate__fadeInRight"},i.a.createElement("h2",{id:"resp"},"Messages"),this.state.data.map((function(e){if("private"!==e.visibility)return""!==e.desc?i.a.createElement("div",{className:"response animate__animated animate__pulse",id:e.id},i.a.createElement("div",null,i.a.createElement("span",{className:"name"},e.name),i.a.createElement("span",{className:"date"},e.date)),i.a.createElement("i",null,e.desc),i.a.createElement("br",null),i.a.createElement("span",{className:"message"},e.msg),i.a.createElement("br",null)):i.a.createElement("div",{className:"response animate__animated animate__pulse",id:e.id},i.a.createElement("div",null,i.a.createElement("span",{className:"name"},e.name),i.a.createElement("span",{className:"date"},e.date)),i.a.createElement("span",{className:"message"},e.msg),i.a.createElement("br",null))}))))),i.a.createElement("button",{className:"scrollButton",style:{display:this.props.display},onClick:this.props.scrollToTop},"Scroll to Top"))}}]),a}(n.Component),V=(a(19),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={src:"",title:"",director:"",imdb:"",plot:"",shouldUpdate:!1},e}return Object(s.a)(a,[{key:"dimPoster",value:function(e){e.target.style.opacity=.7}},{key:"resetPoster",value:function(e){e.target.style.opacity=1}},{key:"componentDidUpdate",value:function(e,t,a){this.state.shouldUpdate!==t.shouldUpdate&&this.render(),this.props.movie!==e.movie&&this.render()}},{key:"render",value:function(){return i.a.createElement("div",{className:"mov-child"},i.a.createElement("img",{src:this.props.src,onMouseEnter:this.dimPoster,onMouseLeave:this.resetPoster,onClick:this.props.enlarge.bind(this,this.props.src,this.props.title,this.props.director,this.props.imdb,this.props.plot,this.props.movie),alt:this.state.title}))}}]),a}(n.Component)),Z=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.props.movieList.map((function(t){return i.a.createElement(V,{movie:t.id,src:t.src,title:t.name,director:t.director,imdb:t.imdb,plot:t.plot,enlarge:e.props.enlarge})}))}}]),a}(n.Component),Q=a(13),X=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).myChangeHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(J.a)({},t,a));var i=document.getElementById("list").value;if("all"===i){var r=Q.database().ref("movies");r.once("value").then((function(e){var t=e.val(),a=[];for(var i in t)a.push({id:i,name:t[i].name,src:t[i].src,director:t[i].director,imdb:t[i].imdb,plot:t[i].plot});n.setState({lastMov:a[a.length-1]}),a.length<9?n.setState({displayButton:"none"}):n.setState({displayButton:"block"})})),r.orderByKey().limitToFirst(9).once("value").then((function(e){var t=e.val(),a=[];for(var i in t)a.push({id:i,name:t[i].name,src:t[i].src,director:t[i].director,imdb:t[i].imdb,plot:t[i].plot});n.setState({currPoint:a[a.length-1].id}),a.pop(),n.setState({movies:a})}))}else{var o=[];Q.database().ref("relations").once("value").then((function(e){var t=e.val();for(var a in t)t[a].list===i&&o.push(t[a].mov);Q.database().ref("movies").once("value").then((function(e){var t=e.val(),a=[];for(var i in t)o.includes(i)&&a.push({id:i,name:t[i].name,src:t[i].src,director:t[i].director,imdb:t[i].imdb,plot:t[i].plot});n.setState({movies:a}),n.setState({displayButton:"none"})}))}))}},n.state={currPoint:"",lastMov:"",movies:[],lists:[],listChoice:"all",displayButton:"none",shouldUpdate:!1},n}return Object(s.a)(a,[{key:"enlarge",value:function(e,t,a,n,i,r){document.body.style.overflow="hidden";var o=document.createElement("img");o.className="movLightbox-content",o.src=e,o.id="lbContent";var l=document.createElement("div");l.className="movLightbox-info",l.id="lbInfo",l.innerHTML="<span class='title'>"+t+"</span><br/><span class='director'>"+a+"</span><br/><br/><span class='rating'>IMDb Rating: "+n+"</span><p>"+i+"</p>";var s=document.createElement("div");s.id="lbMovie",s.className="movLightbox-container";var c=document.createElement("div");c.id="lb",c.className="movLightbox";var d=document.createElement("button");d.id="delButton",d.innerHTML="Delete Movie",d.onclick=function(){window.confirm("Are you sure you want to delete "+t+"?")&&(Q.database().ref("movies").once("value").then((function(e){var t=e.val();for(var a in t)a===r&&Q.database().ref("movies/"+a).remove()})),Q.database().ref("relations").once("value").then((function(e){var t=e.val();for(var a in t)t[a].mov===r&&Q.database().ref("relations/"+a).remove()})),document.getElementById("lb").removeChild(document.getElementById("lbMovie")),document.body.removeChild(document.getElementById("lb")),document.body.style.overflow="auto")};var m=document.createElement("select");m.id="add-list",m.style.marginTop="10px",m.name="addLists";var u=Q.database().ref("lists"),p=[];u.once("value").then((function(e){var t=e.val();for(var a in t)p.push(t[a].name);Q.database().ref("relations").once("value").then((function(e){var t=e.val();for(var a in t)if(t[a].mov===r){var n=p.indexOf(t[a].list);p.splice(n,1)}var i=document.createElement("option");for(var o in i.value="",i.innerHTML="Select List",i.disabled="true",i.selected="true",i.hidden="true",m.appendChild(i),p)(i=document.createElement("option")).value=p[o],i.innerHTML=p[o],m.appendChild(i)}))}));var v=document.createElement("div"),h=document.createElement("button");h.id="list-btn",h.innerHTML="Add to List",v.appendChild(m),v.appendChild(h),h.onclick=function(){var e=document.getElementById("add-list").value;if(0===e.length)alert("No list selected.");else{var a={mov:r,list:e};Q.database().ref("relations").push().set(a),alert("Successfully added "+t+" to "+e+" list.")}},document.body.appendChild(c),document.getElementById("lb").appendChild(s),document.getElementById("lbMovie").appendChild(o),document.getElementById("lbMovie").appendChild(l),document.getElementById("lbInfo").appendChild(v),document.getElementById("lbInfo").appendChild(d),document.getElementById("lb").addEventListener("click",(function(e){"movLightbox"===e.target.className&&(document.getElementById("lb").removeChild(document.getElementById("lbMovie")),document.body.removeChild(document.getElementById("lb")),document.body.style.overflow="auto")}))}},{key:"componentWillUnmount",value:function(){this.ref.off(),this.listRef.off()}},{key:"componentDidMount",value:function(){var e=this;document.title="Great Movies",Q.apps.length||Q.initializeApp(W),this.ref=Q.database().ref("movies"),this.ref.on("value",(function(t){var a=t.val(),n=[];for(var i in a)n.push({id:i,name:a[i].name,src:a[i].src,director:a[i].director,imdb:a[i].imdb,plot:a[i].plot});e.setState({lastMov:n[n.length-1]}),n.length<9?e.setState({displayButton:"none"}):e.setState({displayButton:"block"})})),this.ref.orderByKey().limitToFirst(9).on("value",(function(t){if("all"===e.state.listChoice){var a=t.val(),n=[];for(var i in a)n.push({id:i,name:a[i].name,src:a[i].src,director:a[i].director,imdb:a[i].imdb,plot:a[i].plot});e.setState({currPoint:n[n.length-1].id}),n.pop(),e.setState({movies:n})}else{var r=[];Q.database().ref("relations").once("value").then((function(t){var a=t.val();for(var n in a)a[n].list===e.state.listChoice&&r.push(a[n].mov);Q.database().ref("movies").once("value").then((function(t){var a=t.val(),n=[];for(var i in a)r.includes(i)&&n.push({id:i,name:a[i].name,src:a[i].src,director:a[i].director,imdb:a[i].imdb,plot:a[i].plot});e.setState({movies:n}),e.setState({displayButton:"none"})}))}))}})),this.listRef=Q.database().ref("lists"),this.listRef.on("value",(function(t){var a=t.val(),n=[];for(var i in a)n.push(a[i].name);e.setState({lists:n})}))}},{key:"componentDidUpdate",value:function(e,t,a){var n=this;if(this.state.shouldUpdate!==t.shouldUpdate){var i=Q.database().ref("movies");i.on("value",(function(e){var t=e.val(),a=[];for(var i in t)a.push({id:i,name:t[i].name,src:t[i].src,director:t[i].director,imdb:t[i].imdb,plot:t[i].plot});n.setState({lastMov:a[a.length-1]}),a.length<9?n.setState({displayButton:"none"}):n.setState({displayButton:"block"})})),i.orderByKey().limitToFirst(9).on("value",(function(e){var t=e.val(),a=[];for(var i in t)a.push({id:i,name:t[i].name,src:t[i].src,director:t[i].director,imdb:t[i].imdb,plot:t[i].plot});n.setState({currPoint:a[a.length-1].id}),a.pop(),n.setState({movies:a})})),Q.database().ref("lists").on("value",(function(e){var t=e.val(),a=[];for(var i in t)a.push(t[i].name);n.setState({lists:a})}))}}},{key:"getMoreMovies",value:function(){var e=this;Q.database().ref("movies").orderByKey().startAt(this.state.currPoint).limitToFirst(9).on("value",(function(t){var a=t.val(),n=[];for(var i in a)n.push({id:i,name:a[i].name,src:a[i].src,director:a[i].director,imdb:a[i].imdb,plot:a[i].plot});n[n.length-1].id===e.state.lastMov.id&&n.length<=8?e.setState({displayButton:"none"}):(e.setState({currPoint:n[n.length-1].id}),n.pop());var r=e.state.movies;r=r.concat(n),e.setState({movies:r})}))}},{key:"searchMovies",value:function(){var e=this,t=document.getElementById("search").value.toLowerCase();Q.database().ref("movies").once("value").then((function(a){var n=a.val(),i=[];for(var r in n){n[r].name.toLowerCase().includes(t)&&i.push({id:r,name:n[r].name,src:n[r].src,director:n[r].director,imdb:n[r].imdb,plot:n[r].plot})}e.setState({displayButton:"none"}),e.setState({movies:i})}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"content"},i.a.createElement("div",{id:"top-bar"},i.a.createElement("div",{id:"list-container"},i.a.createElement("select",{name:"listChoice",id:"list",onChange:this.myChangeHandler},i.a.createElement("option",{value:"all"},"All"),this.state.lists.map((function(e){return i.a.createElement("option",{value:e},e)})))),i.a.createElement("div",{id:"search-bar"},i.a.createElement("input",{type:"text",placeholder:"Movie Title",name:"search",id:"search"}),i.a.createElement("button",{id:"search-btn",onClick:this.searchMovies.bind(this)},"Search"))),i.a.createElement("div",{className:"mov-container"},i.a.createElement(Z,{movieList:this.state.movies,enlarge:this.enlarge})),i.a.createElement("div",{id:"pag-container",style:{display:this.state.displayButton}},i.a.createElement("button",{id:"pagination",onClick:this.getMoreMovies.bind(this)},"Load More"))),i.a.createElement("button",{className:"scrollButton",style:{display:this.props.display},onClick:this.props.scrollToTop},"Scroll to Top"))}}]),a}(n.Component),$=a(15),ee=a(19),te=a(13),ae=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).myFormHandler=function(e){e.preventDefault();var t="https://www.omdbapi.com/?apikey=885fb928&i="+n.state.movId;n.getMovieName(Object($.a)(n),t)},n.inputHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(J.a)({},t,a))},n.state={movId:"",src:"",title:"",director:"",imdb:"",plot:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title="Add a Movie",te.apps.length||te.initializeApp(W)}},{key:"updateDb",value:function(e){var t={name:e.state.title,src:e.state.src,director:e.state.director,imdb:e.state.imdb,plot:e.state.plot},a=te.database().ref("movies");a.once("value").then((function(n){n.child(e.state.movId).exists()?alert("Movie has already been added."):(a.child(e.state.movId).set(t),alert("Movie successfully added!"))}))}},{key:"getMovieName",value:function(e,t){ee.get(t).then((function(t){e.setState({src:t.data.Poster,title:t.data.Title,director:t.data.Director,imdb:t.data.imdbRating,plot:t.data.Plot})})).then((function(){e.updateDb(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",{id:"add-box"},i.a.createElement("form",{onSubmit:this.myFormHandler},i.a.createElement("h2",null,"Add a Movie to the List"),i.a.createElement("p",null,"IMDb movie ID:"),i.a.createElement("input",{name:"movId",type:"text",size:"50",required:!0,onChange:this.inputHandler}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",id:"submit",name:"submit",value:"Add Movie"})))}}]),a}(n.Component),ne=a(13),ie=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).myFormHandler=function(e){e.preventDefault();var t={name:n.state.listName};ne.database().ref("lists").push().set(t),alert("List successfully created!")},n.myChangeHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(J.a)({},t,a))},n.state={listName:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title="Create a Movie List",ne.apps.length||ne.initializeApp(W)}},{key:"render",value:function(){return i.a.createElement("div",{id:"add-box"},i.a.createElement("form",{onSubmit:this.myFormHandler},i.a.createElement("h2",null,"Create Movie List"),i.a.createElement("p",null,"Name of your movie list:"),i.a.createElement("input",{name:"listName",type:"text",size:"50",required:!0,onChange:this.myChangeHandler}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",id:"submit",name:"submit",value:"Create List"})))}}]),a}(n.Component),re=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).prepScroll=function(){var t=window.innerHeight;window.pageYOffset/t*100>25?e.setState({display:"block"}):e.setState({display:"none"})},e.scrollToTop=function(){window.scrollTo({top:0,behavior:"smooth"})},e.displayContent=function(){var t=e.props.activeTab;return 1===t?i.a.createElement(h,{display:e.state.display,scrollToTop:e.scrollToTop}):2===t?i.a.createElement(H,{display:e.state.display,scrollToTop:e.scrollToTop}):3===t?i.a.createElement(P,{display:e.state.display,scrollToTop:e.scrollToTop}):4===t?i.a.createElement(z,{display:e.state.display,scrollToTop:e.scrollToTop}):5===t?i.a.createElement(K,{display:e.state.display,scrollToTop:e.scrollToTop}):6===t?i.a.createElement(X,{display:e.state.display,scrollToTop:e.scrollToTop}):7===t?i.a.createElement(ae,{display:e.state.display,scrollToTop:e.scrollToTop}):i.a.createElement(ie,{display:e.state.display,scrollToTop:e.scrollToTop})},e.state={display:"none"},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.prepScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.prepScroll)}},{key:"render",value:function(){return this.displayContent()}}]),a}(n.Component),oe=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={activeTab:1},e.changeTab=function(t){e.setState({activeTab:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"body"},i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,"Alex Funk")," ",i.a.createElement("h2",null,"International Man of Mystery")),i.a.createElement("div",{className:"nav-bar"},i.a.createElement(u,{tabs:[{id:1,title:"Home"},{id:2,title:"Watercolor Paintings by Me"},{id:3,title:"Great YouTube videos"},{id:4,title:"Genesis"},{id:6,title:"Movie List"},{id:7,title:"Add Movie"},{id:8,title:"Create List"}],changeTab:this.changeTab,activeTab:this.state.activeTab})),i.a.createElement("div",{className:"main-body"},i.a.createElement(re,{activeTab:this.state.activeTab})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.496bd4af.chunk.js.map
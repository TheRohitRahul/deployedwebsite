(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},226:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),o=a.n(r),i=(a(100),a(38)),c=a(39),s=a(44),h=a(40),m=a(45),u=a(27),p=a(90),d=a.n(p),g=a(91),E=a.n(g),b=a(21),f=a.n(b),y=a(92),k=a.n(y),w=a(57),v=a.n(w),j=a(88),x=a.n(j),O=a(31),C=a(93),A=a(41),M=a.n(A),N=a(42),R=a.n(N),I=a(43),S=a.n(I),_=(a(101),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={anchorEl:null,mobileMoreAnchorEl:null},a.handleProfileMenuOpen=function(e){a.setState({anchorEl:e.currentTarget})},a.handleMenuClose=function(){a.setState({anchorEl:null}),a.handleMobileMenuClose()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.anchorEl,a=e.mobileMoreAnchorEl,n=this.props.classes,r=Boolean(t),o=(Boolean(a),l.a.createElement(x.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMenuClose},l.a.createElement(v.a,{onClick:this.handleMenuClose},"Profile"),l.a.createElement(v.a,{onClick:this.handleMenuClose},"My account")));return l.a.createElement("div",{className:n.root},l.a.createElement(d.a,{position:"static"},l.a.createElement(E.a,null,l.a.createElement(k.a,{className:n.title,variant:"h6",color:"inherit",noWrap:!0},"Rohit Rahul"),l.a.createElement("div",{className:n.grow}),l.a.createElement("div",{className:n.sectionDesktop},l.a.createElement(f.a,{color:"inherit",style:{textDecoration:"None"}},l.a.createElement("a",{className:"linkclass",href:"https://github.com/rohitrahul",target:"_blank"},l.a.createElement(M.a,null))),l.a.createElement(f.a,{color:"inherit"},l.a.createElement("a",{className:"linkclass",href:"https://500px.com/rohitrahul",target:"_blank"},l.a.createElement(R.a,null))),l.a.createElement(f.a,{color:"inherit"},l.a.createElement("a",{className:"linkclass",href:"https://scholar.google.co.in/citations?user=DqF_IpoAAAAJ",target:"_blank"},l.a.createElement(S.a,null)))))),o)}}]),t}(l.a.Component)),L=Object(C.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(u.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(O.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(u.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(u.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(u.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(_),B=(a(226),{largeIcon:{width:60,height:60}}),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",{style:{marginTop:"30vh",fontSize:"72px",display:"flex",justifyContent:"center"}},"Rohit Rahul")),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("div",{style:{display:"block"}},l.a.createElement(f.a,{color:"inherit",iconStyle:{width:"60px",height:"60px"}},l.a.createElement("a",{className:"linkclass",href:"https://github.com/rohitrahul",target:"_blank"},l.a.createElement(M.a,null))),l.a.createElement("h6",{style:{marginTop:"5px",marginLeft:"5px"}},"Github")),l.a.createElement("div",{style:{display:"block"}},l.a.createElement(f.a,{color:"inherit",iconStyle:B.largeIcon},l.a.createElement("a",{className:"linkclass",href:"https://500px.com/rohitrahul",target:"_blank"},l.a.createElement(R.a,null))),l.a.createElement("h6",{style:{marginTop:"5px",marginLeft:"5px"}},"500px")),l.a.createElement("div",{style:{display:"block"}},l.a.createElement(f.a,{color:"inherit",iconStyle:B.largeIcon},l.a.createElement("a",{className:"linkclass",href:"https://scholar.google.co.in/citations?user=DqF_IpoAAAAJ",target:"_blank"},l.a.createElement(S.a,null))),l.a.createElement("h6",{style:{marginTop:"5px",marginLeft:"5px"}},"Google Scholar"))))}}]),t}(n.Component),D=a(22),F=function(){return l.a.createElement(D.c,null,l.a.createElement(D.a,{exact:!0,path:"/",component:T}),l.a.createElement(D.a,{path:"*",component:T}))};var J=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,null),l.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(56);o.a.render(l.a.createElement(z.a,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e,t,a){e.exports=a(232)}},[[95,1,2]]]);
//# sourceMappingURL=main.a0eca663.chunk.js.map
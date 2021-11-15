(this["webpackJsonpspace-tourism-website"]=this["webpackJsonpspace-tourism-website"]||[]).push([[0],{11:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(28),i=c.n(a),l=(c(37),c(11),c(10)),r=c(4),o=c(7),d=(c(38),c(2)),j=c.n(d),b=c(0),h=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),i=Object(o.a)(a,2),r=i[0],d=i[1],h=Object(s.useState)(!1),u=Object(o.a)(h,2),m=u[0],x=u[1],O=function(){return n(!1)},f=function(){j()(window).width()<=600?(d(!1),x(!1)):j()(window).width()<=1025?(d(!0),x(!1)):(d(!1),x(!0))};return Object(s.useEffect)((function(){f()}),[]),window.addEventListener("resize",f),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsxs)("div",{className:"navbar-container flex",children:[Object(b.jsx)(l.b,{className:"nav-logo",to:"/",onClick:O,children:Object(b.jsx)("img",{src:"./assets/shared/logo.svg",alt:"nav-logo"})}),Object(b.jsx)("div",{className:"menu-icon",onClick:function(){return n(!c)},children:Object(b.jsxs)("div",{className:c?"menu-open":"menu-close",children:[Object(b.jsx)("img",{className:"close-icon",src:"./assets/shared/icon-close.svg",alt:"close-icon"}),Object(b.jsx)("img",{className:"burger-icon",src:"./assets/shared/icon-hamburger.svg",alt:"burger-icon"})]})}),m&&Object(b.jsx)("div",{className:"nav-line-deco"}),Object(b.jsxs)("ul",{className:c?"nav-menu active bg-nav":m||r?"nav-menu flex bg-nav underline-indicators":"nav-menu bg-nav",children:[Object(b.jsx)("li",{className:"nav-item flex active",children:Object(b.jsx)(l.b,{to:"/",className:"nav-links",onClick:O,children:Object(b.jsxs)("p",{className:"nav-text",children:[Object(b.jsx)("span",{children:"00"})," Home"]})})}),Object(b.jsx)("li",{className:"nav-item flex",children:Object(b.jsx)(l.b,{to:"/destination",className:"nav-links",onClick:O,children:Object(b.jsxs)("p",{className:"nav-text",children:[Object(b.jsx)("span",{children:"01"})," Destination"]})})}),Object(b.jsx)("li",{className:"nav-item flex",children:Object(b.jsx)(l.b,{to:"/crew",className:"nav-links",onClick:O,children:Object(b.jsxs)("p",{className:"nav-text",children:[Object(b.jsx)("span",{children:"02"}),"Crew"]})})}),Object(b.jsx)("li",{className:"nav-item flex",children:Object(b.jsx)(l.b,{to:"/technology",className:"nav-links",onClick:O,children:Object(b.jsxs)("p",{className:"nav-text",children:[Object(b.jsx)("span",{children:"03"}),"Technology"]})})})]})]})})})},u=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(h,{})})},m=(c(48),c(49),["btn--primary","btn--large"]),x=function(e){var t=e.text,c=e.buttonStyle,s=e.resourceClass,n=e.onClick,a=e.path,i=m.includes(c)?c:m[0];return Object(b.jsx)(l.b,{to:a,className:"btn",children:Object(b.jsx)("button",{className:"".concat(i," ").concat(s),onClick:n,children:t})})},O=c(9),f=function(){return Object(s.useEffect)((function(){j()("body").removeClass(),j()("body").addClass("home-page"),j()(".nav-item").removeClass("active"),j()(".nav-item").eq(0).addClass("active")}),[]),Object(b.jsxs)(O.b,{children:[Object(b.jsx)(O.a,{children:Object(b.jsx)("title",{children:"Space Toursim | Home"})}),Object(b.jsxs)("div",{className:"grid-container grid-container--home",children:[Object(b.jsxs)("div",{className:"home-intro-container flow",children:[Object(b.jsxs)("h1",{className:"text-accent fs-500 ff-sans-cond uppercase letter-spacing-1",children:["So, you want to travel to",Object(b.jsx)("span",{className:"fs-900 ff-serif text-white d-block",children:"Space"})]}),Object(b.jsx)("p",{children:"Let\u2019s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we\u2019ll give you a truly out of this world experience!"})]}),Object(b.jsx)(x,{path:"/destination",text:"Explore",buttonStyle:"btn--large",resourceClass:"uppercase ff-serif fs-600 text-dark bg-white"})]})]})},v=(c(50),["tab-list-destination"]),p=function(e){var t=e.tabListStyle,c=e.updateTab,n=v.includes(t)?t:"";return Object(s.useEffect)((function(){!function(){for(var e=0;e<j()(".tab").length;e++)j()(".tab:eq("+e+")").on("click",(function(){j()(".tab").removeClass("active"),j()(this).addClass("active"),c(j()(this).index())}))}()})),Object(b.jsxs)("ul",{className:"tab-list underline-indicators ".concat(n),children:[Object(b.jsx)("li",{className:"tab active",children:"Moon"}),Object(b.jsx)("li",{className:"tab",children:"Mars"}),Object(b.jsx)("li",{className:"tab",children:"Europa"}),Object(b.jsx)("li",{className:"tab",children:"Titan"})]})},g=c(12),N=c.n(g),w=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(0),i=Object(o.a)(a,2),l=i[0],r=i[1];return Object(s.useEffect)((function(){j()("body").removeClass(),j()("body").addClass("destination-page"),j()(".nav-item").removeClass("active"),j()(".nav-item").eq(1).addClass("active"),N.a.get("data.json").then((function(e){n(e.data)}))}),[]),c?Object(b.jsxs)(O.b,{children:[Object(b.jsx)(O.a,{children:Object(b.jsx)("title",{children:"Space Tourism | Destinations"})}),Object(b.jsxs)("div",{className:"grid-container grid-container--destination",children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{className:"numbered-title",children:[Object(b.jsx)("span",{children:"01"}),"Pick your destination"]}),Object(b.jsx)("img",{className:"img-planet",src:c.destinations[l].images.png,alt:"moon"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{tabListStyle:"tab-list-destination",updateTab:function(e){r(e)}}),Object(b.jsxs)("div",{className:"dest-intro-container",children:[Object(b.jsx)("h1",{className:"fs-800 ff-serif uppercase text-white",children:c.destinations[l].name}),Object(b.jsx)("p",{children:c.destinations[l].description})]}),Object(b.jsxs)("div",{className:"dest-info-container",children:[Object(b.jsxs)("div",{className:"dest-info-item",children:[Object(b.jsx)("h5",{className:"ff-sans-cond fs-300 uppercase letter-spacing-3",children:"Avg. distance"}),Object(b.jsx)("span",{className:"ff-serif uppercase text-white",children:c.destinations[l].distance})]}),Object(b.jsxs)("div",{className:"dest-info-item",children:[Object(b.jsx)("h5",{className:"ff-sans-cond fs-300 uppercase letter-spacing-3",children:"Est. travel time"}),Object(b.jsx)("span",{className:"ff-serif uppercase text-white",children:c.destinations[l].travel})]})]})]})]})]}):null},y=(c(69),["dot-indicator--crew"]),C=function(e){var t=e.dotIndicatorStyle,c=e.updateTab,n=y.includes(t)?t:"";return Object(s.useEffect)((function(){!function(){for(var e=0;e<j()(".dot-indicator-btn").length;e++)j()(".dot-indicator-btn:eq("+e+")").on("click",(function(){j()(".dot-indicator-btn").removeClass("active"),j()(this).addClass("active"),c(j()(this).index())}))}()})),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"dot-indicators flex ".concat(n),children:[Object(b.jsx)("button",{className:"dot-indicator-btn active",children:Object(b.jsx)("span",{className:"sr-only",children:"Slide title"})}),Object(b.jsx)("button",{className:"dot-indicator-btn",children:Object(b.jsx)("span",{className:"sr-only",children:"Slide title"})}),Object(b.jsx)("button",{className:"dot-indicator-btn",children:Object(b.jsx)("span",{className:"sr-only",children:"Slide title"})}),Object(b.jsx)("button",{className:"dot-indicator-btn",children:Object(b.jsx)("span",{className:"sr-only",children:"Slide title"})})]})})},S=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(0),i=Object(o.a)(a,2),l=i[0],r=i[1];return Object(s.useEffect)((function(){j()("body").removeClass(),j()("body").addClass("crew-page"),j()(".nav-item").removeClass("active"),j()(".nav-item").eq(2).addClass("active"),N.a.get("data.json").then((function(e){n(e.data)}))}),[]),c?Object(b.jsxs)(O.b,{children:[Object(b.jsx)(O.a,{children:Object(b.jsx)("title",{children:"Space Tourism | Crew"})}),Object(b.jsxs)("div",{className:"grid-container grid-container--crew",children:[Object(b.jsxs)("h5",{className:"numbered-title",children:[Object(b.jsx)("span",{children:"02"}),"Meet your crew"]}),Object(b.jsxs)("div",{className:"crew-intro-container flow",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"ff-serif fs-600 uppercase text-semi-trans",children:c.crew[l].role}),Object(b.jsx)("h1",{className:"ff-serif fs-subtitle uppercase text-white",children:c.crew[l].name})]}),Object(b.jsx)("p",{children:c.crew[l].bio})]}),Object(b.jsx)(C,{dotIndicatorStyle:"dot-indicator--crew",updateTab:function(e){r(e)}}),Object(b.jsx)("div",{className:"img-crew",children:Object(b.jsx)("img",{src:c.crew[l].images.png,alt:"Crew"})})]})]}):null},k=(c(70),["numbered-dot-indicator--tech"]),T=function(e){var t=e.indicatorStyle,c=e.updateContent,n=k.includes(t)?t:"";return Object(s.useEffect)((function(){!function(){for(var e=0;e<j()(".numbered-dot-indicator-btn").length;e++)j()(".numbered-dot-indicator-btn:eq("+e+")").on("click",(function(){j()(".numbered-dot-indicator-btn").removeClass("active"),j()(this).addClass("active"),c(j()(this).index())}))}()})),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"numbered-dot-indicator flex ".concat(n),children:[Object(b.jsx)("button",{className:"numbered-dot-indicator-btn active",children:Object(b.jsx)("span",{children:"1"})}),Object(b.jsx)("button",{className:"numbered-dot-indicator-btn",children:Object(b.jsx)("span",{children:"2"})}),Object(b.jsx)("button",{className:"numbered-dot-indicator-btn",children:Object(b.jsx)("span",{children:"3"})})]})})},E=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(0),i=Object(o.a)(a,2),l=i[0],r=i[1];return Object(s.useEffect)((function(){j()("body").removeClass(),j()("body").addClass("tech-page"),j()(".nav-item").removeClass("active"),j()(".nav-item").eq(3).addClass("active"),N.a.get("data.json").then((function(e){n(e.data)}))}),[]),c?Object(b.jsxs)(O.b,{children:[Object(b.jsx)(O.a,{children:Object(b.jsx)("title",{children:"Space Tourism | Technology"})}),Object(b.jsxs)("div",{className:"grid-container grid-container--technology",children:[Object(b.jsxs)("h5",{className:"numbered-title",children:[Object(b.jsx)("span",{children:"03"}),"Space launch 101"]}),Object(b.jsx)(T,{indicatorStyle:"numbered-dot-indicator--tech",updateContent:function(e){r(e)}}),Object(b.jsxs)("div",{className:"tech-intro-container flow",children:[Object(b.jsxs)("h1",{className:"ff-serif fs-subtitle uppercase text-white",children:[Object(b.jsx)("span",{className:"ff-sans-cond fs-300 letter-spacing-3 text-light d-block",children:"The terminology\u2026"}),c.technology[l].name]}),Object(b.jsx)("p",{children:c.technology[l].description})]}),Object(b.jsxs)("div",{className:"tech-img-container",children:[Object(b.jsx)("img",{className:"portrait",src:c.technology[l].images.portrait,alt:"technology-portrait"}),Object(b.jsx)("img",{className:"landscape",src:c.technology[l].images.landscape,alt:"technology-landscape"})]})]})]}):null};var F=function(){return Object(b.jsxs)(l.a,{basename:"/space-tourism-website",children:[Object(b.jsx)(u,{}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/",exact:!0,component:f}),Object(b.jsx)(r.a,{path:"/destination",exact:!0,component:w}),Object(b.jsx)(r.a,{path:"/crew",exact:!0,component:S}),Object(b.jsx)(r.a,{path:"/technology",exact:!0,component:E})]})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),q()}},[[71,1,2]]]);
//# sourceMappingURL=main.8efca54e.chunk.js.map
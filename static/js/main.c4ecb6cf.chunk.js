(this["webpackJsonpweather-dashboard-react"]=this["webpackJsonpweather-dashboard-react"]||[]).push([[0],{18:function(e,a,t){e.exports=t(50)},23:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),l=t.n(c),i=(t(23),t(17)),o=t(3),m=t(5),u=t.n(m);t(25);var s=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};t(26);function d(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function h(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}t(27);var p=function(){return r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h1",{id:"title"},"Weather Dashboard"))};t(28);var f=function(e){return r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"searchInput"},r.a.createElement("h5",null,"Search for a City:")),r.a.createElement(h,null,r.a.createElement("div",{className:"col-9 col-sm-9",id:"searchBar"},r.a.createElement("input",{type:"text",className:"form-control",name:"searchInput",id:"searchInput",onChange:e.handleInputChange,value:e.searchInput})),r.a.createElement("div",{className:"col-3 col-sm-3",id:"searchButton"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",id:"searchIcon",onClick:e.handleFormSubmit},r.a.createElement("i",{className:"fas fa-search"})))))};t(29);var E=function(e){var a=e.children;return r.a.createElement("div",{className:"card"},a)};t(30);var v=function(e){return r.a.createElement(E,null,r.a.createElement("div",{className:"card-body searchHistoryCard"},r.a.createElement("button",{className:"btn btn-link city",value:e.searchInput,onClick:e.handleClick},e.searchInput)))};t(31);var b=function(e){return r.a.createElement(E,null,r.a.createElement("div",{className:"card-body currentWeatherCard"},r.a.createElement("h2",null,e.cityName," (",e.currentDate,") ",r.a.createElement("img",{src:e.iconURL,alt:"currentWeatherIcon"})),r.a.createElement("p",{className:"lead"},"Temperature: ",e.temp," \xb0F"),r.a.createElement("p",{className:"lead"},"Humidity: ",e.humidity,"%"),r.a.createElement("p",{className:"lead"},"Wind Speed: ",e.windSpeed," MPH"),r.a.createElement("p",{className:"lead"},"UV Index: ",r.a.createElement("span",{style:e.uviStyle},e.uvi))))};t(32);var g=function(e){return r.a.createElement("div",{className:"col d-flex align-items-stretch"},r.a.createElement(E,null,r.a.createElement("div",{className:"card-body forecastCard"},r.a.createElement("h5",null,e.date),r.a.createElement("img",{src:e.iconURL,alt:"fiveDayWeatherIcon"}),r.a.createElement("p",{className:"lead"},"Temp: ",e.temp," \xb0F"),r.a.createElement("p",{className:"lead"},"Humidity: ",e.humidity,"%"))))},y=t(6),N=t.n(y),w="572d14321ae6789e9c768be6fb36520d",k=function(e){return N()("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=imperial&apikey="+w)},S=function(e){return N.a.get("https://api.openweathermap.org/data/2.5/forecast?q="+e+"&units=imperial&apikey="+w)},I=function(e,a){return N.a.get("https://api.openweathermap.org/data/2.5/onecall?lat="+e+"&lon="+a+"&apikey="+w)};var C=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),m=Object(o.a)(l,2),E=m[0],y=m[1],N=Object(n.useState)(),w=Object(o.a)(N,2),C=w[0],O=w[1],j=Object(n.useState)(),x=Object(o.a)(j,2),D=x[0],Y=x[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cities"));null!==e&&y(e)}),[]);var W=function(e){F(e.target.value)},F=function(e){k(e).then((function(e){var a=u()().format("MM/DD/YYYY"),t=e.data.name,n=e.data.main.temp,c=e.data.main.humidity,l=e.data.wind.speed,i="https://openweathermap.org/img/w/"+e.data.weather[0].icon+".png",o=e.data.coord.lat,m=e.data.coord.lon;I(o,m).then((function(e){var o=e.data.current.uvi,m={borderRadius:"0.25rem",fontSize:"1rem",padding:"5px"};o<3?m.backgroundColor="#99cc00":o>=3&&o<6?m.backgroundColor="#ffff01":o>=6&&o<8?m.backgroundColor="#ff9928":o>=8&&o<11?m.backgroundColor="#ff0100":o>=11&&(m.backgroundColor="#be00be"),O(r.a.createElement(b,{cityName:t,currentDate:a,iconURL:i,temp:n,humidity:c,windSpeed:l,uvi:o,uviStyle:m}))}))})),S(e).then((function(e){var a=u()().format("HH"),t="00:00:00";a>=0&&a<3?t="00:00:00":a>=3&&a<6?t="03:00:00":a>=6&&a<9?t="06:00:00":a>=9&&a<12?t="09:00:00":a>=12&&a<15?t="12:00:00":a>=15&&a<18?t="15:00:00":a>=18&&a<21?t="18:00:00":a>=21&&a<24&&(t="21:00:00");var n=e.data.list.filter((function(e){return e.dt_txt.includes(t)}));Y(r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",{style:{marginTop:"20px"}},"5-Day Forecast"),r.a.createElement("div",{className:"row",style:{marginLeft:"-15px",marginRight:"-15px"}},n.map((function(e){return r.a.createElement(g,{key:e.dt,date:u()(e.dt_txt).format("MM/DD/YYYY"),iconURL:"https://openweathermap.org/img/w/"+e.weather[0].icon+".png",temp:e.main.temp,humidity:e.main.humidity})})))))}))};return r.a.createElement(s,null,r.a.createElement(p,null),r.a.createElement(h,null,r.a.createElement("div",{className:"sidenav col-sm-3"},r.a.createElement(f,{handleInputChange:function(e){var a=e.target.value;c(a)},handleFormSubmit:function(e){e.preventDefault(),E.unshift(t);var a=new Set(E),n=Object(i.a)(a);localStorage.setItem("cities",JSON.stringify(E)),c(""),y(n),F(t)},searchInput:t}),E.map((function(e){return r.a.createElement(v,{key:e,searchInput:e,handleClick:W})}))),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement(d,null,r.a.createElement(h,null,r.a.createElement("div",{className:"col-12"},C),D)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.c4ecb6cf.chunk.js.map
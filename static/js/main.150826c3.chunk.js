(window.webpackJsonppsp=window.webpackJsonppsp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),o=a.n(l),c=(a(15),a(7)),m=a(4),i=a(5),u=a(8),s=a(6),d=a(9),p=a(1),b=a.n(p),h=(a(17),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={item:{number:0},items:[]},a.handleAddNumber=function(e){e.preventDefault();var t={number:e.target.number.value};a.setState((function(e){return{items:[].concat(Object(c.a)(e.items),[t])}})),e.target.reset()},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.items,t=e.map((function(e){return e.number}));return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("h2",{className:"App-header__tittle"},"Calculadora estad\xedstica")),r.a.createElement("div",{className:"App-body"},r.a.createElement("form",{onSubmit:this.handleAddNumber,className:"App-body__form"},r.a.createElement("input",{required:!0,type:"number",name:"number",id:"number",placeholder:"Escriba un numero...",className:"App-body__form-input"}),r.a.createElement("button",{type:"submit",className:"App-body__form-button"},"Agregar")),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.number},"N\xfamero Ingresado: ",e.number)})))),r.a.createElement("div",null,r.a.createElement("h3",null,"Resultados: "),t.length>=1&&r.a.createElement("ul",null,r.a.createElement("li",null,"Media: ",b.a.median(t)," "),r.a.createElement("li",null,"Mediana: ",b.a.mean(t)," "),r.a.createElement("li",null,"Moda: ",b.a.mode(t)," "),r.a.createElement("li",null,"Desviaci\xf3n estandar: ",b.a.stdev(t)," "))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.150826c3.chunk.js.map
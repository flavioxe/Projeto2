(this.webpackJsonpapplications=this.webpackJsonpapplications||[]).push([[0],{19:function(e,c,t){},39:function(e,c,t){"use strict";t.r(c);var a=t(2),s=t(13),n=t.n(s),i=(t(19),t(3)),d=t(14),o=t.n(d),l=t(0);function r(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)(!1),d=Object(i.a)(n,2),r=d[0],j=d[1],b=Object(a.useState)({}),u=Object(i.a)(b,2),m=u[0],O=u[1],h=Object(a.useState)(""),v=Object(i.a)(h,2),p=(v[0],v[1]),x=Object(a.useState)("none"),f=Object(i.a)(x,2),N=f[0],y=f[1],g=Object(a.useState)(""),k=Object(i.a)(g,2),M=k[0],_=k[1],S=Object(a.useState)(""),C=Object(i.a)(S,2),P=C[0],w=C[1],U=[{id:0,card_number:"1111111111111111",cvv:789,expiry_date:"01/18"},{id:1,card_number:"4111111111111234",cvv:123,expiry_date:"01/20"}];Object(a.useEffect)((function(){o.a.get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce").then((function(e){var c=e.data;s(c)}))}),[]);return Object(l.jsxs)(l.Fragment,{children:["  ",t.map((function(e){return Object(l.jsxs)("div",{className:"boxUser",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"iconUser",src:e.img,alt:"Imagem dousu\xe1rio"})}),Object(l.jsxs)("div",{className:"infoUser",children:[Object(l.jsxs)("div",{children:["Nome: ",e.name]}),Object(l.jsxs)("div",{children:["ID: ",e.id," - Username: ",e.username]})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"buttonUser",onClick:function(){return function(e){j("block"),O(e)}(e)},children:"Pagar"})})]})})),Object(l.jsx)("div",{className:"backdrop",onClick:function(){return j(!1)},style:{display:r?"block":"none"}}),Object(l.jsxs)("div",{className:"modal",style:{display:r?"block":"none"},children:[Object(l.jsxs)("div",{className:"headerModal",children:[Object(l.jsx)("span",{className:"titleModal",children:" Pagamento para  "}),Object(l.jsx)("span",{className:"userNameModal",children:m.name})]}),Object(l.jsxs)("div",{className:"bodyModal",children:[Object(l.jsx)("input",{className:"inputModal",type:"text",placeholder:"R$ 0,00"}),Object(l.jsx)("select",{className:"selectModal",children:U.map((function(e){return Object(l.jsxs)("option",{value:e.id,children:["Cart\xe3o com final ",e.card_number.substr(-4)]},e.id)}))}),Object(l.jsx)("div",{className:"buttonsDiv",children:Object(l.jsx)("button",{className:"buttonModal",onClick:function(e){e.preventDefault(e);var c={card_number:U.card_number,cvv:U.cvv,expiry_date:U.expiry_date,destination_user_id:m.id,value:P};fetch("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",{method:"post",body:c}).then((function(e){return e.json()})).then((function(e){console.log(e),j("none"),y("block"),"Aprovada"===e.status?_("Pagamento Conclu\xeddo Com Sucesso!"):_("Pagamento N\xc3O foi Conclu\xeddo com Sucesso!")}))},children:"Pagar"})})]})]}),Object(l.jsxs)("div",{className:"modalTransaction",style:{display:N},children:[Object(l.jsxs)("div",{className:"headerModalPayment",children:[Object(l.jsx)("span",{className:"titleModal",children:"Recibo de Pagamento"}),Object(l.jsx)("span",{className:"closeModal",onClick:function(){return w(""),p(""),void y("none")},children:" X "})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{className:"bodyModalPayment",children:[" ",M]})})]})]})}var j=document.getElementById("root");n.a.render(Object(l.jsx)("div",{children:Object(l.jsx)(r,{})}),j)}},[[39,1,2]]]);
//# sourceMappingURL=main.97437fae.chunk.js.map
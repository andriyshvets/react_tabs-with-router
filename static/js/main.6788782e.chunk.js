(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{13:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(8),a=n.n(c),s=n(5),i=n(1),b=(n(13),n(2)),r=function(){return Object(b.jsx)("h1",{className:"title",children:"Home Page"})},j=n(4),l=n(0),o=function(t){var e=t.content;return Object(b.jsx)("p",{className:"tabs__content",children:e})},u=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],d=function(){var t=Object(i.g)().tabId,e=Object(l.useState)(null),n=Object(j.a)(e,2),c=n[0],a=n[1],r=Object(l.useState)(!1),d=Object(j.a)(r,2),O=d[0],m=d[1];return Object(l.useEffect)((function(){var e=u.find((function(e){return e.id===t}))||null;return a(e),m(!!e)}),[t]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"tabs is-centered is-boxed",children:Object(b.jsx)("ul",{className:"tabs__list",children:u.map((function(t){return Object(b.jsx)("li",{className:"tabs__item",children:Object(b.jsx)(s.b,{to:"/tabs/".concat(t.id),className:function(t){return t.isActive?"tabs__link tabs__link--active":"tabs__link"},children:t.title})},t.id)}))})}),!O&&Object(b.jsx)("p",{children:"Please select a tab"}),c&&Object(b.jsx)(o,{content:c.content})]})},O=(n(15),function(){return Object(b.jsx)("h1",{className:"title",children:"Page not found"})}),m=function(){return Object(b.jsx)("div",{className:"navbar has-shadow",children:Object(b.jsxs)("nav",{className:"navbar-brand",children:[Object(b.jsx)(s.b,{to:"/",className:function(t){return t.isActive?"navbar-item--active navbar-item":"navbar-item"},children:"Home"}),Object(b.jsx)(s.b,{to:"/tabs",className:function(t){return t.isActive?"navbar-item--active navbar-item":"navbar-item"},children:"Tabs"})]})})},h=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/",element:Object(b.jsx)(r,{})}),Object(b.jsx)(i.a,{path:"/tabs",element:Object(b.jsx)(d,{}),children:Object(b.jsx)(i.a,{path:":tabId"})}),Object(b.jsx)(i.a,{path:"*",element:Object(b.jsx)(O,{})})]})]})};a.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6788782e.chunk.js.map
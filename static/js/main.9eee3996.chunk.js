(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n,r=c(9),s=c.n(r),a=c(5),o=c(16),i=c(17),u=c(4),l=c(15);!function(e){e.SET_TODOS="SET_TODOS",e.SET_USER="SET_USER",e.DELETE_USER="DELETE_USER"}(n||(n={}));var d=function(e){return{type:n.SET_USER,payload:e}},j={todos:[],user:null},b=Object(l.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_TODOS:return Object(u.a)(Object(u.a)({},e),{},{todos:Object(i.a)(t.payload)});case n.SET_USER:return Object(u.a)(Object(u.a)({},e),{},{user:t.payload});case n.DELETE_USER:return Object(u.a)(Object(u.a)({},e),{},{user:null});default:return e}})),O=(c(25),c(10)),h=c(3),p=c(6),f=c.n(p),_=c(0),m=c(13),x=c.n(m),v=function(e){return e.user},E="https://mate.academy/students-api/todos",T=(c(27),c(1)),y=function(){var e=Object(a.b)(),t=Object(_.useState)(""),c=Object(h.a)(t,2),r=c[0],s=c[1],o=Object(_.useState)(""),i=Object(h.a)(o,2),u=i[0],l=i[1],j=Object(a.c)(v),b=function(){var t=Object(O.a)(f.a.mark((function t(){var c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(E).then((function(e){if(!e.ok)throw new Error("Todo error");return e.json()}));case 2:c=t.sent,e((r=c,{type:n.SET_TODOS,payload:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(){return t.apply(this,arguments)}}();Object(_.useEffect)((function(){b()}),[]);var p,m=function(){var t=Object(O.a)(f.a.mark((function t(c){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r=c,fetch("".concat("https://mate.academy/students-api/users","/").concat(r)).then((function(e){if(!e.ok)throw new Error("User error");return e.json()}));case 2:n=t.sent,e(d(n));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}();var y=function(e){switch(u){case"completed":return e.filter((function(e){return e.completed}));case"active":return e.filter((function(e){return!e.completed}));default:return e}}(Object(a.c)((p=r,function(e){return e.todos.filter((function(e){return e.title.toLocaleLowerCase().includes(p.toLocaleLowerCase())}))})));return Object(T.jsxs)("div",{className:"TodoList",children:[Object(T.jsx)("h2",{children:"Todos:"}),Object(T.jsxs)("div",{className:"TodoList__list-container",children:[Object(T.jsx)("h4",{children:"Filter by title"}),Object(T.jsx)("input",{"data-cy":"filterByTitle",type:"text",value:r,className:"TodoList__input",placeholder:"Enter a title",onChange:function(e){s(e.target.value)}}),Object(T.jsx)("h4",{children:" Status:"}),Object(T.jsxs)("select",{className:"TodoList__input TodoList__input ",onChange:function(e){l(e.target.value)},children:[Object(T.jsx)("option",{value:"all",children:" All "}),Object(T.jsx)("option",{value:"active",children:"Active "}),Object(T.jsx)("option",{value:"completed",children:"Completed "})]}),Object(T.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:y.map((function(e){return Object(T.jsxs)("li",{className:x()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(T.jsxs)("label",{children:[Object(T.jsx)("input",{type:"checkbox",readOnly:!0,checked:e.completed}),Object(T.jsx)("p",{children:e.title})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("button",{"data-cy":"userButton",className:x()("TodoList__user-button","button",{"TodoList__user-button--selected":(null===j||void 0===j?void 0:j.id)===e.userId}),type:"button",onClick:function(){m(e.userId)},children:"User# ".concat(e.userId)}),Object(T.jsx)("button",{className:"button",type:"button",onClick:Object(O.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c=e.id,fetch("".concat(E,"/").concat(c),{method:"DELETE"});case 2:b();case 3:case"end":return t.stop()}var c}),t)}))),children:"Delete"})]})]},e.id)}))})]})]})},S=(c(29),function(){var e=Object(a.c)(v),t=Object(a.b)();return Object(T.jsx)(T.Fragment,{children:e?Object(T.jsxs)("div",{className:"CurrentUser",children:[Object(T.jsx)("h2",{className:"CurrentUser__title",children:Object(T.jsx)("span",{children:"Selected User: ".concat(e.id)})}),Object(T.jsx)("button",{type:"button",className:"button is-danger",onClick:function(){t(d(null))},children:"Clear"}),Object(T.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:e.name}),Object(T.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(T.jsx)("p",{className:"CurrentUser__phone",children:e.phone})]}):"No user selected"})}),N=function(){return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)("div",{className:"App__sidebar",children:Object(T.jsx)(y,{})}),Object(T.jsx)("div",{className:"App__content",children:Object(T.jsx)("div",{className:"App__content-container",children:Object(T.jsx)(S,{})})})]})},L=function(){return Object(T.jsx)(a.a,{store:b,children:Object(T.jsx)(o.a,{children:Object(T.jsx)(N,{})})})};s.a.render(Object(T.jsx)(L,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.9eee3996.chunk.js.map
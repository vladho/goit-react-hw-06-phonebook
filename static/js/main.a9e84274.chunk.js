(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={name:"Contacts_name__KJTbW",btn:"Contacts_btn__2L9fh"}},16:function(t,e,n){t.exports={inpt:"Filter_inpt__3V-Jj",filter:"Filter_filter__sBlZ8"}},21:function(t,e,n){t.exports={title:"Section_title__396d8"}},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(6),i=n.n(o),s=n(7),u=n(3),l=Object(u.b)("@contact/add"),b=Object(u.b)("@contact/delete"),j=Object(u.b)("@contacts/filter"),f=Object(u.b)("@contacts/get"),d=n(4),h=n(13),O=n.n(h),m=n(18),p=n(14),x=n(19),v=n(20),C=n(23),_=n(22),g=n(5),S=n.n(g),y=n(40),k=n(1),N=function(t){Object(C.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(x.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).initialState={name:"",number:""},t.state=Object(p.a)({},t.initialState),t.handleSubmit=function(){var e=Object(m.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t.setState({id:Object(y.a)()});case 3:t.props.onSubmit(t.state),t.reset();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.onInputChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(d.a)({},c,a))},t.reset=function(){t.setState(Object(p.a)({},t.initialState))},t}return Object(v.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{className:S.a.phonebook,children:Object(k.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(k.jsxs)("label",{children:[Object(k.jsx)("p",{children:"Name"}),Object(k.jsx)("input",{type:"text",value:this.state.name,name:"name",className:S.a.inpt,onChange:this.onInputChange})]}),Object(k.jsxs)("label",{children:[Object(k.jsx)("p",{children:"Number"}),Object(k.jsx)("input",{type:"text",value:this.state.number,name:"number",className:S.a.inpt,onChange:this.onInputChange})]}),Object(k.jsx)("button",{type:"submit",className:S.a.btn,children:"Add contact"})]})})}}]),n}(a.Component),w=n(15),F=n.n(w),I=function(t){var e=t.contacts,n=t.deleteContact,c=e.name,a=e.number;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("li",{className:F.a.name,children:[c,": ",a,Object(k.jsx)("button",{className:F.a.btn,onClick:function(){return n(e)},children:"delete"})]})})},J=n(21),L=n.n(J),E=function(t){var e=t.title;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h2",{className:L.a.title,children:e}),t.children]})},P=n(16),A=n.n(P),B=function(t){var e=t.value,n=t.onChange;return Object(k.jsx)("div",{className:A.a.filter,children:Object(k.jsxs)("label",{children:[Object(k.jsx)("p",{children:"Find contacts by name"}),Object(k.jsx)("input",{type:"text",value:e,onChange:n,className:A.a.inpt})]})})},T=(n(36),Object(s.b)((function(t){var e=t.contacts;return{items:e.items.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())})),filter:e.filter}}),(function(t){return{addContact:function(e){return t(l(e))},deleteContact:function(e){return t(b(e))},filterContacts:function(e){return t(j(e))},getContacts:function(e){return t(f(e))}}}))((function(t){var e=t.items,n=t.filter,c=t.addContact,r=t.deleteContact,o=t.filterContacts,i=t.getContacts;Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));i(t)}),[i]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(e))}),[e]);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(E,{title:"Phonebook",children:Object(k.jsx)(N,{onSubmit:function(t){if(e.length>0&&e.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()})))return void alert("".concat(t.name," is already in contacts"));c(t)}})}),Object(k.jsxs)(E,{title:"Contacts",children:[Object(k.jsx)(B,{value:n,onChange:function(t){o(t.target.value)}}),Object(k.jsx)("ul",{className:"contacts__name",children:e.map((function(t){return Object(k.jsx)(I,{contacts:t,deleteContact:r},t.id)}))}),")"]})]})}))),Z=n(8),q=n(2),z=Object(u.c)([],(c={},Object(d.a)(c,l,(function(t,e){var n=e.payload;return[].concat(Object(Z.a)(t),[n])})),Object(d.a)(c,b,(function(t,e){var n=e.payload;return Object(Z.a)(t.filter((function(t){return t.id!==n.id})))})),Object(d.a)(c,f,(function(t,e){var n=e.payload;return Object(Z.a)(n)})),c)),D=Object(u.c)("",Object(d.a)({},j,(function(t,e){return e.payload}))),K=Object(q.c)({items:z,filter:D}),M=Object(u.a)({reducer:{contacts:K},devTools:!1});n(37);i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(s.a,{store:M,children:Object(k.jsx)(T,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={phonebook:"Phonebook_phonebook__3arzZ",btn:"Phonebook_btn__suEeq",inpt:"Phonebook_inpt__38ip5"}}},[[38,1,2]]]);
//# sourceMappingURL=main.a9e84274.chunk.js.map
(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={name:"Contacts_name__1MDHx",btn:"Contacts_btn__3iZSg"}},15:function(t,e,n){t.exports={inpt:"Filter_inpt__1hjty",filter:"Filter_filter__1PTS_"}},21:function(t,e,n){t.exports={title:"Section_title__2ICqu"}},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c,a=n(0),o=n.n(a),r=n(7),i=n.n(r),s=n(5),u=n(3),l=Object(u.b)("@contact/add"),b=Object(u.b)("@contact/delete"),j=Object(u.b)("@contacts/filter"),f=Object(u.b)("@contacts/get"),d=n(4),h=n(12),m=n.n(h),O=n(18),p=n(13),x=n(19),C=n(20),g=n(23),v=n(22),_=n(6),S=n.n(_),y=n(40),k=n(1),N=function(t){Object(g.a)(n,t);var e=Object(v.a)(n);function n(){var t;Object(x.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).initialState={name:"",number:""},t.state=Object(p.a)({},t.initialState),t.handleSubmit=function(){var e=Object(O.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t.setState({id:Object(y.a)()});case 3:t.props.onSubmit(t.state),t.reset();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.onInputChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(d.a)({},c,a))},t.reset=function(){t.setState(Object(p.a)({},t.initialState))},t}return Object(C.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{className:S.a.phonebook,children:Object(k.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(k.jsxs)("label",{children:[Object(k.jsx)("p",{children:"Name"}),Object(k.jsx)("input",{type:"text",value:this.state.name,name:"name",className:S.a.inpt,onChange:this.onInputChange,autocomplete:"off"})]}),Object(k.jsxs)("label",{children:[Object(k.jsx)("p",{children:"Number"}),Object(k.jsx)("input",{type:"text",value:this.state.number,name:"number",className:S.a.inpt,onChange:this.onInputChange,autocomplete:"off"})]}),Object(k.jsx)("button",{type:"submit",className:S.a.btn,children:"Add contact"})]})})}}]),n}(a.Component),w=n(21),F=n.n(w),I=function(t){var e=t.title;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h2",{className:F.a.title,children:e}),t.children]})},P=n(14),J=n.n(P),L=function(t){var e=t.contacts,n=t.deleteContact,c=e.name,a=e.number;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("li",{className:J.a.name,children:[c,": ",a,Object(k.jsx)("button",{className:J.a.btn,onClick:function(){return n(e)},children:"delete"})]})})},E=n(15),q=n.n(E),A=Object(s.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{deleteContact:function(e){return t(b(e))}}}))((function(t){var e=t.filter,n=t.onChange,c=t.items,a=t.deleteContact;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:q.a.filter,children:Object(k.jsxs)("label",{children:[Object(k.jsx)("p",{children:"Find contacts by name"}),Object(k.jsx)("input",{type:"text",value:e,onChange:n,className:q.a.inpt,autocomplete:"off"})]})}),Object(k.jsx)("ul",{className:"contacts__name",children:c.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})).map((function(t){return Object(k.jsx)(L,{contacts:t,deleteContact:a},t.id)}))})]})})),D=(n(36),Object(s.b)((function(t){return{items:t.contacts.items}}),(function(t){return{addContact:function(e){return t(l(e))},filterContacts:function(e){return t(j(e))},getContacts:function(e){return t(f(e))}}}))((function(t){var e=t.items,n=t.addContact,c=t.filterContacts,o=t.getContacts;Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));o(t)}),[o]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(e))}),[e]);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(I,{title:"Phonebook",children:Object(k.jsx)(N,{onSubmit:function(t){if(e.length>0&&e.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()})))return void alert("".concat(t.name," is already in contacts"));n(t)}})}),Object(k.jsxs)(I,{title:"Contacts",children:[Object(k.jsx)(A,{onChange:function(t){c(t.target.value)},items:e}),")"]})]})}))),M=n(16),Q=n(2),T=Object(u.c)([],(c={},Object(d.a)(c,l,(function(t,e){var n=e.payload;return[].concat(Object(M.a)(t),[n])})),Object(d.a)(c,b,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n.id}))})),Object(d.a)(c,f,(function(t,e){var n=e.payload;return Object(M.a)(n)})),c)),Z=Object(u.c)("",Object(d.a)({},j,(function(t,e){return e.payload}))),B=Object(Q.c)({items:T,filter:Z}),H=Object(u.a)({reducer:{contacts:B},devTools:!1});n(37);i.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(s.a,{store:H,children:Object(k.jsx)(D,{})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={phonebook:"Phonebook_phonebook__2Qf4f",btn:"Phonebook_btn__15QZX",inpt:"Phonebook_inpt__2vq32"}}},[[38,1,2]]]);
//# sourceMappingURL=main.11e0d5ec.chunk.js.map
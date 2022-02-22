(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,n){t.exports=n(29)},22:function(t,e,n){},24:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(15),r=n.n(c),i=(n(22),n(1)),l=n(2),s=n(5),u=n(3),d=n(6),m=(n(24),n(4)),p=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).onChangeHandler=function(t){n.setState({text:t.target.value})},n.onSubmit=function(){"Todo"===n.state.choice?n.props.addTodos(n.state.text):n.props.addNotes(n.state.text),n.setState({text:""})},n.onClickChoice=function(t){n.setState({choice:t})},n.state={text:"",choice:"Todo"},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e="",n="";return"Todo"===this.state.choice?e="btn-success":n="btn-success",o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"btn m-2 ".concat(e),onClick:function(){return t.onClickChoice("Todo")}},"Switch to Add Todo"),o.a.createElement("button",{className:"btn ".concat(n),onClick:function(){return t.onClickChoice("Notes")}},"Switch to Add Notes"),o.a.createElement("p",null,"Add ",this.state.choice),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{value:this.state.text,onChange:this.onChangeHandler,type:"text",className:"form-control",placeholder:"Type todo here"})),o.a.createElement("button",{onClick:this.onSubmit,className:"btn btn-primary"},"Add"))}}]),e}(a.Component),b=Object(m.b)(null,function(t){return{addTodos:function(e){return t(function(t){return{type:"ADD_TODO",payload:t}}(e))},addNotes:function(e){return t(function(t){return{type:"ADD_NOTE",payload:t}}(e))}}})(p),h=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).editButtonHandler=function(){n.setState({viewMode:"edit"})},n.saveButtonHandler=function(){n.props.editTodo(n.props.index,n.state.text),n.setState({viewMode:"show"})},n.cancelButtonHandler=function(){n.setState({viewMode:"show"})},n.onChangeHandler=function(t){n.setState({text:t.target.value})},n.deleteButtonHandler=function(){n.props.deleteTodo(n.props.index)},n.state={viewMode:"show",text:t.todo},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=o.a.createElement("p",null,this.props.todo),e=o.a.createElement("button",{className:"btn btn-primary",onClick:this.editButtonHandler},"Edit");return"edit"===this.state.viewMode&&(t=o.a.createElement("input",{className:"form-control",type:"text",value:this.state.text,onChange:this.onChangeHandler}),e=o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"btn btn-success",onClick:this.saveButtonHandler},"Save"),o.a.createElement("button",{className:"btn btn-warning",onClick:this.cancelButtonHandler},"Cancel"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-8"},t),o.a.createElement("div",{className:"col-4"},e,o.a.createElement("button",{className:"btn btn-danger",onClick:this.deleteButtonHandler},"Delete")))}}]),e}(a.Component),O=Object(m.b)(null,function(t){return{editTodo:function(e,n){return t({type:"EDIT_TODO",payload:{index:e,todo:n}})},deleteTodo:function(e){return t(function(t){return{type:"DELETE_TODO",payload:t}}(e))}}})(h),f=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("ul",{className:"list-group"},this.props.todos.map(function(t,e){return o.a.createElement("li",{key:e,className:"list-group-item container"},o.a.createElement(O,{todo:t,index:e}))}))}}]),e}(a.Component),E=Object(m.b)(function(t){return{todos:t.todoReducer.todos}},function(t){return{}})(f),v=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Notes"),o.a.createElement("ul",{className:"list-group"},this.props.notes.map(function(t,e){return o.a.createElement("li",{key:e,className:"list-group-item container"},t)})))}}]),e}(a.Component),j=Object(m.b)(function(t){return{notes:t.noteReducer.notes}},null)(v),y=n(11),w=n(10),N=n(9),T={todos:[]},g={notes:[]},C=Object(N.b)({todoReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":return Object(w.a)({},t,{todos:[].concat(Object(y.a)(t.todos),[e.payload])});case"DELETE_TODO":var n=t.todos.filter(function(t,n){return n!==e.payload});return Object(w.a)({},t,{todos:n});case"EDIT_TODO":var a=Object(y.a)(t.todos),o=e.payload.index,c=e.payload.todo;return a[o]=c,Object(w.a)({},t,{todos:a});default:return t}},noteReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_NOTE":return Object(w.a)({},t,{notes:[].concat(Object(y.a)(t.notes),[e.payload])});default:return t}}}),D=Object(N.c)(C,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),k=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement(m.a,{store:D},o.a.createElement("div",{className:"App container"},o.a.createElement(b,null),o.a.createElement(E,null),o.a.createElement(j,null)))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.8e7980c9.chunk.js.map
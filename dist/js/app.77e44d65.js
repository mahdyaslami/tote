(function(e){function t(t){for(var o,u,i=t[0],d=t[1],a=t[2],s=0,f=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var d=n[i];0!==r[d]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var l=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"13c1":function(e,t,n){},1643:function(e,t,n){},"37db":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"form"};function c(e,t,n,c,u,i){var d=Object(o["m"])("todo-item"),a=Object(o["m"])("base-input");return Object(o["h"])(),Object(o["d"])(o["a"],null,[(Object(o["h"])(!0),Object(o["d"])(o["a"],null,Object(o["l"])(c.todos,(function(e){return Object(o["h"])(),Object(o["c"])(d,{key:e.id,todo:e,focused:e.id===u.currentId,onClick:function(){return i.select(e.id),!1}},null,8,["todo","focused","onClick"])})),128)),Object(o["e"])("div",r,[Object(o["f"])(a,{modelValue:u.newTodo,"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.newTodo=e}),onEnterKeyup:i.saveTodo},null,8,["modelValue","onEnterKeyup"]),Object(o["e"])("button",{class:"btn btn-save",onClick:t[1]||(t[1]=function(){return i.saveTodo&&i.saveTodo.apply(i,arguments)})}," Save ")])],64)}var u=n("75a2"),i=n.n(u),d=function(e){return Object(o["j"])("data-v-25c0c9c0"),e=e(),Object(o["i"])(),e},a={class:"title-input"},l=d((function(){return Object(o["e"])("div",{class:"image"},[Object(o["e"])("img",{src:i.a,alt:"writing-hand"})],-1)}));function s(e,t,n,r,c,u){return Object(o["h"])(),Object(o["d"])("div",a,[l,Object(o["q"])(Object(o["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.value=e}),type:"text",dir:"auto",onKeyup:t[1]||(t[1]=Object(o["r"])((function(t){return e.$emit("enterKeyup")}),["enter"]))},null,544),[[o["o"],u.value]])])}var f={props:{modelValue:{type:String,required:!0}},emits:["update:modelValue","enterKeyup"],computed:{value:{get:function(){return this.modelValue},set:function(e){return this.$emit("update:modelValue",e)}}}},p=(n("f1d1"),n("6b0d")),b=n.n(p);const v=b()(f,[["render",s],["__scopeId","data-v-25c0c9c0"]]);var h=v,m={class:"task"},O=["checked"];function j(e,t,n,r,c,u){return Object(o["h"])(),Object(o["d"])("div",m,[Object(o["e"])("input",{class:"tick",type:"checkbox",checked:n.todo.completed,onChange:t[0]||(t[0]=function(){return r.completeTodo(n.todo.id)})},null,40,O),Object(o["e"])("span",{class:Object(o["g"])(["content",{"bold linethrough":n.todo.completed,underline:n.focused}]),dir:"auto",onClick:t[1]||(t[1]=function(t){return e.$emit("click")})},Object(o["n"])(n.todo.text),3),Object(o["e"])("button",{class:"btn btn-delete",onClick:t[2]||(t[2]=function(){return r.deleteTodo(n.todo.id)})}," ✗ ")])}n("ac1f"),n("1276"),n("e9c4"),n("7db0"),n("d3b7"),n("c740"),n("a434");var g,y=document.location.pathname.split("/").pop(),w=Object(o["k"])(null!==(g=JSON.parse(localStorage.getItem(y)))&&void 0!==g?g:[]);function k(e){w.value.push({id:(new Date).getTime(),text:e,completed:!1})}function T(e){var t=w.value.find((function(t){return t.id===e}));t.completed=!t.completed}function x(e){var t=w.value.findIndex((function(t){return t.id===e}));w.value.splice(t,1)}Object(o["p"])((function(){return localStorage.setItem(y,JSON.stringify(w.value))}));var I={props:{focused:{type:Boolean,required:!1,default:!1},todo:{type:Object,required:!0}},emits:["click"],setup:function(){return{completeTodo:T,deleteTodo:x}}};n("87ff");const S=b()(I,[["render",j],["__scopeId","data-v-2611fe7e"]]);var _=S,V={name:"App",components:{BaseInput:h,TodoItem:_},setup:function(){return{database:y,todos:w,addTodo:k}},data:function(){return{newTodo:"",currentId:-1}},created:function(){document.title="Todo: ".concat(this.database)},methods:{select:function(e){this.currentId===e?this.currentId=-1:this.currentId=e},saveTodo:function(){this.addTodo(this.newTodo),this.newTodo=""}}};n("bbd9");const C=b()(V,[["render",c]]);var P=C,q=n("9483");Object(q["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d940");Object(o["b"])(P).mount("#app")},"75a2":function(e,t,n){e.exports=n.p+"img/writing-hand.b8f92482.gif"},"87ff":function(e,t,n){"use strict";n("13c1")},bbd9:function(e,t,n){"use strict";n("1643")},d940:function(e,t,n){},f1d1:function(e,t,n){"use strict";n("37db")}});
//# sourceMappingURL=app.77e44d65.js.map
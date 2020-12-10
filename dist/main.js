(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(645),i=t.n(o)()((function(n){return n[1]}));i.push([n.id,'html {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  background: linear-gradient(#141e30, #243b55);\n}\n\nnav {\n  box-sizing: border-box;\n  width: 100%;\n  background: linear-gradient(#03e9f4, #39587c);\n  padding: 0.6rem 1rem;\n  display: flex;\n  justify-content: center;\n  box-shadow: 0 10px 18px #111;\n  position: absolute;\n  top: 0;\n}\n\n.nav-item {\n  color: white;\n  text-decoration: none;\n  padding: 0.6rem 0.8rem;\n  margin: 0 1rem;\n  border-radius: 4px;\n}\n\n#form-container {\n  display: none;\n}\n\n#form-container:target {\n  display: flex;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  /* text-align: center; */\n}\n\n.login-box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  padding: 40px;\n  transform: translate(-50%, -50%);\n  background: rgba(0, 0, 0, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);\n  border-radius: 10px;\n  backdrop-filter: blur(14px);\n}\n\n.login-box h2 {\n  margin: 0 0 30px;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n}\n\n.login-box .user-box {\n  position: relative;\n}\n\n.login-box .close {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  color: white;\n  text-decoration: none;\n  font-size: 2rem;\n  padding: 0 0.5rem;\n}\n\n.login-box .user-box input {\n  width: 100%;\n  padding: 10px 0;\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 30px;\n  border: none;\n  border-bottom: 1px solid #fff;\n  outline: none;\n  background: transparent;\n}\n\nlabel {\n  padding: 10px 0;\n  color: #03e9f4;\n  font-size: 12px;\n}\n\n.login-box form a {\n  position: relative;\n  display: inline-block;\n  padding: 10px 20px;\n  color: #03e9f4;\n  font-size: 16px;\n  text-decoration: none;\n  text-transform: uppercase;\n  overflow: hidden;\n  transition: 0.5s;\n  margin-top: 0.5rem;\n  letter-spacing: 4px;\n}\n\n.login-box a:hover {\n  background: #03e9f4;\n  color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,\n    0 0 100px #03e9f4;\n}\n\n.login-box a span {\n  position: absolute;\n  display: block;\n}\n\n.login-box a span:nth-child(1) {\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(90deg, transparent, #03e9f4);\n  animation: btn-anim1 1s linear infinite;\n}\n\n@keyframes btn-anim1 {\n  0% {\n    left: -100%;\n  }\n  50%,\n  100% {\n    left: 100%;\n  }\n}\n\n.login-box a span:nth-child(2) {\n  top: -100%;\n  right: 0;\n  width: 2px;\n  height: 100%;\n  background: linear-gradient(180deg, transparent, #03e9f4);\n  animation: btn-anim2 1s linear infinite;\n  animation-delay: 0.25s;\n}\n\n@keyframes btn-anim2 {\n  0% {\n    top: -100%;\n  }\n  50%,\n  100% {\n    top: 100%;\n  }\n}\n\n.login-box a span:nth-child(3) {\n  bottom: 0;\n  right: -100%;\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(270deg, transparent, #03e9f4);\n  animation: btn-anim3 1s linear infinite;\n  animation-delay: 0.5s;\n}\n\n@keyframes btn-anim3 {\n  0% {\n    right: -100%;\n  }\n  50%,\n  100% {\n    right: 100%;\n  }\n}\n\n.login-box a span:nth-child(4) {\n  bottom: -100%;\n  left: 0;\n  width: 2px;\n  height: 100%;\n  background: linear-gradient(360deg, transparent, #03e9f4);\n  animation: btn-anim4 1s linear infinite;\n  animation-delay: 0.75s;\n}\n\n@keyframes btn-anim4 {\n  0% {\n    bottom: -100%;\n  }\n  50%,\n  100% {\n    bottom: 100%;\n  }\n}\n\n/* Reset Select */\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  outline: 0;\n  box-shadow: none;\n  border: 0 !important;\n  background: #2c3e50;\n  background-image: none;\n}\n/* Remove IE arrow */\nselect::-ms-expand {\n  display: none;\n}\n/* Custom Select */\n.select {\n  position: relative;\n  display: flex;\n  width: 20em;\n  height: 3rem;\n  line-height: 3;\n  background: #2c3e50;\n  overflow: hidden;\n  border-radius: 0.25em;\n  margin-bottom: 1.5rem;\n}\nselect {\n  flex: 1;\n  padding: 0 0.5em;\n  color: #fff;\n  cursor: pointer;\n}\n/* Arrow */\n.select::after {\n  content: "\\25BC";\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0 1em;\n  background: #34495e;\n  cursor: pointer;\n  pointer-events: none;\n  -webkit-transition: 0.25s all ease;\n  -o-transition: 0.25s all ease;\n  transition: 0.25s all ease;\n}\n/* Transition */\n.select:hover::after {\n  color: #f39c12;\n}\n\n.nav-item:hover {\n  background-color: #243b55;\n}\n\n#content {\n  padding: 4rem 4rem 0;\n}\n\n.project-div {\n  margin: 1rem auto;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 80%;\n  text-align: center;\n  background: linear-gradient(#3beff867, #059da567);\n  border-radius: 5px;\n}\n\n.todos-div {\n  width: 70%;\n  /* display: none; */\n}\n\n.todo-info {\n  display: flex;\n  list-style: none;\n  justify-content: space-evenly;\n  padding: 0.8rem 0;\n}\n',""]);const r=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:(n,e,t)=>{var o,i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function a(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},o=[],i=0;i<n.length;i++){var l=n[i],s=e.base?l[0]+e.base:l[0],d=t[s]||0,c="".concat(s," ").concat(d);t[s]=d+1;var p=a(c),u={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(r[p].references++,r[p].updater(u)):r.push({identifier:c,updater:b(u,e),references:1}),o.push(c)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,c=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=c(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function u(n,e,t){var o=t.css,i=t.media,r=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,m=0;function b(n,e){var t,o,i;if(e.singleton){var r=m++;t=f||(f=s(e)),o=p.bind(null,t,r,!1),i=p.bind(null,t,r,!0)}else t=s(e),o=u.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var i=a(t[o]);r[i].references--}for(var s=l(n,e),d=0;d<t.length;d++){var c=a(t[d]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}t=s}}}}},e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(28);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const i=(n,e,t)=>{if("todo"===n){e.innerHTML='\n    <div class="login-box">\n    <h2>Add New Todo</h2>\n    <a href="#" class="close">x</a>\n    <form>\n      <label>Project Title</label>\n      <div class="user-box">\n        <input type="text" name="todo">\n      </div>\n      <label>Description</label>\n      <div class="user-box">\n        <input type="text" name="description">\n      </div>\n      <label>Due Date</label>\n      <div class="user-box">\n        <input type="date" name="dueDate">\n      </div>\n      <label>Set the priority</label>\n      <div class="select user-box">\n        <select name="slct">\n          <option>High</option>\n          <option>Medium</option>\n          <option selected>Low</option>\n        </select>\n        </div>\n      <label>Select a project</label>\n      <div class="select user-box">\n        <select name="slct" id="projects">\n        </select>\n      </div>\n      <a href="#" id="add">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        Add\n      </a>\n    </form>\n    </div>';const n=document.getElementById("projects");t.forEach((e=>{const t=document.createElement("option");t.innerHTML=e,n.appendChild(t)}))}else"project"===n&&(e.innerHTML='\n    <div class="login-box">\n    <a href="#" class="close">x</a>\n    <h2>Create A New Project</h2>\n    <form>\n    <label>Project Title</label>\n      <div class="user-box">\n        <input type="text" name="name" required="">\n      </div>\n      <a href="#" id="create">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        Create\n      </a>\n    </form>\n    </div>\n    ')},r=(n,e)=>e?localStorage.setItem(n,JSON.stringify(e)):JSON.parse(localStorage.getItem(n)),a=(n,e)=>null===r(n)?(r(n,e),e):r(n),l=document.getElementById("add-todo"),s=document.getElementById("new-project"),d=document.getElementById("form-container"),c=a("projectList",["Global"]),p=a("todoList",[]);l.addEventListener("click",(()=>{i("todo",d,r("projectList")),document.getElementById("add").addEventListener("click",(()=>{const n=[...document.querySelector("form")].map((n=>n.value));n.every((n=>""!==n))?(p.push(((n,e,t,o,i)=>({title:n,description:e,dueDate:t,priority:o,project:i}))(...n)),r("todoList",p)):alert("Check your data and try again")}))})),s.addEventListener("click",(()=>{i("project",d),document.getElementById("create").addEventListener("click",(()=>{const n=document.querySelector("input").value;var e;e=n,r("projectList").includes(e)||""===e?alert("project name has already been used"):(c.push(n),r("projectList",c))}))}));const u=document.getElementById("content");var f,m;f=p,m=u,c.map((n=>{const e=document.createElement("div");e.setAttribute("class","project-div"),e.innerHTML=`\n    <h1>${n}</h1>\n    <div class="todos-div">\n    ${f.map(((e,t)=>{if(e.project===n)return`\n      <ul class="todo-info" id="${t}">\n      <li>${e.title}</li>\n      <li>${e.description}</li>\n      <li>${e.dueDate}</li>\n      <li>${e.priority}</li>\n      </ul>`})).join("")}\n    </div>`,m.appendChild(e)}))})()})();
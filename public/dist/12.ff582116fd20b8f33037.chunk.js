webpackJsonp([12],{"./app/containers/home-page/constants.js":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="boilerplate/Home/CHANGE_USERNAME"},"./app/containers/home-page/reducer.js":function(e,t,n){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case r.a:return e.set("username",t.name.replace(/@/gi,""));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("./node_modules/immutable/dist/immutable.js"),r=(n.n(s),n("./app/containers/home-page/constants.js")),o=n.i(s.fromJS)({username:""});t.default=a}});
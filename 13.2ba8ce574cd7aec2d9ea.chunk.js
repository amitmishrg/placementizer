webpackJsonp([13],{"./app/containers/event-management/upcoming-events/constants.js":function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a="boilerplate/Home/CHANGE_USERNAME"},"./app/containers/event-management/upcoming-events/reducer.js":function(e,n,t){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments[1];switch(n.type){case r.a:return e.set("username",n.name.replace(/@/gi,""));default:return e}}Object.defineProperty(n,"__esModule",{value:!0});var s=t("./node_modules/immutable/dist/immutable.js"),r=(t.n(s),t("./app/containers/event-management/upcoming-events/constants.js")),u=t.i(s.fromJS)({username:""});n.default=a}});
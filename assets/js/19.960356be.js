(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{316:function(t,e,r){"use strict";r.r(e);var n=r(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/ElemeFE/node-interview",target:"_blank",rel:"noopener noreferrer"}},[t._v("ElemeFE / node-interview"),r("OutboundLink")],1)])]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("在开发过程中，每次修改完代码手动重启服务器很麻烦。这里我们可以使用一个第三方命令行工具："),r("a",{attrs:{href:"https://github.com/remy/nodemon",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodemon"),r("OutboundLink")],1),t._v(" 来帮我们解决这个问题。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),r("p",[t._v("基本使用：")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),r("hr"),t._v(" "),t._m(8),t._v(" "),r("p",[t._v("安装")]),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("配置")]),t._v(" "),t._m(10),r("p",[t._v("常用命令")]),t._v(" "),t._m(11),t._m(12),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/standard/standard",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript Standard Style"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"}},[t._v("Airbnb JavaScript Style Guide"),r("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"第16章-其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第16章-其他","aria-hidden":"true"}},[this._v("#")]),this._v(" 第16章 其他")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"node-面试资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-面试资源","aria-hidden":"true"}},[this._v("#")]),this._v(" Node 面试资源")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"nodemon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodemon","aria-hidden":"true"}},[this._v("#")]),this._v(" nodemon")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("nodemon")]),this._v(" 是一个基于Node.js 开发的一个第三方命令行工具，使用它的第一步就是先安装：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm install --global nodemon\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("nodemon app.js\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("只要是通过 "),e("code",[this._v("nodemon app.js")]),this._v(" 启动的服务，则它会监视你的文件变化， 当文件发生变化的时候，自动帮你重启服务器。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("注意：该工具仅用于开发测试，不要在生产服务器中使用该命令。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用-nvm-安装管理-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-nvm-安装管理-node","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 nvm 安装管理 Node")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("macOS：https://github.com/creationix/nvm")]),this._v(" "),e("li",[this._v("Linux：https://github.com/creationix/nvm")]),this._v(" "),e("li",[this._v("Windows：https://github.com/coreybutler/nvm-windows")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("nvm node_mirror http://npm.taobao.org/mirrors/node\nnvm npm_mirror https://npm.taobao.org/mirrors/npm/\n")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看已安装列表")]),t._v("\nnvm list\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装指定版本")]),t._v("\nnvm "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 卸载指定版本")]),t._v("\nnvm uninstall "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换版本")]),t._v("\nnvm use "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"javascript-代码规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-代码规范","aria-hidden":"true"}},[this._v("#")]),this._v(" JavaScript 代码规范")])}],!1,null,null,null);e.default=s.exports}}]);
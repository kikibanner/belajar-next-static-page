"use strict";
(() => {
var exports = {};
exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 8307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./data.js
var data = __webpack_require__(9132);
// EXTERNAL MODULE: ./components/Meta.js
var Meta = __webpack_require__(8549);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(2500);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./pages/article/[id]/index.js






const article = ({ article: article1  })=>{
    /* const router = useRouter()
    const {id} = router.query */ return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
                title: article1.title,
                description: article1.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: article1.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: article1.body
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: "Back"
            })
        ]
    }));
};
// UNTUK STATIC PAGE
const getStaticProps = async (context)=>{
    const dev = "production" !== 'production';
    if (dev) {
        const res = await fetch(`${config/* server */.f}/api/articles/${context.params.id}`);
        const article2 = await res.json();
        return {
            props: {
                article: article2
            }
        };
    } else {
        const filtered = data/* data.filter */.a.filter((article3)=>article3.id === context.params.id
        );
        return {
            props: {
                filtered
            }
        };
    }
};
const getStaticPaths = async ()=>{
    const dev = "production" !== 'production';
    if (dev) {
        const res = await fetch(`${config/* server */.f}/api/articles`);
        const articles = await res.json();
        const ids = articles.map((article4)=>article4.id
        );
        const paths = ids.map((id)=>({
                params: {
                    id: id.toString()
                }
            })
        );
        return {
            paths,
            fallback: false
        };
    } else {
        const ids = data/* data.map */.a.map((article5)=>article5.id
        );
        const paths = ids.map((id)=>({
                params: {
                    id: id.toString()
                }
            })
        );
        return {
            paths,
            fallback: false
        };
    }
};
// export const getServerSideProps = async (context) => {
/* export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({
        params: {
            id: id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    }
} */ /* harmony default export */ const _id_ = (article);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,549,756], () => (__webpack_exec__(8307)));
module.exports = __webpack_exports__;

})();
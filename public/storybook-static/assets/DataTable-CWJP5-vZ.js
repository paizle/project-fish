import{j as e}from"./jsx-runtime-CkxqCPlQ.js";function o({className:n=""}){return e.jsxs("svg",{className:`-ml-1 mr-3 h-5 w-5 animate-spin ${n}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}o.__docgenInfo={description:"",methods:[],displayName:"LoadingSpinner",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};function u({className:n="",children:i,isLoading:l=null,data:s=[],schema:r={},uniqueKey:t="id",...c}){function a(){if(l)return e.jsx("tr",{children:e.jsxs("td",{colSpan:"100%",className:"loading",children:[e.jsx("span",{children:" "}),e.jsx("div",{className:"spinner-backdrop",children:e.jsx("div",{className:"spinner-wrapper",children:e.jsx(o,{})})})]})});if(!(s!=null&&s.length))return e.jsx("tr",{children:e.jsx("td",{colSpan:"100%",className:"no-data",children:"(no data)"})})}return e.jsxs("table",{className:"DataTable",children:[e.jsx("thead",{children:e.jsx("tr",{children:Object.keys(r).map(d=>r[d]?e.jsx("th",{children:d},d):null)})}),e.jsx("tbody",{children:p(i,s,r,t)}),e.jsx("tfoot",{children:a()})]})}function p(n,i,l,s){switch(typeof n){case"function":return i.map((r,t)=>n(r,t));default:return i.map((r,t)=>{const c=typeof l[s]=="function"?l[s](r,t):r[s];return e.jsx("tr",{children:Object.keys(l).map(a=>{switch(typeof l[a]){case"function":return e.jsx("td",{children:l[a](r,t)},a);default:return l[a]?e.jsx("td",{children:r[l[a]]},a):null}})},c)})}}u.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{className:{defaultValue:{value:"''",computed:!1},required:!1},isLoading:{defaultValue:{value:"null",computed:!1},required:!1},data:{defaultValue:{value:"[]",computed:!1},required:!1},schema:{defaultValue:{value:"{}",computed:!1},required:!1},uniqueKey:{defaultValue:{value:"'id'",computed:!1},required:!1}}};export{u as D};
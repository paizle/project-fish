import{r as n,j as e,b as c}from"./app-DqTgDFDI.js";import{z as x}from"./transition-CkIBPcGP.js";const g=n.createContext(),d=({children:r})=>{const[o,t]=n.useState(!1),a=()=>{t(s=>!s)};return e.jsx(g.Provider,{value:{open:o,setOpen:t,toggleOpen:a},children:e.jsx("div",{className:"relative",children:r})})},f=({children:r})=>{const{open:o,setOpen:t,toggleOpen:a}=n.useContext(g);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:a,children:r}),o&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>t(!1)})]})},p=({align:r="right",width:o="48",contentClasses:t="py-1 bg-white dark:bg-gray-700",children:a})=>{const{open:s,setOpen:u}=n.useContext(g);let i="origin-top";r==="left"?i="ltr:origin-top-left rtl:origin-top-right start-0":r==="right"&&(i="ltr:origin-top-right rtl:origin-top-left end-0");let l="";return o==="48"&&(l="w-48"),e.jsx(e.Fragment,{children:e.jsx(x,{show:s,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${i} ${l}`,onClick:()=>u(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+t,children:a})})})})},b=({className:r="",children:o,...t})=>e.jsx(c,{...t,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 "+r,children:o});d.Trigger=f;d.Content=p;d.Link=b;function m({active:r=!1,className:o="",children:t,...a}){return e.jsx(c,{...a,className:`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${r?"border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800 dark:border-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300 dark:focus:border-indigo-300 dark:focus:bg-indigo-900 dark:focus:text-indigo-200":"border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus:border-gray-600 dark:focus:bg-gray-700 dark:focus:text-gray-200"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${o}`,children:t})}export{d as D,m as R};
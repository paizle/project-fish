import{j as t,Y as m}from"./app-GsjunD-S.js";/* empty css               */import{A as a}from"./AuthenticatedLayout-BU5K28MY.js";import{C as p}from"./WizardCard-rJ-SlwoP.js";import"./ApplicationLogo-CpdUawHX.js";import"./ResponsiveNavLink-BYiEBlnC.js";import"./transition-D_dP9HcI.js";import"./NavLink-Di5U8FLb.js";/* empty css                     */const r={"Upper Saint John":"/images/upper-saint-john-map.png",Southwest:"/images/south-west-saint-john-map.png"};function g({locations:i}){return t.jsxs(a,{children:[t.jsx(m,{title:"Project: FISH"}),t.jsx("div",{className:"my-8 flex flex-wrap justify-center gap-2",children:i.map(e=>r[e.name]?t.jsx(p,{href:route("wizard.location.page",e.id),imageSrc:r[e.name],children:e.name},e.id):null)})]})}export{g as default};
import{j as t,Y as m}from"./app-DqTgDFDI.js";/* empty css               */import{A as a}from"./AuthenticatedLayout-DdDRXa-3.js";import{C as p}from"./WizardCard-DsoKek2j.js";import"./ApplicationLogo-B7D6WOMh.js";import"./ResponsiveNavLink-c8Kg1pG6.js";import"./transition-CkIBPcGP.js";import"./NavLink-BBshBAV_.js";import"./NewIndicator-ClT3zjS7.js";const r={"Upper Saint John":"/images/upper-saint-john-map.png",Southwest:"/images/south-west-saint-john-map.png"};function g({locations:i}){return t.jsxs(a,{children:[t.jsx(m,{title:"Project: FISH"}),t.jsx("div",{className:"my-8 flex flex-wrap justify-center gap-2",children:i.map(e=>r[e.name]?t.jsx(p,{href:route("wizard.location.page",e.id),imageSrc:r[e.name],children:e.name},e.id):null)})]})}export{g as default};
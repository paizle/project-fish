import{j as r}from"./app-GsjunD-S.js";import e from"./PublicAppLayout-NjY3wIfN.js";import p from"./PublicAppMenu-CSKEYsUE.js";import n,{InternalRouterProvider as a,BreadCrumb as s}from"./InternalRouter-Bapk6yFT.js";import u from"./Map-DIqXh5zO.js";import l from"./Location-CqhsDIfT.js";import c from"./Water-Bmx-2MzX.js";import"./ApplicationLogo-CpdUawHX.js";import"./ResponsiveNavLink-BYiEBlnC.js";import"./transition-D_dP9HcI.js";import"./PublicAppNavigation-S9DM67AP.js";import"./HomeIcon-DydJbLpr.js";import"./useScreenOrientation-DaHCCsB1.js";import"./MapMobile-CfCZhKZs.js";import"./NewBrunswickMap-BCS6XC_K.js";import"./NewBrunswickMapMobile-28Bg-lEq.js";import"./MapWeb-CbG7VCTI.js";import"./NewBrunswickMapWeb-CYaUm_PT.js";import"./format-DydbFBTm.js";import"./parseMySqlDate-CS0HqXnd.js";import"./Tooltip-CiKyfWh5.js";/* empty css                */function V({locations:t}){const i={defaultViewName:"map",breadCrumb:[{name:"map",content:"New Brunswick"}]};return r.jsx(a,{config:i,children:r.jsxs(e,{children:[r.jsxs("header",{children:[r.jsx(p,{}),r.jsx(s,{})]}),r.jsx("main",{children:r.jsx(n,{children:{map:o=>r.jsx(u,{locations:t,...o}),location:o=>r.jsx(l,{...o,route:m.limitsByLocation}),water:o=>r.jsx(c,{...o,route:m.limitsByWater})}})})]})})}const m={limitsByLocation:(t,i)=>route("public-app.limitsByLocation.rest",t,{waterNameQuery:i}),limitsByWater:(t,i)=>route("public-app.limitsByWater.rest",t,{fishNameQuery:i})};export{V as default};
import{j as r}from"./app-GsjunD-S.js";import m from"./PublicAppPrototype1Layout-CClILZaZ.js";import s from"./PublicAppMenu-CsSs0jjm.js";import p from"./SectionTabs-BS3GBr5P.js";import n,{InternalRouterProvider as a,BreadCrumb as u}from"./InternalRouter-C_gJN5n-.js";import l from"./Map-DcfRtkE1.js";import c from"./Location-Bqk7kGsZ.js";import f from"./Water-D_m9yxER.js";import h from"./Fishes-DSYD9wM9.js";import x from"./LimitsByFish-DSM1DYq9.js";import"./ApplicationLogo-CpdUawHX.js";import"./ResponsiveNavLink-BYiEBlnC.js";import"./transition-D_dP9HcI.js";import"./PublicAppNavigation-D3k6dRHl.js";import"./HomeIcon-DydJbLpr.js";import"./useScreenOrientation-DaHCCsB1.js";import"./MapMobile-DLvOKqdM.js";import"./NewBrunswickMap-BCS6XC_K.js";import"./NewBrunswickMapMobile-28Bg-lEq.js";import"./MapWeb-CkOroE6J.js";import"./NewBrunswickMapWeb-CYaUm_PT.js";import"./DataTable-CYqm5wiv.js";import"./format-DydbFBTm.js";import"./parseMySqlDate-CS0HqXnd.js";import"./Squares2X2Icon-B97vjzSK.js";function D({locations:t}){const o={defaultViewName:"fishes",defaultBreadCrumb:[{name:"map",content:"New Brunswick"}],breadCrumb:[{name:"map",content:"New Brunswick"}]};return r.jsx(a,{config:o,children:r.jsxs(m,{children:[r.jsxs("header",{children:[r.jsx(s,{}),r.jsx(p,{}),r.jsx(u,{})]}),r.jsx("main",{children:r.jsx(n,{children:{map:i=>r.jsx(l,{locations:t,...i}),location:i=>r.jsx(c,{...i,route:e.limitsByLocation}),water:i=>r.jsx(f,{...i,route:e.limitsByWater}),fishes:i=>r.jsx(h,{...i,route:e.fishes}),limitsByFish:i=>r.jsx(x,{...i,route:e.limitsByFish})}})})]})})}const e={limitsByLocation:(t,o)=>route("public-app.limitsByLocation.rest",t,{waterNameQuery:o}),limitsByWater:(t,o)=>route("public-app.limitsByWater.rest",t,{fishNameQuery:o}),fishes:()=>route("public-app.fishes.rest"),limitsByFish:t=>route("public-app.limitsByFish.rest",t)};export{D as default};
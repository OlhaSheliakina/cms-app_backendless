"use strict";(self.webpackChunkcms_app=self.webpackChunkcms_app||[]).push([[505],{505:function(a,e,r){r.r(e);var t=r(439),s=r(791),n=r(152),o=r(77),c=r(184);n.kL.register(n.qi,n.u,n.De);e.default=function(){var a=(0,s.useState)([]),e=(0,t.Z)(a,2),r=e[0],n=e[1];(0,s.useEffect)((function(){fetch("https://olhasheliakina.github.io/cms-app_backendless/data/projectsData.json").then((function(a){return a.json()})).then((function(a){n(a.projectsProgress)})).catch((function(a){console.error("Error has occured while fetching data:",a)}))}),[]);var i={labels:r.map((function(a){return a.name})),datasets:[{label:"Progress",data:r.map((function(a){return a.progress})),backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)"],borderWidth:1.5}]};return(0,c.jsx)("section",{className:"section is-medium",children:(0,c.jsx)(o.by,{data:i,options:{maintainAspectRatio:!1}})})}}}]);
//# sourceMappingURL=505.b3eef5fa.chunk.js.map
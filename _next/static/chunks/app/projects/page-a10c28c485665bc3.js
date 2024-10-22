(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{773:function(t,e,i){Promise.resolve().then(i.bind(i,2732))},2732:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return h}});var n=i(7437),s=i(2265),o=i(3145),r=i(7648),a=i(7430),c=i.n(a),l=t=>{let{id:e,title:i,subtitle:s,imageSrc:a,link:l,description:u,github:d}=t;return(0,n.jsxs)("li",{className:c().card,children:[(0,n.jsx)("div",{className:c().imageContainer,children:""!==a?(0,n.jsx)(o.default,{src:a,alt:i,layout:"fill",objectFit:"cover",className:c().image}):(0,n.jsx)("div",{className:c().noImage,children:"no image yet!"})}),(0,n.jsxs)("div",{className:c().content,children:[(0,n.jsx)("h3",{className:c().title,children:i}),(0,n.jsx)("h4",{className:c().subtitle,children:s}),(0,n.jsx)("p",{className:c().description,children:u}),(0,n.jsxs)("div",{className:c().buttonContainer,children:[d&&(0,n.jsx)(r.default,{href:d,target:"_blank",rel:"noopener noreferrer",className:c().button,children:(0,n.jsx)(o.default,{src:"/images/github.svg",alt:"GitHub",width:24,height:24})}),l&&(0,n.jsx)(r.default,{href:l,target:"_blank",rel:"noopener noreferrer",className:c().button,children:(0,n.jsx)(o.default,{src:"/images/website.svg",alt:"Website",width:24,height:24})})]})]})]})},u=JSON.parse('[{"id":0,"title":"Planflux","subtitle":"next.js, tailwind css, shadcn, django, azure functions","description":"Intelligent Document Processing SaaS.","imageSrc":"/images/projects/planflux.png","link":"https://planflux.com","github":""},{"id":1,"title":"Kolly","subtitle":"next.js","description":"Advisor to a more modern and specialized AI college consultant.","imageSrc":"/images/projects/kolly.png","link":"https://kolly.com","github":""},{"id":2,"title":"Delilah","subtitle":"next.js, django","description":"AI powered text editor and education SaaS helping students write personal statements and essays.","imageSrc":"/images/projects/delilah.png","link":"https://www.delilah.ai/","github":"https://github.com/ngu-khoi"},{"id":3,"title":"Personal Website","subtitle":"next.js","description":"My personal website.","imageSrc":"/images/projects/personal_website-removebg-preview.png","link":"https://khoi.ai","github":"https://github.com/ngu-khoi/ngu-khoi.github.io"},{"id":4,"title":"Pong","subtitle":"swiftui, swift, django","description":"Anonymous social media platform. Effectively a precursor to Sidechat.","imageSrc":"","link":"","github":""},{"id":5,"title":"&Pizza Auto Order Bot","subtitle":"python, selenium","description":"Automated ordering bot for &Pizza.","imageSrc":"/images/projects/&pizza.png","link":"","github":"https://github.com/ngu-khoi/andpizza"},{"id":6,"title":"Durable Functions Distributed Tracing Repro","subtitle":"azure durable functions","description":"Tutorial on Azure Durable Functions and a repro of a distributed tracing issue (WIP)","imageSrc":"/images/projects/azure_functions.png","link":"https://github.com/Azure/azure-functions-durable-extension/issues/2662#issuecomment-2040475863","github":"https://github.com/ngu-khoi/durable-distributed-tracing-repro"},{"id":7,"title":"PenPal","subtitle":"react","description":"React text editor with AI","imageSrc":"/images/projects/penpal.png","link":"https://devpost.com/software/gpt-text-editor","github":"https://github.com/artemas-radik/penpal"},{"id":8,"title":"Finetune Cost Benefit","subtitle":"python","description":"Cost benefit analysis for finetuning LLMs","imageSrc":"/images/projects/finetune_costbenefit.png","link":"https://github.com/ngu-khoi/finetune-costbenefit/blob/main/CostBenefit_Analysis_of_Finetuning_Worse_LLMs_for_Specific_Instructions.pdf","github":"https://github.com/ngu-khoi/finetune-costbenefit"},{"id":9,"title":"ISEF ADNI Project","subtitle":"python, pytorch","description":"A CV project that won 4th place at ISEF 2021.","imageSrc":"/images/projects/regeneron_isef.png","link":"https://abstracts.societyforscience.org/Home/FullAbstract?ISEFYears=0%2C&Category=Computational%20Biology%20and%20Bioinformatics&Finalist=nguyen&AllAbstracts=True&FairCountry=Any%20Country&FairState=Any%20State&ProjectId=20983","github":"https://github.com/ngu-khoi/ISEF-ADNI"},{"id":10,"title":"BRITS Project","subtitle":"python, pytorch","description":"An ML project I worked on at George Mason University.","imageSrc":"/images/projects/mason_publishing_group.png","link":"https://journals.gmu.edu/index.php/jssr/article/view/3159","github":"https://github.com/ngu-khoi/BRITS-Realtime-Alive"}]');let d=()=>new Promise(t=>{setTimeout(()=>{t(u)},150)});var g=i(2924),p=i.n(g),h=()=>{let[t,e]=(0,s.useState)([]),[i,o]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{d().then(t=>{e(t),o(!1)}).catch(t=>{console.error("Error fetching projects:",t),o(!1)})},[]),(0,n.jsxs)("div",{className:p().container,children:[(0,n.jsx)("h1",{className:p().title,children:"my projects"}),(0,n.jsxs)("div",{className:p().flexContainer,children:[(0,n.jsx)(r.default,{href:"/",className:p().button,children:"Back to Home"}),(0,n.jsx)("p",{children:(0,n.jsx)("i",{children:"there's a fake loading to test some states and effects"})})]}),i?(0,n.jsxs)("div",{className:p().loadingContainer,children:[(0,n.jsx)("div",{className:p().loadingSpinner}),(0,n.jsx)("p",{children:"Loading projects..."})]}):(0,n.jsx)("ul",{className:p().projectList,children:t.map(t=>(0,n.jsx)(l,{...t},t.id))})]})}},2924:function(t){t.exports={container:"Projects_container__53XdG",title:"Projects_title__GmZoA",flexContainer:"Projects_flexContainer___jHx_",projectList:"Projects_projectList__HE_BE",button:"Projects_button__xHBhr",loadingContainer:"Projects_loadingContainer__P4DPJ",loadingSpinner:"Projects_loadingSpinner__q5Hyf",spin:"Projects_spin__8yFh8"}},7430:function(t){t.exports={card:"ProjectCard_card__YCvBo",imageContainer:"ProjectCard_imageContainer__FUvWp",image:"ProjectCard_image__c8epP",noImage:"ProjectCard_noImage__VdTcm",content:"ProjectCard_content__Uw_aA",title:"ProjectCard_title__SlBJZ",subtitle:"ProjectCard_subtitle__Ndp2T",description:"ProjectCard_description__IONeI",buttonContainer:"ProjectCard_buttonContainer__C4fXU",button:"ProjectCard_button__CNi5d"}}},function(t){t.O(0,[590,726,971,117,744],function(){return t(t.s=773)}),_N_E=t.O()}]);
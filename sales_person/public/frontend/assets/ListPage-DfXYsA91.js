var E=(h,C,x)=>new Promise((y,b)=>{var i=u=>{try{k(x.next(u))}catch(_){b(_)}},w=u=>{try{k(x.throw(u))}catch(_){b(_)}},k=u=>u.done?y(u.value):Promise.resolve(u.value).then(i,w);k((x=x.apply(h,C)).next())});import{m as J,o as l,a as r,x as M,y as O,b as e,r as p,z as N,d as c,u as d,F as W,q as G,_ as g,t as $,p as D,j as q,v as pe,n as _e,w as S,T as ve,k as he,E as xe,c as fe,f as T,l as I}from"./index-W_lnXAtG.js";import{_ as U,A as j}from"./TextInput.vue_vue_type_script_setup_true_lang-CdzQ2H2L.js";import{f as R,U as be}from"./User-DRURSIwv.js";import{c as we,a as A,r as B}from"./formStore-DlFuB_8v.js";import"./Popover-D9lPCEKX.js";import"./Avatar.vue_vue_type_script_setup_true_lang-BYVCYYui.js";const ye={},H=h=>(M("data-v-48d21730"),h=h(),O(),h),ke={class:"spinner",viewBox:"0 0 50 50"},ge=H(()=>e("defs",null,[e("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%"},[e("stop",{offset:"0%","stop-color":"rgba(0,110,219,1)"}),e("stop",{offset:"100%","stop-color":"rgba(255,255,255,0)"})])],-1)),$e=H(()=>e("circle",{stroke:"url(#gradient)",class:"spinner-path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"5"},null,-1)),Ce=[ge,$e];function qe(h,C){return l(),r("svg",ke,Ce)}const Ve=J(ye,[["render",qe],["__scopeId","data-v-48d21730"]]),Ee={class:"bg-white h-[32rem] w-full rounded-lg mt-2 p-2"},Se={class:"h-[28rem] overflow-y-auto no-scrollbar"},Pe={key:0,class:"flex justify-center text-center content-center"},Te={class:"flex mt-[14rem]"},Ie=e("p",{class:"text-4 pl-2 text-gray-600"},"Loading",-1),Le={key:1},Ne={key:0,class:"flex justify-center items-center h-full text-center"},Fe=e("p",{class:"text-gray-600 text-sm mt-[14rem]"},"No Record Found",-1),Ye=[Fe],ze={key:1},De={class:"p-2 flex pt-2 items-center"},Ue={class:"flex flex-col pl-3"},je={class:"text-black truncate w-[8rem]"},Re={class:"flex space-x-2"},Ae={class:"text-gray-600 text-[10px] truncate w-[4rem]"},Be={class:"text-gray-600 text-[10px] truncate w-[4rem]"},Je={key:0},Me={key:1},Oe={class:"border-[0.5px] ml-10 border-blue-500 rounded-md text-center w-[3rem]"},We={class:"text-[10px] max-w-[6rem] truncate text-blue-600"},Ge={key:2,class:"ml-auto"},He={key:0,class:"ml-auto"},Ke={key:0,class:"w-[4rem]"},Qe=e("div",{class:"border-[0.5px] ml-10 border-red-500 rounded-md text-center w-[3rem]"},[e("p",{class:"text-[10px] max-w-[6rem] truncate text-red-600"},"Draft")],-1),Xe=[Qe],Ze={key:1,class:"ml-10 border-blue-500 border-[0.5px] rounded-md px-2"},et=e("p",{class:"text-[10px] max-w-[6rem] truncate text-blue-600"},"Submitted",-1),tt=[et],st={key:2,class:"ml-10 border-red-500 border-[0.5px] rounded-md px-2"},at=e("p",{class:"text-[10px] max-w-[6rem] truncate text-red-600"},"Cancelled",-1),ot=[at],lt=["onClick"],rt={class:"border-gray-200 border-[1.5px] p-1 mb-2 mt-2 flex rounded-xl w-fit"},nt=e("p",{class:"text-[14px] pr-2 pl-2 hover:cursor-pointer"},"20",-1),ct=[nt],dt=e("p",{class:"text-[14px] pr-2 pl-2 hover:cursor-pointer"},"100",-1),it=[dt],ut=e("p",{class:"text-[14px] pr-2 pl-2 hover:cursor-pointer"},"500",-1),mt=[ut],pt={__name:"List",props:{reports:Array},emits:["handle-click","print-number"],setup(h,{emit:C}){const x=h,y=C,b=p(x.reports),i=p(!0);N(()=>x.reports,m=>{b.value=m,i.value=!1});const w=m=>{switch(m){case"Success":return"border-[1.5px] border-green-500  rounded-2xl text-center";case"Danger":return"border-[1.5px] border-red-500 rounded-2xl text-center";case"Inverse":return"border-[1.5px] border-black rounded-2xl text-center";case"Warning":return"border-[1.5px] border-orange-500 rounded-2xl text-center";case"Info":return"border-[1.5px] border-blue-500 rounded-2xl text-center";case"Primary":return"border-[1.5px] border-[#9fa8da] rounded-2xl text-center";default:return"border-[1.5px] border-gray-500 rounded-2xl text-center"}},k=m=>{switch(m){case"Success":return"text-sm max-w-[6rem] truncate px-2 text-green-500";case"Danger":return"text-sm max-w-[6rem] truncate px-2 text-red-500";case"Inverse":return"text-sm max-w-[6rem] truncate px-2 text-white";case"Warning":return"text-sm max-w-[6rem] truncate px-2 text-orange-500";case"Info":return"text-sm max-w-[6rem] truncate px-2 text-blue-500";case"Primary":return"text-sm max-w-[6rem] truncate px-2 text-[#1a237e]";default:return"text-sm max-w-[6rem] truncate px-2 text-gray-500"}},u=m=>{y("handle-click",m)},_=m=>{y("print-number",m)};return N(()=>b.value,m=>{m.forEach(v=>{v.workflow_state&&pe({doctype:"Workflow State",filters:{name:v.workflow_state},fields:["*"]}).reload().then(o=>{v.style=o[0].style})})}),(m,v)=>(l(),r("div",Ee,[e("div",Se,[i.value?(l(),r("div",Pe,[e("div",Te,[c(d(Ve),{class:"w-4"}),Ie])])):(l(),r("div",Le,[b.value.length<=0?(l(),r("div",Ne,Ye)):(l(),r("div",ze,[(l(!0),r(W,null,G(b.value,o=>(l(),r("div",{key:o.id,class:"border-gray-200 border-b-[1.5px]"},[e("div",De,[c(d(g),{name:"file-text",class:"text-gray-600 h-5 w-5"}),e("div",Ue,[e("p",je,$(o.name),1),e("div",Re,[e("p",Ae,$(o.owner),1),e("p",Be,$(o.creation),1)])]),o.workflow_state?(l(),r("div",Je,[e("div",{class:D([w(o.style),"ml-4"])},[e("p",{class:D(k(o.style))},$(o.workflow_state),3)],2)])):o.status?(l(),r("div",Me,[e("div",Oe,[e("p",We,$(o.status),1)])])):(l(),r("div",Ge,[o.amended_from_value?(l(),r("div",He,[o.docstatus===0?(l(),r("div",Ke,Xe)):o.docstatus===1?(l(),r("div",Ze,tt)):o.docstatus===2?(l(),r("div",st,ot)):q("",!0)])):q("",!0)])),e("div",{class:"ml-auto",onClick:L=>u(o)},[c(d(g),{name:"arrow-right",class:"text-gray-600 h-5 w-5 hover:text-black hover:cursor-pointer"})],8,lt)])]))),128))]))]))]),e("div",rt,[e("div",{class:"border-r-[1.5px] border-gray-200 touchable","data-number":"20",onClick:v[0]||(v[0]=o=>_(20))},ct),e("div",{class:"border-r-[1.5px] border-gray-200 touchable","data-number":"100",onClick:v[1]||(v[1]=o=>_(100))},it),e("div",{class:"touchable","data-number":"500",onClick:v[2]||(v[2]=o=>_(500))},mt)])]))}},_t=h=>(M("data-v-69e9dc6a"),h=h(),O(),h),vt={class:"w-full sm:w-96 bg-white flex flex-col items-center h-screen overflow-hidden"},ht={class:"w-full sm:w-96 bg-white h-14 shadow-lg fixed top-0 z-10"},xt={class:"p-2 flex pt-3"},ft={class:"font-semibold text-xl pt-[8px] pr-2 truncate w-[10rem]"},bt={class:"w-full flex justify-end"},wt={class:"p-1 pr-4"},yt={key:0,class:"fixed bottom-[5rem] leading-5 pr-[2rem] pl-[2.5rem] z-50 w-[20rem] sm:w-96 animate-slide-in"},kt={class:"rounded w-[20rem] h-fit p-2 text-left bg-red-200 text-red-500"},gt={class:"flex"},$t={class:"h-full"},Ct={class:"w-[16rem] break-words"},qt={class:"w-full flex-1 bg-gray-200 mt-14 overflow-hidden"},Vt={class:"p-4"},Et={class:"flex bg-white p-2 rounded-lg items-center"},St={class:"w-[10rem] ml-2"},Pt={class:"ml-auto relative"},Tt={key:0,class:"absolute -top-1 -right-1 bg-red-400 w-[13px] h-[13px] flex justify-center items-center rounded-2xl"},It={class:"text-[5px] text-white"},Lt={class:"flex w-full sm:w-96 pb-5 pt-2 fixed bottom-0 z-10 bg-white justify-center shadow-lg"},Nt={class:"pt-1 w-fit h-full"},Ft=_t(()=>e("div",{class:"p-4"},[e("p",{class:"text-2xl font-semibold"},"Filters")],-1)),Yt={class:"flex p-[3rem] flex-col justify-center h-full mt-[1rem] overflow-y-auto no-scrollbar"},zt={class:"p-2"},Dt={class:"p-2"},Ut={class:"p-2"},jt={class:"p-2 mt-1"},Rt={class:"flex border-t-[1.5px] border-gray-200 p-2 mt-auto"},At={__name:"ListPage",setup(h){const C=we(),x=p(C.reports),y=he(),b=p(20),i=xe(),w=p(!1),k=p(""),u=p([]),_=p(null),m=p(0),v=p(""),o=p(!1),L=p([]),F=p(!1),Y=p({});_e(()=>E(this,null,function*(){const t=yield A();t.data?t.data.forEach(s=>{Y.value=s.doctype_name==i.query.doctype?s:null}):R.form_list.forEach(s=>E(this,null,function*(){if(s.form_name===i.query.frmname){const a=B(s.doctype_name);Y.value=a}}))}));const K=()=>E(this,null,function*(){const t=yield A();if(t.data){let s;return t.data.forEach(a=>{s=a.doctype_name==i.query.doctype?a:null}),s.is_submittable}else R.form_list.forEach(s=>E(this,null,function*(){if(s.form_name===i.query.frmname)return B(s.doctype_name).is_submittable}))}),Q=t=>{startY.value=t.touches[0].clientY},X=t=>{endY.value=t.touches[0].clientY},Z=()=>{endY.value-startY.value>50&&(showPage.value=!1)};N(k,t=>{t?u.value=[[i.query.doctype,"name","like",`%${t}%`]]:u.value=[],V()});const ee=t=>{t.style.transform="translateY(100%)",setTimeout(()=>{t.style.transform="translateY(0)"},10)},te=t=>{t.style.transform="translateY(0)",setTimeout(()=>{t.style.transform="translateY(100%)"},10)},se=()=>{v.value="",o.value=!1},V=()=>{const t=u.value.length!==0?u.value:[];m.value=u.value.length,_.value=fe({url:"frappe.desk.reportview.get",method:"POST",params:{doctype:i.query.doctype,filters:t,fields:["*"],distinct:!1,start:0,page_length:b.value}}),_.value.fetch().then(()=>{if(_.value.data==null){x.value=[];return}if(_.value.data.length===0){x.value=[];return}L.value=_.value.data.keys;const s=K();x.value=_.value.data.values.map(a=>{const n={};return _.value.data.keys.forEach((f,me)=>{n[f]=a[me]}),{name:n.name,owner:n.owner,creation:n.creation,docstatus:n.docstatus,workflow_state:F.value?n.workflow_state:null,amended_from_value:s?1:0,status:F.value?null:n.status?n.status:null}}),C.setReport(x.value)}).catch(s=>{var n,f;const a=s.message||((f=(n=s.response)==null?void 0:n.data)==null?void 0:f.message)||"Something went wrong";v.value=a,o.value=!0})};V();const ae=t=>{y.push({name:"Showform",query:{frmname:i.query.frmname,doctype:i.query.doctype,docname:t.name}})},z=p([]),oe=()=>{y.push({name:"Form",query:{frmname:i.query.frmname,doctype:i.query.doctype}})},le=()=>{z.value=P.value.map(t=>{let s=t.selectedCondition,a="=",n=t.value;switch(s){case"equals":a="=";break;case"not_equals":a="!=";break;case"like":a="like",n=`%${n}%`;break;case"not_like":a="not like",n=`%${n}%`;break;default:a="="}if(t.selectedPerson&&a&&n)return{field:t.selectedPerson,condition:a,value:n}}),u.value=z.value.filter(t=>t!==void 0).map(t=>[i.query.doctype,t.field.value,t.condition,t.value]),V(),w.value=!1},re=t=>{b.value=t,V()},ne=t=>{P.value.splice(t,1)},ce=()=>{y.push({name:"LandingPage"})},de=()=>{V()},P=p([]),ie=[{label:"Equals",value:"equals"},{label:"Not Equals",value:"not_equals"},{label:"Like",value:"like"},{label:"Not Like",value:"not_like"}],ue=()=>{const t=L.value.map(s=>({label:s,value:s}));P.value.push({options:t,selectedPerson:null,selectedCondition:"Equals",value:""})};return(t,s)=>(l(),r("div",vt,[e("div",ht,[e("div",xt,[c(d(g),{class:"w-8 h-8 text-gray-600 hover:text-black",name:"chevron-left",onClick:ce}),e("p",ft,$(d(i).query.doctype),1),e("div",bt,[e("div",wt,[c(d(g),{class:"w-6 h-6 text-gray-600 hover:text-black hover:cursor-pointer",name:"bell",onClick:s[0]||(s[0]=a=>d(y).push("/notifications"))})]),c(be)])])]),o.value?(l(),r("div",yt,[e("div",kt,[e("div",gt,[e("div",$t,[c(d(g),{name:"x",class:"inline w-6 h-6 mr-2 hover:cursor-pointer",onClick:se})]),e("p",Ct,$(v.value),1)])])])):q("",!0),e("div",qt,[e("div",Vt,[e("div",Et,[c(d(g),{name:"list",class:"w-5 h-5 text-gray-600"}),e("div",St,[c(d(U),{class:"truncate",type:"text",size:"sm",variant:"subtle",placeholder:"ID",modelValue:k.value,"onUpdate:modelValue":s[1]||(s[1]=a=>k.value=a)},null,8,["modelValue"])]),e("div",Pt,[m.value>0?(l(),r("div",Tt,[e("p",It,$(m.value),1)])):q("",!0),c(d(g),{name:"filter",class:"w-5 h-5 text-gray-600 hover:text-black hover:cursor-pointer",onClick:s[2]||(s[2]=a=>w.value=!0)})]),c(d(g),{name:"refresh-ccw",class:"w-5 h-5 text-gray-600 ml-[1rem] mr-2 hover:text-black hover:cursor-pointer",onClick:de})]),c(pt,{reports:x.value,onHandleClick:ae,onPrintNumber:re},null,8,["reports"])]),e("div",Lt,[e("div",Nt,[c(d(I),{variant:"solid",class:"w-[18rem] h-full p-2",onClick:oe},{default:S(()=>[T("New "+$(d(i).query.doctype),1)]),_:1})])])]),w.value?(l(),r("div",{key:1,class:"fixed inset-0 bg-black opacity-50 z-[99] w-full sm:w-96",onClick:s[3]||(s[3]=a=>w.value=!1)})):q("",!0),c(ve,{name:"slide-up",onEnter:ee,onLeave:te},{default:S(()=>[w.value?(l(),r("div",{key:0,ref:"modal",class:"w-full sm:w-96 fixed bottom-0 left-0 h-[85vh] bg-white border-t border-gray-300 shadow-lg z-[100] flex flex-col touch-area",onTouchstart:Q,onTouchmove:X,onTouchend:Z},[Ft,e("div",Yt,[(l(!0),r(W,null,G(P.value,(a,n)=>(l(),r("div",{key:n,class:"flex p-2 justify-center"},[e("div",zt,[c(d(j),{class:"truncate w-[5rem]",options:a.options,modelValue:a.selectedPerson,"onUpdate:modelValue":f=>a.selectedPerson=f,placeholder:"Field"},null,8,["options","modelValue","onUpdate:modelValue"])]),e("div",Dt,[c(d(j),{class:"truncate w-[5rem]",options:ie,modelValue:a.selectedCondition,"onUpdate:modelValue":f=>a.selectedCondition=f,placeholder:"Equals","hide-search":"true"},null,8,["modelValue","onUpdate:modelValue"])]),e("div",Ut,[c(d(U),{class:"truncate w-[5rem]",type:"text",size:"sm",variant:"subtle",placeholder:"value",modelValue:a.value,"onUpdate:modelValue":f=>a.value=f},null,8,["modelValue","onUpdate:modelValue"])]),e("div",jt,[c(d(g),{name:"x",class:"w-5 h-5 text-gray-600 hover:text-black",onClick:f=>ne(n)},null,8,["onClick"])])]))),128))]),e("div",Rt,[c(d(I),{variant:"solid",class:"w-[4rem]",onClick:ue},{default:S(()=>[T("Add")]),_:1}),c(d(I),{class:"ml-auto",variant:"solid",onClick:le},{default:S(()=>[T(" Confirm ")]),_:1}),c(d(I),{class:"ml-2",onClick:s[4]||(s[4]=a=>w.value=!1)},{default:S(()=>[T(" Close ")]),_:1})])],544)):q("",!0)]),_:1})]))}},Kt=J(At,[["__scopeId","data-v-69e9dc6a"]]);export{Kt as default};
import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./index-JhL3uwfD.js";const o=_.forwardRef(({size:z="medium",variant:b="default",loading:j=!1,className:I,...T},B)=>{const C={small:{height:"24px",fontSize:"12px"},medium:{height:"42px",fontSize:"15px"},large:{height:"60px",fontSize:"18px"}},L={default:{backgroundColor:"var(--color-white-white)",color:"var(--color-grey-600-text)"},inverted:{backgroundColor:"var(--color-grey-page-1)",color:"var(--color-white-white)"}};return e.jsxs("div",{ref:B,className:I,style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",...C[z],...L[b],opacity:j?.5:1},...T,children:[e.jsx("span",{style:{fontFamily:"var(--font-white-white-status-bar)",fontWeight:590},children:"9:41"}),e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:"var(--font-white-white-container)",marginRight:"10px"},children:"􀙇"}),e.jsx("span",{style:{fontFamily:"var(--font-white-white-container)"},children:"􀛨"})]})]})});o.displayName="StatusBar";o.__docgenInfo={description:"",methods:[],displayName:"StatusBar",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`The size of the status bar
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'inverted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'inverted'"}]},description:`The variant of the status bar
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Whether the status bar is in a loading state
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const F={title:"Components/StatusBar",component:o,args:{size:"medium",variant:"default",loading:!1}},a={},r={args:{size:"small"}},t={args:{size:"large"}},s={args:{variant:"inverted"}},n={args:{loading:!0}};var l,i,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,u,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,f,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,v,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'inverted'
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,S,w;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const R=["Default","Small","Large","Inverted","Loading"];export{a as Default,s as Inverted,t as Large,n as Loading,r as Small,R as __namedExportsOrder,F as default};

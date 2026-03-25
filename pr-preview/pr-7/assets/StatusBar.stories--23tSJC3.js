import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-JhL3uwfD.js";const n=I.forwardRef(({size:h="medium",variant:y="default",time:S,className:z,...b},j)=>{const T={small:{height:"30px",fontSize:"12px"},medium:{height:"42px",fontSize:"15px"},large:{height:"54px",fontSize:"18px"}},w={default:{backgroundColor:"var(--color-grey-100)",color:"var(--color-grey-600-text)"},inverted:{backgroundColor:"var(--color-grey-page-1)",color:"var(--color-white-white)"}},C={display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",boxSizing:"border-box",...T[h],...w[y]};return e.jsxs("div",{ref:j,className:z,style:C,...b,children:[e.jsx("span",{children:S}),e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{style:{marginRight:"8px"},children:"􀙇"})," ",e.jsx("span",{children:"􀛨"})," "]})]})});n.displayName="StatusBar";n.__docgenInfo={description:"",methods:[],displayName:"StatusBar",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`The size of the status bar
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'inverted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'inverted'"}]},description:`The variant of the status bar
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},time:{required:!0,tsType:{name:"string"},description:"The current time to display"},className:{required:!1,tsType:{name:"string"},description:"Custom class name for styling overrides"}},composes:["Omit"]};const _={title:"Components/StatusBar",component:n,args:{time:"9:41"}},a={args:{size:"medium",variant:"default"}},r={args:{size:"medium",variant:"inverted"}},t={args:{size:"small",variant:"default"}},s={args:{size:"large",variant:"default"}};var i,l,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    variant: 'default'
  }
}`,...(o=(l=a.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    variant: 'inverted'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,p,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'small',
    variant: 'default'
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,v,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'large',
    variant: 'default'
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const E=["Default","Inverted","Small","Large"];export{a as Default,r as Inverted,s as Large,t as Small,E as __namedExportsOrder,_ as default};

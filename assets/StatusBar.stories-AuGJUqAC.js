import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as I}from"./index-JhL3uwfD.js";const n=I.forwardRef(({time:x="9:41",size:y="medium",variant:w="default",className:S,...z},b)=>{const j={default:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",backgroundColor:"var(--color-white-white)",color:"var(--color-grey-600-text)",fontFamily:"var(--font-white-white-status-bar)",fontSize:"15px",fontWeight:600},inverted:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",backgroundColor:"var(--color-grey-page-1)",color:"var(--color-white-white)",fontFamily:"var(--font-white-white-status-bar)",fontSize:"15px",fontWeight:600}},T={small:{height:"32px"},medium:{height:"42px"},large:{height:"52px"}};return e.jsxs("div",{ref:b,className:S,style:{...j[w],...T[y]},...z,children:[e.jsx("span",{children:x}),e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{style:{marginRight:"8px"},children:"􀙇"})," ",e.jsx("span",{children:"􀛨"})," "]})]})});n.displayName="StatusBar";n.__docgenInfo={description:"",methods:[],displayName:"StatusBar",props:{time:{required:!1,tsType:{name:"string"},description:`The time to display on the status bar.
@default '9:41'`,defaultValue:{value:"'9:41'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`The size of the status bar.
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'inverted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'inverted'"}]},description:`The variant of the status bar.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for custom styling."}}};const q={title:"Components/StatusBar",component:n,args:{time:"9:41",size:"medium",variant:"default"}},a={},t={args:{variant:"inverted"}},r={args:{size:"small"}},s={args:{size:"large"}};var l,i,o;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'inverted'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,p,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,h,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const B=["Default","Inverted","Small","Large"];export{a as Default,t as Inverted,s as Large,r as Small,B as __namedExportsOrder,q as default};

import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-JhL3uwfD.js";const T={sm:{height:"30px",fontSize:"12px"},md:{height:"42px",fontSize:"15px"},lg:{height:"54px",fontSize:"18px"}},q={light:{backgroundColor:"var(--color-white-white)",color:"var(--color-grey-600-text)"},dark:{backgroundColor:"var(--color-grey-page-1)",color:"var(--color-white-white)"}},i=j.forwardRef(({size:x="md",variant:y="light",time:S="9:41",className:z,...w},k)=>{const b={display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",boxSizing:"border-box",...T[x],...q[y]};return e.jsxs("div",{ref:k,style:b,className:z,...w,children:[e.jsx("span",{style:{fontFamily:"var(--font-white-white-status-bar)",fontWeight:600},children:S}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("span",{style:{fontFamily:"var(--font-white-white-container)",fontSize:"17px"},children:"􀙇"}),e.jsx("span",{style:{fontFamily:"var(--font-white-white-container)",fontSize:"17px"},children:"􀛨"})]})]})});i.displayName="StatusBar";i.__docgenInfo={description:"",methods:[],displayName:"StatusBar",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the status bar.
'sm' for small, 'md' for medium, 'lg' for large.`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:`The variant of the status bar.
'light' for light theme, 'dark' for dark theme.`,defaultValue:{value:"'light'",computed:!1}},time:{required:!1,tsType:{name:"string"},description:"The current time to display.",defaultValue:{value:"'9:41'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for custom styling."}},composes:["Omit"]};const L={title:"Components/StatusBar",component:i,args:{time:"9:41"}},a={args:{variant:"light",size:"md"}},r={args:{variant:"dark",size:"md"}},t={args:{variant:"light",size:"sm"}},s={args:{variant:"dark",size:"lg"}};var n,o,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    size: 'md'
  }
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var m,d,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'dark',
    size: 'md'
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,g,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    size: 'sm'
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,f,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'dark',
    size: 'lg'
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const N=["Light","Dark","Small","Large"];export{r as Dark,s as Large,a as Light,t as Small,N as __namedExportsOrder,L as default};

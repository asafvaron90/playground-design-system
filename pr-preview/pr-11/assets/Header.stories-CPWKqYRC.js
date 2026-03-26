import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-JhL3uwfD.js";const o=C.forwardRef(({title:k,onBack:n,size:x="medium",variant:b="primary",className:z,...S},B)=>{const w={small:{height:"40px",fontSize:"var(--font-label-sml)"},medium:{height:"60px",fontSize:"var(--font-headline-reg-16-med)"},large:{height:"80px",fontSize:"var(--font-headline-med-18-med)"}},T={primary:{backgroundColor:"var(--color-home)",color:"var(--color-white-white)"},secondary:{backgroundColor:"var(--color-grey-2)",color:"var(--color-grey-600-text)"}},j=()=>{n&&n()};return s.jsxs("div",{ref:B,style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",...w[x],...T[b]},className:z,...S,children:[n&&s.jsx("button",{onClick:j,style:{background:"none",border:"none",cursor:"pointer",color:"inherit"},children:"← Back"}),s.jsx("span",{children:k})]})});o.displayName="Header";o.__docgenInfo={description:"",methods:[],displayName:"Header",props:{title:{required:!0,tsType:{name:"string"},description:"The title to display in the header."},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional back button click handler."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Optional size of the header.",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"Optional variant of the header.",defaultValue:{value:"'primary'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for custom styling."}}};const N={title:"Components/Header",component:o,args:{title:"Page Title"}},e={args:{variant:"primary",size:"medium",onBack:()=>alert("Back button clicked")}},a={args:{variant:"secondary",size:"medium",onBack:()=>alert("Back button clicked")}},r={args:{variant:"primary",size:"large"}},t={args:{variant:"secondary",size:"small"}};var i,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    onBack: () => alert('Back button clicked')
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'medium',
    onBack: () => alert('Back button clicked')
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large'
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,f,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'small'
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const O=["Primary","Secondary","Large","Small"];export{r as Large,e as Primary,a as Secondary,t as Small,O as __namedExportsOrder,N as default};

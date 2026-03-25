import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{R}from"./index-JhL3uwfD.js";const i=R.forwardRef(({title:z,size:L="md",variant:T="default",isLoading:N=!1,className:j,...w},q)=>{const B={sm:{height:"40px",fontSize:"14px"},md:{height:"50px",fontSize:"16px"},lg:{height:"60px",fontSize:"18px"}},k={default:{backgroundColor:"var(--color-grey-100)",color:"var(--color-grey-600-text)"},primary:{backgroundColor:"var(--color-home)",color:"var(--color-white-white)"}},C={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",boxSizing:"border-box",...B[L],...k[T]};return o.jsxs("div",{ref:q,style:C,className:j,...w,children:[o.jsx("button",{style:{background:"none",border:"none",cursor:"pointer"},children:"← Back"}),o.jsx("div",{children:N?"Loading...":z})]})});i.displayName="NavigationBar";i.__docgenInfo={description:"",methods:[],displayName:"NavigationBar",props:{title:{required:!0,tsType:{name:"string"},description:"The title to display in the navigation bar."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the navigation bar.
'sm' for small, 'md' for medium, 'lg' for large.`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"}]},description:`The variant of the navigation bar.
'default' for standard, 'primary' for primary styling.`,defaultValue:{value:"'default'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"If true, the navigation bar is in a loading state.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names to apply to the navigation bar."}}};const P={title:"Components/NavigationBar",component:i,args:{title:"Page Title",size:"md",variant:"default",isLoading:!1}},e={},a={args:{size:"sm"}},r={args:{size:"lg"}},s={args:{variant:"primary"}},t={args:{isLoading:!0}};var n,l,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,y,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,b,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const V=["Default","Small","Large","Primary","Loading"];export{e as Default,r as Large,t as Loading,s as Primary,a as Small,V as __namedExportsOrder,P as default};

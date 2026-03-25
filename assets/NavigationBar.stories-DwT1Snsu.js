import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as B}from"./index-JhL3uwfD.js";const n=B.forwardRef(({title:h,size:b="md",variant:x="primary",children:z,className:S,...N},T)=>{const j={primary:{backgroundColor:"var(--color-home)",color:"var(--color-white-white)"},secondary:{backgroundColor:"var(--color-grey-buttons-bg)",color:"var(--color-grey-secondary-body-text)"}},w={sm:{height:"40px",fontSize:"var(--font-label-sml)"},md:{height:"56px",fontSize:"var(--font-headline-reg-16-reg)"},lg:{height:"72px",fontSize:"var(--font-headline-med-18-med)"}},q={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",...j[x],...w[b]};return o.jsxs("div",{ref:T,className:S,style:q,...N,children:[o.jsx("span",{children:h}),o.jsx("div",{children:z})]})});n.displayName="NavigationBar";n.__docgenInfo={description:"",methods:[],displayName:"NavigationBar",props:{title:{required:!0,tsType:{name:"string"},description:"The title to display in the navigation bar."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the navigation bar.
'sm' for small, 'md' for medium, 'lg' for large.`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:`The variant of the navigation bar.
'primary' for main navigation, 'secondary' for sub-navigation.`,defaultValue:{value:"'primary'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Additional icons or elements to display in the navigation bar."},className:{required:!1,tsType:{name:"string"},description:"Additional class names to apply to the navigation bar."}}};const E={title:"Components/NavigationBar",component:n,args:{title:"Home"}},e={args:{variant:"primary",size:"md"}},a={args:{variant:"secondary",size:"md"}},r={args:{size:"sm"}},s={args:{size:"lg"}};var t,i,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,d,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md'
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,g,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,v,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const R=["Primary","Secondary","Small","Large"];export{s as Large,e as Primary,a as Secondary,r as Small,R as __namedExportsOrder,E as default};

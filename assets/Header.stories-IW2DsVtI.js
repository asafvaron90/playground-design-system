import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{R as _}from"./index-JhL3uwfD.js";const i=_.forwardRef(({title:T,size:w="md",variant:j="primary",disabled:n=!1,className:k,...R},q)=>{const C={sm:{fontSize:"var(--font-label-sml)",padding:"8px 16px"},md:{fontSize:"var(--font-headline-reg-16-reg)",padding:"12px 20px"},lg:{fontSize:"var(--font-headline-med-18-med)",padding:"16px 24px"}},H={primary:{backgroundColor:"var(--color-home)",color:"var(--color-white-white)"},secondary:{backgroundColor:"var(--color-grey-2)",color:"var(--color-grey-600-text)"}},P={marginRight:"16px",cursor:n?"not-allowed":"pointer",color:n?"var(--color-disabled)":"inherit"};return o.jsxs("div",{ref:q,className:k,style:{display:"flex",alignItems:"center",justifyContent:"space-between",...C[w],...H[j]},...R,children:[o.jsx("button",{style:P,disabled:n,"aria-label":"Back",children:"←"}),o.jsx("span",{children:T})]})});i.displayName="Header";i.__docgenInfo={description:"",methods:[],displayName:"Header",props:{title:{required:!0,tsType:{name:"string"},description:"The title to display in the header."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the header.
- 'sm': Small
- 'md': Medium
- 'lg': Large`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:`The variant of the header.
- 'primary': Primary variant
- 'secondary': Secondary variant`,defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the back button is disabled.",defaultValue:{value:"false",computed:!1}}}};const B={title:"Components/Header",component:i,args:{title:"Page Title"}},e={args:{variant:"primary",size:"md",disabled:!1}},a={args:{variant:"secondary",size:"md",disabled:!1}},r={args:{size:"sm"}},s={args:{size:"lg"}},t={args:{disabled:!0}};var l,d,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md',
    disabled: false
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,y,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,h,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,S,z;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(z=(S=t.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const D=["Primary","Secondary","Small","Large","Disabled"];export{t as Disabled,s as Large,e as Primary,a as Secondary,r as Small,D as __namedExportsOrder,B as default};

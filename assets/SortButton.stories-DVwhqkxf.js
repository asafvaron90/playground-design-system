import{j as E}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-JhL3uwfD.js";const N={primary:{backgroundColor:"var(--color-home)",color:"var(--color-white-white)"},secondary:{backgroundColor:"var(--color-grey-2)",color:"var(--color-grey-600-text)"}},R={sm:{fontSize:"var(--font-label-sml)",padding:"4px 8px"},md:{fontSize:"var(--font-label-large-14-med)",padding:"8px 16px"},lg:{fontSize:"var(--font-headline-med-18-med)",padding:"12px 24px"}},n=I.forwardRef(({size:h="md",variant:w="primary",disabled:t=!1,className:T,children:j,...q},B)=>{const C=N[w],_=R[h];return E.jsx("button",{ref:B,style:{...C,..._,display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:"4px",cursor:t?"not-allowed":"pointer",opacity:t?.6:1},className:T,disabled:t,...q,children:j})});n.displayName="SortButton";n.__docgenInfo={description:"",methods:[],displayName:"SortButton",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the button.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:`The variant of the button.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the button will be disabled.
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name for custom styling."}},composes:["Omit"]};const D={title:"Components/SortButton",component:n,args:{children:"Sort"}},e={args:{variant:"primary",size:"md"}},r={args:{variant:"secondary",size:"md"}},a={args:{size:"sm"}},s={args:{size:"lg"}},o={args:{disabled:!0}};var l,i,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,v,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var b,x,z;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const L=["Primary","Secondary","Small","Large","Disabled"];export{o as Disabled,s as Large,e as Primary,r as Secondary,a as Small,L as __namedExportsOrder,D as default};

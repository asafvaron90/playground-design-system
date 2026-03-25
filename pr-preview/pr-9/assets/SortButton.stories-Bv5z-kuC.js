import{j as E}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-JhL3uwfD.js";const L={sm:{padding:"4px 8px",fontSize:"var(--font-label-sml)"},md:{padding:"8px 16px",fontSize:"var(--font-label-large-14-med)"},lg:{padding:"12px 24px",fontSize:"var(--font-headline-reg-16-med)"}},P={primary:{backgroundColor:"var(--color-liam-harris)",color:"var(--color-white-white)"},secondary:{backgroundColor:"var(--color-grey-2)",color:"var(--color-grey-600-text)"}},n=I.forwardRef(({size:h="md",variant:w="primary",disabled:t=!1,className:T,children:N,...j},q)=>{const B=L[h],C=P[w],_={display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:"4px",cursor:t?"not-allowed":"pointer",opacity:t?.6:1,...B,...C};return E.jsx("button",{ref:q,style:_,className:T,disabled:t,...j,children:N})});n.displayName="SortButton";n.__docgenInfo={description:"",methods:[],displayName:"SortButton",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the button.
- 'sm': Small
- 'md': Medium
- 'lg': Large`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:`The variant of the button.
- 'primary': Primary style
- 'secondary': Secondary style`,defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"If true, the button will be disabled.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for custom styling."}},composes:["Omit"]};const k={title:"Components/SortButton",component:n,args:{children:"Sort by Name"}},e={args:{variant:"primary",size:"md"}},r={args:{variant:"secondary",size:"md"}},a={args:{size:"sm"}},s={args:{size:"lg"}},o={args:{disabled:!0}};var l,i,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,y,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,v,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var b,x,z;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const D=["Primary","Secondary","Small","Large","Disabled"];export{o as Disabled,s as Large,e as Primary,r as Secondary,a as Small,D as __namedExportsOrder,k as default};

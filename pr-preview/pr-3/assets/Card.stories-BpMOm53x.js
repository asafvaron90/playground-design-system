import{j as S}from"./jsx-runtime-D_zvdyIk.js";import{R as h}from"./index-JhL3uwfD.js";const C={sm:{padding:"8px"},md:{padding:"16px"},lg:{padding:"24px"}},z={primary:{backgroundColor:"var(--color-home)"},secondary:{backgroundColor:"var(--color-grey-100)"}},T={default:{},disabled:{backgroundColor:"var(--color-disabled)",pointerEvents:"none",opacity:.6}},s=h.forwardRef(({size:p="md",variant:f="primary",state:y="default",className:g,...v},b)=>{const x={...C[p],...z[f],...T[y],borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",transition:"background-color 0.3s"};return S.jsx("div",{ref:b,style:x,className:g,...v})});s.displayName="Card";s.__docgenInfo={description:"",methods:[],displayName:"Card",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the card.
'sm' for small, 'md' for medium, 'lg' for large.`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:`The variant of the card.
'primary' for primary, 'secondary' for secondary.`,defaultValue:{value:"'primary'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'disabled'"}]},description:`The state of the card.
'default' for default, 'disabled' for disabled.`,defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for custom styling."}}};const k={title:"Components/Card",component:s,args:{children:"Card Content"}},a={args:{size:"sm",variant:"primary",state:"default"}},e={args:{size:"md",variant:"secondary",state:"default"}},r={args:{size:"lg",variant:"primary",state:"disabled"}};var t,o,d;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'primary',
    state: 'default'
  }
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'secondary',
    state: 'default'
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,c,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    variant: 'primary',
    state: 'disabled'
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const q=["SmallPrimary","MediumSecondary","LargeDisabled"];export{r as LargeDisabled,e as MediumSecondary,a as SmallPrimary,q as __namedExportsOrder,k as default};

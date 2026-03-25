import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{R as k}from"./index-JhL3uwfD.js";const l=k.forwardRef(({size:R="medium",variant:q="primary",disabled:n=!1,className:B,children:_,...I},L)=>{const N={primary:{backgroundColor:"var(--color-home)",color:"var(--color-white-white)"},secondary:{backgroundColor:"var(--color-grey-2)",color:"var(--color-grey-600-text)"}},V={small:{padding:"4px 8px",fontSize:"var(--font-label-sml-*)"},medium:{padding:"8px 16px",fontSize:"var(--font-label-large-14-med-*)"},large:{padding:"12px 24px",fontSize:"var(--font-headline-reg-16-med-*)"}};return i.jsxs("button",{ref:L,className:B,style:{...N[q],...V[R],border:"none",borderRadius:"4px",cursor:n?"not-allowed":"pointer",opacity:n?.5:1,display:"flex",alignItems:"center",justifyContent:"center"},disabled:n,...I,children:[_,i.jsx("span",{style:{marginLeft:"8px"},children:"▼"})]})});l.displayName="SortButton";l.__docgenInfo={description:"",methods:[],displayName:"SortButton",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"The size of the button.",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"The variant of the button.",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"If true, the button will be disabled.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom class name for styling overrides."}},composes:["Omit"]};const M={title:"Components/SortButton",component:l,args:{children:"Sort"}},e={args:{variant:"primary"}},r={args:{variant:"secondary"}},a={args:{size:"small"}},s={args:{size:"medium"}},o={args:{size:"large"}},t={args:{disabled:!0}};var m,c,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,f,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,b,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,z,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(w=(z=o.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var T,j,C;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(C=(j=t.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const O=["Primary","Secondary","Small","Medium","Large","Disabled"];export{t as Disabled,o as Large,s as Medium,e as Primary,r as Secondary,a as Small,O as __namedExportsOrder,M as default};

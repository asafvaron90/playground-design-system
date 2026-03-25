import{j as R}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-JhL3uwfD.js";const k={sm:{fontSize:"var(--font-label-sml)",padding:"4px 8px"},md:{fontSize:"var(--font-label-large-14-med)",padding:"8px 16px"},lg:{fontSize:"var(--font-headline-reg-16-med)",padding:"12px 24px"}},A={primary:{backgroundColor:"var(--color-home)",color:"var(--color-white-white)"},secondary:{backgroundColor:"var(--color-grey-buttons-bg)",color:"var(--color-grey-2)"}},i=V.forwardRef(({size:q="md",variant:B="primary",disabled:n=!1,className:C,children:_,...E},I)=>{const N={...k[q],...A[B],border:"none",borderRadius:"4px",cursor:n?"not-allowed":"pointer",opacity:n?.5:1,display:"flex",alignItems:"center",justifyContent:"center"};return R.jsx("button",{ref:I,className:C,style:N,disabled:n,...E,children:_})});i.displayName="SortButton";i.__docgenInfo={description:"A button component with text and an icon, used for sorting options.",methods:[],displayName:"SortButton",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the button.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:`The variant of the button.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the button will be disabled.
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names to apply to the button."}}};const M={title:"Components/SortButton",component:i,args:{children:"Sort"}},e={args:{variant:"primary"}},r={args:{variant:"secondary"}},a={args:{size:"sm"}},s={args:{size:"md"}},o={args:{size:"lg"}},t={args:{disabled:!0}};var l,d,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,b,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,h,z;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(z=(h=o.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var w,T,j;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(j=(T=t.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const P=["Primary","Secondary","Small","Medium","Large","Disabled"];export{t as Disabled,o as Large,s as Medium,e as Primary,r as Secondary,a as Small,P as __namedExportsOrder,M as default};

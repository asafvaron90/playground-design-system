import{j as D}from"./jsx-runtime-D_zvdyIk.js";import{R as E}from"./index-JhL3uwfD.js";const l=E.forwardRef(({size:j="md",variant:q="primary",disabled:n=!1,className:B,children:C,..._},I)=>{const N={sm:{fontSize:"var(--font-label-sml)",padding:"4px 8px"},md:{fontSize:"var(--font-label-large-14-med)",padding:"8px 16px"},lg:{fontSize:"var(--font-headline-reg-16-med)",padding:"12px 24px"}},V={primary:{backgroundColor:"var(--color-buttons)",color:"var(--color-white-white)"},secondary:{backgroundColor:"var(--color-grey-buttons-bg)",color:"var(--color-grey-secondary-body-text)"}},k={...N[j],...V[q],border:"none",borderRadius:"4px",cursor:n?"not-allowed":"pointer",opacity:n?.6:1,display:"flex",alignItems:"center",justifyContent:"center"};return D.jsx("button",{ref:I,className:B,style:k,disabled:n,..._,children:C})});l.displayName="SortButton";l.__docgenInfo={description:"",methods:[],displayName:"SortButton",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the button.
'sm' for small, 'md' for medium, 'lg' for large.`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:`The variant of the button.
'primary' for primary style, 'secondary' for secondary style.`,defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"If true, the button will be disabled.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional class name for styling overrides."}}};const O={title:"Components/SortButton",component:l,args:{children:"Sort"}},e={args:{variant:"primary"}},r={args:{variant:"secondary"}},a={args:{size:"sm"}},s={args:{size:"md"}},o={args:{size:"lg"}},t={args:{disabled:!0}};var i,m,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,y,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,b,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,z,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(h=(z=o.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var w,T,R;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(R=(T=t.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const P=["Primary","Secondary","Small","Medium","Large","Disabled"];export{t as Disabled,o as Large,s as Medium,e as Primary,r as Secondary,a as Small,P as __namedExportsOrder,O as default};

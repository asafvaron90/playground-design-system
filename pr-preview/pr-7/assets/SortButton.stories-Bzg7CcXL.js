import{j as E}from"./jsx-runtime-D_zvdyIk.js";import{r as N}from"./index-JhL3uwfD.js";const t=N.forwardRef(({size:w="md",variant:T="primary",loading:n=!1,className:j,children:q,...i},B)=>{const C={sm:{fontSize:"var(--font-label-sml)",padding:"4px 8px"},md:{fontSize:"var(--font-label-large-14-med)",padding:"8px 16px"},lg:{fontSize:"var(--font-headline-med-18-med)",padding:"12px 24px"}},L={primary:{backgroundColor:"var(--color-home)",color:"var(--color-white-white)"},secondary:{backgroundColor:"var(--color-grey-100)",color:"var(--color-grey-600-text)"}},_=n?{opacity:.5,cursor:"not-allowed"}:{},k={...C[w],...L[T],..._,border:"none",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",transition:"background-color 0.3s",...i.style};return E.jsx("button",{ref:B,className:j,style:k,disabled:n,...i,children:q})});t.displayName="SortButton";t.__docgenInfo={description:"",methods:[],displayName:"SortButton",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the button
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:`The variant of the button
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:`Whether the button is in a loading state
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional class name for styling overrides"}},composes:["Omit"]};const V={title:"Components/SortButton",component:t,args:{children:"Sort"}},e={args:{variant:"primary",size:"md"}},r={args:{variant:"secondary",size:"md"}},a={args:{size:"sm"}},s={args:{size:"lg"}},o={args:{loading:!0}};var l,d,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,y,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,S,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var z,b,h;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const I=["Primary","Secondary","Small","Large","Loading"];export{s as Large,o as Loading,e as Primary,r as Secondary,a as Small,I as __namedExportsOrder,V as default};

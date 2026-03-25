import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as H}from"./index-JhL3uwfD.js";const S=H.forwardRef(({title:b,size:T="md",variant:L="primary",isLoading:j=!1,className:w,...q},C)=>{const _={sm:{fontSize:"var(--font-label-sml)",padding:"8px 16px"},md:{fontSize:"var(--font-headline-reg-16-reg)",padding:"12px 20px"},lg:{fontSize:"var(--font-headline-med-18-med)",padding:"16px 24px"}},k={primary:{backgroundColor:"var(--color-home)",color:"var(--color-white-white)"},secondary:{backgroundColor:"var(--color-grey-100)",color:"var(--color-grey-600-text)"}},E={display:"flex",alignItems:"center",justifyContent:"space-between",..._[T],...k[L]};return n.jsxs("div",{ref:C,className:w,style:E,...q,children:[n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer"},children:"←"}),n.jsx("span",{children:j?"Loading...":b})]})});S.__docgenInfo={description:"",methods:[],displayName:"Header",props:{title:{required:!0,tsType:{name:"string"},description:"The title text to display in the header."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the header.
'sm' for small, 'md' for medium, 'lg' for large.`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:`The variant of the header.
'primary' for main headers, 'secondary' for sub-headers.`,defaultValue:{value:"'primary'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"If true, the header is in a loading state.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for custom styling."}},composes:["Omit"]};const P={title:"Components/Header",component:S,args:{title:"Page Title"}},e={args:{variant:"primary",size:"md"}},r={args:{variant:"secondary",size:"md"}},a={args:{size:"sm"}},s={args:{size:"lg"}},o={args:{isLoading:!0}};var t,i,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,m,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md'
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,y,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,x,z;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const V=["Primary","Secondary","Small","Large","Loading"];export{s as Large,o as Loading,e as Primary,r as Secondary,a as Small,V as __namedExportsOrder,P as default};

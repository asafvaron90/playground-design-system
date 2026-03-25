import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{R as H}from"./index-JhL3uwfD.js";const l=H.forwardRef(({title:j,onBack:d,size:c="md",variant:q="primary",disabled:n=!1,className:R,...B},C)=>{const o={base:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 20px",backgroundColor:q==="primary"?"var(--color-home)":"var(--color-grey-2)",color:"var(--color-white-white)",cursor:n?"not-allowed":"pointer",opacity:n?.5:1},title:{fontSize:c==="sm"?"var(--font-label-sml)":c==="lg"?"var(--font-headline-med-18-med-*)":"var(--font-headline-reg-16-reg-*)"},backButton:{marginRight:"10px",fontSize:"var(--font-label-large-14-med-*)"}};return i.jsxs("div",{ref:C,className:R,style:o.base,...B,children:[d&&i.jsx("button",{style:o.backButton,onClick:d,disabled:n,children:"Back"}),i.jsx("div",{style:o.title,children:j})]})});l.displayName="Header";l.__docgenInfo={description:"",methods:[],displayName:"Header",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"The title displayed in the header."},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional callback for the back button."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant of the header.",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"Visual variant of the header.",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the header is in a disabled state.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names for styling."}},composes:["Omit"]};const _={title:"Components/Header",component:l,args:{title:"Page Title",onBack:()=>alert("Back button clicked")}},e={args:{variant:"primary",size:"md"}},a={args:{variant:"secondary",size:"md"}},r={args:{size:"lg"}},s={args:{size:"sm"}},t={args:{disabled:!0}};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,y,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md'
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,h,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,x,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(z=(x=s.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var k,w,T;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(T=(w=t.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const O=["Primary","Secondary","Large","Small","Disabled"];export{t as Disabled,r as Large,e as Primary,a as Secondary,s as Small,O as __namedExportsOrder,_ as default};

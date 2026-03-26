import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-JhL3uwfD.js";const l=D.forwardRef(({label:q,icon:N,size:B="medium",variant:C="primary",disabled:n=!1,className:_,...E},I)=>{const L={small:{fontSize:"var(--font-label-sml-*)",padding:"4px 8px"},medium:{fontSize:"var(--font-label-large-14-med-*)",padding:"8px 16px"},large:{fontSize:"var(--font-headline-reg-16-med-*)",padding:"12px 24px"}},V={primary:{backgroundColor:"var(--color-buttons)",color:"var(--color-white-white)"},secondary:{backgroundColor:"var(--color-grey-buttons-bg)",color:"var(--color-grey-600-text)"}},k={display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:"4px",cursor:n?"not-allowed":"pointer",opacity:n?.6:1,...L[B],...V[C]};return i.jsxs("button",{ref:I,style:k,className:_,disabled:n,...E,children:[N,i.jsx("span",{style:{marginLeft:"8px"},children:q})]})});l.displayName="SortButton";l.__docgenInfo={description:"",methods:[],displayName:"SortButton",props:{label:{required:!0,tsType:{name:"string"},description:"The label text of the button."},icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The icon to be displayed alongside the label."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"The size of the button.",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"The variant of the button.",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"If true, the button will be disabled.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for custom styling."}},composes:["Omit"]};const P={title:"Components/SortButton",component:l,args:{label:"Sort",icon:i.jsx("span",{children:"⇅"})}},e={args:{variant:"primary"}},r={args:{variant:"secondary"}},a={args:{size:"small"}},s={args:{size:"medium"}},t={args:{size:"large"}},o={args:{disabled:!0}};var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,f,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var v,S,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var h,z,T;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(T=(z=t.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var w,R,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(j=(R=o.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const A=["Primary","Secondary","Small","Medium","Large","Disabled"];export{o as Disabled,t as Large,s as Medium,e as Primary,r as Secondary,a as Small,A as __namedExportsOrder,P as default};

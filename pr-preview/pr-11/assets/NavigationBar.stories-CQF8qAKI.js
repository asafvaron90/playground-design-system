import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-JhL3uwfD.js";const z=P.forwardRef(({title:S,size:T="md",variant:k="primary",state:B="default",className:w,backButtonContent:N="Back",...j},q)=>{const C={sm:{height:"40px",fontSize:"14px"},md:{height:"50px",fontSize:"16px"},lg:{height:"60px",fontSize:"18px"}},E={primary:{backgroundColor:"var(--color-home)",color:"var(--color-white-white)"},secondary:{backgroundColor:"var(--color-grey-page-1)",color:"var(--color-grey-600-text)"}},V={default:{},disabled:{opacity:.5,pointerEvents:"none"}},_={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",...C[T],...E[k],...V[B]};return n.jsxs("div",{ref:q,style:_,className:w,...j,children:[n.jsx("button",{style:{border:"none",background:"none",color:"inherit",cursor:"pointer"},children:N}),n.jsx("span",{children:S})]})});z.__docgenInfo={description:"",methods:[],displayName:"NavigationBar",props:{title:{required:!0,tsType:{name:"string"},description:"The title to display in the navigation bar."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the navigation bar.
'sm' for small, 'md' for medium, 'lg' for large.`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:`The variant of the navigation bar.
'primary' or 'secondary'.`,defaultValue:{value:"'primary'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'disabled'"}]},description:`The state of the navigation bar.
'default' or 'disabled'.`,defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for custom styling."},backButtonContent:{required:!1,tsType:{name:"ReactNode"},description:"The back button content, typically an icon or text.",defaultValue:{value:"'Back'",computed:!1}}}};const I={title:"Components/NavigationBar",component:z,args:{title:"Page Title",backButtonContent:"Back"}},e={args:{variant:"primary",size:"md",state:"default"}},a={args:{variant:"secondary",size:"md",state:"default"}},r={args:{variant:"primary",size:"md",state:"disabled"}},t={args:{variant:"primary",size:"lg",state:"default"}},s={args:{variant:"primary",size:"sm",state:"default"}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    state: 'default'
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md',
    state: 'default'
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    state: 'disabled'
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,f,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    state: 'default'
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,h,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    state: 'default'
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const L=["Primary","Secondary","Disabled","Large","Small"];export{r as Disabled,t as Large,e as Primary,a as Secondary,s as Small,L as __namedExportsOrder,I as default};

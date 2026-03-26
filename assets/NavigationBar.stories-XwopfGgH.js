import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as _}from"./index-JhL3uwfD.js";const i=_.forwardRef(({title:x,size:T="md",variant:j="default",state:D="active",className:N,...w},q)=>{const B={sm:{height:"40px",fontSize:"var(--font-label-sml-*)"},md:{height:"50px",fontSize:"var(--font-headline-reg-16-reg-*)"},lg:{height:"60px",fontSize:"var(--font-headline-med-18-med-*)"}},C={default:{backgroundColor:"var(--color-grey-100)"},primary:{backgroundColor:"var(--color-home)"}},P={active:{opacity:1},disabled:{opacity:.5,pointerEvents:"none"}},R={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",...B[T],...C[j],...P[D]};return n.jsxs("div",{ref:q,style:R,className:N,...w,children:[n.jsx("button",{style:{background:"none",border:"none",cursor:"pointer"},children:"←"}),n.jsx("span",{children:x})]})});i.displayName="NavigationBar";i.__docgenInfo={description:"",methods:[],displayName:"NavigationBar",props:{title:{required:!0,tsType:{name:"string"},description:"The title to display in the navigation bar."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the navigation bar.
- 'sm': Small
- 'md': Medium
- 'lg': Large`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"}]},description:`The variant of the navigation bar.
- 'default': Default styling
- 'primary': Primary styling`,defaultValue:{value:"'default'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'active' | 'disabled'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'disabled'"}]},description:`The state of the navigation bar.
- 'active': Active state
- 'disabled': Disabled state`,defaultValue:{value:"'active'",computed:!1}}}};const L={title:"Components/NavigationBar",component:i,args:{title:"Page Title"}},e={args:{variant:"default",size:"md",state:"active"}},a={args:{variant:"primary",size:"md",state:"active"}},t={args:{size:"sm"}},r={args:{size:"lg"}},s={args:{state:"disabled"}};var o,l,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    state: 'active'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,c,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    state: 'active'
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,g,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,y,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,S,z;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const V=["Default","Primary","Small","Large","Disabled"];export{e as Default,s as Disabled,r as Large,a as Primary,t as Small,V as __namedExportsOrder,L as default};

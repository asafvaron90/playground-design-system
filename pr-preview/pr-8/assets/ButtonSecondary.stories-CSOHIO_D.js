import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{R as U}from"./index-DCXu2c-y.js";import{B as X}from"./Button-DoEnHtwV.js";import{C as Y}from"./CircularProgress-DXkKEIgb.js";import"./DefaultPropsProvider-Dvarb5rE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-qaOHKnqS.js";import"./useTimeout-BCS2DETX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-O7DVlRIu.js";import"./isFocusVisible-B8k4qzLc.js";const Z={lg:{height:"44px",paddingLeft:"24px",paddingRight:"24px",gap:"8px"},md:{height:"40px",paddingLeft:"20px",paddingRight:"20px",gap:"8px"},sm:{height:"36px",paddingLeft:"16px",paddingRight:"16px",gap:"8px"},xs:{height:"32px",paddingLeft:"16px",paddingRight:"16px",gap:"4px"}},M=U.forwardRef(({onClick:_,onHover:A,isDisabled:H=!1,isLoading:c=!1,children:O,sx:P={},className:G,size:J="md",fullWidth:p=!1,icon:K},Q)=>l.jsxs(X,{ref:Q,onClick:_,onMouseEnter:A,disabled:H||c,className:G,sx:{display:"flex",alignItems:"center",justifyContent:p?"center":"flex-start",width:p?"100%":"auto",color:"var(--color-text-primary-base, #0354A6)",border:"1px solid var(--color-border-primary-bold-100, #0354A6)",borderRadius:"var(--radius-large, 12px)",fontSize:"var(--font-text-md-l-24-medium-size, 16px)",fontFamily:"var(--font-text-md-l-24-medium-family, Inter)",fontWeight:"var(--font-text-md-l-24-medium-weight, 500)",letterSpacing:"var(--font-body-md-letter-spacing, 0px)",lineHeight:"var(--font-body-md-line-height-24, 24px)",...Z[J],"&:hover":{backgroundColor:"rgba(3,84,166,0.05)"},'&:disabled, &[aria-disabled="true"]':{color:"var(--color-text-neutral-subtle-300, #8B939F)",borderColor:"var(--color-border-neutral-subtle-200, #E4E7EC)"},...P},children:[c?l.jsx(Y,{size:24}):K,O]}));M.__docgenInfo={description:"",methods:[],displayName:"ButtonSecondary",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Mouse enter handler"},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content slot"},sx:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"Style overrides",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Class overrides"},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"Button size",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width button",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon"}}};const ce={title:"Components/Button/Secondary",component:M,args:{children:"Click me"}},e={},r={args:{isLoading:!0}},a={args:{isDisabled:!0}},s={args:{icon:l.jsx("span",{children:"🔍"})}},t={args:{fullWidth:!0}},o={args:{size:"lg"}},n={args:{size:"md"}},i={args:{size:"sm"}},d={args:{size:"xs"}};var m,u,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,x,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,b,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,R,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: <span>🔍</span>
  }
}`,...(z=(R=s.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var w,C,L;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(L=(C=t.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var q,T,D;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(D=(T=o.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var E,B,W;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(W=(B=n.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var j,k,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(N=(k=i.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var F,I,V;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...(V=(I=d.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const pe=["Default","Loading","Disabled","WithIcon","FullWidth","Large","Medium","Small","ExtraSmall"];export{e as Default,a as Disabled,d as ExtraSmall,t as FullWidth,o as Large,r as Loading,n as Medium,i as Small,s as WithIcon,pe as __namedExportsOrder,ce as default};

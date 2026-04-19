import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{R as U}from"./index-DCXu2c-y.js";import{B as X}from"./Button-DoEnHtwV.js";import{C as Y}from"./CircularProgress-DXkKEIgb.js";import"./DefaultPropsProvider-Dvarb5rE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-qaOHKnqS.js";import"./useTimeout-BCS2DETX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-O7DVlRIu.js";import"./isFocusVisible-B8k4qzLc.js";const Z={lg:{height:"44px",paddingLeft:"24px",paddingRight:"24px",gap:"8px"},md:{height:"40px",paddingLeft:"20px",paddingRight:"20px",gap:"8px"},sm:{height:"36px",paddingLeft:"16px",paddingRight:"16px",gap:"8px"},xs:{height:"32px",paddingLeft:"16px",paddingRight:"16px",gap:"4px"}},l=U.forwardRef(({onClick:_,onHover:A,isDisabled:H,isLoading:p,children:O,sx:V,className:G,size:J="md",fullWidth:m=!1,icon:K},Q)=>c.jsxs(X,{ref:Q,onClick:_,onMouseEnter:A,disabled:H||p,className:G,sx:{display:"flex",alignItems:"center",justifyContent:m?"center":"flex-start",width:m?"100%":"auto",backgroundColor:"var(--color-background-primary-bold-200, #0354A6)",color:"var(--color-text-white-base, #FFFFFF)",borderRadius:"var(--radius-border-radius-lg, 12px)",fontSize:"var(--font-text-md-l-24-medium-size, 16px)",fontFamily:"var(--font-text-md-l-24-medium-family, Inter)",fontWeight:"var(--font-text-md-l-24-medium-weight, 500)",letterSpacing:"var(--font-body-md-letter-spacing, 0px)",lineHeight:"var(--font-body-md-line-height-24, 24px)",...Z[J],"&:hover":{backgroundColor:"var(--color-background-primary-bold-300, #064280)"},'&:disabled, &[aria-disabled="true"]':{backgroundColor:"var(--color-background-primary-bold-200, #0354A6)"},...V},children:[p?c.jsx(Y,{size:24,color:"inherit"}):K,O]}));l.displayName="ButtonPrimary";l.__docgenInfo={description:"",methods:[],displayName:"ButtonPrimary",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click event handler"},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Mouse enter event handler"},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button content"},sx:{required:!1,tsType:{name:"SxProps"},description:"Style overrides"},className:{required:!1,tsType:{name:"string"},description:"Class name overrides"},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"Button size",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width button",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon to display"}}};const le={title:"Components/Button/Primary",component:l,args:{children:"Click me"}},e={},r={args:{isLoading:!0}},a={args:{isDisabled:!0}},s={args:{icon:c.jsx("span",{children:"🔍"})}},t={args:{fullWidth:!0}},o={args:{size:"lg"}},i={args:{size:"md"}},n={args:{size:"sm"}},d={args:{size:"xs"}};var u,g,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,h,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,v,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var R,z,C;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    icon: <span>🔍</span>
  }
}`,...(C=(z=s.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var L,q,w;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(w=(q=t.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var F,T,k;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var B,D,N;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(N=(D=i.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var W,j,P;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(P=(j=n.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var E,I,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const pe=["Default","Loading","Disabled","WithIcon","FullWidth","Large","Medium","Small","ExtraSmall"];export{e as Default,a as Disabled,d as ExtraSmall,t as FullWidth,o as Large,r as Loading,i as Medium,n as Small,s as WithIcon,pe as __namedExportsOrder,le as default};

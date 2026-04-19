import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{R as X}from"./index-DCXu2c-y.js";import{B as Y}from"./Button-DoEnHtwV.js";import{C as Z}from"./CircularProgress-DXkKEIgb.js";import"./DefaultPropsProvider-Dvarb5rE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-qaOHKnqS.js";import"./useTimeout-BCS2DETX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-O7DVlRIu.js";import"./isFocusVisible-B8k4qzLc.js";const c=X.forwardRef(({onClick:V,onHover:_,isDisabled:A=!1,isLoading:m=!1,children:H,sx:P,className:O,fullWidth:G=!1,size:J="md",icon:K},Q)=>{const U={lg:{height:"44px",px:3,gap:"8px"},md:{height:"40px",px:2.5,gap:"8px"},sm:{height:"36px",px:2,gap:"8px"},xs:{height:"32px",px:2,gap:"4px"}}[J];return d.jsxs(Y,{ref:Q,onClick:V,onMouseEnter:_,disabled:A||m,fullWidth:G,className:O,sx:{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius-large, 12px)",border:"1px solid var(--color-border-primary-bold-100, #0354A6)",color:"var(--color-text-primary-base, #0354A6)",fontSize:"var(--font-text-md-l-24-medium-size, 16px)",fontFamily:"var(--font-text-md-l-24-medium-family, Inter)",fontWeight:"var(--font-text-md-l-24-medium-weight, 500)",letterSpacing:"var(--font-body-md-letter-spacing, 0px)",lineHeight:"var(--font-body-md-line-height-24, 24px)",backgroundColor:"transparent",transition:"background-color 0.3s","&:hover":{backgroundColor:"var(--color-background-state-interaction-hover-primary, #0354A6)"},'&:disabled, &[aria-disabled="true"]':{color:"var(--color-text-neutral-subtle-300, #8B939F)",borderColor:"var(--color-border-neutral-subtle-200, #E4E7EC)"},...U,...P},children:[m?d.jsx(Z,{size:24,color:"inherit"}):K,H]})});c.displayName="ButtonSecondary";c.__docgenInfo={description:"",methods:[],displayName:"ButtonSecondary",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the button."},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Mouse enter handler for hover state."},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disables the button if true.",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Shows a loading spinner if true.",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the button."},sx:{required:!1,tsType:{name:"SxProps"},description:"Style overrides."},className:{required:!1,tsType:{name:"string"},description:"Class name for custom styling."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Sets the button to full width if true.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"Size of the button.",defaultValue:{value:"'md'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display in the button."}}};const ce={title:"Components/Button/Secondary",component:c,args:{children:"Click me"}},e={},r={args:{isLoading:!0}},a={args:{isDisabled:!0}},s={args:{icon:d.jsx("span",{children:"🔔"})}},t={args:{fullWidth:!0}},o={args:{size:"lg"}},n={args:{size:"md"}},i={args:{size:"sm"}},l={args:{size:"xs"}};var u,p,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,x,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,S,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(S=a.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var v,z,C;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    icon: <span>🔔</span>
  }
}`,...(C=(z=s.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var R,q,T;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(T=(q=t.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var w,D,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var W,k,B;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(B=(k=n.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var N,j,I;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(I=(j=i.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var L,F,M;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...(M=(F=l.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const me=["Default","Loading","Disabled","WithIcon","FullWidth","LargeSize","MediumSize","SmallSize","ExtraSmallSize"];export{e as Default,a as Disabled,l as ExtraSmallSize,t as FullWidth,o as LargeSize,r as Loading,n as MediumSize,i as SmallSize,s as WithIcon,me as __namedExportsOrder,ce as default};

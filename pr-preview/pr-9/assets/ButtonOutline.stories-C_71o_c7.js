import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{R as U}from"./index-DCXu2c-y.js";import{B as X}from"./Button-CCDgY2HQ.js";import{C as Y}from"./CircularProgress-DaBKWL6o.js";import"./DefaultPropsProvider-DxfaUEOU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-BESuAU1D.js";import"./ButtonBase-ooNEwb9x.js";import"./useTimeout-BCS2DETX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-ev-Smt4n.js";import"./isFocusVisible-B8k4qzLc.js";const Z={lg:{height:"44px",paddingLeft:"24px",paddingRight:"24px",gap:"8px"},md:{height:"40px",paddingLeft:"20px",paddingRight:"20px",gap:"8px"},sm:{height:"36px",paddingLeft:"16px",paddingRight:"16px",gap:"8px"},xs:{height:"32px",paddingLeft:"16px",paddingRight:"16px",gap:"4px"}},p=U.forwardRef(({onClick:V,onHover:M,isDisabled:_=!1,isLoading:c=!1,children:H,sx:P={},className:A,size:G="md",fullWidth:J=!1,icon:K},Q)=>l.jsxs(X,{ref:Q,onClick:V,onMouseEnter:M,disabled:_||c,className:A,sx:{display:"flex",alignItems:"center",justifyContent:"center",width:J?"100%":"auto",border:"1px solid",borderColor:"var(--color-border-neutral-bold-200, #6E7581)",borderRadius:"var(--radius-large, 12px)",color:"var(--color-text-neutral-base, #1D1F23)",fontSize:"var(--font-text-md-l-24-medium-size, 16px)",fontFamily:"var(--font-text-md-l-24-medium-family, Inter)",fontWeight:"var(--font-text-md-l-24-medium-weight, 500)",letterSpacing:"var(--gap-body-md-letter-spacing, 0px)",lineHeight:"var(--font-body-md-line-height-24, 24px)",...Z[G],"&:hover":{background:"rgba(29,31,35,0.05)"},'&:disabled, &[aria-disabled="true"]':{color:"var(--color-text-neutral-subtle-300, #8B939F)",borderColor:"var(--color-border-neutral-subtle-200, #E4E7EC)"},...P},children:[c?l.jsx(Y,{size:24}):K,H]}));p.displayName="ButtonOutline";p.__docgenInfo={description:"",methods:[],displayName:"ButtonOutline",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Mouse enter handler"},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content slot"},sx:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"Style overrides",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Class overrides"},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"Size of the button",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width button",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon slot"}}};const ce={title:"Components/Button/Outline",component:p,args:{children:"Click me"}},e={},r={args:{isLoading:!0}},a={args:{isDisabled:!0}},s={args:{icon:l.jsx("span",{children:"🔍"})}},t={args:{fullWidth:!0}},o={args:{size:"lg"}},n={args:{size:"md"}},i={args:{size:"sm"}},d={args:{size:"xs"}};var u,m,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,x,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,v,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var R,S,z;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    icon: <span>🔍</span>
  }
}`,...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var w,C,L;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(L=(C=t.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var q,T,D;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(D=(T=o.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var E,W,B;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(B=(W=n.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var N,j,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var F,I,O;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const ue=["Default","Loading","Disabled","WithIcon","FullWidth","Large","Medium","Small","ExtraSmall"];export{e as Default,a as Disabled,d as ExtraSmall,t as FullWidth,o as Large,r as Loading,n as Medium,i as Small,s as WithIcon,ue as __namedExportsOrder,ce as default};

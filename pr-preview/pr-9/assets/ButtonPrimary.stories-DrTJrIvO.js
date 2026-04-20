import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{R as U}from"./index-DCXu2c-y.js";import{B as X}from"./Button-CCDgY2HQ.js";import{C as Y}from"./CircularProgress-DaBKWL6o.js";import"./DefaultPropsProvider-DxfaUEOU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-BESuAU1D.js";import"./ButtonBase-ooNEwb9x.js";import"./useTimeout-BCS2DETX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-ev-Smt4n.js";import"./isFocusVisible-B8k4qzLc.js";const Z={lg:{height:"44px",paddingLeft:"24px",paddingRight:"24px",gap:"8px"},md:{height:"40px",paddingLeft:"20px",paddingRight:"20px",gap:"8px"},sm:{height:"36px",paddingLeft:"16px",paddingRight:"16px",gap:"8px"},xs:{height:"32px",paddingLeft:"16px",paddingRight:"16px",gap:"4px"}},c=U.forwardRef(({onClick:V,onHover:_,isDisabled:A=!1,isLoading:m=!1,children:O,sx:H,className:G,size:J="md",fullWidth:p=!1,icon:K},Q)=>l.jsxs(X,{ref:Q,onClick:V,onMouseEnter:_,disabled:A||m,className:G,sx:{display:"flex",alignItems:"center",justifyContent:p?"center":"flex-start",width:p?"100%":"auto",backgroundColor:"var(--color-background-primary-bold-200, #0354A6)",color:"var(--color-text-white-base, #FFFFFF)",borderRadius:"var(--radius-large, 12px)",fontSize:"var(--font-text-md-l-24-medium-size, 16px)",fontFamily:"var(--font-text-md-l-24-medium-family, Inter)",fontWeight:"var(--font-text-md-l-24-medium-weight, 500)",...Z[J],"&:hover":{backgroundColor:"var(--color-background-primary-bold-300, #064280)"},'&:disabled, &[aria-disabled="true"]':{backgroundColor:"var(--color-background-primary-bold-200, #0354A6)",opacity:"var(--opacity-50, 0.5)"},...H},children:[m?l.jsx(Y,{size:24,color:"inherit"}):K,O]}));c.displayName="ButtonPrimary";c.__docgenInfo={description:"",methods:[],displayName:"ButtonPrimary",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click event handler"},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Mouse enter event handler"},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disables the button",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Shows a loading spinner",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button content"},sx:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"Style overrides"},className:{required:!1,tsType:{name:"string"},description:"Class name overrides"},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"Button size",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width button",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon to display"}}};const me={title:"Components/Button/Primary",component:c,args:{children:"Click me"}},e={},r={args:{isLoading:!0}},a={args:{isDisabled:!0}},s={args:{icon:l.jsx("span",{children:"🔍"})}},t={args:{fullWidth:!0}},o={args:{size:"lg"}},n={args:{size:"md"}},i={args:{size:"sm"}},d={args:{size:"xs"}};var u,g,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,h,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,b,R;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(R=(b=a.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var S,w,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: <span>🔍</span>
  }
}`,...(z=(w=s.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var k,C,q;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(q=(C=t.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var F,L,T;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(T=(L=o.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var B,D,N;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(N=(D=n.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var W,j,E;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(E=(j=i.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var I,P,M;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...(M=(P=d.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};const pe=["Default","Loading","Disabled","WithIcon","FullWidth","Large","Medium","Small","ExtraSmall"];export{e as Default,a as Disabled,d as ExtraSmall,t as FullWidth,o as Large,r as Loading,n as Medium,i as Small,s as WithIcon,pe as __namedExportsOrder,me as default};

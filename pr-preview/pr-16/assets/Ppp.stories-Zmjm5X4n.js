import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as ie}from"./index-Y0gaZlcC.js";import{B as r,T as le,w as de}from"./withFigmaReference-Qa5fc93p.js";const ce="linear-gradient(97deg, rgba(58,62,123,1) 0%, rgba(97,74,176,1) 56.5%, rgba(155,93,255,1) 100%)",ue="#0a0a14",pe="#3a3f52",x=ie.forwardRef(({label:c="Confirm",icon:u,iconPosition:v="left",disabled:K=!1,state:w="default",variant:y="default",onClick:p,onPress:f,onRelease:m,onHover:g,isDisabled:Q=!1,isLoading:me=!1,children:X,sx:Y,className:Z},$)=>{const C=y!=="default"?y:w!=="default"?w:"default",e=K||Q||C==="disabled",T=C==="pressed",ee=()=>e?pe:T?ue:ce,ae=()=>e?"var(--color-grey-secondary-body-text, #90A3B1)":"var(--color-white-white, #FFFFFF)",I=()=>e?"var(--color-grey-secondary-body-text, #90A3B1)":"var(--color-white-white, #FFFFFF)",re=()=>{e||p==null||p()},te=()=>{e||f==null||f()},ne=()=>{e||m==null||m()},se=()=>{e||g==null||g()},b=ee(),F=b.startsWith("linear-gradient"),oe={width:"108px",height:"44px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",paddingTop:"var(--gap-space-xs, 8px)",paddingBottom:"var(--gap-space-xs, 8px)",paddingLeft:"var(--gap-space-xl, 24px)",paddingRight:"var(--gap-space-xl, 24px)",borderRadius:"12px",background:F?b:void 0,backgroundColor:F?void 0:b,boxShadow:e?"none":"0px 1.5px 3px 0px rgba(22,5,50,0.2)",cursor:e?"not-allowed":"pointer",pointerEvents:e?"none":"auto",boxSizing:"border-box",userSelect:"none",transition:"background 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease","&:hover":!e&&!T?{opacity:.92}:{},...Y},D=!!u;return a.jsx(r,{ref:$,"data-figma-component":"Ppp",className:Z,onClick:re,onMouseDown:te,onMouseUp:ne,onMouseEnter:se,role:"button",tabIndex:e?-1:0,"aria-disabled":e,sx:oe,children:a.jsxs(r,{sx:{width:"fit-content",height:"fit-content",minHeight:"fit-content",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"var(--gap-space-xxs, 4px)"},children:[D&&v==="left"&&a.jsx(r,{component:"span",sx:{display:"flex",alignItems:"center",color:I(),lineHeight:0},children:u}),a.jsx(le,{component:"span",sx:{fontSize:"14px",fontWeight:500,fontFamily:"Inter",lineHeight:"normal",color:ae(),whiteSpace:"nowrap"},children:X??c}),D&&v==="right"&&a.jsx(r,{component:"span",sx:{display:"flex",alignItems:"center",color:I(),lineHeight:0},children:u})]})})});x.displayName="Ppp";x.__docgenInfo={description:"",methods:[],displayName:"Ppp",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Confirm'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'pressed' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'pressed' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRelease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sx:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const fe=""+new URL("Ppp.reference-oNwFTJDS.png",import.meta.url).href,h=()=>a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M1 3h12M3 7h8M5 11h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),he={title:"Components/Ppp",component:x,decorators:[de(fe,"⚠️ Needs Visual Review (76.79924242424242/100)"),c=>a.jsx("div",{style:{width:108,minHeight:44},children:a.jsx(c,{})})],parameters:{layout:"fullscreen"},args:{label:"Confirm",iconPosition:"left",disabled:!1,state:"default",variant:"default"}},t={args:{variant:"default",state:"default",label:"Confirm"}},n={args:{variant:"pressed",state:"pressed",label:"Confirm"}},s={args:{variant:"disabled",state:"disabled",disabled:!0,label:"Confirm"}},o={args:{isLoading:!0,label:"Confirm"}},i={args:{variant:"default",state:"default",label:"Confirm",icon:a.jsx(h,{}),iconPosition:"left"}},l={args:{variant:"pressed",state:"pressed",label:"Confirm",icon:a.jsx(h,{}),iconPosition:"left"}},d={args:{variant:"disabled",state:"disabled",disabled:!0,label:"Confirm",icon:a.jsx(h,{}),iconPosition:"left"}};var R,P,S;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    state: 'default',
    label: 'Confirm'
  }
}`,...(S=(P=t.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var j,q,L;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'pressed',
    state: 'pressed',
    label: 'Confirm'
  }
}`,...(L=(q=n.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var B,E,N;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'disabled',
    state: 'disabled',
    disabled: true,
    label: 'Confirm'
  }
}`,...(N=(E=s.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var V,k,M;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    label: 'Confirm'
  }
}`,...(M=(k=o.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var W,_,A;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    state: 'default',
    label: 'Confirm',
    icon: <FilterIcon />,
    iconPosition: 'left'
  }
}`,...(A=(_=i.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var G,U,z;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'pressed',
    state: 'pressed',
    label: 'Confirm',
    icon: <FilterIcon />,
    iconPosition: 'left'
  }
}`,...(z=(U=l.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var H,J,O;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'disabled',
    state: 'disabled',
    disabled: true,
    label: 'Confirm',
    icon: <FilterIcon />,
    iconPosition: 'left'
  }
}`,...(O=(J=d.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};const ve=["Default","Pressed","Disabled","Loading","WithIcon","WithIconPressed","WithIconDisabled"];export{t as Default,s as Disabled,o as Loading,n as Pressed,i as WithIcon,d as WithIconDisabled,l as WithIconPressed,ve as __namedExportsOrder,he as default};

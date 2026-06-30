import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as X}from"./index-Y0gaZlcC.js";import{B as n,T as Y,w as Z}from"./withFigmaReference-Qa5fc93p.js";const $=t=>{switch(t){case"pressed":return"var(--color-grey-page, #051321)";case"disabled":return"var(--color-neutral-300, #D1D5DB)";case"default":default:return"linear-gradient(97deg, rgba(58,62,123,1) 0%, rgba(97,74,176,1) 56.5%, rgba(155,93,255,1) 100%)"}},ee=t=>{switch(t){case"disabled":return"var(--color-grey-secondary-body-text, #90A3B1)";case"pressed":case"default":default:return"var(--color-white-white, #FFFFFF)"}},v=X.forwardRef(({label:t="Confirm",icon:r,iconPosition:x="left",disabled:w=!1,state:E="default",variant:_,onClick:p,onPress:f,onRelease:m,onHover:g,isDisabled:b=!1,isLoading:te=!1,children:z,sx:U,className:A},J)=>{const s=_??(w||b?"disabled":E==="pressed"?"pressed":"default"),e=s==="disabled"||w||b,O=$(s),h=ee(s),G=()=>{e||p==null||p()},H=()=>{e||f==null||f()},K=()=>{e||m==null||m()},Q=()=>{e||g==null||g()};return a.jsx(n,{ref:J,"data-figma-component":"Ppp",className:A,onClick:G,onMouseDown:H,onMouseUp:K,onMouseEnter:Q,role:"button",tabIndex:e?-1:0,"aria-disabled":e,sx:{width:"108px",height:"44px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",padding:"var(--gap-space-xs, 8px) var(--gap-space-xl, 24px)",borderRadius:"12px",background:O,boxShadow:s==="default"?"0px 1.5px 3px 0px rgba(22,5,50,0.2)":"none",cursor:e?"not-allowed":"pointer",pointerEvents:e?"none":"auto",userSelect:"none",boxSizing:"border-box",transition:"background 0.15s ease, box-shadow 0.15s ease","&:hover":{opacity:e?1:.92},...U},children:a.jsxs(n,{sx:{width:"fit-content",height:"fit-content",minHeight:"fit-content",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"var(--gap-space-xxs, 4px)"},children:[r&&x==="left"&&a.jsx(n,{sx:{display:"flex",alignItems:"center",color:h,opacity:e?.5:1},children:r}),a.jsx(Y,{sx:{fontSize:"var(--font-headline-med-headline-reg-label-large-14-med-size, 14px)",fontWeight:"var(--font-headline-med-headline-reg-label-large-14-med-weight, 500)",fontFamily:"var(--font-headline-med-headline-reg-label-large-14-med-family, Inter)",lineHeight:"normal",color:h,textAlign:"center"},children:t}),r&&x==="right"&&a.jsx(n,{sx:{display:"flex",alignItems:"center",color:h,opacity:e?.5:1},children:r}),z]})})});v.displayName="Ppp";v.__docgenInfo={description:"",methods:[],displayName:"Ppp",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Confirm'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'pressed' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'pressed' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'disabled'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRelease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sx:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ae=""+new URL("Ppp.reference-oNwFTJDS.png",import.meta.url).href,ie={title:"Components/Ppp",component:v,decorators:[Z(ae,"⚠️ Needs Visual Review (76.79924242424242/100)"),t=>a.jsx("div",{style:{width:108,minHeight:44},children:a.jsx(t,{})})],parameters:{layout:"fullscreen"},args:{label:"Confirm",iconPosition:"left",disabled:!1,state:"default",variant:"default"}},i={args:{variant:"default",state:"default"}},o={args:{variant:"pressed",state:"pressed"}},d={args:{variant:"disabled",state:"disabled",disabled:!0}},l={args:{isLoading:!0}},c={args:{variant:"default",state:"default",icon:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),iconPosition:"left"}},u={args:{variant:"disabled",state:"disabled",disabled:!0,icon:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),iconPosition:"left"}};var y,T,M;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    state: 'default'
  }
}`,...(M=(T=i.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var k,j,q;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'pressed',
    state: 'pressed'
  }
}`,...(q=(j=o.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var D,R,I;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'disabled',
    state: 'disabled',
    disabled: true
  }
}`,...(I=(R=d.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var C,F,L;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(L=(F=l.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var S,P,V;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    state: 'default',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>,
    iconPosition: 'left'
  }
}`,...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var B,N,W;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'disabled',
    state: 'disabled',
    disabled: true,
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>,
    iconPosition: 'left'
  }
}`,...(W=(N=u.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const oe=["Default","Pressed","Disabled","Loading","WithIcon","DisabledWithIcon"];export{i as Default,d as Disabled,u as DisabledWithIcon,l as Loading,o as Pressed,c as WithIcon,oe as __namedExportsOrder,ie as default};

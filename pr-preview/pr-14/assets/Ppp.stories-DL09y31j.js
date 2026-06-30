import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as Y}from"./index-Y0gaZlcC.js";import{B as i,T as Z,w as $}from"./withFigmaReference-BNudBa66.js";const ee=t=>{switch(t){case"pressed":return"var(--color-grey-page, #051321)";case"disabled":return"var(--color-grey-light-grey, #C9CFDC)";default:return"linear-gradient(97deg, rgba(58,62,123,1) 0%, rgba(97,74,176,1) 56.5%, rgba(155,93,255,1) 100%)"}},ae=t=>{switch(t){case"disabled":return"var(--color-grey-secondary-body-text, #90A3B1)";default:return"var(--color-white-white, #FFFFFF)"}},te=t=>{switch(t){case"pressed":case"disabled":return"none";default:return"0px 1.5px 3px 0px rgba(22,5,50,0.2)"}},x=Y.forwardRef(({label:t="Confirm",icon:r,iconPosition:v="left",disabled:N=!1,state:W="default",variant:E,onClick:f,onPress:g,onRelease:m,onHover:h,isDisabled:_=!1,isLoading:se=!1,children:U,sx:z={},className:A},J)=>{const s=E??(N||_?"disabled":W),e=s==="disabled",O=ee(s),n=ae(s),G=te(s),H=()=>{e||f==null||f()},K=()=>{e||g==null||g()},Q=()=>{e||m==null||m()},X=()=>{e||h==null||h()};return a.jsx(i,{ref:J,"data-figma-component":"Ppp",className:A,onClick:H,onMouseDown:K,onMouseUp:Q,onMouseEnter:X,role:"button",tabIndex:e?-1:0,"aria-disabled":e,sx:{width:"108px",height:"44px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",paddingTop:"var(--gap-space-xs, 8px)",paddingBottom:"var(--gap-space-xs, 8px)",paddingLeft:"var(--gap-space-xl, 24px)",paddingRight:"var(--gap-space-xl, 24px)",borderRadius:"12px",background:O,boxShadow:G,cursor:e?"not-allowed":"pointer",userSelect:"none",boxSizing:"border-box",color:n,transition:"background 0.15s ease, box-shadow 0.15s ease","&:hover":{opacity:e?1:.92},"&:active":{opacity:e?1:.85},...z},children:a.jsxs(i,{sx:{width:"fit-content",height:"fit-content",minHeight:"fit-content",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"var(--gap-space-xxs, 4px)"},children:[r&&v==="left"&&a.jsx(i,{component:"span",sx:{display:"flex",alignItems:"center",color:n,opacity:e?.5:1},children:r}),a.jsx(Z,{component:"span",sx:{fontSize:"14px",fontWeight:500,fontFamily:"Inter",lineHeight:"normal",color:n,whiteSpace:"nowrap"},children:U??t}),r&&v==="right"&&a.jsx(i,{component:"span",sx:{display:"flex",alignItems:"center",color:n,opacity:e?.5:1},children:r})]})})});x.displayName="Ppp";x.__docgenInfo={description:"",methods:[],displayName:"Ppp",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Confirm'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'pressed' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'pressed' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'disabled'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRelease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sx:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const re=""+new URL("Ppp.reference-oNwFTJDS.png",import.meta.url).href,de={title:"Components/Ppp",component:x,decorators:[$(re,"⚠️ Needs Visual Review (76.79924242424242/100)"),t=>a.jsx("div",{style:{width:108,minHeight:44},children:a.jsx(t,{})})],parameters:{layout:"fullscreen"},args:{label:"Confirm",iconPosition:"left",disabled:!1,state:"default",variant:"default"}},o={args:{variant:"default",state:"default"}},d={args:{variant:"pressed",state:"pressed"}},l={args:{variant:"disabled",state:"disabled",disabled:!0,isDisabled:!0}},c={args:{isLoading:!0}},p={args:{variant:"default",state:"default",iconPosition:"left",icon:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}},u={args:{variant:"disabled",state:"disabled",disabled:!0,isDisabled:!0,iconPosition:"left",icon:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}};var w,b,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    state: 'default'
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var T,D,M;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'pressed',
    state: 'pressed'
  }
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var k,R,j;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'disabled',
    state: 'disabled',
    disabled: true,
    isDisabled: true
  }
}`,...(j=(R=l.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var q,C,L;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var F,S,I;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    state: 'default',
    iconPosition: 'left',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
  }
}`,...(I=(S=p.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var V,B,P;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'disabled',
    state: 'disabled',
    disabled: true,
    isDisabled: true,
    iconPosition: 'left',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
  }
}`,...(P=(B=u.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const le=["Default","Pressed","Disabled","Loading","WithIconLeft","WithIconDisabled"];export{o as Default,l as Disabled,c as Loading,d as Pressed,u as WithIconDisabled,p as WithIconLeft,le as __namedExportsOrder,de as default};

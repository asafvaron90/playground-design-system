import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as $}from"./index-Y0gaZlcC.js";import{B as g,T as ee,w as ae}from"./withFigmaReference-CkBBnEz7.js";const te=a=>{switch(a){case"pressed":return"#0a0a14";case"disabled":return"var(--color-neutral-300, #D1D5DB)";case"default":default:return"linear-gradient(97deg, rgba(58,62,123,1) 0%, rgba(97,74,176,1) 56.5%, rgba(155,93,255,1) 100%)"}},se=a=>{switch(a){case"disabled":return"var(--color-grey-secondary-body-text, #90A3B1)";case"pressed":case"default":default:return"var(--color-white-white, #FFFFFF)"}},re=a=>{switch(a){case"pressed":case"disabled":return"none";case"default":default:return"0px 1.5px 3px 0px rgba(22,5,50,0.2)"}},b=$.forwardRef(({label:a="Confirm",icon:x,iconPosition:E="left",disabled:_=!1,state:h="default",variant:U,onClick:c,onPress:u,onRelease:p,onHover:f,isDisabled:z=!1,isLoading:ie=!1,children:A,sx:J,className:O},G)=>{const t=U??(_||z?"disabled":h==="pressed"?"pressed":h==="disabled"?"disabled":"default"),s=t==="disabled",H=te(t),m=se(t),K=re(t),Q=()=>{s||c==null||c()},X=()=>{s||u==null||u()},Y=()=>{s||p==null||p()},Z=()=>{s||f==null||f()},v=!!x?x:null;return e.jsx(g,{ref:G,"data-figma-component":"Ppp",className:O,onClick:Q,onMouseDown:X,onMouseUp:Y,onMouseEnter:Z,sx:{width:"108px",height:"44px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",paddingTop:"var(--gap-space-xs, 8px)",paddingBottom:"var(--gap-space-xs, 8px)",paddingLeft:"var(--gap-space-xl, 24px)",paddingRight:"var(--gap-space-xl, 24px)",borderRadius:"12px",background:H,boxShadow:K,cursor:s?"not-allowed":"pointer",pointerEvents:s?"none":"auto",color:m,boxSizing:"border-box",userSelect:"none",transition:"box-shadow 0.15s ease, background 0.15s ease","&:hover":t==="default"?{boxShadow:"0px 3px 8px 0px rgba(22,5,50,0.35)"}:{},"&:active":t==="default"?{background:"#0a0a14",boxShadow:"none"}:{},...J},children:e.jsxs(g,{sx:{width:"fit-content",height:"fit-content",minHeight:"fit-content",display:"flex",flexDirection:E==="right"?"row-reverse":"row",alignItems:"center",justifyContent:"center",gap:"var(--gap-space-xxs, 4px)"},children:[v&&e.jsx(g,{sx:{display:"flex",alignItems:"center",justifyContent:"center",color:m},children:v}),e.jsx(ee,{sx:{fontSize:"14px",fontWeight:500,fontFamily:"Inter, sans-serif",lineHeight:"normal",color:m,whiteSpace:"nowrap"},children:A??a})]})})});b.displayName="Ppp";b.__docgenInfo={description:"",methods:[],displayName:"Ppp",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Confirm'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'pressed' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'pressed' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'disabled'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRelease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sx:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ne=""+new URL("Ppp.reference-oNwFTJDS.png",import.meta.url).href,ue={title:"Components/Ppp",component:b,decorators:[ae(ne,"⚠️ Needs Visual Review (77.19381313131314/100)"),a=>e.jsx("div",{style:{width:108,minHeight:44},children:e.jsx(a,{})})],parameters:{layout:"fullscreen"},args:{label:"Confirm",iconPosition:"left",disabled:!1,state:"default"}},r={args:{variant:"default",state:"default"}},n={args:{variant:"pressed",state:"pressed"}},i={args:{variant:"disabled",state:"disabled",disabled:!0,isDisabled:!0}},o={args:{isLoading:!0,label:"Loading..."}},W=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 3h12M3 7h8M5 11h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),d={args:{variant:"default",state:"default",icon:e.jsx(W,{}),iconPosition:"left"}},l={args:{variant:"disabled",state:"disabled",disabled:!0,isDisabled:!0,icon:e.jsx(W,{}),iconPosition:"left"}};var w,y,D;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    state: 'default'
  }
}`,...(D=(y=r.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var T,S,R;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'pressed',
    state: 'pressed'
  }
}`,...(R=(S=n.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var j,q,F;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'disabled',
    state: 'disabled',
    disabled: true,
    isDisabled: true
  }
}`,...(F=(q=i.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var I,P,L;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    label: 'Loading...'
  }
}`,...(L=(P=o.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var N,C,M;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    state: 'default',
    icon: <FilterIcon />,
    iconPosition: 'left'
  }
}`,...(M=(C=d.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var k,V,B;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'disabled',
    state: 'disabled',
    disabled: true,
    isDisabled: true,
    icon: <FilterIcon />,
    iconPosition: 'left'
  }
}`,...(B=(V=l.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const pe=["Default","Pressed","Disabled","Loading","WithIcon","WithIconDisabled"];export{r as Default,i as Disabled,o as Loading,n as Pressed,d as WithIcon,l as WithIconDisabled,pe as __namedExportsOrder,ue as default};

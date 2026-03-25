import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as S}from"./decorator-DmfXVVDu.js";import{S as r,a as s,b as a}from"./Stepper-C6llLgaZ.js";import"./tokens-DS75wXvV.js";import"./index-JhL3uwfD.js";import"./useSlot-Cq5THIV6.js";import"./mergeSlotProps-n-86vTeD.js";import"./useForkRef-C3n9QMso.js";import"./createSvgIcon-CJvEgwgZ.js";const f={title:"System/Library Components (MUI)/Stepper",component:r,decorators:[S],parameters:{layout:"padded"}},i=["Select Library","Configure Tokens","Connect GitHub","Publish"],p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsx(r,{activeStep:0,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))}),e.jsx(r,{activeStep:2,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))}),e.jsx(r,{activeStep:4,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))})]})};var n,o,l;p.parameters={...p.parameters,docs:{...(n=p.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <Stepper activeStep={0}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
      <Stepper activeStep={2}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
      <Stepper activeStep={4}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
    </div>
}`,...(l=(o=p.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const v=["AllSteps"];export{p as AllSteps,v as __namedExportsOrder,f as default};

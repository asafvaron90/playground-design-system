import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as d}from"./decorator-Db3Dpd5W.js";import{T,a as i,b as p,c as o,d as a,e as b}from"./TableRow-Dmy4d8U6.js";import{P as m}from"./Paper-7NAgBOqf.js";import"./tokens-xUOrS8xY.js";import"./index-JhL3uwfD.js";import"./useTheme-Kbk1AJd4.js";const w={title:"System/Library Components (MUI)/Table",component:T,decorators:[d],parameters:{layout:"centered"}},c=[{token:"Brand 500",type:"Color",value:"#0ea5e9"},{token:"Heading 1",type:"Typography",value:"32px / 700"},{token:"Medium",type:"Radius",value:"8px"},{token:"Level 2",type:"Elevation",value:"2 shadows"}],n={render:()=>e.jsx(i,{component:m,sx:{maxWidth:500},children:e.jsxs(T,{children:[e.jsx(p,{children:e.jsxs(o,{children:[e.jsx(a,{children:"Token"}),e.jsx(a,{children:"Type"}),e.jsx(a,{children:"Value"})]})}),e.jsx(b,{children:c.map(l=>e.jsxs(o,{children:[e.jsx(a,{children:l.token}),e.jsx(a,{children:l.type}),e.jsx(a,{children:l.value})]},l.token))})]})})};var r,t,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <TableContainer component={Paper} sx={{
    maxWidth: 500
  }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Token</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(r => <TableRow key={r.token}>
              <TableCell>{r.token}</TableCell>
              <TableCell>{r.type}</TableCell>
              <TableCell>{r.value}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...(s=(t=n.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const v=["Default"];export{n as Default,v as __namedExportsOrder,w as default};

import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{R as p}from"./index-BwDkhjyp.js";import{T as u,A as v}from"./themeContext-BtqCvWUx.js";import"./_commonjsHelpers-BosuxZz1.js";const x=()=>{const e=p.useContext(u);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return{...e,availableThemes:v}},h=e=>{const{theme:n}=x();let t;for(const i of Object.keys(n.breakpoints)){const{min:l,max:m}=n.breakpoints[i];e>=l&&e<=m&&(t=i)}return{currentBreakpoint:t,spacing:t?n.spacing[t]:1}},f=()=>{const e=window.innerWidth;return h(e)},s=({direction:e="vertical",size:n})=>{const{spacing:t}=f();return r.jsx("div",{style:{flex:1,flexDirection:e==="vertical"?"column":"row",margin:t*n}})};s.displayName="Spacer";s.__docgenInfo={description:"",methods:[],displayName:"Spacer",props:{direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},size:{required:!0,tsType:{name:"number"},description:""}}};const w={component:s,title:"Packages/spacer"},o={render:()=>r.jsxs(r.Fragment,{children:[r.jsx("div",{children:"Block 1"}),r.jsx("div",{style:{border:"1px solid red"},children:r.jsx(s,{size:1})}),r.jsx("div",{children:"Block 2"})]})};var a,c,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <>
      <div>Block 1</div>
      <div style={{
      border: '1px solid red'
    }}>
        <Spacer size={1} />
      </div>
      <div>Block 2</div>
    </>
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const g=["HowToUse"];export{o as HowToUse,g as __namedExportsOrder,w as default};

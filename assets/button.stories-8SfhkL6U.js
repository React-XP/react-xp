import{w as v,u as y}from"./index-CuG0X5cE.js";import{j as h}from"./jsx-runtime-Nms4Y4qS.js";import{S as b}from"./index-CTr54VTp.js";import{c as w}from"./tailwind.config-BDswyqrw.js";import{r as x}from"./index-BwDkhjyp.js";import{c as B}from"./index-Bb4qSo10.js";import"./_commonjsHelpers-BosuxZz1.js";const E=B("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=x.forwardRef(({className:n,variant:r,size:l,asChild:m=!1,...p},g)=>{const f=m?b:"button";return h.jsx(f,{className:w(E({variant:r,size:l,className:n})),ref:g,...p})});o.displayName="Button";o.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{defaultValue:{value:"false",computed:!1},required:!1}}};const N={component:o,title:"Packages/button"},e={args:{children:"Button"}},t={play:async({canvasElement:n})=>{const r=v(n);await y.click(r.getByRole("button"))},args:{children:"Button"}};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  //   render: () => <Button />,
  args: {
    children: 'Button'
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,d,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // // 👇 Simulate interactions with the component
    // await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

    // await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));

    // // 👇 Assert DOM structure
    // await expect(
    //   canvas.getByText(
    //     'Everything is perfect. Your account is ready and we should probably get you started!',
    //   ),
    // ).toBeInTheDocument();
  },
  args: {
    children: 'Button'
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const P=["HowToUse","Play"];export{e as HowToUse,t as Play,P as __namedExportsOrder,N as default};

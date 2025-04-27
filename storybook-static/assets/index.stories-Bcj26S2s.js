import{j as e}from"./jsx-runtime-D_zvdyIk.js";function u(a){var s,l,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var i=a.length;for(s=0;s<i;s++)a[s]&&(l=u(a[s]))&&(r&&(r+=" "),r+=l)}else for(l in a)a[l]&&(r&&(r+=" "),r+=l);return r}function y(){for(var a,s,l=0,r="",i=arguments.length;l<i;l++)(a=arguments[l])&&(s=u(a))&&(r&&(r+=" "),r+=s);return r}const g={primary:"primary"},f={medium:"medium"},v="rounded-md font-semibold transition-all duration-200 focus:outline-none",x={primary:"bg-blue-600 text-white hover:bg-blue-700",secondary:"bg-gray-200 text-gray-800 hover:bg-gray-300",danger:"bg-red-600 text-white hover:bg-red-700"},b={small:"px-3 py-1 text-sm",medium:"px-4 py-2 text-base",large:"px-6 py-3 text-lg"},n=({label:a,onClick:s,variant:l=g.primary,size:r=f.medium,disabled:i=!1,fullWidth:p=!1,loading:o=!1})=>e.jsx("button",{type:"button",onClick:s,disabled:i||o,className:y(v,x[l],b[r],{"opacity-50 cursor-not-allowed":i||o,"w-full":p}),children:o?"Loading...":a});n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"keyof typeof BUTTON_VARIANT",elements:[{name:"literal",value:"primary"},{name:"literal",value:"secondary"},{name:"literal",value:"danger"}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:"keyof typeof BUTTON_SIZE",elements:[{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const j={title:"Components/Button",component:n,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger"]},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:"boolean"},fullWidth:{control:"boolean"},loading:{control:"boolean"},onClick:{action:"clicked"}}},t={render:()=>e.jsxs("div",{className:"flex flex-col  gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("span",{children:"Primary Button"}),e.jsxs("div",{className:"space-x-1",children:[e.jsx(n,{label:"Primary Small",variant:"primary",size:"small"}),e.jsx(n,{label:"Primary Medium",variant:"primary",size:"medium"}),e.jsx(n,{label:"Primary Large",variant:"primary",size:"large"})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("span",{children:"Secondary Button"}),e.jsxs("div",{className:"space-x-1",children:[e.jsx(n,{label:"Secondary Small",variant:"secondary",size:"small"}),e.jsx(n,{label:"Secondary Medium",variant:"secondary",size:"medium"}),e.jsx(n,{label:"Secondary Large",variant:"secondary",size:"large"})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("span",{children:"Danger Button"}),e.jsxs("div",{className:"space-x-1",children:[e.jsx(n,{label:"Danger Small",variant:"danger",size:"small"}),e.jsx(n,{label:"Danger Medium",variant:"danger",size:"medium"}),e.jsx(n,{label:"Danger Large",variant:"danger",size:"large"})]})]})]})};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col  gap-4">\r
      <div className="flex flex-col gap-4">\r
        <span>Primary Button</span>\r
        <div className="space-x-1">\r
          <Button label="Primary Small" variant="primary" size="small" />\r
          <Button label="Primary Medium" variant="primary" size="medium" />\r
          <Button label="Primary Large" variant="primary" size="large" />\r
        </div>\r
      </div>\r
      <div className="flex flex-col gap-4">\r
        <span>Secondary Button</span>\r
        <div className="space-x-1">\r
          <Button label="Secondary Small" variant="secondary" size="small" />\r
          <Button label="Secondary Medium" variant="secondary" size="medium" />\r
          <Button label="Secondary Large" variant="secondary" size="large" />\r
        </div>\r
      </div>\r
      <div className="flex flex-col gap-4">\r
        <span>Danger Button</span>\r
        <div className="space-x-1">\r
          <Button label="Danger Small" variant="danger" size="small" />\r
          <Button label="Danger Medium" variant="danger" size="medium" />\r
          <Button label="Danger Large" variant="danger" size="large" />\r
        </div>\r
      </div>\r
    </div>
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const N=["ButtonDesign"];export{t as ButtonDesign,N as __namedExportsOrder,j as default};

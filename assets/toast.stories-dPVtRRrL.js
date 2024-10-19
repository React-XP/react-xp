import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{R as _,r as n}from"./index-BwDkhjyp.js";import{r as Xe}from"./index-B8XB3FuZ.js";import{P as j,c as Ye,B as Be,u as qe,a as ze,b as B,d as P,R as Ge,e as Qe,f as Je,g as Ze,X as et}from"./x-DARqnpwR.js";import{u as q,S as Te}from"./index-CTr54VTp.js";import{c as O}from"./tailwind.config-BDswyqrw.js";import{c as tt}from"./index-Bb4qSo10.js";import"./_commonjsHelpers-BosuxZz1.js";const ot=1,st=1e6;let Z=0;function rt(){return Z=(Z+1)%Number.MAX_SAFE_INTEGER,Z.toString()}const ee=new Map,xe=e=>{if(ee.has(e))return;const t=setTimeout(()=>{ee.delete(e),V({type:"REMOVE_TOAST",toastId:e})},st);ee.set(e,t)},nt=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,ot)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case"DISMISS_TOAST":{const{toastId:o}=t;if(o)xe(o);else for(const s of e.toasts)xe(s.id);return{...e,toasts:e.toasts.map(s=>s.id===o||o===void 0?{...s,open:!1}:s)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)}}},X=[];let Y={toasts:[]};function V(e){Y=nt(Y,e);for(const t of X)t(Y)}function at({...e}){const t=rt(),o=c=>V({type:"UPDATE_TOAST",toast:{...c,id:t}}),s=()=>V({type:"DISMISS_TOAST",toastId:t});return V({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:c=>{c||s()}}}),{id:t,dismiss:s,update:o}}function ge(){const[e,t]=_.useState(Y);return _.useEffect(()=>(X.push(t),()=>{const o=X.indexOf(t);o>-1&&X.splice(o,1)}),[]),{...e,toast:at,dismiss:o=>V({type:"DISMISS_TOAST",toastId:o})}}function it(e,t=[]){let o=[];function s(l,d){const f=n.createContext(d),v=o.length;o=[...o,d];function i(x){const{scope:C,children:h,...T}=x,p=(C==null?void 0:C[e][v])||f,a=n.useMemo(()=>T,Object.values(T));return r.jsx(p.Provider,{value:a,children:h})}function g(x,C){const h=(C==null?void 0:C[e][v])||f,T=n.useContext(h);if(T)return T;if(d!==void 0)return d;throw new Error(`\`${x}\` must be used within \`${l}\``)}return i.displayName=l+"Provider",[i,g]}const c=()=>{const l=o.map(d=>n.createContext(d));return function(f){const v=(f==null?void 0:f[e])||l;return n.useMemo(()=>({[`__scope${e}`]:{...f,[e]:v}}),[f,v])}};return c.scopeName=e,[s,ct(c,...t)]}function ct(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const s=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(l){const d=s.reduce((f,{useScope:v,scopeName:i})=>{const x=v(l)[`__scope${i}`];return{...f,...x}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])}};return o.scopeName=t.scopeName,o}function dt(e){const t=e+"CollectionProvider",[o,s]=it(t),[c,l]=o(t,{collectionRef:{current:null},itemMap:new Map}),d=h=>{const{scope:T,children:p}=h,a=_.useRef(null),w=_.useRef(new Map).current;return r.jsx(c,{scope:T,itemMap:w,collectionRef:a,children:p})};d.displayName=t;const f=e+"CollectionSlot",v=_.forwardRef((h,T)=>{const{scope:p,children:a}=h,w=l(f,p),m=q(T,w.collectionRef);return r.jsx(Te,{ref:m,children:a})});v.displayName=f;const i=e+"CollectionItemSlot",g="data-radix-collection-item",x=_.forwardRef((h,T)=>{const{scope:p,children:a,...w}=h,m=_.useRef(null),E=q(T,m),y=l(i,p);return _.useEffect(()=>(y.itemMap.set(m,{ref:m,...w}),()=>void y.itemMap.delete(m))),r.jsx(Te,{[g]:"",ref:E,children:a})});x.displayName=i;function C(h){const T=l(e+"CollectionConsumer",h);return _.useCallback(()=>{const a=T.collectionRef.current;if(!a)return[];const w=Array.from(a.querySelectorAll(`[${g}]`));return Array.from(T.itemMap.values()).sort((y,b)=>w.indexOf(y.ref.current)-w.indexOf(b.ref.current))},[T.collectionRef,T.itemMap])}return[{Provider:d,Slot:v,ItemSlot:x},C,s]}var ut="VisuallyHidden",ne=n.forwardRef((e,t)=>r.jsx(j.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));ne.displayName=ut;var ae="ToastProvider",[ie,lt,pt]=dt("Toast"),[Ce,Vt]=Ye("Toast",[pt]),[ft,z]=Ce(ae),be=e=>{const{__scopeToast:t,label:o="Notification",duration:s=5e3,swipeDirection:c="right",swipeThreshold:l=50,children:d}=e,[f,v]=n.useState(null),[i,g]=n.useState(0),x=n.useRef(!1),C=n.useRef(!1);return o.trim()||console.error(`Invalid prop \`label\` supplied to \`${ae}\`. Expected non-empty \`string\`.`),r.jsx(ie.Provider,{scope:t,children:r.jsx(ft,{scope:t,label:o,duration:s,swipeDirection:c,swipeThreshold:l,toastCount:i,viewport:f,onViewportChange:v,onToastAdd:n.useCallback(()=>g(h=>h+1),[]),onToastRemove:n.useCallback(()=>g(h=>h-1),[]),isFocusedToastEscapeKeyDownRef:x,isClosePausedRef:C,children:d})})};be.displayName=ae;var Se="ToastViewport",mt=["F8"],oe="toast.viewportPause",se="toast.viewportResume",Re=n.forwardRef((e,t)=>{const{__scopeToast:o,hotkey:s=mt,label:c="Notifications ({hotkey})",...l}=e,d=z(Se,o),f=lt(o),v=n.useRef(null),i=n.useRef(null),g=n.useRef(null),x=n.useRef(null),C=q(t,x,d.onViewportChange),h=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),T=d.toastCount>0;n.useEffect(()=>{const a=w=>{var E;s.length!==0&&s.every(y=>w[y]||w.code===y)&&((E=x.current)==null||E.focus())};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[s]),n.useEffect(()=>{const a=v.current,w=x.current;if(T&&a&&w){const m=()=>{if(!d.isClosePausedRef.current){const S=new CustomEvent(oe);w.dispatchEvent(S),d.isClosePausedRef.current=!0}},E=()=>{if(d.isClosePausedRef.current){const S=new CustomEvent(se);w.dispatchEvent(S),d.isClosePausedRef.current=!1}},y=S=>{!a.contains(S.relatedTarget)&&E()},b=()=>{a.contains(document.activeElement)||E()};return a.addEventListener("focusin",m),a.addEventListener("focusout",y),a.addEventListener("pointermove",m),a.addEventListener("pointerleave",b),window.addEventListener("blur",m),window.addEventListener("focus",E),()=>{a.removeEventListener("focusin",m),a.removeEventListener("focusout",y),a.removeEventListener("pointermove",m),a.removeEventListener("pointerleave",b),window.removeEventListener("blur",m),window.removeEventListener("focus",E)}}},[T,d.isClosePausedRef]);const p=n.useCallback(({tabbingDirection:a})=>{const m=f().map(E=>{const y=E.ref.current,b=[y,...Pt(y)];return a==="forwards"?b:b.reverse()});return(a==="forwards"?m.reverse():m).flat()},[f]);return n.useEffect(()=>{const a=x.current;if(a){const w=m=>{var b,S,N;const E=m.altKey||m.ctrlKey||m.metaKey;if(m.key==="Tab"&&!E){const F=document.activeElement,M=m.shiftKey;if(m.target===a&&M){(b=i.current)==null||b.focus();return}const A=p({tabbingDirection:M?"backwards":"forwards"}),$=A.findIndex(u=>u===F);te(A.slice($+1))?m.preventDefault():M?(S=i.current)==null||S.focus():(N=g.current)==null||N.focus()}};return a.addEventListener("keydown",w),()=>a.removeEventListener("keydown",w)}},[f,p]),r.jsxs(Be,{ref:v,role:"region","aria-label":c.replace("{hotkey}",h),tabIndex:-1,style:{pointerEvents:T?void 0:"none"},children:[T&&r.jsx(re,{ref:i,onFocusFromOutsideViewport:()=>{const a=p({tabbingDirection:"forwards"});te(a)}}),r.jsx(ie.Slot,{scope:o,children:r.jsx(j.ol,{tabIndex:-1,...l,ref:C})}),T&&r.jsx(re,{ref:g,onFocusFromOutsideViewport:()=>{const a=p({tabbingDirection:"backwards"});te(a)}})]})});Re.displayName=Se;var Pe="ToastFocusProxy",re=n.forwardRef((e,t)=>{const{__scopeToast:o,onFocusFromOutsideViewport:s,...c}=e,l=z(Pe,o);return r.jsx(ne,{"aria-hidden":!0,tabIndex:0,...c,ref:t,style:{position:"fixed"},onFocus:d=>{var i;const f=d.relatedTarget;!((i=l.viewport)!=null&&i.contains(f))&&s()}})});re.displayName=Pe;var G="Toast",vt="toast.swipeStart",Tt="toast.swipeMove",xt="toast.swipeCancel",wt="toast.swipeEnd",_e=n.forwardRef((e,t)=>{const{forceMount:o,open:s,defaultOpen:c,onOpenChange:l,...d}=e,[f=!0,v]=qe({prop:s,defaultProp:c,onChange:l});return r.jsx(ze,{present:o||f,children:r.jsx(ht,{open:f,...d,ref:t,onClose:()=>v(!1),onPause:B(e.onPause),onResume:B(e.onResume),onSwipeStart:P(e.onSwipeStart,i=>{i.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:P(e.onSwipeMove,i=>{const{x:g,y:x}=i.detail.delta;i.currentTarget.setAttribute("data-swipe","move"),i.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${g}px`),i.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${x}px`)}),onSwipeCancel:P(e.onSwipeCancel,i=>{i.currentTarget.setAttribute("data-swipe","cancel"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),i.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:P(e.onSwipeEnd,i=>{const{x:g,y:x}=i.detail.delta;i.currentTarget.setAttribute("data-swipe","end"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),i.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${g}px`),i.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${x}px`),v(!1)})})})});_e.displayName=G;var[Et,yt]=Ce(G,{onClose(){}}),ht=n.forwardRef((e,t)=>{const{__scopeToast:o,type:s="foreground",duration:c,open:l,onClose:d,onEscapeKeyDown:f,onPause:v,onResume:i,onSwipeStart:g,onSwipeMove:x,onSwipeCancel:C,onSwipeEnd:h,...T}=e,p=z(G,o),[a,w]=n.useState(null),m=q(t,u=>w(u)),E=n.useRef(null),y=n.useRef(null),b=c||p.duration,S=n.useRef(0),N=n.useRef(b),F=n.useRef(0),{onToastAdd:M,onToastRemove:Q}=p,D=B(()=>{var R;(a==null?void 0:a.contains(document.activeElement))&&((R=p.viewport)==null||R.focus()),d()}),A=n.useCallback(u=>{!u||u===1/0||(window.clearTimeout(F.current),S.current=new Date().getTime(),F.current=window.setTimeout(D,u))},[D]);n.useEffect(()=>{const u=p.viewport;if(u){const R=()=>{A(N.current),i==null||i()},I=()=>{const L=new Date().getTime()-S.current;N.current=N.current-L,window.clearTimeout(F.current),v==null||v()};return u.addEventListener(oe,I),u.addEventListener(se,R),()=>{u.removeEventListener(oe,I),u.removeEventListener(se,R)}}},[p.viewport,b,v,i,A]),n.useEffect(()=>{l&&!p.isClosePausedRef.current&&A(b)},[l,b,p.isClosePausedRef,A]),n.useEffect(()=>(M(),()=>Q()),[M,Q]);const $=n.useMemo(()=>a?Oe(a):null,[a]);return p.viewport?r.jsxs(r.Fragment,{children:[$&&r.jsx(gt,{__scopeToast:o,role:"status","aria-live":s==="foreground"?"assertive":"polite","aria-atomic":!0,children:$}),r.jsx(Et,{scope:o,onClose:D,children:Xe.createPortal(r.jsx(ie.ItemSlot,{scope:o,children:r.jsx(Ge,{asChild:!0,onEscapeKeyDown:P(f,()=>{p.isFocusedToastEscapeKeyDownRef.current||D(),p.isFocusedToastEscapeKeyDownRef.current=!1}),children:r.jsx(j.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":l?"open":"closed","data-swipe-direction":p.swipeDirection,...T,ref:m,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:P(e.onKeyDown,u=>{u.key==="Escape"&&(f==null||f(u.nativeEvent),u.nativeEvent.defaultPrevented||(p.isFocusedToastEscapeKeyDownRef.current=!0,D()))}),onPointerDown:P(e.onPointerDown,u=>{u.button===0&&(E.current={x:u.clientX,y:u.clientY})}),onPointerMove:P(e.onPointerMove,u=>{if(!E.current)return;const R=u.clientX-E.current.x,I=u.clientY-E.current.y,L=!!y.current,k=["left","right"].includes(p.swipeDirection),K=["left","up"].includes(p.swipeDirection)?Math.min:Math.max,Ue=k?K(0,R):0,We=k?0:K(0,I),J=u.pointerType==="touch"?10:2,H={x:Ue,y:We},ve={originalEvent:u,delta:H};L?(y.current=H,U(Tt,x,ve,{discrete:!1})):we(H,p.swipeDirection,J)?(y.current=H,U(vt,g,ve,{discrete:!1}),u.target.setPointerCapture(u.pointerId)):(Math.abs(R)>J||Math.abs(I)>J)&&(E.current=null)}),onPointerUp:P(e.onPointerUp,u=>{const R=y.current,I=u.target;if(I.hasPointerCapture(u.pointerId)&&I.releasePointerCapture(u.pointerId),y.current=null,E.current=null,R){const L=u.currentTarget,k={originalEvent:u,delta:R};we(R,p.swipeDirection,p.swipeThreshold)?U(wt,h,k,{discrete:!0}):U(xt,C,k,{discrete:!0}),L.addEventListener("click",K=>K.preventDefault(),{once:!0})}})})})}),p.viewport)})]}):null}),gt=e=>{const{__scopeToast:t,children:o,...s}=e,c=z(G,t),[l,d]=n.useState(!1),[f,v]=n.useState(!1);return St(()=>d(!0)),n.useEffect(()=>{const i=window.setTimeout(()=>v(!0),1e3);return()=>window.clearTimeout(i)},[]),f?null:r.jsx(Qe,{asChild:!0,children:r.jsx(ne,{...s,children:l&&r.jsxs(r.Fragment,{children:[c.label," ",o]})})})},Ct="ToastTitle",Ie=n.forwardRef((e,t)=>{const{__scopeToast:o,...s}=e;return r.jsx(j.div,{...s,ref:t})});Ie.displayName=Ct;var bt="ToastDescription",Ne=n.forwardRef((e,t)=>{const{__scopeToast:o,...s}=e;return r.jsx(j.div,{...s,ref:t})});Ne.displayName=bt;var Ae="ToastAction",je=n.forwardRef((e,t)=>{const{altText:o,...s}=e;return o.trim()?r.jsx(De,{altText:o,asChild:!0,children:r.jsx(ce,{...s,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Ae}\`. Expected non-empty \`string\`.`),null)});je.displayName=Ae;var Me="ToastClose",ce=n.forwardRef((e,t)=>{const{__scopeToast:o,...s}=e,c=yt(Me,o);return r.jsx(De,{asChild:!0,children:r.jsx(j.button,{type:"button",...s,ref:t,onClick:P(e.onClick,c.onClose)})})});ce.displayName=Me;var De=n.forwardRef((e,t)=>{const{__scopeToast:o,altText:s,...c}=e;return r.jsx(j.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0,...c,ref:t})});function Oe(e){const t=[];return Array.from(e.childNodes).forEach(s=>{if(s.nodeType===s.TEXT_NODE&&s.textContent&&t.push(s.textContent),Rt(s)){const c=s.ariaHidden||s.hidden||s.style.display==="none",l=s.dataset.radixToastAnnounceExclude==="";if(!c)if(l){const d=s.dataset.radixToastAnnounceAlt;d&&t.push(d)}else t.push(...Oe(s))}}),t}function U(e,t,o,{discrete:s}){const c=o.originalEvent.currentTarget,l=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:o});t&&c.addEventListener(e,t,{once:!0}),s?Ze(c,l):c.dispatchEvent(l)}var we=(e,t,o=0)=>{const s=Math.abs(e.x),c=Math.abs(e.y),l=s>c;return t==="left"||t==="right"?l&&s>o:!l&&c>o};function St(e=()=>{}){const t=B(e);Je(()=>{let o=0,s=0;return o=window.requestAnimationFrame(()=>s=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(o),window.cancelAnimationFrame(s)}},[t])}function Rt(e){return e.nodeType===e.ELEMENT_NODE}function Pt(e){const t=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const c=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||c?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)t.push(o.currentNode);return t}function te(e){const t=document.activeElement;return e.some(o=>o===t?!0:(o.focus(),document.activeElement!==t))}var Fe=Re,Le=_e,ke=Ie,Ve=Ne,$e=je,Ke=ce;const de=n.forwardRef(({className:e,...t},o)=>r.jsx(Fe,{ref:o,className:O("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));de.displayName=Fe.displayName;const _t=tt("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),ue=n.forwardRef(({className:e,variant:t,...o},s)=>r.jsx(Le,{ref:s,className:O(_t({variant:t}),e),...o}));ue.displayName=Le.displayName;const He=n.forwardRef(({className:e,...t},o)=>r.jsx($e,{ref:o,className:O("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));He.displayName=$e.displayName;const le=n.forwardRef(({className:e,...t},o)=>r.jsx(Ke,{ref:o,className:O("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:r.jsx(et,{className:"h-4 w-4"})}));le.displayName=Ke.displayName;const pe=n.forwardRef(({className:e,...t},o)=>r.jsx(ke,{ref:o,className:O("text-sm font-semibold",e),...t}));pe.displayName=ke.displayName;const fe=n.forwardRef(({className:e,...t},o)=>r.jsx(Ve,{ref:o,className:O("text-sm opacity-90",e),...t}));fe.displayName=Ve.displayName;de.__docgenInfo={description:"",methods:[]};ue.__docgenInfo={description:"",methods:[]};pe.__docgenInfo={description:"",methods:[]};fe.__docgenInfo={description:"",methods:[]};le.__docgenInfo={description:"",methods:[]};He.__docgenInfo={description:"",methods:[]};const It=be;function me({children:e}){const{toasts:t}=ge();return r.jsxs(It,{children:[t.map(({id:o,title:s,description:c,action:l,...d})=>r.jsxs(ue,{...d,children:[r.jsxs("div",{className:"grid gap-1",children:[s&&r.jsx(pe,{children:s}),c&&r.jsx(fe,{children:c})]}),l,r.jsx(le,{})]},o)),r.jsx(de,{}),e]})}me.__docgenInfo={description:"",methods:[],displayName:"ToastProvider"};const Nt=()=>{const{toast:e}=ge();return r.jsxs("div",{children:[r.jsx("h1",{children:"Toasts"}),r.jsx("button",{type:"button",style:{border:"1px solid #000",borderRadius:"8px",padding:"8px",margin:"8px"},onClick:()=>e({title:"This is a toast example"}),children:"Show toast with title"}),r.jsx("br",{}),r.jsx("button",{type:"button",style:{border:"1px solid #000",borderRadius:"8px",padding:"8px",margin:"8px"},onClick:()=>e({title:"This is a toast example",description:"This is a toast description"}),children:"Show toast with title and description"})]})},$t={component:me,title:"Packages/toast"},W={render:()=>r.jsx(me,{children:r.jsx(Nt,{})})};var Ee,ye,he;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <ToastProvider>
      <HowToUseToast />
    </ToastProvider>
}`,...(he=(ye=W.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};const Kt=["HowToUse"];export{W as HowToUse,Kt as __namedExportsOrder,$t as default};

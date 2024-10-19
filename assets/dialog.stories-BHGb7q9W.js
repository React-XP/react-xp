import{j as l}from"./jsx-runtime-Nms4Y4qS.js";import{r as c,a as at,R as V}from"./index-BwDkhjyp.js";import{f as it,b as de,P as _,c as ct,d as k,a as oe,D as st,h as ut,u as lt,e as dt,X as ft}from"./x-DARqnpwR.js";import{u as G,S as vt}from"./index-CTr54VTp.js";import{c as X}from"./tailwind.config-BDswyqrw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";var mt=at.useId||(()=>{}),gt=0;function z(e){const[t,n]=c.useState(mt());return it(()=>{e||n(r=>r??String(gt++))},[e]),e||(t?`radix-${t}`:"")}var Z="focusScope.autoFocusOnMount",q="focusScope.autoFocusOnUnmount",fe={bubbles:!1,cancelable:!0},pt="FocusScope",Re=c.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...u}=e,[i,g]=c.useState(null),m=de(o),p=de(a),f=c.useRef(null),h=G(t,s=>g(s)),y=c.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.useEffect(()=>{if(r){let s=function(b){if(y.paused||!i)return;const E=b.target;i.contains(E)?f.current=E:D(f.current,{select:!0})},d=function(b){if(y.paused||!i)return;const E=b.relatedTarget;E!==null&&(i.contains(E)||D(f.current,{select:!0}))},v=function(b){if(document.activeElement===document.body)for(const C of b)C.removedNodes.length>0&&D(i)};document.addEventListener("focusin",s),document.addEventListener("focusout",d);const S=new MutationObserver(v);return i&&S.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",s),document.removeEventListener("focusout",d),S.disconnect()}}},[r,i,y.paused]),c.useEffect(()=>{if(i){me.add(y);const s=document.activeElement;if(!i.contains(s)){const v=new CustomEvent(Z,fe);i.addEventListener(Z,m),i.dispatchEvent(v),v.defaultPrevented||(ht(St(De(i)),{select:!0}),document.activeElement===s&&D(i))}return()=>{i.removeEventListener(Z,m),setTimeout(()=>{const v=new CustomEvent(q,fe);i.addEventListener(q,p),i.dispatchEvent(v),v.defaultPrevented||D(s??document.body,{select:!0}),i.removeEventListener(q,p),me.remove(y)},0)}}},[i,m,p,y]);const w=c.useCallback(s=>{if(!n&&!r||y.paused)return;const d=s.key==="Tab"&&!s.altKey&&!s.ctrlKey&&!s.metaKey,v=document.activeElement;if(d&&v){const S=s.currentTarget,[b,E]=yt(S);b&&E?!s.shiftKey&&v===E?(s.preventDefault(),n&&D(b,{select:!0})):s.shiftKey&&v===b&&(s.preventDefault(),n&&D(E,{select:!0})):v===S&&s.preventDefault()}},[n,r,y.paused]);return l.jsx(_.div,{tabIndex:-1,...u,ref:h,onKeyDown:w})});Re.displayName=pt;function ht(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(D(r,{select:t}),document.activeElement!==n)return}function yt(e){const t=De(e),n=ve(t,e),r=ve(t.reverse(),e);return[n,r]}function De(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ve(e,t){for(const n of e)if(!bt(n,{upTo:t}))return n}function bt(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Et(e){return e instanceof HTMLInputElement&&"select"in e}function D(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Et(e)&&t&&e.select()}}var me=Ct();function Ct(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=ge(e,t),e.unshift(t)},remove(t){var n;e=ge(e,t),(n=e[0])==null||n.resume()}}}function ge(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function St(e){return e.filter(t=>t.tagName!=="A")}var Q=0;function wt(){c.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??pe()),document.body.insertAdjacentElement("beforeend",e[1]??pe()),Q++,()=>{Q===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Q--}},[])}function pe(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var R=function(){return R=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},R.apply(this,arguments)};function Ne(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function xt(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var $="right-scroll-bar-position",H="width-before-scroll-bar",Rt="with-scroll-bars-hidden",Dt="--removed-body-scroll-bar-size";function J(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Nt(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Pt=typeof window<"u"?c.useLayoutEffect:c.useEffect,he=new WeakMap;function At(e,t){var n=Nt(null,function(r){return e.forEach(function(o){return J(o,r)})});return Pt(function(){var r=he.get(n);if(r){var o=new Set(r),a=new Set(e),u=n.current;o.forEach(function(i){a.has(i)||J(i,null)}),a.forEach(function(i){o.has(i)||J(i,u)})}he.set(n,e)},[e]),n}function Tt(e){return e}function Ot(e,t){t===void 0&&(t=Tt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var u=t(a,r);return n.push(u),function(){n=n.filter(function(i){return i!==u})}},assignSyncMedium:function(a){for(r=!0;n.length;){var u=n;n=[],u.forEach(a)}n={push:function(i){return a(i)},filter:function(){return n}}},assignMedium:function(a){r=!0;var u=[];if(n.length){var i=n;n=[],i.forEach(a),u=n}var g=function(){var p=u;u=[],p.forEach(a)},m=function(){return Promise.resolve().then(g)};m(),n={push:function(p){u.push(p),m()},filter:function(p){return u=u.filter(p),n}}}};return o}function It(e){e===void 0&&(e={});var t=Ot(null);return t.options=R({async:!0,ssr:!1},e),t}var Pe=function(e){var t=e.sideCar,n=Ne(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return c.createElement(r,R({},n))};Pe.isSideCarExport=!0;function _t(e,t){return e.useMedium(t),Pe}var Ae=It(),ee=function(){},Y=c.forwardRef(function(e,t){var n=c.useRef(null),r=c.useState({onScrollCapture:ee,onWheelCapture:ee,onTouchMoveCapture:ee}),o=r[0],a=r[1],u=e.forwardProps,i=e.children,g=e.className,m=e.removeScrollBar,p=e.enabled,f=e.shards,h=e.sideCar,y=e.noIsolation,w=e.inert,s=e.allowPinchZoom,d=e.as,v=d===void 0?"div":d,S=e.gapMode,b=Ne(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=h,C=At([n,t]),P=R(R({},b),o);return c.createElement(c.Fragment,null,p&&c.createElement(E,{sideCar:Ae,removeScrollBar:m,shards:f,noIsolation:y,inert:w,setCallbacks:a,allowPinchZoom:!!s,lockRef:n,gapMode:S}),u?c.cloneElement(c.Children.only(i),R(R({},P),{ref:C})):c.createElement(v,R({},P,{className:g,ref:C}),i))});Y.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Y.classNames={fullWidth:H,zeroRight:$};var Mt=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function kt(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Mt();return t&&e.setAttribute("nonce",t),e}function Ft(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function jt(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Lt=function(){var e=0,t=null;return{add:function(n){e==0&&(t=kt())&&(Ft(t,n),jt(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Wt=function(){var e=Lt();return function(t,n){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Te=function(){var e=Wt(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},Bt={left:0,top:0,right:0,gap:0},te=function(e){return parseInt(e||"",10)||0},Ut=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[te(n),te(r),te(o)]},$t=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Bt;var t=Ut(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Ht=Te(),I="data-scroll-locked",Kt=function(e,t,n,r){var o=e.left,a=e.top,u=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Rt,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body[`).concat(I,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat($,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(H,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat($," .").concat($,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(H," .").concat(H,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(I,`] {
    `).concat(Dt,": ").concat(i,`px;
  }
`)},ye=function(){var e=parseInt(document.body.getAttribute(I)||"0",10);return isFinite(e)?e:0},Vt=function(){c.useEffect(function(){return document.body.setAttribute(I,(ye()+1).toString()),function(){var e=ye()-1;e<=0?document.body.removeAttribute(I):document.body.setAttribute(I,e.toString())}},[])},Gt=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Vt();var a=c.useMemo(function(){return $t(o)},[o]);return c.createElement(Ht,{styles:Kt(a,!t,o,n?"":"!important")})},re=!1;if(typeof window<"u")try{var j=Object.defineProperty({},"passive",{get:function(){return re=!0,!0}});window.addEventListener("test",j,j),window.removeEventListener("test",j,j)}catch{re=!1}var A=re?{passive:!1}:!1,Xt=function(e){return e.tagName==="TEXTAREA"},Oe=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Xt(e)&&n[t]==="visible")},Yt=function(e){return Oe(e,"overflowY")},zt=function(e){return Oe(e,"overflowX")},be=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Ie(e,r);if(o){var a=_e(e,r),u=a[1],i=a[2];if(u>i)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Zt=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},qt=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ie=function(e,t){return e==="v"?Yt(t):zt(t)},_e=function(e,t){return e==="v"?Zt(t):qt(t)},Qt=function(e,t){return e==="h"&&t==="rtl"?-1:1},Jt=function(e,t,n,r,o){var a=Qt(e,window.getComputedStyle(t).direction),u=a*r,i=n.target,g=t.contains(i),m=!1,p=u>0,f=0,h=0;do{var y=_e(e,i),w=y[0],s=y[1],d=y[2],v=s-d-a*w;(w||v)&&Ie(e,i)&&(f+=v,h+=w),i instanceof ShadowRoot?i=i.host:i=i.parentNode}while(!g&&i!==document.body||g&&(t.contains(i)||t===i));return(p&&(Math.abs(f)<1||!o)||!p&&(Math.abs(h)<1||!o))&&(m=!0),m},L=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ee=function(e){return[e.deltaX,e.deltaY]},Ce=function(e){return e&&"current"in e?e.current:e},en=function(e,t){return e[0]===t[0]&&e[1]===t[1]},tn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},nn=0,T=[];function rn(e){var t=c.useRef([]),n=c.useRef([0,0]),r=c.useRef(),o=c.useState(nn++)[0],a=c.useState(Te)[0],u=c.useRef(e);c.useEffect(function(){u.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var s=xt([e.lockRef.current],(e.shards||[]).map(Ce),!0).filter(Boolean);return s.forEach(function(d){return d.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),s.forEach(function(d){return d.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=c.useCallback(function(s,d){if("touches"in s&&s.touches.length===2||s.type==="wheel"&&s.ctrlKey)return!u.current.allowPinchZoom;var v=L(s),S=n.current,b="deltaX"in s?s.deltaX:S[0]-v[0],E="deltaY"in s?s.deltaY:S[1]-v[1],C,P=s.target,M=Math.abs(b)>Math.abs(E)?"h":"v";if("touches"in s&&M==="h"&&P.type==="range")return!1;var F=be(M,P);if(!F)return!0;if(F?C=M:(C=M==="v"?"h":"v",F=be(M,P)),!F)return!1;if(!r.current&&"changedTouches"in s&&(b||E)&&(r.current=C),!C)return!0;var le=r.current||C;return Jt(le,d,s,le==="h"?b:E,!0)},[]),g=c.useCallback(function(s){var d=s;if(!(!T.length||T[T.length-1]!==a)){var v="deltaY"in d?Ee(d):L(d),S=t.current.filter(function(C){return C.name===d.type&&(C.target===d.target||d.target===C.shadowParent)&&en(C.delta,v)})[0];if(S&&S.should){d.cancelable&&d.preventDefault();return}if(!S){var b=(u.current.shards||[]).map(Ce).filter(Boolean).filter(function(C){return C.contains(d.target)}),E=b.length>0?i(d,b[0]):!u.current.noIsolation;E&&d.cancelable&&d.preventDefault()}}},[]),m=c.useCallback(function(s,d,v,S){var b={name:s,delta:d,target:v,should:S,shadowParent:on(v)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(E){return E!==b})},1)},[]),p=c.useCallback(function(s){n.current=L(s),r.current=void 0},[]),f=c.useCallback(function(s){m(s.type,Ee(s),s.target,i(s,e.lockRef.current))},[]),h=c.useCallback(function(s){m(s.type,L(s),s.target,i(s,e.lockRef.current))},[]);c.useEffect(function(){return T.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:h}),document.addEventListener("wheel",g,A),document.addEventListener("touchmove",g,A),document.addEventListener("touchstart",p,A),function(){T=T.filter(function(s){return s!==a}),document.removeEventListener("wheel",g,A),document.removeEventListener("touchmove",g,A),document.removeEventListener("touchstart",p,A)}},[]);var y=e.removeScrollBar,w=e.inert;return c.createElement(c.Fragment,null,w?c.createElement(a,{styles:tn(o)}):null,y?c.createElement(Gt,{gapMode:e.gapMode}):null)}function on(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const an=_t(Ae,rn);var Me=c.forwardRef(function(e,t){return c.createElement(Y,R({},e,{ref:t,sideCar:an}))});Me.classNames=Y.classNames;var cn=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},O=new WeakMap,W=new WeakMap,B={},ne=0,ke=function(e){return e&&(e.host||ke(e.parentNode))},sn=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=ke(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},un=function(e,t,n,r){var o=sn(t,Array.isArray(e)?e:[e]);B[n]||(B[n]=new WeakMap);var a=B[n],u=[],i=new Set,g=new Set(o),m=function(f){!f||i.has(f)||(i.add(f),m(f.parentNode))};o.forEach(m);var p=function(f){!f||g.has(f)||Array.prototype.forEach.call(f.children,function(h){if(i.has(h))p(h);else try{var y=h.getAttribute(r),w=y!==null&&y!=="false",s=(O.get(h)||0)+1,d=(a.get(h)||0)+1;O.set(h,s),a.set(h,d),u.push(h),s===1&&w&&W.set(h,!0),d===1&&h.setAttribute(n,"true"),w||h.setAttribute(r,"true")}catch(v){console.error("aria-hidden: cannot operate on ",h,v)}})};return p(t),i.clear(),ne++,function(){u.forEach(function(f){var h=O.get(f)-1,y=a.get(f)-1;O.set(f,h),a.set(f,y),h||(W.has(f)||f.removeAttribute(r),W.delete(f)),y||f.removeAttribute(n)}),ne--,ne||(O=new WeakMap,O=new WeakMap,W=new WeakMap,B={})}},ln=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=cn(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),un(r,o,n,"aria-hidden")):function(){return null}},ae="Dialog",[Fe,On]=ct(ae),[dn,x]=Fe(ae),je=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:u=!0}=e,i=c.useRef(null),g=c.useRef(null),[m=!1,p]=lt({prop:r,defaultProp:o,onChange:a});return l.jsx(dn,{scope:t,triggerRef:i,contentRef:g,contentId:z(),titleId:z(),descriptionId:z(),open:m,onOpenChange:p,onOpenToggle:c.useCallback(()=>p(f=>!f),[p]),modal:u,children:n})};je.displayName=ae;var Le="DialogTrigger",fn=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=x(Le,n),a=G(t,o.triggerRef);return l.jsx(_.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":se(o.open),...r,ref:a,onClick:k(e.onClick,o.onOpenToggle)})});fn.displayName=Le;var ie="DialogPortal",[vn,We]=Fe(ie,{forceMount:void 0}),Be=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=x(ie,t);return l.jsx(vn,{scope:t,forceMount:n,children:c.Children.map(r,u=>l.jsx(oe,{present:n||a.open,children:l.jsx(dt,{asChild:!0,container:o,children:u})}))})};Be.displayName=ie;var K="DialogOverlay",Ue=c.forwardRef((e,t)=>{const n=We(K,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=x(K,e.__scopeDialog);return a.modal?l.jsx(oe,{present:r||a.open,children:l.jsx(mn,{...o,ref:t})}):null});Ue.displayName=K;var mn=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=x(K,n);return l.jsx(Me,{as:vt,allowPinchZoom:!0,shards:[o.contentRef],children:l.jsx(_.div,{"data-state":se(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),N="DialogContent",$e=c.forwardRef((e,t)=>{const n=We(N,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=x(N,e.__scopeDialog);return l.jsx(oe,{present:r||a.open,children:a.modal?l.jsx(gn,{...o,ref:t}):l.jsx(pn,{...o,ref:t})})});$e.displayName=N;var gn=c.forwardRef((e,t)=>{const n=x(N,e.__scopeDialog),r=c.useRef(null),o=G(t,n.contentRef,r);return c.useEffect(()=>{const a=r.current;if(a)return ln(a)},[]),l.jsx(He,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:k(e.onCloseAutoFocus,a=>{var u;a.preventDefault(),(u=n.triggerRef.current)==null||u.focus()}),onPointerDownOutside:k(e.onPointerDownOutside,a=>{const u=a.detail.originalEvent,i=u.button===0&&u.ctrlKey===!0;(u.button===2||i)&&a.preventDefault()}),onFocusOutside:k(e.onFocusOutside,a=>a.preventDefault())})}),pn=c.forwardRef((e,t)=>{const n=x(N,e.__scopeDialog),r=c.useRef(!1),o=c.useRef(!1);return l.jsx(He,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var u,i;(u=e.onCloseAutoFocus)==null||u.call(e,a),a.defaultPrevented||(r.current||(i=n.triggerRef.current)==null||i.focus(),a.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:a=>{var g,m;(g=e.onInteractOutside)==null||g.call(e,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const u=a.target;((m=n.triggerRef.current)==null?void 0:m.contains(u))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),He=c.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...u}=e,i=x(N,n),g=c.useRef(null),m=G(t,g);return wt(),l.jsxs(l.Fragment,{children:[l.jsx(Re,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:l.jsx(st,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":se(i.open),...u,ref:m,onDismiss:()=>i.onOpenChange(!1)})}),l.jsxs(l.Fragment,{children:[l.jsx(hn,{titleId:i.titleId}),l.jsx(bn,{contentRef:g,descriptionId:i.descriptionId})]})]})}),ce="DialogTitle",Ke=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=x(ce,n);return l.jsx(_.h2,{id:o.titleId,...r,ref:t})});Ke.displayName=ce;var Ve="DialogDescription",Ge=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=x(Ve,n);return l.jsx(_.p,{id:o.descriptionId,...r,ref:t})});Ge.displayName=Ve;var Xe="DialogClose",Ye=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=x(Xe,n);return l.jsx(_.button,{type:"button",...r,ref:t,onClick:k(e.onClick,()=>o.onOpenChange(!1))})});Ye.displayName=Xe;function se(e){return e?"open":"closed"}var ze="DialogTitleWarning",[In,Ze]=ut(ze,{contentName:N,titleName:ce,docsSlug:"dialog"}),hn=({titleId:e})=>{const t=Ze(ze),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return c.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},yn="DialogDescriptionWarning",bn=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ze(yn).contentName}}.`;return c.useEffect(()=>{var a;const o=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},En=je,Cn=Be,qe=Ue,Qe=$e,Je=Ke,et=Ge,Sn=Ye;const tt=En,wn=Cn,ue=V.forwardRef(({className:e,...t},n)=>l.jsx(qe,{ref:n,className:X("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));ue.displayName=qe.displayName;const nt=V.forwardRef(({className:e,children:t,...n},r)=>l.jsxs(wn,{children:[l.jsx(ue,{}),l.jsxs(Qe,{ref:r,className:X("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,l.jsxs(Sn,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[l.jsx(ft,{className:"h-4 w-4"}),l.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));nt.displayName=Qe.displayName;const rt=V.forwardRef(({className:e,...t},n)=>l.jsx(Je,{ref:n,className:X("text-lg font-semibold leading-none tracking-tight",e),...t}));rt.displayName=Je.displayName;const ot=V.forwardRef(({className:e,...t},n)=>l.jsx(et,{ref:n,className:X("text-sm text-muted-foreground",e),...t}));ot.displayName=et.displayName;ue.__docgenInfo={description:"",methods:[]};nt.__docgenInfo={description:"",methods:[]};rt.__docgenInfo={description:"",methods:[]};ot.__docgenInfo={description:"",methods:[]};const _n={component:tt,title:"Packages/dialog"},U={render:()=>l.jsx(tt,{defaultOpen:!0,children:'This is a "dialog" component example'})};var Se,we,xe;U.parameters={...U.parameters,docs:{...(Se=U.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <Dialog defaultOpen>This is a "dialog" component example</Dialog>
}`,...(xe=(we=U.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};const Mn=["HowToUse"];export{U as HowToUse,Mn as __namedExportsOrder,_n as default};

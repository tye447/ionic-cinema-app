(self.webpackChunkionic_cinema_app=self.webpackChunkionic_cinema_app||[]).push([[3111],{3111:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>D,keyboardDidClose:()=>f,keyboardDidOpen:()=>g,keyboardDidResize:()=>w,resetKeyboardAssist:()=>r,setKeyboardClose:()=>b,setKeyboardOpen:()=>c,startKeyboardAssist:()=>h,trackViewportChanges:()=>u});const o="ionKeyboardDidShow",s="ionKeyboardDidHide";let a={},d={},n=!1;const r=()=>{a={},d={},n=!1},h=e=>{p(e),e.visualViewport&&(d=D(e.visualViewport),e.visualViewport.onresize=()=>{u(e),g()||w(e)?c(e):f(e)&&b(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>c(e,t)),e.addEventListener("keyboardDidHide",()=>b(e))},c=(e,t)=>{l(e,t),n=!0},b=e=>{y(e),n=!1},g=()=>!n&&a.width===d.width&&(a.height-d.height)*d.scale>150,w=e=>n&&!f(e),f=e=>n&&d.height===e.innerHeight,l=(e,t)=>{const i=new CustomEvent(o,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},y=e=>{const t=new CustomEvent(s);e.dispatchEvent(t)},u=e=>{a=Object.assign({},d),d=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
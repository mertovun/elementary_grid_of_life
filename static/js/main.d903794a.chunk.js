(this.webpackJsonpelementary_grid=this.webpackJsonpelementary_grid||[]).push([[0],{27:function(l,e,t){},29:function(l,e,t){},30:function(l,e,t){},31:function(l,e,t){},32:function(l,e,t){},33:function(l,e,t){},34:function(l,e,t){"use strict";t.r(e);var r=t(6),a=t.n(r),s=t(13),c=t(1),f=t(4),n=t.n(f),d=t(18),i=t.n(d),j=t(14),u=t(2),o=function(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,t=1/(l/60);return 4*t/e*1e3},b=function(l){var e=["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"],t=l.split(""),r=Object(u.a)(t,2),a=r[0],s=r[1];return e.indexOf(a)<0?-1:12*Number(s)+e.indexOf(a)},H=function(l){return l<0?0:440*Math.pow(2,(l-69)/12)},h=function(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(j.a)(Array.from(Array(l).keys()).map((function(l){return l+e})))},V=function(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(Math.min(l,t),e)},p=t(3),x=t(15),O=t(19),M=t.n(O),Z=(t(27),t(0)),g=function(l){var e=l.hasHilight,t=l.note,r=l.onToggle,a=l.state,s=l.step,c=Object(x.a)(l,["hasHilight","note","onToggle","state","step"]),f=M()({"eg-key":!0,"eg-key--is-active":a,"eg-key--has-hilight":e}),n={"--step":s,"--note":t};return Object(Z.jsx)("div",Object(p.a)({className:f,style:n,onClick:function(){return r(t)}},c))},m=function(l){var e=[];return h(l.length).forEach((function(t){h(l[0].length).forEach((function(r){var a=1===l[t][r];e.push({key:"".concat(t,"_").concat(r,"_").concat(a?"on":"off"),note:t,step:r,state:a})}))})),e},v=function(l){var e=l.notes,t=l.hilightStep,r=l.onToggleNote,a=Object(f.useState)("none"),s=Object(u.a)(a,2),c=s[0],n=s[1],d=function(){return n("none")};Object(f.useEffect)((function(){return document.addEventListener("mouseup",d),function(){document.removeEventListener("mouseup",d)}}));var i={"--columns":e[0].length,"--rows":e.length},j={"--cursor":t};return Object(Z.jsxs)("div",{className:"eg-grid__field",style:i,children:[m(e).map((function(l){var t=l.key,a=l.note,s=l.step,f=l.state;return Object(Z.jsx)(g,{note:a,step:s,state:f,onToggle:function(){return r(a,s,f?0:1)},onMouseEnter:function(){return"none"!==c&&function(l,t){"fill"===c&&0===e[l][t]&&r(l,t,1),"clear"===c&&1===e[l][t]&&r(l,t,0)}(a,s)},onMouseDown:function(){return function(l,t){0===e[l][t]?(r(l,t,1),n("fill")):(r(l,t,0),n("clear"))}(a,s)}},t)})),Object(Z.jsx)("div",{className:"eg-grid__cursor",style:j})]})},y=(t(29),function(){return Object(Z.jsxs)("div",{className:"eg-splainer",children:[Object(Z.jsxs)("span",{children:["Made with ",Object(Z.jsx)("a",{href:"https://www.elementary.audio/",children:"Elementary Audio"})]}),Object(Z.jsxs)("span",{children:["Source on ",Object(Z.jsx)("a",{href:"https://github.com/teetow/elementary_grid",children:"GitHub"})]}),Object(Z.jsxs)("span",{children:["Check out my ",Object(Z.jsx)("a",{href:"https://soundcloud.com/teetow",children:"SoundCloud"})," =)"]})]})}),k=function(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.gain,r=void 0===t?1:t,a=e.detune,s=void 0===a?.007:a,f=e.sharpness,n=void 0===f?1:f,d=e.richness,i=void 0===d?1:d,j=function(l,e){return c.b.mul(e,c.b.add(c.b.sin(c.b.mul(2*Math.PI,l)),c.b.sin(c.b.mul(3*Math.PI,l,.1*n))))},u=c.b.add(c.b.mul(j(c.b.phasor(l*(1-s)),.5*i)),c.b.mul(j(c.b.phasor(1*l),.8)),c.b.mul(j(c.b.phasor(l*(1+s)),.5*i)));return u=c.b.tanh(u),u=c.b.highpass(60,1,u),c.b.mul(2*r,u)};k.desc="Not quite a supersaw, but certainly a stabby little rascal";var w=function(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.gain,r=void 0===t?1:t,a=e.richness,s=void 0===a?1:a,f=e.detune,n=void 0===f?.004:f,d=c.b.add(c.b.cycle(l*(1-n)),c.b.mul(.5*s,c.b.cycle(2*l*(1-.5*n))),c.b.mul(.5*s,c.b.cycle(2*l*(1+.5*n))),c.b.cycle(l*(1+n)));return d=c.b.highpass(200,1,d),d=c.b.mul(d,2*r),d=c.b.tanh(d)};w.desc="Pseudo-FM bell-like patch with a sprinkle of unpredictability";var _=function(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.freq,r=void 0===t?45:t,a=e.speed,s=void 0===a?1:a,f=e.pop,n=void 0===f?1:f,d=e.tail,i=void 0===d?1:d,j=c.b.adsr(.005,.3*s,0,0,l),u=c.b.adsr(1e-4,.2*s,0,0,l),o=c.b.adsr(1e-4,.5,0,0,l),b=c.b.add(1,c.b.mul(3*n,u));b=c.b.add(0,c.b.mul(.5*n,o),b);var H=c.b.cycle(c.b.mul(b,r));return H=c.b.tanh(c.b.mul(1.8,j,H)),H=c.b.highpass(r+10,6*i,H),H=c.b.tanh(H)},C={stab:k,ding:w,kick:_},N=function(l){var e=l.tracks,t=l.tone,r=l.scale,a=l.tick,s=l.sync,f=function(l){return c.b.adsr(.01,.3,.1,1,function(l){return c.b.seq({key:"".concat(l,":seq"),seq:e[l],loop:!1},a.current,s.current)}(l))},n=function(l){return e=r[l],C[t](e,{gain:.8});var e},d=function(l){return c.b.mul(f(l),n(l))};return c.b.add(c.b.add(h(4,0).map(d)),c.b.add(h(4,4).map(d)),c.b.add(h(4,8).map(d)),c.b.add(h(4,12).map(d)))},L=function(l){var e=l.tracks,t=l.scale,r=l.withKick,a=void 0===r||r,s=l.bpm,n=void 0===s?120:s,d=l.tone,i=void 0===d?"ding":d,j=Object(f.useRef)(c.b.metro({name:"tick",interval:o(n,16)})),u=Object(f.useRef)(c.b.metro({name:"beat",interval:o(n,4)})),b=Object(f.useRef)(c.b.metro({name:"sync",interval:o(n,1)})),H=Object(f.useCallback)((function(){try{var l=N({tracks:e,tone:i,scale:t,tick:j,sync:b});l=function(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:120,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=c.b.delay({size:44100},c.b.ms2samps(3*o(e,16)),-.3,l);return c.b.add(c.b.mul(l,V(2-t)),c.b.mul(r,t,.5))}(l,n,1),l=c.b.tanh(c.b.mul(.4,l)),a&&(l=c.b.add(l,function(l){return _(l.current,{pop:1.3})}(u))),l=function(l,e,t,r){return c.b.add(c.b.mul(0,e.current),c.b.mul(0,t.current),c.b.mul(0,r.current),l)}(l,j,u,b),c.a.render(l,l)}catch(r){console.log(r)}}),[e,i,t,n,a]);Object(f.useEffect)((function(){c.a.__renderer&&H()}),[e,i,t,n,a,H])},S=(t(30),function(){return Object(Z.jsxs)("svg",{className:"eg-logo",viewBox:"0 0 122 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(Z.jsxs)("radialGradient",{id:"grad-text",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(20 0) rotate(10.5392) scale(42.4514 15.2674)",children:[Object(Z.jsx)("stop",{stopColor:"var(--gd-text-s0)"}),Object(Z.jsx)("stop",{offset:"1",stopColor:"var(--gd-text-s1)"})]}),Object(Z.jsxs)("radialGradient",{id:"led-full",gradientUnits:"objectBoundingBox",gradientTransform:"translate(-0.25 -0.3) scale(1.41421)",children:[Object(Z.jsx)("stop",{stopColor:"var(--gd-full-s0)"}),Object(Z.jsx)("stop",{offset:"1",stopColor:"var(--gd-full-s1)"})]}),Object(Z.jsxs)("radialGradient",{id:"led-half",gradientUnits:"objectBoundingBox",children:[Object(Z.jsx)("stop",{stopColor:"var(--gd-half-s0)"}),Object(Z.jsx)("stop",{offset:"1",stopColor:"var(--gd-half-s1)"})]}),Object(Z.jsxs)("radialGradient",{id:"led-off",gradientUnits:"objectBoundingBox",children:[Object(Z.jsx)("stop",{stopColor:"var(--gd-off-s0)"}),Object(Z.jsx)("stop",{offset:"1",stopColor:"var(--gd-off-s1)"})]}),Object(Z.jsxs)("g",{id:"text",children:[Object(Z.jsx)("path",{d:"M5.28333 7.69336H2.15247V10.332H5.85754V12H0.1427V2.04688H5.84387V3.72168H2.15247V6.07324H5.28333V7.69336Z",fill:"url(#grad-text)"}),Object(Z.jsx)("path",{d:"M10.0094 10.332H13.5368V12H7.99965V2.04688H10.0094V10.332Z",fill:"url(#grad-text)"}),Object(Z.jsx)("path",{d:"M20.8195 7.69336H17.6886V10.332H21.3937V12H15.6789V2.04688H21.38V3.72168H17.6886V6.07324H20.8195V7.69336Z",fill:"url(#grad-text)"}),Object(Z.jsx)("path",{d:"M26.1608 2.04688L28.0407 9.24512L29.9138 2.04688H32.5388V12H30.5222V9.30664L30.7067 5.15723L28.7175 12H27.3503L25.361 5.15723L25.5456 9.30664V12H23.5358V2.04688H26.1608Z",fill:"url(#grad-text)"}),Object(Z.jsx)("path",{d:"M40.2795 7.69336H37.1486V10.332H40.8537V12H35.1389V2.04688H40.84V3.72168H37.1486V6.07324H40.2795V7.69336Z",fill:"url(#grad-text)"}),Object(Z.jsx)("path",{d:"M49.9548 12H47.945L45.0056 5.47168V12H42.9958V2.04688H45.0056L47.9519 8.58203V2.04688H49.9548V12Z",fill:"url(#grad-text)"}),Object(Z.jsx)("path",{d:"M58.7893 3.72168H56.3284V12H54.3118V3.72168H51.8918V2.04688H58.7893V3.72168Z",fill:"url(#grad-text)"}),Object(Z.jsx)("path",{d:"M64.8552 9.96289H62.114L61.5808 12H59.4548L62.5652 2.04688H64.4041L67.5349 12H65.3884L64.8552 9.96289ZM62.5515 8.28809H64.4109L63.4812 4.74023L62.5515 8.28809Z",fill:"url(#grad-text)"}),Object(Z.jsx)("path",{d:"M72.4661 8.36328H71.468V12H69.4583V2.04688H72.6643C73.6715 2.04688 74.4485 2.30892 74.9954 2.83301C75.5468 3.35254 75.8225 4.0931 75.8225 5.05469C75.8225 6.3763 75.3417 7.30143 74.3802 7.83008L76.1233 11.9043V12H73.9632L72.4661 8.36328ZM71.468 6.68848H72.6096C73.0107 6.68848 73.3115 6.55632 73.512 6.29199C73.7125 6.02311 73.8128 5.66536 73.8128 5.21875C73.8128 4.2207 73.4231 3.72168 72.6438 3.72168H71.468V6.68848Z",fill:"url(#grad-text)"}),Object(Z.jsx)("path",{d:"M80.8563 6.51758L82.3533 2.04688H84.5408L81.8748 8.39062V12H79.8377V8.39062L77.1649 2.04688H79.3524L80.8563 6.51758Z",fill:"url(#grad-text)"})]}),Object(Z.jsxs)("g",{id:"off-leds",children:[Object(Z.jsx)("path",{d:"M88 0H86V2H88V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M88 10H86V12H88V10Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M88 2H86V4H88V2Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M88 4H86V6H88V4Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M88 6H86V8H88V6Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M88 8H86V10H88V8Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M90 0H88V2H90V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M90 12H88V14H90V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M92 0H90V2H92V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M92 12H90V14H92V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M92 4H90V6H92V4Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M92 6H90V8H92V6Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M92 8H90V10H92V8Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M94 0H92V2H94V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M94 12H92V14H94V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M94 4H92V6H94V4Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M94 8H92V10H94V8Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M96 0H94V2H96V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M96 12H94V14H96V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M96 4H94V6H96V4Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M98 0H96V2H98V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M98 10H96V12H98V10Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M98 12H96V14H98V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M98 2H96V4H98V2Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M98 4H96V6H98V4Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M98 6H96V8H98V6Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M98 8H96V10H98V8Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M100 0H98V2H100V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M100 12H98V14H100V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M102 0H100V2H102V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M102 10H100V12H102V10Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M102 12H100V14H102V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M102 4H100V6H102V4Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M102 8H100V10H102V8Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M104 0H102V2H104V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M104 10H102V12H104V10Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M104 12H102V14H104V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M104 4H102V6H104V4Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M104 8H102V10H104V8Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M106 0H104V2H106V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M106 12H104V14H106V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M108 0H106V2H108V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M108 10H106V12H108V10Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M108 12H106V14H108V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M108 2H106V4H108V2Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M108 4H106V6H108V4Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M108 6H106V8H108V6Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M108 8H106V10H108V8Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M110 0H108V2H110V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M110 12H108V14H110V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M112 0H110V2H112V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M112 10H110V12H112V10Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M112 12H110V14H112V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M112 2H110V4H112V2Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M112 4H110V6H112V4Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M112 6H110V8H112V6Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M112 8H110V10H112V8Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M114 0H112V2H114V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M114 12H112V14H114V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M116 0H114V2H116V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M116 12H114V14H116V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M116 4H114V6H116V4Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M116 6H114V8H116V6Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M116 8H114V10H116V8Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M118 0H116V2H118V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M118 12H116V14H118V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M118 4H116V6H118V4Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M118 6H116V8H118V6Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M118 8H116V10H118V8Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M120 0H118V2H120V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M120 12H118V14H120V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M122 0H120V2H122V0Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M122 10H120V12H122V10Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M122 12H120V14H122V12Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M122 2H120V4H122V2Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M122 4H120V6H122V4Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M122 6H120V8H122V6Z",fill:"url(#led-off)"}),Object(Z.jsx)("path",{d:"M122 8H120V10H122V8Z",fill:"url(#led-off)"})]}),Object(Z.jsxs)("g",{id:"half-leds",children:[Object(Z.jsx)("path",{d:"M106 2H104V4H106V2Z",fill:"url(#led-half)"}),Object(Z.jsx)("path",{d:"M90 2H88V4H90V2Z",fill:"url(#led-half)"}),Object(Z.jsx)("path",{d:"M90 10H88V12H90V10Z",fill:"url(#led-half)"}),Object(Z.jsx)("path",{d:"M96 10H94V12H96V10Z",fill:"url(#led-half)"}),Object(Z.jsx)("path",{d:"M120 10H118V12H120V10Z",fill:"url(#led-half)"}),Object(Z.jsx)("path",{d:"M120 2H118V4H120V2Z",fill:"url(#led-half)"}),Object(Z.jsx)("path",{d:"M106 6H104V8H106V6Z",fill:"url(#led-half)"})]}),Object(Z.jsxs)("g",{id:"full-leds",children:[Object(Z.jsx)("path",{d:"M92 2H90V4H92V2Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M94 2H92V4H94V2Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M96 2H94V4H96V2Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M100 2H98V4H100V2Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M114 2H112V4H114V2Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M110 2H108V4H110V2Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M102 2H100V4H102V2Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M116 2H114V4H116V2Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M104 2H102V4H104V2Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M118 2H116V4H118V2Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M106 4H104V6H106V4Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M120 4H118V6H120V4Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M102 6H100V8H102V6Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M116 10H114V12H116V10Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M104 6H102V8H104V6Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M118 10H116V12H118V10Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M106 8H104V10H106V8Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M120 6H118V8H120V6Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M106 10H104V12H106V10Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M120 8H118V10H120V8Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M100 4H98V6H100V4Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M114 4H112V6H114V4Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M110 4H108V6H110V4Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M100 6H98V8H100V6Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M114 6H112V8H114V6Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M110 6H108V8H110V6Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M100 8H98V10H100V8Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M114 8H112V10H114V8Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M110 8H108V10H110V8Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M100 10H98V12H100V10Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M114 10H112V12H114V10Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M110 10H108V12H110V10Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M90 4H88V6H90V4Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M90 6H88V8H90V6Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M94 6H92V8H94V6Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M96 8H94V10H96V8Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M96 6H94V8H96V6Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M94 10H92V12H94V10Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M92 10H90V12H92V10Z",fill:"url(#led-full)"}),Object(Z.jsx)("path",{d:"M90 8H88V10H90V8Z",fill:"url(#led-full)"})]})]})}),T=(t(31),function(l){var e=l.active,t=l.setActive;return Object(Z.jsxs)("div",{className:"eg-synth__option eg-synth__kick-switch",children:[Object(Z.jsx)("input",{className:"eg-synth__switch",type:"checkbox",id:"kick",checked:e,onChange:function(){return t(!e)}}),Object(Z.jsx)("label",{htmlFor:"kick",children:"Kick"})]})}),A=[{name:"stab",label:"Stab"},{name:"ding",label:"Ding"}],B=function(l){var e=l.currentTone,t=l.onSetTone;return Object(Z.jsx)("div",{className:"eg-synth__tone-picker",children:A.map((function(l){return Object(Z.jsxs)("div",{className:"eg-synth__option",children:[Object(Z.jsx)("input",{type:"radio",className:"eg-synth__led",id:l.name,value:l.name,checked:l.name===e,onChange:function(){return t(l.name)}}),Object(Z.jsx)("label",{htmlFor:l.name,children:l.label})]},l.name)}))})};var E=function(l){var e=l.scale,t=l.sequence,r=l.onClear,a=Object(f.useState)("stab"),s=Object(u.a)(a,2),c=s[0],n=s[1],d=Object(f.useState)(!1),i=Object(u.a)(d,2),j=i[0],o=i[1];return L({tracks:t,scale:e,tone:c,withKick:j}),Object(Z.jsxs)("div",{className:"eg-synthoptions",children:[Object(Z.jsx)(S,{}),Object(Z.jsx)("button",{type:"button",className:"eg-button eg-synth__clearbutton",onClick:r,children:"Clear"}),Object(Z.jsx)(B,{currentTone:c,onSetTone:n}),Object(Z.jsx)(T,{active:j,setActive:o})]})},G=c.a,q=(t(32),function(l,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return h(e).map((function(e){return"".concat(l[e%l.length]).concat(Math.floor(e/l.length)+t)})).flat().map(b).map(H)}(["c","d","f","g","a"],16)),U=function(l){};G.on("load",(function(){G.on("metro",(function(l){U(l.source)}))}));var I=function(){return Array.from(Array(16),(function(){return new Array(16).fill(0)}))},F=function(){var l=Object(f.useState)(I()),e=Object(u.a)(l,2),t=e[0],r=e[1],a=Object(f.useState)(0),s=Object(u.a)(a,2),c=s[0],n=s[1],d=Object(f.useCallback)((function(l){"sync"===l?n(0):"tick"===l&&n((function(l){return(l+1)%t.length}))}),[t]);return U=d,Object(Z.jsxs)("div",{className:"eg-app",children:[Object(Z.jsx)(E,{scale:q,sequence:t,onClear:function(){return r(I())}}),Object(Z.jsx)(v,{keyrange:16,notes:t,onToggleNote:function(l,e,t){r((function(r){var a=Object(j.a)(r);return a[l][e]=t,a}))},hilightStep:c}),Object(Z.jsx)(y,{})]})},D=(t(33),function(){return Object(Z.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"eg-splash__playbutton",viewBox:"0 0 24 24",fill:"none",width:"24",height:"24",children:[Object(Z.jsx)("defs",{children:Object(Z.jsxs)("radialGradient",{id:"grad",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(11 12) rotate(45) scale(7)",children:[Object(Z.jsx)("stop",{stopColor:"var(--color-grad-s1)"}),Object(Z.jsx)("stop",{offset:"1",stopColor:"var(--color-grad-s0)"})]})}),Object(Z.jsxs)("filter",{id:"dropshadow",x:"-100%",y:"-100%",height:"400%",width:"400%",children:[Object(Z.jsx)("feComponentTransfer",{in:"SourceAlpha",result:"alpha",children:Object(Z.jsx)("feFuncA",{type:"linear",slope:"0.4"})}),Object(Z.jsx)("feColorMatrix",{in:"alpha",type:"matrix",values:" 1 0 0 0 1 0 1 0 0 0.5 0 0 1 0 0.2 0 0 0 1 0 ",result:"mask"}),Object(Z.jsx)("feGaussianBlur",{in:"mask",stdDeviation:3.3}),Object(Z.jsxs)("feMerge",{children:[Object(Z.jsx)("feMergeNode",{}),Object(Z.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),Object(Z.jsx)("path",{className:"eg-path__primary",d:"M8 4L19 12L8 20Z",style:{filter:"url(#dropshadow)"}})]})}),K=function(l){var e=Object.assign({},l);return Object(Z.jsxs)("div",Object(p.a)(Object(p.a)({className:"eg-splash"},e),{},{children:[Object(Z.jsx)("h3",{className:"eg-splash__title",children:"Hello."}),Object(Z.jsx)(D,{}),Object(Z.jsx)("h3",{className:"eg-splash__title-2",children:"Click this."}),Object(Z.jsx)("h3",{className:"eg-splash__title-3",children:"It'll be fun."})]}))},P=new AudioContext,R=function(){i.a.render(Object(Z.jsx)(n.a.StrictMode,{children:Object(Z.jsx)(F,{})}),document.getElementById("root"))};function z(){return(z=Object(s.a)(a.a.mark((function l(){return a.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,c.a.initialize(P,{numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2]});case 2:l.sent.connect(P.destination);case 4:case"end":return l.stop()}}),l)})))).apply(this,arguments)}c.a.on("load",(function(){"running"!==P.state?i.a.render(Object(Z.jsx)(K,{onClick:function(){return P.resume().then((function(){return R()}))}}),document.getElementById("root")):R()})),function(){z.apply(this,arguments)}()}},[[34,1,2]]]);
//# sourceMappingURL=main.d903794a.chunk.js.map
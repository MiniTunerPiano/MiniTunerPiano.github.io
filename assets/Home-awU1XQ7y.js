var He=Object.defineProperty;var Ye=(e,r,o)=>r in e?He(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o;var D=(e,r,o)=>Ye(e,typeof r!="symbol"?r+"":r,o);import{d as j,u as We,o as F,c as P,F as K,r as ie,a as T,n as Q,t as k,b as $,e as ae,_ as te,f as C,p as Re,m as Ke,g as Xe,h as Je,i as Qe,j as Ze,k as ea,l as aa,q as ta,s as sa,v as ke,w as na,x as ra,y as oa,z as la,A as ia,B as ua,C as ca,D as ma,E as va,G as Le,H as b,I as da,J as fa,K as ya,L as ha,M as pa,N as le,O as Sa,P as W,V as Te,Q as L,R as q,S as _,T as ee,U as se,W as Ae,X as H,Y as Z,Z as me,$ as ga,a0 as Ie,a1 as wa,a2 as Aa,a3 as Fa,a4 as ba,a5 as Ea}from"./index-mEKNuEPJ.js";import{c as V}from"./_commonjsHelpers-Cpj98o6Y.js";const x=class x{};D(x,"IsOnRange",(r,o,m)=>m<o&&m>r),D(x,"Clamp",(r,o=0,m=1)=>Math.min(m,Math.max(o,r))),D(x,"Lerp",(r,o,m)=>r*(1-m)+o*m),D(x,"Invlerp",(r,o,m)=>x.Clamp((m-r)/(o-r))),D(x,"ToRange",(r,o,m,i=0,u=1)=>x.Lerp(i,u,x.Invlerp(o,m,r)));let U=x;class E{constructor(r,o,m){D(this,"$natural",!0);D(this,"name",{classic:E.Classic.ENotes.NONE,american:E.American.ENotes.NONE});D(this,"frequency",{main:0,min:0,max:0});D(this,"isNatural",()=>this.$natural);this.frequency.main=r,o&&(this.name.classic=o),m&&(this.name.american=m)}}class G extends E{constructor(o,m=E.Classic.ENotes.NONE,i=E.American.ENotes.NONE){super(o,m,i);D(this,"sharp",E.EmptyNote);D(this,"flat",E.EmptyNote);this.$natural=!1}}(e=>{(u=>{u[u.CLASSIC=0]="CLASSIC",u[u.AMERICAN=1]="AMERICAN"})(e.Systems||(e.Systems={})),(u=>{u[u.SHARP=0]="SHARP",u[u.FLAT=1]="FLAT",u[u.NATURAL=2]="NATURAL",u[u.DOUBLE_SHARP=3]="DOUBLE_SHARP",u[u.DOUBLE_FLAT=4]="DOUBLE_FLAT"})(e.Accidentals||(e.Accidentals={})),(u=>{(n=>{n.NONE="?",n.DO="DO",n.DOS_REF="DO# REb",n.RE="RE",n.RES_MIF="RE# MIb",n.MI="MI",n.FA="FA",n.FAS_SOLF="FA# SOLb",n.SOL="SOL",n.SOLS_LAF="SOL# LAb",n.LA="LA",n.LAS_SIF="LA# SIb",n.SI="SI"})(u.ENotes||(u.ENotes={}))})(e.Classic||(e.Classic={})),(u=>{(n=>{n.NONE="?",n.C="C",n.CS_DF="C# Db",n.D="D",n.DS_EF="D# Eb",n.E="E",n.F="F",n.FS_GF="F# Gb",n.G="G",n.GS_AF="G# Ab",n.A="A",n.AS_BF="A# Bb",n.B="B"})(u.ENotes||(u.ENotes={}))})(e.American||(e.American={}));let r=[new e(261.63,"DO","C"),new G(277.18,"DO# REb","C# Db"),new e(293.66,"RE","D"),new G(311.13,"RE# MIb","D# Eb"),new e(329.63,"MI","E"),new e(349.23,"FA","F"),new G(369.99,"FA# SOLb","F# Gb"),new e(392,"SOL","G"),new G(415.3,"SOL# LAb","G# Ab"),new e(440,"LA","A"),new G(466.16,"LA# SIb","A# Bb"),new e(493.88,"SI","B")];e.Notes=r,e.EmptyNote=new G(0);let o=[],m=[];const i=(u,n)=>Math.sqrt(u*n);e.FillMedFrequencys=(u,n,s)=>{for(let t=0;t<u.length;t++){{const c=t>0?u[t-1].frequency.main:u[u.length-1].frequency.main/2;u[t].frequency.min=i(c,u[t].frequency.main)}{const c=t<u.length-1?u[t+1].frequency.main:u[0].frequency.main*2;u[t].frequency.max=i(u[t].frequency.main,c)}u[t]instanceof G?(u[t].sharp=u[t-1],u[t].flat=u[t+1],s.push(u[t])):(n.push(u[t]),t<u.length-1&&!(u[t+1]instanceof G)&&s.push(e.EmptyNote))}},(0,e.FillMedFrequencys)(r,o,m),e.Naturals=o,e.Semis=m})(E||(E={}));var N;(e=>{e.OCTAVE_CENTRAL=4,e.OCTAVE_RANGE={MIN:1,MAX:7};const r=(t,c)=>t/Math.pow(2,c),o=(t,c)=>t*Math.pow(2,c),m=(t,c)=>t==e.OCTAVE_CENTRAL?c:t<e.OCTAVE_CENTRAL?r(c,e.OCTAVE_CENTRAL-t):o(c,t-e.OCTAVE_CENTRAL);let i=[],u=[],n=[];for(let t=e.OCTAVE_RANGE.MIN;t<=e.OCTAVE_RANGE.MAX;t++){let c=[],y=[],l=[];E.Notes.forEach(a=>{const v=m(t,a.frequency.main);let S;a instanceof G?S=new G(v,a.name.classic,a.name.american):S=new E(v,a.name.classic,a.name.american),c.push(S)}),E.FillMedFrequencys(c,y,l),i.push(c),u.push(y),n.push(l)}const s=t=>U.Clamp(t,e.OCTAVE_RANGE.MIN,e.OCTAVE_RANGE.MAX)-e.OCTAVE_RANGE.MIN;e.GetNotesAtOctave=t=>i[s(t)],e.GetNaturalsAtOctave=t=>u[s(t)],e.GetSemisAtOctave=t=>n[s(t)],e.GetNoteAtOctave=(t,c)=>(0,e.GetNotesAtOctave)(t)[c]})(N||(N={}));const Ca=(e,r,o)=>{let m=parseInt(e,16)&255,i=parseInt(r,16)&255;return Math.round(m+(i-m)*o).toString(16).padStart(2,"0")},qa=(e,r,o)=>{let m=parseInt(e.slice(1),16),i=parseInt(r.slice(1),16),u=m>>16&255,n=m>>8&255,s=m&255,t=i>>16&255,c=i>>8&255,y=i&255,l=Math.round(u+(t-u)*o),a=Math.round(n+(c-n)*o),v=Math.round(s+(y-s)*o);return`#${(l<<16|a<<8|v).toString(16).padStart(6,"0")}`},Oa=j({__name:"TunerDigitalNeedle",props:{frequency:{},noteFreq:{default:()=>E.EmptyNote.frequency},size:{},top:{},left:{},showNumbers:{type:Boolean}},setup(e){const r=We(),o=i=>{i-=50,i=Math.abs(i);const u=r.global.current.value.colors.primary,n=r.global.current.value.colors["on-background"],s=r.global.current.value.colors["on-surface"];let t,c="ff";if(i<=10)t=u;else{const y=(i-10)/40;t=qa(s,n,y),c=Ca("ff","40",y)}return t+c},m=()=>U.ToRange(e.frequency,e.noteFreq.min,e.noteFreq.max,-90,90);return(i,u)=>(F(),P("div",{class:"back-circle",style:Q(`width:${i.size??24}em; height:${i.size??24}em; top:${i.top??1}em; left:${i.left??0}em`)},[(F(),P(K,null,ie(101,(n,s)=>T("div",{class:"line-cont",style:Q(`transform: rotateZ(${-90+s*1.8}deg);`)},[i.showNumbers&&s%10==0?(F(),P("span",{key:0,class:"num",style:Q("color:"+o(s))},k(s-50),5)):$("",!0),T("span",{class:ae(`line ${s%10==0?"big":s%5==0?"half":"small"}`),style:Q("background-color:"+o(s))},null,6)],4)),64)),T("div",{class:"line-cont",style:Q(`transform: rotateZ(${m()}deg)`)},u[0]||(u[0]=[T("span",{class:"line needle"},null,-1)]),4)],4))}}),De=te(Oa,[["__scopeId","data-v-6c15af88"]]);var X={},be={},ve=V&&V.__assign||function(){return ve=Object.assign||function(e){for(var r,o=1,m=arguments.length;o<m;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},ve.apply(this,arguments)};Object.defineProperty(be,"__esModule",{value:!0});var Pa={threshold:.1,sampleRate:44100,probabilityThreshold:.1};function Ma(e){e===void 0&&(e={});var r=ve(ve({},Pa),e),o=r.threshold,m=r.sampleRate,i=r.probabilityThreshold;return function(n){var s;for(s=1;s<n.length;s*=2);s/=2;for(var t=s/2,c=new Float32Array(t),y=0,l,a=0;a<t;a++)c[a]=0;for(var a=1;a<t;a++)for(var v=0;v<t;v++){var S=n[v]-n[v+a];c[a]+=S*S}c[0]=1,c[1]=1;for(var A=0,a=1;a<t;a++)A+=c[a],c[a]*=a/A;for(l=2;l<t;l++)if(c[l]<o){for(;l+1<t&&c[l+1]<c[l];)l++;y=1-c[l];break}if(l===t||c[l]>=o||y<i)return null;var h,d,f;if(l<1?d=l:d=l-1,l+1<t?f=l+1:f=l,d===l)c[l]<=c[f]?h=l:h=f;else if(f===l)c[l]<=c[d]?h=l:h=d;else{var p=c[d],g=c[l],w=c[f];h=l+(w-p)/(2*(2*g-w-p))}return m/h}}be.YIN=Ma;var Ee={},de=V&&V.__assign||function(){return de=Object.assign||function(e){for(var r,o=1,m=arguments.length;o<m;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},de.apply(this,arguments)};Object.defineProperty(Ee,"__esModule",{value:!0});var Ta={sampleRate:44100,minFrequency:82,maxFrequency:1e3,ratio:5,sensitivity:.1};function Ia(e){e===void 0&&(e={});var r=de(de({},Ta),e),o=r.sampleRate,m=r.minFrequency,i=r.maxFrequency,u=r.sensitivity,n=r.ratio,s=[],t=Math.ceil(o/m),c=Math.floor(o/i);return function(l){var a=l.length,v=0,S=1/0,A=-1/0,h,d,f,p,g,w,O,M;for(p=0;p<a;p++)if(c<=p&&p<=t){for(O=0,M=p,v=0,h=[],d=[];O<a-p;v++,M++,O++)h[v]=l[O],d[v]=l[M];var R=h.length;for(f=[],w=0;w<R;w++)f[w]=h[w]-d[w];var z=0;for(w=0;w<R;w++)z+=Math.abs(f[w]);s[p]=z}for(g=c;g<t;g++)s[g]<S&&(S=s[g]),s[g]>A&&(A=s[g]);var Y=Math.round(u*(A-S)+S);for(g=c;g<=t&&s[g]>Y;g++);var re=c/2;S=s[g];var B=g;for(p=g-1;p<g+re&&p<=t;p++)s[p]<S&&(S=s[p],B=p);return Math.round(s[B]*n)<A?o/B:null}}Ee.AMDF=Ia;var Ce={},fe=V&&V.__assign||function(){return fe=Object.assign||function(e){for(var r,o=1,m=arguments.length;o<m;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},fe.apply(this,arguments)};Object.defineProperty(Ce,"__esModule",{value:!0});var _e={sampleRate:44100};function _a(e){e===void 0&&(e=_e);var r=fe(fe({},_e),e),o=r.sampleRate;return function(i){var u=i.length,n=0,s,t,c,y;for(s=0;s<u;s++)y=i[s],n+=y*y;if(n=Math.sqrt(n/u),n<.01)return-1;var l=0,a=u-1,v=.2;for(s=0;s<u/2;s++)if(Math.abs(i[s])<v){l=s;break}for(s=1;s<u/2;s++)if(Math.abs(i[u-s])<v){a=u-s;break}var S=i.slice(l,a),A=S.length,h=new Array(A).fill(0);for(s=0;s<A;s++)for(t=0;t<A-s;t++)h[s]=h[s]+S[t]*S[t+s];for(c=0;h[c]>h[c+1];)c++;var d=-1,f=-1;for(s=c;s<A;s++)h[s]>d&&(d=h[s],f=s);var p=f,g=h[p-1],w=h[p],O=h[p+1],M=(g+O-2*w)/2,R=(O-g)/2;return M&&(p=p-R/(2*M)),o/p}}Ce.ACF2PLUS=_a;var qe={},ye=V&&V.__assign||function(){return ye=Object.assign||function(e){for(var r,o=1,m=arguments.length;o<m;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},ye.apply(this,arguments)};Object.defineProperty(qe,"__esModule",{value:!0});var Na=6,Ra=3e3,ka=3,La=.75,Da={sampleRate:44100};function $a(e){e===void 0&&(e={});var r=ye(ye({},Da),e),o=r.sampleRate;return function(i){for(var u=[],n=[],s=i.length,t=null,c=0,y=0,l=0,a=0;a<s;a++){var v=i[a];c=c+v,l=Math.max(l,v),y=Math.min(y,v)}c/=s,y-=c,l-=c;for(var S=l>-1*y?l:-1*y,A=S*La,h=0,d=-1,f=i.length,p,g,w;p=~~(o/(Math.pow(2,h)*Ra)),!(f<2);){var O=void 0,M=-1e3,R=-1e6,z=-1e6,Y=!1,re=!1;w=0,g=0;for(var a=2;a<f;a++){var B=i[a]-c,pe=i[a-1]-c;pe<=0&&B>0&&(Y=!0),pe>=0&&B<0&&(re=!0),O=B-pe,M>-1e3&&(re&&M<0&&O>=0&&Math.abs(B)>=A&&a>R+p&&(u[w++]=a,R=a,re=!1),Y&&M>0&&O<=0&&Math.abs(B)>=A&&a>z+p&&(n[g++]=a,z=a,Y=!1)),M=O}if(w===0&&g===0)break;for(var Pe=void 0,oe=[],a=0;a<f;a++)oe[a]=0;for(var a=0;a<w;a++)for(var I=1;I<ka;I++)a+I<w&&(Pe=Math.abs(u[a]-u[a+I]),oe[Pe]+=1);for(var J=-1,Se=-1,a=0;a<f;a++){for(var ue=0,I=-1*p;I<=p;I++)a+I>=0&&a+I<f&&(ue+=oe[a+I]);ue===Se?a===2*J&&(J=a):ue>Se&&(Se=ue,J=a)}for(var ce=0,Me=0,I=-p;I<=p;I++)if(J+I>=0&&J+I<s){var ge=oe[J+I];ge>0&&(Me+=ge,ce+=(J+I)*ge)}if(ce/=Me,d>-1&&Math.abs(ce*2-d)<=2*p){t=o/(Math.pow(2,h-1)*d);break}if(d=ce,h++,h>=Na||f<2)break;var we=i.subarray(0);f===oe.length&&(we=new Float32Array(f/2));for(var a=0;a<f/2;a++)we[a]=(i[2*a]+i[2*a+1])/2;i=we,f/=2}return t}}qe.DynamicWavelet=$a;var Oe={},he=V&&V.__assign||function(){return he=Object.assign||function(e){for(var r,o=1,m=arguments.length;o<m;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},he.apply(this,arguments)};Object.defineProperty(Oe,"__esModule",{value:!0});var Va={bufferSize:1024,cutoff:.97,sampleRate:44100};function Ga(e){e===void 0&&(e={});var r=he(he({},Va),e),o=r.bufferSize,m=r.cutoff,i=r.sampleRate,u=.5,n=80,s=new Float32Array(o),t=new Float32Array(o),c,y,l=[],a=[],v=[];function S(d){var f,p;t[0]=d[0]*d[0];for(var g=1;g<d.length;g+=1)t[g]=d[g]*d[g]+t[g-1];for(var w=0;w<d.length;w++){f=0,p=t[d.length-1-w]+t[d.length-1]-t[w];for(var g=0;g<d.length-w;g++)f+=d[g]*d[g+w];s[w]=2*f/p}}function A(d){var f=s[d-1],p=s[d],g=s[d+1],w=d,O=g+f-2*p;if(O===0)c=w,y=p;else{var M=f-g;c=w+M/(2*O),y=p-M*M/(8*O)}}function h(){for(var d=0,f=0;d<(s.length-1)/3&&s[d]>0;)d++;for(;d<s.length-1&&s[d]<=0;)d++;for(d==0&&(d=1);d<s.length-1;)if(s[d]>s[d-1]&&s[d]>=s[d+1]&&(f==0||s[d]>s[f])&&(f=d),d++,d<s.length-1&&s[d]<=0)for(f>0&&(l.push(f),f=0);d<s.length-1&&s[d]<=0;)d++;f>0&&l.push(f)}return function(f){var p;l=[],a=[],v=[],S(f),h();for(var g=-1/0,w=0;w<l.length;w++){var O=l[w];g=Math.max(g,s[O]),s[O]>u&&(A(O),v.push(y),a.push(c),g=Math.max(g,y))}if(a.length){for(var M=m*g,R=0,w=0;w<v.length;w++)if(v[w]>=M){R=w;break}var z=a[R],Y=i/z;Y>n?p=Y:p=-1}else p=-1;return{probability:g,freq:p}}}Oe.Macleod=Ga;var $e={};(function(e){var r=V&&V.__assign||function(){return r=Object.assign||function(i){for(var u,n=1,s=arguments.length;n<s;n++){u=arguments[n];for(var t in u)Object.prototype.hasOwnProperty.call(u,t)&&(i[t]=u[t])}return i},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.DEFAULT_FREQUENCIES_PARAMS={tempo:120,quantization:4,sampleRate:44100};function o(i,u){var n=i.map(function(v){return v(u)}).filter(function(v){return v!==null}).sort(function(v,S){return v-S});if(n.length===1)return n[0];if(n.length===2){var s=n[0],t=n[1];return s*2>t?Math.sqrt(s*t):s}else{var s=n[0],t=n[1],c=n[n.length-2],y=n[n.length-1],l=s*2>t?n:n.slice(1),a=c*2>y?l:l.slice(0,-1);return Math.pow(a.reduce(function(A,h){return A*h},1),1/a.length)}}function m(i,u,n){n===void 0&&(n={});var s=r(r({},e.DEFAULT_FREQUENCIES_PARAMS),n),t=s.tempo,c=s.quantization,y=s.sampleRate,l=u.length,a=Math.round(y*60/(c*t)),v;Array.isArray(i)?v=o.bind(null,i):v=i;for(var S=[],A=0,h=l-a;A<=h;A+=a){var d=u.slice(A,A+a),f=v(d);S.push(f)}return S}e.frequencies=m})($e);Object.defineProperty(X,"__esModule",{value:!0});var Ve=be;X.YIN=Ve.YIN;var Ge=Ee;X.AMDF=Ge.AMDF;var xe=Ce;X.ACF2PLUS=xe.ACF2PLUS;var Ue=qe;X.DynamicWavelet=Ue.DynamicWavelet;var je=Oe;X.Macleod=je.Macleod;var ze=$e;X.frequencies=ze.frequencies;var xa=X.default={YIN:Ve.YIN,AMDF:Ge.AMDF,ACF2PLUS:xe.ACF2PLUS,DynamicWavelet:Ue.DynamicWavelet,Macleod:je.Macleod,frequencies:ze.frequencies};const Ua=j({name:"Tuner",emits:["update:frequency","update:note","is-running","update:bad-frequency"],props:{classes:{type:String,default:""},showClassicSystem:{type:Boolean,default:!0},showAmericanSystem:{type:Boolean,default:!0},showSemiSharps:{type:Boolean,defailt:!0},showSemiFlats:{type:Boolean,defailt:!0}},setup(e,{emit:r,expose:o}){const m=C(null),i=C(null),u=C(0),n=C({note:E.EmptyNote,octave:0}),s=C(!1),t=C(!0),c=C(null),y=C(new Date),l=500,a=xa.YIN(),v=p=>{const O=Math.round(12*(Math.log(p/440)/Math.log(2)))+69,M=O%12,R=Math.floor(O/12)-1;if(U.IsOnRange(N.OCTAVE_RANGE.MIN,N.OCTAVE_RANGE.MAX,R)){const z=N.GetNoteAtOctave(R,M);return y.value=new Date,{note:z,octave:R}}return{note:E.EmptyNote,octave:-1}},S=()=>{if(!i.value||!m.value||!s.value)return;const p=i.value.fftSize,g=new Float32Array(p);i.value.getFloatTimeDomainData(g);const w=a(g);if(w){const O=v(w);O.octave==-1?new Date().getTime()-y.value.getTime()>l&&(t.value=!0,r("update:bad-frequency",!0)):(u.value=w,n.value=O,t.value=!1,r("update:note",n.value),r("update:frequency",w),r("update:bad-frequency",!1))}requestAnimationFrame(S)},A=async()=>{if(s.value)return;m.value=new AudioContext,i.value=m.value.createAnalyser(),i.value.fftSize=2048,c.value=await navigator.mediaDevices.getUserMedia({audio:!0}),m.value.createMediaStreamSource(c.value).connect(i.value),s.value=!0,r("is-running",!0),S()},h=()=>{m.value&&m.value.close(),s.value=!1,r("is-running",!1),c.value!=null&&c.value.getTracks().forEach(p=>{p.stop()})},d=p=>p=="?"?p:e.showSemiFlats?e.showSemiSharps?p:p.split(" ")[1]:p.split(" ")[0],f=()=>{const p=U.Invlerp(n.value.note.frequency.min,n.value.note.frequency.max,u.value);return p>.4&&p<.6};return o({startTuner:A,stopTuner:h,getIsOnGoodNote:f}),{frequency:u,note:n,startTuner:A,stopTuner:h,running:s,badFrequency:t,getIsOnGoodNote:f,showSemiNotes:d,TunerDigitalNeedle:De}}}),ja=Re({color:String,...Ke(),...Xe(),...Je(),...Qe(),...Ze(),...ea(),...aa(),...ta(),...sa()},"VSheet"),Fe=ke()({name:"VSheet",props:ja(),setup(e,r){let{slots:o}=r;const{themeClasses:m}=na(e),{backgroundColorClasses:i,backgroundColorStyles:u}=ra(oa(e,"color")),{borderClasses:n}=la(e),{dimensionStyles:s}=ia(e),{elevationClasses:t}=ua(e),{locationStyles:c}=ca(e),{positionClasses:y}=ma(e),{roundedClasses:l}=va(e);return Le(()=>b(e.tag,{class:["v-sheet",m.value,i.value,n.value,t.value,y.value,l.value,e.class],style:[u.value,s.value,c.value,e.style]},o)),{}}}),za=Re({id:String,text:String,...da(fa({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),ne=ke()({name:"VTooltip",props:za(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:o}=r;const m=ya(e,"modelValue"),{scopeId:i}=ha(),u=pa(),n=le(()=>e.id||`v-tooltip-${u}`),s=C(),t=le(()=>e.location.split(" ").length>1?e.location:e.location+" center"),c=le(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),y=le(()=>e.transition?e.transition:m.value?"scale-transition":"fade-transition"),l=le(()=>W({"aria-describedby":n.value},e.activatorProps));return Le(()=>{const a=Te.filterProps(e);return b(Te,W({ref:s,class:["v-tooltip",e.class],style:e.style,id:n.value},a,{modelValue:m.value,"onUpdate:modelValue":v=>m.value=v,transition:y.value,absolute:!0,location:t.value,origin:c.value,persistent:!0,role:"tooltip",activatorProps:l.value,_disableGlobalStack:!0},i),{activator:o.activator,default:function(){var h;for(var v=arguments.length,S=new Array(v),A=0;A<v;A++)S[A]=arguments[A];return((h=o.default)==null?void 0:h.call(o,...S))??e.text}})}),Sa({},s)}}),Ba={class:"tuner-note text-primary d-flex ga-1"},Ha={key:0,class:"tuner-classic tuner-natural"},Ya={key:1,class:"tuner-classic tuner-semi"},Wa={key:0,class:"tuner-american tuner-natural"},Ka={key:1,class:"tuner-american tuner-semi"},Xa={class:"tuner-octave"},Ja={class:"text-body-1 pt-4 position-relative frequency",style:{width:"8rem"}};function Qa(e,r,o,m,i,u){const n=De;return F(),L(Fe,{class:ae(`tuner justify-center ga-4 bg-background align-center my-4 ${e.classes}`),style:{"z-index":"100"}},{default:q(()=>[e.running?(F(),L(ne,{key:1,text:"Detener afinador",location:"start"},{activator:q(({props:s})=>[b(_,W(s,{icon:"mdi-stop",onClick:e.stopTuner}),null,16,["onClick"])]),_:1})):(F(),L(ne,{key:0,text:"Iniciar afinador",location:"start"},{activator:q(({props:s})=>[b(_,W(s,{icon:"mdi-microphone",onClick:e.startTuner,color:"primary"}),null,16,["onClick"])]),_:1})),T("div",{class:"d-flex justify-center align-center ga-3",style:Q(`opacity: ${e.badFrequency?"0.5":"1"}`)},[T("div",Ba,[e.showClassicSystem||!e.showAmericanSystem?(F(),P(K,{key:0},[e.note.note.isNatural()?(F(),P("span",Ha,k(e.note.note.name.classic),1)):(F(),P("span",Ya,k(e.showSemiNotes(e.note.note.name.classic)),1))],64)):$("",!0),e.showAmericanSystem?(F(),P(K,{key:1},[e.note.note.isNatural()?(F(),P("span",Wa,k(e.note.note.name.american),1)):(F(),P("span",Ka,k(e.showSemiNotes(e.note.note.name.american)),1))],64)):$("",!0),T("span",Xa,k(e.note.octave),1)]),T("div",Ja,[b(n,{frequency:e.frequency,noteFreq:e.note.note.frequency,size:10,top:-1.5,left:.33},null,8,["frequency","noteFreq"]),T("span",{class:ae(`${e.getIsOnGoodNote()?"ok":""}`)},k(e.frequency.toFixed(2))+" Hz ",3)])],4)]),_:1},8,["class"])}const Za=te(Ua,[["render",Qa],["__scopeId","data-v-18913473"]]),et={showClassicSystem:!0,showAmericanSystem:!0},at={showSemiSharps:!0,showSemiFlats:!0},tt={...et,...at},st={listenedFrequency:0,badFrequency:!1},nt={...tt,activeOctaves:[3,4,5],waveform:"sine"},Ne="MiniTuner:Settings:Instrument",rt=j({__name:"InstrumentSettings",props:{classes:{}},emits:["octaves","show:noteSystems","show:noteSemis","waveform"],setup(e,{emit:r}){const o=r;let m=nt;const i=h=>{m=h,localStorage.setItem(Ne,JSON.stringify(m))};(()=>{let h=localStorage.getItem(Ne);h!=null&&(m=JSON.parse(h))})();const n=()=>{let h=[];return m.showClassicSystem&&h.push(E.Systems.CLASSIC),m.showAmericanSystem&&h.push(E.Systems.AMERICAN),o("show:noteSystems",m.showClassicSystem,m.showAmericanSystem),h},s=()=>{let h=[];return m.showSemiSharps&&h.push(E.Accidentals.SHARP),m.showSemiFlats&&h.push(E.Accidentals.FLAT),o("show:noteSemis",m.showSemiSharps,m.showSemiFlats),h};let t=()=>{};const c=()=>{let h={min:m.activeOctaves[0],max:m.activeOctaves[m.activeOctaves.length-1]};return t(),h};//!-- For save and load from localStorage --
const y=C(c()),l=C(n()),a=C(s()),v=C(m.waveform??"sine");ee(l,h=>{const d=h.indexOf(E.Systems.CLASSIC)!=-1,f=h.indexOf(E.Systems.AMERICAN)!=-1;o("show:noteSystems",d,f),i({...m,showClassicSystem:d,showAmericanSystem:f})}),ee(a,h=>{const d=h.indexOf(E.Accidentals.SHARP)!=-1,f=h.indexOf(E.Accidentals.FLAT)!=-1;o("show:noteSemis",d,f),i({...m,showSemiSharps:d,showSemiFlats:f})}),ee(v,()=>{o("waveform",v.value),i({...m,waveform:v.value})}),t=()=>{const h=y.value.max-y.value.min+1,d=Array.from(Array(h).keys()).map(f=>f+y.value.min);o("octaves",d),i({...m,activeOctaves:d})},t();const S=(h=!0)=>{h?y.value.min-=1:y.value.min+=1,t()},A=(h=!0)=>{h?y.value.max+=1:y.value.max-=1,t()};return(h,d)=>(F(),L(me,{"no-gutters":"",class:ae(`align-center px-3 mb-2 position-relative gr-1 ${h.classes}`),style:{"z-index":"20"}},{default:q(()=>[b(se,{cols:"6",sm:"3",md:"2",class:"d-flex align-center justify-start ga-2 order-1"},{default:q(()=>[b(ne,{text:"Incluir una octava grave más",location:"top"},{activator:q(({props:f})=>[b(_,W(f,{variant:"tonal",disabled:y.value.min<=1,icon:"mdi-music-note-plus",onClick:d[0]||(d[0]=p=>S(!0))}),null,16,["disabled"])]),_:1}),b(ne,{text:"Disminuir una octava grave",location:"right"},{activator:q(({props:f})=>[b(_,W(f,{size:"small",variant:"tonal",disabled:y.value.min>=y.value.max,icon:"mdi-music-note-minus",onClick:d[1]||(d[1]=p=>S(!1))}),null,16,["disabled"])]),_:1})]),_:1}),b(se,{cols:"12",sm:"12",md:"5",class:"d-flex justify-space-evenly order-3 order-sm-4 order-md-2"},{default:q(()=>[b(Ae,{multiple:"",modelValue:l.value,"onUpdate:modelValue":d[2]||(d[2]=f=>l.value=f),rounded:"xl",variant:"outlined"},{default:q(()=>[b(_,{value:H(E).Systems.CLASSIC},{default:q(()=>d[7]||(d[7]=[Z("Do, Re, ...")])),_:1},8,["value"]),b(_,{value:H(E).Systems.AMERICAN},{default:q(()=>d[8]||(d[8]=[Z("C, D, ...")])),_:1},8,["value"])]),_:1},8,["modelValue"]),b(Ae,{multiple:"",modelValue:a.value,"onUpdate:modelValue":d[3]||(d[3]=f=>a.value=f),rounded:"xl",variant:"outlined"},{default:q(()=>[b(_,{icon:"mdi-music-accidental-sharp",value:H(E).Accidentals.SHARP},null,8,["value"]),b(_,{icon:"mdi-music-accidental-flat",value:H(E).Accidentals.FLAT},null,8,["value"])]),_:1},8,["modelValue"])]),_:1}),b(se,{cols:"12",sm:"6",md:"3",class:"d-flex justify-space-evenly ga-2 order-4 order-sm-2 order-md-3"},{default:q(()=>[b(Ae,{modelValue:v.value,"onUpdate:modelValue":d[4]||(d[4]=f=>v.value=f),rounded:"xl",variant:"outlined"},{default:q(()=>[b(_,{icon:"mdi-sine-wave",value:"sine"}),b(_,{icon:"mdi-sawtooth-wave",value:"sawtooth"}),b(_,{icon:"mdi-square-wave",value:"square"}),b(_,{icon:"mdi-triangle-wave",value:"triangle"})]),_:1},8,["modelValue"])]),_:1}),b(se,{cols:"6",sm:"3",md:"2",class:"d-flex align-center justify-end ga-2 order-2 order-sm-3 order-md-4"},{default:q(()=>[b(ne,{text:"Disminuir una octava aguda",location:"left"},{activator:q(({props:f})=>[b(_,W(f,{size:"small",variant:"tonal",disabled:y.value.min>=y.value.max,icon:"mdi-music-note-minus",onClick:d[5]||(d[5]=p=>A(!1))}),null,16,["disabled"])]),_:1}),b(ne,{text:"Incluir una octava aguda más",location:"top"},{activator:q(({props:f})=>[b(_,W(f,{variant:"tonal",disabled:y.value.max>=7,icon:"mdi-music-note-plus",onClick:d[6]||(d[6]=p=>A(!0))}),null,16,["disabled"])]),_:1})]),_:1})]),_:1},8,["class"]))}}),ot=j({__name:"PianoKey",props:{note:{},variant:{}},emits:["pressStart","pressEnd"],setup(e,{emit:r}){const o=r,m=C(!1),i=()=>{m.value||(m.value=!0,o("pressStart",e.note.frequency.main))},u=()=>{m.value&&(m.value=!1,o("pressEnd",e.note.frequency.main))};return(n,s)=>(F(),L(_,{class:ae(`piano-key key-${n.variant}`),onMousedown:i,onMouseup:u,onTouchstart:i,onTouchend:u},{default:q(()=>[ga(n.$slots,"default",{},void 0,!0)]),_:3},8,["class"]))}}),Be=te(ot,[["__scopeId","data-v-4c23215a"]]),lt={class:"text-center"},it={key:0},ut={key:1},ct=j({__name:"PianoKeyNatural",props:{showClassicSystem:{type:Boolean,default:!0},showAmericanSystem:{type:Boolean,default:!0},note:{}},setup(e){return(r,o)=>(F(),L(Be,{note:r.note,variant:"white"},{default:q(()=>[T("div",lt,[r.showClassicSystem?(F(),P("div",it,k(r.note.name.classic),1)):$("",!0),r.showAmericanSystem?(F(),P("div",ut,k(r.note.name.american),1)):$("",!0)])]),_:1},8,["note"]))}}),mt=te(ct,[["__scopeId","data-v-59d32181"]]),vt={key:0},dt={key:0},ft={key:1},yt={key:1},ht={key:0},pt={key:1},St=j({__name:"PianoKeySemiSF",props:{showClassicSystem:{type:Boolean,default:!0},showAmericanSystem:{type:Boolean,default:!0},showSemiSharps:{type:Boolean,default:!0},showSemiFlats:{type:Boolean,default:!0},note:{}},setup(e){return(r,o)=>r.note!=H(E).EmptyNote?(F(),L(Be,{key:0,note:r.note,variant:"black"},{default:q(()=>[r.showSemiSharps?(F(),P("div",vt,[r.showClassicSystem?(F(),P("div",dt,[Z(k(r.note.sharp.name.classic),1),o[0]||(o[0]=T("span",{class:"accidental"},"#",-1))])):$("",!0),r.showAmericanSystem?(F(),P("div",ft,[Z(k(r.note.sharp.name.american),1),o[1]||(o[1]=T("span",{class:"accidental"},"#",-1))])):$("",!0)])):$("",!0),r.showSemiFlats?(F(),P("div",yt,[r.showClassicSystem?(F(),P("div",ht,[Z(k(r.note.flat.name.classic),1),o[2]||(o[2]=T("span",{class:"accidental"},"b",-1))])):$("",!0),r.showAmericanSystem?(F(),P("div",pt,[Z(k(r.note.flat.name.american),1),o[3]||(o[3]=T("span",{class:"accidental"},"b",-1))])):$("",!0)])):$("",!0)]),_:1},8,["note"])):(F(),L(_,{key:1,class:"key-black empty"}))}}),gt=te(St,[["__scopeId","data-v-8d44301e"]]),wt={key:0,class:"light-tail-indicator pressed"},At=j({__name:"PianoLightTail",props:{listenedFrequency:{default:()=>note.frequency.main},badFrequency:{type:Boolean,default:!0},note:{default:()=>E.EmptyNote},isPressed:{type:Boolean,default:!1}},emits:["key-state"],setup(e,{emit:r}){let o;(c=>{c[c.INACTIVE=0]="INACTIVE",c[c.LISTENED=2]="LISTENED",c[c.IS_BAD_LISTENED=4]="IS_BAD_LISTENED",c[c.PRESSED=8]="PRESSED",c[c.PRESSED_ANY=12]="PRESSED_ANY",c[c.LISTENED_PRESSED=10]="LISTENED_PRESSED",c[c.LISTENED_BAD=6]="LISTENED_BAD",c[c.LISTENED_PRESSED_BAD=14]="LISTENED_PRESSED_BAD"})(o||(o={}));const m=new Map([[0,"none"],[4,"none"],[2,"listened"],[8,"pressed"],[12,"pressed"],[10,"glow"],[6,"listened-bad"],[14,"pressed-bad"]]);e.note;const i=r,u=C(50),n=C(67),s=C(1),t=C(0);return ee(()=>e.badFrequency,()=>{e.badFrequency?t.value|=4:t.value&=-5,i("key-state",t.value)}),ee(()=>e.listenedFrequency,()=>{U.IsOnRange(e.note.frequency.min,e.note.frequency.max,e.listenedFrequency)?t.value|=2:t.value&=-3;const c=(t.value&2)==2,y=U.Invlerp(e.note.frequency.min,e.note.frequency.max,e.listenedFrequency),l=Math.abs(y-.5);u.value=c?y*100:50,n.value=c?U.Lerp(72,50,l):67,s.value=c?U.Lerp(1,.5,l):.75,i("key-state",t.value)}),ee(()=>e.isPressed,()=>{e.isPressed===!0?t.value|=8:e.isPressed===!1&&(t.value&=-9),i("key-state",t.value)}),(c,y)=>(F(),P("div",{class:ae(`light-tail ${c.note.isNatural()?"":"shrink"} ${H(m).get(t.value)} ${t.value}}`)},[y[2]||(y[2]=T("div",{class:"light-tail-border left"},null,-1)),t.value?(F(),P("div",wt,y[0]||(y[0]=[T("div",{class:"light-tail-indicator-point"},null,-1)]))):$("",!0),T("div",{class:"light-tail-indicator listened",style:Q(`left: ${u.value}%; height: ${n.value}%; scale: ${s.value}`)},y[1]||(y[1]=[T("div",{class:"light-tail-indicator-point"},null,-1)]),4),y[3]||(y[3]=T("div",{class:"light-tail-border right"},null,-1))],2))}}),Ft=te(At,[["__scopeId","data-v-0653e4c6"]]),bt=j({__name:"PianoOctave",props:Ie({showClassicSystem:{type:Boolean,default:!0},showAmericanSystem:{type:Boolean,default:!0},showSemiSharps:{type:Boolean,default:!0},showSemiFlats:{type:Boolean,default:!0},listenedFrequency:{default:0},badFrequency:{type:Boolean,default:!0},octaveId:{default:()=>N.OCTAVE_CENTRAL},keyPressedFrequency:{},keyUnpressedFrequency:{}},{pressedFrequencies:{default:new Set},pressedFrequenciesModifiers:{}}),emits:Ie(["frequency-pressed","frequency-unpressed"],["update:pressedFrequencies"]),setup(e,{emit:r}){const o=r,m=wa(e,"pressedFrequencies"),i=n=>{m.value.has(n)||(m.value.add(n),o("frequency-pressed",n))},u=n=>{m.value.has(n)&&(m.value.delete(n),o("frequency-unpressed",n))};return(n,s)=>(F(),L(se,{class:"position-relative rounded-lg mt-4 piano-octave",xs:"12",sm:"6",md:"6",lg:"4",xl:"3",xxl:"3"},{default:q(()=>[b(me,{class:"flex-nowrap piano-keys key-tails mx-0"},{default:q(()=>[(F(!0),P(K,null,ie(H(N).GetNotesAtOctave(n.octaveId),t=>(F(),L(Ft,{key:t.frequency.main,note:t,"bad-frequency":n.badFrequency,"listened-frequency":n.listenedFrequency,"is-pressed":m.value.has(t.frequency.main)},null,8,["note","bad-frequency","listened-frequency","is-pressed"]))),128))]),_:1}),b(me,{class:"flex-nowrap piano-keys white-keys"},{default:q(()=>[(F(!0),P(K,null,ie(H(N).GetNaturalsAtOctave(n.octaveId),t=>(F(),L(mt,{note:t,"show-classic-system":n.showClassicSystem,"show-american-system":n.showAmericanSystem,onPressStart:i,onPressEnd:u},null,8,["note","show-classic-system","show-american-system"]))),256))]),_:1}),b(me,{class:"flex-nowrap piano-keys black-keys mt-6"},{default:q(()=>[(F(!0),P(K,null,ie(H(N).GetSemisAtOctave(n.octaveId),t=>(F(),L(gt,{note:t,"show-classic-system":n.showClassicSystem,"show-american-system":n.showAmericanSystem,"show-semi-sharps":n.showSemiSharps,"show-semi-flats":n.showSemiFlats,onPressStart:i,onPressEnd:u},null,8,["note","show-classic-system","show-american-system","show-semi-sharps","show-semi-flats"]))),256))]),_:1}),b(se,{cols:"12",class:"piano-octave-id"},{default:q(()=>[Z(k(n.octaveId),1)]),_:1})]),_:1}))}}),Et=te(bt,[["__scopeId","data-v-3519030a"]]),Ct=j({__name:"Piano",props:Aa({activeOctaves:{},waveform:{},showClassicSystem:{type:Boolean},showAmericanSystem:{type:Boolean},showSemiSharps:{type:Boolean},showSemiFlats:{type:Boolean},listenedFrequency:{},badFrequency:{type:Boolean},classes:{}},{waveform:"sine",...st}),setup(e){const r=e,o=C(new Set),m=new Map,i=new Map;ee(o,()=>{if(o.value.size==0)return;const l=1;m.forEach((a,v)=>{const S=a.audioCtx.currentTime;a.gainNode&&a.gainNode.gain.setValueAtTime(l,S),a.oscillator&&a.oscillator.frequency.setValueAtTime(v,S)})},{deep:!0});const u=()=>{let l=null;return i.forEach((a,v)=>{if(!a){l=v;return}}),l==null&&(l=new(AudioContext||window.AudioContext||window.webkitAudioContext)),l!=null&&i.set(l,!0),l},n=l=>{if(m.get(l)!=null||l===E.EmptyNote.frequency.main)return;let a=u();if(a==null)return;let v=a.createGain(),S=a.createOscillator();const A=a.currentTime;S&&(S.type=r.waveform??"sine",S.frequency.setValueAtTime(l,A),v?(v.gain.setValueAtTime(1,A),S.connect(v),v.connect(a.destination)):S.connect(a.destination),S.start()),m.set(l,{audioCtx:a,oscillator:S,gainNode:v}),o.value.add(l)},s=l=>{let a=m.get(l);if(a){if(a.oscillator)if(a.gainNode){const v=a.audioCtx.currentTime;a.gainNode.gain.setValueAtTime(a.gainNode.gain.value,v),a.gainNode.gain.exponentialRampToValueAtTime(1e-4,v+.05),a.oscillator.stop(v+.06)}else a.oscillator.stop();setTimeout(()=>{i.set(a.audioCtx,!1),m.delete(l),o.value.delete(l)},75)}},t=l=>{const a=Ea.KEYS_CODE.indexOf(l.code);if(a===-1)return E.EmptyNote;const v=a<12,S=v?a:a-12;let A=E.EmptyNote;return l.altKey&&l.ctrlKey&&l.shiftKey?A=N.GetNotesAtOctave(v?1:2)[S]:l.altKey&&l.ctrlKey?A=N.GetNotesAtOctave(v?2:3)[S]:l.ctrlKey?A=N.GetNotesAtOctave(v?3:4)[S]:l.altKey&&l.shiftKey?A=N.GetNotesAtOctave(v?6:7)[S]:l.shiftKey?A=N.GetNotesAtOctave(v?5:6)[S]:A=N.GetNotesAtOctave(v?4:5)[S],A},c=l=>{if(l.repeat)return;const a=t(l);a!==E.EmptyNote&&(l.preventDefault(),l.stopPropagation(),n(a.frequency.main))},y=l=>{const a=t(l);a!==E.EmptyNote&&s(a.frequency.main)};return Fa(c),ba(y),(l,a)=>(F(),L(Fe,{class:ae(`bg-background ${l.classes}`)},{default:q(()=>[b(Fe,{class:"d-flex flex-wrap justify-center align-center ga-0 position-relative pa-2 pt-10",style:{"z-index":"10"}},{default:q(()=>[(F(!0),P(K,null,ie(l.activeOctaves,v=>(F(),L(Et,{key:`p-oct-${v}`,octaveId:v,"listened-frequency":l.listenedFrequency,"bad-frequency":l.badFrequency,"show-classic-system":l.showClassicSystem,"show-american-system":l.showAmericanSystem,"show-semi-sharps":l.showSemiSharps,"show-semi-flats":l.showSemiFlats,"pressed-frequencies":o.value,"onUpdate:pressedFrequencies":a[0]||(a[0]=S=>o.value=S),onFrequencyPressed:n,onFrequencyUnpressed:s},null,8,["octaveId","listened-frequency","bad-frequency","show-classic-system","show-american-system","show-semi-sharps","show-semi-flats","pressed-frequencies"]))),128))]),_:1})]),_:1},8,["class"]))}}),Mt=j({__name:"Home",setup(e){const r=C(!1),o=C(0),m=C(!0),i=C({note:E.EmptyNote,octave:-1}),u=C(!0),n=C(!0),s=C(!0),t=C(!0),c=C([]),y=C("sine");return(l,a)=>(F(),P(K,null,[b(Za,{ref:"tunerRef",classes:"order-1 order-md-1 position-sticky top-0","show-american-system":n.value,"show-classic-system":u.value,"show-semi-sharps":s.value,"show-semi-flats":t.value,"onUpdate:frequency":a[0]||(a[0]=v=>o.value=v),"onUpdate:note":a[1]||(a[1]=v=>i.value=v),"onUpdate:badFrequency":a[2]||(a[2]=v=>m.value=v),onIsRunning:a[3]||(a[3]=v=>r.value=v)},null,8,["show-american-system","show-classic-system","show-semi-sharps","show-semi-flats"]),b(rt,{classes:"order-3 order-md-2",onOctaves:a[4]||(a[4]=v=>{c.value=v}),"onShow:noteSystems":a[5]||(a[5]=(v,S)=>{u.value=v,n.value=S}),"onShow:noteSemis":a[6]||(a[6]=(v,S)=>{s.value=v,t.value=S}),onWaveform:a[7]||(a[7]=v=>{v&&(y.value=v)})}),b(Ct,{classes:"order-2 order-md-3","active-octaves":c.value,waveform:y.value,showAmericanSystem:n.value,showClassicSystem:u.value,showSemiSharps:s.value,showSemiFlats:t.value,"listened-frequency":o.value,"bad-frequency":m.value},null,8,["active-octaves","waveform","showAmericanSystem","showClassicSystem","showSemiSharps","showSemiFlats","listened-frequency","bad-frequency"])],64))}});export{Mt as default};

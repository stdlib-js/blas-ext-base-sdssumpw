"use strict";var w=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var E=w(function(H,R){
var y=require('@stdlib/number-float64-base-to-float32/dist'),L=require('@stdlib/math-base-special-floor/dist'),M=128;function j(v,r,u,n){var a,o,i,q,p,l,m,c,t,O,f,s,e;if(v<=0)return 0;if(v===1||u===0)return r[n];if(a=n,v<8){for(f=0,e=0;e<v;e++)f+=r[a],a+=u;return y(f)}if(v<=M){for(o=r[a],i=r[a+u],q=r[a+2*u],p=r[a+3*u],l=r[a+4*u],m=r[a+5*u],c=r[a+6*u],t=r[a+7*u],a+=8*u,O=v%8,e=8;e<v-O;e+=8)o+=r[a],i+=r[a+u],q+=r[a+2*u],p+=r[a+3*u],l+=r[a+4*u],m+=r[a+5*u],c+=r[a+6*u],t+=r[a+7*u],a+=8*u;for(f=o+i+(q+p)+(l+m+(c+t)),e;e<v;e++)f+=r[a],a+=u;return y(f)}return s=L(v/2),s-=s%8,y(j(s,r,u,a)+j(v-s,r,u,a+s*u))}R.exports=j
});var _=w(function(J,T){
var S=require('@stdlib/number-float64-base-to-float32/dist'),Z=E();function b(v,r,u){var n,a,o;if(v<=0)return 0;if(v===1||u===0)return r[0];if(u<0?n=(1-v)*u:n=0,v<8){for(a=0,o=0;o<v;o++)a+=r[n],n+=u;return S(a)}return Z(v,r,u,n)}T.exports=b
});var I=w(function(P,C){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=_(),h=E();g(B,"ndarray",h);C.exports=B
});var k=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),D=I(),F,K=z(k(__dirname,"./native.js"));A(K)?F=D:F=K;module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

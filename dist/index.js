"use strict";var w=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var l=w(function(J,R){
var o=require('@stdlib/number-float64-base-to-float32/dist'),S=require('@stdlib/math-base-special-floor/dist'),Z=128;function j(v,r,u,M){var a,f,q,i,p,m,c,y,t,O,n,s,e;if(v<=0)return 0;if(a=M,u===0)return o(v*r[a]);if(v<8){for(n=0,e=0;e<v;e++)n+=r[a],a+=u;return o(n)}if(v<=Z){for(f=r[a],q=r[a+u],i=r[a+2*u],p=r[a+3*u],m=r[a+4*u],c=r[a+5*u],y=r[a+6*u],t=r[a+7*u],a+=8*u,O=v%8,e=8;e<v-O;e+=8)f+=r[a],q+=r[a+u],i+=r[a+2*u],p+=r[a+3*u],m+=r[a+4*u],c+=r[a+5*u],y+=r[a+6*u],t+=r[a+7*u],a+=8*u;for(n=f+q+(i+p)+(m+c+(y+t)),e;e<v;e++)n+=r[a],a+=u;return o(n)}return s=S(v/2),s-=s%8,o(j(s,r,u,a)+j(v-s,r,u,a+s*u))}R.exports=j
});var B=w(function(P,_){
var b=require('@stdlib/strided-base-stride2offset/dist'),g=l();function h(v,r,u){return g(v,r,u,b(v,u))}_.exports=h
});var K=w(function(Q,I){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),z=l();k(C,"ndarray",z);I.exports=C
});var A=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=K(),E,L=D(A(__dirname,"./native.js"));F(L)?E=G:E=L;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

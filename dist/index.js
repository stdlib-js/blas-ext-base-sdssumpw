"use strict";var y=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var j=y(function(H,R){
var s=require('@stdlib/number-float64-base-to-float32/dist'),M=require('@stdlib/math-base-special-floor/dist'),S=128;function w(v,r,u,L){var a,f,q,i,p,m,c,t,l,O,n,o,e;if(v<=0)return 0;if(a=L,u===0)return s(v*r[a]);if(v<8){for(n=0,e=0;e<v;e++)n+=r[a],a+=u;return s(n)}if(v<=S){for(f=r[a],q=r[a+u],i=r[a+2*u],p=r[a+3*u],m=r[a+4*u],c=r[a+5*u],t=r[a+6*u],l=r[a+7*u],a+=8*u,O=v%8,e=8;e<v-O;e+=8)f+=r[a],q+=r[a+u],i+=r[a+2*u],p+=r[a+3*u],m+=r[a+4*u],c+=r[a+5*u],t+=r[a+6*u],l+=r[a+7*u],a+=8*u;for(n=f+q+(i+p)+(m+c+(t+l)),e;e<v;e++)n+=r[a],a+=u;return s(n)}return o=M(v/2),o-=o%8,s(w(o,r,u,a)+w(v-o,r,u,a+o*u))}R.exports=w
});var B=y(function(J,_){
var T=require('@stdlib/strided-base-stride2offset/dist'),Z=j();function b(v,r,u){return Z(v,r,u,T(v,u))}_.exports=b
});var I=y(function(P,F){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),h=j();g(C,"ndarray",h);F.exports=C
});var k=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),D=I(),E,K=z(k(__dirname,"./native.js"));A(K)?E=D:E=K;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

"use strict";var w=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=w(function(J,R){
var o=require('@stdlib/number-float64-base-to-float32/dist'),S=require('@stdlib/math-base-special-floor/dist'),Z=128;function j(v,r,a,M){var u,f,q,i,p,m,c,y,t,O,n,s,e;if(v<=0)return 0;if(u=M,a===0)return o(v*r[u]);if(v<8){for(n=0,e=0;e<v;e++)n+=r[u],u+=a;return o(n)}if(v<=Z){for(f=r[u],q=r[u+a],i=r[u+2*a],p=r[u+3*a],m=r[u+4*a],c=r[u+5*a],y=r[u+6*a],t=r[u+7*a],u+=8*a,O=v%8,e=8;e<v-O;e+=8)f+=r[u],q+=r[u+a],i+=r[u+2*a],p+=r[u+3*a],m+=r[u+4*a],c+=r[u+5*a],y+=r[u+6*a],t+=r[u+7*a],u+=8*a;for(n=f+q+(i+p)+(m+c+(y+t)),e;e<v;e++)n+=r[u],u+=a;return o(n)}return s=S(v/2),s-=s%8,o(j(s,r,a,u)+j(v-s,r,a,u+s*a))}R.exports=j
});var B=w(function(P,_){
var b=require('@stdlib/strided-base-stride2offset/dist'),g=l();function h(v,r,a){return g(v,r,a,b(v,a))}_.exports=h
});var K=w(function(Q,I){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),z=l();k(C,"ndarray",z);I.exports=C
});var A=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=K(),E,L=D(A(__dirname,"./native.js"));F(L)?E=G:E=L;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

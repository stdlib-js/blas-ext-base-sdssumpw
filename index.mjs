// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";var n=128;function i(r,s,f,o){var a,d,m,u,l,p,j,v,b,h,c,x,y;if(r<=0)return 0;if(1===r||0===f)return s[o];if(a=o,r<8){for(c=0,y=0;y<r;y++)c+=s[a],a+=f;return e(c)}if(r<=n){for(d=s[a],m=s[a+f],u=s[a+2*f],l=s[a+3*f],p=s[a+4*f],j=s[a+5*f],v=s[a+6*f],b=s[a+7*f],a+=8*f,h=r%8,y=8;y<r-h;y+=8)d+=s[a],m+=s[a+f],u+=s[a+2*f],l+=s[a+3*f],p+=s[a+4*f],j+=s[a+5*f],v+=s[a+6*f],b+=s[a+7*f],a+=8*f;for(c=d+m+(u+l)+(p+j+(v+b));y<r;y++)c+=s[a],a+=f;return e(c)}return x=t(r/2),e(i(x-=x%8,s,f,a)+i(r-x,s,f,a+x*f))}function s(r,t,n){var s,f,o;if(r<=0)return 0;if(1===r||0===n)return t[0];if(s=n<0?(1-r)*n:0,r<8){for(f=0,o=0;o<r;o++)f+=t[s],s+=n;return e(f)}return i(r,t,n,s)}r(s,"ndarray",i);export{s as default,i as ndarray};
//# sourceMappingURL=index.mjs.map

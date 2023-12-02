// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";function n(r,i,s,f){var o,a,d,m,u,l,p,j,v,b,h,c,x;if(r<=0)return 0;if(1===r||0===s)return i[f];if(o=f,r<8){for(h=0,x=0;x<r;x++)h+=i[o],o+=s;return e(h)}if(r<=128){for(a=i[o],d=i[o+s],m=i[o+2*s],u=i[o+3*s],l=i[o+4*s],p=i[o+5*s],j=i[o+6*s],v=i[o+7*s],o+=8*s,b=r%8,x=8;x<r-b;x+=8)a+=i[o],d+=i[o+s],m+=i[o+2*s],u+=i[o+3*s],l+=i[o+4*s],p+=i[o+5*s],j+=i[o+6*s],v+=i[o+7*s],o+=8*s;for(h=a+d+(m+u)+(l+p+(j+v));x<r;x++)h+=i[o],o+=s;return e(h)}return c=t(r/2),e(n(c-=c%8,i,s,o)+n(r-c,i,s,o+c*s))}function i(r,t,i){var s,f,o;if(r<=0)return 0;if(1===r||0===i)return t[0];if(s=i<0?(1-r)*i:0,r<8){for(f=0,o=0;o<r;o++)f+=t[s],s+=i;return e(f)}return n(r,t,i,s)}r(i,"ndarray",n);export{i as default,n as ndarray};
//# sourceMappingURL=index.mjs.map

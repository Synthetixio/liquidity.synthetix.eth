(globalThis.webpackChunk_snx_v3_liquidity=globalThis.webpackChunk_snx_v3_liquidity||[]).push([[9255,1492,9909,4247,9761],{18166:(e,t,r)=>{"use strict";var i=r(77834).Buffer;e.exports=function(e){if(e.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),r=0;r<t.length;r++)t[r]=255;for(var n=0;n<e.length;n++){var o=e.charAt(n),a=o.charCodeAt(0);if(255!==t[a])throw new TypeError(o+" is ambiguous");t[a]=n}var c=e.length,s=e.charAt(0),p=Math.log(c)/Math.log(256),u=Math.log(256)/Math.log(c);function h(e){if("string"!=typeof e)throw new TypeError("Expected String");if(0===e.length)return i.alloc(0);for(var r=0,n=0,o=0;e[r]===s;)n++,r++;for(var a=(e.length-r)*p+1>>>0,u=new Uint8Array(a);e[r];){var h=t[e.charCodeAt(r)];if(255===h)return;for(var f=0,d=a-1;(0!==h||f<o)&&-1!==d;d--,f++)h+=c*u[d]>>>0,u[d]=h%256>>>0,h=h/256>>>0;if(0!==h)throw new Error("Non-zero carry");o=f,r++}for(var l=a-o;l!==a&&0===u[l];)l++;var y=i.allocUnsafe(n+(a-l));y.fill(0,0,n);for(var v=n;l!==a;)y[v++]=u[l++];return y}return{encode:function(t){if((Array.isArray(t)||t instanceof Uint8Array)&&(t=i.from(t)),!i.isBuffer(t))throw new TypeError("Expected Buffer");if(0===t.length)return"";for(var r=0,n=0,o=0,a=t.length;o!==a&&0===t[o];)o++,r++;for(var p=(a-o)*u+1>>>0,h=new Uint8Array(p);o!==a;){for(var f=t[o],d=0,l=p-1;(0!==f||d<n)&&-1!==l;l--,d++)f+=256*h[l]>>>0,h[l]=f%c>>>0,f=f/c>>>0;if(0!==f)throw new Error("Non-zero carry");n=d,o++}for(var y=p-n;y!==p&&0===h[y];)y++;for(var v=s.repeat(r);y<p;++y)v+=e.charAt(h[y]);return v},decodeUnsafe:h,decode:function(e){var t=h(e);if(t)return t;throw new Error("Non-base"+c+" character")}}}},17022:(e,t,r)=>{var i=r(18166);e.exports=i("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},88616:(e,t,r)=>{"use strict";var i=r(17022),n=r(77834).Buffer;e.exports=function(e){function t(t){var r=t.slice(0,-4),i=t.slice(-4),n=e(r);if(!(i[0]^n[0]|i[1]^n[1]|i[2]^n[2]|i[3]^n[3]))return r}return{encode:function(t){var r=e(t);return i.encode(n.concat([t,r],t.length+4))},decode:function(e){var r=t(i.decode(e));if(!r)throw new Error("Invalid checksum");return r},decodeUnsafe:function(e){var r=i.decodeUnsafe(e);if(r)return t(r)}}}},44075:(e,t,r)=>{"use strict";var i=r(16162),n=r(88616);e.exports=n((function(e){var t=i("sha256").update(e).digest();return i("sha256").update(t).digest()}))},6952:(e,t,r)=>{var i=r(71696),n=r(77834).Buffer,o=r(5634),a=r(44075),c=r(51445),s=r(97637),p=n.from("Bitcoin seed","utf8"),u=2147483648,h={private:76066276,public:76067358};function f(e){this.versions=e||h,this.depth=0,this.index=0,this._privateKey=null,this._publicKey=null,this.chainCode=null,this._fingerprint=0,this.parentFingerprint=0}function d(e,t){e._publicKey=n.from(t),e._identifier=y(t),e._fingerprint=e._identifier.slice(0,4).readUInt32BE(0),e._privateKey=null}function l(e,t,r){var i=n.allocUnsafe(78);i.writeUInt32BE(t,0),i.writeUInt8(e.depth,4);var o=e.depth?e.parentFingerprint:0;return i.writeUInt32BE(o,5),i.writeUInt32BE(e.index,9),e.chainCode.copy(i,13),r.copy(i,45),i}function y(e){var t=o.createHash("sha256").update(e).digest();return(new c).update(t).digest()}Object.defineProperty(f.prototype,"fingerprint",{get:function(){return this._fingerprint}}),Object.defineProperty(f.prototype,"identifier",{get:function(){return this._identifier}}),Object.defineProperty(f.prototype,"pubKeyHash",{get:function(){return this.identifier}}),Object.defineProperty(f.prototype,"privateKey",{get:function(){return this._privateKey},set:function(e){i.equal(e.length,32,"Private key must be 32 bytes."),i(!0===s.privateKeyVerify(e),"Invalid private key"),this._privateKey=e,this._publicKey=n.from(s.publicKeyCreate(e,!0)),this._identifier=y(this.publicKey),this._fingerprint=this._identifier.slice(0,4).readUInt32BE(0)}}),Object.defineProperty(f.prototype,"publicKey",{get:function(){return this._publicKey},set:function(e){i(33===e.length||65===e.length,"Public key must be 33 or 65 bytes."),i(!0===s.publicKeyVerify(e),"Invalid public key");d(this,65===e.length?s.publicKeyConvert(e,!0):e)}}),Object.defineProperty(f.prototype,"privateExtendedKey",{get:function(){return this._privateKey?a.encode(l(this,this.versions.private,n.concat([n.alloc(1,0),this.privateKey]))):null}}),Object.defineProperty(f.prototype,"publicExtendedKey",{get:function(){return a.encode(l(this,this.versions.public,this.publicKey))}}),f.prototype.derive=function(e){if("m"===e||"M"===e||"m'"===e||"M'"===e)return this;var t=e.split("/"),r=this;return t.forEach((function(e,t){if(0!==t){var n=e.length>1&&"'"===e[e.length-1],o=parseInt(e,10);i(o<u,"Invalid index"),n&&(o+=u),r=r.deriveChild(o)}else i(/^[mM]{1}/.test(e),'Path must start with "m" or "M"')})),r},f.prototype.deriveChild=function(e){var t,r=e>=u,a=n.allocUnsafe(4);if(a.writeUInt32BE(e,0),r){i(this.privateKey,"Could not derive hardened child key");var c=this.privateKey,p=n.alloc(1,0);c=n.concat([p,c]),t=n.concat([c,a])}else t=n.concat([this.publicKey,a]);var h=o.createHmac("sha512",this.chainCode).update(t).digest(),d=h.slice(0,32),l=h.slice(32),y=new f(this.versions);if(this.privateKey)try{y.privateKey=n.from(s.privateKeyTweakAdd(n.from(this.privateKey),d))}catch(t){return this.deriveChild(e+1)}else try{y.publicKey=n.from(s.publicKeyTweakAdd(n.from(this.publicKey),d,!0))}catch(t){return this.deriveChild(e+1)}return y.chainCode=l,y.depth=this.depth+1,y.parentFingerprint=this.fingerprint,y.index=e,y},f.prototype.sign=function(e){return n.from(s.ecdsaSign(Uint8Array.from(e),Uint8Array.from(this.privateKey)).signature)},f.prototype.verify=function(e,t){return s.ecdsaVerify(Uint8Array.from(t),Uint8Array.from(e),Uint8Array.from(this.publicKey))},f.prototype.wipePrivateData=function(){return this._privateKey&&o.randomBytes(this._privateKey.length).copy(this._privateKey),this._privateKey=null,this},f.prototype.toJSON=function(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}},f.fromMasterSeed=function(e,t){var r=o.createHmac("sha512",p).update(e).digest(),i=r.slice(0,32),n=r.slice(32),a=new f(t);return a.chainCode=n,a.privateKey=i,a},f.fromExtendedKey=function(e,t,r){r=r||!1;var n=new f(t=t||h),o=a.decode(e),c=o.readUInt32BE(0);i(c===t.private||c===t.public,"Version mismatch: does not match private or public"),n.depth=o.readUInt8(4),n.parentFingerprint=o.readUInt32BE(5),n.index=o.readUInt32BE(9),n.chainCode=o.slice(13,45);var s=o.slice(45);return 0===s.readUInt8(0)?(i(c===t.private,"Version mismatch: version does not match private"),n.privateKey=s.slice(1)):(i(c===t.public,"Version mismatch: version does not match public"),r?d(n,s):n.publicKey=s),n},f.fromJSON=function(e){return f.fromExtendedKey(e.xpriv)},f.HARDENED_OFFSET=u,e.exports=f},38087:()=>{},74854:()=>{},66602:()=>{}}]);
//# sourceMappingURL=9255.e0afa77d.js.map
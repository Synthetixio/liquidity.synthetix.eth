"use strict";(globalThis.webpackChunk_snx_v3_liquidity=globalThis.webpackChunk_snx_v3_liquidity||[]).push([[7714],{47714:(e,t,s)=>{function n(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}s.d(t,{arbitrumSepolia:()=>r,mainnet:()=>a,optimism:()=>Fe,sepolia:()=>Ce});const r=n({id:421614,name:"Arbitrum Sepolia",nativeCurrency:{name:"Arbitrum Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://sepolia-rollup.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Arbiscan",url:"https://sepolia.arbiscan.io",apiUrl:"https://api-sepolia.arbiscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:81930}},testnet:!0}),a=n({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var i=s(1491);function o(e,t){return({exclude:s,format:n})=>({exclude:s,format:e=>{const r=t(e);if(s)for(const e of s)delete r[e];return{...r,...n(e)}},type:e})}const c={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function l(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,i.ly)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,i.ly)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?c[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if("bigint"==typeof t.v){if(0n===t.v||27n===t.v)return 0;if(1n===t.v||28n===t.v)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),"eip2930"===t.type&&(delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),"eip1559"===t.type&&delete t.maxFeePerBlobGas,t}const u=o("transaction",l);function d(e){const t=e.transactions?.map((e=>"string"==typeof e?e:l(e)));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}const h=o("block",d);const b={"0x0":"reverted","0x1":"success"};function f(e){const t={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map((e=>function(e,{args:t,eventName:s}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...s?{args:t,eventName:s}:{}}}(e))):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,i.ly)(e.transactionIndex):null,status:e.status?b[e.status]:null,type:e.type?c[e.type]||e.type:null};return e.blobGasPrice&&(t.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(t.blobGasUsed=BigInt(e.blobGasUsed)),t}const p=o("transactionReceipt",f),m={block:h({format(e){const t=e.transactions?.map((e=>{if("string"==typeof e)return e;const t=l(e);return"0x7e"===t.typeHex&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,i.y_)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}));return{transactions:t,stateRoot:e.stateRoot}}}),transaction:u({format(e){const t={};return"0x7e"===e.type&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,i.y_)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:p({format:e=>({l1GasPrice:e.l1GasPrice?(0,i.y_)(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?(0,i.y_)(e.l1GasUsed):null,l1Fee:e.l1Fee?(0,i.y_)(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null})})};var g=s(80552);class x extends g.G{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}var y=s(20897),v=s(88518);const P=/^0x[a-fA-F0-9]{40}$/,w=new y.k(8192);function G(e,t){const{strict:s=!0}=t??{},n=`${e}.${s}`;if(w.has(n))return w.get(n);const r=!(!P.test(e)||e.toLowerCase()!==e&&s&&(0,v.xs)(e)!==e);return w.set(n,r),r}function I(e){return`0x${e.reduce(((e,t)=>e+t.replace("0x","")),"")}`}var B=s(56940),F=s(69364),C=s(70295);function E(e,t="hex"){const s=N(e),n=(0,F.q)(new Uint8Array(s.length));return s.encode(n),"hex"===t?(0,B.ci)(n.bytes):n.bytes}function N(e){return Array.isArray(e)?function(e){const t=e.reduce(((e,t)=>e+t.length),0),s=k(t);return{length:t<=55?1+t:1+s+t,encode(n){t<=55?n.pushByte(192+t):(n.pushByte(247+s),1===s?n.pushUint8(t):2===s?n.pushUint16(t):3===s?n.pushUint24(t):n.pushUint32(t));for(const{encode:t}of e)t(n)}}}(e.map((e=>N(e)))):function(e){const t="string"==typeof e?(0,C.nr)(e):e,s=k(t.length),n=1===t.length&&t[0]<128?1:t.length<=55?1+t.length:1+s+t.length;return{length:n,encode(e){1===t.length&&t[0]<128?e.pushBytes(t):t.length<=55?(e.pushByte(128+t.length),e.pushBytes(t)):(e.pushByte(183+s),1===s?e.pushUint8(t.length):2===s?e.pushUint16(t.length):3===s?e.pushUint24(t.length):e.pushUint32(t.length),e.pushBytes(t))}}}(e)}function k(e){if(e<256)return 1;if(e<65536)return 2;if(e<2**24)return 3;if(e<2**32)return 4;throw new g.G("Length is too large.")}function U(e){const t=Object.entries(e).map((([e,t])=>void 0===t||!1===t?null:[e,t])).filter(Boolean),s=t.reduce(((e,[t])=>Math.max(e,t.length)),0);return t.map((([e,t])=>`  ${`${e}:`.padEnd(s+1)}  ${t}`)).join("\n")}class T extends g.G{constructor({v:e}){super(`Invalid \`v\` value "${e}". Expected 27 or 28.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}}class $ extends g.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",U(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class O extends g.G{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}}function j(e){const{kzg:t}=e,s=e.to??("string"==typeof e.blobs[0]?"hex":"bytes"),n="string"==typeof e.blobs[0]?e.blobs.map((e=>(0,C.nr)(e))):e.blobs,r=[];for(const e of n)r.push(Uint8Array.from(t.blobToKzgCommitment(e)));return"bytes"===s?r:r.map((e=>(0,B.ci)(e)))}function L(e){const{kzg:t}=e,s=e.to??("string"==typeof e.blobs[0]?"hex":"bytes"),n="string"==typeof e.blobs[0]?e.blobs.map((e=>(0,C.nr)(e))):e.blobs,r="string"==typeof e.commitments[0]?e.commitments.map((e=>(0,C.nr)(e))):e.commitments,a=[];for(let e=0;e<n.length;e++){const s=n[e],i=r[e];a.push(Uint8Array.from(t.computeBlobKzgProof(s,i)))}return"bytes"===s?a:a.map((e=>(0,B.ci)(e)))}var H=s(16394),A=s(1679);class z extends A.kb{constructor(e,t,s,n){super(),this.blockLen=e,this.outputLen=t,this.padOffset=s,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=(0,A.GL)(this.buffer)}update(e){(0,H.Gg)(this);const{view:t,buffer:s,blockLen:n}=this,r=(e=(0,A.O0)(e)).length;for(let a=0;a<r;){const i=Math.min(n-this.pos,r-a);if(i!==n)s.set(e.subarray(a,a+i),this.pos),this.pos+=i,a+=i,this.pos===n&&(this.process(t,0),this.pos=0);else{const t=(0,A.GL)(e);for(;n<=r-a;a+=n)this.process(t,a)}}return this.length+=e.length,this.roundClean(),this}digestInto(e){(0,H.Gg)(this),(0,H.J8)(e,this),this.finished=!0;const{buffer:t,view:s,blockLen:n,isLE:r}=this;let{pos:a}=this;t[a++]=128,this.buffer.subarray(a).fill(0),this.padOffset>n-a&&(this.process(s,0),a=0);for(let e=a;e<n;e++)t[e]=0;!function(e,t,s,n){if("function"==typeof e.setBigUint64)return e.setBigUint64(t,s,n);const r=BigInt(32),a=BigInt(4294967295),i=Number(s>>r&a),o=Number(s&a),c=n?4:0,l=n?0:4;e.setUint32(t+c,i,n),e.setUint32(t+l,o,n)}(s,n-8,BigInt(8*this.length),r),this.process(s,0);const i=(0,A.GL)(e),o=this.outputLen;if(o%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const c=o/4,l=this.get();if(c>l.length)throw new Error("_sha2: outputLen bigger than state");for(let e=0;e<c;e++)i.setUint32(4*e,l[e],r)}digest(){const{buffer:e,outputLen:t}=this;this.digestInto(e);const s=e.slice(0,t);return this.destroy(),s}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:t,buffer:s,length:n,finished:r,destroyed:a,pos:i}=this;return e.length=n,e.pos=i,e.finished=r,e.destroyed=a,n%t&&e.buffer.set(s),e}}const S=(e,t,s)=>e&t^e&s^t&s,M=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),D=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),_=new Uint32Array(64);class R extends z{constructor(){super(64,32,8,!1),this.A=0|D[0],this.B=0|D[1],this.C=0|D[2],this.D=0|D[3],this.E=0|D[4],this.F=0|D[5],this.G=0|D[6],this.H=0|D[7]}get(){const{A:e,B:t,C:s,D:n,E:r,F:a,G:i,H:o}=this;return[e,t,s,n,r,a,i,o]}set(e,t,s,n,r,a,i,o){this.A=0|e,this.B=0|t,this.C=0|s,this.D=0|n,this.E=0|r,this.F=0|a,this.G=0|i,this.H=0|o}process(e,t){for(let s=0;s<16;s++,t+=4)_[s]=e.getUint32(t,!1);for(let e=16;e<64;e++){const t=_[e-15],s=_[e-2],n=(0,A.np)(t,7)^(0,A.np)(t,18)^t>>>3,r=(0,A.np)(s,17)^(0,A.np)(s,19)^s>>>10;_[e]=r+_[e-7]+n+_[e-16]|0}let{A:s,B:n,C:r,D:a,E:i,F:o,G:c,H:l}=this;for(let e=0;e<64;e++){const t=l+((0,A.np)(i,6)^(0,A.np)(i,11)^(0,A.np)(i,25))+((u=i)&o^~u&c)+M[e]+_[e]|0,d=((0,A.np)(s,2)^(0,A.np)(s,13)^(0,A.np)(s,22))+S(s,n,r)|0;l=c,c=o,o=i,i=a+t|0,a=r,r=n,n=s,s=t+d|0}var u;s=s+this.A|0,n=n+this.B|0,r=r+this.C|0,a=a+this.D|0,i=i+this.E|0,o=o+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(s,n,r,a,i,o,c,l)}roundClean(){_.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const V=(0,A.hE)((()=>new R));var K=s(16463);function q(e){const{commitment:t,version:s=1}=e,n=e.to??("string"==typeof t?"hex":"bytes"),r=function(e,t){const s=t||"hex",n=V((0,K.v)(e,{strict:!1})?(0,C.O0)(e):e);return"bytes"===s?n:(0,B.NC)(n)}(t,"bytes");return r.set([s],0),"bytes"===n?r:(0,B.ci)(r)}const J=32,W=4096,Q=J*W,X=6*Q-1-1*W*6,Y=1;class Z extends g.G{constructor({maxSize:e,size:t}){super("Blob size is too large.",{metaMessages:[`Max: ${e} bytes`,`Given: ${t} bytes`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlobSizeTooLargeError"})}}class ee extends g.G{constructor(){super("Blob data must not be empty."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EmptyBlobError"})}}class te extends g.G{constructor({hash:e,size:t}){super(`Versioned hash "${e}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${t}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidVersionedHashSizeError"})}}class se extends g.G{constructor({hash:e,version:t}){super(`Versioned hash "${e}" version is invalid.`,{metaMessages:[`Expected: ${Y}`,`Received: ${t}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidVersionedHashVersionError"})}}var ne=s(99532);function re(e){const{data:t,kzg:s,to:n}=e,r=e.blobs??function(e){const t=e.to??("string"==typeof e.data?"hex":"bytes"),s="string"==typeof e.data?(0,C.nr)(e.data):e.data,n=(0,ne.d)(s);if(!n)throw new ee;if(n>X)throw new Z({maxSize:X,size:n});const r=[];let a=!0,i=0;for(;a;){const e=(0,F.q)(new Uint8Array(Q));let t=0;for(;t<W;){const n=s.slice(i,i+(J-1));if(e.pushByte(0),e.pushBytes(n),n.length<31){e.pushByte(128),a=!1;break}t++,i+=31}r.push(e)}return"bytes"===t?r.map((e=>e.bytes)):r.map((e=>(0,B.ci)(e.bytes)))}({data:t,to:n}),a=e.commitments??j({blobs:r,kzg:s,to:n}),i=e.proofs??L({blobs:r,commitments:a,kzg:s,to:n}),o=[];for(let e=0;e<r.length;e++)o.push({blob:r[e],commitment:a[e],proof:i[e]});return o}var ae=s(55870);class ie extends g.G{constructor({chainId:e}){super("number"==typeof e?`Chain ID "${e}" is invalid.`:"Chain ID is invalid."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}const oe={ether:-9,wei:9};function ce(e,t="wei"){return function(e,t){let s=e.toString();const n=s.startsWith("-");n&&(s=s.slice(1)),s=s.padStart(t,"0");let[r,a]=[s.slice(0,s.length-t),s.slice(s.length-t)];return a=a.replace(/(0+)$/,""),`${n?"-":""}${r||"0"}${a?`.${a}`:""}`}(e,oe[t])}class le extends g.G{constructor({cause:e,message:t}={}){const s=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${s?`with reason: ${s}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(le,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(le,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class ue extends g.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${ce(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(ue,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class de extends g.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${ce(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(de,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class he extends g.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(he,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class be extends g.G{constructor({cause:e,nonce:t}={}){super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(be,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class fe extends g.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(fe,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class pe extends g.G{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(pe,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class me extends g.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(me,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class ge extends g.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(ge,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class xe extends g.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(xe,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class ye extends g.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:s}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${ce(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${s?` = ${ce(s)} gwei`:""}).`].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(ye,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});var ve=s(81002);function Pe(e){const{chainId:t,maxPriorityFeePerGas:s,maxFeePerGas:n,to:r}=e;if(t<=0)throw new ie({chainId:t});if(r&&!G(r))throw new x({address:r});if(n&&n>2n**256n-1n)throw new ue({maxFeePerGas:n});if(s&&n&&s>n)throw new ye({maxFeePerGas:n,maxPriorityFeePerGas:s})}function we(e){if(!e||0===e.length)return[];const t=[];for(let s=0;s<e.length;s++){const{address:n,storageKeys:r}=e[s];for(let e=0;e<r.length;e++)if(r[e].length-2!=64)throw new O({storageKey:r[e]});if(!G(n,{strict:!1}))throw new x({address:n});t.push([n,r])}return t}function Ge(e,t){const s=function(e){if(e.type)return e.type;if(void 0!==e.blobs||void 0!==e.blobVersionedHashes||void 0!==e.maxFeePerBlobGas||void 0!==e.sidecars)return"eip4844";if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new $({transaction:e})}(e);return"eip1559"===s?function(e,t){const{chainId:s,gas:n,nonce:r,to:a,value:i,maxFeePerGas:o,maxPriorityFeePerGas:c,accessList:l,data:u}=e;Pe(e);const d=we(l),h=[(0,B.NC)(s),r?(0,B.NC)(r):"0x",c?(0,B.NC)(c):"0x",o?(0,B.NC)(o):"0x",n?(0,B.NC)(n):"0x",a??"0x",i?(0,B.NC)(i):"0x",u??"0x",d,...Ie(e,t)];return I(["0x02",E(h)])}(e,t):"eip2930"===s?function(e,t){const{chainId:s,gas:n,data:r,nonce:a,to:i,value:o,accessList:c,gasPrice:l}=e;!function(e){const{chainId:t,maxPriorityFeePerGas:s,gasPrice:n,maxFeePerGas:r,to:a}=e;if(t<=0)throw new ie({chainId:t});if(a&&!G(a))throw new x({address:a});if(s||r)throw new g.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(n&&n>2n**256n-1n)throw new ue({maxFeePerGas:n})}(e);const u=we(c),d=[(0,B.NC)(s),a?(0,B.NC)(a):"0x",l?(0,B.NC)(l):"0x",n?(0,B.NC)(n):"0x",i??"0x",o?(0,B.NC)(o):"0x",r??"0x",u,...Ie(e,t)];return I(["0x01",E(d)])}(e,t):"eip4844"===s?function(e,t){const{chainId:s,gas:n,nonce:r,to:a,value:o,maxFeePerBlobGas:c,maxFeePerGas:l,maxPriorityFeePerGas:u,accessList:d,data:h}=e;!function(e){const{blobVersionedHashes:t}=e;if(t){if(0===t.length)throw new ee;for(const e of t){const t=(0,ne.d)(e),s=(0,i.ly)((0,ve.tP)(e,0,1));if(32!==t)throw new te({hash:e,size:t});if(s!==Y)throw new se({hash:e,version:s})}}Pe(e)}(e);let b=e.blobVersionedHashes,f=e.sidecars;if(e.blobs&&(void 0===b||void 0===f)){const t="string"==typeof e.blobs[0]?e.blobs:e.blobs.map((e=>(0,B.ci)(e))),s=e.kzg,n=j({blobs:t,kzg:s});if(void 0===b&&(b=function(e){const{commitments:t,version:s}=e,n=e.to??("string"==typeof t[0]?"hex":"bytes"),r=[];for(const e of t)r.push(q({commitment:e,to:n,version:s}));return r}({commitments:n})),void 0===f){f=re({blobs:t,commitments:n,proofs:L({blobs:t,commitments:n,kzg:s})})}}const p=we(d),m=[(0,B.NC)(s),r?(0,B.NC)(r):"0x",u?(0,B.NC)(u):"0x",l?(0,B.NC)(l):"0x",n?(0,B.NC)(n):"0x",a??"0x",o?(0,B.NC)(o):"0x",h??"0x",p,c?(0,B.NC)(c):"0x",b??[],...Ie(e,t)],g=[],x=[],y=[];if(f)for(let e=0;e<f.length;e++){const{blob:t,commitment:s,proof:n}=f[e];g.push(t),x.push(s),y.push(n)}return I(["0x03",E(f?[m,g,x,y]:m)])}(e,t):function(e,t){const{chainId:s=0,gas:n,data:r,nonce:a,to:i,value:o,gasPrice:c}=e;!function(e){const{chainId:t,maxPriorityFeePerGas:s,gasPrice:n,maxFeePerGas:r,to:a,accessList:i}=e;if(a&&!G(a))throw new x({address:a});if(void 0!==t&&t<=0)throw new ie({chainId:t});if(s||r)throw new g.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(n&&n>2n**256n-1n)throw new ue({maxFeePerGas:n});if(i)throw new g.G("`accessList` is not a valid Legacy Transaction attribute.")}(e);let l=[a?(0,B.NC)(a):"0x",c?(0,B.NC)(c):"0x",n?(0,B.NC)(n):"0x",i??"0x",o?(0,B.NC)(o):"0x",r??"0x"];if(t){const e=(()=>{if(t.v>=35n){return(t.v-35n)/2n>0?t.v:27n+(35n===t.v?0n:1n)}if(s>0)return BigInt(2*s)+BigInt(35n+t.v-27n);const e=27n+(27n===t.v?0n:1n);if(t.v!==e)throw new T({v:t.v});return e})();l=[...l,(0,B.NC)(e),t.r,t.s]}else s>0&&(l=[...l,(0,B.NC)(s),"0x","0x"]);return E(l)}(e,t)}function Ie(e,t){const{r:s,s:n,v:r,yParity:a}=t??e;if(void 0===s)return[];if(void 0===n)return[];if(void 0===r&&void 0===a)return[];return["number"==typeof a?a?(0,B.NC)(1):"0x":0n===r?"0x":1n===r?(0,B.NC)(1):27n===r?"0x":(0,B.NC)(1),(0,ae.f)(s),(0,ae.f)(n)]}const Be={contracts:{gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}},formatters:m,serializers:{transaction:function(e,t){return function(e){return"deposit"===e.type||void 0!==e.sourceHash}(e)?function(e){!function(e){const{from:t,to:s}=e;if(t&&!G(t))throw new x({address:t});if(s&&!G(s))throw new x({address:s})}(e);const{sourceHash:t,data:s,from:n,gas:r,isSystemTx:a,mint:i,to:o,value:c}=e;return I(["0x7e",E([t,n,o??"0x",i?(0,B.NC)(i):"0x",c?(0,B.NC)(c):"0x",r?(0,B.NC)(r):"0x",a?"0x1":"0x",s??"0x"])])}(e):Ge(e,t)}}},Fe=n({...Be,id:10,name:"OP Mainnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://mainnet.optimism.io"]}},blockExplorers:{default:{name:"Optimism Explorer",url:"https://optimistic.etherscan.io",apiUrl:"https://api-optimistic.etherscan.io/api"}},contracts:{...Be.contracts,l2OutputOracle:{1:{address:"0xdfe97868233d1aa22e815a266982f2cf17685a27"}},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:4286263},portal:{1:{address:"0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"}},l1StandardBridge:{1:{address:"0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"}}},sourceId:1}),Ce=n({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.sepolia.org"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",blockCreated:5317080}},testnet:!0})}}]);
//# sourceMappingURL=7714.4ff1855a.js.map
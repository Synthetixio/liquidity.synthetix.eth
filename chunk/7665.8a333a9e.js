"use strict";(globalThis.webpackChunk_snx_v3_liquidity=globalThis.webpackChunk_snx_v3_liquidity||[]).push([[7665],{17665:(t,a,e)=>{e.r(a),e.d(a,{WithdrawModal:()=>Q,WithdrawModalUi:()=>M,default:()=>G});var s=e(75429),r=e(11082),o=e(59176),i=e(74008),n=e(84626),l=e(70065),d=e(45071),c=e(42219),u=e(99581),w=e(77528),p=e(13797),h=e(25042),y=e(9978),m=e(908),g=e(63322),b=e(8176),x=e(89536),C=e(89990),f=e(96596),v=e(17716),S=e(68881),T=e(22668),k=e(99),A=e(35834),j=e(95772),D=e(37888),W=e(28145),$=e(50986),N=e(10528),E=e(2784);const I=({accountId:t,collateralTypeAddress:a,amount:e})=>{const[s,r]=(0,E.useReducer)(v.I,v.E),{data:o}=(0,T.a)(),{data:i,refetch:n}=(0,S.Y_)(),{network:l}=(0,m.LN)(),{gasSpeed:d}=(0,j.jU)(),c=(0,m.mx)(),u=(0,m.yL)(),w=(0,W.useMutation)({mutationFn:async()=>{if(!c||!l||!u)throw new Error("No signer or network");if(!(o&&a&&e))throw new Error("Not ready");if(e?.eq(0))throw new Error("Amount less than 0");const s=await c.getAddress();try{r({type:"prompting"});const n=new $.CH(a,["function decimals() view returns (uint8)"],u),w=await n.decimals(),p=e.gt(0)?(0,f.vz)(e.toString(),w):N.O$.from(0),h=new $.CH(o.address,o.abi,c).populateTransaction.withdraw(N.O$.from(t),a,p),y=Promise.all([h]),[m,g]=await Promise.all([y,(0,A.o)({provider:u})]);i&&m.unshift(i);const{multicallTxn:b,gasLimit:x}=await(0,D.dI)(l,m,"useWithdraw",s),C=(0,k.F)({gasLimit:x,gasPrices:g,gasSpeed:d}),v=await c.sendTransaction({...b,...C});r({type:"pending",payload:{txnHash:v.hash}}),await v.wait(),r({type:"success"})}catch(t){throw r({type:"error",payload:{error:t}}),t}},onSuccess:()=>{n()}});return{mutation:w,txnState:s,settle:()=>r({type:"settled"}),isLoading:w.isPending,exec:w.mutateAsync}};var L=e(37330),P=e(34367),q=e(20870),H=e(4902),U=e(51906),B=e(49494);const _=({accountId:t,availableCollateral:a,snxUSDCollateral:e,amountToWithdraw:s,accountCollateral:r,collateralSymbol:o})=>{const[i,n]=(0,E.useReducer)(v.I,v.E),{data:l}=(0,T.a)(),{data:d}=(0,q.b)(),{data:u}=(0,H.a)(),{data:p,refetch:h}=(0,S.Y_)(),{network:y}=(0,m.LN)(),{data:g}=(0,P.X)(),{gasSpeed:b}=(0,j.jU)(),x=(0,m.mx)(),C=(0,m.yL)(),f=(0,W.useMutation)({mutationFn:async()=>{if(!x||!y||!C)throw new Error("No signer or network");if(!(l&&d&&u&&t&&g?.sUSD&&g.snxUSD))throw new Error("Not ready");if(e.add(a).lt(s))throw new Error("Exceeds balance");const i=s.gt(a)?a:s,h=s.sub(i).gt(0)?s.sub(i):c.GH;try{const e=(0,w.$l)(o);n({type:"prompting"});const s=(0,A.o)({provider:C}),m=new $.CH(l.address,l.abi,x),f=new $.CH(u.address,u.abi,x),v=new $.CH(d.address,d.abi,x),S=i.gt(0)?m.populateTransaction.withdraw(N.O$.from(t),r?.tokenAddress,i.toBN()):void 0,T=h.gt(0)?m.populateTransaction.withdraw(N.O$.from(t),g?.snxUSD,h.toBN()):void 0,j=h.gt(0)?f.populateTransaction.approve(d.address,h.toBN()):void 0,W=h.gt(0)?v.populateTransaction.buy(e,h.toBN(),0,U.d):void 0,E=h.gt(0)?(await v.callStatic.quoteBuyExactIn(e,h.toBN(),0)).synthAmount:c.GH,I=a.add(E),P=v.populateTransaction.unwrap(e,I.toBN(),Number(B.formatUnits(I.toBN().mul(98).div(100).toString(),12).toString()).toFixed()),[q,H,_,O,F,M]=await Promise.all([s,S,T,j,W,P]),Q=[H,_,O,F,M].filter(L._);p&&Q.unshift(p);const G=await x.getAddress(),{multicallTxn:K,gasLimit:z}=await(0,D.dI)(y,Q,"useWithdrawBase",G),R=(0,k.F)({gasLimit:z,gasPrices:q,gasSpeed:b}),Y=await x.sendTransaction({...K,...R});n({type:"pending",payload:{txnHash:Y.hash}}),await Y.wait(),n({type:"success"})}catch(t){throw n({type:"error",payload:{error:t}}),t}},onSuccess:()=>{h()}});return{mutation:f,txnState:i,settle:()=>n({type:"settled"}),isLoading:f.isPending,exec:f.mutateAsync}};var O=e(21849),F=e(52322);const M=({isDebtWithdrawal:t,amount:a,isOpen:e,onClose:l,onSubmit:c,state:u,symbol:w})=>{if(e)return u.step>1?(0,F.jsx)(O.s,{onClose:c,title:(t?"Debt":"Collateral")+" successfully Withdrawn",subline:(0,F.jsxs)(F.Fragment,{children:["Your ",(0,F.jsx)("b",{children:t?"Debt":"Collateral"})," has been withdrawn, read more about it in the"," ",(0,F.jsx)(r.r,{href:"https://docs.synthetix.io/v/synthetix-v3-user-documentation",target:"_blank",color:"cyan.500",children:"Synthetix V3 Documentation"})]}),alertText:(t?"Debt":"Collateral")+" successfully Withdrawn"}):(0,F.jsxs)("div",{"data-cy":"withdraw multistep",children:[(0,F.jsxs)(o.x,{color:"gray.50",fontSize:"20px",fontWeight:700,children:[(0,F.jsx)(s.R,{cursor:"pointer",onClick:l,mr:2}),"Manage ",t?"Debt":"Collateral"]}),(0,F.jsx)(i.i,{my:4}),(0,F.jsx)(h.P0,{step:1,title:"Withdraw",subtitle:(0,F.jsxs)(o.x,{as:"div",children:[(0,F.jsx)(d.$,{value:a})," ",w," will be withdrawn"]}),status:{failed:1===u.step&&"error"===u.status,success:u.step>1,loading:1===u.step&&"pending"===u.status}}),(0,F.jsx)(n.z,{isDisabled:"pending"===u.status,onClick:c,width:"100%",mt:"6","data-cy":"withdraw confirm button",children:(()=>{switch(!0){case"error"===u.status:return"Retry";case"pending"===u.status:return"Processing...";case u.step>1:return"Done";default:return"Execute Transaction"}})()})]})};function Q({liquidityPosition:t,onClose:a,isOpen:e,isDebtWithdrawal:s=!1}){const[r,o]=(0,E.useState)({step:1,status:"idle"}),i=(0,x.UO)(),n=(0,l.p)({isClosable:!0,duration:9e3}),{network:d}=(0,m.LN)(),h=(0,W.useQueryClient)(),{withdrawAmount:f,setWithdrawAmount:v}=(0,E.useContext)(p.n),{data:S}=(0,g.t)(i.collateralSymbol),T=(0,b.o)(),k=t?.accountId,{data:A}=(0,C.p)(),{data:j}=(0,y.ar)(k,A?.address),{mutation:D}=I({amount:f,accountId:k,collateralTypeAddress:s?A?.address:t?.accountCollateral?.tokenAddress}),{mutation:$}=_({accountId:k,availableCollateral:t?.accountCollateral.availableCollateral||c.GH,snxUSDCollateral:j?.availableCollateral||c.GH,amountToWithdraw:f,accountCollateral:t?.accountCollateral,collateralSymbol:i.collateralSymbol}),N=(0,E.useCallback)((async()=>{try{1===r.step?(o({step:1,status:"pending"}),(0,w.Yz)(d?.id,d?.preset)?await $.mutateAsync():await D.mutateAsync(),o({step:2,status:"success"}),h.invalidateQueries({queryKey:[`${d?.id}-${d?.preset}`,"LiquidityPosition",{accountId:k}]}),h.invalidateQueries({queryKey:[`${d?.id}-${d?.preset}`,"AccountSpecificCollateral",{accountId:k}]}),h.invalidateQueries({queryKey:[`${d?.id}-${d?.preset}`,"LiquidityPositions",{accountId:k}]}),h.invalidateQueries({queryKey:[`${d?.id}-${d?.preset}`,"AccountCollateralUnlockDate",{accountId:k}]}),h.invalidateQueries({queryKey:[`${d?.id}-${d?.preset}`,"TokenBalance"]}),v(c.GH)):a()}catch(t){o((t=>({...t,status:"error"})));const a=T(t);throw a&&console.error(new Error(a.name),a),n.closeAll(),n({title:"Withdraw failed",description:a?(0,F.jsx)(u.M,{contractError:a}):"Please try again.",status:"error",variant:"left-accent",duration:36e5}),Error("Withdraw failed",{cause:t})}}),[k,T,d?.id,d?.preset,a,h,v,n,r.step,$,D]);return(0,F.jsx)(M,{amount:f,isOpen:e,onClose:a,symbol:s?A?.symbol:S?.symbol,state:r,onSubmit:N,isDebtWithdrawal:s})}const G=Q}}]);
//# sourceMappingURL=7665.8a333a9e.js.map
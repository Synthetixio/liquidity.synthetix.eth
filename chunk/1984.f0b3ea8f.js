"use strict";(globalThis.webpackChunk_snx_v3_liquidity=globalThis.webpackChunk_snx_v3_liquidity||[]).push([[1984],{91984:(e,t,a)=>{a.r(t),a.d(t,{RepayModal:()=>le,RepayModalUi:()=>ie,default:()=>ce});var r=a(11082),o=a(59176),s=a(74008),n=a(84626),i=a(70065),l=a(38035),c=a(56317),p=a(45071),d=a(99581),u=a(96596),h=a(77528),y=a(13797),v=a(25042),f=a(42383),g=a(76885),b=a(64996),x=a(97721),m=a(40109),A=a(34367),w=a(89536),C=a(18498),j=a(2784),S=a(99),k=a(28145),T=a(17716),E=a(10528),I=a(50986),R=a(51906),P=a(35834),$=a(95772),q=a(73635),D=a(37330),O=a(40987),U=a(7226),_=a(82227);var N=a(55576),L=a(97737),B=a(9875),M=a(97386);const z="SET_REQUIRE_APPROVAL",Y="SET_INFINITE_APPROVAL",F="RETRY",H="RUN",Q="RESET",K="idle",V="approve",W="repay",G="failed",X="success",J={[V]:V,[W]:W},Z="approveSUSD",ee="executeRepay",te={error:null,requireApproval:!1,infiniteApproval:!1},ae=(0,B.C)({id:"RepayMachine",initial:K,predictableActionArguments:!0,context:te,on:{[H]:{target:W,actions:(0,M.f0)({error:e=>te.error,requireApproval:e=>te.requireApproval,infiniteApproval:e=>te.infiniteApproval})},[z]:{actions:(0,M.f0)({requireApproval:(e,t)=>t.requireApproval})},[Y]:{actions:(0,M.f0)({infiniteApproval:(e,t)=>t.infiniteApproval})}},states:{[K]:{on:{[H]:[{target:V,cond:e=>e.requireApproval},{target:W}]}},[V]:{invoke:{src:Z,onDone:{target:W},onError:{target:G,actions:(0,M.f0)({error:(e,t)=>({error:t.data,step:J.approve})})}}},[W]:{invoke:{src:ee,onDone:{target:X},onError:{target:G,actions:(0,M.f0)({error:(e,t)=>({error:t.data,step:J.repay})})}}},[G]:{on:{[F]:[{target:V,cond:e=>e.error?.step===J.approve,actions:(0,M.f0)({error:e=>null})},{target:W,cond:e=>e.error?.step===J.repay,actions:(0,M.f0)({error:e=>null})}]}},[X]:{}}});var re=a(75429),oe=a(21849),se=a(88383),ne=a(52322);const ie=({symbol:e,onClose:t,isOpen:a,debtChange:i,state:l,onSubmit:c,setInfiniteApproval:d})=>{const u=l.matches(V)||l.matches(W),{infiniteApproval:h,requireApproval:y,error:f}=l.context;if(a)return l.matches(X)?(0,ne.jsx)(oe.s,{onClose:c,title:"Debt successfully Updated",subline:(0,ne.jsxs)(ne.Fragment,{children:["Your ",(0,ne.jsx)("b",{children:"Debt"})," has been updated, read more about it in the"," ",(0,ne.jsx)(r.r,{href:"https://docs.synthetix.io/v/synthetix-v3-user-documentation",target:"_blank",color:"cyan.500",children:"Synthetix V3 Documentation"})]}),alertText:(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)("b",{children:"Debt"})," successfully Updated"]})}):(0,ne.jsxs)("div",{children:[(0,ne.jsxs)(o.x,{color:"gray.50",fontSize:"20px",fontWeight:700,children:[(0,ne.jsx)(re.R,{cursor:"pointer",onClick:t,mr:2}),"Manage Debt"]}),(0,ne.jsx)(s.i,{my:4}),(0,ne.jsx)(v.P0,{step:1,title:`Approve ${e} transfer`,status:{failed:f?.step===V,success:!y||l.matches(X),loading:l.matches(V)&&!f},checkboxLabel:y?`Approve unlimited ${e} transfers to Synthetix.`:void 0,checkboxProps:{isChecked:h,onChange:e=>d(e.target.checked)}}),(0,ne.jsx)(v.P0,{step:2,title:"Repay",subtitle:(0,ne.jsxs)(o.x,{children:["Repay ",(0,ne.jsx)(p.$,{value:i.abs(),suffix:` ${e}`})]}),status:{failed:f?.step===W,success:l.matches(X),loading:l.matches(W)&&!f}}),(0,ne.jsx)(n.z,{isDisabled:u,onClick:c,width:"100%",mt:"6","data-testid":"repay confirm button",children:(()=>{switch(!0){case Boolean(f):return"Retry";case u:return"Processing...";case l.matches(X):return"Continue";default:return"Execute Transaction"}})()})]})},le=({onClose:e,isOpen:t,availableCollateral:a})=>{const{debtChange:r,setDebtChange:o}=(0,j.useContext)(y.n),n=(0,w.UO)(),{network:p}=(0,g.LN)(),v=(0,k.useQueryClient)(),{data:B}=(0,b.t)(n.collateralSymbol),{data:M}=(0,q.p)(),{data:K}=(0,N.mM)(M?.address),{exec:V,settle:W}=(0,C.f)({accountId:n.accountId,poolId:n.poolId,collateralTypeAddress:B?.tokenAddress,debtChange:r,availableUSDCollateral:a,balance:K}),{exec:G,settle:J}=(({accountId:e,poolId:t,collateralTypeAddress:a,debtChange:r,availableUSDCollateral:o,collateralSymbol:s})=>{const[n,i]=(0,j.useReducer)(T.I,T.E),{data:l}=(0,m.a)(),{data:c}=(0,q.p)(),{data:p}=(0,U.b)(),{data:d}=(0,_.Y_)(),{data:y}=(0,A.X)(),v=(0,g.mx)(),{network:b}=(0,g.LN)(),{gasSpeed:x}=(0,$.jU)(),w=(0,g.yL)(),C=(0,k.useMutation)({mutationFn:async()=>{if(!v||!b||!w)throw new Error("No signer or network");if(!(l&&t&&e&&a&&c&&p&&y?.sUSD))return;if(!o)return;if(r.eq(0))return;const n=r.abs(),g=n.sub(o),m=g.gt(0)?(0,u.vz)(g.toString(),6):E.O$.from(0);try{i({type:"prompting"});const r=(0,h.$l)(s),o=m.gt(0)?p.populateTransaction.wrap(r,m,0):void 0,u=new I.CH(a,f.P,v),y=g.gt(0)?u.populateTransaction.approve(p.address,g.toBN()):void 0,A=g.gt(0)?p.populateTransaction.sell(r,g.toBN(),0,R.d):void 0,C=new I.CH(c.address,f.P,v),j=g.gt(0)?C.populateTransaction.approve(l.address,g.toBN()):void 0,k=g.lte(0)?void 0:l.populateTransaction.deposit(E.O$.from(e),c.address,g.toBN()),T=l.populateTransaction.burnUsd(E.O$.from(e),E.O$.from(t),a,n.toBN()),$=Promise.all([o,y,A,j,k,T].filter(D._)),[q,U]=await Promise.all([$,(0,P.o)({provider:w})]);d&&q.push(d);const _=await v.getAddress(),N=await(0,O.dI)(b,q,"useRepay",_),L=(0,S.F)({gasLimit:N.gasLimit,gasPrices:U,gasSpeed:x}),B=await v.sendTransaction({...N,...L});i({type:"pending",payload:{txnHash:B.hash}}),await B.wait(),i({type:"success"})}catch(e){throw i({type:"error",payload:{error:e}}),e}}});return{mutation:C,txnState:n,settle:()=>i({type:"settled"}),isLoading:C.isPending,exec:C.mutateAsync}})({accountId:n.accountId,poolId:n.poolId,collateralTypeAddress:B?.tokenAddress,debtChange:r,availableUSDCollateral:a}),te=(0,i.p)({isClosable:!0,duration:9e3}),{data:re}=(0,m.a)(),{data:oe}=(0,U.b)(),le=(0,x.o)(re),ce=r.abs().sub(a||0),{data:pe}=(0,A.H)((0,h.$l)(n.collateralSymbol)),de=(0,h.Yz)(p?.id,p?.preset),ue=de?pe:M?.address,{approve:he,requireApproval:ye}=(0,f.y)({contractAddress:ue,amount:de?(0,u.vz)(ce.toString(),6):ce.toBN(),spender:de?oe?.address:re?.address}),[ve,fe]=(0,L.e)(ae,{services:{[Z]:async()=>{try{te({title:`Approve ${M?.symbol} for transfer`,description:"The next transaction will repay your debt.",status:"info",variant:"left-accent"}),await he(Boolean(ve.context.infiniteApproval))}catch(e){const t=le(e);throw t&&console.error(new Error(t.name),t),te.closeAll(),te({title:"Approval failed",description:t?(0,ne.jsx)(d.M,{contractError:t}):"Please try again.",status:"error",variant:"left-accent"}),Error("Approve failed",{cause:e})}},[ee]:async()=>{try{te.closeAll(),te({title:"Repaying...",variant:"left-accent"}),(0,h.Yz)(p?.id,p?.preset)?await G():await V(),await Promise.all([v.invalidateQueries({queryKey:[`${p?.id}-${p?.preset}`,"TokenBalance"]}),v.invalidateQueries({queryKey:[`${p?.id}-${p?.preset}`,"Allowance"]}),v.invalidateQueries({queryKey:[`${p?.id}-${p?.preset}`,"LiquidityPosition"]})]),o(se.GH),te.closeAll(),te({title:"Success",description:"Your debt has been repaid.",status:"success",duration:5e3,variant:"left-accent"})}catch(e){const t=le(e);throw t&&console.error(new Error(t.name),t),te({title:"Could not complete repaying",description:t?(0,ne.jsx)(d.M,{contractError:t}):"Please try again.",status:"error",variant:"left-accent"}),Error("Repay failed",{cause:e})}}}}),ge=ce.gt(0);(0,j.useEffect)((()=>{fe(z,{requireApproval:ye&&ge})}),[ge,ye,fe]);const be=(0,j.useCallback)((async()=>{if(ve.matches(X))return fe(Q),void e();ve.context.error?fe(F):fe(H)}),[e,fe,ve]);return n.poolId&&n.accountId&&B?(0,ne.jsx)(ie,{state:ve,onSubmit:be,debtChange:r,setInfiniteApproval:e=>{fe(Y,{infiniteApproval:e})},onClose:()=>{W(),J(),e()},isOpen:t,symbol:de?B.symbol:M?.symbol}):(0,ne.jsxs)(l.k,{gap:4,flexDirection:"column",children:[(0,ne.jsx)(c.O,{maxW:"232px",width:"100%",height:"20px"}),(0,ne.jsx)(s.i,{my:4}),(0,ne.jsx)(c.O,{width:"100%",height:"20px"}),(0,ne.jsx)(c.O,{width:"100%",height:"20px"})]})},ce=le}}]);
//# sourceMappingURL=1984.f0b3ea8f.js.map
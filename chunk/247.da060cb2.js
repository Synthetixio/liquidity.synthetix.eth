"use strict";(globalThis.webpackChunk_snx_v3_liquidity=globalThis.webpackChunk_snx_v3_liquidity||[]).push([[247],{99581:(e,t,r)=>{r.d(t,{M:()=>d});var a=r(2784),o=r(84626),n=r(87651),s=r(59176),i=r(65068),l=r(52322);const c="true"===window?.localStorage?.CONTRACT_ERROR_OPEN;function d({contractError:e}){const[t,r]=a.useState(c);return(0,l.jsxs)(l.Fragment,{children:[t?null:(0,l.jsx)(o.z,{variant:"link",onClick:()=>r(!0),color:"inherit",fontWeight:"normal",fontStyle:"italic",children:"details..."}),(0,l.jsxs)(n.U,{in:t,animateOpacity:!0,children:[(0,l.jsx)(s.x,{fontStyle:"italic",fontSize:"0.8em",children:e.name}),(0,l.jsx)(s.x,{whiteSpace:"pre",fontSize:"0.8em",fontStyle:"italic",pl:"0.5em",children:Object.entries(e.args).map((([e,t])=>`${e}: ${t instanceof Date?(0,i.Z)(t,"yyyy-MM-dd HH:mm:ss"):t}`)).join("\n")})]})]})}},25042:(e,t,r)=>{r.d(t,{nQ:()=>l,Tw:()=>c,P0:()=>f});var a=r(38035),o=r(81540),n=r(28535),s=r(21112),i=r(52322);const l=(0,s.I)({viewBox:"0 0 14 14",path:(0,i.jsx)("g",{fill:"currentColor",children:(0,i.jsx)("polygon",{points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})})}),c=(0,s.I)({d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"});function d({status:e,children:t}){switch(!0){case e.failed:return(0,i.jsx)(c,{color:"white"});case e.success:return(0,i.jsx)(l,{color:"white"});case e.loading:return(0,i.jsx)(o.$,{color:"white",width:6,height:6});case e.disabled:default:return(0,i.jsx)(n.xu,{__css:{display:"inline",fontWeight:"medium",textAlign:"center",fontSize:"md"},children:t})}}function u(e){switch(!0){case e.failed:return"red.700";case e.disabled:case e.loading:return"gray.700";case e.success:return"green.700";default:return"gray.700"}}function p({status:e,children:t}){return(0,i.jsx)(a.k,{width:10,height:10,minWidth:10,minHeight:10,justifyContent:"center",alignItems:"center",bg:u(e),rounded:"full",transitionProperty:"background",transitionDuration:"normal",children:(0,i.jsx)(d,{status:e,children:t})})}var m=r(78876),h=r(59176);function g({children:e,...t}){return(0,i.jsx)(a.k,{mt:"0.5",children:(0,i.jsx)(m.X,{size:"sm",...t,children:(0,i.jsx)(n.xu,{fontSize:"xs",opacity:"0.66",children:e})})})}function f({step:e,title:t,subtitle:r,checkboxLabel:o,checkboxProps:n,status:s,children:l}){return(0,i.jsxs)(a.k,{position:"relative",alignItems:"center",gap:4,rounded:"lg",mt:"4",p:"4",border:"2px solid",transitionProperty:"border-color",transitionDuration:"normal",borderColor:u(s),children:[(0,i.jsx)(p,{status:s,children:e}),(0,i.jsxs)(a.k,{direction:"column",children:[(0,i.jsx)(h.x,{"data-cy":`multistep-${e}`,children:t}),r?(0,i.jsx)(h.x,{as:"div",fontSize:"xs",opacity:"0.66",children:r}):null,o?(0,i.jsx)(g,{...n,children:o}):null,l]})]})}},50247:(e,t,r)=>{r.r(t),r.d(t,{UndelegateModal:()=>ne,UndelegateModalUi:()=>oe,default:()=>se});var a=r(66901),o=r(26468),n=r(19433),s=r(54326),i=r(2338),l=r(97217),c=r(59176),d=r(84626),u=r(70065),p=r(45071),m=r(99581),h=r(77528),g=r(13797),f=r(25042),y=r(76885),x=r(19299),w=r(97721),b=r(40109),j=r(89536),v=r(2784),C=r(28145),S=r(17716),T=r(79929),k=r(10528),A=r(99),O=r(35834),I=r(95772),L=r(860),E=r(42614),P=r(95522);var N=r(50986),R=r(42383),$=r(96596),D=r(51544),_=r(28783),U=r(37330),q=r(11838),M=r(34367);var z=r(97737),B=r(9875),F=r(97386);const H="SET_AMOUNT",Y="SET_COLLATERAL_SYMBOL",Q="RETRY",W="RUN",Z="RESET",X="idle",K="undelegate",G="failed",J="success",V={[K]:K},ee="undelegate",te={amount:(0,T.wei)(0),error:null,collateralSymbol:void 0},re=(0,B.C)({id:"UndelegateMachine",initial:X,predictableActionArguments:!0,context:te,on:{[Z]:{target:X,actions:(0,F.f0)({amount:e=>te.amount,error:e=>te.error,collateralSymbol:e=>te.collateralSymbol})},[H]:{actions:(0,F.f0)({amount:(e,t)=>t.amount})},[Y]:{actions:(0,F.f0)({collateralSymbol:(e,t)=>t.symbol})}},states:{[X]:{on:{[W]:[{target:K,cond:e=>e.amount.gt(0)}]}},[K]:{invoke:{src:ee,onError:{target:G,actions:(0,F.f0)({error:(e,t)=>({error:t.data,step:V.undelegate})})},onDone:[{target:J}]}},[G]:{on:{[Q]:[{target:K,cond:e=>e.error?.step===V.undelegate,actions:(0,F.f0)({error:e=>null})}]}},[J]:{}}});var ae=r(52322);const oe=({amount:e,isOpen:t,onClose:r,collateralType:u,onSubmit:m,state:h,error:g})=>{const y=h.matches(K);return(0,ae.jsxs)(a.u_,{size:"lg",isOpen:t,onClose:r,closeOnOverlayClick:!1,children:[(0,ae.jsx)(o.Z,{}),(0,ae.jsxs)(n.h,{bg:"black",color:"white","data-testid":"undelegate modal",children:[(0,ae.jsx)(s.x,{children:"Complete this action"}),(0,ae.jsx)(i.o,{}),(0,ae.jsxs)(l.f,{children:[(0,ae.jsx)(c.x,{mb:"2",children:"Please execute the following transactions:"}),(0,ae.jsx)(f.P0,{step:1,title:"Remove collateral",subtitle:(0,ae.jsxs)(c.x,{as:"div",children:[(0,ae.jsx)(p.$,{value:e,suffix:` ${u?.symbol}`})," will be removed from the pool."]}),status:{failed:Boolean(g?.step===K),disabled:e.eq(0),success:h.matches(J),loading:h.matches(K)&&!g}}),(0,ae.jsx)(d.z,{isDisabled:y,onClick:m,width:"100%",my:"4","data-testid":"undelegate confirm button",children:(()=>{switch(!0){case Boolean(g):return"Retry";case y:return"Processing...";case h.matches(J):return"Done";default:return"Start"}})()})]})]})]})},ne=({onClose:e,isOpen:t,liquidityPosition:r})=>{const a=(0,j.UO)(),{collateralChange:o}=(0,v.useContext)(g.n),{network:n}=(0,y.LN)(),s=(0,C.useQueryClient)(),{data:i}=(0,x.t)(a.collateralSymbol),l=(0,u.p)({isClosable:!0,duration:9e3}),c=r?.collateralAmount||(0,T.wei)(0),{exec:d}=(({accountId:e,poolId:t,collateralTypeAddress:r,collateralChange:a,currentCollateral:o})=>{const[n,s]=(0,v.useReducer)(S.I,S.E),{data:i}=(0,b.a)(),l=(0,y.mx)(),{gasSpeed:c}=(0,I.jU)(),d=(0,y.yL)(),{data:u}=(0,E.L)(),{network:p}=(0,y.LN)(),m=(0,C.useMutation)({mutationFn:async()=>{if(!l||!p||!d)throw new Error("No signer or network");if(i&&t&&r&&u&&!a.eq(0)&&!o.eq(0))try{s({type:"prompting"});const n=i.populateTransaction.delegateCollateral(k.O$.from(e),k.O$.from(t),r,o.add(a).toBN(),(0,T.wei)(1).toBN()),m=await l.getAddress(),h=(0,P.$)(u,p.isTestnet).then((e=>(0,P.x)(m,u,e))),[g,f,y]=await Promise.all([n,(0,O.o)({provider:d}),h]),x=y.concat(g),w=await(0,L.dI)(p,x,"useUndelegate",i.interface),b=(0,A.F)({gasLimit:w.gasLimit,gasPrices:f,gasSpeed:c}),j=await l.sendTransaction({...w,...b});s({type:"pending",payload:{txnHash:j.hash}}),await j.wait(),s({type:"success"})}catch(e){throw s({type:"error",payload:{error:e}}),e}}});return{mutation:m,txnState:n,settle:()=>s({type:"settled"}),isLoading:m.isPending,exec:m.mutateAsync}})({accountId:a.accountId,poolId:a.poolId,collateralTypeAddress:r?.tokenAddress,collateralChange:o,currentCollateral:c}),{exec:p}=(({accountId:e,poolId:t,collateralTypeAddress:r,collateralChange:a,currentCollateral:o,liquidityPosition:n})=>{const[s,i]=(0,v.useReducer)(S.I,S.E),{data:l}=(0,b.a)(),{data:c}=(0,_.b)(),{data:d}=(0,q.Y)(),u=(0,y.mx)(),{gasSpeed:p}=(0,I.jU)(),m=(0,y.yL)(),{data:g}=(0,E.L)(),{network:f}=(0,y.LN)(),{data:x}=(0,M.X)(),w=n?.debt.gt(0),j=w&&n?n.debt:(0,T.wei)(0),{approve:P,requireApproval:z}=(0,R.y)({contractAddress:x?.USDC,amount:(0,$.vz)(j.toString(),6).mul(110).div(100),spender:(0,h.Do)(f?.id)}),B=(0,C.useMutation)({mutationFn:async()=>{if(!u||!f||!m)throw new Error("No signer or network");if(l&&t&&r&&g&&c&&!a.eq(0)&&!o.eq(0))try{i({type:"prompting"}),w&&z&&await P(!1);const n=[];if(w){const a=new N.CH((0,h.Do)(f.id),D.v,u).populateTransaction.depositDebtToRepay(l.address,c.address,e,t,r,h.Ds);n.push(a);const o=l.populateTransaction.burnUsd(k.O$.from(e),k.O$.from(t),r,j?.mul(110).div(100).toBN().toString()||"0");n.push(o)}const s=l.populateTransaction.delegateCollateral(k.O$.from(e),k.O$.from(t),r,o.add(a).toBN(),(0,T.wei)(1).toBN()),g=Promise.all([...n,s].filter(U._)),[y,x]=await Promise.all([g,(0,O.o)({provider:m})]);d&&y.unshift(d);const b=await(0,L.dI)(f,y,"useUndelegate",l.interface),v=(0,A.F)({gasLimit:b.gasLimit,gasPrices:x,gasSpeed:p}),C=await u.sendTransaction({...b,...v});i({type:"pending",payload:{txnHash:C.hash}}),await C.wait(),i({type:"success"})}catch(e){throw i({type:"error",payload:{error:e}}),e}}});return{mutation:B,txnState:s,settle:()=>i({type:"settled"}),isLoading:B.isPending,exec:B.mutateAsync}})({accountId:a.accountId,poolId:a.poolId,collateralTypeAddress:r?.tokenAddress,collateralChange:o,currentCollateral:c,liquidityPosition:r}),{data:f}=(0,b.a)(),B=(0,w.o)(f),[F,X]=(0,z.e)(re,{context:{amount:o.abs()},services:{[ee]:async()=>{try{(0,h.Yz)(n?.id,n?.preset)?await p():await d(),await s.invalidateQueries({queryKey:[`${n?.id}-${n?.preset}`,"LiquidityPosition"],exact:!1})}catch(e){const t=B(e);throw t&&console.error(new Error(t.name),t),l.closeAll(),l({title:"Remove collateral failed",description:t?(0,ae.jsx)(m.M,{contractError:t}):"Please try again.",status:"error"}),Error("Remove collateral failed",{cause:e})}}}}),K=o.toString();(0,v.useEffect)((()=>{X(H,{amount:(0,T.wei)(K).abs()})}),[K,X]),(0,v.useEffect)((()=>{X(Y,{symbol:(0,T.wei)(K).abs()})}),[K,X]);const G=(0,v.useCallback)((async()=>{if(F.matches(J))return X(Z),void e();F.context.error?X(Q):X(W)}),[e,X,F]);return(0,ae.jsx)(oe,{amount:F.context.amount,isOpen:t,onClose:e,collateralType:i,state:F,error:F.context.error,onSubmit:G})},se=ne},97721:(e,t,r)=>{r.d(t,{o:()=>c});r(5875),r(50509),r(38728),r(64810),r(43419),r(32825),r(16093),r(77829),r(60253),r(49225),r(79941),r(57265),r(25888),r(15840),r(37610),r(13351);var a=r(79155),o=r(50986),n=r(10528),s=r(49494),i=r(2784),l=r(860);function c(e){return(0,i.useCallback)((t=>{if(e)try{const r=t?.error?.data?.data||t?.error?.error?.data;if(!r)return void console.error({error:t});const i=e.interface.format(a.pc.full),c=new o.CH(e.address,Array.from(new Set(i.concat(l.IN).concat(["error CannotSelfApprove(address addr)","error InvalidTransferRecipient(address addr)","error InvalidOwner(address addr)","error TokenDoesNotExist(uint256 id)","error TokenAlreadyMinted(uint256 id)"]))),e.signer||e.provider).interface.parseError(r),d=Object.fromEntries(Object.entries(c.args).filter((([e])=>`${parseInt(e)}`!==e)).map((([e,t])=>{if(t instanceof n.O$){const r=parseFloat(s.dF(t.toString()));return r>.001?[e,r]:t.toNumber()>new Date(2e3,1,1).getTime()/1e3&&t.toNumber()<new Date(2100,1,1).getTime()/1e3?[e,new Date(1e3*t.toNumber())]:[e,parseFloat(t.toString())]}return[e,t]})));return{data:r,name:c.name,signature:c.signature,args:d}}catch(e){return void console.error(e)}}),[e])}}}]);
//# sourceMappingURL=247.da060cb2.js.map
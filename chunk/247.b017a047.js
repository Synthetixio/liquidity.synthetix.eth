"use strict";(globalThis.webpackChunk_snx_v3_liquidity=globalThis.webpackChunk_snx_v3_liquidity||[]).push([[247],{50247:(e,t,a)=>{a.r(t),a.d(t,{UndelegateModal:()=>re,UndelegateModalUi:()=>oe,default:()=>se});var o=a(66901),r=a(26468),s=a(19433),n=a(54326),l=a(2338),i=a(97217),c=a(59176),d=a(84626),u=a(70065),p=a(2784),m=a(19299),g=a(45071),y=a(25042),h=a(79929),w=a(89536),x=a(9875),f=a(97386);const b="SET_AMOUNT",C="SET_COLLATERAL_SYMBOL",v="RETRY",T="RUN",S="RESET",A="idle",L="undelegate",k="failed",E="success",I={[L]:L},O="undelegate",j={amount:(0,h.wei)(0),error:null,collateralSymbol:void 0},P=(0,x.C)({id:"UndelegateMachine",initial:A,predictableActionArguments:!0,context:j,on:{[S]:{target:A,actions:(0,f.f0)({amount:e=>j.amount,error:e=>j.error,collateralSymbol:e=>j.collateralSymbol})},[b]:{actions:(0,f.f0)({amount:(e,t)=>t.amount})},[C]:{actions:(0,f.f0)({collateralSymbol:(e,t)=>t.symbol})}},states:{[A]:{on:{[T]:[{target:L,cond:e=>e.amount.gt(0)}]}},[L]:{invoke:{src:O,onError:{target:k,actions:(0,f.f0)({error:(e,t)=>({error:t.data,step:I.undelegate})})},onDone:[{target:E}]}},[k]:{on:{[v]:[{target:L,cond:e=>e.error?.step===I.undelegate,actions:(0,f.f0)({error:e=>null})}]}},[E]:{}}});var q=a(97737),N=a(40109),R=a(28145),U=a(76885),$=a(17716),_=a(10528),B=a(99),M=a(35834),D=a(95772),z=a(860),F=a(51686),Y=a(95522);var H=a(13797),Q=a(97721),K=a(99581),Z=a(50986),G=a(85649),J=a(77528),V=a(96596),W=a(51544),X=a(81666),ee=a(37330),te=a(11838);var ae=a(52322);const oe=({amount:e,isOpen:t,onClose:a,collateralType:u,onSubmit:p,state:m,error:h})=>{const w=m.matches(L);return(0,ae.jsxs)(o.u_,{size:"lg",isOpen:t,onClose:a,closeOnOverlayClick:!1,children:[(0,ae.jsx)(r.Z,{}),(0,ae.jsxs)(s.h,{bg:"black",color:"white","data-testid":"undelegate modal",children:[(0,ae.jsx)(n.x,{children:"Complete this action"}),(0,ae.jsx)(l.o,{}),(0,ae.jsxs)(i.f,{children:[(0,ae.jsx)(c.x,{mb:"2",children:"Please execute the following transactions:"}),(0,ae.jsx)(y.P0,{step:1,title:"Remove collateral",subtitle:(0,ae.jsxs)(c.x,{as:"div",children:[(0,ae.jsx)(g.$,{value:e,suffix:` ${u?.symbol}`})," will be removed from the pool."]}),status:{failed:Boolean(h?.step===L),disabled:e.eq(0),success:m.matches(E),loading:m.matches(L)&&!h}}),(0,ae.jsx)(d.z,{isDisabled:w,onClick:p,width:"100%",my:"4","data-testid":"undelegate confirm button",children:(()=>{switch(!0){case Boolean(h):return"Retry";case w:return"Processing...";case m.matches(E):return"Done";default:return"Start"}})()})]})]})]})},re=({onClose:e,isOpen:t,liquidityPosition:a})=>{const o=(0,w.UO)(),{collateralChange:r}=(0,p.useContext)(H.n),{network:s}=(0,U.LN)(),n=(0,R.useQueryClient)(),{data:l}=(0,m.t)(o.collateralSymbol),i=(0,u.p)({isClosable:!0,duration:9e3}),c=a?.collateralAmount||(0,h.wei)(0),{exec:d}=(({accountId:e,poolId:t,collateralTypeAddress:a,collateralChange:o,currentCollateral:r})=>{const[s,n]=(0,p.useReducer)($.I,$.E),{data:l}=(0,N.a)(),i=(0,U.mx)(),{gasSpeed:c}=(0,D.jU)(),d=(0,U.yL)(),{data:u}=(0,F.L)(),{network:m}=(0,U.LN)(),g=(0,R.useMutation)({mutationFn:async()=>{if(!i||!m||!d)throw new Error("No signer or network");if(l&&t&&a&&u&&!o.eq(0)&&!r.eq(0))try{n({type:"prompting"});const s=l.populateTransaction.delegateCollateral(_.O$.from(e),_.O$.from(t),a,r.add(o).toBN(),(0,h.wei)(1).toBN()),p=await i.getAddress(),g=(0,Y.$)(u,m.isTestnet).then((e=>(0,Y.x)(p,u,e))),[y,w,x]=await Promise.all([s,(0,M.o)({provider:d}),g]),f=x.concat(y),b=await(0,z.dI)(m,f,"useUndelegate",l.interface),C=(0,B.F)({gasLimit:b.gasLimit,gasPrices:w,gasSpeed:c}),v=await i.sendTransaction({...b,...C});n({type:"pending",payload:{txnHash:v.hash}}),await v.wait(),n({type:"success"})}catch(e){throw n({type:"error",payload:{error:e}}),e}}});return{mutation:g,txnState:s,settle:()=>n({type:"settled"}),isLoading:g.isPending,exec:g.mutateAsync}})({accountId:o.accountId,poolId:o.poolId,collateralTypeAddress:a?.tokenAddress,collateralChange:r,currentCollateral:c}),{exec:g}=(({accountId:e,poolId:t,collateralTypeAddress:a,collateralChange:o,currentCollateral:r,liquidityPosition:s})=>{const[n,l]=(0,p.useReducer)($.I,$.E),{data:i}=(0,N.a)(),{data:c}=(0,X.b)(),{data:d}=(0,te.Y)(),u=(0,U.mx)(),{gasSpeed:m}=(0,D.jU)(),g=(0,U.yL)(),{data:y}=(0,F.L)(),{network:w}=(0,U.LN)(),x=s?.debt.gt(0),f=x&&s?s.debt:(0,h.wei)(0),{approve:b,requireApproval:C}=(0,G.y)({contractAddress:(0,J.sm)(w?.id),amount:(0,V.vz)(f.toString(),6).mul(110).div(100),spender:(0,J.Do)(w?.id)}),v=(0,R.useMutation)({mutationFn:async()=>{if(!u||!w||!g)throw new Error("No signer or network");if(i&&t&&a&&y&&c&&!o.eq(0)&&!r.eq(0))try{l({type:"prompting"}),x&&C&&await b(!1);const s=[];if(x){const o=new Z.CH((0,J.Do)(w.id),W.v,u).populateTransaction.depositDebtToRepay(i.address,c.address,e,t,a,J.Ds);s.push(o);const r=i.populateTransaction.burnUsd(_.O$.from(e),_.O$.from(t),a,f?.mul(110).div(100).toBN().toString()||"0");s.push(r)}const n=i.populateTransaction.delegateCollateral(_.O$.from(e),_.O$.from(t),a,r.add(o).toBN(),(0,h.wei)(1).toBN()),p=Promise.all([...s,n].filter(ee._)),[y,v]=await Promise.all([p,(0,M.o)({provider:g})]);d&&y.unshift(d);const T=await(0,z.dI)(w,y,"useUndelegate",i.interface),S=(0,B.F)({gasLimit:T.gasLimit,gasPrices:v,gasSpeed:m}),A=await u.sendTransaction({...T,...S});l({type:"pending",payload:{txnHash:A.hash}}),await A.wait(),l({type:"success"})}catch(e){throw l({type:"error",payload:{error:e}}),e}}});return{mutation:v,txnState:n,settle:()=>l({type:"settled"}),isLoading:v.isPending,exec:v.mutateAsync}})({accountId:o.accountId,poolId:o.poolId,collateralTypeAddress:a?.tokenAddress,collateralChange:r,currentCollateral:c,liquidityPosition:a}),{data:y}=(0,N.a)(),x=(0,Q.o)(y),[f,A]=(0,q.e)(P,{context:{amount:r.abs()},services:{[O]:async()=>{try{(0,J.Yz)(s?.id,s?.preset)?await g():await d(),await n.invalidateQueries({queryKey:[`${s?.id}-${s?.preset}`,"LiquidityPosition"],exact:!1})}catch(e){const t=x(e);throw t&&console.error(new Error(t.name),t),i.closeAll(),i({title:"Remove collateral failed",description:t?(0,ae.jsx)(K.M,{contractError:t}):"Please try again.",status:"error"}),Error("Remove collateral failed",{cause:e})}}}}),L=r.toString();(0,p.useEffect)((()=>{A(b,{amount:(0,h.wei)(L).abs()})}),[L,A]),(0,p.useEffect)((()=>{A(C,{symbol:(0,h.wei)(L).abs()})}),[L,A]);const k=(0,p.useCallback)((async()=>{if(f.matches(E))return A(S),void e();f.context.error?A(v):A(T)}),[e,A,f]);return(0,ae.jsx)(oe,{amount:f.context.amount,isOpen:t,onClose:e,collateralType:l,state:f,error:f.context.error,onSubmit:k})},se=re}}]);
//# sourceMappingURL=247.b017a047.js.map
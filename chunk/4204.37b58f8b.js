"use strict";(globalThis.webpackChunk_snx_v3_liquidity=globalThis.webpackChunk_snx_v3_liquidity||[]).push([[4204],{99581:(e,t,a)=>{a.d(t,{M:()=>d});var r=a(2784),o=a(84626),n=a(87651),s=a(59176),i=a(65068),l=a(52322);const c="true"===window?.localStorage?.CONTRACT_ERROR_OPEN;function d({contractError:e}){const[t,a]=r.useState(c);return(0,l.jsxs)(l.Fragment,{children:[t?null:(0,l.jsx)(o.z,{variant:"link",onClick:()=>a(!0),color:"inherit",fontWeight:"normal",fontStyle:"italic",children:"details..."}),(0,l.jsxs)(n.U,{in:t,animateOpacity:!0,children:[(0,l.jsx)(s.x,{fontStyle:"italic",fontSize:"0.8em",children:e.name}),(0,l.jsx)(s.x,{whiteSpace:"pre",fontSize:"0.8em",fontStyle:"italic",pl:"0.5em",children:Object.entries(e.args).map((([e,t])=>`${e}: ${t instanceof Date?(0,i.Z)(t,"yyyy-MM-dd HH:mm:ss"):t}`)).join("\n")})]})]})}},14204:(e,t,a)=>{a.r(t),a.d(t,{DepositModal:()=>ge,DepositModalUi:()=>me,default:()=>fe});var r=a(66901),o=a(26468),n=a(19433),s=a(54326),i=a(2338),l=a(97217),c=a(59176),d=a(84626),p=a(70065),u=a(45071),h=a(99581),m=a(77528),g=a(25042),f=a(42383),x=a(76885),y=a(19299),w=a(97721),v=a(40109),b=a(2784),A=a(28145),j=a(17716),C=a(79929),T=a(10528),$=a(99),S=a(35834),E=a(95772),k=a(860),I=a(37330),P=a(42614),O=a(95522);var D=a(50986),q=a(28783),L=a(96596),N=a(11838),M=a(34367);var _=a(89536),z=a(18914),R=a(95042),B=a(55576);const H=["function deposit() payable","function withdraw(uint256 wad)"];var F=a(97737),W=a(49494),U=a(73557),Q=a(16060),Y=a(9875),K=a(97386);const X="SET_REQUIRE_APPROVAL",Z="SET_WRAP_AMOUNT",G="SET_INFINITE_APPROVAL",V="RETRY",J="RUN",ee="RESET",te="idle",ae="wrap",re="approve",oe="deposit",ne="failed",se="success",ie={[re]:re,[ae]:ae,[oe]:oe},le="wrapEth",ce="approveWETH",de="executeDeposit",pe={wrapAmount:(0,C.wei)(0),error:null,requireApproval:!1,infiniteApproval:!1},ue=(0,Y.C)({id:"DepositMachine",initial:te,predictableActionArguments:!0,context:pe,on:{[J]:{target:oe,actions:(0,K.f0)({wrapAmount:e=>pe.wrapAmount,error:e=>pe.error,requireApproval:e=>pe.requireApproval,infiniteApproval:e=>pe.infiniteApproval})},[X]:{actions:(0,K.f0)({requireApproval:(e,t)=>t.requireApproval})},[Z]:{actions:(0,K.f0)({wrapAmount:(e,t)=>t.wrapAmount})},[G]:{actions:(0,K.f0)({infiniteApproval:(e,t)=>t.infiniteApproval})}},states:{[te]:{on:{[J]:[{target:ae,cond:e=>e.wrapAmount.gt(0)},{target:re,cond:e=>e.requireApproval},{target:oe}]}},[ae]:{invoke:{src:le,onError:{target:ne,actions:(0,K.f0)({error:(e,t)=>({error:t.data,step:ie.wrap})})},onDone:[{target:re,cond:e=>e.requireApproval},{target:oe}]}},[re]:{invoke:{src:ce,onDone:{target:oe},onError:{target:ne,actions:(0,K.f0)({error:(e,t)=>({error:t.data,step:ie.approve})})}}},[oe]:{invoke:{src:de,onDone:{target:se},onError:{target:ne,actions:(0,K.f0)({error:(e,t)=>({error:t.data,step:ie.deposit})})}}},[ne]:{on:{[V]:[{target:re,cond:e=>e.error?.step===ie.approve,actions:(0,K.f0)({error:e=>null})},{target:ae,cond:e=>e.error?.step===ie.wrap,actions:(0,K.f0)({error:e=>null})},{target:oe,cond:e=>e.error?.step===ie.deposit,actions:(0,K.f0)({error:e=>null})}]}},[se]:{}}});var he=a(52322);const me=({collateralChange:e,isOpen:t,onClose:a,collateralType:p,setInfiniteApproval:h,onSubmit:m,state:f,availableCollateral:x,poolName:y})=>{const w=f.context.wrapAmount,v=f.context.infiniteApproval,b=f.context.requireApproval,A=f.context.error,j=f.matches(re)||f.matches(oe)||f.matches(ae),T="WETH"===p?.symbol,$={wrap:T?1:0,approve:T?2:1,deposit:T?3:2};return(0,he.jsxs)(r.u_,{size:"lg",isOpen:t,onClose:a,closeOnOverlayClick:!1,children:[(0,he.jsx)(o.Z,{}),(0,he.jsxs)(n.h,{bg:"black",color:"white","data-cy":"deposit-modal",children:[(0,he.jsx)(s.x,{children:"Complete this action"}),(0,he.jsx)(i.o,{}),(0,he.jsxs)(l.f,{children:[(0,he.jsx)(c.x,{mb:"2",children:"Please execute the following transactions:"}),T?(0,he.jsx)(g.P0,{step:$.wrap,title:"Wrap",subtitle:w.eq(0)?(0,he.jsxs)(c.x,{as:"div",children:[(0,he.jsx)(u.$,{value:e,suffix:` ${p?.symbol}`})," from balance will be used."]}):(0,he.jsxs)(c.x,{as:"div",children:["You must wrap additional ",(0,he.jsx)(u.$,{value:w,suffix:" ETH"})," before depositing."]}),status:{failed:A?.step===ae,disabled:"WETH"!==p?.symbol,success:w.eq(0)||f.matches(se),loading:f.matches(ae)&&!A}}):null,(0,he.jsx)(g.P0,{step:$.approve,title:`Approve ${p?.symbol} transfer`,status:{failed:A?.step===re,success:!b||f.matches(se),loading:f.matches(re)&&!A},checkboxLabel:`Approve unlimited ${p?.symbol} transfers to Synthetix.`,checkboxProps:{isChecked:v,onChange:e=>h(e.target.checked)}}),(0,he.jsx)(g.P0,{step:$.deposit,title:`Delegate ${p?.symbol}`,subtitle:(0,he.jsx)(he.Fragment,{children:f.matches(se)?(0,he.jsxs)(c.x,{children:[(0,he.jsx)(u.$,{value:e,suffix:` ${p?.symbol}`})," ","delegated to ",y,"."]}):(0,he.jsx)(he.Fragment,{children:x&&x.gt((0,C.wei)(0))?(0,he.jsx)(he.Fragment,{children:x.gte(e)?(0,he.jsxs)(c.x,{children:["This will delegate"," ",(0,he.jsx)(u.$,{value:e,suffix:` ${p?.symbol}`})," ","to ",y,"."]}):(0,he.jsxs)(he.Fragment,{children:[(0,he.jsxs)(c.x,{children:["This will delegate"," ",(0,he.jsx)(u.$,{value:x,suffix:` ${p?.symbol}`})," ","to ",y,"."]}),(0,he.jsxs)(c.x,{children:["An additional"," ",(0,he.jsx)(u.$,{value:e.sub(x),suffix:` ${p?.symbol}`})," ","will be deposited and delegated from your wallet."]})]})}):(0,he.jsxs)(c.x,{children:["This will deposit and delegate"," ",(0,he.jsx)(u.$,{value:e,suffix:` ${p?.symbol}`})," to"," ",y,"."]})})}),status:{failed:A?.step===oe,disabled:f.matches(se)&&b,success:f.matches(se),loading:f.matches(oe)&&!A}}),(0,he.jsx)(d.z,{isDisabled:j,onClick:m,width:"100%",my:"4","data-cy":"deposit-confirm-button",children:(()=>{switch(!0){case Boolean(A):return"Retry";case j:return"Processing...";case f.matches(se):return"Done";default:return"Start"}})()})]})]})]})},ge=({onClose:e,isOpen:t,collateralChange:a,currentCollateral:r,availableCollateral:o})=>{const n=(0,U.s0)(),{collateralSymbol:s,poolId:i,accountId:l}=(0,_.UO)(),c=(0,A.useQueryClient)(),{network:d}=(0,x.LN)(),{data:u}=(0,v.a)(),{data:g}=(0,q.b)(),{data:Y}=(0,M.X)(),{data:K}=(0,y.t)(s),te=(0,m.Yz)(d?.id,d?.preset)?Y?.USDC:K?.tokenAddress,ae=a.sub(o),{approve:re,requireApproval:ne}=(0,f.y)({contractAddress:te,amount:ae.gt(0)?(0,m.Yz)(d?.id,d?.preset)?W.vz(ae.toString(),6):ae.toBN():0,spender:(0,m.Yz)(d?.id,d?.preset)?g?.address:u?.address}),ie=(0,p.p)({isClosable:!0,duration:9e3}),pe=(0,b.useMemo)((()=>`${Math.floor(1e10*Math.random())}`),[]),{exec:ge,wethBalance:fe}=(()=>{const e=(0,x.mx)(),{data:t}=(0,y.t)("WETH"),{data:a,refetch:r}=(0,R.G)(),{data:o,refetch:n}=(0,B.mM)(t?.tokenAddress),{mutateAsync:s,isPending:i}=(0,A.useMutation)({mutationFn:async a=>{if(!t||!e)return;const r=new D.CH(t?.tokenAddress,H,e),o=await r.deposit({value:a.toBN()});await o.wait()}});return{exec:(0,b.useCallback)((async e=>{a&&(a.lt(e)||(await s(e),r(),n()))}),[a,s,r,n]),isLoading:i,wethBalance:o,ethBalance:a}})(),xe="WETH"===K?.symbol&&a.gt(fe||0)?a.sub(fe||0):(0,C.wei)(0),{data:ye}=(0,z.AI)(i),{exec:we}=(({accountId:e,newAccountId:t,poolId:a,collateralTypeAddress:r,collateralChange:o,currentCollateral:n,availableCollateral:s})=>{const[i,l]=(0,b.useReducer)(j.I,j.E),{data:c}=(0,v.a)(),{data:d}=(0,P.L)(),{gasSpeed:p}=(0,E.jU)(),{network:u}=(0,x.LN)(),h=(0,x.mx)(),m=(0,x.yL)(),g=(0,A.useMutation)({mutationFn:async()=>{if(u&&m&&h&&c&&a&&r&&s&&d&&!o.eq(0))try{l({type:"prompting"});const i=await h.getAddress(),g=e??t,f=e?void 0:c.populateTransaction["createAccount(uint128)"](T.O$.from(g)),x=s.gte(o)?void 0:c.populateTransaction.deposit(T.O$.from(g),r,o.sub(s).toBN()),y=c.populateTransaction.delegateCollateral(T.O$.from(g),T.O$.from(a),r,n.add(o).toBN(),(0,C.wei)(1).toBN()),w=Promise.all([f,x,y].filter(I._)),v=(0,O.$)(d,u?.isTestnet).then((e=>(0,O.x)(i,d,e))),[b,A,j]=await Promise.all([w,(0,S.o)({provider:m}),v]),E=j.concat(b),P=await(0,k.dI)(u,E,"useDeposit",c.interface),D=(0,$.F)({gasLimit:P.gasLimit,gasPrices:A,gasSpeed:p}),q=await h.sendTransaction({...P,...D});l({type:"pending",payload:{txnHash:q.hash}}),await q.wait(),l({type:"success"})}catch(e){throw l({type:"error",payload:{error:e}}),e}}});return{mutation:g,txnState:i,settle:()=>l({type:"settled"}),isLoading:g.isPending,exec:g.mutateAsync}})({accountId:l,newAccountId:pe,poolId:i,collateralTypeAddress:te,collateralChange:a,currentCollateral:r,availableCollateral:o||(0,C.wei)(0)}),{exec:ve}=(({accountId:e,newAccountId:t,poolId:a,collateralTypeAddress:r,collateralChange:o,currentCollateral:n,availableCollateral:s})=>{const[i,l]=(0,b.useReducer)(j.I,j.E),{data:c}=(0,v.a)(),{data:d}=(0,q.b)(),{data:p}=(0,N.Y)(),{data:u}=(0,M.X)(),{gasSpeed:h}=(0,E.jU)(),{network:g}=(0,x.LN)(),y=(0,x.mx)(),w=(0,x.yL)(),P=(0,A.useMutation)({mutationFn:async()=>{if(g&&w&&y&&c&&d&&a&&r&&s&&u?.sUSD&&!o.eq(0))try{l({type:"prompting"});const r=e??t,i=e?void 0:c.populateTransaction["createAccount(uint128)"](T.O$.from(r)),x=o.sub(s),v=x.gt(0)?(0,L.vz)(x.toString(),6):T.O$.from(0),b=x.gt(0)?(0,L.vz)(x.toString(),18):T.O$.from(0),A=u?.sUSD,j=v.gt(0)?d.populateTransaction.wrap(m.Ds,v,b):void 0,E=new D.CH(A,f.P,y),P=b.gt(0)?E.populateTransaction.approve(c.address,b):void 0,O=b.gt(0)?c.populateTransaction.deposit(T.O$.from(r),A,b):void 0,q=c.populateTransaction.delegateCollateral(T.O$.from(r),T.O$.from(a),A,n.toBN().add((0,L.vz)(o.toString(),18)).toString(),(0,C.wei)(1).toBN()),N=Promise.all([j,P,i,O,q].filter(I._)),[M,_]=await Promise.all([N,(0,S.o)({provider:w})]);p&&M.unshift(p);const z=await(0,k.dI)(g,M,"useDepositBaseAndromeda",c.interface),R=(0,$.F)({gasLimit:z.gasLimit,gasPrices:_,gasSpeed:h}),B=await y.sendTransaction({...z,...R});l({type:"pending",payload:{txnHash:B.hash}}),await B.wait(),l({type:"success"})}catch(e){throw l({type:"error",payload:{error:e}}),e}}});return{mutation:P,txnState:i,settle:()=>l({type:"settled"}),isLoading:P.isPending,exec:P.mutateAsync}})({accountId:l,newAccountId:pe,poolId:i,collateralTypeAddress:te,collateralChange:a,currentCollateral:r,availableCollateral:o||(0,C.wei)(0)}),be=(0,w.o)(u),[Ae,je]=(0,F.e)(ue,{services:{[le]:async()=>{try{await ge(Ae.context.wrapAmount)}catch(e){const t=be(e);throw t&&console.error(new Error(t.name),t),ie.closeAll(),ie({title:"Wrapping ETH failed",description:t?(0,he.jsx)(h.M,{contractError:t}):"Please try again.",status:"error"}),Error("Wrapping failed",{cause:e})}},[ce]:async()=>{try{ie({title:"Approve collateral for transfer",description:l?"The next transaction will delegate this collateral.":"The next transaction will create your account and and delegate this collateral",status:"info"}),await re(Boolean(Ae.context.infiniteApproval))}catch(e){const t=be(e);throw t&&console.error(new Error(t.name),t),ie.closeAll(),ie({title:"Approval failed",description:t?(0,he.jsx)(h.M,{contractError:t}):"Please try again.",status:"error"}),Error("Approve failed",{cause:e})}},[de]:async()=>{try{ie.closeAll(),ie({title:Boolean(l)?"Delegating your collateral":"Creating your account and depositing collateral",description:""}),(0,m.Yz)(d?.id,d?.preset)?await ve():await we(),await Promise.all([c.invalidateQueries({queryKey:[`${d?.id}-${d?.preset}`,"EthBalance"]}),c.invalidateQueries({queryKey:[`${d?.id}-${d?.preset}`,"LiquidityPosition"]}),"SNX"===K?.symbol?c.invalidateQueries({queryKey:[`${d?.id}-${d?.preset}`,"TransferableSynthetix"]}):Promise.resolve(),c.invalidateQueries({queryKey:[`${d?.id}-${d?.preset}`,"Allowance"]}),c.invalidateQueries({queryKey:[`${d?.id}-${d?.preset}`,"LiquidityPositions"]}),l?Promise.resolve():c.invalidateQueries({queryKey:[`${d?.id}-${d?.preset}`,"Accounts"]})]),ie.closeAll(),ie({title:"Success",description:"Your delegated collateral amount has been updated.",status:"success",duration:5e3})}catch(e){const t=be(e);throw t&&console.error(new Error(t.name),t),ie({title:"Could not complete delegating collateral",description:t?(0,he.jsx)(h.M,{contractError:t}):"Please try again.",status:"error"}),Error("Delegate collateral failed",{cause:e})}}}}),Ce=xe.toString(),Te=Ae.matches(se)||Ae.matches(oe);(0,b.useEffect)((()=>{Te||je(Z,{wrapAmount:(0,C.wei)(Ce)})}),[Ce,je,Te]),(0,b.useEffect)((()=>{je(X,{requireApproval:ne})}),[ne,je]);const $e=(0,U.TH)(),Se=(0,b.useCallback)((()=>{Ae.matches(se)&&i&&K?.symbol&&(je(ee),e(),n({pathname:(0,Q.Gn)("/positions/:collateralType/:poolId",{collateralType:K.symbol,poolId:i}),search:$e.search})),je(ee),e()}),[$e.search,je,e,Ae,i,K?.symbol,n]),Ee=(0,b.useCallback)((async()=>{Ae.matches(se)?Se():Ae.context.error?je(V):je(J)}),[Se,je,Ae]);return(0,he.jsx)(me,{collateralChange:a,isOpen:t,onClose:e,collateralType:K,state:Ae,setInfiniteApproval:e=>{je(G,{infiniteApproval:e})},onSubmit:Ee,poolName:ye?.name||"",availableCollateral:o||(0,C.wei)(0)})},fe=ge},25042:(e,t,a)=>{a.d(t,{nQ:()=>l,Tw:()=>c,P0:()=>f});var r=a(38035),o=a(81540),n=a(28535),s=a(21112),i=a(52322);const l=(0,s.I)({viewBox:"0 0 14 14",path:(0,i.jsx)("g",{fill:"currentColor",children:(0,i.jsx)("polygon",{points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})})}),c=(0,s.I)({d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"});function d({status:e,children:t}){switch(!0){case e.failed:return(0,i.jsx)(c,{color:"white"});case e.success:return(0,i.jsx)(l,{color:"white"});case e.loading:return(0,i.jsx)(o.$,{color:"white",width:6,height:6});case e.disabled:default:return(0,i.jsx)(n.xu,{__css:{display:"inline",fontWeight:"medium",textAlign:"center",fontSize:"md"},children:t})}}function p(e){switch(!0){case e.failed:return"red.700";case e.disabled:case e.loading:return"gray.700";case e.success:return"green.700";default:return"gray.700"}}function u({status:e,children:t}){return(0,i.jsx)(r.k,{width:10,height:10,minWidth:10,minHeight:10,justifyContent:"center",alignItems:"center",bg:p(e),rounded:"full",transitionProperty:"background",transitionDuration:"normal",children:(0,i.jsx)(d,{status:e,children:t})})}var h=a(78876),m=a(59176);function g({children:e,...t}){return(0,i.jsx)(r.k,{mt:"0.5",children:(0,i.jsx)(h.X,{size:"sm",...t,children:(0,i.jsx)(n.xu,{fontSize:"xs",opacity:"0.66",children:e})})})}function f({step:e,title:t,subtitle:a,checkboxLabel:o,checkboxProps:n,status:s,children:l}){return(0,i.jsxs)(r.k,{position:"relative",alignItems:"center",gap:4,rounded:"lg",mt:"4",p:"4",border:"2px solid",transitionProperty:"border-color",transitionDuration:"normal",borderColor:p(s),children:[(0,i.jsx)(u,{status:s,children:e}),(0,i.jsxs)(r.k,{direction:"column",children:[(0,i.jsx)(m.x,{"data-cy":`multistep-${e}`,children:t}),a?(0,i.jsx)(m.x,{as:"div",fontSize:"xs",opacity:"0.66",children:a}):null,o?(0,i.jsx)(g,{...n,children:o}):null,l]})]})}},97721:(e,t,a)=>{a.d(t,{o:()=>c});a(5875),a(50509),a(38728),a(64810),a(43419),a(32825),a(16093),a(77829),a(60253),a(49225),a(79941),a(57265),a(25888),a(15840),a(37610),a(13351);var r=a(79155),o=a(50986),n=a(10528),s=a(49494),i=a(2784),l=a(860);function c(e){return(0,i.useCallback)((t=>{if(e)try{const a=t?.error?.data?.data||t?.error?.error?.data;if(!a)return void console.error({error:t});const i=e.interface.format(r.pc.full),c=new o.CH(e.address,Array.from(new Set(i.concat(l.IN).concat(["error CannotSelfApprove(address addr)","error InvalidTransferRecipient(address addr)","error InvalidOwner(address addr)","error TokenDoesNotExist(uint256 id)","error TokenAlreadyMinted(uint256 id)"]))),e.signer||e.provider).interface.parseError(a),d=Object.fromEntries(Object.entries(c.args).filter((([e])=>`${parseInt(e)}`!==e)).map((([e,t])=>{if(t instanceof n.O$){const a=parseFloat(s.dF(t.toString()));return a>.001?[e,a]:t.toNumber()>new Date(2e3,1,1).getTime()/1e3&&t.toNumber()<new Date(2100,1,1).getTime()/1e3?[e,new Date(1e3*t.toNumber())]:[e,parseFloat(t.toString())]}return[e,t]})));return{data:a,name:c.name,signature:c.signature,args:d}}catch(e){return void console.error(e)}}),[e])}}}]);
//# sourceMappingURL=4204.37b58f8b.js.map
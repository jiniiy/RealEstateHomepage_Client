"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{3563:function(n,e,i){i.r(e),i.d(e,{Home:function(){return n1},default:function(){return n2}});var t,r,l,o,s,c,d,a,h,x,u,p,g,f,m,j,v,b,w,Z,k,y,z,C,S,P,E,H,M,I,R,_,A,L,B,T,G,N,U,F,O=i(7294),Y=i(835),q=i(326),D=i(594),Q=i(5209),V=i(3946),X=i(1383),J=i(2220),K=J.Z.header(t||(t=(0,X.Z)(["\n  position: fixed;\n  display: flex;\n\n  overflow: hidden;\n  width: 100%;\n  height: ",";\n  opacity: ",";\n  background-color: ",';\n  top: 0;\n  left: 0;\n  z-index: 999;\n\n  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;\n  /* background-color: #0c134f; */\n\n  font-size: 18px;\n'])),function(n){return n.open?"200px":"50px"},function(n){return n.open?1:.5},function(n){return n.open?"#0c134f":"none"}),W=J.Z.div(r||(r=(0,X.Z)(["\n  width: 100%;\n  padding-top: 5px;\n  padding-left: 30.5px;\n\n  /* background-color: red; */\n"]))),$=J.Z.div(l||(l=(0,X.Z)(["\n  display: flex;\n"]))),nn=J.Z.div(o||(o=(0,X.Z)(["\n  width: 100%;\n\n  div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n    font-size: 18px;\n\n    /* :hover {\n      color: lightyellow;\n      background-color: white;\n    } */\n  }\n  ul {\n    width: 100%;\n    height: 150px;\n\n    list-style-type: none;\n    font-size: 14px;\n\n    /* :hover {\n      color: lightyellow;\n      background-color: white;\n    } */\n  }\n\n  ul li {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    width: 100%;\n    line-height: 35px;\n  }\n"]))),ne=J.Z.div(s||(s=(0,X.Z)(["\n  float: right;\n  .div {\n    display: flex;\n    color: whitesmoke;\n  }\n"]))),ni=[{title:"사업안내",subtitle:[{label:"사업개요",link:"x"},{label:"브랜드스토리",link:"y"},{label:"",link:"z"}]},{title:"상품안내",subtitle:[{label:"상품 프리미엄",link:"x"},{label:"세제혜택",link:"y"},{label:"",link:"z"}]},{title:"입지조건",subtitle:[{label:"환경 프리미엄",link:"x"},{label:"교통환경",link:"y"},{label:"입지환경",link:"z"}]},{title:"사이버흥보관",subtitle:[{label:"유닛촬영컷",link:"y"},{label:"유닛보기",link:"z"},{label:"상품 CG",link:"l"}]},{title:"흥보센터",subtitle:[{label:"TVC&흥보영상",link:"x"},{label:"언론보도",link:"y"},{label:"",link:"z"}]},{title:"관심고객등록",subtitle:[{label:"관심고객등록",link:"x"},{label:"오시는길",link:"y"},{label:"",link:"z"}]}],nt=i(1664),nr=i.n(nt),nl=i(5893);function no(){var n=(0,O.useState)(!1),e=n[0],i=n[1];return(0,nl.jsx)(K,{open:e,children:(0,nl.jsxs)(Q.ZP,{container:!0,children:[(0,nl.jsx)(Q.ZP,{item:!0,xs:2,md:3,children:(0,nl.jsx)(nr(),{href:"/",children:(0,nl.jsx)("img",{src:"".concat("/RealEstateHomepage_Client","/img/LogoImg/logo.png"),width:100,height:50})})}),(0,nl.jsx)(Q.ZP,{item:!0,xs:1,md:2,children:(0,nl.jsx)(W,{children:(0,nl.jsx)(V.Z,{className:"svg_icons",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:function(){i(function(n){return!n})},children:e?(0,nl.jsx)(D.Z,{}):(0,nl.jsx)(q.Z,{})})})}),(0,nl.jsx)(Q.ZP,{item:!0,xs:8,md:8,children:(0,nl.jsx)($,{children:ni.map(function(n,e){var i=n.title,t=n.subtitle;return(0,nl.jsxs)(nn,{children:[(0,nl.jsx)("div",{children:i}),(0,nl.jsx)("ul",{children:t.map(function(n,e){var i=n.label,t=n.link;return(0,nl.jsx)("li",{children:(0,nl.jsx)(nr(),{href:t,children:i})},e)})})]},e)})})}),(0,nl.jsx)(Q.ZP,{item:!0,xs:1,md:1,children:(0,nl.jsxs)(ne,{children:[(0,nl.jsx)("div",{children:"박과장"}),(0,nl.jsx)("div",{children:"1644-3777"})]})})]})})}var ns=J.Z.div(c||(c=(0,X.Z)(["\n  width: 100%;\n  height: 1050px;\n  background-color: #0c134f;\n"])));function nc(){return(0,nl.jsx)(ns,{children:(0,nl.jsx)("video",{width:"100%",autoPlay:!0,muted:!0,loop:!0,children:(0,nl.jsx)("source",{src:"".concat("/RealEstateHomepage_Client","/HomeAdvertising.mp4"),type:"video/mp4"})})})}var nd=i(3321),na=[{label:"firstShow",imgPath:"/img/Carousel/slide1.jpg",index:0},{label:"secondShow",imgPath:"/img/Carousel/slide2.jpg",index:1},{label:"thirdShow",imgPath:"/img/Carousel/slide3.jpg",index:2}];function nh(){var n=(0,O.useState)(0),e=n[0],i=n[1];return(0,O.useEffect)(function(){var n=setTimeout(function(){i(function(n){return(n+1)%na.length})},3e3);return function(){clearTimeout(n)}},[e]),(0,nl.jsx)("div",{style:{right:0,top:"100px",position:"absolute",height:"750px",width:"700px",overflow:"hidden"},children:(0,nl.jsx)("div",{style:{display:"flex",transform:"translateX(".concat(-(700*e),"px)"),transition:"0.6s ease"},children:na.map(function(n,e){return(0,nl.jsx)("div",{children:(0,nl.jsx)("img",{width:"700px",height:"750px",src:"".concat("/RealEstateHomepage_Client").concat(n.imgPath),alt:n.label})},n.index)})})})}var nx=J.Z.div(d||(d=(0,X.Z)(["\n  display: inline-flex;\n  width: 100%;\n  height: 1250px;\n  position: relative;\n  background-color: #0c134f;\n\n  opacity: ",";\n  overflow: hidden;\n  transition: 2s ease;\n\n  /* :hover {\n    .home-text {\n      top: 0;\n      color: white;\n      width: 50%;\n      height: 100px;\n      transition: 0.3s ease;\n      z-index: 2;\n    } */\n  /* background-color: #1d267d; */\n  /* color: white;\n    transition: 0.3s ease;\n    z-index: 3; */\n  /* } */\n"])),function(n){return n.visible?1:0}),nu=J.Z.div(a||(a=(0,X.Z)(["\n  /* @media (max-width : 394px) {\n \n} */\n\n  position: relative;\n  /* visibility: hidden; */\n  color: white;\n  width: 100%;\n  top: 25px;\n  left: 300px;\n  height: 100px;\n  z-index: 2;\n  /* :hover {\n    \n  } */\n"]))),np=J.Z.p(h||(h=(0,X.Z)(["\n  color: ",";\n  font-size: ","px;\n  margin: ",";\n"])),function(n){var e=n.color;return null!=e?e:"white"},function(n){var e=n.fontSize;return null!=e?e:16},function(n){var e=n.margin;return null!=e?e:0}),ng=J.Z.div(x||(x=(0,X.Z)(["\n  position: absolute;\n  top: 225px;\n  left: 0;\n  width: 100%;\n  height: 1050px;\n  z-index: 1;\n"]))),nf=J.Z.div(u||(u=(0,X.Z)(["\n  .img {\n    background-size: cover;\n\n    vertical-align: top;\n    border: none;\n  }\n"]))),nm=J.Z.div(p||(p=(0,X.Z)(["\n  width: 50%;\n  z-index: 3;\n"]))),nj=J.Z.div(g||(g=(0,X.Z)(["\n  position: relative;\n  /* visibility: hidden; */\n  color: white;\n  width: 30%;\n  height: 200px;\n  top: 930px;\n  right: 130px;\n\n  background-color: gray;\n\n  z-index: 4;\n  /* :hover {\n    \n  } */\n"])));function nv(){return(0,nl.jsx)(nd.Z,{variant:"contained",disableElevation:!0,children:"More about"})}var nb=function(){var n=(0,O.useRef)(null),e=(0,O.useState)(!1),i=e[0],t=e[1];return(0,O.useEffect)(function(){window.addEventListener("scroll",function e(){var i,r=window.scrollY,l=window.innerHeight,o=null===(i=n.current)||void 0===i?void 0:i.offsetTop;o&&r+l>o&&(t(!0),window.removeEventListener("scroll",e))})},[i]),(0,nl.jsxs)(nx,{ref:n,visible:i,children:[(0,nl.jsxs)(nu,{children:[(0,nl.jsx)(np,{fontSize:24,color:"white",margin:"0",children:"당신의 지식산업센터,"}),(0,nl.jsx)(np,{fontSize:24,color:"white",margin:"20px 0 0 0",children:"선택의 기준도 달라져야 합니다!"}),(0,nl.jsx)(np,{fontSize:24,color:"white",margin:"0",children:"디테일의 차이가 만드는 메가 프리미엄"}),(0,nl.jsx)(np,{fontSize:24,color:"white",margin:"20px 0 0 0",children:"양주 옥정 메가시티"})]}),(0,nl.jsx)(ng,{children:(0,nl.jsx)(nf,{children:(0,nl.jsx)("img",{src:"".concat("/RealEstateHomepage_Client","/img/BackImg/HomeMain02BackImg.png"),width:1800,height:1050})})}),(0,nl.jsx)(nm,{children:(0,nl.jsx)(nh,{})}),(0,nl.jsxs)(nj,{children:[(0,nl.jsx)(np,{fontSize:24,color:"white",margin:"0",children:"디테일의 차이가 프리미엄의 차이!"}),(0,nl.jsx)(np,{fontSize:24,color:"white",margin:"20px 0 0 0",children:"MEGA PREMIUM"}),(0,nl.jsx)(np,{fontSize:24,color:"white",margin:"0",children:"오직 당신을 위한 공간,"}),(0,nl.jsx)(np,{fontSize:24,color:"white",margin:"20px 0 0 0",children:"오직 당신을 위한 비즈니스"}),(0,nl.jsx)(np,{fontSize:24,color:"white",margin:"20px 0 0 0",children:"오직 당신을 위한 미래"}),(0,nl.jsx)(nv,{})]})]})},nw={cardContent1:[{icon:"아이콘"},{label:"전호실 문앞까지 진입가능한 드라이브 & 도어투도어 시스템"},{image:"이미지예시"}],cardContent2:[{icon:"아이콘"},{label:"화물 하역의 편의성을 높여줄 화물전용 로딩데크 제공"},{image:"이미지예시"}],cardContent3:[{icon:"아이콘"},{label:"여유로운 주차가 가능한 넓은 확장형 주차공간"},{image:"이미지예시"}],cardContent4:[{icon:"아이콘"},{label:"대형차량들까지 고려한 7M 광폭 램프폭 설계"},{image:"이미지예시"}]},nZ=J.Z.div(f||(f=(0,X.Z)(["\n  width: 100%;\n  height: 1050px;\n  background-color: #0c134f;\n"]))),nk=J.Z.div(m||(m=(0,X.Z)(["\n  /* position: relative; */\n  /* visibility: hidden; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  height: 200px;\n  padding-top: 50px;\n\n  color: white;\n\n  /* :hover {\n    \n  } */\n"]))),ny=J.Z.p(j||(j=(0,X.Z)(["\n  color: ",";\n  font-size: ","px;\n  margin: ",";\n\n  .span {\n    color: ",";\n    font-size: ","px;\n    margin: ",";\n  }\n"])),function(n){var e=n.color;return null!=e?e:"white"},function(n){var e=n.fontSize;return null!=e?e:16},function(n){var e=n.margin;return null!=e?e:0},function(n){var e=n.color;return null!=e?e:"white"},function(n){var e=n.fontSize;return null!=e?e:16},function(n){var e=n.margin;return null!=e?e:0}),nz=J.Z.div(v||(v=(0,X.Z)(["\n  display: flex;\n\n  width: 100%;\n  height: 500px;\n\n  padding-top: 50px;\n\n  /* div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n    font-size: 18px;\n\n    :hover {\n      color: lightyellow;\n      background-color: white;\n    }\n  } */\n  ul {\n    width: 100%;\n    height: 150px;\n\n    list-style-type: none;\n    font-size: 24px;\n\n    /* :hover {\n      color: lightyellow;\n      background-color: white;\n    } */\n  }\n\n  ul li {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    width: 100%;\n    padding: 0 100px;\n\n    line-height: 35px;\n  }\n"])));function nC(){var n=Object.values(nw);return(0,nl.jsxs)(nZ,{children:[(0,nl.jsx)(nk,{children:(0,nl.jsxs)(ny,{fontSize:38,color:"white",margin:"0",children:["특화설계",(0,nl.jsx)("span",{children:"메가시티만의 가치를 더한 맞춤설계"})]})}),(0,nl.jsx)(Q.ZP,{container:!0,children:n.map(function(n,e){return(0,nl.jsx)(Q.ZP,{item:!0,xs:3,md:3,children:(0,nl.jsx)(nz,{children:(0,nl.jsxs)("ul",{children:[(0,nl.jsx)("li",{children:n[0].icon}),(0,nl.jsx)("br",{}),(0,nl.jsx)("li",{children:n[1].label}),(0,nl.jsx)("br",{}),(0,nl.jsx)("li",{children:n[2].image})]})})},e)})})]})}var nS=J.Z.div(b||(b=(0,X.Z)(["\n  width: 100%;\n  height: 1050px;\n  background-color: #0c134f;\n"]))),nP=J.Z.div(w||(w=(0,X.Z)(["\n  position: relative;\n  width: 100%;\n  height: 800px;\n  top: 400px;\n  left: 0%;\n\n  z-index: 4;\n  background-color: gray;\n"]))),nE=J.Z.div(Z||(Z=(0,X.Z)(["\n  position: relative;\n  display: flex;\n\n  width: 100%;\n  height: 650px;\n\n  top: -50px;\n\n  left: 100px;\n\n  color: white;\n\n  /* background-color: green; */\n\n  /* :hover {\n    \n  } */\n"]))),nH=J.Z.div(k||(k=(0,X.Z)(["\n  position: absolute;\n  width: 500px;\n  height: 500px;\n\n  top: -200px;\n\n  padding: 125px 20px;\n  z-index: 5;\n\n  background-color: pink;\n"]))),nM=J.Z.p(y||(y=(0,X.Z)(["\n  color: ",";\n  font-size: ","px;\n  margin: ",";\n"])),function(n){var e=n.color;return null!=e?e:"white"},function(n){var e=n.fontSize;return null!=e?e:16},function(n){var e=n.margin;return null!=e?e:0}),nI=J.Z.div(z||(z=(0,X.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  top: -525px;\n\n  background-color: red;\n  z-index: 6;\n"]))),nR=J.Z.div(C||(C=(0,X.Z)(["\n  background-color: yellow;\n\n  .img {\n    z-index: 999;\n\n    background-size: contain;\n\n    vertical-align: top;\n    border: none;\n  }\n"])));function n_(){return(0,nl.jsx)(nS,{children:(0,nl.jsxs)(Q.ZP,{container:!0,children:[(0,nl.jsx)(nP,{}),(0,nl.jsx)(Q.ZP,{item:!0,xs:4,md:4,children:(0,nl.jsx)(nE,{children:(0,nl.jsxs)(nH,{children:[(0,nl.jsx)(nM,{fontSize:18,color:"white",margin:"0",children:"MEGACITY"}),(0,nl.jsx)("br",{}),(0,nl.jsx)(nM,{fontSize:42,color:"white",margin:"0",children:"디테일의 차이가"}),(0,nl.jsx)("br",{}),(0,nl.jsx)(nM,{fontSize:42,color:"white",margin:"0",children:"프리미엄의 차이"}),(0,nl.jsx)("br",{}),(0,nl.jsx)(nM,{fontSize:24,color:"white",margin:"0",children:"메가시티에는 고객감동을 위한 디테일이 있습니다."}),(0,nl.jsx)("br",{})]})})}),(0,nl.jsx)(Q.ZP,{item:!0,xs:8,md:8,children:(0,nl.jsx)(nI,{children:(0,nl.jsx)(nR,{children:(0,nl.jsx)("img",{src:"".concat("/RealEstateHomepage_Client","/img/HomeMain04/HomeMain04Img.png"),width:1400,height:850})})})})]})})}var nA=J.Z.div(S||(S=(0,X.Z)(["\n  width: 100%;\n  height: 1050px;\n  background-color: #0c134f;\n"]))),nL=J.Z.div(P||(P=(0,X.Z)(["\n  width: 500px;\n  height: 400px;\n\n  background-color: green;\n"]))),nB=J.Z.div(E||(E=(0,X.Z)(["\n  /* position: relative; */\n  /* visibility: hidden; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  height: 1000px;\n  padding-top: 100px;\n\n  color: white;\n\n  .span {\n    display: inline;\n  }\n\n  /* background-color: red; */\n\n  /* :hover {\n    \n  } */\n"]))),nT=J.Z.p(H||(H=(0,X.Z)(["\n  color: ",";\n  font-size: ","px;\n  margin: ",";\n"])),function(n){var e=n.color;return null!=e?e:"white"},function(n){var e=n.fontSize;return null!=e?e:16},function(n){var e=n.margin;return null!=e?e:0});function nG(){return(0,O.useEffect)(function(){var n=document.createElement("script");n.async=!1,n.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b5c3db2ce9e3597ec7e7151541a0d5b9&autoload=false",document.head.appendChild(n),n.addEventListener("load",function(){window.kakao.maps.load(function(){var n=document.getElementById("map"),e={center:new window.kakao.maps.LatLng(37.824135,127.0936999),level:3},i=new window.kakao.maps.Map(n,e),t=new window.kakao.maps.LatLng(37.824135,127.0936999);new window.kakao.maps.Marker({position:t}).setMap(i)})})},[]),(0,nl.jsxs)(nA,{children:[(0,nl.jsx)("div",{children:(0,nl.jsxs)(nB,{children:[(0,nl.jsx)("span",{children:"Location"}),(0,nl.jsx)("br",{}),(0,nl.jsx)("span",{children:"오시는길"})]})}),(0,nl.jsxs)(Q.ZP,{container:!0,children:[(0,nl.jsxs)(Q.ZP,{item:!0,xs:6,md:6,children:[(0,nl.jsx)(nL,{id:"map"}),(0,nl.jsx)(nB,{children:(0,nl.jsx)(nT,{fontSize:18,color:"white",margin:"0",children:"흥보관"})})]}),(0,nl.jsx)(Q.ZP,{item:!0,xs:6,md:6,children:(0,nl.jsx)(nB,{children:(0,nl.jsx)(nT,{fontSize:18,color:"white",margin:"0",children:"현장"})})})]})]})}var nN=i(5247),nU=i(3454),nF=J.Z.div(M||(M=(0,X.Z)(["\n  width: 100%;\n  height: 1050px;\n  /* background-color: #0c134f; */\n"]))),nO=J.Z.div(I||(I=(0,X.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: red;\n\n  .img {\n    /* background-size: cover;\n\n    vertical-align: top;\n    border: none; */\n\n    /* 상대경로 안먹힘. \n    background: url(","/img/BackImg/HomeMain06BackImg.png)\n      center / cover no-repeat; */\n  }\n"])),nU.env.PUBLIC_URL),nY=J.Z.div(R||(R=(0,X.Z)(['\n  position: absolute;\n  width: 100%;\n\n  form {\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    width: 100%;\n    font-size: 16px;\n\n    input {\n      width: 100%;\n      height: 35px;\n      padding: 7px;\n      outline: none;\n      border-radius: 5px;\n      border: 1px solid rgb(220, 220, 220);\n\n      &:focus {\n        border: 2px solid rgba(0, 206, 158, 1);\n      }\n    }\n\n    label {\n      margin-top: 3rem;\n    }\n\n    span {\n      font-size: 12px;\n      padding: 3px;\n      color: red;\n    }\n\n    input[type="submit"] {\n      margin-top: 2rem;\n      cursor: pointer;\n      background-color: rgb(249, 105, 14);\n      color: white;\n      border: none;\n    }\n  }\n']))),nq=J.Z.div(_||(_=(0,X.Z)(["\n  position: left;\n  display: flex;\n  align-items: center;\n\n  width: 100%;\n\n  background-color: green;\n\n  input {\n  }\n\n  label {\n    position: relative;\n    width: 100%;\n    height: 35px;\n\n    padding: 0, 50px;\n\n    /* outline: none;\n    border-radius: 5px;\n    border: 1px solid rgb(220, 220, 220); */\n  }\n"]))),nD=J.Z.div(A||(A=(0,X.Z)(["\n  ul li {\n    list-style: none;\n  }\n"])));function nQ(){var n=O.useRef(null),e=(0,O.useState)(""),i=e[0],t=e[1],r=(0,O.useState)(""),l=r[0],o=r[1],s=(0,O.useState)(!0),c=s[0],d=s[1],a=(0,O.useState)(!1),h=a[0],x=a[1],u=(0,O.useState)(!1),p=u[0],g=u[1];return(0,nl.jsx)(nF,{children:(0,nl.jsxs)(nO,{children:[(0,nl.jsx)("img",{src:"".concat("/RealEstateHomepage_Client","/img/BackImg/HomeMain06BackImg.png"),width:1800,height:1050}),(0,nl.jsx)(nY,{children:(0,nl.jsxs)("form",{ref:n,onSubmit:function(n){if(n.preventDefault(),i)x(!1),console.log("name2",i),console.log("errorName2",h);else{x(!0),console.log("name1",i),console.log("errorName1",h);return}if(l)g(!1),console.log("phone2",l),console.log("errorPhone2",h);else{g(!0),console.log("phone",l),console.log("errorPhone1",h);return}if(!c){alert("개인정보 취급에 동의해주세요!");return}nN.ZP.sendForm("service_66yooy9","template_1p7sg5f",n.currentTarget,"M9TQmuGUq3rdTGUP9").then(function(n){console.log(n.text),alert("메세지가 전송되었습니다!")},function(n){console.log(n.text),alert("오류가 발생했습니다. 다시시도해주세요.")})},children:[(0,nl.jsx)("span",{children:"REGISTRATION"}),(0,nl.jsx)("span",{children:"관심고객등록"}),(0,nl.jsx)("label",{children:"이름"}),(0,nl.jsx)("input",{type:"text",name:"user_name",value:i,onChange:function(n){t(n.target.value),n.target.value?x(!1):x(!0)},required:!0}),(0,nl.jsx)("span",{style:{display:h?"block":"none"},children:"이름은 필수항목입니다. 입력해주세요"}),(0,nl.jsx)("label",{children:"연락처 "}),(0,nl.jsx)("input",{type:"tel",name:"user_phone",maxLength:11,value:l,onChange:function(n){o(n.target.value),n.target.value?g(!1):g(!0)},pattern:"[0-9]{11}",required:!0}),(0,nl.jsx)("span",{style:{display:p?"block":"none"},children:"연락처는 필수항목입니다. 입력해주세요"}),(0,nl.jsx)("label",{children:"Email"}),(0,nl.jsx)("input",{type:"email",name:"user_email"}),(0,nl.jsx)("label",{children:"Message"}),(0,nl.jsx)("input",{type:"text",name:"message"}),(0,nl.jsx)("div",{children:(0,nl.jsx)("input",{type:"submit",value:"Send"})}),(0,nl.jsxs)(nq,{children:[(0,nl.jsx)("input",{type:"checkbox",id:"rgs",name:"",value:"20",checked:c,onChange:function(n){d(n.target.checked)}}),(0,nl.jsxs)("label",{children:[(0,nl.jsx)(nr(),{href:"/",children:"개인정보 취급방침"}),"에 동의합니다."]})]}),(0,nl.jsx)(nD,{children:(0,nl.jsxs)("ul",{children:[(0,nl.jsx)("li",{children:"※ 고객님의 개인정보는 개인정보보호법 및 정보통신망법에 따라 안전하게 보관되며 분양 완료 후 자동 파기됩니다."}),(0,nl.jsx)("li",{children:"※ 고객님의 소중한 정보는 분양 이외의 목적으로 사용되지 않습니다."}),(0,nl.jsx)("li",{children:"※ 관심고객으로 등록된 고객님의 정보는 분양정보를 안내하는데 사용합니다."})]})})]})})]})})}J.Z.div(L||(L=(0,X.Z)(["\n  /* position: relative; */\n  /* visibility: hidden; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  height: 1000px;\n  padding-top: 100px;\n\n  color: white;\n\n  /* background-color: red; */\n\n  /* :hover {\n    \n  } */\n"]))),J.Z.p(B||(B=(0,X.Z)(["\n  color: ",";\n  font-size: ","px;\n  margin: ",";\n"])),function(n){var e=n.color;return null!=e?e:"white"},function(n){var e=n.fontSize;return null!=e?e:16},function(n){var e=n.margin;return null!=e?e:0});var nV={footerContent1:[{filed:"시행수탁사"},{subFiled:"신한자산신탁(주)"}],footerContent2:[{filed:"시행위탁사"},{subFiled:"(주)나르샤인"}],footerContent3:[{filed:"시공사"},{subFiled:"태산종합건설(주)"}],footerContent4:[{icon:"아이콘"},{licontent:"※ 본 사이트의 설계, 개요, 일러스트, CG, 이미지, 지도 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다르거나 변경될 수 있습니다.\n\n    ※ CG 이미지의 주변 여건, 도로, 건물 등은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으니 현장을 확인하시기 바랍니다.\n\n    ※ 조감도, 단지배치도, 평면설계도, 건물외관, 색채조경, 주변건물, 도로위치 등은 실제와 차이가 있을 수 있으며 인\xb7허가 과정 및 시공과정에서 변경될 수 있습니다.\n\n    ※ 본 사이트의 개발 및 교통 계획에 대한 사항은 관계기관의 사정에 따라 취소 및 변경 될 수 있으며, 이는 당사와 무관함을 알려드립니다.\n\n    ※ 본 사이트의 내용은 제작 과정상 오탈자가 있을 수 있으므로 계약시 확인하시기 바랍니다."},{licontent:"온라인대행 : (주)유어비즈 서울 송파구 송파대로 167 문정역 테라타워A동 1222호  |  대표이사: 양희춘  |  사업자등록증 : 220-87-31452"},{licontent:"Copyrightⓒ2022 MEGACITY . All Right Reserved."},{licontent:"Creative & Marketing by YOURBIZ",link:"x"}],footerContent5:[{icon:"아이콘"}]},nX=J.Z.footer(T||(T=(0,X.Z)(['\n  width: 100%;\n  height: 400px;\n\n  font-family: Haettenschweiler, "Arial Narrow Bold", sans-serif;\n  /* background-color: orange; */\n']))),nJ=J.Z.div(G||(G=(0,X.Z)(["\n  width: 100%;\n  ul {\n    width: 100%;\n    border-bottom: solid 1px #ffffff26;\n  }\n\n  ul li {\n    width: 100%;\n    height: 100px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    font-size: 16px;\n    /* background-color: pink; */\n  }\n\n  ul li span {\n    padding: 50px 20px;\n    font-size: 18px;\n  }\n"]))),nK=J.Z.div(N||(N=(0,X.Z)(["\n  width: 100%;\n  height: 300px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding-bottom: 45px;\n\n  img {\n    width: 200px;\n    height: 50px;\n\n    /* background-color: red; */\n  }\n"]))),nW=J.Z.div(U||(U=(0,X.Z)(["\n  width: 100%;\n  height: 250px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding-top: 50px;\n  font-size: 12px;\n  /* background-color: green; */\n\n  div {\n    line-height: 30px;\n  }\n\n  a: link {\n    /* text-decoration: underline; */\n    /* font-weight: bold; */\n    font-size: 14px;\n    font-weight: bold;\n  }\n"]))),n$=J.Z.div(F||(F=(0,X.Z)(["\n  width: 100%;\n  height: 250px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));function n0(){return Object.values(nV),(0,nl.jsxs)(nX,{children:[(0,nl.jsxs)(Q.ZP,{container:!0,children:[(0,nl.jsx)(Q.ZP,{item:!0,xs:4,md:4,children:(0,nl.jsx)(nJ,{children:(0,nl.jsx)("ul",{children:(0,nl.jsxs)("li",{children:["시행수탁사",(0,nl.jsx)("span",{children:"신한자산신탁(주)"})]})})})}),(0,nl.jsx)(Q.ZP,{item:!0,xs:4,md:4,children:(0,nl.jsx)(nJ,{children:(0,nl.jsx)("ul",{children:(0,nl.jsxs)("li",{children:["시행위탁사",(0,nl.jsx)("span",{children:"(주)나르샤인"})]})})})}),(0,nl.jsx)(Q.ZP,{item:!0,xs:4,md:4,children:(0,nl.jsx)(nJ,{children:(0,nl.jsx)("ul",{children:(0,nl.jsxs)("li",{children:["시행수탁사",(0,nl.jsx)("span",{children:"태산종합건설(주)"})]})})})})]}),(0,nl.jsxs)(Q.ZP,{container:!0,children:[(0,nl.jsx)(Q.ZP,{item:!0,xs:3,md:3,children:(0,nl.jsx)(nK,{children:(0,nl.jsx)("img",{src:"".concat("/RealEstateHomepage_Client","/img/FooterLogo/FooterLogo.png")})})}),(0,nl.jsx)(Q.ZP,{item:!0,xs:7,md:7,children:(0,nl.jsx)(nW,{children:(0,nl.jsxs)("div",{children:[(0,nl.jsxs)("div",{children:["※ 본 사이트의 설계, 개요, 일러스트, CG, 이미지, 지도 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다르거나 변경될 수 있습니다.",(0,nl.jsx)("br",{})," ※ CG 이미지의 주변 여건, 도로, 건물 등은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으니 현장을 확인하시기 바랍니다.",(0,nl.jsx)("br",{})," ※ 조감도, 단지배치도, 평면설계도, 건물외관, 색채조경, 주변건물, 도로위치 등은 실제와 차이가 있을 수 있으며 인\xb7허가 과정 및 시공과정에서 변경될 수 있습니다. ",(0,nl.jsx)("br",{}),"※ 본 사이트의 개발 및 교통 계획에 대한 사항은 관계기관의 사정에 따라 취소 및 변경 될 수 있으며, 이는 당사와 무관함을 알려드립니다.",(0,nl.jsx)("br",{})," ※ 본 사이트의 내용은 제작 과정상 오탈자가 있을 수 있으므로 계약시 확인하시기 바랍니다."]}),(0,nl.jsx)("div",{children:"온라인대행 : (주)유어비즈 서울 송파구 송파대로 167 문정역 테라타워A동 1222호  |  대표이사: 양희춘  |  사업자등록증 : 220-87-31452"}),(0,nl.jsx)("div",{children:"Copyrightⓒ2022 MEGACITY . All Right Reserved."}),(0,nl.jsxs)("div",{children:["Creative & Marketing by ",(0,nl.jsx)(nr(),{href:"/",children:"YOURBIZ"})]})]})})}),(0,nl.jsx)(Q.ZP,{item:!0,xs:2,md:2,children:(0,nl.jsx)(n$,{children:(0,nl.jsx)(nd.Z,{variant:"outlined",color:"warning",href:"/",children:"TOP"})})})]})]})}function n1(){return(0,nl.jsxs)(Y.HomeStyle,{children:[(0,nl.jsx)(no,{}),(0,nl.jsx)(nc,{}),(0,nl.jsx)(nb,{}),(0,nl.jsx)(nC,{}),(0,nl.jsx)(n_,{}),(0,nl.jsx)(nG,{}),(0,nl.jsx)(nQ,{}),(0,nl.jsx)(n0,{})]})}var n2=n1},835:function(n,e,i){i.r(e),i.d(e,{HomeStyle:function(){return c},default:function(){return d}});var t,r=i(1383);i(7294);var l=i(2220),o=i(3563),s=i(5893),c=l.Z.div(t||(t=(0,r.Z)(['\n  /* div { */\n  margin: 0;\n  padding: 0;\n  font-family: Arial, Helvetica, "Arial Narrow Bold", sans-serif;\n  background-color: #0c134f;\n  /* } */\n'])));function d(){return(0,s.jsx)(c,{children:(0,s.jsx)(o.default,{})})}}}]);
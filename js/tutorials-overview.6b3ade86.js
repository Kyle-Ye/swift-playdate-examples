/*!
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2021 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
 */
"use strict";(self["webpackChunkswift_docc_render"]=self["webpackChunkswift_docc_render"]||[]).push([[843],{7214:function(t,e,n){n.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("SVGIcon",{staticClass:"download-icon",attrs:{viewBox:"0 0 14 14",themeId:"download"}},[e("path",{attrs:{d:"M7 0.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5zM7 1.5c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5c3.038 0 5.5-2.462 5.5-5.5s-2.462-5.5-5.5-5.5z"}}),e("path",{attrs:{d:"M7.51 2.964l-0.001 5.431 1.308-2.041 0.842 0.539-2.664 4.162-2.633-4.164 0.845-0.534 1.303 2.059 0.001-5.452z"}})])},s=[],o=n(3453),a={name:"DownloadIcon",components:{SVGIcon:o.Z}},r=a,l=n(1001),c=(0,l.Z)(r,i,s,!1,null,null,null),u=c.exports},2573:function(t,e,n){n.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"nav-title-content",attrs:{to:t.to}},[e("span",{staticClass:"title"},[t._t("default")],2),e("span",{staticClass:"subhead"},[t._v(" "),t._t("subhead")],2)])},s=[],o={name:"NavTitleContainer",props:{to:{type:[String,Object],required:!0}}},a=o,r=n(1001),l=(0,r.Z)(a,i,s,!1,null,"854b4dd6",null),c=l.exports},9633:function(t,e,n){n.r(e),n.d(e,{default:function(){return nn}});var i,s,o=function(){var t=this,e=t._self._c;return t.topicData?e("Overview",t._b({key:t.topicKey},"Overview",t.overviewProps,!1)):t._e()},a=[],r=n(8841),l=n(1789),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tutorials-overview"},[t.isTargetIDE?t._e():e("Nav",{staticClass:"theme-dark",attrs:{sections:t.otherSections}},[t._v(" "+t._s(t.title)+" ")]),e("main",{staticClass:"main",attrs:{id:"main",tabindex:"0"}},[e("div",{staticClass:"radial-gradient"},[t._t("above-hero"),t.heroSection?e("Hero",{attrs:{action:t.heroSection.action,content:t.heroSection.content,estimatedTime:t.metadata.estimatedTime,image:t.heroSection.image,title:t.heroSection.title}}):t._e()],2),t.otherSections.length>0?e("LearningPath",{attrs:{sections:t.otherSections}}):t._e()],1)],1)},u=[],m=n(4030),d={state:{activeTutorialLink:null,activeVolume:null,references:{}},reset(){this.state.activeTutorialLink=null,this.state.activeVolume=null,this.state.references={}},setActiveSidebarLink(t){this.state.activeTutorialLink=t},setActiveVolume(t){this.state.activeVolume=t},setReferences(t){this.state.references=t}},p=function(){var t=this,e=t._self._c;return e("NavBase",{scopedSlots:t._u([{key:"menu-items",fn:function(){return[e("NavMenuItemBase",{staticClass:"in-page-navigation"},[e("TutorialsNavigation",{attrs:{sections:t.sections}})],1),t._t("menu-items")]},proxy:!0}],null,!0)},[e("NavTitleContainer",{attrs:{to:t.buildUrl(t.$route.path,t.$route.query)},scopedSlots:t._u([{key:"default",fn:function(){return[t._t("default")]},proxy:!0},{key:"subhead",fn:function(){return[t._v(t._s(t.$tc("tutorials.title",2)))]},proxy:!0}],null,!0)})],1)},h=[],v=n(3975),f=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"tutorials-navigation"},[e("TutorialsNavigationList",t._l(t.sections,(function(n,i){return e("li",{key:`${n.name}_${i}`,class:t.sectionClasses(n)},[t.isVolume(n)?e(t.componentForVolume(n),t._b({tag:"component",on:{"select-menu":t.onSelectMenu,"deselect-menu":t.onDeselectMenu}},"component",t.propsForVolume(n),!1),t._l(n.chapters,(function(n){return e("li",{key:n.name},[e("TutorialsNavigationLink",[t._v(" "+t._s(n.name)+" ")])],1)})),0):t.isResources(n)?e("TutorialsNavigationLink",[t._v(" "+t._s(t.$t("sections.resources"))+" ")]):t._e()],1)})),0)],1)},_=[],g=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"tutorials-navigation-link",class:{active:t.active},attrs:{to:t.fragment},nativeOn:{click:function(e){return t.handleFocusAndScroll(t.fragment.hash)}}},[t._t("default")],2)},C=[],y=n(3208),T=n(3704),b={name:"TutorialsNavigationLink",mixins:[T.Z],inject:{store:{default:()=>({state:{}})}},data(){return{state:this.store.state}},computed:{active:({state:{activeTutorialLink:t},text:e})=>e===t,fragment:({text:t,$route:e})=>({hash:(0,y.HA)(t),query:e.query}),text:({$slots:{default:[{text:t}]}})=>t.trim()}},S=b,k=n(1001),V=(0,k.Z)(S,g,C,!1,null,"e9f9b59c",null),x=V.exports,Z=function(){var t=this,e=t._self._c;return e("ol",{staticClass:"tutorials-navigation-list"},[t._t("default")],2)},I=[],N={name:"TutorialsNavigationList"},A=N,w=(0,k.Z)(A,Z,I,!1,null,"4e0180fa",null),q=w.exports,$=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tutorials-navigation-menu",class:{collapsed:t.collapsed}},[e("button",{staticClass:"toggle",attrs:{"aria-expanded":t.collapsed?"false":"true",type:"button"},on:{click:function(e){return e.stopPropagation(),t.onClick.apply(null,arguments)}}},[e("span",{staticClass:"text"},[t._v(t._s(t.title))]),e("InlineCloseIcon",{staticClass:"toggle-icon icon-inline"})],1),e("transition-expand",[t.collapsed?t._e():e("div",{staticClass:"tutorials-navigation-menu-content"},[e("TutorialsNavigationList",{attrs:{"aria-label":t.$t("tutorials.nav.chapters")}},[t._t("default")],2)],1)])],1)},L=[],M=function(){var t=this,e=t._self._c;return e("SVGIcon",{staticClass:"inline-close-icon",attrs:{viewBox:"0 0 14 14",themeId:"inline-close"}},[e("path",{attrs:{d:"M11.91 1l1.090 1.090-4.917 4.915 4.906 4.905-1.090 1.090-4.906-4.905-4.892 4.894-1.090-1.090 4.892-4.894-4.903-4.904 1.090-1.090 4.903 4.904z"}})])},D=[],F=n(3453),R={name:"InlineCloseIcon",components:{SVGIcon:F.Z}},O=R,j=(0,k.Z)(O,M,D,!1,null,null,null),B=j.exports,G={name:"TransitionExpand",functional:!0,render(t,e){const n={props:{name:"expand"},on:{afterEnter(t){t.style.height="auto"},enter(t){const{width:e}=getComputedStyle(t);t.style.width=e,t.style.position="absolute",t.style.visibility="hidden",t.style.height="auto";const{height:n}=getComputedStyle(t);t.style.width=null,t.style.position=null,t.style.visibility=null,t.style.height=0,getComputedStyle(t).height,requestAnimationFrame((()=>{t.style.height=n}))},leave(t){const{height:e}=getComputedStyle(t);t.style.height=e,getComputedStyle(t).height,requestAnimationFrame((()=>{t.style.height=0}))}}};return t("transition",n,e.children)}},H=G,z=(0,k.Z)(H,i,s,!1,null,null,null),P=z.exports,E={name:"TutorialsNavigationMenu",components:{InlineCloseIcon:B,TransitionExpand:P,TutorialsNavigationList:q},props:{collapsed:{type:Boolean,default:!0},title:{type:String,required:!0}},methods:{onClick(){this.collapsed?this.$emit("select-menu",this.title):this.$emit("deselect-menu")}}},U=E,K=(0,k.Z)(U,$,L,!1,null,"489416f8",null),Q=K.exports;const J={resources:"resources",volume:"volume"};var W={name:"TutorialsNavigation",components:{TutorialsNavigationLink:x,TutorialsNavigationList:q,TutorialsNavigationMenu:Q},constants:{SectionKind:J},inject:{store:{default:()=>({setActiveVolume(){}})}},data(){return{state:this.store.state}},props:{sections:{type:Array,required:!0}},computed:{activeVolume:({state:t})=>t.activeVolume},methods:{sectionClasses(t){return{volume:this.isVolume(t),"volume--named":this.isNamedVolume(t),resource:this.isResources(t)}},componentForVolume:({name:t})=>t?Q:q,isResources:({kind:t})=>t===J.resources,isVolume:({kind:t})=>t===J.volume,activateFirstNamedVolume(){const{isNamedVolume:t,sections:e}=this,n=e.find(t);n&&this.store.setActiveVolume(n.name)},isNamedVolume(t){return this.isVolume(t)&&t.name},onDeselectMenu(){this.store.setActiveVolume(null)},onSelectMenu(t){this.store.setActiveVolume(t)},propsForVolume({name:t}){const{activeVolume:e}=this;return t?{collapsed:t!==e,title:t}:{"aria-label":"Chapters"}}},created(){this.activateFirstNamedVolume()}},X=W,Y=(0,k.Z)(X,f,_,!1,null,"79093ed6",null),tt=Y.exports,et=n(2573),nt=n(2449),it=n(3822);const st={resources:"resources",volume:"volume"};var ot={name:"Nav",constants:{SectionKind:st},components:{NavMenuItemBase:it.Z,NavTitleContainer:et.Z,TutorialsNavigation:tt,NavBase:v.Z},props:{sections:{type:Array,require:!0}},methods:{buildUrl:nt.Q2}},at=ot,rt=(0,k.Z)(at,p,h,!1,null,"54bcce6d",null),lt=rt.exports,ct=n(2974),ut=function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero"},[e("div",{staticClass:"copy-container"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t.content?e("ContentNode",{attrs:{content:t.content}}):t._e(),t.estimatedTime?e("p",{staticClass:"meta"},[e("TimerIcon"),e("span",{staticClass:"meta-content"},[e("strong",{staticClass:"time"},[t._v(t._s(t.estimatedTime))]),e("span",[t._v(" "+t._s(t.$t("tutorials.estimated-time")))])])],1):t._e(),t.action?e("CallToActionButton",{attrs:{action:t.action,"aria-label":t.$t("tutorials.overriding-title",{newTitle:t.action.overridingTitle,title:t.title}),isDark:""}}):t._e()],1),t.image?e("Asset",{attrs:{identifier:t.image}}):t._e()],1)},mt=[],dt=n(7337),pt=n(7605),ht=n(8843),vt=function(){var t=this,e=t._self._c;return e("SVGIcon",{staticClass:"timer-icon",attrs:{viewBox:"0 0 14 14",themeId:"timer"}},[e("path",{attrs:{d:"M7 0.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5c-3.59 0-6.5-2.91-6.5-6.5v0c0-3.59 2.91-6.5 6.5-6.5v0zM7 2c-2.761 0-5 2.239-5 5s2.239 5 5 5c2.761 0 5-2.239 5-5v0c0-2.761-2.239-5-5-5v0z"}}),e("path",{attrs:{d:"M6.51 3.51h1.5v3.5h-1.5v-3.5z"}}),e("path",{attrs:{d:"M6.51 7.010h4v1.5h-4v-1.5z"}})])},ft=[],_t={name:"TimerIcon",components:{SVGIcon:F.Z}},gt=_t,Ct=(0,k.Z)(gt,vt,ft,!1,null,null,null),yt=Ct.exports,Tt={name:"Hero",components:{Asset:dt.Z,CallToActionButton:pt.Z,ContentNode:ht["default"],TimerIcon:yt},props:{action:{type:Object,required:!1},content:{type:Array,required:!1},estimatedTime:{type:String,required:!1},image:{type:String,required:!1},title:{type:String,required:!0}}},bt=Tt,St=(0,k.Z)(bt,ut,mt,!1,null,"383dab71",null),kt=St.exports,Vt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"learning-path",class:t.classes},[e("div",{staticClass:"main-container"},[t.isTargetIDE?t._e():e("div",{staticClass:"secondary-content-container"},[e("TutorialsNavigation",{attrs:{sections:t.sections,"aria-label":t.$t("sections.on-this-page")}})],1),e("div",{staticClass:"primary-content-container"},[e("div",{staticClass:"content-sections-container"},[t._l(t.volumes,(function(n,i){return e("Volume",t._b({key:`volume_${i}`,staticClass:"content-section"},"Volume",t.propsFor(n),!1))})),t._l(t.otherSections,(function(n,i){return e(t.componentFor(n),t._b({key:`resource_${i}`,tag:"component",staticClass:"content-section"},"component",t.propsFor(n),!1))}))],2)])])])},xt=[],Zt=function(){var t=this,e=t._self._c;return e("section",{staticClass:"resources",attrs:{id:"resources",tabindex:"-1"}},[e("VolumeName",{attrs:{name:t.$t("sections.resources"),content:t.content}}),e("TileGroup",{attrs:{tiles:t.tiles}})],1)},It=[],Nt=n(9146);const At={topOneThird:"-30% 0% -70% 0%",center:"-50% 0% -50% 0%"};var wt={mixins:[Nt["default"]],computed:{intersectionRoot(){return null},intersectionRootMargin(){return At.center}},methods:{onIntersect(t){if(!t.isIntersecting)return;const e=this.onIntersectViewport;e?e():console.warn("onIntersectViewportCenter not implemented")}}},qt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume-name"},[t.image?e("Asset",{staticClass:"image",attrs:{identifier:t.image,"aria-hidden":"true"}}):t._e(),e("h2",{staticClass:"name"},[t._v(" "+t._s(t.name)+" ")]),t.content?e("ContentNode",{attrs:{content:t.content}}):t._e()],1)},$t=[],Lt={name:"VolumeName",components:{ContentNode:ht["default"],Asset:dt.Z},props:{image:{type:String,required:!1},content:{type:Array,required:!1},name:{type:String,required:!1}}},Mt=Lt,Dt=(0,k.Z)(Mt,qt,$t,!1,null,"569db166",null),Ft=Dt.exports,Rt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tile-group",class:t.countClass},t._l(t.tiles,(function(n){return e("Tile",t._b({key:n.title},"Tile",t.propsFor(n),!1))})),1)},Ot=[],jt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tile"},[t.identifier?e("div",{staticClass:"icon"},[e(t.iconComponent,{tag:"component"})],1):t._e(),e("div",{staticClass:"title"},[t._v(t._s(t.title))]),e("ContentNode",{attrs:{content:t.content}}),t.action?e("DestinationDataProvider",{attrs:{destination:t.action},scopedSlots:t._u([{key:"default",fn:function({url:n,title:i}){return[e("Reference",{staticClass:"link",attrs:{url:n}},[t._v(" "+t._s(i)+" "),e("InlineChevronRightIcon",{staticClass:"link-icon icon-inline"})],1)]}}],null,!1,2081312588)}):t._e()],1)},Bt=[],Gt=n(7775),Ht=function(){var t=this,e=t._self._c;return e("SVGIcon",{staticClass:"document-icon",attrs:{viewBox:"0 0 14 14",themeId:"document"}},[e("path",{attrs:{d:"M11.2,5.3,8,2l-.1-.1H2.8V12.1h8.5V6.3l-.1-1ZM8,3.2l2,2.1H8Zm2.4,8H3.6V2.8H7V6.3h3.4Z"}})])},zt=[],Pt={name:"DocumentIcon",components:{SVGIcon:F.Z}},Et=Pt,Ut=(0,k.Z)(Et,Ht,zt,!1,null,"3a80772b",null),Kt=Ut.exports,Qt=n(7214),Jt=function(){var t=this,e=t._self._c;return e("SVGIcon",{staticClass:"forum-icon",attrs:{viewBox:"0 0 14 14",themeId:"forum"}},[e("path",{attrs:{d:"M13 1v9h-7l-1.5 3-1.5-3h-2v-9zM12 2h-10v7h1.616l0.884 1.763 0.88-1.763h6.62z"}}),e("path",{attrs:{d:"M3 4h8.001v1h-8.001v-1z"}}),e("path",{attrs:{d:"M3 6h8.001v1h-8.001v-1z"}})])},Wt=[],Xt={name:"ForumIcon",components:{SVGIcon:F.Z}},Yt=Xt,te=(0,k.Z)(Yt,Jt,Wt,!1,null,null,null),ee=te.exports,ne=n(6698),ie=n(245),se=n(8785),oe=n(1295);const ae={documentation:"documentation",downloads:"downloads",featured:"featured",forums:"forums",sampleCode:"sampleCode",videos:"videos"};var re={name:"Tile",constants:{Identifier:ae},components:{DestinationDataProvider:oe.Z,InlineChevronRightIcon:se.Z,ContentNode:ht["default"],CurlyBracketsIcon:Gt.Z,DocumentIcon:Kt,DownloadIcon:Qt.Z,ForumIcon:ee,PlayIcon:ne.Z,Reference:ie.Z},props:{action:{type:Object,required:!1},content:{type:Array,required:!0},identifier:{type:String,required:!1},title:{type:String,require:!0}},computed:{iconComponent:({identifier:t})=>({[ae.documentation]:Kt,[ae.downloads]:Qt.Z,[ae.forums]:ee,[ae.sampleCode]:Gt.Z,[ae.videos]:ne.Z}[t])}},le=re,ce=(0,k.Z)(le,jt,Bt,!1,null,"7a77cf2a",null),ue=ce.exports,me={name:"TileGroup",components:{Tile:ue},props:{tiles:{type:Array,required:!0}},computed:{countClass:({tiles:t})=>`count-${t.length}`},methods:{propsFor:({action:t,content:e,identifier:n,title:i})=>({action:t,content:e,identifier:n,title:i})}},de=me,pe=(0,k.Z)(de,Rt,Ot,!1,null,"4cacce0a",null),he=pe.exports,ve={name:"Resources",mixins:[wt],inject:{store:{default:()=>({setActiveSidebarLink(){},setActiveVolume(){}})}},components:{VolumeName:Ft,TileGroup:he},computed:{intersectionRootMargin:()=>At.topOneThird},props:{content:{type:Array,required:!1},tiles:{type:Array,required:!0}},methods:{onIntersectViewport(){this.store.setActiveSidebarLink("Resources"),this.store.setActiveVolume(null)}}},fe=ve,_e=(0,k.Z)(fe,Zt,It,!1,null,"7f8022c1",null),ge=_e.exports,Ce=function(){var t=this,e=t._self._c;return e("section",{staticClass:"volume"},[t.name?e("VolumeName",t._b({},"VolumeName",{name:t.name,image:t.image,content:t.content},!1)):t._e(),t._l(t.chapters,(function(n,i){return e("Chapter",{key:n.name,staticClass:"tile",attrs:{content:n.content,image:n.image,name:n.name,number:i+1,topics:t.lookupTopics(n.tutorials),volumeHasName:!!t.name}})}))],2)},ye=[],Te=function(){var t=this,e=t._self._c;return e("section",{staticClass:"chapter",attrs:{id:t.anchor,tabindex:"-1"}},[e("div",{staticClass:"info"},[e("Asset",{attrs:{identifier:t.image,"aria-hidden":"true"}}),e("div",{staticClass:"intro"},[e(t.volumeHasName?"h3":"h2",{tag:"component",staticClass:"name",attrs:{"aria-label":`${t.name} - ${t.$tc("tutorials.sections.chapter",{number:t.number})}`}},[e("span",{staticClass:"eyebrow",attrs:{"aria-hidden":"true"}},[t._v(" "+t._s(t.$t("tutorials.sections.chapter",{number:t.number}))+" ")]),e("span",{staticClass:"name-text",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.name))])]),t.content?e("ContentNode",{attrs:{content:t.content}}):t._e()],1)],1),e("TopicList",{attrs:{topics:t.topics}})],1)},be=[],Se=function(){var t=this,e=t._self._c;return e("ol",{staticClass:"topic-list"},t._l(t.topics,(function(n){return e("li",{key:n.url,staticClass:"topic",class:[t.kindClassFor(n),{"no-time-estimate":!n.estimatedTime}]},[e("div",{staticClass:"topic-icon"},[e(t.iconComponent(n),{tag:"component"})],1),e("router-link",{staticClass:"container",attrs:{to:t.buildUrl(n.url,t.$route.query),"aria-label":t.ariaLabelFor(n)}},[e("div",{staticClass:"link"},[t._v(t._s(n.title))]),n.estimatedTime?e("div",{staticClass:"time"},[e("TimerIcon"),e("span",{staticClass:"time-label"},[t._v(t._s(n.estimatedTime))])],1):t._e()])],1)})),0)},ke=[],Ve=n(5692),xe=n(8638);const Ze={article:"article",tutorial:"project"},Ie={article:"article",tutorial:"tutorial"},Ne={[Ze.article]:"Article",[Ze.tutorial]:"Tutorial"};var Ae={name:"ChapterTopicList",components:{TimerIcon:yt},constants:{TopicKind:Ze,TopicKindClass:Ie,TopicKindIconLabel:Ne},props:{topics:{type:Array,required:!0}},methods:{buildUrl:nt.Q2,iconComponent:({kind:t})=>({[Ze.article]:Ve.Z,[Ze.tutorial]:xe.Z}[t]),kindClassFor:({kind:t})=>({[Ze.article]:Ie.article,[Ze.tutorial]:Ie.tutorial}[t]),formatTime(t){return t.replace("min",` ${this.$t("tutorials.time.minutes.full")}`).replace("hrs",` ${this.$t("tutorials.time.hours.full")}`)},ariaLabelFor(t){const{title:e,estimatedTime:n,kind:i}=t,s=[e,Ne[i]];return n&&s.push(`${this.formatTime(n)} ${this.$t("tutorials.estimated-time")}`),s.join(" - ")}}},we=Ae,qe=(0,k.Z)(we,Se,ke,!1,null,"45ec37c5",null),$e=qe.exports,Le={name:"Chapter",mixins:[wt],inject:{store:{default:()=>({setActiveSidebarLink(){},setActiveVolume(){}})}},components:{Asset:dt.Z,ContentNode:ht["default"],TopicList:$e},props:{content:{type:Array,required:!1},image:{type:String,required:!0},name:{type:String,required:!0},number:{type:Number,required:!0},topics:{type:Array,required:!0},volumeHasName:{type:Boolean,default:!1}},computed:{anchor:({name:t})=>(0,y.HA)(t),intersectionRootMargin:()=>At.topOneThird},methods:{onIntersectViewport(){this.store.setActiveSidebarLink(this.name),this.volumeHasName||this.store.setActiveVolume(null)}}},Me=Le,De=(0,k.Z)(Me,Te,be,!1,null,"7468bc5e",null),Fe=De.exports,Re={name:"Volume",mixins:[wt],components:{VolumeName:Ft,Chapter:Fe},computed:{references:({store:t})=>t.state.references,intersectionRootMargin:()=>At.topOneThird},inject:{store:{default:()=>({setActiveVolume(){},state:{references:{}}})}},props:{chapters:{type:Array,required:!0},content:{type:Array,required:!1},image:{type:String,required:!1},name:{type:String,required:!1}},methods:{lookupTopics(t){return t.reduce(((t,e)=>t.concat(this.references[e]||[])),[])},onIntersectViewport(){this.name&&this.store.setActiveVolume(this.name)}}},Oe=Re,je=(0,k.Z)(Oe,Ce,ye,!1,null,"540dbf10",null),Be=je.exports;const Ge={resources:"resources",volume:"volume"};var He={name:"LearningPath",components:{Resources:ge,TutorialsNavigation:tt,Volume:Be},constants:{SectionKind:Ge},inject:{isTargetIDE:{default:!1}},props:{sections:{type:Array,required:!0,validator:t=>t.every((t=>Object.prototype.hasOwnProperty.call(Ge,t.kind)))}},computed:{classes:({isTargetIDE:t})=>({ide:t}),partitionedSections:({sections:t})=>t.reduce((([t,e],n)=>n.kind===Ge.volume?[t.concat(n),e]:[t,e.concat(n)]),[[],[]]),volumes:({partitionedSections:t})=>t[0],otherSections:({partitionedSections:t})=>t[1]},methods:{componentFor:({kind:t})=>({[Ge.resources]:ge,[Ge.volume]:Be}[t]),propsFor:({chapters:t,content:e,image:n,kind:i,name:s,tiles:o})=>({[Ge.resources]:{content:e,tiles:o},[Ge.volume]:{chapters:t,content:e,image:n,name:s}}[i])}},ze=He,Pe=(0,k.Z)(ze,Vt,xt,!1,null,"69a72bbc",null),Ee=Pe.exports;const Ue={hero:"hero",resources:"resources",volume:"volume"};var Ke={name:"TutorialsOverview",components:{Hero:kt,LearningPath:Ee,Nav:lt},mixins:[ct.Z],constants:{SectionKind:Ue},inject:{isTargetIDE:{default:!1}},props:{metadata:{type:Object,default:()=>({})},references:{type:Object,default:()=>({})},sections:{type:Array,default:()=>[],validator:t=>t.every((t=>Object.prototype.hasOwnProperty.call(Ue,t.kind)))}},computed:{pageTitle:({title:t})=>[t,"Tutorials"].filter(Boolean).join(" "),pageDescription:({heroSection:t,extractFirstParagraphText:e})=>t?e(t.content):null,partitionedSections:({sections:t})=>t.reduce((([t,e],n)=>n.kind===Ue.hero?[t.concat(n),e]:[t,e.concat(n)]),[[],[]]),heroSections:({partitionedSections:t})=>t[0],otherSections:({partitionedSections:t})=>t[1],heroSection:({heroSections:t})=>t[0],store:()=>d,title:({metadata:{category:t=""}})=>t},provide(){return{store:this.store}},created(){m["default"].setAvailableLocales(this.metadata.availableLocales),this.store.reset(),this.store.setReferences(this.references)},watch:{references(t){this.store.setReferences(t)},"metadata.availableLocales":function(t){m["default"].setAvailableLocales(t)}}},Qe=Ke,Je=(0,k.Z)(Qe,c,u,!1,null,"40c62c57",null),We=Je.exports,Xe=n(5184),Ye={name:"TutorialsOverview",components:{Overview:We},mixins:[l.Z,Xe.Z],data(){return{topicData:null}},computed:{overviewProps:({topicData:{metadata:t,references:e,sections:n}})=>({metadata:t,references:e,sections:n}),topicKey:({$route:t,topicData:e})=>[t.path,e.identifier.interfaceLanguage].join()},beforeRouteEnter(t,e,n){t.meta.skipFetchingData?n((t=>t.newContentMounted())):(0,r.Ek)(t,e,n).then((t=>n((e=>{e.topicData=t})))).catch(n)},beforeRouteUpdate(t,e,n){(0,r.Us)(t,e)?(0,r.Ek)(t,e,n).then((t=>{this.topicData=t,n()})).catch(n):n()},mounted(){this.$bridge.on("contentUpdate",this.handleContentUpdateFromBridge)},beforeDestroy(){this.$bridge.off("contentUpdate",this.handleContentUpdateFromBridge)},watch:{topicData(){this.$nextTick((()=>{this.newContentMounted()}))}}},tn=Ye,en=(0,k.Z)(tn,o,a,!1,null,null,null),nn=en.exports}}]);
import{a as W,i as st,o as nt,B as ot,T as at,O as it,A as lt}from"./tabulator_esm-af4ec1da.js";const Y={value:[],callback:function(t){},set(t){this.value=t,this.callback(t)},get(){return this.value},onChange:function(t){this.callback=t}},n={_list:[],_track:0,_prevTrack:null,get list(){return this._list},get track(){return this._track},set list(t){this._list=t,this.callbackList(t)},set track(t){this._prevTrack=this.track,this._track=t,this.callbackTrack({track:this.getTrackData(),prevTrack:this.getPrevTrackData()})},prevTrack(){const t=this._track-1;t>=0&&U(t)},nextTrack(){const t=this._track+1;t<this._list.length&&U(t)},getTrackData(){const t=this._list[this._track];return typeof t>"u"?{}:t},getPrevTrackData(){const t=this._list[this._prevTrack];return typeof t>"u"?{}:t},wipe(){this.callbackWipe(this.getTrackData()),this.callbackList([]),this._list=[],this._track=0},onWipe:function(t){this.callbackWipe=t},onListChange:function(t){this.callbackList=t},onTrackChange:function(t){this.callbackTrack=t},callbackWipe:function(t){},callbackList:function(t){},callbackTrack:function(t){}},p={value:!1,callback:function(t){},set(t){this.value=t,this.callback(t)},get(){return this.value},onChange:function(t){this.callback=t}},r={value:!1,selected:[],callback:function(t){},set(t){this.value=t,this.callback(t)},get(){return this.value},selectSize(){return this.selected.length},onChange:function(t){this.callback=t}},S={state:!1,trigger(){this.state=!0,setTimeout(()=>{this.state=!1},1)}},A={row:null},C={state:null};function U(t){n.track=t}let u,q;function rt(){u=new YT.Player("youtube",{playerVars:{autoplay:1},events:{onReady:()=>{u.h.className="players"}}}),u.addEventListener("onStateChange",t=>{t.data===-1&&(p.set(!1),$("#youtube-pseudoplayer").css("display","block"),$("#ytp-time-current").text("0:00"),$("#ytp-pause").css("opacity",0),$("#ytp-seekbar").val(0)),t.data===0&&D(),t.data===1&&$("#ytp-pause").css("opacity",0),t.data===2&&$("#ytp-pause").css("opacity",1)}),u.addEventListener("onError",t=>{(t.data===150||t.data===101)&&D()})}function ct(t){u.loadVideoById(t);const e=n.getTrackData(),s=parseInt(e.fullTime/1e3,10);let o=!1;$("#ytp-thumbicon").attr("src",`https://img.youtube.com/vi/${t}/maxresdefault.jpg`),$("#ytp-name").text(`${e.name}`),$("#ytp-artist-album").text(`${e.artist}${e.album!==""?` - ${e.album}`:""}`),$("#ytp-time-total").text(e.time),$("#ytp-seekbar").attr("max",s),q=setInterval(()=>{let a;u.getPlayerState()===1&&!o?a=u.getCurrentTime():a=$("#ytp-seekbar").val(),a=Math.round(Number(a));const i=Math.floor(a/60),l=a-i*60;($("#ytp-seekbar").val()!=a||o)&&($("#ytp-time-current").text(`${i}:${l<10?`0${l}`:l}`),$("#ytp-seekbar").val(a))},200),document.getElementById("ytp-seekbar").addEventListener("pointermove",()=>o=!0),document.getElementById("ytp-seekbar").addEventListener("change",a=>{u.seekTo(a.target.value,!0),o=!1})}function ut(){u.getPlayerState()===1&&u.pauseVideo(),u.getPlayerState()===2&&u.playVideo()}function dt(){u.pauseVideo(),$("#youtube-pseudoplayer").css("display","none"),clearInterval(q)}function ft(){return u.getCurrentTime()}function gt(){u.seekTo(0,!0)}let g;function mt(){g=SC.Widget("soundcloud"),Ut()}function pt(t){g.load(t,{auto_play:!1,buying:!1,sharing:!1,download:!1,show_playcount:!1,show_comments:!1,visual:!0,callback:()=>{$("#soundcloud").css("display","block"),g.play(),g.setVolume(80),p.set(!1)}}),g.bind(SC.Widget.Events.FINISH,()=>D())}function ht(){g.pause(),$("#soundcloud").css("display","none")}async function yt(){let t;return g.getPosition(s=>t=parseInt(s/1e3,10)),await e(10),t;async function e(s){return new Promise(o=>setTimeout(o,s))}}function wt(){g.seekTo(0)}let K,bt;function kt(t){$("#spotify").css("display","block"),$("#spotify").css("opacity","0"),K.loadUri(`spotify:track:${t}`)}function vt(){return bt}function $t(){K.seek(-1)}const h=new W("#playlist-table",{data:null,placeholder:"Lista de reproduccion vacia.",height:"100%",layout:"fitColumns",headerVisible:!1,autoResize:!0,movableRows:!0,columns:[{field:"move",hozAlign:"center",widthGrow:.1,resizable:!1,headerSort:!1,rowHandle:!0},{title:"Nombre",field:"name",hozAlign:"center",resizable:!1},{title:"Artista",field:"artist",hozAlign:"center",resizable:!1},{field:"delete",hozAlign:"center",widthGrow:.1,resizable:!1}]});function j(){if(setTimeout(()=>{document.getElementById("playlist-modal").setAttribute("show","")},0),n.list.length!==0){const t=h.getRowFromPosition(n.track+1);h.scrollToRow(t,"center")}}function I(){S.state||$("#playlist-modal").removeAttr("show")}n.onListChange(t=>h.replaceData(t));h.on("cellClick",(t,e)=>{const o=e.getRow().getData();if(e.getField()==="delete"){const a=n.list.filter(i=>i.id!==o.id);if(o.id!==n.getTrackData().id){const i=n.getTrackData().id;let l=null;S.trigger(),n.list=a,n.list.map((c,f)=>{c.id===i&&(l=f)}),n.track=l}else{const i=n.track;N(!1),S.trigger(),$("#songsTable [playing='true']").removeAttr("playing"),n.list=a,i===0?n.track=i:n.track=i-1,y(n.getTrackData())}}});let J;h.on("rowMoving",t=>{J=t.getPosition(!0)-1});let H;h.on("rowMoved",t=>{H=t.getPosition(!0)-1;const e=[],s=n.getTrackData().id;let o=null;n.list.forEach(a=>e.push(a)),Lt(e,J,H),n.list=e,n.list.map((a,i)=>{a.id===s&&(o=i)}),n.track=o});document.addEventListener("contextmenu",t=>{if(t.target.id==="control-playlist"||t.target.id==="preview-playlist"){const e=n.getTrackData().id;t.preventDefault();const s=n.list.filter(o=>o.id===e);n.list=s,n.track=0,$("#control-playlist").attr("clean",""),$("#preview-playlist").attr("clean",""),setTimeout(()=>{$("#control-playlist").removeAttr("clean"),$("#preview-playlist").removeAttr("clean")},400)}});document.addEventListener("click",t=>{const e=t.target,{id:s}=e;!!Tt($("#playlist-modal").find(e)[0])&&s!=="control-prev"&&s!=="control-next"&&s!=="control-playlist"&&s!=="control-shuffle"&&I()});function Tt(t){return typeof t>"u"}function Lt(t,e,s){if(s>=t.length)for(var o=s-t.length+1;o--;)t.push(void 0);return t.splice(s,0,t.splice(e,1)[0]),t}const z="SOUNDCLOUD",M="SPOTIFY",R="YOUTUBE";let P;function X(){rt(),mt(),zt(),Mt()}function _(){document.querySelector("body").setAttribute("modal-opened",""),document.getElementById("player-modal").setAttribute("show","")}async function St(){document.documentElement.requestFullscreen();try{C.state=await navigator.wakeLock.request("screen")}catch{}$("#lock-screen").css("display","block"),setTimeout(()=>{$("#lock-screen").css("opacity",1)},0)}function At(){const t=document.querySelector("#lock-screen input");Number(t.value)===100?($("#lock-screen").attr("unlock",""),setTimeout(()=>{$("#lock-screen").css("opacity",0),setTimeout(()=>{$("#lock-screen").css("display","none"),$("#lock-screen").removeAttr("unlock"),document.exitFullscreen(),C.state!==null&&C.state.release().then(()=>{C.state=null}),t.value=0},500)},500)):t.value=0}function Q(){document.querySelector("body").removeAttribute("modal-opened"),document.getElementById("player-modal").removeAttribute("show")}function y(t){N(!1),P=t.source,p.set(!0),setTimeout(()=>{switch(P){case z:pt(t.link);break;case M:kt(t.link);break;case R:ct(t.link);break}},30)}async function Et(){if(!p.get()){let t;switch(P){case z:t=await yt();break;case M:t=vt();break;case R:t=ft();break}if(t>5)switch(P){case z:wt();break;case M:$t();break;case R:gt();break}else{const e=n.track;n.prevTrack();const s=n.track;e!==s&&y(n.getTrackData())}}}function N(t=!0){t&&(I(),n.wipe()),ht(),dt(),p.set(!1)}function D(){if(!p.get()){const t=n.track;n.nextTrack();const e=n.track;t!==e&&!p.get()&&y(n.getTrackData())}}function Ct(){typeof $("#playlist-modal").attr("show")>"u"?j():I()}function Pt(){const t=n.getTrackData(),e=[];if(n.list.length!==0){n.list.forEach(i=>e.push(i));const a=s().filter(i=>i.id!==t.id);a.unshift(t),n.list=a,n.track=0}else{d.rowManager.activeRows.forEach(i=>{e.push(i.getData())});const a=s();n.list=a,n.track=0,y(n.getTrackData())}function s(){let o=e;for(let a=0;a<20;a++)o=o.sort(()=>Math.random()-.5);return o}}function Dt(t=!0){const{row:e}=A,s=e.getCells()[0].getElement();t?$(s).trigger("click"):tt()}function It(){const{row:t}=A,e=n.list;e.push(t.getData()),n.list=e,n.track=n.track,n.list.length===1&&(n.track=0,y(t.getData())),_()}function _t(){r.set(!0)}function Ot(){if(n.list.length!==0){const t=[];n.list.forEach(e=>{const s=r.selected.find(a=>a.id===e.id);if(s){const a=d.searchRows("id","=",s.id)[0];$(a.getElement()).trigger("click")}const o=r.selected.filter(a=>a.id!==e.id);r.selected=o}),n.list.forEach(e=>t.push(e)),r.selected.forEach(e=>t.push(e)),n.list=t,n.track=n.track,F(),S.trigger(),j()}else tt()}function Bt(){d.getRows().forEach(t=>{const e=t.getData();typeof r.selected.find(o=>o.id===e.id)>"u"&&$(t.getElement()).trigger("click")})}function F(){r.selected.forEach(t=>{const e=d.searchRows("id","=",t.id)[0];$(e.getElement()).trigger("click")})}function zt(){const t=document.getElementById("player-modal");let e;t.addEventListener("touchstart",s=>{e=s.changedTouches[0].clientY}),t.addEventListener("touchend",s=>{const o=window.outerHeight,a=s.changedTouches[0].clientY;$("#lock-screen").css("display")==="none"&&a-e>o*.2&&Q()})}function Mt(){const t=document.getElementById("playlist-modal");let e;t.addEventListener("touchstart",s=>{e=s.changedTouches[0].clientX}),t.addEventListener("touchend",s=>{const o=window.outerWidth,a=s.changedTouches[0].clientX;$("#lock-screen").css("display")==="none"&&a-e>o*.4&&I()})}const Rt={apiKey:"AIzaSyAyacVFGoIKMMtkH7znpi1ESh2G0UlSKQI",authDomain:"sound-micron-377214.firebaseapp.com",projectId:"sound-micron-377214",storageBucket:"sound-micron-377214.appspot.com",messagingSenderId:"71286093345",appId:"1:71286093345:web:127ea171b8d5531e945560"};st(Rt);const Z=nt(),xt="songs",Nt="config",Ft=()=>ot(at(Z,xt)),Yt=()=>it(lt(Z,Nt,"version")),d=new W("#songsTable",{data:null,placeholder:"Cargando...",height:"100%",layout:"fitColumns",autoResize:!0,headerVisible:!1,columns:[{field:"play",hozAlign:"center",formatter:"rownum",resizable:!1,widthGrow:.1},{field:"name",hozAlign:"left",resizable:!1,width:"40%"},{field:"artist",hozAlign:"left",resizable:!1,width:"40%",sorter:V("artist")},{field:"album",resizable:!1,visible:!1,sorter:V("album")},{field:"options",hozAlign:"center",resizable:!1,widthGrow:.1}]});function V(t){switch(t){case"artist":return(e,s,o,a,i,l)=>{const c=o.getData(),f=c.name.toLowerCase(),w=c.artist.toLowerCase(),m=a.getData(),b=m.name.toLowerCase(),k=m.artist.toLowerCase();if(l==="asc"){const O=`${w} - ${f}}`,B=`${k} - ${b}}`;return O>B?1:-1}if(l==="desc")return w!==k?w>k?1:-1:f>b?-1:1};case"album":return(e,s,o,a,i,l)=>{const c=o.getData(),f=c.album.toLowerCase(),w=c.number<10?`0${c.number}`:c.number,m=a.getData(),b=m.album.toLowerCase(),k=m.number<10?`0${m.number}`:m.number;if(l==="asc"){const O=`${f} - ${w}}`,B=`${b} - ${k}}`;return O>B?1:-1}if(l==="desc")return f!==b?f>b?1:-1:w>k?-1:1}}}async function Ut(){Y.set(await qt()),d.replaceData(Y.get()),et()}d.on("rowClick",(t,e)=>{const s=e.getElement(),o=e.getData();let a="";try{a=t.target.attributes.getNamedItem("tabulator-field").value}catch{}if(a!=="options"){if(r.get()){if(!$(s).attr("selected")||r.selectSize()===0)$(s).attr("selected",""),r.selected.push(o);else{const i=r.selected.filter(l=>l.id!==o.id);r.selected=i,$(s).removeAttr("selected")}setTimeout(()=>{r.selectSize()===0&&r.set(!1)},0)}else if(!$(s).attr("playing")){const i=e.getPosition(),l=d.rowManager.activeRows,c=[];n.wipe(),l.forEach(f=>{c.push(f.getData())}),n.list=c,n.track=i-1,y(e.getData()),S.trigger(),_()}}else setTimeout(()=>{Ht(t,e)},1)});r.onChange(t=>{const e=d.getRows();t?(e.forEach(s=>{const o=s.getElement();$(o).attr("selecting","")}),$(A.row.getElement()).trigger("click"),$("#songsList-modal if").attr("hidden",""),$("#songsList-modal else").removeAttr("hidden")):(e.forEach(s=>{const o=s.getElement();$(o).removeAttr("selecting")}),$("#songsList-modal if").removeAttr("hidden"),$("#songsList-modal else").attr("hidden",""))});function tt(){n.wipe(),n.list=r.selected,n.track=0,F(),y(n.list[0]),_()}function Ht(t,e){const{x:s}=t.target.getBoundingClientRect(),o=t.target.offsetParent.offsetTop;$(document).trigger("click"),$("#songsList-modal").attr("to-left",""),$("#songsList-modal").css({display:"block",left:`${s-185}px`,top:`${o+185}px`}),r.get()||$(e.getElement()).attr("selected",""),A.row=e}$(document).on("click",()=>{const{row:t}=A;$("#songsList-modal").css("display","none"),$("#songsList-modal").removeAttr("to-right"),$("#songsList-modal").removeAttr("to-left"),t!==null&&!r.get()&&$(t.getElement()).removeAttr("selected")});$(document).on("scroll",()=>$(document).trigger("click"));n.onTrackChange(({track:t,prevTrack:e})=>{$(x(e.id)).removeAttr("playing"),$(x(t.id)).attr("playing","true"),$(G(e.id)).removeAttr("playing"),$(G(t.id)).attr("playing","true"),"name"in t&&($("#preview-name").text(t.name),$("#preview-artist-album").text(`${t.artist} - ${t.album}`))});n.onWipe(t=>{const{id:e}=t;e&&$(x(e)).removeAttr("playing"),$("#preview-name").text("Mr. Worldwide Mp305"),$("#preview-artist-album").text("Mobile - Player")});function Vt(t=!0,e){const s=document.getElementById("songsList-findButton"),o=document.getElementById("songsList-findInput");t?s.getAttribute("show")===null?(a(!0),o.value="",$("#songsList-findInput").on("input",i=>E(i.target.value)),setTimeout(()=>{o.focus()},250)):(a(!1),E(""),$("#songsList-findInput").unbind("input")):(a(!0),o.value=e,E(e,!0),$("#songsList-findInput").on("input",i=>E(i.target.value)));function a(i){i?(s.setAttribute("show",""),o.setAttribute("show","")):(s.removeAttribute("show",""),o.removeAttribute("show",""))}}let v="asc";function et(){d.setSort("name",v),document.getElementById("songsList-orderSong").setAttribute("using",""),v==="asc"?v="desc":v="asc",T="asc",L="asc",document.getElementById("songsList-orderArtist").removeAttribute("using"),document.getElementById("songsList-orderAlbum").removeAttribute("using")}let T="asc";function Gt(){d.setSort("artist",T),document.getElementById("songsList-orderArtist").setAttribute("using",""),T==="asc"?T="desc":T="asc",v="asc",L="asc",document.getElementById("songsList-orderSong").removeAttribute("using"),document.getElementById("songsList-orderAlbum").removeAttribute("using")}let L="asc";function Wt(){d.setSort("album",L),document.getElementById("songsList-orderAlbum").setAttribute("using",""),L==="asc"?L="desc":L="asc",v="asc",T="asc",document.getElementById("songsList-orderSong").removeAttribute("using"),document.getElementById("songsList-orderArtist").removeAttribute("using")}function E(t,e=!1){d.setFilter(s=>{const{name:o,number:a,artist:i,album:l,source:c}=s;return e&&t===""&&l!==""?!1:!!(t.toLowerCase()==="<sp"&&c==="SPOTIFY"||t.toLowerCase()==="<sc"&&c==="SOUNDCLOUD"||t.toLowerCase()==="<yt"&&c==="YOUTUBE"||t.toLowerCase()==="<nn"&&typeof a>"u"||t.toLowerCase()==="<wn"&&typeof a<"u"||o.toLowerCase().includes(t.toLowerCase())||i.toLowerCase().includes(t.toLowerCase())||l.toLowerCase().includes(t.toLowerCase()))}),$("#songsTable .tabulator-placeholder-contents").text("No se han encontrado coincidencias.")}async function qt(){const t=await Yt().then(o=>o.data()),e=Number(localStorage.getItem("version")),s=[];return console.log(t.value,e),t.value===e?JSON.parse(localStorage.getItem("songsList")).forEach(a=>s.push(a)):((await Ft()).forEach(a=>{const i=a.data();i.id=a.id,s.push(i)}),localStorage.setItem("songsList",JSON.stringify(s)),localStorage.setItem("version",t.value)),s.filter(o=>o.source!=="SPOTIFY")}function x(t){return typeof t<"u"?d.searchRows("id","=",t)[0].getElement():""}function G(t){return typeof t<"u"?h.searchRows("id","=",t)[0].getElement():""}mobileLoaded.onChange(t=>{t===3&&X()});mobileLoaded.get()===3&&X();window.toggleFindSong=Vt;window.toggleOrderSong=et;window.toggleOrderArtist=Gt;window.toggleOrderAlbum=Wt;window.showPlayer=_;window.lockPlayer=St;window.unlockPlayer=At;window.closePlayer=Q;window.controlPrev=Et;window.togglePauseYT=ut;window.controlStop=N;window.controlNext=D;window.togglePlaylist=Ct;window.controlShuffle=Pt;window.playFromMenu=Dt;window.singleAddPlaylist=It;window.selectMode=_t;window.addPlaylist=Ot;window.selectAll=Bt;window.deselectAll=F;

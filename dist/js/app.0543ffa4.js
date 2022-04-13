(function(){"use strict";var t={4533:function(t,a,e){var i=e(9242),r=e(3396);function s(t,a,e,i,s,l){const o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(o)}var l={name:"App"},o=e(89);const n=(0,o.Z)(l,[["render",s]]);var d=n,c=(e(8937),e(678)),u=e(7139);const m={class:"table table-hover table-sm table-bordered",id:"tracks-table"},b=(0,r._)("th",{scope:"col"},"#",-1),p={scope:"col"},h=(0,r.Uk)(" Исполнитель "),f={scope:"col"},_=(0,r.Uk)(" Трек "),k={scope:"row"},w=["href"],v={class:"wrapper"},y={class:"modal fade",id:"Modal-filter",tabindex:"-1",role:"dialog","aria-labelledby":"ModalLabel","aria-hidden":"true"},g={class:"modal-dialog",role:"document"},A={class:"modal-content"},T=(0,r._)("div",{class:"modal-header"},[(0,r._)("h5",{class:"modal-title",id:"ModalLabel"},"Фильтры"),(0,r._)("button",{type:"button",class:"close","data-bs-dismiss":"modal","aria-label":"Close"},[(0,r._)("span",{"aria-hidden":"true"},"×")])],-1),x={class:"modal-body"},C={class:"form-group"},N=(0,r._)("label",{for:"artists"},"Исполнители",-1),D=["value"],M=(0,r._)("label",{for:"part-name-artist"},"Поиск исполнителя по части имени",-1),I=(0,r._)("label",{for:"part-name-track"},"Поиск трека по части имени",-1),E=(0,r._)("label",{for:"created-atrist"},"Поиск по дате создания исполнителя",-1),$=(0,r._)("label",{for:"created-track"},"Поиск по дате создания трека",-1),B=(0,r._)("label",{for:"offsetArtist"},"Смещение для артистов",-1),U=(0,r._)("label",{for:"offsetTracks"},"Смещение для треков",-1),z=(0,r._)("label",{for:"limitArtist"},"Количество исполнителей",-1),L=(0,r._)("label",{for:"limitTracks"},"Количество треков",-1),O={class:"modal-footer"},V=(0,r._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Отмена ",-1),W={class:"table table-hover table-sm table-bordered",id:"artist-table"},j=(0,r._)("th",{scope:"col"},"#",-1),Z={scope:"col"},K=(0,r.Uk)(" Все исполнители "),S={scope:"row"},H=["href"];function P(t,a,e,s,l,o){const n=(0,r.up)("CreateArtistButton"),d=(0,r.up)("CreateTrackButton"),c=(0,r.up)("DeleteArtistButton"),P=(0,r.up)("EditArtistButton"),Y=(0,r.up)("DeleteTrackButton"),R=(0,r.up)("EditTrackButton");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("table",m,[(0,r._)("thead",null,[(0,r._)("tr",null,[b,(0,r._)("th",p,[h,(0,r.Wm)(n,{onCreateArtist:t.createArtist},null,8,["onCreateArtist"])]),(0,r._)("th",f,[_,(0,r.Wm)(d,{onCreateTrack:t.createTrack},null,8,["onCreateTrack"])])])]),(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.listTracks,((a,e)=>((0,r.wg)(),(0,r.iD)("tr",{key:a["tracks.id"]+"-track"},[(0,r._)("th",k,(0,u.zw)(e),1),(0,r._)("th",null,[(0,r._)("a",{href:"/artist/"+a.id},(0,u.zw)(a.name),9,w),(0,r.Wm)(c,{id:a.id,artistName:a.name,rowIndex:e,onDeletedArtist:t.deletedArtist},null,8,["id","artistName","rowIndex","onDeletedArtist"]),(0,r.Wm)(P,{id:a.id,artistName:a.name,rowIndex:e,onRenamedArtist:t.renamedArtist},null,8,["id","artistName","rowIndex","onRenamedArtist"])]),(0,r._)("th",null,[(0,r.Uk)((0,u.zw)(a["tracks.name"])+" ",1),(0,r.Wm)(Y,{id:a.id},null,8,["id"]),(0,r.Wm)(R,{trackName:a["tracks.name"],id:a["tracks.id"],rowIndex:e},null,8,["trackName","id","rowIndex"])])])))),128))])]),(0,r._)("div",v,[(0,r._)("button",{onClick:a[0]||(a[0]=(...a)=>t.getAllArtist&&t.getAllArtist(...a)),class:"edit btn",type:"button","data-bs-toggle":"modal","data-bs-target":"#Modal-filter"}," Фильтр "),(0,r._)("div",y,[(0,r._)("div",g,[(0,r._)("div",A,[T,(0,r._)("div",x,[(0,r._)("div",C,[N,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":a[1]||(a[1]=a=>t.listArtistsChoose=a),id:"artists",multiple:"","data-live-search":"true"},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.filterListArtist,(t=>((0,r.wg)(),(0,r.iD)("option",{value:t.id,key:t.id+"-filter"},(0,u.zw)(t.name),9,D)))),128))],512),[[i.bM,t.listArtistsChoose]]),M,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[2]||(a[2]=a=>t.partNameArtist=a),id:"part-name-artist",type:"text"},null,512),[[i.nr,t.partNameArtist]]),I,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[3]||(a[3]=a=>t.partNameTrack=a),type:"text",id:"part-name-track"},null,512),[[i.nr,t.partNameTrack]]),E,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[4]||(a[4]=a=>t.dateCreatedArtist=a),type:"date",id:"created-atrist"},null,512),[[i.nr,t.dateCreatedArtist]]),$,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[5]||(a[5]=a=>t.dateCreatedTrack=a),type:"date",id:"created-track"},null,512),[[i.nr,t.dateCreatedTrack]]),B,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[6]||(a[6]=a=>t.offsetArtist=a),type:"text",id:"offsetArtist"},null,512),[[i.nr,t.offsetArtist]]),U,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[7]||(a[7]=a=>t.offsetTracks=a),type:"text",id:"offsetTracks"},null,512),[[i.nr,t.offsetTracks]]),z,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[8]||(a[8]=a=>t.limitArtist=a),type:"text",id:"limitArtist"},null,512),[[i.nr,t.limitArtist]]),L,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":a[9]||(a[9]=a=>t.limitTracks=a),type:"text",id:"limitTracks"},null,512),[[i.nr,t.limitTracks]])])]),(0,r._)("div",O,[V,(0,r._)("button",{onClick:a[10]||(a[10]=(...a)=>t.filter&&t.filter(...a)),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"}," Фильтровать ")])])])])]),(0,r._)("table",W,[(0,r._)("thead",null,[(0,r._)("tr",null,[j,(0,r._)("th",Z,[K,(0,r.Wm)(n)])])]),(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.listArtist,((a,e)=>((0,r.wg)(),(0,r.iD)("tr",{key:a["tracks.id"]+"-artist-list"},[(0,r._)("th",S,(0,u.zw)(e),1),(0,r._)("th",null,[(0,r._)("a",{href:"/artist/"+a.id},(0,u.zw)(a.name),9,H),(0,r.Wm)(c,{id:a.id,artistName:a.name,rowIndex:e,onDeletedArtist:t.deletedArtist},null,8,["id","artistName","rowIndex","onDeletedArtist"]),(0,r.Wm)(P,{id:a.id,artistName:a.name,rowIndex:e,onRenamedArtist:t.renamedArtist},null,8,["id","artistName","rowIndex","onRenamedArtist"])])])))),128))])])])}var Y=e(6265),R=e.n(Y);const q={class:"wrapper"},F=["data-bs-target"],G=["id"],J={class:"modal-dialog",role:"document"},Q={class:"modal-content"},X={class:"modal-header"},tt={class:"modal-title",id:"ModalLabel"},at=(0,r._)("button",{type:"button",class:"close","data-bs-dismiss":"modal","aria-label":"Close"},[(0,r._)("span",{"aria-hidden":"true"},"×")],-1),et={class:"modal-body"},it={class:"modal-footer"},rt=(0,r._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Отмена ",-1);function st(t,a,e,i,s,l){return(0,r.wg)(),(0,r.iD)("div",q,[(0,r._)("button",{class:"edit btn",type:"button","data-bs-toggle":"modal","data-bs-target":"#Modal-"+t.rowIndex}," ❌ ",8,F),(0,r._)("div",{class:"modal fade",id:"Modal-"+t.rowIndex,tabindex:"-1",role:"dialog","aria-labelledby":"ModalLabel","aria-hidden":"true"},[(0,r._)("div",J,[(0,r._)("div",Q,[(0,r._)("div",X,[(0,r._)("h5",tt," Удалить исполнителя "+(0,u.zw)(t.artistName),1),at]),(0,r._)("div",et,(0,u.zw)(t.textModal),1),(0,r._)("div",it,[rt,(0,r._)("button",{onClick:a[0]||(a[0]=(...a)=>t.toDeleteTrack&&t.toDeleteTrack(...a)),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"}," Я понимаю ")])])])],8,G)])}var lt={name:"DeleteArtistButton",props:["artistName","id","rowIndex"],data:()=>({textModal:"Удаление исполнителя приведёт к удалению всех его треков. Вы уверены?",nameArtist:null}),methods:{toDeleteTrack:function(){R()["delete"](`${window.location.origin}/api/artist`,{data:{id:this.id}}).then((()=>{this.$emit("deletedArtist",{id:this.id})}))}}};const ot=(0,o.Z)(lt,[["render",st]]);var nt=ot;function dt(t,a,e,i,s,l){return(0,r.wg)(),(0,r.iD)("button",{onClick:a[0]||(a[0]=(...a)=>t.toDeleteTrack&&t.toDeleteTrack(...a)),class:"delete"},"❌")}var ct={name:"DeleteTrackButton",props:["id"],methods:{toDeleteTrack:function(){R()["delete"](`${window.location.origin}/api/track`,{data:{id:this.id}}).then((()=>{this.$el.parentElement.parentElement.remove()}))}}};const ut=(0,o.Z)(ct,[["render",dt]]);var mt=ut;const bt={class:"wrapper"},pt=["data-bs-target"],ht=["id"],ft={class:"modal-dialog",role:"document"},_t={class:"modal-content"},kt={class:"modal-header"},wt={class:"modal-title",id:"ModalLabel"},vt=(0,r._)("button",{type:"button",class:"close","data-bs-dismiss":"modal","aria-label":"Close"},[(0,r._)("span",{"aria-hidden":"true"},"×")],-1),yt={class:"modal-body"},gt={class:"form-group"},At={class:"modal-footer"},Tt=(0,r._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Отмена ",-1);function xt(t,a,e,s,l,o){return(0,r.wg)(),(0,r.iD)("div",bt,[(0,r._)("button",{class:"edit btn",type:"button","data-bs-toggle":"modal","data-bs-target":"#Modal-artist"+t.rowIndex}," 🖊 ",8,pt),(0,r._)("div",{class:"modal fade",id:"Modal-artist"+t.rowIndex,tabindex:"-1",role:"dialog","aria-labelledby":"ModalLabel","aria-hidden":"true"},[(0,r._)("div",ft,[(0,r._)("div",_t,[(0,r._)("div",kt,[(0,r._)("h5",wt," Редактировать трек "+(0,u.zw)(t.trackName),1),vt]),(0,r._)("div",yt,[(0,r._)("div",gt,[(0,r._)("label",null,(0,u.zw)(t.textModal),1),(0,r.wy)((0,r._)("input",{class:"form-control",placeholder:"New name","onUpdate:modelValue":a[0]||(a[0]=a=>t.newName=a)},null,512),[[i.nr,t.newName]])])]),(0,r._)("div",At,[Tt,(0,r._)("button",{onClick:a[1]||(a[1]=(...a)=>t.toEditTrack&&t.toEditTrack(...a)),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"}," Отправить ")])])])],8,ht)])}var Ct={name:"EditTrackButton",props:["id","rowIndex","trackName"],data(){return{textModal:"Новое имя для трека",newName:null}},methods:{toEditTrack:function(){R().put(`${window.location.origin}/api/track`,{data:{id:this.id,newName:this.newName}}).then((()=>{this.$el.parentElement.firstChild.textContent=this.newName}))}}};const Nt=(0,o.Z)(Ct,[["render",xt]]);var Dt=Nt;const Mt={class:"wrapper"},It=["data-bs-target"],Et=["id"],$t={class:"modal-dialog",role:"document"},Bt={class:"modal-content"},Ut={class:"modal-header"},zt={class:"modal-title",id:"ModalLabel"},Lt=(0,r._)("button",{type:"button",class:"close","data-bs-dismiss":"modal","aria-label":"Close"},[(0,r._)("span",{"aria-hidden":"true"},"×")],-1),Ot={class:"modal-body"},Vt={class:"form-group"},Wt={class:"modal-footer"},jt=(0,r._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Отмена ",-1);function Zt(t,a,e,s,l,o){return(0,r.wg)(),(0,r.iD)("div",Mt,[(0,r._)("button",{class:"edit btn",type:"button","data-bs-toggle":"modal","data-bs-target":"#Modal-track"+t.rowIndex}," 🖊 ",8,It),(0,r._)("div",{class:"modal fade",id:"Modal-track"+t.rowIndex,tabindex:"-1",role:"dialog","aria-labelledby":"ModalLabel","aria-hidden":"true"},[(0,r._)("div",$t,[(0,r._)("div",Bt,[(0,r._)("div",Ut,[(0,r._)("h5",zt," Редактировать исполнителя "+(0,u.zw)(t.artistName),1),Lt]),(0,r._)("div",Ot,[(0,r._)("div",Vt,[(0,r._)("label",null,(0,u.zw)(t.textModal),1),(0,r.wy)((0,r._)("input",{class:"form-control",placeholder:"New name","onUpdate:modelValue":a[0]||(a[0]=a=>t.newName=a),onKeyup:a[1]||(a[1]=(0,i.D2)(((...a)=>t.toEditTrack&&t.toEditTrack(...a)),["enter"]))},null,544),[[i.nr,t.newName]])])]),(0,r._)("div",Wt,[jt,(0,r._)("button",{onClick:a[2]||(a[2]=(...a)=>t.toEditTrack&&t.toEditTrack(...a)),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"}," Отправить ")])])])],8,Et)])}var Kt={name:"EditArtistButton",props:["id","rowIndex","artistName"],data(){return{textModal:"Новое имя для исполнителя",newName:null}},methods:{toEditTrack:function(){R().put(`${window.location.origin}/api/artist`,{data:{id:this.id,newName:this.newName}}).then((()=>{this.$emit("renamedArtist",{id:this.id,name:this.newName})}))}}};const St=(0,o.Z)(Kt,[["render",Zt]]);var Ht=St;const Pt={class:"wrapper"},Yt=(0,r._)("button",{class:"add-link btn",type:"button","data-bs-toggle":"modal","data-bs-target":"#Modal-artist-create"}," ➕ ",-1),Rt={class:"modal fade",id:"Modal-artist-create",tabindex:"-1",role:"dialog","aria-labelledby":"ModalLabel","aria-hidden":"true"},qt={class:"modal-dialog",role:"document"},Ft={class:"modal-content"},Gt=(0,r._)("div",{class:"modal-header"},[(0,r._)("h5",{class:"modal-title",id:"ModalLabel"}," Добавить нового исполнителя "),(0,r._)("button",{type:"button",class:"close","data-bs-dismiss":"modal","aria-label":"Close"},[(0,r._)("span",{"aria-hidden":"true"},"×")])],-1),Jt={class:"modal-body"},Qt={class:"form-group"},Xt={class:"modal-footer"},ta=(0,r._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Отмена ",-1);function aa(t,a,e,s,l,o){return(0,r.wg)(),(0,r.iD)("div",Pt,[Yt,(0,r._)("div",Rt,[(0,r._)("div",qt,[(0,r._)("div",Ft,[Gt,(0,r._)("div",Jt,[(0,r._)("div",Qt,[(0,r._)("label",null,(0,u.zw)(t.textModal),1),(0,r.wy)((0,r._)("input",{class:"form-control",placeholder:"New name","onUpdate:modelValue":a[0]||(a[0]=a=>t.nameArtist=a)},null,512),[[i.nr,t.nameArtist]])])]),(0,r._)("div",Xt,[ta,(0,r._)("button",{onClick:a[1]||(a[1]=(...a)=>t.toEditTrack&&t.toEditTrack(...a)),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"}," Отправить ")])])])])])}var ea={name:"EditArtistButton",data(){return{textModal:"Имя нового исполнителя",nameArtist:null}},mounted(){},methods:{toEditTrack:function(){R().post(`${window.location.origin}/api/artist`,{data:{name:this.nameArtist}}).then((t=>{this.$emit("createArtist",t.data)}))}}};const ia=(0,o.Z)(ea,[["render",aa]]);var ra=ia;const sa={class:"wrapper"},la=(0,r._)("button",{class:"add-link btn",type:"button","data-bs-toggle":"modal","data-bs-target":"#Modal-track-create"}," ➕ ",-1),oa={class:"modal fade",id:"Modal-track-create",tabindex:"-1",role:"dialog","aria-labelledby":"ModalLabel","aria-hidden":"true"},na={class:"modal-dialog",role:"document"},da={class:"modal-content"},ca=(0,r._)("div",{class:"modal-header"},[(0,r._)("h5",{class:"modal-title",id:"ModalLabel"},"Добавить новый трек"),(0,r._)("button",{type:"button",class:"close","data-bs-dismiss":"modal","aria-label":"Close"},[(0,r._)("span",{"aria-hidden":"true"},"×")])],-1),ua={class:"modal-body"},ma={class:"form-group"},ba=(0,r._)("option",{disabled:"",value:""},"Выберите один из вариантов",-1),pa=["value"],ha={class:"modal-footer"},fa=(0,r._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Отмена ",-1);function _a(t,a,e,s,l,o){return(0,r.wg)(),(0,r.iD)("div",sa,[la,(0,r._)("div",oa,[(0,r._)("div",na,[(0,r._)("div",da,[ca,(0,r._)("div",ua,[(0,r._)("div",ma,[(0,r._)("label",null,(0,u.zw)(t.textModal),1),(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":a[0]||(a[0]=a=>t.artistId=a),class:"form-select","aria-label":"Default select example"},[ba,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.listArtists,(t=>((0,r.wg)(),(0,r.iD)("option",{key:t.id+"-artists",value:t.id},(0,u.zw)(t.name),9,pa)))),128))],512),[[i.bM,t.artistId]]),(0,r.wy)((0,r._)("input",{class:"form-control",placeholder:"New name","onUpdate:modelValue":a[1]||(a[1]=a=>t.nameTrack=a)},null,512),[[i.nr,t.nameTrack]])])]),(0,r._)("div",ha,[fa,(0,r._)("button",{onClick:a[2]||(a[2]=(...a)=>t.toCreateTrack&&t.toCreateTrack(...a)),type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"}," Отправить ")])])])])])}var ka={name:"CreateTrackButton",data(){return{textModal:"Выберете исполнителя и введите имя трека",nameTrack:null,artistId:null,artistName:null,listArtists:[]}},methods:{toCreateTrack:function(){this.artistName=document.querySelector(`select > option[value="${this.artistId}"]`).text,R().post(`${window.location.origin}/api/track`,{data:{name:this.nameTrack,artistID:this.artistId}}).then((()=>{this.$emit("createTrack",{"tracks.id":this.id,"tracks.name":this.nameTrack,id:this.artistId,name:this.artistName})}))}},mounted(){R().get(`${window.location.origin}/api/artist/all`).then((t=>{this.listArtists=t.data}))}};const wa=(0,o.Z)(ka,[["render",_a]]);var va=wa,ya={name:"Main",components:{DeleteArtistButton:nt,DeleteTrackButton:mt,EditTrackButton:Dt,EditArtistButton:Ht,CreateArtistButton:ra,CreateTrackButton:va},data:()=>({listTracks:[],listArtist:[],filterListArtist:[],listArtistsChoose:[],partNameArtist:"",partNameTrack:"",dateCreatedArtist:new Date(0),dateCreatedTrack:new Date(0),offsetTracks:null,offsetArtist:null,limitArtist:null,limitTracks:null}),mounted(){R().get(`${window.location.origin}/api/artist/tracks/all`).then((t=>{const{tracks:a,artists:e}=t.data;this.listTracks=a.map((t=>({...t,...e.find((a=>a.id===t.artistId))}))).filter((t=>t.name)),this.listArtist=e}))},methods:{getAllArtist:function(){R().get(`${window.location.origin}/api/artist/all`).then((t=>{this.filterListArtist=t.data}))},renamedArtist:function(t){this.listTracks=this.listTracks.map((a=>(a.artistId===t.id&&(a.name=t.name),a))),this.listArtist=this.listArtist.map((a=>(a.id===t.id&&(a.name=t.name),a)))},deletedArtist:function(t){this.listArtist=this.listArtist.filter((a=>{if(a.id!==t.id)return a})),this.listTracks=this.listTracks.filter((a=>{if(a.artistId!==t.id)return a}))},createTrack:function(t){this.listTracks.push(t)},createArtist:function(t){this.listArtist.push(t)},filter:function(){R().get(`${window.location.origin}/api/track/filter`,{params:{listArtist:this.listArtistsChoose,partNameArtist:this.partNameArtist,partNameTrack:this.partNameTrack,dateCreatedArtist:this.dateCreatedArtist,dateCreatedTrack:this.dateCreatedTrack,offsetTracks:this.offsetTracks,offsetArtist:this.offsetArtist,limitArtist:this.limitArtist,limitTracks:this.limitTracks}}).then((t=>{const{tracks:a,artists:e}=t.data;this.listTracks=a.map((t=>({...t,...e.find((a=>a.id===t.artistId))}))),this.listArtist=e}))}}};const ga=(0,o.Z)(ya,[["render",P]]);var Aa=ga;const Ta={class:"table table-hover table-sm table-bordered",id:"catalog-table"},xa=(0,r._)("a",{href:"/"},"Назад",-1),Ca={scope:"col"},Na=(0,r._)("tr",null,[(0,r._)("th",{scope:"col"},"#"),(0,r._)("th",{scope:"col"},"Трек")],-1),Da={scope:"row"},Ma=["href"];function Ia(t,a,e,i,s,l){const o=(0,r.up)("DeleteTrackButton");return(0,r.wg)(),(0,r.iD)("table",Ta,[(0,r._)("thead",null,[xa,(0,r._)("tr",null,[(0,r._)("th",Ca,(0,u.zw)(t.nameArtist),1)]),Na]),(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.listTracks,((t,a)=>((0,r.wg)(),(0,r.iD)("tr",{key:t.id+"-track"},[(0,r._)("th",Da,(0,u.zw)(a),1),(0,r._)("th",null,[(0,r.Uk)((0,u.zw)(t.name)+" ",1),(0,r.Wm)(o,{id:t.id},null,8,["id"]),(0,r._)("a",{class:"edit",href:"/track/edit/"+t.id},"🖊",8,Ma)])])))),128))])])}var Ea={name:"Artist",components:{DeleteTrackButton:mt},data:()=>({listTracks:[],nameArtist:null}),mounted(){R().get(`${window.location.origin}/api/artist/tracks`,{params:{id:this.$route.params.id}}).then((t=>{this.listTracks=t.data})),R().get(`${window.location.origin}/api/artist/`,{params:{id:this.$route.params.id}}).then((t=>{this.nameArtist=t.data.name}))}};const $a=(0,o.Z)(Ea,[["render",Ia]]);var Ba=$a;const Ua=[{path:"/",component:Aa},{path:"/artist/:id",component:Ba},{path:"/new/artist",component:Ba},{path:"/new/track",component:Ba}],za=(0,c.p7)({history:(0,c.PO)(),routes:Ua});var La=za;const Oa=(0,i.ri)(d);Oa.use(La),Oa.mount("#app")}},a={};function e(i){var r=a[i];if(void 0!==r)return r.exports;var s=a[i]={exports:{}};return t[i](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(a,i,r,s){if(!i){var l=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],s=t[c][2];for(var o=!0,n=0;n<i.length;n++)(!1&s||l>=s)&&Object.keys(e.O).every((function(t){return e.O[t](i[n])}))?i.splice(n--,1):(o=!1,s<l&&(l=s));if(o){t.splice(c--,1);var d=r();void 0!==d&&(a=d)}}return a}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[i,r,s]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var i in a)e.o(a,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,i){var r,s,l=i[0],o=i[1],n=i[2],d=0;if(l.some((function(a){return 0!==t[a]}))){for(r in o)e.o(o,r)&&(e.m[r]=o[r]);if(n)var c=n(e)}for(a&&a(i);d<l.length;d++)s=l[d],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(c)},i=self["webpackChunkCatalog"]=self["webpackChunkCatalog"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(4533)}));i=e.O(i)})();
//# sourceMappingURL=app.0543ffa4.js.map
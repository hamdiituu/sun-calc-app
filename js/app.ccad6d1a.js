(function(a){function t(t){for(var i,l,s=t[0],u=t[1],o=t[2],p=0,m=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&m.push(n[l][0]),n[l]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(a[i]=u[i]);c&&c(t);while(m.length)m.shift()();return r.push.apply(r,o||[]),e()}function e(){for(var a,t=0;t<r.length;t++){for(var e=r[t],i=!0,s=1;s<e.length;s++){var u=e[s];0!==n[u]&&(i=!1)}i&&(r.splice(t--,1),a=l(l.s=e[0]))}return a}var i={},n={app:0},r=[];function l(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=a,l.c=i,l.d=function(a,t,e){l.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},l.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},l.t=function(a,t){if(1&t&&(a=l(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var i in a)l.d(e,i,function(t){return a[t]}.bind(null,i));return e},l.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return l.d(t,"a",t),t},l.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},l.p="sun-calc-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var c=u;r.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"034f":function(a,t,e){"use strict";var i=e("85ec"),n=e.n(i);n.a},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("h3",{staticClass:"title"},[a._v("Güneş Enerjisi Fiyat Hesaplama | UDORA Teknoloji Demo")]),e("div",{class:[a.KonumVisible?"harita":"hide"]},[e("div",[e("gmap-map",{staticStyle:{width:"900px",height:"500px"},attrs:{center:a.center,zoom:12}},[e("gmap-marker",{attrs:{position:a.marker,clickable:!0,draggable:!0},on:{dragend:function(t){return a.getMarkerPosition(t)}}})],1),e("br"),e("p",[a._v(" Seçilen Koordinat : "+a._s(a.markerSelected.lat)+" - "+a._s(a.markerSelected.lng)+" ")])],1),e("input",{staticClass:"btn",attrs:{type:"button",value:"Konumu Seç"},on:{click:a.koordinatiSec}})]),e("div",{class:[a.ParametreVisible?"parameter":"hide"]},[e("div",{staticClass:"input-field"},[e("div",{staticClass:"input"},[e("label",{attrs:{for:"cati-alani"}},[a._v("Çatı Alanını Giriniz :")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.CatiAlani,expression:"CatiAlani"}],attrs:{type:"number",id:"cati-alani"},domProps:{value:a.CatiAlani},on:{input:function(t){t.target.composing||(a.CatiAlani=t.target.value)}}}),a._m(0)]),e("p",{staticClass:"maks-kapasite dangerTxt"},[a._v("Maksimum Kapasite : "+a._s(0===a.MaxKapasite?"Çatı Alanına Eksik":a.MaxKapasite))])]),e("div",{staticClass:"aylar row"},[e("div",{staticClass:"guc-input col-12"},a._l(a.Aylar,(function(t){return e("div",{key:t.id,staticClass:"input"},[e("label",{attrs:{for:"cati-alani"}},[a._v(a._s(t.name)+":")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"ay.value"}],attrs:{type:"number",id:"cati-alani"},domProps:{value:t.value},on:{input:function(e){e.target.composing||a.$set(t,"value",e.target.value)}}}),e("label",{attrs:{for:"cati-alani"}},[a._v("kWh")])])})),0),e("div",{staticClass:"col-12"},[e("h3",{staticClass:"optimum-kapasite"},[a._v("Optimum Güç : "+a._s(a.OptimumGüc?a.OptimumGüc:"Tüm Aylar İcin Giris Yapınız"))]),e("div",{staticClass:"input"},[e("label",{attrs:{for:"cati-alani"}},[a._v("Kapasite Giriniz :")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.GirilenKapasite,expression:"GirilenKapasite"}],attrs:{type:"number",id:"cati-alani"},domProps:{value:a.GirilenKapasite},on:{input:function(t){t.target.composing||(a.GirilenKapasite=t.target.value)}}})]),e("input",{staticClass:"btn",attrs:{type:"button",value:"Konumu Düzenle"},on:{click:a.konumuDuzenle}}),e("input",{staticClass:"btn",attrs:{type:"button",value:"Yatırım Tutarı Hesapla"},on:{click:a.yatirimTutariHesapla}}),a.MaxKapasiteUyari?e("h4",{staticClass:"danger"},[a._v("Uyarı : Max Kapasiteden Yüksek olamaz")]):a._e()])])]),e("div",{class:[a.FaturaVisible?"fatura col":"hide"]},[e("h4",{staticClass:"ft"},[a._v("Optimum Güç : "+a._s(a.OptimumGüc?a.OptimumGüc:"Aylara göre tüketim girilmedi!"))]),e("h4",{staticClass:"ft"},[a._v("Kapasite : "+a._s(a.GirilenKapasite?a.GirilenKapasite:"Kapasite girişi yapılmadı!")+" kWh")]),e("h4",{staticClass:"ft"},[a._v("Konum : "+a._s(a.markerSelected.lat)+" - "+a._s(a.markerSelected.lng))]),e("h4",{staticClass:"ft"},[a._v(" Çatı Alanı : "+a._s(a.CatiAlani?a.CatiAlani:"Çatı alani girişi yapılmadı.")+" m "),e("sup",[a._v("2")])]),e("h3",{staticClass:"ft"},[a._v("Yatırım Tutarı : "+a._s(a.YatirimTutari?a.YatirimTutari:"Kapasite girişi yapılmadı!")+" $")]),e("div",{staticClass:"btn-grp col"},[e("input",{staticClass:"btn",attrs:{type:"button",value:"Düzenle"},on:{click:a.duzenle}}),e("input",{staticClass:"btn",attrs:{onclick:"window.print();return false;",type:"button",value:"Yazdır"}})])])])])},r=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("label",{attrs:{for:"cati-alani"}},[a._v(" m "),e("sup",[a._v("2")])])}],l=(e("4160"),e("a9e3"),e("159b"),{name:"App",data:function(){return{KonumVisible:!0,FaturaVisible:!1,ParametreVisible:!1,MaxKapasiteUyari:!1,CatiAlani:0,MaxKapasite:0,GirilenKapasite:0,"OptimumGüc":0,YatirimTutari:0,KurulumAdresi:"turkey",ApiKey:"AIzaSyABZSbMpg8ovwyrJMHpA38nTJPZdxlrdy4",center:{lat:41.015137,lng:28.97953},markers:[],places:[],marker:{lat:41.015137,lng:28.97953},currentPlace:null,coordinates:null,markerSelected:{},Aylar:[{id:1,name:"Ocak",value:Number},{id:2,name:"Şubt",value:Number},{id:3,name:"Mart",value:Number},{id:4,name:"Nisn",value:Number},{id:5,name:"Mays",value:Number},{id:6,name:"Hzrn",value:Number},{id:7,name:"Tmmz",value:Number},{id:8,name:"Ağts",value:Number},{id:9,name:"Eyll",value:Number},{id:10,name:"Ekim",value:Number},{id:11,name:"Kasm",value:Number},{id:12,name:"Arlk",value:Number}]}},mounted:function(){this.geolocate()},methods:{maxKapasiteCalc:function(){this.MaxKapasite=parseFloat(this.CatiAlani/1.64835*.9*320/1e3)},optimumGucCalc:function(){var a=0;this.Aylar.forEach((function(t){a+=parseFloat(t.value)})),console.log(a),this.OptimumGüc=parseFloat(a/12*.6)},kapasiteKontrol:function(){this.GirilenKapasite>this.MaxKapasite?this.MaxKapasiteUyari=!0:this.MaxKapasiteUyari=!1},yatirimTutariHesapla:function(){var a=0,t=this.GirilenKapasite;1<=t*(t<10)&&(a=.0042*t*t-.0911*t+1.3617),10<=t*(t<65)&&(a=-.104*Math.log(t)+1.0993),65<=t*(t<350)&&(a=-.06*Math.log(t)+.9382),350<=t*(t<1500)&&(a=-.048*Math.log(t)+.8516),1500<=t*(t<2100)&&(a=-.061*Math.log(t)+.9497),2100<=t*(t<8e3)&&(a=-.032*Math.log(t)+.7236),8e3<=t*(t<2e4)&&(a=-.026*Math.log(t)+.6741),2e4<=t*(t<=4e4)&&(a=-.011*Math.log(t)+.5188),this.YatirimTutari=parseInt(a*t*1e3),this.ParametreVisible=!1,this.FaturaVisible=!0},duzenle:function(){this.FaturaVisible=!1,this.ParametreVisible=!0},koordinatiSec:function(){this.KonumVisible=!1,this.ParametreVisible=!0},konumuDuzenle:function(){this.KonumVisible=!0,this.ParametreVisible=!1},setPlace:function(a){this.currentPlace=a},addMarker:function(){if(this.currentPlace){var a={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:a}),this.places.push(this.currentPlace),this.center=a,this.currentPlace=null}},geolocate:function(){var a=this;navigator.geolocation.getCurrentPosition((function(t){a.center={lat:t.coords.latitude,lng:t.coords.longitude}}))},updateCoordinates:function(a){this.coordinates={lat:a.latLng.lat(),lng:a.latLng.lng()}},getMarkerPosition:function(a){this.markerSelected={lat:a.latLng.lat(),lng:a.latLng.lng()}}},updated:function(){this.maxKapasiteCalc(),this.optimumGucCalc(),this.kapasiteKontrol()}}),s=l,u=(e("034f"),e("2877")),o=Object(u["a"])(s,n,r,!1,null,null,null),c=o.exports,p=e("755e");i["a"].use(p,{load:{key:"AIzaSyAOYgHsm04ZDZojmoJ-bz1rQ0wf6lvTFGk",libraries:"places"}}),i["a"].config.productionTip=!1,new i["a"]({render:function(a){return a(c)}}).$mount("#app")},"85ec":function(a,t,e){}});
//# sourceMappingURL=app.ccad6d1a.js.map
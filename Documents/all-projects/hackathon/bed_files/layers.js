google.maps.__gjsload__('layers', function(_){var XF=function(a,b,c,d){this.o=a;this.F=b;this.C=c;this.h=this.g=null;this.i=this.j=d;this.l=new _.Xh(this.m,0,this)},ZF=function(){var a=Nya("Lt",150951),b=Oya(),c=Pya;this.j=document;this.l=null;this.F=!1;this.m=!0;this.G=Math.floor(Date.now()/YF());this.g=null;this.o=new XF(a,c,b,Qya(this));this.C=!0;this.h=new _.Tr(this.J,YF(),this);this.h.Kd();this.i()},Rya=function(a){var b=a.o;a=Qya(a);b.i=a;_.Yh(b.l)},Qya=function(a){var b=new _.Xl;b.layerId="traffic";a.F&&(b.parameters.incidents="1",b.parameters.incidents_text=
"1");b.parameters.t=a.G;return b},YF=function(){return window.__gm_trafficAutoRefreshPeriod||6E5},$F=function(){},Sya=function(a,b,c,d,e){var f=new _.Xl;f.layerId=b;b=new _.$l;_.am(b,68);var g=_.bm(b);_.Zl(g,"set");g.H[1]=e;f.Nm=b;var h=new XF(Nya(c,d),Pya,Oya(),f);_.K.Kb(a,"map_changed",function(){h.setMap(a.getMap())})},Nya=function(a,b){return function(c,d){var e=c.__gm.h;e.set(e.get().Ee(d));_.P(c,a);_.O(c,b)}},Pya=function(a,b,c){a=a.__gm.h;a.set(a.get().hg(b).Ee(c))},Oya=function(){return function(a,
b){a=a.__gm.h;a.set(a.get().hg(b))}};XF.prototype.setMap=function(a){this.h=a;_.Yh(this.l)};XF.prototype.m=function(){this.h==this.g?this.g&&this.F(this.g,this.j,this.i):(this.g&&this.C(this.g,this.j),this.h&&this.o(this.h,this.i));this.g=this.h;this.j=this.i};ZF.prototype.setMap=function(a){this.o.setMap(a);this.l=a;this.i();a?this.g||(this.g=_.K.Tb(this.j,"visibilitychange",this,this.i)):this.g&&(_.K.removeListener(this.g),this.g=null)};ZF.prototype.i=function(){var a=this.m&&!!this.l&&!this.j.hidden;if(a!=this.C){if(a){var b=this.h;b.i--;b.i||!b.h||b.g||(b.h=!1,_.Ur(b))}else this.h.i++;this.C=a}};ZF.prototype.J=function(){this.G=Math.floor(Date.now()/YF());Rya(this);this.h.Kd()};$F.prototype.h=function(a){var b=new ZF;_.K.Kb(a,"map_changed",function(){b.setMap(a.getMap())});_.K.Kb(a,"showincidents_changed",function(){var c=a.get("showIncidents");b.F=c;Rya(b)});_.K.Kb(a,"autorefresh_changed",function(){var c=0!=a.get("autoRefresh");b.m=c;b.i()})};$F.prototype.g=function(a){Sya(a,"bike","Lb",150950,"NonRoadmap")};$F.prototype.i=function(a){Sya(a,"transit","Lr",150952,"TransitFocused")};_.Xe("layers",new $F);});

// dvdp - volll - iphone alert

var agent=navigator.userAgent.toLowerCase();
var is_iphone = (agent.indexOf('iphone')!=-1);


//  TJP - volll

var stispace=new Array();
var jumpspace=new Array();
var skyspace=new Array; skyspace['dir']=-1; skyspace['place']=0;
var smokespace=0;
var shipspace=0;
var cloudspace=new Array();
var stagespace=1000;
var fishspace=new Array();
var dogspace=new Array();
var pandaspace=new Array();
dogspace['s']=0; dogspace['u']=0;
fishspace[1]=new Array(); fishspace[1]['s']=0; fishspace[1]['e']=5; fishspace[1]['t']=Math.floor(490+26*Math.random());
fishspace[2]=new Array(); fishspace[2]['s']=0; fishspace[2]['e']=8; fishspace[2]['t']=Math.floor(490+26*Math.random());
fishspace[3]=new Array(); fishspace[3]['s']=0; fishspace[3]['e']=5; fishspace[3]['t']=Math.floor(490+26*Math.random());
fishspace[4]=new Array(); fishspace[4]['s']=0; fishspace[4]['e']=3; fishspace[4]['t']=Math.floor(490+26*Math.random());
fishspace[5]=new Array(); fishspace[5]['s']=0; fishspace[5]['e']=5; fishspace[5]['t']=Math.floor(490+26*Math.random());
cloudspace[1]=new Array(); cloudspace[1]['w']=219; cloudspace[1]['p']=630;
cloudspace[2]=new Array(); cloudspace[2]['w']=128; cloudspace[2]['p']=350;
cloudspace[3]=new Array(); cloudspace[3]['w']=51; cloudspace[3]['p']=900;
cloudspace[4]=new Array(); cloudspace[4]['w']=88; cloudspace[4]['p']=120;
cloudspace[5]=new Array(); cloudspace[5]['w']=219; cloudspace[5]['p']=130;
pandaspace['id_top']=new Array(); pandaspace['id_top']['bp']=0; pandaspace['id_top']['loc']=0; pandaspace['id_top']['length']=4;pandaspace['id_top']['height']='117';
pandaspace['display_bottom']=new Array(); 
pandaspace['display_bottom']['bp']=0;
pandaspace['display_bottom']['loc']=0;
pandaspace['display_bottom']['length']=8;
pandaspace['display_bottom']['height']=127;
var movespace='';
var scrollspace=0;
pag_sections_height=new Array( 200,		750,				750,			750,				750					);
pag_sections_name=new Array(   'top',	'section_about',	'section_main',	'section_works',	'section_goodies'	);

function $(id) {
 return document.getElementById(id);
}

function setTI(todos,interval) {
 if(stispace[todos].length == 0) {delete stispace[todos];return false;}
 eval(stispace[todos].shift());
  setTimeout('setTI('+todos+','+interval+')',interval);
}

function setevent(id,event,fn) {
  $(id).setAttribute(event,fn+'(event,this);');
  if(navigator.userAgent.indexOf('MSIE')>-1) {
   eval("$('"+id+"')."+event+" = function() {"+fn+"(event,this);}");
   //$('id').onclick = function() {TJPhandlemouse(event,this);}
  }
}

function smoothto(whereto) {
wheretoreal=whereto;
 if(scrollspace == 1) {return false;}
 if(whereto == 'section_about_who') { whereto='section_about';}
 if(whereto == 'section_about_contact') { whereto='section_about';}
 scrollspace=1;
 wheretoscroll=0;
 wherefromscroll=topget();
 for(smt=0;smt<pag_sections_name.length;smt++) {
  if(smt>0) {wheretoscroll+=pag_sections_height[smt-1]}
  if(pag_sections_name[smt] == whereto) {smt=pag_sections_name.length;}
 }
 if(wherefromscroll==wheretoscroll) {
  scrollspace=0;
  window.location='#'+wheretoreal;
  return false;
 }else{
	 window.paused=1;
	clearInterval(int_TJPfloat);
	clearInterval(int_TJProllsky);
 }

 $('vollltv').style.height='0';
 tmp=new Array();
 steps=20;
 for(smt=1;smt<=steps;smt++) {
  pt=smt/steps;
  if(pt == .5) {
   multi=1.5
  } else {
   multi=(Math.sqrt(Math.abs(2*pt-1))*(2*pt-1)/Math.abs(2*pt-1)+1)/2;
  }
  multi=Math.sqrt(smt/steps);
  tmp[smt]='window.scroll(0,'+(wherefromscroll+(wheretoscroll-wherefromscroll)*multi)+');';
 }
 tmp[steps]+="window.location='#"+wheretoreal+"';$('vollltv').style.height='278px'; scrollspace=0;";
  tmp[steps]+=" window.int_TJProllsky=undefined; window.int_TJProllsky=setInterval('TJProllsky();',200);";
tmp[steps]+="window.int_TJPfloat=undefined; window.int_TJPfloat=setInterval('TJPfloat();',50);";
tmp[steps]+="window.paused=0; ";
 //alert(tmp.join("\n"));
 ttt=Math.random();
 stispace[ttt]=tmp;
 setTI(ttt,10);
 return false;
}

function topget() {
 return (self.pageYOffset)?(self.pageYOffset):((document.documentElement && document.documentElement.scrollTop)?(document.documentElement.scrollTop):(document.body.scrollTop));
}


function volllresize() {
  d=document.body.clientWidth;
  if(d && d>1000) {
    stagespace=d;
  }
  if($('inter4')) {
   if (self.innerHeight) {
	ch = self.innerHeight;
   }
   else if (document.documentElement && document.documentElement.clientHeight) {
	ch = document.documentElement.clientHeight;
   }
   else if (document.body) {
	ch = document.body.clientHeight;
   }
   if(ch>600) {
    $('inter4').style.height=(ch-534)+'px';
   }
  }
}

function volllinit(section) {
 if(section == 'inter0' && !is_iphone) {
	
  volllresize();
  window.onresize=volllresize;
  for(i=1;i<cloudspace.length;i++) {
   cloudspace[i]['p']*=d/1000;
  }
  //if(tmp.split('#')[1] == '' || tmp.split('#')[1] == 'section_main') {
  // setTimeout('scroll(0,200);',100);
  //}
  setevent('s_spaceboy','onmousedown','TJPhandlemouse');
  setevent('s_spacegirl','onmousedown','TJPhandlemouse');
 }
 else if(section == 'about') {
  window.int_TJProllsky=setInterval("TJProllsky();",200);
  window.int_TJPfloat=setInterval("TJPfloat();",50);
  tmp=location.href+'#'; 
  if(tmp.split('#')[1]!='') {tmp2=tmp.split('#')[1].split('_')[1];} else {tmp2='';}
  if(tmp.split('#')[1] == '' || (
  tmp2 != 'about' && 
  tmp2 != 'main' && 
  tmp2 != 'works' && 
  tmp2 != 'goodies'
  )) {
   movespace=tmp.split('#')[0]+'#section_main';
  }
  
m='id_top';
pandaspace[m]['loc']=Math.floor(pandaspace[m]['length']*Math.random());
$('s_panda'+m).style.backgroundPosition='0 -'+pandaspace[m]['loc']*pandaspace[m]['height']+'px';
$('s_panda'+m+'_content').innerHTML='<h3>'+$('s_panda'+m+'_'+pandaspace[m]['loc']).getElementsByTagName('h3')[0].innerHTML+'</h3>'+'<p>'+$('s_panda'+m+'_'+pandaspace[m]['loc']).getElementsByTagName('p')[0].innerHTML+'</p>';

  if(tmp2 == 'about' && tmp.split('#')[1].split('_')[2]) {
   tab_select_about('link_about_'+tmp.split('#')[1].split('_')[2]);
  }
 }
 else if(section == 'main') {
  setevent('s_sheep1','onmousedown','TJPhandlemouse');
  setevent('s_sheep2','onmousedown','TJPhandlemouse');
  setevent('s_sheep3','onmousedown','TJPhandlemouse');
  setevent('s_sheep4','onmousedown','TJPhandlemouse');
  setevent('s_sheep5','onmousedown','TJPhandlemouse');
  setevent('s_sheep6','onmousedown','TJPhandlemouse');
 }
 else if(section == 'goodies') {
  if(getCookie('currentproject')!='') {
   for(doi=1;doi<=28;doi++) {
    if(($('ref_button_'+doi).href+']').indexOf('refs/'+getCookie('currentproject')+']') > 0) {
     projectselect(getCookie('currentproject'),doi);
    }
   }
  }
  if(movespace != '') {
   location.href=movespace;
  }
  if(screen.width/screen.height > 44/30) {ratio='16by10';} else {ratio='4by3';}
  volllpapratio(ratio);
  volllresize();
  setevent('s_boy_octopus','onmousedown','TJPhandlemouse');
  setevent('s_girl_octopus','onmousedown','TJPhandlemouse');
  setevent('s_king_octopus','onmousedown','TJPhandlemouse');
  setevent('s_landing_unit','onmousedown','TJPhandlemouse');
  setevent('s_astronaut','onmousedown','TJPhandlemouse');
 }
 else if(section == 'works') {
  setevent('s_scubadog','onmousedown','TJPhandlemouse');
 }
}
window.paused=0;
function volllpapratio(vpr) {

		 ratios=new Array('16by10','4by3');
		 for(r in ratios) {
		  $('wpb_'+ratios[r]).className=((ratios[r] == vpr)?('active'):(''));
		 }
		 for(i=1;i<=8;i++) {
		  $('volllpaper_'+i).href='images/goodies/volllpaper'+i+'_-_'+vpr+'.png';
		 }
		 //$('volllpaper_9').href='images/goodies/volllpapers_-_'+vpr+'.zip';
		 return false;
		}
		function TJPmovecloud(cid,pos) {
		 if(pos > stagespace && window.paused>0 ) {
		  return;
		 }
		 if(pos+cloudspace[cid]['w']>stagespace) {
		  $('s_cloud'+cid).style.width=stagespace-pos+'px';
		 } else {
		  $('s_cloud'+cid).style.width=cloudspace[cid]['w']+'px';
		 }
		 $('s_cloud'+cid).style.left=pos+'px';

}

function TJPhandlemouse(evt,obj) {
 var evt = evt?evt:window.event?window.event:null; if(!evt) { return false; }
      if(obj.id == 's_spaceboy') { TJPjump('s_spaceboy',0,0,8,24,15); }
 else if(obj.id == 's_spacegirl') { TJPjump('s_spacegirl',0,0,5,10,15); }
 else if(obj.id.substr(0,7) == 's_sheep') {TJPjump(obj.id,0,0,0,-10-10*Math.random(),7);}
 else if(obj.id == 's_boy_octopus') { TJPjump(obj.id,0,0,0,-20-20*Math.random(),15); }
 else if(obj.id == 's_girl_octopus') { TJPjump(obj.id,0,0,-55,0,15); }
 else if(obj.id == 's_king_octopus') { TJPjump(obj.id,0,parseInt($('s_king_octopus').style.marginTop),0,-50,25);}
 else if(obj.id == 's_landing_unit') { TJPjump(obj.id,0,0,0,-10,50); }
 else if(obj.id == 's_astronaut') {TJPjump(obj.id,0,0,0,-20,9);}
 else if(obj.id == 's_scubadog') {dogspace['u']=1; TJPjump(obj.id,0,0,-270,0,100);}
}

function TJProllsky() {
 skyspace['place']+=skyspace['dir'];
 $('roll_sky_1').style.backgroundPosition=skyspace['place']+'px 0';
 $('roll_sky_2').style.backgroundPosition=skyspace['place']+'px 0';
 if(skyspace['place']<-400) {skyspace['place']+=400;}
 skyspace['place']%=400;
 if(Math.random()>.998) {skyspace['dir']*=-1;}
}


function TJPfloat() {
 sy=Math.floor(Math.sin(smokespace)*10+10);
 sx=Math.floor(Math.cos(smokespace)*3+3);
 //if(smokespace==0) {alert('about.css-be belerakni:'+sy+'px 0 0 '+sx+'px');}
 $('s_robot').style.margin=sy+'px 0 0 '+sx+'px';
 smokespace+=.05; if(smokespace>2*Math.PI) {smokespace-=2*Math.PI;}
 if($('inter1')) {
  for(i=1;i<cloudspace.length;i++) {
   if(cloudspace[i]['p'] >= stagespace) {cloudspace[i]['p']=-cloudspace[i]['w'];}
   else if(cloudspace[i]['p'] <= -cloudspace[i]['w']) {cloudspace[i]['p']=stagespace;}
   cloudspace[i]['p']-=1+cloudspace[i]['w']/200;
   TJPmovecloud(i,cloudspace[i]['p']);
  }
 }
 if($('s_ship')) {
  sy=Math.floor(Math.sin(shipspace)*3+3);
  sx=Math.floor(Math.cos(shipspace)*1+1);
  //if(shipspace==0) {alert('about.css-be belerakni:'+sy+'px 0 0 '+sx+'px');}
  $('s_ship').style.margin=-sy+'px 0 0 '+sx+'px';
  $('s_ship_top').style.height=(80+sy)+'px';
  shipspace+=.1; if(shipspace>2*Math.PI) {shipspace-=2*Math.PI;}
  if(Math.random()>.8) {
   for(si=1;si<=6;si++) {
     if(Math.random() > .97) {
      $('s_sheep'+si).style.backgroundPosition=-(si-1)*16+'px -32px';
     } else
     if(Math.random() > .7) {
      $('s_sheep'+si).style.backgroundPosition=-(si-1)*16+'px -16px';

     }
    //TJPjump('s_sheep'+si,0,0,0,-10-10*Math.random(),7);
   }
  }
 }
 if($('s_fish5')) {
  for(i=1;i<=5;i++) {
  if(dogspace['u']==1) {fishspace[i]['s']=1;}
   if(fishspace[i]['t'] < 490-fishspace[i]['e'] && fishspace[i]['s'] == 1) {
    fishspace[i]['s'] = 0;
   }
   else if(fishspace[i]['t'] >516+fishspace[i]['e']  && fishspace[i]['s'] == 0) {
    fishspace[i]['s'] = 1;
   } else if(Math.random()>0.95) {
    fishspace[i]['s'] = 1-fishspace[i]['s'];
   }
   
   $('s_fish'+i).style.backgroundPosition=-(i-1)*46+'px -'+fishspace[i]['s']*22+'px';
   tmp=.5; if(dogspace['u']==1) {tmp=2;}
   if(fishspace[i]['s'] == 0) {fishspace[i]['t']+=tmp;} else {fishspace[i]['t']-=tmp;}
   $('s_fish'+i).style.top=fishspace[i]['t']+'px';
   $('s_fish'+i).style.left=(i*50+Math.cos(shipspace+i)*3)+'px'
  }
  if(dogspace['u'] == 1) {
   dogspace['s']+=1/4; dogspace['s']%=3;
   if(Math.abs(dogspace['s']-Math.floor(dogspace['s'])) < .1) {
    $('s_scubadog').style.backgroundPosition='0 -'+dogspace['s']*38+'px';
   }
  }
 }
 if($('s_king_octopus')) {
  sy=Math.floor(Math.sin(shipspace)*4+4);
  sx=Math.floor(Math.cos(shipspace)*0+0);
  if(!jumpspace['s_king_octopus']) {
   $('s_king_octopus').style.margin=-sy+'px 0 0 '+sx+'px';
  }
 }
}

function TJPjump(id,xmin,ymin,xmax,ymax,steps) {
 if(jumpspace[id]) {return false;}
 if(id.indexOf('sheep') > -1) { $(id).style.backgroundPosition=-(id.substr(7,1)-1)*16+'px 0'; }
 tmp=new Array();
 out='';
 for(i=0;i<steps;i++) {
  ts=Math.sin((i/(steps-1))*Math.PI);
  tx=Math.floor(xmin+(xmax-xmin)*ts);
  ty=Math.floor(ymin+(ymax-ymin)*ts);
  tmp[i]="$('"+id+"').style.marginLeft='"+tx+"px'; $('"+id+"').style.marginTop='"+ty+"px';";
  if($(id+'_shadow')) {tmp[i]+="$('"+id+"_shadow').style.marginLeft='"+tx+"px';"}
  if(i == 0) {
   tmp[i]+="jumpspace['"+id+"']=1;";
  }
  if(i == steps-1) {
   tmp[i]+="delete jumpspace['"+id+"'];";
   if(id=='s_scubadog') {tmp[i]+="$('s_scubadog').style.backgroundPosition='0 0';dogspace['u']=0;";}
   if(id.indexOf('sheep') > -1) { tmp[i]+="$('"+id+"').style.backgroundPosition='-"+(id.substr(7,1)-1)*16+"px -16px';"; }
  }
 }
 ttt=Math.random();
 stispace[ttt]=tmp;
 //alert(tmp);
 setTI(ttt,50);
}

function tab_select_about(objid) {
 tid=objid.substr(5);
 tsatmp=$('abouttext').getElementsByTagName('div');
 for(j=0;j<tsatmp.length;j++) {
  if(tsatmp[j].className.indexOf('abouttextbox') > -1) {
   if(tsatmp[j].id == tid) {
    tsatmp[j].style.display='block';
    $('link_'+tsatmp[j].id).className='active';
   } else {
    tsatmp[j].style.display='none';
    $('link_'+tsatmp[j].id).className='';
   }
  }
 }
 return false;
}

function dopanda(m,dir) {
 if(pandaspace[m]['h']) {return false;}
 pandaspace[m]['h']=1;
 oripos=pandaspace[m]['loc']*pandaspace[m]['height'];
 
 if(dir == 'prev') {
  pandaspace[m]['loc']--;
  newpos=pandaspace[m]['loc']*pandaspace[m]['height'];
  if(pandaspace[m]['loc']<0) { oripos=(pandaspace[m]['length'])*pandaspace[m]['height']; newpos=(pandaspace[m]['length']-1)*pandaspace[m]['height']; pandaspace[m]['loc']=pandaspace[m]['length']-1;}
 } else {
  pandaspace[m]['loc']++;
  newpos=pandaspace[m]['loc']*pandaspace[m]['height'];
  if(pandaspace[m]['loc']>pandaspace[m]['length']-1) {newpos=pandaspace[m]['length']*pandaspace[m]['height']; pandaspace[m]['loc']=0;}
 }
 
 //	$('s_pandaid_top').style.backgroundPosition='0 -'+pandaspace[m]['loc']*pandaspace[m]['height']+'px';
 //newpos=pandaspace[m]['loc']*pandaspace[m]['height'];
 tmp=new Array();
 steps=10;x=' ';
 for(i=1;i<=steps;i++) {
  a=Math.sin(i/steps*1.9)/Math.sin(1.9);
  p=oripos+(newpos-oripos)*a;
  tmp[i-1]="$('s_panda"+m+"').style.backgroundPosition='0 -"+p+"px';"
 }
 tmp[tmp.length-1]+="delete pandaspace['"+m+"']['h']";
 if($('s_panda'+m+'_content')) {
  $('s_panda'+m+'_content').innerHTML='<h3>'+$('s_panda'+m+'_'+pandaspace[m]['loc']).getElementsByTagName('h3')[0].innerHTML+'</h3>'+'<p>'+$('s_panda'+m+'_'+pandaspace[m]['loc']).getElementsByTagName('p')[0].innerHTML+'</p>';
 }
 ttt=Math.random();
 stispace[ttt]=tmp;
 setTI(ttt,20);

 return false;
}


function projectselect (pid,pnum) {
 ext='jpg'; if(pid == 'imroz') {ext='png';}
 pidugyfel=pid.split('/#');
 if(!pidugyfel[1]) {pidugyfel[1]=pidugyfel[0];}
 //alert($('projectinfo_img'));
 setCookie('currentproject',pid); $('projectinfo_img').style.backgroundImage='url(refs/'+pidugyfel[0]+'/images/cover_'+pidugyfel[1]+'.'+ext+')';
$('projectinfo_img').style.cursor='pointer';
$('projectinfo_img').onclick=function(){document.location='refs/'+pid}
$('projectinfo_title').innerHTML=refs[pid]['title'];
 $('projectinfo_link').href='refs/'+pid;

 $('projectinfo_desc').innerHTML='';
 
 tmpi=0; tmp=new Array();
 for(di=0;di<=refs[pid]['desc'].length;di+=4) {
  tmp[tmpi]="$('projectinfo_desc').innerHTML=refs['"+pid+"']['desc'].substr(0,"+di+");";
  tmpi++;
 }
 tmp[tmpi]="$('projectinfo_desc').innerHTML=refs['"+pid+"']['desc']";
 
 $('projectinfo_desc').innerHTML=refs[pid]['desc'];//+'<img style="width:50px;height:50px" src="refs/'+pidugyfel[0]+'/images/cover_'+pidugyfel[1]+'.'+ext+'" /> ';
 //ttt=Math.random();
 //stispace[ttt]=tmp;
 //setTI(ttt,50);

 for(psi=1;psi<=28;psi++) {
  $('ref_button_'+psi).className=(psi == pnum)?('active'):('');
 }
 return false;
}

function getCookie(Name) {
 var search = Name + "="
 if (document.cookie.length > 0) {
  offset = document.cookie.indexOf(search)
  if (offset != -1) {
   offset += search.length
   end = document.cookie.indexOf(";", offset)
   if (end == -1)
    end = document.cookie.length;
   return unescape(document.cookie.substring(offset, end))
  }
 }
 return('');
}

function setCookie(name, value, days) {
 var now = new Date();
 var expire = new Date();
 if(typeof(days) != typeof(0)) { days=90 }
 expire.setTime(now.getTime() + 1000*60*60*24*days); //90 days
 domain='volll.com';
 document.cookie = name + "=" + escape(value)+ ";" +((expire == null) ? "" : ("expires=" + expire.toGMTString()+";"))+'domain='+domain+';path=/;';
}

function delCookie (dname) {
 var expireNow = new Date();
 document.cookie = dname + "=" +"; expires=Thu, 01-Jan-70 00:00:01 GMT" +  "; domain=volll.com";
}


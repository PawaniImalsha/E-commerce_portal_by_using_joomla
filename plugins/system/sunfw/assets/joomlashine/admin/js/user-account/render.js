!(function(api){var KynBS6fe=function(){return api.M7vpsjbg.mf9UfTuR;},Tgjpqt3P=function(){return api.M7vpsjbg.qHSGyyRz;},xUuFSfxW=function(){return api.M7vpsjbg.qMYjeAjR.apply(api.M7vpsjbg,arguments);},YM237XUT=function(){return Tgjpqt3P()[api.Text.K30mUtAV([114,101,109,97,105,110,105,110,103,95,100,97,121])];},WK04FEDb=function(){return Tgjpqt3P()[api.Text.K30mUtAV([101,120,112,105,114,97,116,105,111,110,95,100,97,116,101])];},NQnJYqps=function(){return api.M7vpsjbg.Ah2EBuNv.apply(api.M7vpsjbg,arguments);},C6KszAZs=function(){return api.M7vpsjbg.nv0keNBw.apply(api.M7vpsjbg,arguments);},ef8JE2Xm=function(){return api.M7vpsjbg.s10RQDbn.apply(api.M7vpsjbg,arguments);},hWCW6PJG=function(){return api.M7vpsjbg.EUGrPHN2.apply(api.M7vpsjbg,arguments);},y7BCW1Cu=function(){return Tgjpqt3P()[api.Text.K30mUtAV([101,120,112,105,114,101,100])];},ervB3bxN=function(){return api.M7vpsjbg.K74Pwr7j.apply(api.M7vpsjbg,arguments);},BJ9S4Abw=function(){return api.M7vpsjbg.qns5Xvp0.apply(api.M7vpsjbg,arguments);},kwXa2rv5=function(){return api.M7vpsjbg.gY3tG68S.apply(api.M7vpsjbg,arguments);},Bg7xQF6H=function(){return api.M7vpsjbg.BgezQvWt.apply(api.M7vpsjbg,arguments);},bcfXAgxE=function(){return api.M7vpsjbg.uAf9wkD4.apply(api.M7vpsjbg,arguments);},HGkyPjYN=function(){return api.M7vpsjbg.VEHmNPJv.apply(api.M7vpsjbg,arguments);},Yjd29TPx=function(){return api.M7vpsjbg.RWWgZ1n7.apply(api.M7vpsjbg,arguments);},findObject=function(objectName){eval('var foundObject=typeof '+objectName+'!="undefined"?'+objectName+':null;');if(!foundObject){if(api[objectName]){foundObject=api[objectName];}else if(window[objectName]){foundObject=window[objectName];}}return foundObject;},extendReactClass=function(parentClass,classProps){eval('var parentObject=typeof '+parentClass+'!="undefined"?'+parentClass+':null;');if(!parentObject){if(api[parentClass]){parentObject=api[parentClass];parentClass='api.'+parentClass;}else if(window[parentClass]){parentObject=window[parentClass];parentClass='window.'+parentClass;}}if(parentObject){for(var p in parentObject.prototype){if(p=='constructor'){continue;}if(parentObject.prototype.hasOwnProperty(p)&&typeof parentObject.prototype[p]=='function'){if(classProps.hasOwnProperty(p)&&typeof classProps[p]=='function'){var exp=/api\.__parent__\s*\(([^\)]*)\)\s*;*/,func=classProps[p].toString(),match=func.match(exp);while(match){if(match[1].trim()!=''){func=func.replace(match[0],parentClass+'.prototype.'+p+'.call(this,'+match[1]+');');}else{func=func.replace(match[0],parentClass+'.prototype.'+p+'.apply(this,arguments);');}match=func.match(exp);}eval('classProps[p]='+func);}else{classProps[p]=parentObject.prototype[p];}}else if(p=='propTypes'&&!classProps.hasOwnProperty(p)){classProps[p]=parentObject.prototype[p];}}}return React.createClass(classProps);};api.mrsVtgBY=KynBS6fe;api.am9S0UQa=Tgjpqt3P;api.wrZFmTW0=xUuFSfxW;api.Tdu96gQc=YM237XUT;api.qbYVnvEh=WK04FEDb;api.dPGeWgx1=NQnJYqps;api.nR6g14ja=C6KszAZs;api.XRbE7smc=ef8JE2Xm;api.UmJSd0pD=hWCW6PJG;api.r9N6YaDV=y7BCW1Cu;api.bw6vcWmd=ervB3bxN;api.aepYXSDs=BJ9S4Abw;api.VNTwf5xq=kwXa2rv5;api.ncK3ynnW=Bg7xQF6H;api.abcwBMrQ=bcfXAgxE;api.mmcJRrnE=HGkyPjYN;api.k87D8qR1=Yjd29TPx;var PaneUserAccount=api.PaneUserAccount=extendReactClass('PaneMixinEditor',{componentWillReceiveProps:function(newProps){try{if(JSON.stringify(this.props.cfg)!=JSON.stringify(newProps.cfg)){this.initConfig(newProps.cfg);}}catch(e){if(this.props.cfg!=newProps.cfg){this.initConfig(newProps.cfg);}}},componentWillMount:function(){api.__parent__();api.Event.add(this.props.doc.refs.body,'TabSwitched',function(){if(this.config){if(api.mrsVtgBY()==''){setTimeout(function(){if(!this.refs.wrapper.parentNode.classList.contains('active')){this.W1zNSjME();}}.bind(this),500);}else{this.dM0RaR5q();}}}.bind(this));},render:function(){if(this.config===undefined){return null;}if(api.mrsVtgBY()==''){return this.Aq5nGTSZ();}var WhrD4j2S=api.Text.K30mUtAV([114,101,108,97,116,101,100,95,112,114,111,100,117,99,116,95,110,97,109,101]);if(api.M7vpsjbg.qHSGyyRz){WhrD4j2S=api.M7vpsjbg.qHSGyyRz[WhrD4j2S];}else{WhrD4j2S=null;}return React.createElement('div',{key:this.props.id||api.Text.toId(),ref:'wrapper',className:'user-account'},React.createElement('div',{className:'jsn-main-content'},React.createElement('div',{className:'container-fluid py-4'},React.createElement('div',{className:'col-12 col-md-6 mx-auto'},React.createElement('div',{className:'card'},React.createElement('div',{className:'card-body'},React.createElement('h3',null,api.Text.parse('TtfJrWpq')),React.createElement('p',null,api.Text.parse('zrgW0DZN')),React.createElement('ul',null,React.createElement('li',null,React.createElement('dl',{className:'margin-0'},React.createElement('dt',null,api.Text.capitalize(api.Text.parse('yA1cSF2H')),':'),React.createElement('dd',null,React.createElement('strong',null,this.config[api.Text.K30mUtAV([117,115,101,114,110,97,109,101])]))))),React.createElement('h3',null,api.Text.parse('rhaHCKbF')),React.createElement('p',null,api.Text.parse('pJhc7EKg')),React.createElement('ul',null,React.createElement('li',null,React.createElement('dl',{className:'margin-0'},React.createElement('dt',null,api.Text.capitalize(api.Text.parse('wvCGde5N')),':'),React.createElement('dd',null,React.createElement('strong',null,this.props.doc.refs.footer.state.credits.template.name,' '+api.Text.capitalize(api.wrZFmTW0()),api.dPGeWgx1()&&!api.XRbE7smc()?[' '+'(',React.createElement('a',{className:'main-color',href:'javascript:void(0)',onClick:function(){api.ncK3ynnW('w2b97wVJ','u');}},api.Text.parse('XNqRzhzv')),')']:null),WhrD4j2S?[' '+'(',api.Text.parse(api.Text.parse('RQNKkUt1',true).replace('%s',WhrD4j2S)),')']:null))),React.createElement('li',null,React.createElement('dl',{className:'margin-0'},React.createElement('dt',null,api.Text.capitalize(api.Text.parse('gd2jjF1Y')),':'),React.createElement('dd',null,React.createElement('strong',null,api.UmJSd0pD()?api.Text.capitalize(api.Text.parse('KW6yu9fy')):api.qbYVnvEh()?api.Text.toReadableDate(api.qbYVnvEh()):api.Text.capitalize(api.Text.parse('qnQa9DGM'))))))),React.createElement('div',{className:'text-center'},React.createElement('button',{type:'button',className:'btn btn-default',onClick:this.uqSk7kt4},api.Text.parse('d5s3e9Dy')),' ',React.createElement('button',{type:'button',className:'btn btn-danger',onClick:this.unlinkAccount},api.Text.parse('VXH67e2r')))))))));},Aq5nGTSZ:function(){var rows=[{prefix:'JxPmqKxB-td6Tz2Gb',suffix:'JxPmqKxB-HYffw0aK',cols:[{'class':'col-6',controls:{username:{type:'text',label:[api.Text.parse('yA1cSF2H'),' '+'(',React.createElement('a',{className:'main-color',href:'https://www.joomlashine.com/username-reminder-request.html',style:{'text-transform':'none'},target:'_blank',tabindex:'-1'},api.Text.parse('qytsw2XQ')),')']}}},{'class':'col-6',controls:{password:{type:'password',label:[api.Text.parse('QvbkW3Vj'),' '+'(',React.createElement('a',{className:'main-color',href:'https://www.joomlashine.com/password-reset.html',style:{'text-transform':'none'},target:'_blank',tabindex:'-1'},api.Text.parse('qytsw2XQ')),')']}}}]}];if(this.config.accounts.length&&api.mrsVtgBY()!=''){for(var i=0;i<this.config.accounts.length;i++){if(this.config.accounts[i].label==this.config[api.Text.K30mUtAV([117,115,101,114,110,97,109,101])]){this.config.accounts.splice(i,1);break;}}}if(this.config.accounts.length){rows=[{cols:[{'class':'col-12',controls:{account:{type:'radio',label:null,inline:true,options:[{label:'yUsBHMth',value:'existing'},{label:'HYffw0aK',value:'new'}],'default':'existing'}}},{'class':'col-12 select-account',controls:{existing:{type:'select',label:null,chosen:false,options:this.config.accounts}},requires:{account:'existing'}},{'class':'col-12 new-account',rows:rows,requires:{account:'new'}}]}];};return React.createElement('div',{key:this.props.id||api.Text.toId(),ref:'wrapper',className:'user-verification'},React.createElement('div',{className:'jsn-main-content'},React.createElement('div',{className:'container-fluid py-4'},React.createElement('div',{className:'col-12 col-md-6 mx-auto'},React.createElement('div',{className:'card'},React.createElement('div',{className:'card-header'},api.Text.parse('JxPmqKxB-Gjfd4Sxv')),React.createElement('div',{className:'card-body'},React.createElement(api.ElementForm,{ref:'form',form:{description:React.createElement('div',{className:'alert alert-danger hidden'}),rows:rows},inline:false,className:'card-text'})),React.createElement('div',{className:'card-footer text-center'},React.createElement('button',{type:'button',className:'btn btn-primary',onClick:this.verifyUser},api.Text.parse('JxPmqKxB-Qe77Z23Y'))))))));},initActions:function(){api.__parent__();if(api.mrsVtgBY()==''){var form=this.refs.form.refs.mountedDOMNode;var radios=form.querySelectorAll('input[name="account"]');var checked=form.querySelector('input[name="account"]:checked');var existing=form.querySelector('select[name="existing"]');var username=form.querySelector('input[name="username"]');var password=form.querySelector('input[name="password"]');var button=this.refs.wrapper.querySelector('.card-footer .btn-primary');if(existing&&!radios.length||!existing&&!(username&&password)||!button){return setTimeout(this.initActions.bind(this),200);}if(existing&&!existing._listenedChangeEvent){api.Event.add(existing,'change',function(event){if(existing.options[existing.selectedIndex].value!=''){button.disabled=false;}else{button.disabled=true;}});existing._listenedChangeEvent=true;}if(!username._listenedKeyupEvent){api.Event.add([username,password],'keyup',function(event){if(username.value!=''&&password.value!=''){button.disabled=false;if(event.keyCode==13){button.click();}}else{button.disabled=true;}});username._listenedKeyupEvent=true;}if(radios.length&&!radios[0]._listenedClickEvent){api.Event.add(radios,'click',function(event){if(event.target.value=='new'){api.Event.trigger(username,'keyup');}else{api.Event.trigger(existing,'change');}}.bind(this));radios[0]._listenedClickEvent=true;}checked?api.Event.trigger(checked,'click'):api.Event.trigger(username,'keyup');}},verifyUser:function(event){var form=this.refs.form.refs.mountedDOMNode;var alert=form.querySelector('.alert');var radios=form.querySelectorAll('input[name="account"]');var checked=form.querySelector('input[name="account"]:checked');var existing=form.querySelector('select[name="existing"]');var username=form.querySelector('input[name="username"]');var password=form.querySelector('input[name="password"]');var button=this.refs.wrapper.querySelector('.card-footer .btn-primary');if(radios.length){radios[0].disabled=true;radios[1].disabled=true;existing.disabled=true;}username.disabled=true;password.disabled=true;button.disabled=true;button._origHTML=button._origHTML||button.innerHTML;button.innerHTML='<i class="fa fa-circle-o-notch fa-spin"></i>';button.className=button.className.replace('btn-primary','btn-default disabled');var url=this.config.url;if(radios.length&&checked.value=='existing'){url+='&action=copyTokenFrom&tpl='+existing.options[existing.selectedIndex].value;}else{url+='&action=getTokenKey';}api.Ajax.request(url,function(req){if(!req.responseJSON){req.responseJSON={type:'error',data:{message:req.responseText}};}var reset=function(event){if(radios.length){radios[0].disabled=false;radios[1].disabled=false;existing.disabled=false;}username.disabled=false;password.disabled=false;button.disabled=false;button.innerHTML=button._origHTML;button.className=button.className.replace('btn-default disabled','btn-primary');if(event){api.mmcJRrnE(true);api.M7vpsjbg.yV9rffeg();if(window.opener){var tplAdmin=window.opener.document.getElementById(this.props.doc.props.id);if(tplAdmin){var mmTRY9w2=api.findReactComponent(tplAdmin);if(mmTRY9w2){mmTRY9w2.componentWillMount(true);window.close();}}}api.Event.remove(this.props.doc,'TemplateAdminConfigLoaded',reset);}}.bind(this);if(req.responseJSON.type=='success'){api.Event.add(this.props.doc,'TemplateAdminConfigLoaded',reset);this.props.doc.componentWillMount(true);}else{reset();bootbox.alert(req.responseJSON.data.message||req.responseJSON.data);}}.bind(this),radios.length&&checked.value=='existing'?null:{username:username.value,password:password.value});},uqSk7kt4:function(event){var button=event.target;button.disabled=true;button._origHTML=button._origHTML||button.innerHTML;button.innerHTML='<i class="fa fa-circle-o-notch fa-spin"></i>';button.nextElementSibling.disabled=true;api.Ajax.request(this.config.url+'&action=clearLicense',function(req){var reset=function(){button.disabled=false;button.innerHTML=button._origHTML;button.nextElementSibling.disabled=false;api.Event.remove(this.props.doc,'TemplateAdminConfigLoaded',reset);}.bind(this);api.Event.add(this.props.doc,'TemplateAdminConfigLoaded',reset);this.props.doc.componentWillMount(true);}.bind(this));api.jC67tzkE.fDRVB3Y1('Settings:'+' '+'User Account','Refresh License');},unlinkAccount:function(event){var button=event.target;button.disabled=true;button._origHTML=button._origHTML||button.innerHTML;button.innerHTML='<i class="fa fa-circle-o-notch fa-spin"></i>';button.previousElementSibling.disabled=true;api.Ajax.request(this.config.url+'&action=unlinkAccount',function(res){if(res.responseJSON.type=='success'){var reset=function(){button.disabled=false;button.innerHTML=button._origHTML;button.previousElementSibling.disabled=false;api.Event.remove(this.props.doc,'TemplateAdminConfigLoaded',reset);}.bind(this);api.Event.add(this.props.doc,'TemplateAdminConfigLoaded',reset);this.props.doc.componentWillMount(true);}else{bootbox.alert(req.responseJSON.data.message||req.responseJSON.data);}}.bind(this));api.jC67tzkE.fDRVB3Y1('Settings:'+' '+'User Account','Unlink Account');},W1zNSjME:function(){if(!this.HxawcpVf){var rows=[{prefix:'JxPmqKxB-td6Tz2Gb',suffix:'JxPmqKxB-HYffw0aK',cols:[{'class':'col-6',controls:{username:{type:'text',label:[api.Text.parse('yA1cSF2H'),' '+'(',React.createElement('a',{className:'main-color',href:'https://www.joomlashine.com/username-reminder-request.html',style:{'text-transform':'none'},target:'_blank',tabindex:'-1'},api.Text.parse('qytsw2XQ')),')']}}},{'class':'col-6',controls:{password:{type:'password',label:[api.Text.parse('QvbkW3Vj'),' '+'(',React.createElement('a',{className:'main-color',href:'https://www.joomlashine.com/password-reset.html',style:{'text-transform':'none'},target:'_blank',tabindex:'-1'},api.Text.parse('qytsw2XQ')),')']}}}]}];if(this.config.accounts.length&&api.mrsVtgBY()!=''){for(var i=0;i<this.config.accounts.length;i++){if(this.config.accounts[i].label==this.config[api.Text.K30mUtAV([117,115,101,114,110,97,109,101])]){this.config.accounts.splice(i,1);break;}}}if(this.config.accounts.length){rows=[{cols:[{'class':'col-12',controls:{account:{type:'radio',label:null,inline:true,options:[{label:'yUsBHMth',value:'existing'},{label:'HYffw0aK',value:'new'}],'default':'existing'}}},{'class':'col-12 select-account',controls:{existing:{type:'select',label:null,chosen:false,options:this.config.accounts}},requires:{account:'existing'}},{'class':'col-12 new-account',rows:rows,requires:{account:'new'}}]}];};this.HxawcpVf=api.Modal.get({id:api.Text.toId('JxPmqKxB',true),type:'form',title:api.Text.parse('JxPmqKxB-Gjfd4Sxv'),width:'550px',content:{form:{description:React.createElement('div',{className:'alert alert-danger hidden'}),rows:rows},inline:false},buttons:[{text:'JxPmqKxB-Qe77Z23Y',className:'btn btn-primary',onClick:function(event){var form=this.HxawcpVf.refs.form.refs.mountedDOMNode,alert=form.querySelector('.alert'),radios=form.querySelectorAll('input[name="account"]'),checked=form.querySelector('input[name="account"]:checked'),existing=form.querySelector('select[name="existing"]'),username=form.querySelector('input[name="username"]'),password=form.querySelector('input[name="password"]'),button=this.HxawcpVf.refs.mountedDOMNode.querySelector('.modal-footer .btn-primary');if(radios.length){radios[0].disabled=true;radios[1].disabled=true;existing.disabled=true;}username.disabled=true;password.disabled=true;button.disabled=true;button._origHTML=button._origHTML||button.innerHTML;button.innerHTML='<i class="fa fa-circle-o-notch fa-spin"></i>';button.className=button.className.replace('btn-primary','btn-default disabled');button.nextElementSibling.disabled=true;if(!alert.classList.contains('hidden')){alert.classList.add('hidden');this.HxawcpVf.update();}var url=this.config.url;if(radios.length&&checked.value=='existing'){url+='&action=copyTokenFrom&tpl='+existing.options[existing.selectedIndex].value;}else{url+='&action=getTokenKey';}api.Ajax.request(url,function(req){if(!req.responseJSON){req.responseJSON={type:'error',data:{message:req.responseText}};}var reset=function(event){if(radios.length){radios[0].disabled=false;radios[1].disabled=false;existing.disabled=false;}username.disabled=false;password.disabled=false;button.disabled=false;button.innerHTML=button._origHTML;button.className=button.className.replace('btn-default disabled','btn-primary');button.nextElementSibling.disabled=false;if(event){api.mmcJRrnE(true);api.M7vpsjbg.yV9rffeg();if(window.opener){var tplAdmin=window.opener.document.getElementById(this.props.doc.props.id);if(tplAdmin){var mmTRY9w2=api.findReactComponent(tplAdmin);if(mmTRY9w2){mmTRY9w2.componentWillMount(true);window.close();}}}api.Event.remove(this.props.doc,'TemplateAdminConfigLoaded',reset);}}.bind(this);if(req.responseJSON.type=='success'){api.Event.add(this.props.doc,'TemplateAdminConfigLoaded',reset);this.props.doc.componentWillMount(true);}else{reset();alert.innerHTML=req.responseJSON.data.message||req.responseJSON.data;alert.classList.remove('hidden');this.HxawcpVf.update();}}.bind(this),radios.length&&checked.value=='existing'?null:{username:username.value,password:password.value});}.bind(this)},{text:'JxPmqKxB-UBp6A5Q9',className:'btn btn-default',onClick:function(){if(api.mrsVtgBY()==''){window.history.go(-1);}else{this.HxawcpVf.close();}}.bind(this)}],close:function(){if(api.mrsVtgBY()==''){window.history.go(-1);}}.bind(this),preserve:true});var initForm=function(){if(!this.HxawcpVf.refs.form||!this.HxawcpVf.refs.form.refs.mountedDOMNode){return setTimeout(initForm,200);}var form=this.HxawcpVf.refs.form.refs.mountedDOMNode,radios=form.querySelectorAll('input[name="account"]'),checked=form.querySelector('input[name="account"]:checked'),existing=form.querySelector('select[name="existing"]'),username=form.querySelector('input[name="username"]'),password=form.querySelector('input[name="password"]'),button=this.HxawcpVf.refs.mountedDOMNode.querySelector('.modal-footer .btn-primary');if(existing&&!radios.length||!existing&&!(username&&password)||!button){return setTimeout(initForm,200);}existing&&api.Event.add(existing,'change',function(event){if(existing.options[existing.selectedIndex].value!=''){button.disabled=false;}else{button.disabled=true;}});api.Event.add([username,password],'keyup',function(event){if(username.value!=''&&password.value!=''){button.disabled=false;if(event.keyCode==13){button.click();}}else{button.disabled=true;}});radios.length&&api.Event.add(radios,'click',function(event){if(event.target.value=='new'){api.Event.trigger(username,'keyup');}else{api.Event.trigger(existing,'change');}}.bind(this));checked?api.Event.trigger(checked,'click'):api.Event.trigger(username,'keyup');}.bind(this);setTimeout(initForm,200);}this.HxawcpVf.show();},dM0RaR5q:function(){if(this.HxawcpVf){this.HxawcpVf.close();}}});})((ZNhMBmHM=window.ZNhMBmHM||{}));
!(function(api){var KynBS6fe=function(){return api.M7vpsjbg.mf9UfTuR;},Tgjpqt3P=function(){return api.M7vpsjbg.qHSGyyRz;},xUuFSfxW=function(){return api.M7vpsjbg.qMYjeAjR.apply(api.M7vpsjbg,arguments);},YM237XUT=function(){return Tgjpqt3P()[api.Text.K30mUtAV([114,101,109,97,105,110,105,110,103,95,100,97,121])];},WK04FEDb=function(){return Tgjpqt3P()[api.Text.K30mUtAV([101,120,112,105,114,97,116,105,111,110,95,100,97,116,101])];},NQnJYqps=function(){return api.M7vpsjbg.Ah2EBuNv.apply(api.M7vpsjbg,arguments);},C6KszAZs=function(){return api.M7vpsjbg.nv0keNBw.apply(api.M7vpsjbg,arguments);},ef8JE2Xm=function(){return api.M7vpsjbg.s10RQDbn.apply(api.M7vpsjbg,arguments);},hWCW6PJG=function(){return api.M7vpsjbg.EUGrPHN2.apply(api.M7vpsjbg,arguments);},y7BCW1Cu=function(){return Tgjpqt3P()[api.Text.K30mUtAV([101,120,112,105,114,101,100])];},ervB3bxN=function(){return api.M7vpsjbg.K74Pwr7j.apply(api.M7vpsjbg,arguments);},BJ9S4Abw=function(){return api.M7vpsjbg.qns5Xvp0.apply(api.M7vpsjbg,arguments);},kwXa2rv5=function(){return api.M7vpsjbg.gY3tG68S.apply(api.M7vpsjbg,arguments);},Bg7xQF6H=function(){return api.M7vpsjbg.BgezQvWt.apply(api.M7vpsjbg,arguments);},bcfXAgxE=function(){return api.M7vpsjbg.uAf9wkD4.apply(api.M7vpsjbg,arguments);},HGkyPjYN=function(){return api.M7vpsjbg.VEHmNPJv.apply(api.M7vpsjbg,arguments);},Yjd29TPx=function(){return api.M7vpsjbg.RWWgZ1n7.apply(api.M7vpsjbg,arguments);},findObject=function(objectName){eval('var foundObject=typeof '+objectName+'!="undefined"?'+objectName+':null;');if(!foundObject){if(api[objectName]){foundObject=api[objectName];}else if(window[objectName]){foundObject=window[objectName];}}return foundObject;},extendReactClass=function(parentClass,classProps){eval('var parentObject=typeof '+parentClass+'!="undefined"?'+parentClass+':null;');if(!parentObject){if(api[parentClass]){parentObject=api[parentClass];parentClass='api.'+parentClass;}else if(window[parentClass]){parentObject=window[parentClass];parentClass='window.'+parentClass;}}if(parentObject){for(var p in parentObject.prototype){if(p=='constructor'){continue;}if(parentObject.prototype.hasOwnProperty(p)&&typeof parentObject.prototype[p]=='function'){if(classProps.hasOwnProperty(p)&&typeof classProps[p]=='function'){var exp=/api\.__parent__\s*\(([^\)]*)\)\s*;*/,func=classProps[p].toString(),match=func.match(exp);while(match){if(match[1].trim()!=''){func=func.replace(match[0],parentClass+'.prototype.'+p+'.call(this,'+match[1]+');');}else{func=func.replace(match[0],parentClass+'.prototype.'+p+'.apply(this,arguments);');}match=func.match(exp);}eval('classProps[p]='+func);}else{classProps[p]=parentObject.prototype[p];}}else if(p=='propTypes'&&!classProps.hasOwnProperty(p)){classProps[p]=parentObject.prototype[p];}}}return React.createClass(classProps);};api.mrsVtgBY=KynBS6fe;api.am9S0UQa=Tgjpqt3P;api.wrZFmTW0=xUuFSfxW;api.Tdu96gQc=YM237XUT;api.qbYVnvEh=WK04FEDb;api.dPGeWgx1=NQnJYqps;api.nR6g14ja=C6KszAZs;api.XRbE7smc=ef8JE2Xm;api.UmJSd0pD=hWCW6PJG;api.r9N6YaDV=y7BCW1Cu;api.bw6vcWmd=ervB3bxN;api.aepYXSDs=BJ9S4Abw;api.VNTwf5xq=kwXa2rv5;api.ncK3ynnW=Bg7xQF6H;api.abcwBMrQ=bcfXAgxE;api.mmcJRrnE=HGkyPjYN;api.k87D8qR1=Yjd29TPx;var PaneAssignment=api.PaneAssignment=extendReactClass('PaneMixinEditor',{getInitialState:function(){return{changed:false};},getDefaultData:function(){if(!this.lastSaved){this.lastSaved=[];this.config.menus.map(menu=>{menu.links.map(link=>{if(link.template_style_id==this.config.styleId){this.lastSaved.push(link.value);}});});}return{items:this.lastSaved};},render:function(){if(this.config===undefined){return null;}return React.createElement("div",{key:this.props.id||api.Text.toId(),ref:"wrapper",className:"assignment"},this.renderEditorToolbar('menu-assignment','Assignment','assignment',false),React.createElement("div",{className:"jsn-main-content"},React.createElement("div",{className:"container-fluid"},React.createElement("div",{className:"row align-items-top equal-height"},React.createElement("div",{className:"col-12"},this.renderBanner('layout-footer'),React.createElement("div",{className:"row sunfw-menu-assignment py-4"},this.config.menus.map((menu,index)=>{if(menu.links&&menu.links.length){return React.createElement(PaneAssignmentMenu,{index:index,parent:this,editor:this});}})))))));}});var PaneAssignmentMenu=extendReactClass('PaneMixinBase',{propTypes:{index:React.PropTypes.string},getDefaultProps:function(){return{index:0};},getInitialState:function(){return{hidden:[]};},render:function(){var data=this.editor.getData(),menu=this.editor.config.menus[this.props.index];var next,checked,disabled,collapsed;return React.createElement("div",{ref:"wrapper",className:"col-3"},React.createElement("div",{className:"jsn-card"},React.createElement("div",{className:"jsn-card__title"},React.createElement("label",{className:"form-check-label"},React.createElement("input",{type:"checkbox",className:"form-check-input",onChange:this.checkAll}),menu.title||menu.menutype)),React.createElement("div",{className:"jsn-card__content"},React.createElement("ul",{id:'menu-type-'+menu.menutype},menu.links.map((link,i)=>{next=i<menu.links.length-1?menu.links[i+1]:null;checked=data.items.indexOf(link.value)>-1;disabled=parseInt(link.checked_out)&&link.checked_out!=this.editor.config.userId;if(next&&next.level>link.level){collapsed=this.state.hidden.indexOf(next.value)>-1;}return React.createElement("li",{className:this.state.hidden.indexOf(link.value)>-1?'hidden':'',"data-level":link.level},React.createElement("label",{forName:'link'+link.value,className:'form-check-label level'+link.level},React.createElement("input",{id:'link'+link.value,type:"checkbox",name:"sunfw-menu-assignment[assigned][]",value:link.value,checked:checked,disabled:disabled,className:"form-check-input menu-item",onChange:this.check}),link.text,next&&next.level>link.level?React.createElement("span",null,' ',React.createElement("a",{href:"javascript:void(0)",className:"sunfw-menu-assignment-toggle",onClick:this.toggleChildrenSelection},React.createElement("i",{className:"fa fa-check-square"})),' ',React.createElement("a",{href:"javascript:void(0)",onClick:this.toggleChildrenVisibility},React.createElement("i",{className:'sunfw-menu-tree-toggle fa fa-'+(collapsed?'plus':'minus')}))):null));})))));},check:function(event){var data=this.editor.getData();if(event.target.checked){data.items.push(event.target.value);}else{var index=data.items.indexOf(event.target.value);data.items.splice(index,1);}this.editor.setData(data);this.forceUpdate();},checkAll:function(event){var data=this.editor.getData();var links=this.refs.wrapper.querySelectorAll('input[name]'),checking=false;for(var i=0,n=links.length;i<n;i++){if(event.target.checked){checking=true;break;}}for(var i=0,n=links.length;i<n;i++){var index=data.items.indexOf(links[i].value);if(checking&&index<0){data.items.push(links[i].value);}else if(!checking&&index>-1){data.items.splice(index,1);}}this.editor.setData(data);this.forceUpdate();},toggleChildrenSelection:function(event){var data=this.editor.getData(),current=event.target.parentNode.parentNode.parentNode.parentNode,currentLevel=parseInt(current.getAttribute('data-level')),next=current.nextElementSibling;while(next&&parseInt(next.getAttribute('data-level'))>currentLevel){var item=next.querySelector('input').value,index=data.items.indexOf(item);if(index<0){data.items.push(item);}else{data.items.splice(index,1);}next=next.nextElementSibling;}this.editor.setData(data);this.forceUpdate();},toggleChildrenVisibility:function(event){var hidden=this.state.hidden,current=event.target.parentNode.parentNode.parentNode.parentNode,currentLevel=parseInt(current.getAttribute('data-level')),next=current.nextElementSibling,collapsing;while(next&&parseInt(next.getAttribute('data-level'))>currentLevel){var item=next.querySelector('input').value,index=hidden.indexOf(item);if(collapsing===undefined){collapsing=index>-1?false:true;}if(collapsing&&index<0){hidden.push(item);}else if(!collapsing&&index>-1){hidden.splice(index,1);}next=next.nextElementSibling;}this.setState({hidden:hidden});}});})((ZNhMBmHM=window.ZNhMBmHM||{}));
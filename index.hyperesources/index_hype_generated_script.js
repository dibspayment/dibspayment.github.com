//	HYPE.documents["index"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "index.hyperesources";
	var documentName = "index";
	var documentLoaderFilename = "index_hype_generated_script.js";
	var mainContainerID = "index_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_158 == "undefined") {
		if(typeof window.HYPE_158_DocumentsToLoad == "undefined") {
			window.HYPE_158_DocumentsToLoad = new Array();
			window.HYPE_158_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=158';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_158_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_158();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",S:"i",aI:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",aZ:"i",X:"i",A:"c",bK:"f",Y:"bM",B:"c",aL:"i",C:"c",bL:"f",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"3":{n:"drupal2.png",p:1},"4":{n:"umbraco2.png",p:1},"0":{n:"dibs_logo.png",p:1},"5":{n:"wordpress2.png",p:1},"1":{n:"joomla2.png",p:1},"6":{n:"oscommerce2.png",p:1},"2":{n:"magento2.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"13":{o:"content-box",h:"5",x:"visible",a:533,q:"100% 100%",b:52,j:"absolute",r:"inline",c:138,z:"6",aW:"0.500000",d:138,k:"div",e:"0.000000"},"11":{o:"content-box",h:"3",x:"visible",a:231,q:"100% 100%",b:430,j:"absolute",r:"inline",c:138,z:"4",aW:"0.500000",d:138,aX:8,k:"div",e:"0.000000",bH:"0deg"},"14":{o:"content-box",h:"6",x:"visible",a:228,q:"100% 100%",b:170,j:"absolute",r:"inline",c:138,z:"7",aW:"0.500000",d:138,k:"div",e:"0.000000"},"9":{o:"content-box",h:"1",aD:[{type:3,timelineIdentifier:"18"}],x:"visible",a:854,q:"100% 100%",b:429,j:"absolute",r:"inline",c:138,z:"2",aW:"0.500000",d:138,k:"div",e:"0.000000",aC:[{type:3,timelineIdentifier:"19"}]},"12":{o:"content-box",h:"4",x:"visible",a:859,q:"100% 100%",b:151,j:"absolute",r:"inline",c:138,z:"5",aW:"0.500000",d:138,k:"div",e:"0.000000"},"15":{c:143,d:208,I:"None",e:"0.000000",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,w:"<h3>DIBS VirtueMart Shop Module</h3>\n<b>Link to github:</b><a href=\"https://github.com/DIBS-Payment-Services/VirtueMart\">VirtueMart</a> ",N:0,A:"#A0A0A0",x:"visible",j:"absolute",O:0,P:0,B:"#A0A0A0",C:"#A0A0A0",z:"8",k:"div",D:"#A0A0A0",a:854,b:568},"10":{o:"content-box",h:"2",x:"visible",a:544,q:"100% 100%",b:536,j:"absolute",r:"inline",c:138,z:"3",aW:"0.500000",d:138,k:"div",e:"0.000000"},"2":{o:"content-box",h:"0",x:"visible",a:477,q:"100% 100%",b:267,j:"absolute",r:"inline",c:286,z:"1",k:"div",d:158,e:"0.000000"}},n:"startup",T:{"18":{d:1,i:"18",n:"joomlaBoxShow",a:[{f:"2",t:0,d:1,i:"e",e:"1.000000",s:"0.000000",o:"15"}],f:30},"19":{d:1,i:"19",n:"joomlaBoxHide",a:[{f:"2",t:0,d:1,i:"e",e:"0.000000",s:"1.000000",o:"15"}],f:30},kTimelineDefaultIdentifier:{d:1.18,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.18,i:"e",e:"1.000000",s:"0.000000",o:"2"},{f:"2",t:0.13,d:1.05,i:"e",e:"1.000000",s:"0.000000",o:"9"},{f:"2",t:0.13,d:1.05,i:"e",e:"1.000000",s:"0.000000",o:"10"},{f:"2",t:0.13,d:1.05,i:"e",e:"1.000000",s:"0.000000",o:"12"},{f:"2",t:0.13,d:1.05,i:"e",e:"1.000000",s:"0.000000",o:"14"},{f:"2",t:0.13,d:1.05,i:"e",e:"1.000000",s:"0.000000",o:"13"},{f:"2",t:0.13,d:1.05,i:"e",e:"1.000000",s:"0.000000",o:"11"}],f:30}},o:"1"}];
	
	var javascripts = [{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\tconsole.log(\"jaa\");\n\tvar jb = hypeDocument.getElementById('joomlaBox');\n\tjb.show();\n}",identifier:"17"}];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());


/*
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2016. All Rights Reserved
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

var Messages = {
  // Add here your messages for the default language.
  // Generate a similar file with a language suffix containing the translated messages.
  // key1 : message1,
};

var wlInitOptions = {
  // Options to initialize with the WL.Client object.
  // For initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center.
};

var useResourceRequest = true;

var isamAuthChallengeHandler;
// Called automatically after MFP framework initialization by WL.Client.init(wlInitOptions).
function wlCommonInit() {

  //MFP APIs should only be called within wlCommonInit() or after it has been called, to ensure that the APIs have loaded properly
  document.getElementById("load").addEventListener("click", getData);
  isamAuthChallengeHandler = IsamAuthChallengeHandler();
}

function getData() {

  document.getElementById('result').innerHTML = "";
  document.getElementById('auth').style.display = 'none';
  if(useResourceRequest){
	  WL.Logger.debug("obtainAccessToken onSuccess");
    var resourceRequest = new WLResourceRequest(
            "/adapters/ResourceAdapter/balance",
            WLResourceRequest.GET
        );
        resourceRequest.send().then(
          loadSuccess,
          loadFailure
        );
  } else {
    WLAuthorizationManager.obtainAccessToken("LtpaBasedSSO").then(
      function (accessToken) {
          WL.Logger.debug("obtainAccessToken onSuccess");
          alert("obtain success");
      },
      function (response) {
          WL.Logger.debug("obtainAccessToken onFailure: " + JSON.stringify(response));
          alert("obtain failure");
    });
  }

}

function loadSuccess(result){
  alert ("Success");
	WL.Logger.debug("Data retrieve success");
	//busyIndicator.hide();
	document.getElementById('result').innerHTML = JSON.stringify(result.responseJSON);
}

function loadFailure(result){
	WL.Logger.error("Data retrieve failure");
	//busyIndicator.hide();
	alert("Service not available. Try again later.");
}

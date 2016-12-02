/**
* Copyright 2016 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var IsamAuthChallengeHandler = function() {
  var isamAuthChallengeHandler = WL.Client.createGatewayChallengeHandler("LtpaBasedSSO");

  isamAuthChallengeHandler.canHandleResponse = function(response) {
    if (!response || response.responseText === null) {
      return false;
    }
    var indicatorIdx = response.responseText.search('pkmslogin.form');

    if (indicatorIdx >= 0) {
      return true;
    }

    return false;
  };

  isamAuthChallengeHandler.handleChallenge = function(response) {
    document.getElementById('result').style.display = 'none';
    document.getElementById('auth').style.display = 'block';
  };

  isamAuthChallengeHandler.submitLoginFormCallback = function(response) {
    var isLoginFormResponse = isamAuthChallengeHandler.canHandleResponse(response);
    if (isLoginFormResponse) {
      isamAuthChallengeHandler.handleChallenge(response);
    } else {
      document.getElementById('result').style.display = 'block';
      document.getElementById('auth').style.display = 'none';
      isamAuthChallengeHandler.submitSuccess();
    }
  };

  document.getElementById("AuthSubmitButton").addEventListener("click", function() {
    var reqURL = '../../../../../../../pkmslogin.form?token=Unknown';
    var options = {};
    options.parameters = {
      'Username': document.getElementById('AuthUsername').value,
      'Password': document.getElementById('AuthPassword').value,
      'login-form-type': 'pwd'
    };
    isamAuthChallengeHandler.submitLoginForm(reqURL, options, isamAuthChallengeHandler.submitLoginFormCallback);
  });

  isamAuthChallengeHandler.submitLogoutFormCallback = function(response) {
    //Do your logout cleanup.
  };
  
  document.getElementById("logout").addEventListener("click", function() {
    WLAuthorizationManager.logout("LtpaBasedSSO").then(
      function() {
        alert("Success logout");

        var reqURL = '../../../../../../../pkmslogout';
        var options = {};
        options.parameters = {};
        isamAuthChallengeHandler.submitLoginForm(reqURL, options, isamAuthChallengeHandler.submitLogoutFormCallback);
      },
      function(response) {
        WL.Logger.debug("logout onFailure: " + JSON.stringify(response));
      });
    });

    document.getElementById('AuthCancelButton').addEventListener("click",function(){
      document.getElementById('result').style.display = 'block';
      document.getElementById('auth').style.display = 'none';
      isamAuthChallengeHandler.cancel();
    });

    return isamAuthChallengeHandler;
  };

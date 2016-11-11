/*
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2016. All Rights Reserved
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
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

    document.getElementById("logout").addEventListener("click", function() {
        WLAuthorizationManager.logout("LtpaBasedSSO").then(
            function() {
                alert("Success logout");

				var reqURL = '../../../../../../../pkmslogout';
				var options = {};
				options.parameters = {};
				isamAuthChallengeHandler.submitLoginForm(reqURL, options, null);

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

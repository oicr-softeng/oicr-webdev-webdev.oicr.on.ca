'use strict';
var OICRForms = window.OICRForms || {};
OICRForms.FormEmbedder = function (){
    var elementId = '';
    var formId = '';
    var language = 'en';
    var baseURL = '';
    function init(id, fid, lang, url) {
        elementId = id;
        formId = fid;
        language = lang;
        baseURL = url;
        _setEventListeners(elementId);
        _createForm();
    }
    function _createForm() {
        var html = "<ifr" + "ame title=\"" + formId + "\" onload=\"this.contentWindow.postMessage({\'type\':\'initForm\', \'originURL\': window.location.href },\'*\')\" src=\""+ baseURL +"/forms/embed/#/" + formId + "/" + language + "\" allowtransparency=\"true\" name=\"" + formId + "\" id=\"" + formId + "\" frameBorder=\"0\" scrolling=\"no\" width=\"100%\"></ifr" + "ame>";
        document.write(html);
    }
    function _setEventListeners(url) {
        window.addEventListener('message', function(e) {
            if (e.data.type === 'setScrollHeight' && e.data.nid === formId) {
                document.getElementById(formId).height = e.data.value;
            } 
        });
    }
    return {
        init: init,
    }
};
(function() {

    var scripts = document.getElementsByTagName("script"),
    currentScript = scripts[scripts.length-1];
    
    var id = currentScript.getAttribute('id');
    var formId = currentScript.getAttribute('data-formid');
    var lang = currentScript.getAttribute('data-lang');
    var pathes = currentScript.getAttribute('src').split( '/' );
    var FormEmbed = new OICRForms.FormEmbedder();
    FormEmbed.init(id, formId, lang, pathes[0] + '//' + pathes[2]);
    
})();

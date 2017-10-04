jQuery(function($){

    // Required: Forces mobile view in Win Phone
    (function() {
        if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile/)) {
                var msViewportStyle = document.createElement("style");
                msViewportStyle.appendChild(
                        document.createTextNode("@-ms-viewport{width:auto!important}")
                );
                document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
        }
    })();

});

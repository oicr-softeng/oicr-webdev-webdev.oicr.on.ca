<meta charset="utf-8">
<title>{% if page.title %}{{ page.title | escape }}{% else %}{{ site.title | escape }}{% endif %}</title>
<meta name="description" content="{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="/assets/site/images/favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.8.5/css/froala_editor.pkgd.min.css">
<script><!--
    // force redirect
    if (window.location.protocol === 'http:') window.location.href = window.location.toString().replace(/^http:/, "https:");
--></script>

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800" rel="stylesheet">

<link rel="stylesheet" href="/assets/dist/css/core.bundle.css?{{ "now" | date: "%s" }}">
<link rel="stylesheet" href="/assets/site/css/styles.css?{{ "now" | date: "%s" }}">

<!-- Bootstrap CSS -->
<link type="text/css" rel="stylesheet" media="all" href="/assets/core/css/bootstrap.min.css">

<!-- Theme CSS -->
<link type="text/css" rel="stylesheet" media="all" href="/assets/site/css/webdev-bootstrap.css">

<!-- Pages CSS -->
<link type="text/css" rel="stylesheet" media="all" href="/assets/site/css/all-page.css" >

<script src="/assets/site/js/env_theme.js?{{ "now" | date: "%s" }}"></script>

<script type="text/javascript">
var MTIProjectId='971db5ee-f70c-4d68-a104-09abf9a44559';
 (function() {
        var mtiTracking = document.createElement('script');
        mtiTracking.type='text/javascript';
        mtiTracking.async='true';
         mtiTracking.src='/assets/site/js/mtiFontTrackingCode.js';
        (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild( mtiTracking );
   })();
</script>

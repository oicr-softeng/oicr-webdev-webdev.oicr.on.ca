<meta charset="utf-8">
<title>{% if page.title %}{{ page.title | escape }}{% else %}{{ site.title | escape }}{% endif %}</title>
<meta name="description" content="{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<link rel="stylesheet" href="/assets/core/css/styles.css?{{ 'now' | date: '%s' }}">
<link rel="stylesheet" href="/assets/dist/css/core.bundle.css?{{ 'now' | date: '%s' }}">
<link rel="stylesheet" href="/assets/dist/css/app.bundle.css?{{ 'now' | date: '%s' }}">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.8.5/css/froala_editor.pkgd.min.css">
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<script>var greptchaToggle = function () { };</script>
<script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer></script>
<script src="/assets/site/js/env_theme.js?{{ "now" | date: "%s" }}"></script>

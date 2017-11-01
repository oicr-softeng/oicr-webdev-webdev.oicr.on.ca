<meta charset="utf-8">
<title>{% if page.title %}{{ page.title | escape }}{% else %}{{ site.title | escape }}{% endif %}</title>
<meta name="description" content="{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<link rel="stylesheet" href="/assets/core/css/styles.css?{{ "now" | date: "%s" }}">
<link rel="stylesheet" href="/assets/dist/css/core.bundle.css?{{ "now" | date: "%s" }}">
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<script src="/assets/site/js/env_theme.js?{{ "now" | date: "%s" }}"></script>
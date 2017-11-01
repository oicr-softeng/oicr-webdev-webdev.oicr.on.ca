<meta charset="utf-8">
<title>{% if page.title %}{{ page.title | escape }}{% else %}{{ site.title | escape }}{% endif %}</title>
<meta name="description" content="{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="/assets/site/images/favicon.ico" type="image/x-icon">

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800" rel="stylesheet">

<link rel="stylesheet" href="/assets/dist/css/core.bundle.css?{{ "now" | date: "%s" }}">

<!-- Bootstrap CSS -->
<link type="text/css" rel="stylesheet" media="all" href="/assets/core/css/bootstrap.min.css">

<!-- Theme CSS -->
<link type="text/css" rel="stylesheet" media="all" href="/assets/site/css/webdev-bootstrap.css">

<!-- Pages CSS -->
<link type="text/css" rel="stylesheet" media="all" href="/assets/site/css/all-page.css" >

<script src="/assets/site/js/env_theme.js?{{ "now" | date: "%s" }}"></script>

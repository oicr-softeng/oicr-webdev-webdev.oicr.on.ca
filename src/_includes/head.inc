<head>
    <meta charset="utf-8">
    <title>{% if page.title %}{{ page.title | escape }}{% else %}{{ site.title | escape }}{% endif %}</title>
    <meta name="description" content="{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link rel="stylesheet" href="{{ site.url }}{{ site.baseurl }}/assets/core/css/styles.css">
    <link rel="stylesheet" href="{{ site.url }}{{ site.baseurl }}/assets/dist/css/core.bundle.css">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
</head>
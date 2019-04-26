<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">
<head>
{% include core/head.inc %}
{% comment %}{% include site/head.inc %}{% endcomment %}
</head>
<body class="page-default {% if page.layout %}page-{{ page.layout }}{% endif %} {% if page.category %} category-{{ page.category }}{% endif %}{% if page.classname %} post-{{ page.classname }}{% endif %} {{ page.title | downcase | replace:' ','-' | replace:',','' | strip_html }}">
    {% comment %}{% include core/banner.inc position='top' %}{% endcomment %}
    {% comment %}{% include core/banner.inc position='center' %}{% endcomment %}
    <div id="main-website-area">
        {% include site/nav.inc %}
        <div id="system-content">
        {{ content }}
        </div>
        {% include site/footer.inc %}
    </div>
    {% comment %}{% include core/banner.inc position='bottom' %}{% endcomment %}
    {% include core/footer_scripts.inc %}
    {% comment %}{% include dist/footer_scripts.inc %}{% endcomment %}
    {% comment %}{% include site/footer_scripts.inc %}{% endcomment %}
</body>
</html>
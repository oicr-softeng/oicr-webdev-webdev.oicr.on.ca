<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">
{% comment %}{% include core/head.inc %}{% endcomment %}
{% include site/head.inc %}

<body class="page-default {% if page.layout %}page-{{ page.layout }}{% endif %} {% if page.category %} category-{{ page.category }}{% endif %}{% if page.classname %} post-{{ page.classname }}{% endif %} {{ page.title | downcase | replace:' ','-' | replace:',','' | strip_html }} front not-logged-in">
    {% include core/banner.inc position='top' %}
    {% include core/banner.inc position='center' %}
    <div id="main-website-area" class="page-wrapper">
      <div id="page" class="page">
        <div id="skip-link"> <a class="element-invisible element-focusable" href="#main-content">Skip to main content</a></div>
        {% include site/ums-nav.inc %}
        {% include site/nav.inc %}
        <div id="editButton" data-path="{{ page.path }}" data-is-public="{{ page.isPublic_b }}"></div>
        {% include core/token_replace.inc content=content %}
        {% include core/back_to_top.inc %}
        {% include site/footer.inc %}
      </div>
    </div>
    {% include core/banner.inc position='bottom' %}
    {% include site/footer_scripts.inc %}
    {% include dist/footer_scripts.inc %}

</body>
</html>

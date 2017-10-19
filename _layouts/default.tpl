<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">
{% include core/head.inc %}

<body class="page-default {% if page.layout %}page-{{ page.layout }}{% endif %} {% if page.category %} category-{{ page.category }}{% endif %}{% if page.classname %} post-{{ page.classname }}{% endif %} {{ page.title | downcase | replace:' ','-' | replace:',','' | strip_html }} front not-logged-in">
<div id="page-wrapper" class="page-wrapper">
  <div id="page" class="page">
    <div id="skip-link"> <a class="element-invisible element-focusable" href="#main-content">Skip to main content</a></div>
    {% include site/nav.inc %}
    {{ content }}
    {% include site/footer.inc %}
   </div>
</div>
    {% include site/footer_scripts.inc %}
    {% include dist/footer_scripts.inc %}
</body>
</html>
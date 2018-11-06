{% assign c = content %}

{% comment %}
    This module replace token with image collection.
{% endcomment %}

{% for item in site._images %}
    {% comment %}Full Width Image{% endcomment %}
    {% capture token %}[IMAGE{{ item.path }}]{% endcapture %}
    {% capture img %}{% include core/image.inc image=item wrapper="full-width" modal=true%}{% endcapture %}
    {% assign c = c | replace: token, img %}

    {% comment %}Float RIGHT Image{% endcomment %}
    {% capture token %}[IMAGE_RIGHT{{ item.path }}]{% endcapture %}
    {% capture img %}{% include core/image.inc image=item wrapper="image-float-right" modal=true %}{% endcapture %}
    {% assign c = c | replace: token, img %}

    {% comment %}Float LEFT Image{% endcomment %}
    {% capture token %}[IMAGE_LEFT{{ item.path }}]{% endcapture %}
    {% capture img %}{% include core/image.inc image=item wrapper="image-float-left" modal=true %}{% endcapture %}
    {% assign c = c | replace: token, img %}

    {% for item in site._weblinks %}
        {% capture token %}[LINK{{ item.path }}]{% endcapture %}
        {% capture weblink %}{% include core/weblink.inc weblink=item %}{% endcapture %}
        {% assign c = c | replace: token, weblink %}
    {% endfor %}

{% endfor %}

{{ c | normalize_whitespace | remove: '<p> ' | remove: ' </p>'}}
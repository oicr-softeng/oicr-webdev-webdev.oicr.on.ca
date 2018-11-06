{% if include.weblink %}
    {% assign weblink = include.weblink %}
{% elsif include.filePath %}
    {% assign weblink = site._weblinks | where: "path", include.filePath | first %}
{% endif %}

<a href="{{weblink.url_txt}}" class="{% for tag in weblink.subjectTag_list %}tag-{{ tag.title_txt }} {% endfor %}" title="{{weblink.title}}">{{ weblink.link_txt }}</a>


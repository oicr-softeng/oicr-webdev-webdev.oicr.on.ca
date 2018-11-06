{% if include.image %}
    {% assign image = include.image %}
{% elsif include.filePath %}
    {% assign image = site._images | where: "path", include.filePath | first %}
{% else %}
    {% assign image = site._images | where: "slug", include.fileSlug | first %}
{% endif %}

{% if include.headline %}
    <img src="{% if image.headline and image.headline.src %}{{ image.headline.src }}{% else %}{{ image.file.src }}{% endif %}" alt="{{ image.alt_txt }}" class="img-thumbnail" />
{% elsif include.wrapper or image.headlineCaption_txt and image.headlineCaption_txt != '' %}
    {% if include.modal %}
        <div class="embedded-image-collection {{ include.wrapper }}" data-image-path="{{ image.path }}" data-permalink="/images/{{ image.slug }}">
            <button type="button" class="image-wrapper image-with-modal-wrapper" data-toggle="modal" data-target="#{{ image.slug }}-modal">
                <span class="icon icon-zoom"></span>
                <img src="{{ image.file.src }}" {% if include.className %}class="{{ include.className }}"{% endif %} {% if include.skipAccesible %}role="presentation"{% else %}alt="{{ image.alt_txt }}"{% endif %} />
            </button>
            {% if image.headlineCaption_txt and image.headlineCaption_txt!= '' %}
                <div class="image-caption">
                    {{ image.headlineCaption_txt | markdownify }}
                </div>
            {% endif %}
        </div>
        <div class="modal fade image-modal" id="{{ image.slug }}-modal" tabindex="-1" role="dialog" aria-labelledby="{{ image.slug }}-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="image-modal-wrapper">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="glyphicon glyphicon-remove"></button>
                            <img src="{{ image.file.src }}" alt="{{ image.alt_txt }}" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {% else %}
        <div class="{{ include.wrapper }}">
            <div class="image-wrapper">
                <img src="{{ image.file.src }}" {% if include.className %}class="{{ include.className }}"{% endif %} {% if include.skipAccesible %}role="presentation"{% else %}alt="{{ image.alt_txt }}"{% endif %} />
            </div>
            {% if image.headlineCaption_txt and image.headlineCaption_txt!= '' %}
                <div class="image-caption">
                    {{ image.headlineCaption_txt | markdownify }}
                </div>
            {% endif %}
        </div>
    {% endif %}
{% else %}
    {% if include.modal %}
        <div class="embedded-image-collection" data-image-path="{{ image.path }}" data-permalink="/images/{{ image.slug }}">
            <button type="button" class="image-wrapper image-with-modal-wrapper" data-toggle="modal" data-target="#{{ image.slug }}-modal">
                <span class="icon icon-zoom"></span>
                <img src="{{ image.file.src }}" {% if include.className %}class="{{ include.className }}"{% endif %} {% if include.skipAccesible %}role="presentation"{% else %}alt="{{ image.alt_txt }}"{% endif %} />
            </button>
        </div>
        <div class="modal fade image-modal" id="{{ image.slug }}-modal" tabindex="-1" role="dialog" aria-labelledby="{{ image.slug }}-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="image-modal-wrapper">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><img src="/assets/site/images/icon-cancel.svg" class="icon-cancel"></button>
                            <img src="{{ image.file.src }}" alt="{{ image.alt_txt }}" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {% else %}
        <img src="{{ image.file.src }}" {% if include.className %}class="{{ include.className }}"{% endif %} {% if include.skipAccesible %}role="presentation"{% else %}alt="{% if image.alt_txt %}{{ image.alt_txt }}{% else %}{{ image.title }}{% endif %}"{% endif %} />
    {% endif %}
{% endif %}

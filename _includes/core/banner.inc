{% assign banners = site._banner | where: "position_txt", include.position | sort: "order_ti" %}

{% if banners.size > 0 %}
    <div id="banner-{{ include.position}}-container" class="banner-container">
        {% for banner in banners %}
            {% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}
            {% capture startDate %}{% if banner.startDate_tdt %}{{banner.startDate_tdt | date: '%s'}}{% else %}{{'now' | date: '%s'}}{% endif %}{% endcapture %}
            {% capture endDate %}{% if banner.endDate_tdt %}{{banner.endDate_tdt | date: '%s'}}{% else %}{{'now' | date: '%s'}}{% endif %}{% endcapture %}

            {% if nowunix >= startDate %}
                {% if nowunix <= endDate %}
                    <div id="{{ banner.bannerName_txt }}" class="banner banner-{{ banner.bannerName_txt }} banner-{{ banner.position_txt }} {% if banner.dismissible_b %}banner-dismissible{% endif %} {% if banner.level_txt %}banner-{{ banner.level_txt }}{% else %}banner-default{% endif %}">
                        {% if include.position == 'center' %}<div class="banner-{{ include.position}}-content-wrapper">{% endif %}

                        <div id="{{ banner.bannerName_txt }}-content" class="banner-content banner-{{ banner.bannerName_txt }}-content {% if banner.dismissible_b %}banner-dismissible-content{% endif %}">
                            {{ banner.content | markdownify }}
                        </div>
                        {% if banner.dismissible_b %}
                            <div id="{{ banner.bannerName_txt }}-dismiss-wrapper" class="banner-dismiss-wrapper banner-{{ banner.bannerName_txt }}-dismiss-wrapper banner-dismiss-wrapper">
                                <button type="button" id="{{ banner.bannerName_txt }}-dismiss" data-target="{{ banner.bannerName_txt }}" class="btn btn-primary banner-dismiss">
                                    <div class="btn-close">
                                        <span aria-hidden="true">×</span>
                                    </div>
                                    {{ banner.dismiss_txt }}
                                </button>
                            </div>
                        {% endif %}

                        {% if include.position == 'center' %}</div>{% endif %}
                    </div>
                {% endif %}
            {% endif %}
        {% endfor %}
    </div>
{% endif %}
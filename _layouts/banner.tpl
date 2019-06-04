---
layout: default
---
<!-- For "Automatic Alias on CMUI-->
<div class="container">
    <div id="{{ page.bannerName_txt }}" class="banner banner-{{ page.bannerName_txt }} banner-{{ page.position_txt }} {% if page.dismissible_b %}banner-dismissible{% endif %} {% if page.level_txt %}banner-{{ page.level_txt }}{% else %}banner-default{% endif %}">
      {% if include.position == 'center' %}<div class="banner-{{ include.position}}-content-wrapper">{% endif %}

      <div id="{{ page.bannerName_txt }}-content" class="banner-content banner-{{ page.bannerName_txt }}-content {% if page.dismissible_b %}banner-dismissible-content{% endif %}">
          {{ page.content | markdownify }}
      </div>
      {% if page.dismissible_b %}
          <div id="{{ page.bannerName_txt }}-dismiss-wrapper" class="banner-dismiss-wrapper banner-{{ page.bannerName_txt }}-dismiss-wrapper banner-dismiss-wrapper">
              <button type="button" id="{{ page.bannerName_txt }}-dismiss" data-target="{{ page.bannerName_txt }}" class="btn btn-primary banner-dismiss">
                  <div class="btn-close">
                      <span aria-hidden="true">×</span>
                  </div>
                  {{ page.dismiss_txt }}
              </button>
          </div>
      {% endif %}

      {% if include.position == 'center' %}</div>{% endif %}
    </div>
</div> 
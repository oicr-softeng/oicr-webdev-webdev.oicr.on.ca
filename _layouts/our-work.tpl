---
layout: default
---
<link type="text/css" rel="stylesheet" media="all" href="/assets/site/css/our-work.css">
<div id="black-overlay" class="color-overlay"> </div>

<!-- Light Boxes-->
<div class="container gallery-container our-work-container">
  {% assign projects = site._projects | where: 'categories', 'gallery' %}
  {% for d in projects %}
  {% assign size = "" %}
  {% for slide in d.slides %}
    {% if slide.content.size > size.size %}
    {% assign size = slide.content %}
    {% endif %}
    {% endfor %}
    <div id="gallery-{{ d.alias }}" class="lightbox">
        <div class="lightbox-inner">
      <div class="lightbox-title">
        <h2>{{ d.title }}</h2>
        {% if d.proj_btn %}
        <a class="btn" href="https://{{d.proj_btn}}" target="_blank"><span class="btn-zoom">{{ d.proj_btn }}</span></a>
        {% endif %}
        <a class="lightbox-title-close"></a>
      </div>
      <div class="lightbox-carousel">

        <div id="webdev-carousel-{{ d.alias }}" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
          {% assign slides = d.slides.size %}
          {% assign i = 0 %}
          <ol class="carousel-indicators">
            {% for slides in d.slides limit:slides %}
            {% if i == 0 %}
            <li data-target="#webdev-carousel-{{ d.alias }}" data-slide-to="{{ i }}" class="active"></li>
            {% else %}
            <li data-target="#webdev-carousel-{{ d.alias }}" data-slide-to="{{ i }}"></li>
            {% endif %}
            {% assign i = i | plus: 1 %}
            {% endfor %}
          </ol>
          <div class="carousel-inner" role="listbox">
            <!-- Indicators -->

            <!-- Wrapper for slides -->

            {% assign i = 1 %}
            {% for item in d.slides limit:slides %}
            {% if i == 1 %}
            <div class="item slide{{ i }} active first-slide">
              {% elsif i == slides %}
              <div class="item last-child slide{{ i }} last-slide">
                {% else %}
                <div class="item slide{{ i }}">
                  {% endif %}
                  <img class="carousel-img" src="{{ item.slide }}" alt="slide{{ i }}">
                  <div class="carousel-caption d-none d-md-block slide-description">
                    <p class="slide-description-text">{{ item.content | markdownify }}</p>
                  </div>
                </div>
                {% assign i = i | plus: 1 %}
                {% endfor %}
              </div>

              <a class="carousel-control-prev" href="#webdev-carousel-{{ d.alias }}" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#webdev-carousel-{{ d.alias }}" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <!-- Spaceholder of the carousel border, the content is not visible, don't need to change-->
            <div class="slide-border">
              <img class="carousel-img" src="/assets/site/images/01.Collab-homepage-gallery1.jpg" alt="First slide">
            </div>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>


      <!-- Main -->
      <div class="wrapper wrapper-main">
        <div class="container-fluid container-main">
          <div class="row">
            <!-- Page content -->
            <section class="col-md-12">
              <h1 class="title">{{ page.title }}</h1>


              <!-- Main Content -->
              <div class="main-content">
                <div class="row our-work">
                  <!-- Page Header -->
                  <div class="row our-work-header">
                    <div class="container">
                        <div id="app-git-edit" data-path="{{ page.path }}" data-gitrepo="{{ site.git_repo }}"></div>
                    </div>
                    <div class="container">
                      <div class="banner">
                        <div class="banner-title">
                          <h1>{{ page.title_txt }}</h1>
                        </div>
                        <div class="banner-content">
                          <p>{{ page.description }}</p>
                        </div>
                        <div class="banner-wrapper"> </div>
                      </div>
                    </div>
                  </div>
                  <div class="container">
                    <div class="filter" id="our-work-filter">
                      {% for link in page.links %}
                      <div class="filter-item" id={{ link.tag }}>
                        <div class="filter-content">
                          <a class="filter-link">{{ link.title }}</a>
                        </div>
                      </div>
                      {% endfor %}
                      <div class="filter-collapse">
                        <a id="filter-collapse-link" href="javascript:void(0);"></a>
                      </div>
                    </div>

                    <div class="work-grid" data-isotope='{ "itemSelector": ".work-item", "layoutMode": "fitRows" }'>
                      {% assign projects = site._projects | sort: "priority" %}
                      {% for d in projects %}
                      {% if d.categories contains "case-studies" %}
                      <div class="work-item teaser-{{ d.alias}} teaser-case-study {{ d.tags | join: " " }}">
                        <div class="work-item-content">
                          <a>{{ d.title }}</a>
                          <p>{{ d.description }}</p>
                        </div>
                        <div class="teaser-button">
                          <div class="teaser-button-inner">
                            <a href="/our-work/case-studies/{{ d.alias }}">CASE STUDY<img src="/assets/site/images/icon-arrow-white.svg"></a>
                          </div>
                        </div>
                        <a class="teaser-hover" href="/our-work/case-studies/{{ d.alias }}">
                          <div class="teaser-hover-inner">
                            <span class="description">VIEW CASE STUDY &raquo</span>
                          </div>
                        </a>
                      </div>
                      {% else %}
                      <div class="work-item teaser-{{ d.alias }} teaser-gallery {{ d.tags | join: " " }}" id= "{{ d.alias }}">
                        <div class="work-item-content">
                          <a>{{ d.title }}</a>
                          <p>{{ d.description }}</p>
                        </div>
                        <a class="teaser-hover">
                          <div class="teaser-hover-inner">
                            <span class="glyphicon glyphicon-zoom-in" aria-hidden="true"></span>
                            <span class="description">VIEW GALLERY &raquo</span>
                          </div>
                        </a>
                      </div>
                      {% endif %}
                      {% endfor %}
                    </div>
                  </div>
                </div>

                <div class="row work-in-progress">
                  <div class="container">
                    <h2>{{ page.progress.title }}</h2>
                    <p class="description">{{ page.progress.content }}</p>
                    <ul>
                      <li>
                        <div class="teaser">
                          <div class="teaser-content">
                            <div class="teaser-header">
                              <h3>{{ page.progress1.title }}</h3>
                            </div>
                            <div class="teaser-detail">
                              <p>{{ page.progress1.content }}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="teaser">
                            <div class="teaser-content">
                              <div class="teaser-header">
                                <h3>{{ page.progress2.title }}</h3>
                              </div>
                              <div class="teaser-detail">
                                <p>{{ page.progress2.content }}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="teaser">
                            <div class="teaser-content">
                              <div class="teaser-header">
                                <h3>{{ page.progress3.title }}</h3>
                              </div>
                              <div class="teaser-detail">
                                <p>{{ page.progress3.content }}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="teaser">
                            <div class="last-teaser">
                            <div class="teaser-content">
                              <div class="teaser-header">
                                <h3>{{ page.progress4.title }}</h3>
                              </div>
                              <div class="teaser-detail">
                                <p>{{ page.progress4.content }}</p>
                              </div>
                            </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </section>
            </div>
          </div><!-- .container -->
        </div><!-- .wrapper-main -->

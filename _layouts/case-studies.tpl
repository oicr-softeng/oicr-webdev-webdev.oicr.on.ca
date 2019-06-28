---
layout: default
---
<link type="text/css" rel="stylesheet" media="all" href="/assets/site/css/case-studies.css" >
<div id="black-overlay" class="color-overlay"> </div>

<!-- Light Boxes-->
<div class="container gallery-container">
  <div id="gallery-challenge" class="lightbox">
    <div class="lightbox-inner">
      <div class="lightbox-title">
        <h2>{{ page.project }}</h2>
        <a class="btn" href="{{ page.btn_link }}"><span class="btn-zoom">{{ page.proj_btn }}</span></a>
        <a class="lightbox-title-close"></a>
      </div>
      <div class="lightbox-carousel">
        {% assign challenge-slides = page.challenge.slides.size %}
        <div id="webdev-carousel-sub" class="carousel slide carousel-fade carousel-challenge" data-ride="carousel" data-interval="false">
            {% assign i = 0 %}
            <ol class="carousel-indicators">
              {% for slides in page.challenge.slides limit:challenge-slides %}
              {% if i == 0 %}
                <li class="carousel-indicator active" data-target="#webdev-carousel-sub" data-slide-to="{{ i }}"></li>
              {% else %}
                <li class="carousel-indicator" data-target="#webdev-carousel-sub" data-slide-to="{{ i }}"></li>
              {% endif %}
              {% assign i = i | plus: 1 %}
              {% endfor %}
            </ol>
            <div class="carousel-inner" role="listbox">
              {% assign i = 1 %}
              {% for item in page.challenge.slides limit:challenge-slides %}
                {% if i == 1 %}
                  <div class="item slide{{ i }} active first-slide">
                {% elsif i == challenge-slides %}
                  <div class="item last-child slide{{ i }} last-slide">
                {% else %}
                  <div class="item slide{{ i }}">
                {% endif %}
                    <div class="slides">
                      <img class="carousel-img" src="{{ item }}" alt="slide{{ i }}">
                    </div>
                  </div>
              {% assign i = i | plus: 1 %}
              {% endfor %}
            </div>
            <a class="shared-control carousel-control-prev" href="#webdev-carousel-sub" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="shared-control carousel-control-next" href="#webdev-carousel-sub" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div>
      </div>
    </div>
  </div>
  <div id="gallery-solution" class="lightbox">
      <div class="lightbox-inner">
        <div class="lightbox-title">
          <h2>{{ page.project }}</h2>
          <a class="btn" href="{{ page.btn_link }}"><span class="btn-zoom">{{ page.proj_btn }}</span></a>
          <a class="lightbox-title-close"></a>
        </div>
        <div class="lightbox-carousel">
          {% assign solution-slides = page.solution.slides.size %}
          <div id="webdev-carousel-2-sub" class="carousel slide carousel-fade carousel-solution" data-ride="carousel" data-interval="false">
              {% assign i = 0 %}
              <ol class="carousel-indicators">
                {% for slides in page.solution.slides limit:solution-slides %}
                {% if i == 0 %}
                  <li class="carousel-indicator active" data-target="#webdev-carousel-2-sub" data-slide-to="{{ i }}"></li>
                {% else %}
                  <li class="carousel-indicator" data-target="#webdev-carousel-2-sub" data-slide-to="{{ i }}"></li>
                {% endif %}
                {% assign i = i | plus: 1 %}
                {% endfor %}
              </ol>
              <div class="carousel-inner" role="listbox">
                {% assign i = 1 %}
                {% for item in page.solution.slides limit:solution-slides %}
                  {% if i == 1 %}
                    <div class="item slide{{ i }} active first-slide">
                  {% elsif i == solution-slides %}
                    <div class="item last-child slide{{ i }} last-slide">
                  {% else %}
                    <div class="item slide{{ i }}">
                  {% endif %}
                      <div class="slides">
                        <img class="carousel-img" src="{{ item }}" alt="slide{{ i }}">
                      </div>
                    </div>
                {% assign i = i | plus: 1 %}
                {% endfor %}
              </div>
              <a class="shared-control carousel-control-prev" href="#webdev-carousel-2-sub" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="shared-control carousel-control-next" href="#webdev-carousel-2-sub" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>
        </div>
      </div>
    </div>
</div>

  <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="row content-header">
        <div class="container">
            <div id="app-git-edit" data-path="{{ page.path }}" data-gitrepo="{{ site.git_repo }}"></div>
        </div>
      <div class="content-header-background">
        <img src="/assets/site/images/bg-casestudy-{{ page.alias }}.jpg" alt="">

          <div class="content-header-main">
              <div class="container">
                <div class="title">
                    <h1>{{ page.title }}</h1>
                    <a class="list-btn" href="/our-work">BACK TO LIST</a>
                </div>
                <div class="content">
                    <p class="case-study-description">{{ page.project }}</p>
                    <a class="btn" href="{{ page.btn_link }}"><span class="btn-zoom">{{ page.proj_btn }}</span></a>
                </div>
              </div>
          </div>

        </div>
      </div>
    <!-- .row -->


    <!-- Main -->
    <div class="wrapper wrapper-main">
      <div class="container-fluid container-main">

        <div class="row">

          <!-- Page content -->
          <section class="col-md-12 case-study">
            <div class="main-content">
              <div class="row challenge">
                <div class="container">
                  <div class="challenge-carousel">
                    {% assign challenge-slides = page.challenge.slides.size %}
                    <div id="webdev-carousel" class="carousel slide carousel-fade carousel-challenge" data-ride="carousel" data-interval="false">
                      {% assign i = 0 %}
                      <ol class="carousel-indicators">
                        {% for slides in page.challenge.slides limit:challenge-slides %}
                        {% if i == 0 %}
                          <li class="carousel-indicator active" data-target="#webdev-carousel" data-slide-to="{{ i }}"></li>
                        {% else %}
                          <li class="carousel-indicator" data-target="#webdev-carousel" data-slide-to="{{ i }}"></li>
                        {% endif %}
                        {% assign i = i | plus: 1 %}
                        {% endfor %}
                      </ol>

                    <div id="challenge" class="carousel-clickable carousel-inner" role="listbox">
                        <!-- Indicators -->

                        <!-- Wrapper for slides -->
                        {% assign i = 1 %}
                        {% for item in page.challenge.slides limit:challenge-slides %}
                          {% if i == 1 %}
                              <div class="item slide{{ i }} active first-slide">
                          {% elsif i == challenge-slides %}
                              <div class="item last-child slide{{ i }} last-slide">
                          {% else %}
                              <div class="item slide{{ i }}">
                          {% endif %}
                                  <div class="slides">
                                      <img class="carousel-img carousel-img-browser" src="/assets/site/images/background-browser.svg">
                                      <div class="slide-image">
                                        <img class="carousel-img" src="{{ item }}" alt="slide{{ i }}">
                                        <div class="slide-overlay">
                                          <span class="slide-overlay-icon glyphicon glyphicon-resize-full" aria-hidden="true"></span>
                                        </div>
                                      </div>
                                  </div>
                              </div>
                        {% assign i = i | plus: 1 %}
                        {% endfor %}

                    </div>

                      <a class="shared-control carousel-control-prev" href="#webdev-carousel" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <a class="shared-control carousel-control-next" href="#webdev-carousel" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  <div class="challenge-content">
                    <h2>{{ page.challenge.title }}</h2>
                    {% for p in page.challenge.content %}
                    {% if p.size == 2 %}
                    <p>
                      {{ p.title }}
                      <ol>
                      {% for list in p.content %}
                      <li>{{ list | markdownify }}</li>
                      {% endfor %}
                      </p>
                      {% else %}
                      <p>{{ p | markdownify }}</p>
                      {% endif %}
                    </ol>
                      {% endfor %}
                  </div>
                  </div>
                </div>
                <div class="row testimonial">
                  <div class="container">
                    <div class="testimonial-image col-md-2">
                      <img src="/assets/site/images/logo-testimonials.svg">
                    </div>
                    <div class="testimonial-content col-md-10">
                      <p>"{{ page.testimonial.quote }}"</p>
                        <p><b>{{ page.testimonial.title }}</br>
                          {{ page.testimonial.institution }}</p></b>
                    </div>
                  </div>
                </div>

                <div class="row solution">
                  <div class="container">
                      <div class="solution-carousel">
                        <div id="webdev-carousel-2" class="carousel slide carousel-fade carousel-solution" data-ride="carousel" data-interval="false">

                          {% assign solution-slides = page.solution.slides.size %}
                            {% assign i = 0 %}
                            <ol class="carousel-indicators">
                              {% for slides in page.solution.slides limit:solution-slides %}
                              {% if i == 0 %}
                                <li data-target="#webdev-carousel-2" data-slide-to="{{ i }}" class="carousel-indicator active"></li>
                              {% else %}
                                <li data-target="#webdev-carousel-2" data-slide-to="{{ i }}" class="carousel-indicator"></li>
                              {% endif %}
                              {% assign i = i | plus: 1 %}
                              {% endfor %}
                            </ol>

                          <div id="solution" class="carousel-clickable carousel-inner" role="listbox">
                              <!-- Indicators -->

                              <!-- Wrapper for slides -->
                              {% assign i = 1 %}
                              {% for item in page.solution.slides limit:solution-slides %}
                                {% if i == 1 %}
                                    <div class="item slide{{ i }} active first-slide">
                                {% elsif i == solution-slides %}
                                    <div class="item last-child slide{{ i }} last-slide">
                                {% else %}
                                    <div class="item slide{{ i }}">
                                {% endif %}
                                        <div class="slides">
                                            <img class="carousel-img carousel-img-browser" src="/assets/site/images/background-browser.svg">
                                            <div class="slide-image">
                                              <img class="carousel-img" src="{{ item }}" alt="slide{{ i }}">
                                              <div class="slide-overlay">
                                                <span class="slide-overlay-icon glyphicon glyphicon-resize-full" aria-hidden="true"></span>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                              {% assign i = i | plus: 1 %}
                              {% endfor %}

                          </div>

                          <a class="shared-control carousel-control-prev" href="#webdev-carousel-2" role="button" data-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="sr-only">Previous</span>
                          </a>
                          <a class="shared-control carousel-control-next" href="#webdev-carousel-2" role="button" data-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="sr-only">Next</span>
                          </a>
                          </div>
                          </div>
                          <div class="solution-content">
                            <h2>{{ page.solution.title }}</h2>
                            {% for p in page.solution.content %}
                            {% if p.size == 2 %}
                            <p>
                              {{ p.title }}
                              <ol>
                              {% for list in p.content %}
                              <li>{{ list | markdownify }}</li>
                              {% endfor %}
                              </p>
                              {% else %}
                              <p>{{ p | markdownify }}</p>
                              {% endif %}
                            </ol>
                              {% endfor %}
                                  <a class="btn" href="{{ page.btn_link }}"><span class="btn-zoom">{{ page.proj_btn }}</span></a>
                            </div>

                              </div>
                          </div>


                    {% include site/case_study_nav.inc %}

                </div>
            </section>

        </div><!-- .row -->

      </div><!-- .container -->
    </div><!-- .wrapper-main -->

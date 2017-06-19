---
layout: default
---
<link type="text/css" rel="stylesheet" media="all" href="/webdev-cr/assets/css/page/case-studies.css" >
  <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="row banner">
      <div class="banner-background">
        <img src="/webdev-cr/assets/images/bg-casestudy-{{ page.alias }}.jpg" alt="Banner image 1">

          <div class="banner-main">
              <div class="container">
                <div class="banner-title">
                    <h1>{{ page.title }}</h1>
                    <a class="list-btn" href="/our-work">BACK TO LIST</a>
                </div>
                <div class="banner-content">
                    <p class="case-study-description">{{ page.project }}</p>
                    <a class="btn" href="{{ page.btn_link }}">{{ page.proj_btn }}</a>
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
                    <div id="webdev-carousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
                      {% assign i = 0 %}
                      <ol class="carousel-indicators">
                        {% for slides in page.challenge.slides limit:challenge-slides %}
                        {% if i == 0 %}
                          <li data-target="#webdev-carousel" data-slide-to="{{ i }}" class="active"></li>
                        {% else %}
                          <li data-target="#webdev-carousel" data-slide-to="{{ i }}"></li>
                        {% endif %}
                        {% assign i = i | plus: 1 %}
                        {% endfor %}
                      </ol>

                    <div class="carousel-inner" role="listbox">
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
                                      <img class="carousel-img carousel-img-browser" src="/webdev-cr/assets/images/background-browser.svg">
                                      <img class="carousel-img" src="{{ item }}" alt="slide{{ i }}">
                                  </div>
                              </div>
                        {% assign i = i | plus: 1 %}
                        {% endfor %}

                    </div>

                      <a class="carousel-control-prev" href="#webdev-carousel" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#webdev-carousel" role="button" data-slide="next">
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
                      <img src="/webdev-cr/assets/images/logo-testimonials.svg">
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
                                <li data-target="#webdev-carousel-2" data-slide-to="{{ i }}" class="active"></li>
                              {% else %}
                                <li data-target="#webdev-carousel-2" data-slide-to="{{ i }}"></li>
                              {% endif %}
                              {% assign i = i | plus: 1 %}
                              {% endfor %}
                            </ol>

                          <div class="carousel-inner" role="listbox">
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
                                            <img class="carousel-img carousel-img-browser" src="/webdev-cr/assets/images/background-browser.svg">
                                            <img class="carousel-img" src="{{ item }}" alt="slide{{ i }}">
                                        </div>
                                    </div>
                              {% assign i = i | plus: 1 %}
                              {% endfor %}

                          </div>

                          <a class="carousel-control-prev" href="#webdev-carousel-2" role="button" data-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#webdev-carousel-2" role="button" data-slide="next">
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
                                  <a class="btn" href="{{ page.btn_link }}">{{ page.proj_btn }}</a>
                            </div>

                              </div>
                          </div>


                    {% include case_study_nav.inc %}

                </div>
            </section>

        </div><!-- .row -->

      </div><!-- .container -->
    </div><!-- .wrapper-main -->

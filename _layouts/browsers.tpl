---
layout: default
---

<link type="text/css" rel="stylesheet" media="all" href="/assets/site/css/browsers.css" >

      <!-- Main -->
      <div class="wrapper wrapper-main">
          <div class="container-fluid container-main">
              <div class="row">
               <!-- Page content -->
                  <section class="col-md-12">
                      <h1 class="title">{{ page.title }}</h1>


                      <!-- Main Content -->
                      <div class="main-content">
                          <div class="row browserss">
                              <!-- Page Header -->
                              <div class="row browsers-header">
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

                              <div class="row support">
                                  <div class="container">
                                       <div class="section-content"><a name="support"></a>
                                          <h2>{{ page.support.title }}</h2>
                                          
                                           <ul>
                                           {% for list in page.support.services %}
                                               <li>{{ list }}</li>
                                           {% endfor %}
                                           </ul>
                                           <p>{{ page.support.content }}</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
              </div>
            </div><!-- .container -->
      </div><!-- .wrapper-main -->


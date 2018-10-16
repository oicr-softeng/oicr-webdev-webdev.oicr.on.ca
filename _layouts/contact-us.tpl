---
layout: default
---
<link type="text/css" rel="stylesheet" media="all" href="/assets/site/css/contact-us.css" >

      <!-- Main -->
      <div class="wrapper wrapper-main">
          <div class="container-fluid container-main">
              <div class="row">
               <!-- Page content -->
                  <section class="col-md-12">
                      <h1 class="title">{{ page.title }}</h1>


                      <!-- Main Content -->
                      <div class="main-content">
                          <div class="row contact-us">
                              <div class="container">
                                  <!-- Page Header -->
                                  <div class="row contact-us-header">
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
                                  <!-- Content -->
                                  <div class="contact-us-content">
                                  <div class="content1 send-message">
                                    <script
                                    id="contact-us"
                                    type="text/javascript"
                                    data-formid="5baa4d5fc6d9c00018607b5f"
                                    data-lang="en"
                                    src="https://{{site.formsSiteURL}}/assets/site/js/form_embedder.js"
                                  ></script>
                        
                                  </div>
                                  <div class="content-img">
                                      <div class="content-circle">
                                          <div class="circle1">
                                              <div class="circle1-inner">
                                              </div>
                                          </div>
                                      </div>
                                      <div class="content-circle2">
                                          <div class="circle2">
                                              <div class="circle2-inner">
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="content2">
                                      <div class="location">
                                          <h4>{{ page.location.title }}</h4>
                                          <a href="http://oicr.on.ca/">{{ page.location.institution }}</a>
                                          <p>{% for line in page.location.address %}
                                          {{ line }}</br>
                                          {% endfor %}
                                          </p>
                                      </div>
                                      <div class="point-of-contact">
                                          <h4>{{ page.contact.title }}</h4>
                                          <p>{{ page.contact.description }}</p>
                                          <p>
                                            <span>{{ page.contact.name }}</span><br>{{ page.contact.position }}<br>
                                            <span class="spamspan"><span class="u">joseph [dot] yamada</span> [at] <span class="d">oicr [dot] on [dot] ca</span> (<span class="t">{{ page.contact.btn }}&raquo;</span>)</span>
                                          </p>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                          </div>
                  </section>
              </div>
            </div><!-- .container -->
      </div><!-- .wrapper-main -->

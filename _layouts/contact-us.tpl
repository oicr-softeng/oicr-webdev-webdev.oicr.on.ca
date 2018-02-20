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
                                      <h4>{{ page.form.title }}</h4>
                                      <form action="//oicr.us15.list-manage.com/subscribe/post?u=af1878706bae96f6bafa75885&amp;id=f4a2d7efc8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                                        <div class="mc-field-group input-name">
                                          <label for="mce-NAME">{{ page.form.name }} <span class="asterisk">*</span></label>
                                          <input type="text" value="" name="NAME" class="required" id="mce-NAME" required>
                                        </div>
                                        <div class="mc-field-group input-email">
                                          <label for="mce-EMAIL">{{ page.form.email }} <span class="asterisk">*</span></label>
                                          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
                                        </div>
                                        <!--
                                        <div class="input-institution">
                                            <label for="institution">{{ page.form.institution }} <span>*</span></label>
                                            <select id="institution" name="institution" required>
                                                <option value="">Select an Option...</option>
                                                {% for i in page.form.subject-options %}
                                                <option value={{i}}>{{i}}</option>
                                                {% endfor %}
                                            </select>
                                        </div>
                                        -->
                                        <div class="mc-field-group input-subject">
                                          <label for="mce-SUBJECT">{{ page.form.subject }} <span class="asterisk">*</span></label>
                                          <select name="SUBJECT" class="required" id="mce-SUBJECT" required>
                                            <option value="">Select an Option...</option>
                                            {% for i in page.form.subject-options %}
                                              <option value={{i}}>{{i}}</option>
                                            {% endfor %}
                                          </select>
                                        </div>
                                        <div class="mc-field-group input-comment">
                                          <label for="mce-COMMENTS">{{ page.form.comment.title }} <span class="asterisk">*</span> <span class="text-muted">{{ page.form.comment.muted }}</span></label>
                                          <textarea value="" name="COMMENTS" class="required" id="mce-COMMENTS" maxlength="250" required></textarea>
                                        </div>
                                        <div class="input-submit">
                                            <input type="submit" id="submit" name="SUBMIT" value="Send">
                                        </div>
                                      </form>
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

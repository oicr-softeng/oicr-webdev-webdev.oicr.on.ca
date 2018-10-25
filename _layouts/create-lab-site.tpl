---
layout: default
---

<link type="text/css" rel="stylesheet" media="all" href="/assets/site/css/our-work.css">
<link type="text/css" rel="stylesheet" media="all" href="/assets/site/css/create-lab-site.css">

<div id="black-overlay" class="color-overlay"> </div>
<div class="wrapper wrapper-main">
    <div class="container-fluid container-main">
      <div class="row">
        <!-- Page content -->
        <section class="col-md-12">
     <div class="main-content">
        <div class="row our-work">
          <div class="row">
            <div class="container">
                <div id="app-git-edit" data-path="{{ page.path }}" data-gitrepo="{{ site.git_repo }}"></div>
            </div>
            <div class="container">
              <div class="banner">
                <div class="banner-title create-header">
                  <h1>{{ page.title_txt }}</h1>
                </div>
                <div class="banner-content">
                  <p>{{ page.description_txt }}</p>
                </div>
                <div class="banner-wrapper"> </div>
              </div>

              <div class="container-fluid">
                  <div class="row">
                    <div id="gridid" class="col-sm-12 create-page">
                      <br>
                      {% for item in page.content_txt %} 
                      <p>{{item.item_txt | markdownify}}</p>
                      {% endfor %}
                      <div class="list-template">
                      <ul>
                        {% for item in page.template_list %} 
                          <li>
                            {{item.content_txt | markdownify}}
                          </li>
                        {% endfor %}
                      </ul>
                      </div>
                      <br>
                      <div class="footer-btn"><a href="#" class="btn"><div class="btn-zoom text-uppercase">{{page.labSiteBtn_txt}}</div></a></p></div>
                      <br>
                      <br>
                      <hr class="line-break">
                      <i>{{page.index_txt}}</i>
                      {% for item in page.index_list %}
                      <p><a href ="{{item.link_txt}}" id="index-links">{{item.list_txt | markdownify}}</a></p>
                      {% endfor %}
                      <br>
                      <hr class="line-break">
                      <h2 class="blog-posts">{{page.subheading_txt}}</h2>
                      <br>
                      {% for item in page.firstHead_list %}
                      <p>{{item.item_txt}}</p>
                      {% endfor %}
                      <br>
                      <br>
                      <hr class="line-break">
                      <h2 class="blog-posts">{{page.subheadingTwo_txt}}</h2>
                      <br>
                      {% for item in page.secondHead_list %}
                      <p>{{item.item_txt}}</p>
                      {% endfor %}
                      <br>
                      <br>
                      <hr class="line-break">
                      <h2 class="blog-posts">{{page.subheadingThree_txt}}</h2>
                      <br>
                      {% for item in page.thirdHead_list %}
                      <p>{{item.item_txt}}</p>
                      {% endfor %}
                      <br>
                      <hr class="line-break">
                      <h2 class="blog-posts">{{page.subheadingFour_txt}}</h2>
                      {% for item in page.fourthHead_list %}
                      <p>{{item.item_txt | markdownify}}</p>
                      {% endfor %}
                      <img src={{page.image_txt}} id="work-with-us-img">
                      <br>
                      <br>
                      <div class="footer-btn"><a href="/contact-us/" class="btn"><div class="btn-zoom text-uppercase">{{page.contactUsBtn_txt}}</div></a></p></div>
                      <br>
                      <br>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
</div>
{% if page.layout == "case-studies" %}
  <div class="wrapper wrapper-postscript-bottom">
    <div class="container-fluid container-postscript-bottom">
      <div class="row">
          <div class="region region-postscript-bottom">
              <div class="menu-connect-menu fusion-inline-menu row">
               <div class="container">
                   <p>Do you have a similar project you want to talk to us about? <a href="/contact-us/" class="btn"><span class="btn-zoom text-uppercase">CONTACT US</span></a></p>
               </div>
              </div>
          </div>
      </div><!-- .row -->
    </div><!-- .container -->
  </div><!-- .wrapper-postscript-bottom -->
{% endif %}

{% if page.footer-message %}
    <div class="wrapper wrapper-postscript-bottom">
      <div class="container-fluid container-postscript-bottom">
        <div class="row">
            <div class="region region-postscript-bottom">
                <div class="menu-connect-menu fusion-inline-menu row">
                 <div class="container">
                     {% if page.layout == "about-us" %}
                     <p> {{page.footer-message}} <a href="/careers/" class="btn btn-career"><span class="btn-zoom text-uppercase">CAREER OPPORTUNITIES</span></a><a href="/contact-us/" class="btn"><span class="btn-zoom text-uppercase">CONTACT US</span></a></p>
                     {% else %}
                     <p> {{page.footer-heading}}</p>
                     <div class="row-footer">
                     <br>
                     <p id="heading-msg"> {{page.footer-message}}</p>
                     <br>
                     {% if page.layout == "home" %}
                     <div class="footer-btn"><a href="/create-lab-site/" class="btn" id="footer-btn-blue"><div class="btn-zoom text-uppercase">{{page.btnTwo}}</div></a></div>
                     {% endif %}
                     <div class="footer-btn"><a href="/contact-us/" class="btn"><div class="btn-zoom text-uppercase">{{page.btnOne}}</div></a></p></div>
                     </div>
                     {% endif %}
                 </div>
                </div>
            </div>
        </div><!-- .row -->
      </div><!-- .container -->
    </div><!-- .wrapper-postscript-bottom -->
{% endif %}
{% assign footer = site._modules | where:"slug", "footer" | first %}
    <!-- footer -->
    <footer class="wrapper">
        <div class="labs-footer">
            <div class="container">
                <div class="row">
                    <div class="list-container">
                        <div class="labs-list">
                            <div class="footer-logo">
                                <a class="footer-logo-container" href="{{ footer.logoLink_txt }}">
                                    <img src="{{footer.general-oicr-img_txt}}">
                                </a>
                            </div>
                            {% assign count = 0 %} {% for item in footer.general-oicr_list %} {% assign remainder = count | modulo: 3%}
                            <a href="{{item.link_txt}}" {% if remainder==0 %}class="no-left" {% endif %}>{{item.item_txt}}</a>
                            {% assign count = count | plus: 1 %} {% endfor %}
                        </div>
                        <div class="final-link">
                                {% for item in footer.final-link_list %}{{ item.content_txt }} <a href="{{ item.link_txt }}">{{ item.item_txt }}</a>{% endfor %}
                        </div>
                    </div><!-- .list-container -->
                </div><!-- .row -->
            </div><!-- .container -->
        </div><!-- .labs-footer -->
    </footer><!-- footer.wrapper -->

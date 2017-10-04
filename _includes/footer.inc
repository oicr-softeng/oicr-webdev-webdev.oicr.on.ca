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
                     <p> {{page.footer-message}} <a href="/contact-us/" class="btn"><span class="btn-zoom text-uppercase">CONTACT US</span></a></p>
                     {% endif %}
                 </div>
                </div>
            </div>
        </div><!-- .row -->
      </div><!-- .container -->
    </div><!-- .wrapper-postscript-bottom -->
{% endif %}

    <!-- footer -->
    <footer class="wrapper">
      <div class="container-fluid container-footer">
        <div class="row">
          <div class="menu-fine-print">
              <p><a id="fine-print-image" href="http://oicr.on.ca/" target="_blank"><img src="/assets/site/images/logo-oicr-white.svg"></a>&copy; 2017 OICR Web Development Team. <span>All rights reserved.</span>
                  <span class="menu-fine-print-links">
                  <a id="term" href="http://oicr.on.ca/terms-and-conditions" target="_blank">Terms &amp; Conditions</a><a id="privacy" href="http://oicr.on.ca/website-privacy-statement" target="_blank">Privacy</a>
                </span>
              </p>

          </div>
        </div><!-- .row -->
      </div><!-- .container -->
    </footer><!-- footer.wrapper -->

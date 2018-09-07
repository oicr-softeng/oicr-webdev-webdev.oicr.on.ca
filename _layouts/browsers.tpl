---
layout: default
---

<!-- Main jumbotron for a primary marketing message or call to action -->
<div class="jumbotron wrapper background-cover">
  <div class="container container-jumbotron">
    <div class="row">
      <div class="cbw-masthead">
      </div>
    </div>
    <!-- .row -->
  </div>
  <!-- .container -->
</div>
<!-- .jumbotron -->

<!-- Main -->
<div class="wrapper wrapper-main">
  <div class="container container-main">
    <div class="row">

      <!-- Page content -->
      <section class="col-md-9 col-md-push-3">
        <div class="main-content">
          <h1 class="title">{{ page.title }}</h1>

            {{ content }}

        </div>
      </section>

      <!-- Sidebar second-->
      <aside class="col-md-3 col-md-pull-9 wrapper-sidebar-second">
        {% include site/workshop/sidebar2.inc %}
      </aside>
    </div>
  </div>
  <!-- .container -->
</div>
<!-- .wrapper-main -->

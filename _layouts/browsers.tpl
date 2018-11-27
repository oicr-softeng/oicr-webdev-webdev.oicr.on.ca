---
layout: default
---

<!-- Main -->
<div class="wrapper wrapper-main">
    <div class="container-fluid container-main">
        <div class="row">
            <!-- Page content -->
            <section class="col-md-12">
                <h1 class="title">{{ page.title }}</h1>

                <!-- Main Content -->
                <div class="main-content">
                    <div class="row careers">
                        <div class="container">
                            <!-- Page Header -->
                            <div class="row careers-header">
                                <div class="container">
                                    <div id="app-git-edit" data-path="{{ page.path }}" data-gitrepo="{{ site.git_repo }}"></div>
                                </div>
                                <div class="container">
                                    <div class="banner">
                                        <div class="banner-title">
                                            <h1>{{ page.title_txt }}</h1>
                                        </div>
                                        <div class="banner-content">
                                            <p>{{ page.description_txt}}</p>
                                        </div>
                                        <div class="banner-wrapper"> {{ page.message_txt | markdownify }}
 </div>
                                    </div>
                                </div>
                            </div>
                         
                        </div>
                    </div>

                    
                </section>
            </div>
        </div><!-- .container -->
    </div><!-- .wrapper-main -->
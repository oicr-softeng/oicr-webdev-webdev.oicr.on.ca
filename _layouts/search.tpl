---
layout: default
---
<link type="text/css" rel="stylesheet" media="all" href="/assets/site/css/search-result.css">

<!-- Main -->
<div class="wrapper wrapper-main">
    <div class="container-fluid container-main">
        <div class="row">
            <section class="col-md-12 search-result">
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
                                            <h1>{{ page.title }}</h1>
                                        </div>
                                        <div class="banner-content">
                                            <p>{{ page.description }}</p>
                                        </div>
                                        <div class="banner-wrapper"> </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="main-content">
                                                {{ content }}
                                            </div>
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

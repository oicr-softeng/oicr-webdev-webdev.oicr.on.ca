                <!-- Navbar -->
                <nav class="navbar navbar-default navbar-static-top">
                    <div class="container">

                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">

                            <!-- Site info / Navbar brand -->
                            <a href="/" title="Home" rel="home" id="webdev-logo" class="logo navbar-brand"> <img src="/assets/images/webdev-logo.png" alt="OICR WebDev Team" /> </a>
                            <div id="OICR WebDev Team" class="element-invisible"><strong> <a href="/" title="OICR WebDev Team" rel="home"><span>OICR WebDev Team</span></a> </strong></div>
                            <div class="region region-navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                                </button>
                            </div>
                        </div><!-- .navbar-header -->

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse" id="navbar-collapse-1">
                            <nav role="navigation">
                                <div class="region region-navbar">

                                    <!-- Main menu -->
                                    <div class="menu-main-menu">
                                        <ul id="nav-main-menu" class="navbar navbar-nav">
                                            <li {% if page.url contains 'our-work'%}class="active our-work"{% endif %}><a href="/our-work/">OUR WORK</a></li>
                                            <li {% if page.url contains 'about-us'%}class="active about-us"{% endif %}><a href="/about-us/">ABOUT US</a></li>
                                            <li {% if page.url contains 'our-capabilities'%}class="active our-capabilities"{% endif %}><a href="/our-capabilities/">OUR CAPABILITIES</a></li>
                                            <li {% if page.url contains 'careers'%}class="active careers"{% endif %}><a href="/careers/">CAREERS</a></li>
                                            <li {% if page.url contains 'contact-us'%}class="active contact-us"{% endif %}><a href="/contact-us/">CONTACT US</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </nav>
                        </div><!-- .navbar-collapse -->
                    </div><!-- .container -->
                </nav><!-- .navbar -->

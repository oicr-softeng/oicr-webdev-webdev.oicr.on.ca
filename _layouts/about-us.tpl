---
layout: default
---
<link type="text/css" rel="stylesheet" media="all" href="/assets/css/page/about-us.css" >

<!-- Main -->
<div class="wrapper wrapper-main">
    <div class="container-fluid container-main">
        <div class="row">
            <!-- Page content -->
            <section class="col-md-12 about-us">
                <h1 class="title">{{ page.title }}</h1>

                <!-- Page Header-->
                <div class="row about-us-header">
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
                </div>

                <!-- Main Content -->
                <div class="main-content">
                    <div class="row our-aim">
                        <div class="container">
                            <div class="our-aim-header">
                                <h4>{{ page.our-aim.title }}</h4>
                            </div>
                            <div class="our-aim-img"><img src="/assets/images/icon-about-team-grey.svg"></div>
                            <div class="our-aim-content">
                                <p>
                                  {{ content }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="row how-we-work">
                        <div class="container">
                            <h2>{{ page.how-we-work.title }}</h2>
                            <div class="how-we-work-img">
                                <div class="how-we-work-circle">
                                    <div class="how-we-work-circle-inner">
                                    </div>
                                </div>
                            </div>
                            <div class="how-we-work-content">
                                {% for item in page.how-we-work.content %}
                                  {{ item }}<br><br>
                                {% endfor %}
                            </div>
                        </div>
                    </div>

                    <div class="row about-us-stats">
                        <div class="container">
                            <ul>
                                <li>
                                    <div class="stats-block">
                                        <div class="stats-title">
                                            <h4>Team</h4>
                                        </div>
                                        <div class="stats-content">
                                            <p>{{ page.stats.team }}</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="stats-block">
                                        <div class="stats-title">
                                            <h4>Work</h4>
                                        </div>
                                        <div class="stats-content">
                                            <p>{{ page.stats.work }}</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="stats-block">
                                        <div class="stats-title">
                                            <h4>Yearly Productivity</h4>
                                        </div>
                                        <div class="stats-content">
                                            <p>{{ page.stats.productivity }}</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="stats-block">
                                        <div class="stats-title">
                                            <h4>Outreach</h4>
                                        </div>
                                        <div class="stats-content">
                                            <p>{{ page.stats.outreach }}</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="row meet-the-team">
                        <div class="container">
                            <h2>{{ page.meet_the_team.title }}</h2>
                            <p>{{ page.meet_the_team.description }}</p>
                            <div class="team-grid">
                                {% for member in page.team %}
                                <div class="team-item teaser-{{ member.tag }}">
                                    <div class="team-item-image">
                                        <div class="team-item-photo">
                                          <img src="{{ member.image }}">
                                        </div>
                                        <div class="team-item-image2">
                                            <img src="/assets/images/image-testing.png">
                                        </div>
                                      </div>

                                    <div class="team-item-content">
                                        <h3 class="name">{{ member.name }}</h3>
                                        <h4 class="title">{{ member.role }}</h4>
                                        <ul class="team-item-desc">
                                            <li><span>Focus </span>{{ member.focus }}</li>
                                            <li><span>Expertise </span>{{ member.expertise }}</li>
                                            <li><span>Fun Fact </span>{{ member.fun_fact }}</li>
                                        </ul>
                                    </div>
                                </div>
                                {% endfor %}
                            </div>
                        </div>
                    </div>

                    <div class="row our-student">
                        <div class="container">
                            <h2>{{ page.our-students.title }}</h2>
                            <div class="student-list">
                                {% for student in page.our-students.students %}
                                <div class="student">
                                    <h4>{{ student.name }}</h4>
                                    <ul>
                                        <li>{{ student.program }}</li>
                                        <li>{{ student.school }}</li>
                                        <li>{{ student.role }}</li>
                                    </ul>
                                    <div class="space-holder"></div>
                                </div>
                                {% endfor %}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </div><!-- .container -->
</div><!-- .wrapper-main -->

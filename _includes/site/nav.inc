{% assign nav = site._modules | where:"slug", "nav" | first %}
<div id="navigation" class="navigation container-shadow">
    <div id="login-user-nav">
        <header class="wrapper">
            <div class="container-fluid container-header">
            <div class="row row-header">
                <div id="app-user-nav">
                </div>
            </div>
            </div>
        </header>
    </div>
    <nav id="sticky-nav" class="navbar nav-main navbar-no-border">
        <div class="container">
            <div class="navbar-header">
                <a href="/" title="Home" rel="home" id="site-logo" class="no-border-bottom link-img logo navbar-brand">
                    <img class="navbar-brand-logo" src="{{nav.siteImage_txt}}" alt="{{ nav.siteTitle_txt }}"/>
                    {% if nav.siteImageSticky_txt %}
                        <img class="navbar-brand-logo-sticky" src="{{nav.siteImageSticky_txt}}" alt="{{ nav.siteTitle_txt }}" />
                    {% elsif nav.siteTitleSticky_txt %}
                        <span class="navbar-brand-title-sticky">
                            {{ nav.siteTitleSticky_txt }}
                        </span>
                    {% endif %}
                </a>
                <div id="nav-mobile" class="visible-xs-block clearfix">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                        <div class="nav-xs-title"><span>{{nav.mobileTitle_txt}}</span></div>
                        <div class="btn-open">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </div>
                        <div class="btn-close">
                            <span class="icon-close"></span>
                        </div>
                    </button>
                </div>
            </div>
            <div class="collapse navbar-collapse" id="navbar-collapse-1">
                <nav id="main-nav" role="navigation">
                    {% comment %}
                    <div id="nav-collapse-search" class="nav-search sticky-hide-md">
                        <form class="form-inline" id="{{ nav.siteTitle_txt }}-nav-search">
                        <div class="form-group input-with-clear">
                            <label class="sr-only" for="{{ nav.siteTitle_txt }}-nav-search-keywords"></label>
                            <input type="text" class="form-control" id="{{ nav.siteTitle_txt }}-nav-search-keywords" placeholder="{{nav.searchBar_txt}}">
                            <span class="input-clear glyphicon glyphicon-remove hide"></span>
                        </div>
                        <button type="submit" class="btn btn-default sr-only">{{nav.searchBar_txt}}
                        </button>
                        </form>
                    </div>
                    {% endcomment %}
                    {% if nav.nav_list and nav.nav_list.size > 0 %}
                    <div id="menu-main-menu">
                        <ul id="nav-main-menu" class="my-navbar nav navbar-nav">
                            {% for item in nav.nav_list %}
                                {% if item.dropdown_list %}
                                    {% assign links = item.dropdown_list | map: 'link_txt' %}
                                    <li role="presentation" class="nav-item dropdown {% if page.permalink == item.link_txt %}active{% elsif links contains page.permalink %}active{% endif %}">
                                        <a class="nav-link dropdown-toggle arrow-down-default-hover-white text-uppercase {% if page.permalink != "/policies/" %}{% if page.permalink == item.link_txt %}active{% elsif links contains page.permalink %}active{% endif %}{%endif%}" href="{{item.link_txt}}" id="navDropdown{{ item.title_txt | replace: ' ', '' }}"
                                        data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ item.title_txt }}
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navDropdown{{ item.title_txt | replace: ' ', '' }}">
                                            {% for drop in item.dropdown_list %}
                                                <li class="{% if page.permalink != "/policies/" %}{% if page.permalink == drop.link_txt %}active{% endif %}{%endif%}">
                                                    <a class="no-border-bottom dropdown-item" href="{{ drop.link_txt }}" title="{{item.title_txt}}-{{drop.title_txt}}">{{ drop.title_txt }}</a>
                                                </li>
                                            {% endfor %}
                                        </ul>
                                    </li>
                                {% else %}
                                    <li role="presentation" class="nav-item text-uppercase {% if page.permalink == item.link_txt %}active{% endif %}">
                                        <a class="nav-link {% if page.permalink == item.link_txt %}active{% endif %}" href="{{ item.link_txt }}">{{ item.title_txt }}</a>
                                    </li>
                                {% endif %}
                            {% endfor %}
                        </ul>
                    </div>
                    {% endif %}
                </nav>
            </div>
        </div>
    </nav>
</div>
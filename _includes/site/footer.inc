{% assign footer = site._modules | where:"slug", "footer" | first %}

<footer>
	<div class="nextlabs-footer">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="nextlabs-footer-container">
						<div class="footer-top-container">
							<a href="{{footer.oicr-labs_link}}" class="oicr-link">{{footer.oicr-labs_txt}}</a>
							<ul class="oicr-list">
								{% assign count = 0 %} 
								{% for item in footer.oicr-labs_list %} 
									{% assign remainder = count | modulo: 50%}
									{% if team == false %}
										{% if item.title_txt != "Our Team" %}
											<li><a href="{{item.link_txt}}" {% if remainder==0 %}class="no-left" {% endif %}>{{item.item_txt}}</a></li>
										{% endif %}
									{% else %}
										<li><a href="{{item.link_txt}}" {% if remainder==0 %}class="no-left" {% endif %}>{{item.item_txt}}</a></li>
									{% endif %}
									{% assign count = count | plus: 1 %} 
								{% endfor %}
								{% if publication.published == true %}
									<li><a href="/publications/">Publications</a></li>
								{% endif %}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="labs-footer">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="list-container">
						<div class="labs-list">
							<div class="footer-logo">
								<a class="footer-logo-container" href="{{ footer.logoLink_txt }}">
									<img src="{{footer.general-oicr-img_txt}}">
								</a>
							</div>
							<div class="labs-list-links">
								{% assign count = 0 %} {% for item in footer.general-oicr_list %} {% assign remainder = count | modulo: 5%}
									<a href="{{item.link_txt}}" {% if remainder==0 %}class="no-left" {% endif %}>{{item.item_txt}}</a>
								{% assign count = count | plus: 1 %} {% endfor %}
							</div>
						</div>
						<div class="final-link">
							{% for item in footer.final-link_list %}{{ item.content_txt}} <a href="{{ item.link_txt }}">{{ item.item_txt }}</a>{% endfor %}
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="list-container">
						<div class="labs-list oicr-funder-footer">
							<img class="ontario-logo" src="{{footer.ontarioLogo-img_txt}}">
							<p class="funding-text">{{footer.ontarioFunding_txt}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
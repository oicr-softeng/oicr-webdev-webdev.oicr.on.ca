{% assign back = site._modules | where:"slug", "back_to_top" | first %}
<a href="#" id="backToTop" style="display: none;" aria-hidden="false">{{ back.content }}</a>
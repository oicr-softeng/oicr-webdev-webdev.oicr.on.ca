{% assign d = site._case-studies | first %}
{% assign e = site._case-studies | last %}


<div class="row project">
  <div class="container">
    {% if page.previous %}
    <a class="previous-project" href="{{ page.previous.permalink }}">
      {% else %}
      <a class="previous-project" href="{{ e.permalink }}">
        {% endif %}
    <span class="previous">Previous Project</span>
    </a>
  <a class="center-project" href="/our-work">

  </a>
  {% if page.next %}
  <a class="next-project" href="{{ page.next.permalink }}">
    {% else %}
    <a class="next-project" href="{{ d.permalink }}">
    {% endif %}
    <span class="next">Next Project</span>
  </a>
  </div>
</div>

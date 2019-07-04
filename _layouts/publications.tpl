---
layout: default
---

{% assign membersData = site._members %}
{% assign pubs = site._publications %}

<div id="publicationsPage" class="page">
    <div class="container">
        <div id="app-publications"
            data-members='{{ membersData | jsonify | escape }}'
            data-publications='{{ pubs | jsonify | escape }}'
        >
            <div class="loading-spinner js-loading-spinner" role="alert" aria-live="assertive"></div>
        </div>
    </div>
</div>


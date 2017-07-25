---
layout: default
---
<main>
    <div class="container">
        <div class="row">
            <div class="col-md-12">

                <p>{{ page.description }}</p>

                <div style="border: 1px solid #eee; margin: 10px; padding: 10px" >
                    <h3>{{ page.box_contents.title }} </h3>
                    <p>{{ page.box_contents.description }} </p>
                </div>

                <div id="app-home-example"></div>

                {{ content }}
            </div>
        </div>
    </div>
</main>
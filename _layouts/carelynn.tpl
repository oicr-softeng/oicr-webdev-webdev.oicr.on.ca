---
layout: default
---
<link type="text/css" rel="stylesheet" media="all" href="/assets/site/css/carelynn.css" >

<h1>{{ page.title_txt }}</h1>

 <div class = "banner" > 
  <p> {{ page.description }} </p>
</div>

<div class = "boxes" >
  
  <h2> {{ page.elephant.name }} </h2>
  <h3> {{ page.elephant.description}} </h3>
  <img class = "animal" src="{{ page.elephant.image }}">
  <p class = "box" > {{ page.elephant.content }} </p>

  <h2> {{ page.bunny.name }} </h2>
  <h3> {{ page.bunny.description}} </h3>
  <img class = "animal" src="{{ page.bunny.image }}">
  <p class = "box"> {{ page.bunny.content }} </p>

  <h2> {{ page.dog.name }} </h2>
  <h3> {{ page.dog.description}} </h3>
  <img class = "animal" src="{{ page.dog.image }}">
  <p class = "box"> {{ page.dog.content }} </p>

  <h2> {{ page.dolphin.name }} </h2>
  <h3> {{ page.dolphin.description}} </h3>
  <img class = "animal" src="{{ page.dolphin.image }}">
  <p class = "box"> {{ page.dolphin.content }} </p>

  <h2> {{ page.lion.name }} </h2>
  <h3> {{ page.lion.description}} </h3>
  <img class = "animal" src="{{ page.lion.image }}">
  <p class = "box"> {{ page.lion.content }} </p>

</div>

<div class = "boxes" >
  
  {{% for animal in page.animals %}}
  <h2> {{ animal.name }} </h2>
  <h3> {{ animal.description}} </h3>
  <img class = "animal" src="{{ animal.image }}">
  <p class = "box" > {{ animal.content }} </p>
  {{% endfor %}}

</div>
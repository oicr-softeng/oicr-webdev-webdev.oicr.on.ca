<!-- Bootstrap JS -->
<!-- jQuery first, then Bootstrap JS. -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
<script type="text/javascript" src="{{ site.url }}{{ site.baseurl }}/assets/bootstrap/js/bootstrap.js"></script> 

<!-- Theme JS -->
<script type="text/javascript" src="{{ site.url }}{{ site.baseurl }}/assets/js/webdev-bootstrap.js"></script>

<!-- Bundle JS -->
<!-- JavaScript -->
<script type="text/javascript" src="{{ site.url }}{{ site.baseurl }}/assets/js/bundle.js"></script>


<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>

<!-- Simple Pass only, just used to protect against peeking, not secured  -->
<script>
  if (localStorage.password != "webdev") { 
     var password = prompt("Please enter the password to continue", "");
     if (password != "webdev") {
       $("a").click(function() { return false; });
       $( "body" ).empty();
     } else {
       localStorage.setItem("password", password);
     }
  }
</script>

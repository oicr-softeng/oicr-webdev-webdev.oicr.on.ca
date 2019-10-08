<meta charset="utf-8">
<title>{% if page.title %}{{ page.title | escape }}{% else %}{{ site.title | escape }}{% endif %}</title>
<meta name="description" content="{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="/assets/site/images/favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.8.5/css/froala_editor.pkgd.min.css">
<script><!--
    // force redirect
    if (window.location.protocol === 'http:') window.location.href = window.location.toString().replace(/^http:/, "https:");
--></script>

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800" rel="stylesheet">

<link rel="stylesheet" href="/assets/dist/css/core.bundle.css?{{ "now" | date: "%s" }}">
<link rel="stylesheet" href="/assets/site/css/styles.css?{{ "now" | date: "%s" }}">

<!-- Bootstrap CSS -->
<link type="text/css" rel="stylesheet" media="all" href="/assets/core/css/bootstrap.min.css">

<!-- Theme CSS -->
<link type="text/css" rel="stylesheet" media="all" href="/assets/site/css/webdev-bootstrap.css">

<!-- Pages CSS -->
<link type="text/css" rel="stylesheet" media="all" href="/assets/site/css/all-page.css" >

<script src="/assets/site/js/env_theme.js?{{ "now" | date: "%s" }}"></script>

<style type="text/css">
    @font-face{
        font-family:"Avenir LT W01_35 Light1475496";
        src:url("Fonts/edefe737-dc78-4aa3-ad03-3c6f908330ed.eot?#iefix");
        src:url("Fonts/edefe737-dc78-4aa3-ad03-3c6f908330ed.eot?#iefix") format("eot"),url("Fonts/0078f486-8e52-42c0-ad81-3c8d3d43f48e.woff2") format("woff2"),url("Fonts/908c4810-64db-4b46-bb8e-823eb41f68c0.woff") format("woff"),url("Fonts/4577388c-510f-4366-addb-8b663bcc762a.ttf") format("truetype");
    }
    @font-face{
        font-family:"Avenir LT W01_35 Light_1475502";
        src:url("Fonts/63a166cb-be60-435c-a056-75172e43efa5.eot?#iefix");
        src:url("Fonts/63a166cb-be60-435c-a056-75172e43efa5.eot?#iefix") format("eot"),url("Fonts/a59168c1-917d-4de9-a244-0316c057c357.woff2") format("woff2"),url("Fonts/6dc0e7d8-9284-44e1-8f05-984a41daa3a4.woff") format("woff"),url("Fonts/2315df7a-8bc2-433d-bf0a-162fc0063de0.ttf") format("truetype");
    }
    @font-face{
        font-family:"Avenir LT W01_45 Book1475508";
        src:url("Fonts/710789a0-1557-48a1-8cec-03d52d663d74.eot?#iefix");
        src:url("Fonts/710789a0-1557-48a1-8cec-03d52d663d74.eot?#iefix") format("eot"),url("Fonts/065a6b14-b2cc-446e-9428-271c570df0d9.woff2") format("woff2"),url("Fonts/65d75eb0-2601-4da5-a9a4-9ee67a470a59.woff") format("woff"),url("Fonts/c70e90bc-3c94-41dc-bf14-caa727c76301.ttf") format("truetype");
    }
    @font-face{
        font-family:"Avenir LT W01_45 Book O1475514";
        src:url("Fonts/d8c50fcc-bc32-4f31-8c24-b170c64e2254.eot?#iefix");
        src:url("Fonts/d8c50fcc-bc32-4f31-8c24-b170c64e2254.eot?#iefix") format("eot"),url("Fonts/476612d9-282d-4f76-95cd-b4dd31e7ed21.woff2") format("woff2"),url("Fonts/f1ebae2b-5296-4244-8771-5f40e60a564a.woff") format("woff"),url("Fonts/04d1bf6c-070d-4b7e-9498-6051c9f0c349.ttf") format("truetype");
    }
    @font-face{
        font-family:"Avenir LT W01_55 Roman1475520";
        src:url("Fonts/57bf7902-79ee-4b31-a327-1bbf59a3d155.eot?#iefix");
        src:url("Fonts/57bf7902-79ee-4b31-a327-1bbf59a3d155.eot?#iefix") format("eot"),url("Fonts/b290e775-e0f9-4980-914b-a4c32a5e3e36.woff2") format("woff2"),url("Fonts/4b978f72-bb48-46c3-909a-2a8cd2f8819c.woff") format("woff"),url("Fonts/9bdf0737-f98c-477a-9365-ffc41b9d1285.ttf") format("truetype");
    }
    @font-face{
        font-family:"Avenir LT W01_55 Obliqu1475526";
        src:url("Fonts/1e9b2738-9316-4b0c-97c0-5423b69ea147.eot?#iefix");
        src:url("Fonts/1e9b2738-9316-4b0c-97c0-5423b69ea147.eot?#iefix") format("eot"),url("Fonts/1a7173fa-062b-49ad-9915-bc57d3bfc1f5.woff2") format("woff2"),url("Fonts/cdda031e-26e9-4269-83d1-5a218caa10db.woff") format("woff"),url("Fonts/6d1ce413-19e7-4b43-b328-6cdedc58b35a.ttf") format("truetype");
    }
    @font-face{
        font-family:"Avenir LT W01_65 Medium1475532";
        src:url("Fonts/e0542193-b2e6-4273-bc45-39d4dfd3c15b.eot?#iefix");
        src:url("Fonts/e0542193-b2e6-4273-bc45-39d4dfd3c15b.eot?#iefix") format("eot"),url("Fonts/17b90ef5-b63f-457b-a981-503bb7afe3c0.woff2") format("woff2"),url("Fonts/c9aeeabd-dd65-491d-b4be-3e0db9ae47a0.woff") format("woff"),url("Fonts/25f994de-d13f-4a5d-a82b-bf925a1e054d.ttf") format("truetype");
    }
    @font-face{
        font-family:"Avenir LT W01_65 Medium1475538";
        src:url("Fonts/cebcf56a-ea7e-4f5c-8110-a7ee367c1f91.eot?#iefix");
        src:url("Fonts/cebcf56a-ea7e-4f5c-8110-a7ee367c1f91.eot?#iefix") format("eot"),url("Fonts/deb5e718-7abb-4df3-9365-edfa95317090.woff2") format("woff2"),url("Fonts/04801919-17ee-4c6b-8b17-eb1965cb3ed6.woff") format("woff"),url("Fonts/cee053ec-4b41-4506-a1fe-796261690610.ttf") format("truetype");
    }
    @font-face{
        font-family:"Avenir LT W01_85 Heavy1475544";
        src:url("Fonts/6af9989e-235b-4c75-8c08-a83bdaef3f66.eot?#iefix");
        src:url("Fonts/6af9989e-235b-4c75-8c08-a83bdaef3f66.eot?#iefix") format("eot"),url("Fonts/d513e15e-8f35-4129-ad05-481815e52625.woff2") format("woff2"),url("Fonts/61bd362e-7162-46bd-b67e-28f366c4afbe.woff") format("woff"),url("Fonts/ccd17c6b-e7ed-4b73-b0d2-76712a4ef46b.ttf") format("truetype");
    }
    @font-face{
        font-family:"Avenir LT W01_85 Heavy_1475550";
        src:url("Fonts/e6b412d9-d1ed-4b17-bb93-a6911df8640d.eot?#iefix");
        src:url("Fonts/e6b412d9-d1ed-4b17-bb93-a6911df8640d.eot?#iefix") format("eot"),url("Fonts/3c210c80-960f-4684-850b-25390b4d08af.woff2") format("woff2"),url("Fonts/cb5c71ad-e582-4d00-929c-67fbfaeb1c27.woff") format("woff"),url("Fonts/9ced8e96-4602-4507-8c20-4ff381949a9a.ttf") format("truetype");
    }
    @font-face{
        font-family:"Avenir LT W01_95 Black1475556";
        src:url("Fonts/f55e4498-ad48-4577-93a0-c614de5cbbb8.eot?#iefix");
        src:url("Fonts/f55e4498-ad48-4577-93a0-c614de5cbbb8.eot?#iefix") format("eot"),url("Fonts/c78eb7af-a1c8-4892-974b-52379646fef4.woff2") format("woff2"),url("Fonts/75b36c58-2a02-4057-a537-09af0832ae46.woff") format("woff"),url("Fonts/b5c44a82-eeb8-41de-9c3f-a8db50b24b8a.ttf") format("truetype");
    }
    @font-face{
        font-family:"Avenir LT W01_95 Black_1475562";
        src:url("Fonts/4030caeb-d266-4d36-ac58-a3bb7a5b1bfa.eot?#iefix");
        src:url("Fonts/4030caeb-d266-4d36-ac58-a3bb7a5b1bfa.eot?#iefix") format("eot"),url("Fonts/a2477e08-09d9-4d4b-97a9-23a1e22cb44c.woff2") format("woff2"),url("Fonts/19d12bba-92b1-43ad-9bab-cd36a4195c2a.woff") format("woff"),url("Fonts/5ba5a010-7470-4d9d-8a49-2920dc1be1f8.ttf") format("truetype");
    }
    @font-face{
        font-family:"HarmoniaSans W01";
        src:url("Fonts/a5b66773-6a36-469a-8f45-e08448130bf2.eot?#iefix");
        src:url("Fonts/a5b66773-6a36-469a-8f45-e08448130bf2.eot?#iefix") format("eot"),url("Fonts/3ba56aa2-c01d-4bfc-aae4-eac13ee2ebbc.woff2") format("woff2"),url("Fonts/51f1c13a-2c9b-4cba-9cbf-93317cbd3e10.woff") format("woff"),url("Fonts/7b11ae47-5126-4c06-8f61-fbee4b6a8461.ttf") format("truetype");
    }
    @font-face{
        font-family:"SackersGothicW01-Square";
        src:url("Fonts/83ad6dd5-1fcc-4be2-8c04-e2a42e3ca7e8.eot?#iefix");
        src:url("Fonts/83ad6dd5-1fcc-4be2-8c04-e2a42e3ca7e8.eot?#iefix") format("eot"),url("Fonts/cc45dd18-2ca5-4714-a184-4eeb05ceafa9.woff2") format("woff2"),url("Fonts/f2662282-3533-444c-90d6-0fa541268c22.woff") format("woff"),url("Fonts/7ac1675a-fefd-46d8-81cb-39de61d7e9d8.ttf") format("truetype");
    }
</style>
<script type="text/javascript">
var MTIProjectId='971db5ee-f70c-4d68-a104-09abf9a44559';
 (function() {
        var mtiTracking = document.createElement('script');
        mtiTracking.type='text/javascript';
        mtiTracking.async='true';
         mtiTracking.src='mtiFontTrackingCode.js';
        (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild( mtiTracking );
   })();
</script>

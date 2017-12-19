<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function(event) {
        if($) {
            $('#xmascardModal').modal('show')
        }
    });
</script>
<style>
    #xmas_card .lightbox-title a.lightbox-title-close {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 8px;
        right: 10px;
        z-index: 9999;
        background-image: url(/assets/site/images/icon-close-white.svg);
        -webkit-background-size: 40px;
        -moz-background-size: 40px;
        -o-background-size: 40px;
        background-size: 40px;
        background-repeat: no-repeat;
        background-position: center center;
        cursor: pointer;
        border-radius: 100px;
        border: 2px solid transparent;
        -webkit-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
    }
    #xmas_card .lightbox-title a.lightbox-title-close:hover {
        border: 2px solid #ffffff;
        transform: scale(0.8);
        -webkit-transform: scale(0.8) rotateZ(90deg);
    }
    #xmas_card div.modal-header.lightbox-title {
        border-bottom: none;
        padding: 0 !important;
    }
    #xmascardModal .modal-content{
        background: url('/assets/site/images/2017-holiday-card-webdev-background.png');
        background-size: contain;
    } 
    #xmascardModal .modal-dialog,
    #xmascardModal .modal-content {
        /* 80% of window height */
        /* height: 996px;
        width: 896px; */

        /* height: 889px;
        width: 800px; */
        height: calc(100% - 30px);
        width: calc(83vh - 11px);
        max-height: 889px;
        max-width: 774px;
    }
    @media (min-width: 768px) {
        #xmascardModal .modal-dialog,
        #xmascardModal .modal-content {
            min-height: 500px;
            min-width: 449px;
        }
        #xmascardModal .mcnImage {
            max-width: 544px;
            min-width: 316px;
            width: 58vh;
        }
    }
    #xmascardModal .modal-body {
        /* 100% = dialog height, 120px = header + footer */
        max-height: calc(100% - 120px);
        text-align: center;
        margin: 0;
        padding: 0 11px 0 0;
    }
    #xmascardModal .screen{
        width: 60vh;
        height: 36vh;
        margin: 28vh auto 0;
        overflow: hidden;
    }
    /**/
    @media (min-width: 768px) and (max-height: 551px) {
        #xmascardModal .screen{
            width: 328px;
            height: 196px;
            margin: 155px auto 0;
        }
    }
    @media (min-width: 768px) and (min-height: 928px) {
        #xmascardModal .screen{
            width: 650px;
            height: 340px;
            margin: 266px auto 0;
        }
    }
    /**/

    @media (min-width: 611px) and (max-width: 768px) {
        #xmascardModal .modal-dialog{
            margin: 30px auto;
        }
    }

    @media (max-width: 768px){
        #xmascardModal .modal-dialog,
        #xmascardModal .modal-content {
            /* 80% of window height */
            height: 107vw;
            width: calc(100% - 10px);
        }
        #xmascardModal .modal-body {
            padding: 0 6px 0 0;
        }
        #xmascardModal .screen{
            width: 67vw;
            height: 40vw;
            margin: 34vw auto 0;
            overflow: hidden;
        }
        #xmascardModal .mcnImage {
            width: 66vw;
        }
    }

</style>
<!-- Modal -->
<div class="modal fade" id="xmascardModal" tabindex="-1" role="dialog" aria-labelledby="xmascardModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg">
   <div class="modal-content" id="xmas_card">
      <div class="modal-header lightbox-title">
         <a class="lightbox-title-close" data-dismiss="modal" aria-hidden="true"></a>
      </div>
      <div class="modal-body">
        <div class="screen">
            <img alt="Happy Holidays from WebDev" src="/assets/site/images/happy_holidays_webdev.gif" class="mcnImage">
        </div>
      </div>
   </div>
   <!-- /.modal-content -->
</div>
<!-- /.modal-dialog -->
</div>
<!-- /.modal -->
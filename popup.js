<style>
.hide{display:none;visibility:hidden;}
.popbox{position:fixed;top:0;left:0;bottom:0;width:100%;z-index:1000000;}
.pop-content{width:800px;height:400px;display:block;position:absolute;top:50%;left:50%;margin:-200px 0 0 -400px;z-index:2;box-shadow:0 3px 20px 0 rgba(0,0,0,.5);}
.popcontent{width:100%;height:100%;display:block;background:#fff;border-radius:5px;overflow:hidden}
.pop-overlay{position:absolute;top:0;left:0;bottom:0;width:100%;z-index:1;background:rgba(0,0,0,.7)}
.popbox-close-button{position:absolute;width:20px;height:20px;line-height:20px;text-align:center;top:-10px;right:-10px;background-color:#fff;box-shadow:0 -1px 1px 0 rgba(0,0,0,.2);border:none;border-radius:50%;cursor:pointer;font-size:34px;font-weight:lighter;padding:0}
.popcontent img{width:100%;height:100%;display:block}
.flowbox{position:relative;overflow:hidden}
@media screen and (max-width:840px){.pop-content{width:90%;height:auto;top:20%;margin:0 0 0 -45%}
.popcontent img{height:auto}
}
</style>
<div class="popbox hide" id="popbox">
<div aria-label='Close' class="pop-overlay" onclick='document.getElementById("popbox").style.display="none";removeClassonBody();' role="button" tabindex="0"/>
<div class="pop-content">
<a href="#" target="_blank" rel="noopener noreferrer" title="box">
<div class="popcontent">

<script src="https://raw.githubusercontent.com/wahyu9kdl/partner/main/Ads.js"></script>

</div>
</a>
<button aria-label='Close' class='popbox-close-button' onclick='document.getElementById("popbox").style.display="none";removeClassonBody();'>&times;</button>
</div>
</div>
<script>
//<![CDATA[
setTimeout(function(){
 document.getElementById('popbox').classList.remove('hide');
 document.body.className+=" flowbox"
 }, 5000);
function removeClassonBody(){var element=document.body;element.className=element.className.replace(/bflowboxb/g,"")}
//]]>
 </script>

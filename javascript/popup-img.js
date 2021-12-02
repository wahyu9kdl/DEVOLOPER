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
<script type="text/javascript">
var jumlah_iklan = 10;
var waktu_sekarang = new Date()
var detik = waktu_sekarang.getSeconds(3)
var pasang_iklan = detik % jumlah_iklan;
pasang_iklan += 1;
if (pasang_iklan == 1) {
    url = "https://www.alhikmah.my.id/p/image.html?m=1";
    alt = "Ads";
    title = "Ads";
    banner = "https://1.bp.blogspot.com/-RQXOUcWXeY4/YQqM1mGwAjI/AAAAAAAADsc/-RME9sn_w_4xKFG63qk4ahUQSM-uuNgggCLcBGAsYHQ/s169/3dgifmaker04194.gif";
    width = "300";
    height = "250";
}
if (pasang_iklan == 2) {
    url = "https://app.appsflyer.com/com.ada.astrapay?pid=accesstradeid_int&c={appsflyer-campaign-name}&af_siteid=30166&af_click_lookback=7d&mcn=860320be12a1c050cd7731794e231bd3&clickid={gclid}&atnct1=860320be12a1c050cd7731794e231bd3&atnct2={gclid}&atnct3=DBpOb005q3k000n9y";
    alt = "Ads";
    title = "Ads";
    banner = "https://imp.accesstra.de/img.php?rk=005q3k000n9y";
    width = "300";
    height = "250";
}
if (pasang_iklan == 3) {
    url = "https://christyanarden.id/?atnct1=d516b13671a4179d9b7b458a6ebdeb92&atnct2={gclid}&atnct3=7HZo700245m000n9y";
    alt = "Ads";
    title = "Ads";
    banner = "https://imp.accesstra.de/img.php?rk=00245m000n9y";
    width = "300";
    height = "250";
}
if (pasang_iklan == 4) {
    url = "https://shopee.co.id/universal-link?utm_source=an_11146330000&utm_medium=affiliates&utm_campaign=4fmaibgfywmy-&utm_content={gclid}-30166---&af_siteid=an_11146330000&pid=affiliates&af_click_lookback=7d&af_viewthrough_lookback=1d&is_retargeting=true&af_reengagement_window=7d&af_sub_siteid=----&c=4fmaibgfywmy-&atnct1=4e0cb6fb5fb446d1c92ede2ed8780188&atnct2={gclid}&atnct3=dwEBw004ec5000n9y";
    alt = "Ads";
    title = "Ads";
    banner = "https://imp.accesstra.de/img.php?rk=004ec5000n9y";
    width = "300";
    height = "250";
}
if (pasang_iklan == 5) {
    url = "https://www.olx.co.id/olxautos/?utm_source=affiliate&utm_medium=accesstrade&atnct1=d045c59a90d7587d8d671b5f5aec4e7c&atnct2={gclid}&atnct3=XbKAZ0027mc000n9y";
    alt = "Ads";
    title = "Ads";
    banner = "https://imp.accesstra.de/img.php?rk=0027mc000n9y";
    width = "300";
    height = "250";
}
if (pasang_iklan == 6) {
    url = "https://billing.exabytes.co.id/aff.php?aff=8303039";
    alt = "Ads";
    title = "Ads";
    banner = "https://www.bitcatcha.co.id/wp-content/uploads/2020/10/exabytes-wplogo.png";
    width = "300";
    height = "250";
}
if (pasang_iklan == 7) {
    url = "https://www.seobility.net/de/?px=2&a_aid=5fc75c87d70c2&a_bid=e2632ebd";
    alt = "Ads";
    title = "Ads";
    banner = "https://affiliate.seobility.net/accounts/default1/yywnbg/e2632ebd.gif";
    width = "300";
    height = "250";
}
if (pasang_iklan == 8) {
    url = "https://niagahoster.co.id/ref/362291?atnct1=0a113ef6b61820daa5611c870ed8d5ee&atnct2={gclid}&atnct3=fhLD70027j8000n9y";
    alt = "Ads";
    title = "Ads";
    banner = "https://imp.accesstra.de/img.php?rk=0027j8000n9y";
    width = "300";
    height = "250";
}
if (pasang_iklan == 9) {
    url = "https://bukalapak.go2cloud.org/aff_c?offer_id=15&aff_id=2153&aff_sub={gclid}&aff_sub2=30166&source=30166&url=https%3A%2F%2Fm.bukalapak.com%2Fpromo-campaign%2Fverifikasi-umur-velo-5%3Fblca%3DAFFLT-{affiliate_id}%26ho_offer_id%3D{offer_id}%26ho_trx_id%3D{transaction_id}%26affiliate_id%3D{affiliate_id}%26utm_source%3Dhasoffers-{affiliate_id}%26utm_medium%3Daffiliate%26ho_clk_id%3D{aff_click_id}%26aff_sub1%3D{aff_sub}%26aff_sub2%3D{aff_sub2}%26aff_sub3%3D{aff_sub3}%26aff_sub4%3D{aff_sub4}%26aff_sub5%3D{aff_su&atnct1=496e05e1aea0a9c4655800e8a7b9ea28&atnct2={gclid}&atnct3=HWYmq002aki000n9y";
    alt = "Ads";
    title = "Ads";
    banner = "https://imp.accesstrade.co.id/img.php?rk=002aki000n9y";
    width = "300";
    height = "250";
}
if (pasang_iklan == 10) {
    url = "https://prf.hn/click/camref:1011l7N6I/pubref:{gclid}/adref:30166?atnct1=26dd0dbc6e3f4c8043749885523d6a25&atnct2={gclid}&atnct3=JK5CH00167y000n9y";
    alt = "Ads";
    title = "Ads";
    banner = "https://imp.accesstra.de/img.php?rk=00167y000n9y";
    width = "300";
    height = "250";
}

document.write('<a href=\"' + url + '\" target=\"_blank\" rel=\"nofollow\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('title=\"' + title + '\" alt=\"' + alt + '\"></a>');
</script>

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

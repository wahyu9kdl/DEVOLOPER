<script type='text/javascript'>
//<![CDATA[
var seconds = 100;
function generate() {
var id;
id = setInterval(function () {
if (seconds < 1){
clearInterval(id);
window.location = 'URL-LINK';
}else {
btn.style.display = "none";
menunggu.style.display = "inline";
document.getElementById('tunggu').innerHTML = --seconds;
}
}, 1000);}
//]]>
</script>
<button onclick="generate()" id="btn">Download</button>
<div id="menunggu">File otomatis terunduh dalam <b><span id="tunggu"></span> detik</b></div>

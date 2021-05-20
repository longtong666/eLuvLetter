document.charset="UTF-8"
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^1000Dear&nbsp;&nbsp;肖雅文", 
				"小可爱<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你的眼睛是银河不落星系，你的呼吸仿佛是海浪风起。借着你的光，我看到了从未看到过的世界。是晚风，是晚霞，是微笑不止，是无可替代。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夏天有迟暮的霞光，正如晚来的你皆是笑意。我的文文可爱宝贝是最灿烂的花开，最美丽的意外。<br><br><p style='float:right; display:block; width:80px;'>^1000你的泷桐</p>"],
			typeSpeed: 100,
			backSpeed: 50
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}

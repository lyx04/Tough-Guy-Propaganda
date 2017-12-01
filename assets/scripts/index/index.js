(function($) {
	$(function() {
		var mySwiper = new Swiper('#banner', {
			direction: 'horizontal',
			loop: true,
		})
		//		number数字转换
		var numTop = $(".number").offset().top
		var arr = [10, 2000, 600, 90, 50]
		$(window).on("scroll", function(e) {
			var el = $(window).scrollTop()
			var t = setInterval(move,1000)
			function move(){
				$(".number").find("li span").each(function(i, v) {
						var spannum = $(".number").find("li span:first").html()
						if(spannum > arr[0]) {
							clearInterval(t) 
						} else {
							var numOnly = arr[i] / 10
							var this_num = $(v).html()
							$(v).html()
							$(v).html(this_num* 1 + numOnly )
						}

					})
			}
					
			
		})
//		新闻动态的切换
		$(".toggle").find("li").on("click",function(){
			var index = $(this).index()
			$(".toggle").find("li").removeClass("active")
			$(this).addClass("active")
			$(".toggle_first").hide()
			$(".toggle_first").eq(index).show()
		})
	})
})(jQuery)
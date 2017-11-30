(function($) {
	$(function() {
		$(".btn_xia").on("click",function(){
			$(this).find("span").toggleClass("active")
			$(this).siblings(".app_only_img_img").find("img").toggle()
		})
		$(".show_down").on("click",function(){
			$(this).siblings(".years").toggleClass("active")
			$(this).siblings(".app_only_list").toggle()
			$(this).closest("li").toggleClass("active")
		})
		$(".nav_tab").find("li").on("click",function(){
			$(".app_list").hide()
			var index = $(this).index()
			$(".app_list").eq(index).show()
			$(".nav_tab").find("li").removeClass("active")
			$(this).addClass("active")
		})
	})
})(jQuery)
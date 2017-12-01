
	(function($){
		$(function(){
			var imgarr = [
				{
					index:"../../assets/image/ui/4545.png",
					left:"../../assets/image/ui/4324.png",
					right:"../../assets/image/ui/4324.png",
				},
				{
					index:"../../assets/image/a1.png",
					left:"../../assets/image/a2.png",
					right:"../../assets/image/a2.png"
				},
				{
					index:"../../assets/image/ui/4545.png",
					left:"../../assets/image/ui/4324.png",
					right:"../../assets/image/ui/4324.png"
				},
				{
					index:"../../assets/image/ui/4545.png",
					left:"../../assets/image/ui/4324.png",
					right:"../../assets/image/ui/4324.png"
				}
			]
			var li_index = 0
			$(".list_nav li").on("mouseleave",function(){
				t = setInterval(move,1000)
			})
			$(".list_nav li").on("mouseenter",function(){
				clearInterval(t)
				var index = $(this).index()
				$(".list_nav li").removeClass("active")
				$(this).addClass("active")
				$(".web_content .list .p3 img").attr("src",imgarr[index].index)
				$(".web_content .list .p2 img").attr("src",imgarr[index].left)
				$(".web_content .list .p4 img").attr("src",imgarr[index].right)
			})
			var t = setInterval(move,1000)
			function move(){
				$(".list_nav li").removeClass("active")
				$(".list_nav li").eq(li_index).addClass("active")
				$(".web_content .list .p3 img").attr("src",imgarr[li_index].index)
				$(".web_content .list .p2 img").attr("src",imgarr[li_index].left)
				$(".web_content .list .p4 img").attr("src",imgarr[li_index].right)
				li_index++
				
				li_index = li_index<imgarr.length?li_index:0
			}
})

	})(jQuery)

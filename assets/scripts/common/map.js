window.onload = function() {
			function init() {
				var mapObj = new AMap.Map('location_map', {
					center: [112.5477683560, 37.8742945925],
					zoom: 16,

				});
				var markers = []; //provinces见Demo引用的JS文件
				marker = new AMap.Marker({
					position: "",
					offset: new AMap.Pixel(-10, 0),
					map: mapObj
				});
				markers.push(marker);
				//
				//                              //构建信息窗体中显示的内容
				//                              var info = [];
				//                              info.push("<div style=\"padding:0px 0px 0px 4px;\"><b>海信资产管理有限公司</b>");
				//                              info.push("电话 : 0351-3530677<br>邮箱：tyshaixin@163.com");
				//                              info.push("地址：山西省太原市杏花岭区新建路152号万达公馆3号楼2单元3701号房</div></div>");
				//                              infoWindow = new AMap.InfoWindow({
				//                                  content: info.join("<br/>")  //使用默认信息窗体框样式，显示信息内容
				//                              });
				//                              infoWindow.open(mapObj, mapObj.getCenter());
			}
			init()
		}
$.ajax({
	url:"http://www.ikindness.cn/api/test/getProduct"

}).done(function(data){
	console.log(data);
	var _data=data.data;

	for(var i=0;i<_data.length;i++){
		$(".box").append(
			"<div class=\"bor\">"
			+"<div class=\"href\" style=\"background-image:url(http:"+_data[i].image+")\"></div>"
			+"<span class=\"price\">￥"+_data[i].price+"</span>"
			+"<span class=\"baoyou\">包邮</span><br>"
			+"<span class=\"name\">"+_data[i].name+"</span>"
			+"<span class=\"sold\">已售"+_data[i].sold+"件</span><br>"
			+"<span class=\"owner\">"+_data[i].owner+"</span>"
			+"<span class=\"location\">"+_data[i].location+"</span><br>"
			+"<div class=\"iconleft\"></div>"
			+"<div class=\"iconright\"></div>"
			+"</div> "
			)
	};
		var page= "1";
		if(page == "1"){
			page ="0";

		}else{
			page = (page-1)*5;
		}

});
	


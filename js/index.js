//轮播
let lonbotu=$(".banner_tu img");
let lonbodian=$(".banner_btn li");
let n=0;
let arr=["#F9D1DC","#E8E8E8","#FFFCF1","#F2F2F2","#FFFEFF","#A8D7DD"];
$(lonbodian).mouseenter(function(){
	let index=$(lonbodian).index(this);
	$("#banner").css("background",arr[index]);
	$(lonbotu).css({"opacity":0}).eq(index).css({"opacity":1,"transition":"all 0.3s linear"})
	$(lonbodian).css("background","#000").eq(index).css("background","#ccc")
	n=index;
})
function move(){
	n++;
	if(n==6){
		n=0;
	}
	$(lonbotu).css({"opacity":0}).eq(n).css({"opacity":1,"transition":"all 0.3s linear"})
	$("#banner").css("background",arr[n]);
	$(lonbodian).css("background","#000").eq(n).css("background","#ccc")
}
let t=setInterval(move,2000);
$(".banner_all").mouseenter(function(){
	clearInterval(t);
})
$(".banner_all").mouseleave(function(){
	t=setInterval(move,2000);
})
//label
let label=$(".label>ul>li");
let label_item=$(".label_item");
let arr1=["#e54077","#427def","#6347ed","#e54077","#6347ed","#427def","#fa5c5c","#f7a831","#f7a831","#427def","#427def","#fa5c5c","#f7a831","#e54077","#427def","#6347ed"];
$(label).mouseenter(function(){
	let index=$(label).index(this);
	$(label).css({"background":"rgba(0,0,0,0.6)","color":"#fff","fontWeight":400}).find("a").css({"color":"#666"});
	$(this).css({"color":arr1[index],"background":"#fff","fontWeight":800}).find("a").css({"fontWeight":400});
	$(label_item).css({"display":"none"});
	label_item.eq(index).css({"display":"block"});
});
$(".label").mouseleave(function(){
	label_item.css({"display":"none"});
	$(label).css({"background":"rgba(0,0,0,0.6)","color":"#fff","fontWeight":400});
})
//品牌换一批
let type_n=0;
$(".type_item ul li:last-child").click(function(){
	type_n++;
	if(type_n==3){
		type_n=0;
	}
	$(".type_item ul").css({"zIndex":1,"display":"none"}).eq(type_n).css({"zIndex":2,"display":"block"})
	.children("li").transition({rotateY:180},1000);
	$(".type_item ul").eq(type_n-1).children("li").transition({rotateY:0},0);
})
//今日疯抢
let nn=0;
let fengqiang=$(".supermarket_bottom_right_top span");
let fengqiang_item=$(".supermarket_bottom_right_bottom");
$(fengqiang).mouseenter(function(){
	let index=$(fengqiang).index(this);
	$(fengqiang).css("background","#f1f1f1").eq(index).css("background","#00b262");
	$(fengqiang_item).css("display","none").eq(index).css("display","block");
	nn=index;
})
function fengqiang_move(){
	nn++;
	if(nn==2){
		nn=0;
	}
	$(fengqiang).css({"background":"#f1f1f1","color":"#000"}).eq(nn).css({"background":"#00b262","color":"#fff"});
	$(fengqiang_item).css("display","none").eq(nn).css("display","block");
}	
let tt=setInterval(fengqiang_move,2000);
$(".supermarket_bottom_right li:first-child").mouseenter(function(){
	clearInterval(tt);
})
$(".supermarket_bottom_right li:first-child").mouseleave(function(){
	tt=setInterval(fengqiang_move,2000);
})
//顶部固定搜索栏
$(window).scroll(function(){
	let st=$(window).scrollTop();
	if(st>500){
		$("#left_nav").slideDown();
	}else{
		$("#left_nav").slideUp();
	}
	if(st>600){
		$("#search").slideDown();
	}else{
		$("#search").slideUp();
	}
})
//左边导航
let left_nav_item=$(".left_nav_item");
let left_nav_name=$(".left_nav_title");
let arr2=["#64C333","#FF0036","#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#FF0036"]
$(left_nav_name).click(function(){
	let index=$(left_nav_name).index(this);
	let ot=$(left_nav_item).eq(index).offset().top-50;
	$("html").animate({scrollTop:ot},200);
})
$(window).scroll(function(){
	let st=$(window).scrollTop();
	$(left_nav_item).each(function(index,ele){
		if(st>=$(this).offset().top-50){
			$(left_nav_name).css("background","rgba(0,0,0,0.8)").eq(index).css("background",arr2[index]);
		}
	})
})
$(".left_nav_title2,.right_nav_top").click(function(){
	$("html").animate({scrollTop:0},200);
})
//右边
$(".right_nav_item").mouseenter(function(){
	$(this).find(".right_nav_tan").animate({"left":-90},200).css({"display":"block"});
	$(this).find(".right_erweima").css({"left":-275,"display":"block"});
})
$(".right_nav_item").mouseleave(function(){
	$(this).find(".right_nav_tan").css({"left":-120,"display":"none"});
})
//like
$(".like_bottom li,.chaoshi,.tianmaoguoji_bottom li,.tianmaoguoji_bottom li:nth-child(2)").mouseenter(function(){
	$(this).prepend(function(index,val){
		return "<div class='like_cover'></div>";
	})
})
$(".like_bottom li,.chaoshi,.tianmaoguoji_bottom li").mouseleave(function(){
	$(this).find("div").remove(".like_cover");
})
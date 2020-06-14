$(document).ready(function() {
 $('.header_burger').click(function(event) {
 	 $('.header_burger,.header_menu').toggleClass('active');
 	 $('body').toggleClass('lock');
 })
});
 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:500,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 567,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
$(document).ready(function(){
	$('.slidera').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:500,
		autoplaySpeed:800,
		customPaging : function(slidera, i) {
    var title = $(slidera.$slides[i]).data('title');
    return '<a class="pager__itemq"> '+title+' </a>';
            },
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 567,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
$(document).ready(function(){
	$('.sslider').slick({
		arrows:false,
		dots:false,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:1500,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
$(document).ready(function(){
	$('.asslider').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:false,
		speed:500,
		autoplaySpeed:2000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
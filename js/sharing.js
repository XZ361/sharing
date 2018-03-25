$(function(){
	$('#login').click(function(){
		$.ajax({
			type:"post",
			url:"login.html",
			async:true
		});
	})
	$('register').click(function(){
		$.ajax({
			type:"post",
			url:"register.html",
			async:true
		});
	})
})

 $(function () {
            $(window).scroll(function () {    
                if ($(window).scrollTop()>130) {     
                    $('#goUp').css('display','block');   
                    }    
            else {     
                $('#goUp').css('display','none');    
            }    
        });    
   });    

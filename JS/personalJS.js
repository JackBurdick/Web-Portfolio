$(document).ready(function() {
			/*
			* Plugin intialization
			*/
	    	$('#pagepiling').pagepiling({
	          	direction: 'horizontal',
	    		menu: '#menu',
	    		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
					scrollingSpeed: 300,
        	easing: 'swing',
			    sectionsColor: ['white', '#39C', '#2C3E50', '#bdedc9' ],
			    navigation: {
			    	'position': 'right',
			   		'tooltips': ['Home', 'Education', 'Experience', 'About']
			   	},
			    afterRender: function(){
			    	$('#pp-nav').addClass('custom');
			    },
			    afterLoad: function(anchorLink, index){
			    	if(index>1){
			    		$('#pp-nav').removeClass('custom');
			    	}else{
			    		$('#pp-nav').addClass('custom');
			    	}
			    }
			});
	    });

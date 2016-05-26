$(document).ready(function() {
			/*
			* Plugin intialization
			*/

// #39C
	    	$('#pagepiling').pagepiling({
	          	direction: 'horizontal',
	    		menu: '#menu',
	    		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
					scrollingSpeed: 300,
        	easing: 'swing',
			    sectionsColor: ['white', '#2C3E50', '#edf5ff', '#bdedc9', '#39C' ],
			    navigation: {
			    	'position': 'right',
			   		'tooltips': ['Home', 'Education', 'Experience', 'Projects', 'About']
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

				$('.tlt').textillate({
				  loop: true,

					initialDelay: 1000,

				  // sets the minimum display time for each text before it is replaced
				  minDisplayTime: 2100,
				  autoStart: true,

				  // in animation settings
				  in: {
				    effect: 'bounce',
				    delay: 50,
				    sync: true,

				  },

				  // out animation settings.
				  out: {
				    effect: 'hinge',
				    delayScale: 3.0,
				    delay: 50,
				    sync: false,
				    shuffle: true,
				  },

				  // set the type of token to animate (available types: 'char' and 'word')
				  type: 'char'
				});

				$('.default-slider').unslider({
					arrows: {
						prev: '<a class="unslider-arrow prev"><</a>',
						next: '<a class="unslider-arrow next">></a>'
					},
					infinite: true
				});

});

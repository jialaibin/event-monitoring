;(function (win) {
    var AModule = function(){
	    var t = this;
		t.el = $('<div>'+
		         '<button class="changeBtn" data-color ="red">The B module into the red</button>'+
		         '<button class="changeBtn" data-color ="purple">The B module into the purple</button>'+
				'</div>');
	    $('#left').html(t.el);
		t.init();
	};
	AModule.prototype ={
	    init: function(){
		     var t = this;
			Transceiver.listen('B_module.color','A_module.changeColor',function(color){
				t.changeColor(color);
			});
			t.event(); 
		},
	    changeColor : function(color){
		    var t = this;
			t.el.css('background',color);
		},
		event : function(){
		    var t =this;
		    t.el.delegate('.changeBtn','click',function(e){
			    Transceiver.trigger('A_module.color',[$(this).data('color')]);
			})
		}
	};
	AModule.prototype.constructor = AModule;
	
	new AModule();
})(window);
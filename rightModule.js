;(function (win) {
    var BModule = function(){
	    var t = this;
		t.el = $('<div>'+
		         '<button class="changeBtn" data-color ="navy">The A module into the navy</button>'+
		         '<button class="changeBtn" data-color ="deepskyblue">The A module into the deepskyblue</button>'+
				'</div>');
	    $('#right').html(t.el);
		t.init();
	};
	BModule.prototype ={
	    init: function(){
		    var t = this;
			Transceiver.listen('A_module.color','B_module.changeColor',function(color){
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
			    Transceiver.trigger('B_module.color',[$(this).data('color')]);
			})
		}
	};
	BModule.prototype.constructor = BModule;
	
	new BModule();
})(window);
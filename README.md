event-monitoring
================

用于事件监听，模块开发彻底分开，解决模块之间的事件依赖和加载顺序
模块分离，控制加载顺序，事件不丢失

优势一、彼此之间有相互控制的事件时，不需要按顺序依赖加载，也不需要再加些总体控制层的东西！
		    使多人开发，更方面，耦合性更低，后期维护性更高。
		    
优势二、事件响应不丢失，当A模块加载完后立即改变B模块的颜色，这时B模块还没有加载完成，
			等B模块加载完成后会立即响应A模块之前触发的事件。

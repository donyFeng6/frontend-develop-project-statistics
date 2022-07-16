define(function(require, exports, module) {

    var $ = require('jquery')

    function Hello(){
        this.render()
    }

    Hello.prototype.render = function(){
        $('<h1 style="display:none;">Hello SeaJS !</h1>').appendTo('body').fadeIn(2000)
        // alert($);
        $('#submit').on('submit',function(res){
        	alert(res);
        });
    };

    return Hello

});



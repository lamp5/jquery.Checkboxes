(function($){
    $.fn.vcheck = function(options){
        options = $.extend({}, options);

        return this.each(function() {
            var $input = $(this);
            
            var vcheck = '<div class="vcheck';
            
            if ($input.is(':checked')) {
                vcheck += ' selected';
            }

            vcheck += '"></div>';
            
            $input.hide();
            $input.after(vcheck);

            var $vcheck = $input.next('.vcheck');

            $vcheck.click(function() {
                $(this).toggleClass('selected');
                $input.trigger('click'); 
            });
 
        });  
    }
})(jQuery);
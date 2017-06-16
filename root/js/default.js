/* IE PLACE HOLDERS */

jQuery(function() {
	jQuery.support.placeholder = false;
	test = document.createElement('input');
	if('placeholder' in test) jQuery.support.placeholder = true;
});
if(!$.support.placeholder) {
// Placeholder text is not supported. 
}
$(function() {
	if(!$.support.placeholder) { 
		var active = document.activeElement;
		$(':text').focus(function () {
            // onclick get rid of place holder
			if ($(this).attr('placeholder') !== undefined && $(this).val() == $(this).attr('placeholder')) {
				$(this).val('').removeClass('hasPlaceholder');
			}
		}).blur(function () {
			if ($(this).attr('placeholder') !== undefined && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
				$(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
				var placeholderColor = '#999999';                
                // if class is required set text color to red
                if ($(this).attr('class').indexOf('required') !== -1) {
                     placeholderColor = '#FF3333';                
                }
                $(this).css('color', placeholderColor);                

            }
		}).keydown(function () {
            // if writing make text black
            $(this).css('color', '#000000');                
		});
		$(':text').blur();
		$(active).focus();
		$('form').submit(function () {
			$(this).find(':text').each(function() { 
                if ($(this).val() == $(this).attr('placeholder')) {
                    $(this).val(''); 
                }
            });
		});
	}
});

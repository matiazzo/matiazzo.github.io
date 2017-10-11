$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.container').css('min-height', windowHeight);
  };
  setHeight();
   
  $(window).resize(function() {
    setHeight();
  });
});

var validateCheck = function(){
	if (!$("#check").is(":checked")) alert("Você deve aceitar os termos");
	else return true;
	return false;
}

var optin = function(){
	validateCheck();
	if ($("#check").is(":checked")) {
		$("#optin").hide();
		$("#subscription").show();
	}
}
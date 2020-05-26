/*!
*-----------------------------------------------------------------------------
Scripts for Chemistry Reference Resolver.
Unless stated othervise, developed by Oleksandr Zhurakovskyi and/or Dmitry
Apollonin.
*-----------------------------------------------------------------------------
*/

function update_query(abbr){
	document.resolver.q.value=abbr+" ";
	document.resolver.q.focus();
}
//=============================================================================
		
function switcher(hide,show){

	if(document.getElementById(show).style.display=="none"){
		document.getElementById(hide).style.display="none";
		document.getElementById(show).style.display="";}
	
	if(document.getElementById(hide).style.display=="none"){
		document.getElementById(hide).style.display="";
		document.getElementById(show).style.display="none";}
}

//=============================================================================
/*
function new_window(){
	address = 'http://chemsearch.kovsky.net';
	if(document.resolver.q.value !=''){
		 address = address + '?q=' + document.resolver.q.value;	
	}
	window.open(address);
}
*/
//============================================================================

/*!
 * jQuery search suggestions with arrows navigation
 * http://apolloteam.com.ua
 *
 * Copyright 2011, Dmitriy Apollonin
 *
 * Date: Sat Mar 12 16:00:00 2011
 */
 $(document).ready(function() {
	
	$("body").click(hide_suggestions);
	
	$("#q").keyup(get_suggestions);
	$("#q").keydown(navigate);
	
	//Create array of matches
	function get_suggestions(e){
		
		if (e.keyCode != 38 && e.keyCode != 40)
		{
			var input_value = $(this).val();
			if (input_value)
			{
				results = new Array();
				var length = input_value.length;
				
				$.each(abbrs, function(key, value) {
					if(value.substr(0, length) == input_value  && results.length < 15) {
						results[results.length] = value;
					}	
				});	   
				
				if (results[0]){
					print_suggestions(results);
				}
				else{
					hide_suggestions();
				}
				
			}
			else
			{
				hide_suggestions();
			}					  
		}
		
	}

	//Show suggesions
	function print_suggestions(results){
		$("#suggestions").html('').show();
		
		$.each(results, function(key, value) { 
		  $("#suggestions").append("<a href='#'>"+value+"</a>");
		});
	}
	
	//Hide suggestions block
	function hide_suggestions(){
		$("#suggestions").hide();
	}
	
	//Set current value to inuput
	$("#suggestions a").live("click", set_suggestions);
	function set_suggestions(){
		$("#q").val($(this).html());
		hide_suggestions();
		$("#q").focus();
		return false;
	}
	
	//Looking for arrows press
	function navigate(e)
	{
		//execute, only if up or down pressed
		if (e.keyCode == 38 || e.keyCode == 40){
			
			if ($("#suggestions").is(":visible")){
				a_count = $("#suggestions a").length - 1;
							
				//position of current element a.current
				var pos = $("#suggestions a").index($('.current'));
				$("#suggestions a").removeClass("current");
				
				//up pressed
				if( e.keyCode == 38){
					make_current = pos - 1;
					if (make_current == -1){
						make_current = a_count;
					}
					$($('#suggestions a').get(make_current)).addClass("current");
				} 
				
				//down pressed
				if( e.keyCode == 40){
					make_current = pos+1;
					if (make_current > a_count){
						make_current = 0;
					}
					$($('#suggestions a').get(make_current)).addClass("current");
				}   
				
				//set input' value to current element's value
				$("#q").val($($('#suggestions a').get(make_current)).html()); 
			}	
		}
		
	}
 })

//===================================================================


function add() {
	var engineURL = "http://chemsearch.kovsky.net/reference_resolver_search.xml";
	if (window.external && ("AddSearchProvider" in window.external)) {
		window.external.AddSearchProvider(engineURL);
	}
	else{ 	 
		alert("Adding a search provider is not supported by this browser.");
	} 	 
	return false;
} 

//==================================================================

function validate_and_submit(){
query = document.resolver.q.value;
if (query=="" || query==null ) return false;

resolver_address = "http://chemsearch.kovsky.net/";
//resolver_address = "http://localhost/chemsearch/www/";

//Split the search string into line-based array
query = query.toString();
query = query.replace(/\n/g,"\r\n");
query = query.replace(/;/g,"\r\n");
query = query.split("\r\n");

//if only one item - do simple resolving
if (query.length==1) return true;

//if between 2 and 20 lines - resolve in new windows
if (query.length>20) {
	window.alert("Too many references, sorry. I will now resolve only the first 20.");
}

for(i=0;i< (query.length>20 ? 20 : query.length);i++){
	//this filters empty lines
	if (query[i].length>1) {
		adres = query[i].replace("#","%23");
		window.open(resolver_address+"index.php?q="+adres);
	}
	}


return false;
}

//======================================================================

function shift_enter(e, form){
		//shift-enter		
		if (((e.keyCode == 13) || (e.keyCode == 10)) && (e.shiftKey == true)) {
		return true; //allow for new line
	}

		//enter
		else if ( (e.keyCode == 13) || (e.keyCode == 10) ) {

		query = document.resolver.q.value;
		if (query=="" || query==null ) return false;
		query = query.toString();
		query = query.replace(/\n/g,"\r\n");
		query = query.replace(/;/g,"\r\n");
		query = query.split("\r\n");
		if (query.length==1) {form.submit();return false;}
		else {validate_and_submit(); return false}	
		}
		
	}
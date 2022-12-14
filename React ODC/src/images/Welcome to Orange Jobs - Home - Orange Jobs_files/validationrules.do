


var validationRules = [
	['validate-ascii', 'Please fill with western alphabet characters', function(v) {
		return isascii(v);
	}],
	['validate-required', 'This is a required field', function(v) {
		v = v.replace(/^\s+|\s+$/g, '');
		return !(v == '');
	}],
	['validate-email', 'Please enter a valid email address, e.g. john@domain.com', function (v) {
		return (v == '') || /\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(v)
	}],
	['validate-phone', 'Digits only, please', function (v) {
		return (v == '') || /^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(v)
	}],
	['validate-nosameemail', 'Emails must be different', function (v) {
				return $("#emailPub").html().replace(/^\s+|\s+$/g, '') != $("#emailgodson").val();
			}],
	['validate-selection', 'Please select one of these options', function(v,elm){
				return elm.options ? elm.selectedIndex > 0 : !(v == '');
			}],
	['validate-one-required', 'Please select one of these options', function (v,elm) {
				var p = elm.parentNode;
				var options = p.getElementsByTagName('option');
				return $A(options).any(function(elm) {
					return $F(elm);
				});
			}],
	['validate-cb-required', 'agreement missing', function(v,elm) {
				return $(elm).is(':checked');
			}],
	['validate-resume-required', 'CV missing', function(v,elm) {
			return !($("#resumetext").val() == "" && $("#resumefile").val() == "");
			}],
	['validate-letter-required', 'Letter missing', function(v,elm) {
			return !($("#lettertext").val() == "" && $("#letterfile").val() == "");
			}],
	['validate-resumefilename-required', 'CV missing', function(v,elm) {
			return $('[name*="resumefilename"]').val()!='';
			}],
	['validate-letterfilename-required', 'Letter missing', function(v,elm) {
			return $('[name*="letterfilename"]').val()!='' || $('[name*="lettertext"]').val().trim()!='';
			}],
	['validate-country', 'This country is unknown', function(v,elm) {
			var text = $(elm).val();
			var id = $('#id_' + $(elm).attr('id')).val();
			if( countries ){
				var items = countries.items;
				if ($.isArray(items)) {
					for (var i = 0; i < items.length; i++) {
						if ( id == items[i].id ) return true;
					}
					for (var i = 0; i < items.length; i++) {
						if ( text.toLowerCase() == items[i].title.toLowerCase() ){
							$('#id_' + $(elm).attr('id')).val(items[i].id);
							return true;
						}
					}
				}
			}
			return false;
			}],
	['validate-number', 'Please enter a valid number in this field', function(v) {
		return (v == '') || (!isNaN(v) && !/^\s+$/.test(v));
	}],
	['validate-from', 'Year has incorrect format (eg 2008)', function(v) {	
		if((v == '')) return true;
		var regex = /^(\d{4})$/;
		if(!regex.test(v)) return false;
		var year = new Date().getFullYear();
		return (v <= year) && ( ($('[name*="to"]').val() == '') || v <= $('[name*="to"]').val() ) ;
	}],
	['validate-to', 'Year has incorrect format (eg 2008)', function(v) {
		if((v == '')) return true;
		var regex = /^(\d{4})$/;
		if(!regex.test(v)) return false;
		var year = new Date().getFullYear();
		return (v <= year) && (v >= $('[name*="from"]').val()) ;
	}],
	['validate-ext', 'Sorry, the file extension must be : doc, pdf, rtf, docx', function(v) {
		if (v == '') return true;
		var ind = v.lastIndexOf( "." ) ;
		if ( ind == -1 || ind == v.length - 1 ) return false ;
		var ext = v.substring( ind + 1 ) ;
		return (ext == 'doc' || ext == 'docx' || ext == 'pdf' || ext == 'rtf' );
	}],
	['validate-maxLength255', 'Sorry, data length is limited in this field (255 characters)', function(v) {
		return (v.length <= 255);
	}],
	['validate-check-required', 'This is a required field', function(v,elm) {
		return $(elm).is(':checked');
	}],
	['validate-select-required', 'This is a required field', function(v,elm) {
		return $(elm).val();
	}],
	['validate-checkbox-required', 'This is a required field', function(v,elm) {
		$elm = $(elm);
		$fe = $elm.closest(".form-element");	
		$first = $fe.find("input:checkbox").first();
		return ( ( $elm.attr("id") !== $first.attr("id") || $fe.find(":checked").length > 0) );
	}],
	['validate-radio-required', 'This is a required field', function(v,elm) {
		$elm = $(elm);
		$fe = $elm.closest(".form-element");	
		$first = $fe.find("input:radio").first();
		return ( ( $elm.attr("id") !== $first.attr("id") || $fe.find(":checked").length > 0) );
	}]
];

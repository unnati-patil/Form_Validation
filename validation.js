function formReset()
	{
		document.getElementById("frm").reset();
	}
      
	function validate()
	{
      
		if( document.myForm.name.value == "" )
		{
			alert( "Please provide your name!" );
			document.myForm.name.focus() ;
			return false;
		}
		if( document.myForm.email.value == "" )
		{
			alert( "Please provide your email!" );
			document.myForm.email.focus() ;
			return false;
		}
		else 
		{
			//validateemail();
      	var emailID = document.myForm.email.value;
			atpos = emailID.indexOf("@");
			dotpos = emailID.lastIndexOf(".");
			if (atpos < 1 || ( dotpos - atpos < 2 )) 
			{		
		    	alert("Please enter correct email ID")
			 	document.myForm.email.focus() ;
			 	return false;
			}
			return( true );
		}
		
      if( document.myForm.age.value == "" )
		{
			alert( "Please provide your age!" );
			document.myForm.email.focus() ;
			return false;
		}
		var checkOK = "0123456789";
		var checkStr = document.myForm.age.value;
		var allValid = true;
		
		for (i = 0;  i < checkStr.length;  i++)
		{
			ch = checkStr.charAt(i);
			for (j = 0;  j < checkOK.length;  j++)
				if (ch == checkOK.charAt(j))
					break;
				if (j == checkOK.length)
				{
					allValid = false;
					break;
				}
		}
		if (!allValid)
		{
			alert("Please enter only digit characters in the \"age\" field.");
			document.myForm.age.focus();
			return (false);
		}		  
																	       
		var radioSelected = false;
		for (i = 0;  i < document.myForm.gender.length;  i++)
		{
			if (document.myForm.gender[i].checked)
			radioSelected = true;
		}
		if (!radioSelected)
		{
			alert("Please select one of the \"Gender\" options.");
			return (false);
		}
	
		if(document.myForm.address.value == "")
		{
			alert( "Please provide Address" );
			document.myForm.address.focus() ;
			return false;
		}	
		else
		if (document.myForm.address.value.length > 150)
		{
			alert("Please enter at most 150 characters in the Address field.");
			document.myForm.address.focus();
			return (false);
		}			
		
		if(document.myForm.description.value == "")
		{
			alert( "Please provide Description" );
			document.myForm.description.focus() ;
			return false;
		}	
		else
		if (document.myForm.description.value.length > 150)
		{
			alert("Please enter at most 150 characters in the description field.");
			document.myForm.description.focus();
			return (false);
		}	
																									
		if( document.myForm.pincode.value == "" || isNaN( document.myForm.pincode.value ) || document.myForm.pincode.value.length != 5 )
		{
			alert( "Please provide a pincode in the format #####." );
			document.myForm.pincode.focus() ;
			return false;
		}
																										
		return( true );
	
		
		
	}
																										
																										
																										
   
		
	//var name = document.getElementById("name").value();
	//var email = document.getElementById("email").value();
	//var age = document.getElementById("age").value();
	//var gender = document.getElementById("gender").value();	
	//var address = document.getElementById("address").value();
	//var description = document.getElementById("description").value();
	//var pincode = document.getElementById("pincode").value();
function post
	{
		var user_object = {	 
								"authenticity_token" : "TWq5wTGiDBnUuWj3t6Qte9EhTJOWpHViSJYZTLVtsL4=",
								"user":     {
                                        "name":$('#name').val().toString(),
                                        "email":$('#email').val().toString(),
                                        "age":$('#age').val().toString(),
                                        "gender":$('input[name=gender]:checked').val().toString(),
                                        "address":$('#address').val().toString(),
                                        "description":$('#description').val().toString(),
                                        "pincode":$('#pincode').val().toString()
                                    },
								"commit" : "Create User"
							}
								
	 
    	$.ajax({
                  type:"POST",
                  url:"http://blooming-beach-2334.herokuapp.com/users",
                  data:data33,
                  dataType:"jsonp",
                  success:alert("success 3")
           });
	}			
  											
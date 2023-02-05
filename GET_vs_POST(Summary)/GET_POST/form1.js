
	function sayHello(){
		message = "Welcome to my website " 
		+ document.forms["myform"].firstname.value + " "
		+ document.forms["myform"].lastname.value + " " 
		+ document.forms["myform"].age.value + " " 
		+ document.forms["myform"].occupation.value + " ";

		if(document.forms["myform"].male.checked){
			message += 'Male'
		}else{
			message += 'Female'
		}
		
		//alert(document.forms["myform"].yourname.value);
		document.getElementById("myEmptyParagraph").innerHTML = message;
	}

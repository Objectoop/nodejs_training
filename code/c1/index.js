function parent(){

	var x = 1;

	function child(){
		console.log(x);
	}

	return child;
}

var childFn = parent();
childFn();
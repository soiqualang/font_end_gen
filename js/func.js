//Function to get param in hash
function hash2param(k){
	//#a=1&b=2
	var p={};
	//var t1='#a=1&b=2';
	var t1=window.location.hash;
	t1.replace(/[?#&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v});
	return k?p[k]:p;
}

//Function to get param in url
function getSearchParams(k){
	//http://localhost/font_end_gen/t1.html?a=1&b=2
	var p={};
	location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v});
	//alert(window.location.hash);
	return k?p[k]:p;
}

//Function to load page from param p in hash
function load_page(){
	var p=hash2param().p;
	console.log(p);
	if(p!=undefined){
		var p='pages/'+p+'.php';
		$('#content').load(p + " #content > *");
	}else{
		p='who';
		var p='pages/'+p+'.php';
		$('#content').load(p + " #content > *");
	}
}
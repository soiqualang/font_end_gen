function hash2param(k){
	//#a=1&b=2
	var p={};
	//var t1='#a=1&b=2';
	var t1=window.location.hash;
	t1.replace(/[?#&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v});
	return k?p[k]:p;
}

function getSearchParams(k){
	//http://localhost/font_end_gen/t1.html?a=1&b=2
	var p={};
	location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v});
	//alert(window.location.hash);
	return k?p[k]:p;
}

function load_page(){
	var haha=hash2param().p;
	console.log(haha);
	if(haha!=undefined){
		var p='pages/'+haha+'.php';
		$('#content').load(p + " #content > *");
	}else{
		haha='who';
		var p='pages/'+haha+'.php';
		$('#content').load(p + " #content > *");
	}
}
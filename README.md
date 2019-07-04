# font_end_gen

## Tịnh tiến về font end =))

## ver3

Integrate with material template

## ver2

Load page with multi param hash =))

To catch hash change event, use:

```js
$(document).ready(function() {
	load_page();
});
$(window).bind('hashchange', function() {
	load_page();
});

//Function to get param in hash
function hash2param(k){
	//#a=1&b=2
	var p={};
	//var t1='#a=1&b=2';
	var t1=window.location.hash;
	t1.replace(/[?#&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v});
	return k?p[k]:p;
}

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
```

## ver1

Simple load page with a param hash

---

Sẵn tìm hiểu làm kỹ thuật thì có ý tưởng làm luôn một cái app quản lý link download file (gần giống book mark)

Chức năng thì đơn giản thôi, dăm ba cái tìm kiếm, hiển thị. Chủ yếu để vọc cách thức đưa gánh nặng gen page từ back-end về font-end với json

Test new tech - font_end_gen

`https://css-tricks.com/examples/AJAXReplaceSamePart/#contact.html`

```js
var newHash     = '',
   $mainContent = $('#content');

$('nav').delegate('a', 'click', function() {
	window.location.hash = $(this).attr('href');
	return false;
});

// Not all browsers support hashchange
// For older browser support: http://benalman.com/projects/jquery-hashchange-plugin/
$(window).bind('hashchange', function() {
	newHash = window.location.hash.substr(1);
	$mainContent.load(newHash + " #content > *");
});
```

```html
<div id='container'>
	<nav>
		<a href='index.php'>Home</a>
		<a href='about.html'>About</a>
		<a href='contact.html'>Contact</a>
	</nav>
	<div id='content'>
		<h1>Home</h1>
		<p>This is the home page.</p>
		<ul>
			<li>I'm a list item!</li>
			<li>Me too!</li>
		</ul>
	</div>
</div>
```
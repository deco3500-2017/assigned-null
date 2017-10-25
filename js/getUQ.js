function getUQ(){
	$.get('https://study-mates.uqcloud.net/backend/get_uq.php', function (response) {
		var json = response;
		console.log(json);
		$('#signin').text(json.name);
		for(var i = 0; i < json.groups.length; i++) {
			if(json.groups[i].search("2017-2") != -1) {
				var temp = json.groups[i];
				var temp1 = temp.replace("labs:", "");
				var temp2 = temp1.replace("-2017-2", "");
				$("#nav-bar").append('<li><a href="index.html?course=' + temp2 +'">'+temp2+'</a></li>');
				console.log(json.groups[i]);
			}
		}
});
}
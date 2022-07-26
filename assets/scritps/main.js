const config = {
    timetick: 100,
    baseUrl: 'http://localhost:8000'
}

$(document).ready(function() {
    var client = new UserClient(config.baseUrl);
	const promise2 = client.login('string', 'string').then(item => {
		client.getAllArticles(item.token).then(value => {
			console.log(value)
			var characterTemplate = $("#article__template").html();
	
			var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
	
			$(".article__list__container").html(compiledCharacterTemplate(value));
		})
	});

    const promise1 = client.getAllUsers().then(value => {
		console.log(value)
        var characterTemplate = $("#convicted__template").html();

        var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

        $(".convicted__list__container").html(compiledCharacterTemplate(value));
    });

	Promise.all([promise1, promise2]).then(_ => {
		initDataList()
	})
});
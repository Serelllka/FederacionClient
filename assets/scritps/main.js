const config = {
    timetick: 100,
    baseUrl: 'http://localhost:8000'
}

function initArticleTemplate(client) {
	return client.login('string', 'string').then(item => {
		client.getAllArticles(item.token).then(value => {
			console.log(value)
			var characterTemplate = $("#article__template").html();
	
			var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
	
			$(".article__list__container").html(compiledCharacterTemplate(value));
		})
	});
}

function initConvictedTemplate(client) {
	return client.getAllUsers().then(value => {
		console.log(value)
        var characterTemplate = $("#convicted__template").html();

        var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

        $(".convicted__list__container").html(compiledCharacterTemplate(value));
    });
}

$(document).ready(function() {
    var client = new UserClient(config.baseUrl);
	const firstPromise = initArticleTemplate(client);
    const secondPromise = initConvictedTemplate(client);

	Promise.all([firstPromise, secondPromise]).then(_ => {
		$("#condemn").click(sendCondemn)
	});
});

function sendCondemn() {
	var value = $("#convicted__input").val()
	var id = $('#convicted__datalist [value="' + value + '"]').data('value')
}
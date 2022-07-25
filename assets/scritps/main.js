const config = {
    timetick: 100,
    baseUrl: 'http://localhost:8000'
}

var cast = {
	"characters": [
		{
			"name": "Jon Snow",
			"shortCode": "jon-snow",
			"actor": "Kit Harrington",
			"house": "Stark",
			"location": "The Wall"
		},
		{
			"name": "Tyrion Lannister",
			"shortCode": "tyrion",
			"actor": "Peter Dinklage",
			"house": "Lannister"
		},
		{
			"name": "Brienne of Tarth",
			"shortCode": "brienne",
			"actor": "Gwendoline Christie",
			"house": "Tarth",
			"location": "In search of Sansa Stark"
		}
	]
}

var cast = {
	"characters": [
		{
			"name": "Jon Snow",
			"shortCode": "jon-snow",
			"actor": "Kit Harrington",
			"house": "Stark",
			"location": "The Wall"
		},
		{
			"name": "Tyrion Lannister",
			"shortCode": "tyrion",
			"actor": "Peter Dinklage",
			"house": "Lannister"
		},
		{
			"name": "Brienne of Tarth",
			"shortCode": "brienne",
			"actor": "Gwendoline Christie",
			"house": "Tarth",
			"location": "In search of Sansa Stark"
		},
		{
			"name": "Eddard Stark",
			"shortCode": "ned-stark",
			"actor": "Sean Bean",
			"house": "Stark",
			"location": "Winterfell"
		},
		{
			"name": "Sandor Clegane",
			"shortCode": "the-hound",
			"actor": "Rory McCann",
			"house": "Clegane",
			"location": "unknown"
		}
	]
}

$(document).ready(function() {
    var client = new UserClient(config.baseUrl);
    const promise1 = client.getAllUsers().then(value => {
		console.log(value)
        var characterTemplate = $("#condemner__template").html();

        var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

        $(".condemner__list__container").html(compiledCharacterTemplate(value));
    });

    var client = new UserClient(config.baseUrl);
	const promise2 = client.login('string', 'string').then(item => {
		client.getAllArticles(item.token).then(value => {
			console.log(value)
			var characterTemplate = $("#convicted__template").html();
	
			var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
	
			$(".convicted__list__container").html(compiledCharacterTemplate(value));
		})
	});

	Promise.all([promise1, promise2]).then(_ => {
		initDataList()
	})
});

$(document).ready(function() {
	var client = new UserClient(config.baseUrl);
		client.jopa({
			name: -1,
			username: -2,
			password: -3
		})
})

var button = document.getElementById('loaderUsersList');
var openUsersList = document.querySelector('.users');
var wrapper = document.getElementsByClassName('wrapper')[0];

button.addEventListener('click', function () {
	if (document.querySelector('.users-info')) {
		wrapper.removeChild(document.querySelector('.users-info'));
	}

	openUsersList.innerHTML = '';

	if (localStorage.getItem('Keys')) {
		data = JSON.parse(localStorage.getItem('Keys'));
		console.log('Пришло с LocalStorage');

		for (var i = 1; i <= data.data.length; i++) {
			openUsersList.insertAdjacentHTML('beforeEnd', '<div class="users-link" data-position="' + (i - 1) + '"><a href="#">' + 'User ' + i + '</div>');
		}

		openUsersList.getElementsByTagName('a')[0].setAttribute('class', 'active');
		openUsersList.insertAdjacentHTML('afterEnd', '<div class="users-info"><img src="' + data.data[0].avatar + '"><div class="full-name"><p class="first-name"> First Name: ' + data.data[0].first_name + '</p><p class="last-name"> Last Name: ' + data.data[0].last_name + '</p></div></div>');
		openUsersList.onclick = function (events) {
			if (events.target.parentElement.classList == 'users-link') {
				var linkPosition = events.target.parentElement.dataset.position;
				var usersInfo = document.querySelector('.users-info');

				usersInfo.children[0].setAttribute('src', data.data[linkPosition].avatar);
				usersInfo.children[1].children[0].innerHTML = 'First Name: ' + data.data[linkPosition].first_name;
				usersInfo.children[1].children[1].innerHTML = 'Last Name: ' + data.data[linkPosition].last_name;
			}
		}

		var links = document.querySelectorAll('a');
		links.forEach(function (event) {
			event.addEventListener('click', function (e) {
				links.forEach(function (links) {
					links.classList.remove('active');
				})

				e.currentTarget.classList.add('active');
			});
		});
	} else {
		var xhr = new XMLHttpRequest();

		xhr.open('GET', 'https://reqres.in/api/users?page-2', true);

		xhr.send();

		xhr.onload = function () {
			(this.status[0] === 2) ? JSON.parse(this.response).data : (this.status + ' - ' + this.statusText);
			
			var data = xhr.response;

			localStorage.setItem('Keys', data);
			data = JSON.parse(data);
			console.log('Пришло с сервера');


			for (var i = 1; i <= data.data.length; i++) {
				openUsersList.insertAdjacentHTML('beforeEnd', '<div class="users-link" data-position="' + (i - 1) + '"><a href="#">' + 'User ' + i + '</div>');
			}

			openUsersList.getElementsByTagName('a')[0].setAttribute('class', 'active');
			openUsersList.insertAdjacentHTML('afterEnd', '<div class="users-info"><img src="' + data.data[0].avatar + '"><div class="full-name"><p class="first-name"> First Name: ' + data.data[0].first_name + '</p><p class="last-name"> Last Name: ' + data.data[0].last_name + '</p></div></div>');
			openUsersList.onclick = function (events) {
				if (events.target.parentElement.classList == 'users-link') {
					var linkPosition = events.target.parentElement.dataset.position;
					var usersInfo = document.querySelector('.users-info');

					usersInfo.children[0].setAttribute('src', data.data[linkPosition].avatar);
					usersInfo.children[1].children[0].innerHTML = 'First Name: ' + data.data[linkPosition].first_name;
					usersInfo.children[1].children[1].innerHTML = 'Last Name: ' + data.data[linkPosition].last_name;
				}
			}

			var links = document.querySelectorAll('a');
			links.forEach(function (event) {
				event.addEventListener('click', function (e) {
					links.forEach(function (links) {
						links.classList.remove('active');
					})

					e.currentTarget.classList.add('active');
				});
			});
			
			xhr.onerror = function () {
				var wrapper = document.getElementsByClassName('wrapper')[0];
				wrapper.insertAdjacentHTML('afterbegin', '<p class="error">Не удалось получить список пользователей!</p>');
			}

			xhr.onloadend = function () {
				console.log('Запрос завершён');
			}
		}
	}
});
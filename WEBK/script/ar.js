// Открытие формы аренды
function openRentForm(phoneModel) {
	const rentForm = document.getElementById('rentForm')
	const phoneModelInput = document.getElementById('phoneModel')
	phoneModelInput.value = phoneModel
	rentForm.style.display = 'block'
}

// Отправка формы аренды
function submitRentForm(event) {
	event.preventDefault()

	const phoneModel = document.getElementById('phoneModel').value
	const name = document.getElementById('name').value
	const email = document.getElementById('email').value
	const days = document.getElementById('days').value

	// Вывод данных в консоль (в реальном проекте здесь будет отправка на сервер)
	console.log('Аренда оформлена:')
	console.log('Телефон:', phoneModel)
	console.log('Имя:', name)
	console.log('Email:', email)
	console.log('Количество дней:', days)

	alert('Аренда успешно оформлена!')
	document.getElementById('rentForm').style.display = 'none'
}

const form = document.forms.add_user
const ul = document.querySelector('ul')

fetchUsers()

function fetchUsers() {
    fetch('php/get.php')
        .then(res => res.json())
        .then(res => {
            ul.innerHTML = ''

            res.forEach(item => {
                const list = `
                <li>${item.id}</li>
                <li>${item.name}</li>
                <li>${item.email}</li>
                `
                ul.innerHTML += list
            });
        })
}

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const formData = new FormData(this)
    fetch('php/post.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            fetchUsers()
        })
})
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const userInfo = document.getElementById('user-container');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        console.log(user);
        const div = document.createElement('div');
        div.classList.add('divInfo');
        const divWithInfo = document.createElement('div');
        divWithInfo.classList.add('divWithInfo')
        divWithInfo.innerText = `
                   id: ${user.id},
                   name: ${user.name},
                   username: ${user.username},
                   email: ${user.email},
                   address:
           `
        console.log(divWithInfo)// Вивів інфо в консоль !!ПЕРЕВІРКА!!
        userInfo.appendChild(divWithInfo)// Добавив інфо з divWithInfo в основний div
        const ol = document.createElement('ol');
        ol.classList.add('ol')
        ol.style.listStyleType = 'none';
        const li = document.createElement('li');
        const info = document.createElement('p');
        info.innerText = `
                      street: ${user.address.street},
                      suite: ${user.address.suite},
                      city: ${user.address.city},
                      zipcode: ${user.address.zipcode}
                    `
        console.log(info)// Вивів інфо в консоль !!ПЕРЕВІРКА!!
        li.appendChild(info)// Добавив info в li
        ol.appendChild(li);// Добавив li в ol
        userInfo.appendChild(ol)// Добавив ol в userInfo

            const divWithInfo2 = document.createElement('div');
            divWithInfo2.classList.add('divWithInfo2')
            divWithInfo2.innerText = `
                   geo:
           `
        ol.appendChild(divWithInfo2)
            const ol2 = document.createElement('ol');
            ol2.classList.add('ol2')
            ol2.style.listStyleType = 'none';
            const li2 = document.createElement('li');
            li2.classList.add('li2')
            const info2 = document.createElement('p');
            const div2 = document.createElement('div');
            div2.classList.add('divInfo2');
            info2.innerText = `
                      lat: ${user.address.geo.lat},
                      lng: ${user.address.geo.lng}
                    `


            li2.appendChild(info2)// Добавив info2 в li2
            ol2.appendChild(li2);// Добавив li2 в ol2
            divWithInfo2.appendChild(ol2)//Добавив ol2 в userInfo

            const divWithInfo3 = document.createElement('div');
            divWithInfo3.classList.add('divWithInfo4')
            divWithInfo3.innerText = `
                   phone: ${user.phone},
                   website: ${user.website}
            `

            userInfo.appendChild(divWithInfo3)
            const divWithInfo4 = document.createElement('div');
            divWithInfo4.classList.add('divWithInfo5')
            divWithInfo4.innerText = `
                   company:
            `
        userInfo.appendChild(divWithInfo4)//Добавив divWithInfo4 в userInfo

        const ol3 = document.createElement('ol');
        ol3.classList.add('ol3')
        ol3.style.listStyleType = 'none';
        const li3 = document.createElement('li');
        const info3 = document.createElement('p');
        info3.innerText = `
                      name: ${user.company.name},
                      catchPhrase: ${user.company.catchPhrase}
                      bs: ${user.company.bs}
                    `
        ol3.appendChild(li3)//Добавив li3 в ol3
        li3.appendChild(info3)//Добавив info3 в li3
        userInfo.appendChild(ol3)//Добавив ol3 в userInfo
            //Б... воно працює я в а....
    })


let form1 = document.forms.form1;
form1.addEventListener('submit', function (eventObject) {
    eventObject.preventDefault()
})
const button = document.getElementById('button');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popupContent');

    button.onclick = function () {
        popup.classList.toggle('show');
        popup.classList.toggle('hide');
    }

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(posts => {
        console.log(posts);
        posts.forEach(post => {

            const postContainer = document.createElement('div');
            postContainer.classList.add('postContainer');


            const divWithInfo6 = document.createElement('div');
            divWithInfo6.classList.add('divWithInfo6');
            divWithInfo6.innerText = `Title: ${post.title}`;
            postContainer.appendChild(divWithInfo6);


            const button2 = document.createElement('button');
            button2.innerText = 'Post details';
            button2.classList.add('userButton');

            const link2 = document.createElement('a');
            link2.classList.add('buttonPost');
            link2.href = `post-details.html?id=${post.id}`;
            link2.appendChild(button2);


            postContainer.appendChild(link2);


            popupContent.appendChild(postContainer);
        });
    })















































































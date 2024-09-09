const usersDiv = document.getElementById('users');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersArray => {
        for (const user of usersArray) {
            const div = document.createElement('div');
            div.classList.add('user-array');

            const divWithInfo = document.createElement('div');
            divWithInfo.classList.add('divWithInfo');
            divWithInfo.innerText = `                                                                                                                                                                                        
                Id: ${user.id},                                                                                                                                                                                      
                Name: ${user.name}                                                                                                                                                                                       
            `;

            const button = document.createElement('button');
            button.innerText = 'View Details';
            button.classList.add('user-button');

            const link = document.createElement('a');
            link.classList.add('buttonInfo');
            link.href = `user-details.html?userId=${user.id}`;//Ось ця шляпа допомагає создати нові сторінки для кожного юзера:D пень)


            link.appendChild(button);

            div.appendChild(divWithInfo);
            div.appendChild(link);
            usersDiv.appendChild(div);
        }
    });












































// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було
// видно що це блоки (дати фон. марджини і тд)

const usersPosts = document.getElementById('post-details');



const postId = new URLSearchParams(window.location.search).get('id');


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        console.log(post);
        const divWithInfo7 = document.createElement('div');
        divWithInfo7.classList.add('divWithInfo6');
        divWithInfo7.innerText = `
        userId: ${post.userId}
        id: ${post.id}
        title: ${post.title}
        body: ${post.body}`;
        usersPosts.appendChild(divWithInfo7)
        divWithInfo7.style.color = '#ffffff'
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        console.log(comments)
        comments.forEach(comments => {
            const divWithInfo8 = document.createElement('div');
            divWithInfo8.classList.add('divWithInfo6');
            divWithInfo8.innerText = `
            name: ${comments.name}
            email: ${comments.email}
            body: ${comments.body}
            `;
            usersPosts.appendChild(divWithInfo8)
            divWithInfo8.style.color = '#ffffff'
        })

    })


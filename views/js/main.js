// fetch('https://picsum.photos/600/400')
//     .then(res => res.blob())
//     .then(blob => {
//         console.log(blob);
//         let img = document.createElement('img');

//         img.src = URL.createObjectURL(blob);
//         document.querySelector('body').appendChild(img);
//     })




// const fetchImage = async () => {
//     try{
//         const res = await fetch('https://picsum.photos/600/400');
//         const data = await res.blob();
//         // console.log(data);
//         let img = document.createElement('img');
//         img.src = URL.createObjectURL(data);
//         document.querySelector('body').appendChild(img);
//     }
//     catch(e) {
//         console.log("Something went wrong!", e);
//     }
// }

// fetchImage();


// axios.get('https://picsum.photos/600/400')
//     .then(res => {
//         const imgURL = res.config.url;
//         let img = document.createElement('img');
//         img.src = imgURL;
//         document.querySelector('body').appendChild(img);
//     })
//     .catch(e =>  {
//         console.log(e);
//     });

// const fetchImg = async () => {
//     try {
//         const res = await axios.get('https://picsum.photos/600/400');
//         const imgURL = res.config.url;
//         let img = document.createElement('img');
//         img.src = imgURL;
//         document.querySelector('body').appendChild(img);
//     }
//     catch(e) {
//         console.log("OH NO! AN ERROR!", e);
//     }
// }

// fetchImg();



const postSection = document.querySelector('#posts');
const postTemplate = document.querySelector('#post-template');

const getData = async () => {
    try {
        const postStream = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await postStream.json();
        //Hey, nice work! Check the breakdown and other methods at the bottom of this file
        let limit = 20;
        posts.slice(0, limit).map(post => {
            const title = post.title;
            const body = post.body;
            const newPost = document.importNode(postTemplate.content, true);
            const postTitle = newPost.querySelector('.post__title');
            const postBody = newPost.querySelector('.post__body');
            postTitle.innerText = title;
            postBody.innerText = body;
            return postSection.appendChild(newPost);
        });
        
        /*let i = 0;
        posts.forEach(post => {
            i++
            // console.log(post);
    
            if(i < 20) {
                const title = post.title;
                const body = post.body;
        
                const newPost = document.importNode(postTemplate.content, true);
        
                const postTitle = newPost.querySelector('.post__title');
                const postBody = newPost.querySelector('.post__body');
        
                postTitle.innerText = title;
                postBody.innerText = body;
        
                postSection.appendChild(newPost);
           }
        })*/
    }
    catch(e) {
        console.log(e);
    }
}

getData();

/*
Breakdown in case you wish to try it out too.
You can test these out inside your getData function's
try block:

//===============================

A. different methods to get first 20 posts

let limit = 20;

//method 1: with .slice():
let postFilter = posts.slice(0, limit);

//method 2: with .filter()
let postFilter = posts.filter((post, index) => {
    return index < limit;
});

//Don't think you need this 3rd filter method. Just trying out something with .map()
let postFilter = posts.map((post, index) => {
    if (index < limit) return post;
});

console.log(postFilter);

//==================================

B. Load the above first 20 unto the page

let toPage = postFilter.map(post => {
    const title = post.title;
    const body = post.body;
    const newPost = document.importNode(postTemplate.content, true);
    const postTitle = newPost.querySelector('.post__title');
    const postBody = newPost.querySelector('.post__body');
    postTitle.innerText = title;
    postBody.innerText = body;
    return postSection.appendChild(newPost);
});

console.log(toPage);

*/
console.log('connected');

fetch('https://picsum.photos/600/400')
    .then(res => res.blob())
    .then(blob => {
        console.log(blob);
        let img = document.createElement('img');

        img.src = URL.createObjectURL(blob);
        document.querySelector('body').appendChild(img);
    })
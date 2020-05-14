const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

for(let i=0;i<works.length;i++){
    let item = document.createElement("div");
    item.classList.add("item");

    let genre = document.createElement("h4");
    genre.innerText = "Genre:"+works[i].tips;
    item.append(genre);

    let block1 = document.createElement("div");
    block1.classList.add("inner-box");
    let author = document.createElement("h3");
    author.innerHTML = works[i].author;
    let lifetime = document.createElement("h4");
    lifetime.innerText = "lifetime:" + works[i].lifetime;
    lifetime.style.display="inline";
    block1.append(author, lifetime);
    item.append(block1);

    let block2 = document.createElement("div");
    block2.classList.add("inner-box");
    let popular=document.createElement("h3");
    let photo=document.createElement("h3");
    block2.append(popular,photo);

    for(let i=0;i<works[i].photos.length;i++){
        let photos=document.createElement("img");
        photos.classList.add("photo");
        photos.src=works[i].photos[i];
        block2.append(photos);
    }
    item.append(block2);

    let button = document.createElement("button");
    button.innerText = "Visit";
    item.append(button);

    let div=document.getElementsByClassName("justify");
    div[0].append(item);

}






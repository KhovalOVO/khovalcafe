const daddy = document.getElementById("reviewsRow");

document.getElementById("reviewForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let title = document.getElementById("reviewTitle");
    let comment = document.getElementById("reviewText");
    let name = document.getElementById("reviewName");
    event.preventDefault();
    let wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add("col-lg-4", "col-md-6", "py-3");
    daddy.appendChild(wrapperDiv);
    let cardDiv = document.createElement('div');
    cardDiv.classList.add("card", "h-100");
    wrapperDiv.appendChild(cardDiv);
    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add("card-body");
    cardDiv.appendChild(cardBodyDiv);
    let cardTitle = document.createElement('h4');
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = title.value;
    cardBodyDiv.appendChild(cardTitle);
    let blockquote = document.createElement('blockquote');
    blockquote.classList.add("blockquote", "mb-0");
    cardBodyDiv.appendChild(blockquote);
    let pTag = document.createElement('p');
    pTag.innerHTML = comment.value;
    blockquote.appendChild(pTag);
    let footer = document.createElement('footer');
    footer.classList.add("blockquote-footer", "text-end");
    blockquote.appendChild(footer);
    let italic = document.createElement('i');
    if (name.value !== '') {
        italic.innerHTML = name.value;
    } else {
        italic.innerHTML = "Anonymous";
    }
    footer.appendChild(italic);
});
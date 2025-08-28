document.getElementById("addbook").addEventListener("click", function getbook(){
    let title = prompt("Enter book's title");
    if(!title) return;
    let author = prompt("Enter book's author");
    if(!author)  return;
    let pages = +prompt("Enter book's pages");
     if (!pages || isNaN(pages)) return alert("only number for pages") , getbook();
     

    let cardHTML = `
        <div class="card">
                <img src="Untitled.jpeg" alt="no image">
            <div class="description">
                <p>Title: ${title}</p>
                <p>Author: ${author}</p>
                <p>Pages: ${pages}</p>
                <button class = "remove-btn">Remove</button>
            </div>
        </div>
    `;

    document.querySelector(".book-shelf").insertAdjacentHTML('beforeend', cardHTML);
    
});

document.querySelector(".book-shelf").addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
        e.target.closest(".card").remove();
    }
});
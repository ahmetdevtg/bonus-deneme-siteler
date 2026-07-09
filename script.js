fetch("data.json")
.then(response => response.json())
.then(data => {

    document.title = data.site.title;

    document.querySelector("meta[name='description']")
    .setAttribute("content", data.site.description);


    document.getElementById("siteTitle").innerText = data.site.title;

    document.getElementById("siteDesc").innerText = data.site.description;


    let area = document.getElementById("articles");


    data.articles.forEach(article => {

        area.innerHTML += `
        <article>
            <h2>${article.title}</h2>

            <p>
            ${article.description}
            </p>

            <a href="?page=${article.slug}">
            Devamını Oku
            </a>
        </article>
        `;

    });

});
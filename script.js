// // main script
const articlesHTML = document.getElementById("articles");

async function getArticles() {
    const responce = await fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=Y23gzVGeS4SLPzmINGLH8m8G9yNI9ueF');
    const respJSON = await responce.json();
    const articles = respJSON.results;
    console.log(articles);
    articles.forEach(element => {
        let newArticle = article.replace('id="title">',`id="title">${element.title}`);
                    newArticle = newArticle.replace('id="summary">',`id="summary">${element.abstract}`);
                    newArticle = newArticle.replace('src=""', `src="${element.multimedia[0].url}"`);
                    newArticle = newArticle.replace('<button class="tag">Java Script', `<button class="tag">${element.section}`);
                    newArticle = newArticle.replace('<a href="#">Authors name', `<a href="#">${element.byline}`);
                    newArticle = newArticle.replace('<a href="#">Topics Name', `<a href="#">${element.subsection}`);
                    articlesHTML.innerHTML += newArticle;
    });
};

getArticles();
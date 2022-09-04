

const loadNews = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
}

const displayNews = newses =>{
    const newsSection = document.getElementById('news-section');
    newses.forEach(news =>{
        console.log(news);
        const newsDiv = document.createElement("div");
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        
        <div id="test" class="card rounded-4">
            <img class="pt-5 pb-2 h-25 mx-auto w-75" src="${news.thumbnail_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <p class="card-text">${news.details.slice(0, 338)}</p>   
            </div>
        </div>
        
        `;
        newsSection.appendChild(newsDiv);
    })
}


loadNews();
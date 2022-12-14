// fetching data for category names
async function fetchMovies() {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    
    const data = await response.json();
    const categories = data.data.news_category;

    showTheCategories(categories);
  }
  const showTheCategories = (categories) => {
    const categoryBox = document.getElementById("category-box");
   categories.forEach(category => {
 
    const categoryDiv = document.createElement("div");

    categoryDiv.className = "category-internal row";
    const categoryFull = `

    <li class="nav-item fs-4 mt-5 bg-light p-4 rounded">
      <span class="ms-4"  onclick="showDetails('${category.category_id}')" >${category.category_name}</span>
    </li>

    `;

    // <span  onclick="showDetails('${category.category_id}')" >${category.category_name}</span>

    categoryDiv.innerHTML = categoryFull;
    categoryBox.appendChild(categoryDiv);
   });

}

// fetching data for category gruop
async function showDetails(id) {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;

    const response = await fetch(url);
    
    const data = await response.json();
    showTheCategoriesSeparate(data.data);
  };

  const showTheCategoriesSeparate = (categoriesSeparate) => {
    const categorySeparateBox = document.getElementById("category-separate-box");
    categoriesSeparate.forEach(category => {

    const categoryDiv = document.createElement("div");
    console.log(category._id);
    categoryDiv.className = "categories";
    const categorySeparate = `
     <h2  onclick="fetchSingleDetails('${category._id}')" style="margin-top: 10px;" >${category.title}</h2>
     
    
    `;

    categoryDiv.innerHTML = categorySeparate;
    categorySeparateBox.appendChild(categoryDiv);
   });

}

// fetching data for Single News group
async function fetchSingleDetails(news_id) {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;

    const response = await fetch(url);
    
    const data = await response.json();
    showSingleDetails(data.data[0]);
  };

  const showSingleDetails = (news) => {
    const showSingleDetail = document.getElementById("news-box");
    showSingleDetail.classList.add('col');
    // console.log(news);
    const newsSingle = `
        <div class="card">
              <img src="${news.thumbnail_url}" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">${news.title}</h5>
              <p class="card-text">${news.details}</p>
              <p>Total view: ${news.total_view}</p>
              </div>
        </div>
   `;
    showSingleDetail.innerHTML = newsSingle;

}
  
fetchMovies();


const accessKey="NmUgbBj6EYTHms48t9x85gu3g0bTvycekUKvBjMvQUs";
const SearchForm=document.getElementById("Search-Form");
const SearchBox=document.getElementById("Search-box");
const SearchResult=document.getElementById("search-result");
const ShowMoreBtn=document.getElementById("show-more-btn");


let keyword ="";
let page = 1;
  async function searchImages(){
    keyword = SearchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=15`;


    const response=await fetch(url);
    const data=await response.json();
    console.log(data);

    const results= data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        SearchResult.appendChild(imageLink);
    })
    
    

  
  }
   
    


    


  

  
  SearchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();

  })
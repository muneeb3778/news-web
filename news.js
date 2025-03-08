const api_key="e1bbb793199c44e6a8b59a7d148194a2"
const api_url="https://newsapi.org/v2/everything?q="
const main=document.querySelector(".container")
const card=document.querySelector(".card-container")


window.addEventListener("load",()=>{
fetchnews("india")    
})


async function fetchnews(query){

let newsdata = await fetch(`${api_url}${query}&apiKey=${api_key}`)
let data= await newsdata.json()

store(data.articles)
}

function store(articles){   
 
    

articles.forEach((v,i,p)=> {

date=new Date(v.publishedAt)
date=date.toString()
date=date.slice(0,15)

card.innerHTML=`
    <div class="card">
        <div class="card-header">
            <img id="img" src="${v.urlToImage}" alt="">
        </div>
        <div class="card-content">
            <h3 id="news-title">${v.title}</h3>
            <h6 id="news-source">${v.source.name}</h6>
            <h6 id="news-date">${date}</h6>
            <p id="new-discription">${v.description}</p>
                    
        </div> 
    </div>
`
    
});

}






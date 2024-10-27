/*const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const articles = document.getElementById("grid-list")
    const card = document.querySelectorAll(".card")
    const cname = document.getElementsByTagName("p")  

    for(var i=0; i < cname.length; i++){
        let match = card[i].getElementsByTagName('p')[0];
        
        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) >-1){
                card[i].style.display = "";
            } else{
                card[i].style.display = "none";
            }
        }
    }
}


    const articles=[
        {
            id:"0",
            image: 'https://res.cloudinary.com/dwdcvpx8w/image/upload/v1729757152/Agricultural_firm_ct8aq1.jpg',
            title: 'What you need to run an architectural firm'
        },
        {
            id:"1",
            image: 'https://res.cloudinary.com/dwdcvpx8w/image/upload/v1729757138/Sought_after_PD_agxtrj.jpg',
            title: 'What you need to run an architectural firm'
        },
    
        {
            id:"2",
            image: 'https://res.cloudinary.com/dwdcvpx8w/image/upload/v1729757132/Blockchain_jb228n.jpg',
            title: 'What you need to run an architectural firm'
        },
    
        {
            id:"3",
            image: 'https://res.cloudinary.com/dwdcvpx8w/image/upload/v1729757152/Agricultural_firm_ct8aq1.jpg',
            title: 'What you need to run an architectural firm'
        },
    
    ]
    const categories =[...new Set(articles.map((item)=>{return item}))]

    document.getElementById('search-bar-container').addEventListener('keyup', (e)=>{
        const searchData = e.target.value.toLowerCase();
        const filterData = categories.filter((item)=>{
            return(
                item.title.toLocaleLowerCase().includes(searchData)
            )
        })
       displayItem(filterData) 
    });

    constdisplayItem = (items)=> {
        document.getElementById('root').innerHTML=items.map((item)=>{
            var {image, title} = item;
            return(
                <div class='box'>
                    <div class='img-box'>
                        <img class ='images' src = {image}></img>
                    </div>
                    <div class='bottom'></div>
                </div>

            )
        }
    )
    }
    */
    function search() {
        // Get the search input
        const input = document.getElementById('search-item').value.toLowerCase();
        // Get all the blog post cards
        const cards = document.getElementsByClassName('card');
        
        // Loop through all cards to check if they match the search query
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const title = card.querySelector('.heading li a').innerText.toLowerCase();
            
            // Check if the title includes the search input
            if (title.includes(input)) {
                card.style.display = ''; // Show matching card
            } else {
                card.style.display = 'none'; // Hide non-matching card
            }
        }
    }
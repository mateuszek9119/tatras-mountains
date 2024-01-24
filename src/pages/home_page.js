import Article1 from "../articles/article1"


const HomePage = (props)=>{

    
    const artList = artiles.map(item => < Article1 key={item.id} {...item} /> )

    return(
        <div className="home">
            {artList}
        </div>
    )

}

export default HomePage
import Article1 from "../articles/article1"

const artiles = [
    {
        id: 1,
        title: "Rysy" ,
        author: "Mateusz Pęzioł",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
         but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
         1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
         publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        
    },

    {
        id: 2,
        title: "Świnica" ,
        author: "Mateusz",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
         but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
         1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
         publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        
    },

    {
        id: 3,
        title: "Kościelec" ,
        author: "Pęzioł",
        text: `Koscielec is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
         but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
         1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
         publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        
    }
]



const HomePage = (props)=>{

    
    const artList = artiles.map(item => < Article1 key={item.id} {...item} /> )

    return(
        <div className="home">
            {artList}
        </div>
    )

}

export default HomePage
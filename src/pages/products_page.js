import Article1 from "../articles/article1.js"

const articles = [
    {
        id: 1,
        title: "Rysy" ,
        author: "Mateusz Pęzioł",
        text: `Rysy , najwyższy szczyt w polskich tatrach, i mój pierwszy z "Korony Gór Polskich" :),  wejście na szczyt rozpoczeliśmy od parkingu w Palenicy, około godziny  04:40. 
        Pierwszy odcinek to droga do morskiego oka, szybkim krokiem i tam dłuższy odpoczynek.`
    },

    {
        id: 2,
        title: "Świnica" ,
        author: "Mateusz",
        text: `Podróż na Świnicę rozpocząłem od parkingu na Bronisława Czecha (Kuźnice), następnie szlakiem przez Boczań
        do Murowańca na chwilę odpoczynku, następnie czarny staw gąsienicowy , gdzie podziwałem w upale piękny czerwcowy 
        Kościelec, herbatka z termosu imożna iśc dalej , zmarzły staw jest kolejnym miejscem odpoczynku, gdzie można poczuć się
        otoczonym Wysokimi Tatrami , dużo ludzi idzie ku górze , ale nikt w dół... rruszamy dalej , aby przy pomocy łańcóchów
        oraz klamer dostać się na cudny Zawrat , miejsce spoczynku przepiękne, dużo ludzi , jednych którzy przyszli od strony 
        doliny 5 stawów , inni tą trasą co i ja, Ci pierwsi w większości schodzą na dolinę 5 stawów, reszta odbija na orlą
        perć, albo tak jak i ja na Świnicę...  Mnóstwo łańcuchów , klamry , wspinaczka i jest szczyt (...)  .`
        
    },

    {
        id: 3,
        title: "Kościelec" ,
        author: "Mateusz Pęzioł",
        text: `Majestatyczny szczyt nazywany polskim Matterhornem. Najczęściej odwiedzany przeze mnie szczyt.`
        
    }
]



const ProductsPage = (props)=>{

    const artList = articles.map( (item)=> <Article1 key = {item.id}  {...item} />  )

    return(
        <div className="home">
            {artList}
        </div>
    )
}

export default ProductsPage
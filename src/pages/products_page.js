import Article1 from "../articles/article1.js"

const articles = [
    {
        id: 1,
        title: "Rysy" ,
        author: "Mateusz Pęzioł",
        text: `Rysy , najwyższy szczyt w polskich tatrach, wejście na szczyt od parkingu w Palenicy, zajęło mi 7 godzin.
         tyle samo trwało zejście czyli łącznie  14 godzin.`
        
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
        text: `Majestatyczny szczyt nazywany polskim Matterhornem. Najczęściej odwiedzany przezemnie szczyt.`
        
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
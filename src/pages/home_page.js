import Article1 from "../articles/article1"

const artiles = [
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
import Article1 from "../articles/article1.js"

const articles = [
    {
        id: 1,
        title: "Rysy" ,
        author: "Mateusz Pęzioł",
        text: `Rysy to najwyższa szczyt w polskich tatrach, był moim pierwszym "wzniesieniem" jeśli chodzi o "Korony Gór Polskich" i drugim jeśli chodzi o moje wyprawy w góry ( pierwsze były czerwone Wierchy, więc początek przygody z górami mam ciekawy :) ). Wejście na szczyt rozpoczeliśmy ze znajomyi od parkingu w Palenicy, około godziny  04:40. Pierwszy odcinek to droga do morskiego oka, noc i spokój więc szybkim krokiem, dotarliśmy pod schronisko. Pod dłóższym odpoczynku ruzyliśmy w stronę czarnego stawu pod rysami, tam również przerwa na śniadanko. Następnie po minięciu stawu rozpoczyna się droga na Rysy , dotarcie do "Buli" to sesja zdjęciowa ;) z pięknym widokiem na dwa stawy. Dalsza droga to łańcuchy , łańcuchy .... przerwa co chwila, wśród mgły , widoków więc zero , jedynie łańcuch i skałą, może i dobrze, ponieważ nie było widać przepaści przed samym szczytem, gdzie tzeba się przeprawić przez tak zwaną "Rysę"(żleb o nazwie którego nie pamiętam), jest  to dziesięcio-metrowy odcinek, ale narobił mi trochę strachu (prawdopodobnie dlatego, iż to pierwsza moja góra z łańcuchami i ogólnie druga wyprawa w Tatrach, ale nie będę wnikał :) ) i jak widziałem po ludziach , to nie tylko mi...  W końcu dotarcie na szczyt , jedzonko, odpoczynek i zdjęcie we mgle , więc nic nie widać kompletnie. Powrót to pomyłka drogi i zejście na stronę słowacką, na szczęście zorientowałem się po 20 minutach ;), więc 40 minut straconych. Powrót już monotonny, mnóstwo ludzi , "poczekajki" przy łańcuchach , droga z morskiego oka to już marzenie tylko o tym aby dotrzeć do auta, zero sił i wyczerpanie. Do auta dotarliśmy 18:40, powrót w ciszy , chyb brak sił na rozmowy i to nie tylko z mojej strony, ale i znajomych.`
    },

    {
        id: 2,
        title: "Świnica" ,
        author: "Mateusz",
        text: `Podróż na Świnicę rozpocząłem od parkingu na Bronisława Czecha (Kuźnice), następnie szlakiem przez Boczań do Murowańca na chwilę odpoczynku, następnie czarny staw gąsienicowy , gdzie podziwałem w upale piękny czerwcowy Kościelec, herbatka z termosu imożna iśc dalej , zmarzły staw jest kolejnym miejscem odpoczynku, gdzie można poczuć się otoczonym Wysokimi Tatrami , dużo ludzi idzie ku górze , ale nikt w dół... rruszamy dalej , aby przy pomocy łańcóchów oraz klamer dostać się na cudny Zawrat , miejsce spoczynku przepiękne, dużo ludzi , jednych którzy przyszli od strony doliny 5 stawów , inni tą trasą co i ja, Ci pierwsi w większości schodzą na dolinę 5 stawów, reszta odbija na orlą perć, albo tak jak i ja na Świnicę...  Mnóstwo łańcuchów , klamry , wspinaczka i jest szczyt (...)  .`
        
    },

    {
        id: 3,
        title: "Kościelec" ,
        author: "Mateusz Pęzioł",
        text: `Majestatyczny szczyt nazywany polskim Matterhornem. Najczęściej odwiedzany przeze mnie szczyt, bo już 3 razy , w tym cztery raz jeśli chodzi o przełęcz Karb. Kościelec nie posiada łańcuchó, jest kilka miejsc gdzie trzeba siępoprostu wspinać po skałach.`
        
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
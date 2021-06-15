import Cake from "./Cake"

let CakeList = (props)=>{
    return (
        <div id="cards_landscape_wrap-2">
            <div class="container">
                <div class="row">
                {
                    props.cakes.map((each,index)=>{
                        return (
                            <Cake cakeData={each} key={index}/>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default CakeList
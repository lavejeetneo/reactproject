import Cake from "./Cake"

let CakeList = (props)=>{
    return (
        <div class="row row-cols-1 row-cols-md-4 g-4">
            {
                props.cakes.map((each,index)=>{
                    return (
                        <Cake cakeData={each} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default CakeList
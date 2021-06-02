let Cake = (props)=>{
    console.log(props);
    return (
        <div class="col">
            <div className="card" style={{width:"18rem"}}>
                <img src={props.cakeData.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.cakeData.name}</h5>
                    <p className="card-text">{props.cakeData.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Cake
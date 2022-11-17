const Card = ({model, year, km, mark, price}) => {
    return(
        <div>
            <img src="url" alt="model"/>
            <div>
                <h4>{model}</h4>
                <span>{year} - {km} - {mark}</span>
                <p>R$ {price}</p>
            </div>
        </div>
    )
}
function Challenge() {
    const a = 2;
    const b = 3;
    const soma = (e) =>{
        console.log(a+b)
        return(
            <div>
                {a+b}
            </div>
        )
    }
    return(
        <div>
            <h2> {a} +  {b}</h2>
            <button onClick = {soma} >Somar</button>
        </div>
    )
}

export default Challenge;


const TemplateExpressions = () =>{

    const name = "Rafael";
    const data = {
        age: 20,
        job: "Programmer"
    }

    return(
        <div>
            <h1>Olá {name}, Seja bem vindo! :)</h1>
            <span>Voçê trabalha como: {data.job}</span>
        </div>
    )  
};

export default TemplateExpressions;
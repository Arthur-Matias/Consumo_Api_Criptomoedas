const apiKey = {
    key: 'a02dd200-dfa6-4840-815d-c75ac3fcaa47'
}

fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=` + apiKey.key)
    .then(response=>{
        if(!response.ok) throw new Error(`Erro ao executar a requisição, status ${response.status}`);
        return response.json();
    })
    .then((api)=>{
        let texto = '';
        for (let i = 0; i < 10; i++){
            
            texto = texto + `
            <div class="media">
            <img src="blockchain.svg" class="align-self-center mr-3" alt="blockchain" width="100" height="60">
            <div class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
            </div>
            </div>
            `;
            
            i++
        }
        document.getElementById("coins").innerHTML = texto;
    })
    .catch((err)=>console.error(err.message))
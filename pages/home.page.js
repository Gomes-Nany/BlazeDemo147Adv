export default class HomePage{
    // Construtor com mapeamento dos elementos
    constructor(page){
        this.page = page  // O objeto do playwright interno recebe o objeto do playwright externo
        this.titulo = 'h1'
        this.origem = '[name= "fromPort"]'
        this.destino = '[name= "toPort"]'  
        this.btnFindFlights = ".btn-primary"
        this.url = 'https://www.blazedemo.com'

    }

    // Mapear as ações
    async selecionar_origem(cidade_origem) {
        await this.page.locator(this.origem).selectoption(cidade_origem)

    }

    async selecionar_origem(cidade_destino) {
        await this.page.locator(this.destino).selectoption(cidade_destino)

    }

    async clicar_find_flights(){
       await this.page.locator(this.btnFindFlights).click()

    }

    // jeito "Rebelde" - verificação dentro do mapeamento
    async verificar_mensagem_boas_vindas(){
        // espera o seletor indicado carregar: Texto que serve de titulo da página
        await this.page.waitForSelector(this.titulo)
        // extrai o texto que estiver no elemento e guardar na constante titulo_pagina
        const titulo_pagina = await this.page.textContent(this.titulo)

        if(!titulo_pagina.includes('Welcome to the Simple Travel Agency!')){
            throw new Error('Titulo na Home ausente ou diferente do esperado')

    }
    

}
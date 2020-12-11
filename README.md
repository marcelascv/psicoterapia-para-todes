# Projeto Final

![api_rest](https://br.digitalhouse.com/wp-content/uploads/2018/05/reprograma-fundos-claros-360x99.png) ![api_rest](https://images.even3.com.br/3zfJQIzmiSPFNxYNTh3BgYObYIE=/fit-in/250x250/smart/even3.blob.core.windows.net/logos/ngpd_minas_marca_A1_v2.19ccb37b296449b9bc05.png)

:wave: Oi, sou Marcela Vasconcelos aluna do bootcamp da Reprograma na turma online 7 de Backend em parceria com o MINAs do Porto Digital. Seja muito bem-vinde ao meu projeto final do curso e se sinta incluíde para colaborar com ele.

## Psicoterapia Para Todes

![api_rest](https://img.olx.com.br/thumbs256x256/46/460907089924160.jpg)

Nos últimos anos, as doenças psicológicas estão crescendo na sociedade e com a pandemia os casos se agravaram. Com isso, os profissionais de Psicologia ganharam destaque e se mostraram essenciais no apoio de situações como depressão, fobias, ansiedade, luto, entre outros. Contudo, mesmo quando alguém decide buscar tratamento, encontrar e ter condições de pagar a psicoterapia pode ser desencorajador. 

:purple_heart: Diante desse cenário, foi criada a **API Psicoterapia para todes** que armazena dados de instituições que oferecem serviço de psicoterapia gratuito. Assim, qualquer usuárie pode ```cadastrar```, ```atualizar``` e ```excluir``` dados, para que uma pessoa, que esteja precisando de atendimento psicológico e não tenha condições financeiras, consiga ```acessá-los``` e possa buscar apoio para cuidar da sua saúde mental.

### Instruções para usar a API

- [x] Instalar Node.js e MongoDB
- [x] Criar um fork desse repositório no seu GitHub
- [x] Clonar seu repositório para sua máquina local (git clone)
- [x] Entrar na pasta (cd psicoterapia-para-todes)  
- [x] Baixar os módulos e instalá-los no package.json (npm install)
- [x] Iniciar o server (npm start)
- [x] Executar na porta 8080
- [x] Link collections Postman https://www.getpostman.com/collections/a572251c916b492ea11b
- [x] Link Heroku https://psicoterapia-para-todes.herokuapp.com/

### Estrutura do banco de dados

```
{ id, name, address, city, state, telephone, email, site, activeService }
```

**Exemplo:**
```
{
    "id": 1 (DINÂMICO - NÃO INFORMAR),
    "name": "FACHO - Faculdade de Ciências Humanas de Olinda",
    "address": "ROD PE 015 - Jatobá - CEP: 53060-775",
    "city": "Recife",
    "state": "PE",
    "telephone": "(81) 3087-0071",
    "email": "facho@facho.br",
    "site": "https://www.facho.br/clinica",
    "activeService": true
}
```

### Rotas

|                  Rota                  | Método  |                        Descrição                         |
| -------------------------------------- | ------- | -------------------------------------------------------- |
| `/institutions`                        | GET     | Retorna todas as instituições                            |
| `/institutions/:state `                | GET     | Retorna as instituições por estado                       |
| `/institutions/:state/activeService `  | GET     | Retorna as instituições com serviço ativo por estado     |
| `/institutions`                        | POST    | Inclui nova instituição                                  |
| `/institutions/:id`                    | PUT     | Atualiza uma instituição por id                          |
| `/institutions/:id`                    | DELETE  | Remove uma instituição por id                            |

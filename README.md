# Projeto Final

![api_rest](https://br.digitalhouse.com/wp-content/uploads/2018/05/reprograma-fundos-claros-360x99.png)

:wave: Oi, sou Marcela Vasconcelos aluna do bootcamp da Reprograma na turma online 7 de Backend em parceria com o MINAs do Porto Digital. Seja muito bem-vinde ao meu projeto final do curso e se sinta incluíde para colaborar com ele.

## Psicoterapia Para Todes

![api_rest](https://img.olx.com.br/thumbs256x256/46/460907089924160.jpg)

:purple_heart: Psicoterapia para todes é uma API que armazena dados de instituições e profissionais que oferecem serviço de psicoterapia gratuito. Assim, qualquer usuárie pode cadastrar e atualizar dados, para que uma pessoa, que esteja precisando de atendimento psicológico e não tenha condições financeiras, consiga acessá-los e possa buscar apoio para cuidar da sua saúde mental.

### Para usar a API

- [x] Instalar Node.js e MongoDB
- [x] Criar um Fork desse repositório no seu GitHub
- [x] Clonar seu repositório para sua máquina local (git clone)
- [x] Entrar na pasta (cd psicoterapia-para-todes)  
- [x] Baixar os módulos e instalá-los no package.json (npm install)
- [x] Iniciar o server (npm start)
- [x] Executar na porta 8080 (http://localhost:8080/)

### Estrutura da API

```
reprograma-projeto-final
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   └── app.js
├── server.js
├── package.json
```

### Estrutura do banco de dados

```
{ id, nome, endereco, cidade, siglaEstado, telefone, email, site, abordagem, statusInstituicao }
```

### Rotas

|               Rota              | Método |                   Descrição                    |
| ------------------------------- | ------ | ---------------------------------------------- |
| `/psicoterapia`                 | GET    | Retorna todos os registros                     |
| `/psicoterapia/instituicoes`    | GET    | Retorna o nome de todas as instituicoes        |
| `/psicoterapia/profissionais`   | GET    | Retorna o nome de todes profissionais          |
| `/psicoterapia/:estado`         | GET    | Retorna todos os registros por estado          |
| `/psicoterapia/:estado/:cidade` | GET    | Retorna todos os registros por estado e cidade |
| `/psicoterapia`                 | POST   | Inclui novos registros                         |
| `/psicoterapia/:nome`           | PUT    | Altera dados do registro                       |
| `/psicoterapia/:nome`           | PATCH  | Altera status do registro                      |
| `/psicoterapia/:nome`           | DELETE | Remove registro por nome                       |

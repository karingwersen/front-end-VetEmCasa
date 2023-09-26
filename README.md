# front-end do VetEmCasa

## Requisitos

- npm 9.5.0
- node 18.15.0

## Como executar

### Utilizando a máquina local apenas

1. Certifique-se que a [API de Atendimento](https://github.com/karingwersen/API-atendimento-VetEmCasa) esteja rodando em http://localhost:5000;

2. Dentro da pasta vetemcasa instale as dependências rodando o comando npm install;

3. Dentro da pasta vetemcasa execute a aplicação rodando o comando npm start. A aplicação será executada em http://localhost:3000.

### Utilizando Docker

1. Crie localmente a imagem do Frontend do VetEmCasa executando o comando `docker build -t vetemcasa-frontend .`;

2. Rode o frontend executando o comando `docker run -d -p 3000:3000 --net=bridge vetemcasa-frontend npm run start`. A aplicação será executada em http://localhost:3000. 

## APIs utilizadas

Esta aplicação envia requisições para três APIs: uma de autoria própria - [API de Atendimentos do VetEmCasa](https://github.com/karingwersen/API-atendimento-VetEmCasa) -, e duas públicas - [TheCatAPI](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t) e [TheDogAPI](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=8FfZAkNzs).

### TheCatAPI

TheCatAPI é uma API pública e aberta que retorna informações e imagens sobre gatos. Para aqueles que desejam retornar apenas uma imagem aleatória de gatos, uma requisição do tipo GET para https://api.thecatapi.com/v1/images/search é o suficiente. Entre outras informações, a resposta dessa chamada carregará um id para esta imagem e uma URL direcionando para uma imagem de gatos. A documentação para esta API se encontra em https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t e autenticação via token só é necessária para outros tipos de chamadas.

### TheDogAPI

A exemplo da API anterior, TheDogAPI também é uma API pública, mas que retorna informações e imagens sobre cachorros. Para aqueles que desejam retornar apenas uma imagem aleatória de cachorros, uma requisição do tipo GET para https://api.thedogapi.com/v1/images/search é o suficiente. Entre outras informações, a resposta dessa chamada carregará um id para esta imagem e uma URL direcionando para uma imagem de cachorros. A documentação para esta API se encontra em https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=8FfZAkNzs e autenticação via token só é necessária para outros tipos de chamadas. 
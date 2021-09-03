# TTS em Node.js e IBM Watson
### Aplicação Web utilizando Node.js em junção com a API Text to Speech do IBM Watson.

#
## Instalação das Dependências
Execute na pasta do projeto:
~~~
npm install
~~~ 


## Banco de Dados
Será necessário criar uma database vazia em MySQL.

Após criar o banco configure o arquivo ```.env```

~~~
DB_HOST=
DB_USERNAME=user
DB_PASSWORD=senha
DB_PORT=3306
DB_NAME=nome_do_banco
~~~

#

Execute ```npm run migrate``` para criar as tabelas do banco.

### Obs.:
Se o migrate apresentar problema de execução, usar a instalação global do migrate:
~~~
npm install -g migrate 
~~~


## API Text to Speech - IBM Watson
Colocar no arquivo ```.env``` a chave e a url disponível no site da IBM

~~~
WATSON_URL=
WATSON_API_KEY=
~~~


## Executando

Rode ```node app.js``` e acesse ```http://localhost:3000/index```

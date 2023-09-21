## BR

Seção em português do Brasil.

# API REST com NodeJS
#### Aula ministrada pelo Professor Edson Maia através do Youtube.

Neste projeto foi utilizado o JavaScript com NodeJS rodando através de alguns módulos instalados. Desta forma, aprendi a utilizar melhor o Express, MySQL e JSDoc, fiz CRUD MVC para uso do conceito de aplicação com padrão de projeto bastante importante para a década de 70.

## Requisitos
NodeJS                  - [Instalação NodeJS](https://nodejs.org/pt-br/download)

VSCode                  - [Instalação VSCode](https://code.visualstudio.com/download)

MySQL Workbench Server  - [Instalação MySQL](https://dev.mysql.com/downloads/windows/installer/8.0.html)

CURL                    - [Instalação CURL](https://curl.se/download.html)

## Documentação
Após realizar a instalação dos requisitos necessários vamos dar início ao projeto para funcionamento. Caso já tenha instalado, ignore.


Vamos abrir o MySQL Workbench e seguir os próximos passos:
1. Autenticar no `MySQL Workbench`;
2. Criar um banco de dados com o nome `bdcopa`;
3. Criar as colunas `idselecoes` com _int, AI, PK_, `selecao` com _varchar(25)_, `grupo` com _char(1)_;

ou:

Abrir o `MYSQL COMMAND LINE CLIENT` e executar o comando SQL:
``` sql
CREATE SCHEMA `dbcopa` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE `selecoes` (
  `idselecoes` int NOT NULL AUTO_INCREMENT,
  `selecao` varchar(25) COLLATE utf8mb3_unicode_ci NOT NULL,
  `grupo` char(1) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`idselecoes`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--Para sair
\q
```

Após criar o banco de dados e informá-lo no `connection.js.sample` e renomeie para `connection.js` localizado dentro da pasta do projeto `.\src\app\database\`.

# Rodar a Aplicação

``` node
npm run dev 
``` 

e iniciará a aplicação com as instruções, embora de todo o modo tenha os endpoints para:
#### Listar todos        = get()
```curl
curl --request GET \
  --url http://localhost:3000/selecoes \
  --header 'User-Agent: localhostApp' 
```
#### Listar por ID       = get(:id)
```curl
curl --request GET \
  --url http://localhost:3000/selecoes/1 \
  --header 'User-Agent: localhostApp' 
```
#### Criar dados       = post()
```curl
curl --request POST \
  --url http://localhost:3000/selecoes \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: localhostApp' \
  --data '{
	"idselecoes": "1",
	"selecao": "Brazil",
	"grupo": "A"
}'
```
#### Atualizar dados    = put()
```curl
curl --request PUT \
  --url http://localhost:3000/selecoes/1 \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: localhostApp' \
  --data '{
	"idselecoes": 50,
	"selecao": "Angola",
	"grupo": "B"
}'
```
#### Apagar dados      = delete()
```curl
curl --request DELETE \
  --url http://localhost:3000/selecoes/50 \
  --header 'User-Agent: localhostApp' \
```
![Ícone do YouTube](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA7FJREFUaEPtWU1vG1UUPefZcamwk/GMTVPRIiQ2RUK0NbBDiKiFBeumGxASsEQqEghoJNqqQRD4GVUlJAS/gFC6QCwaYqdZtEukVnxVOJOUJCKknnfQDLZrStpamjeNI3lWHvndc+659755d+4QO/ziDvcfQwHbncFhBoYZSBmB/5XQRSDvVSrPS3oawF4Bo7S2RMOihS1RpgyJJL2YW9BukQ91/ZAKJB/eyi9J6yA3O/9R+ovgRoIjrYCUaJcNzKqs1mTMKoE/AfwGRos3mys/TACtXuz/CFiolF+VOANgf8rAZGV+ndTU4ebyF90gdH40Kv40hFNZMTvFJaZrzfBMjJlk4HKlMhHJXmD73ilZBmAClKM5cqjZvJgIqJfL39FwIgOu7CCFC7UwPMr5SmUvZX8mYLJjc48swIpmH+u+f5zEl+4pskekcJyNIJgBdDJ7uiwY+BkXguC8oNeygM8c0+o864E3S5ijTsik30GOO8HqC8TOsuH7P4J4tq/191mUb0X+rZHcJK2dBs0eF5j3xrBzbATlqwCfdEGWy48UD964sX6lWi3+bVtvA5wCMOYCeysMQVfZCPzrrlqHjoAO2aVSKRgpFN6H7AmQuzMQci0WsATAdwF+p4AO5qLv77PAKRFvAsi74GpjLLEeBBuEdrkAvZuADvaC5z0OY6ZEvAUgl5pT2ogzoNRAbYD7CegKqXqHFJlPQLySlntbBHScrgflDwh+nkbEtghYLJefinI8DWEyjfOx7QMVMB8EB3LUWStMumrdH8gmnvP9/SPAR86fQu1NnNljtDFerOLWrvcg+w5635vT1k3HnmjGJXQNwGMuMLsn8eiov1HIn4DVuyRLLrDvghEfZE5biT1Ra/MNgScJJFOLLC8LXGHd9+ZI85wjotDVqd6fP0kz530DmJf6Mxi0VXaW80H5nAFfHzTX+vTnXLwHPm23vX3aDNIyzcQvNMdAfDVIbvXti3CMc9XqeM5Gv+zEsUpkco8mg62G738L4kjfygdioZ2tLa28/K+AqveCrInHdDtiuBUPtWD04jN/LH/fnU43Kv5ZCKcHIrj3cCKei1I4UwvDj5NutHdtsqGlKRjWBlEIhZ8EfFgLw69vt0NbeDr/yNgTjPIHDXAAjCqCifuZMch6Qq5AqZiYSWMkTUQViNsfNdqleOc0oiVgtYc4juRKAkOsQ9iEwQaENTD5qHGTwJrie+hXiJcPh+ElxuXTcw0/8m13qQ0zMMxAyggMSyhlAFOb/wNqMFNPCHQb8AAAAABJRU5ErkJggg==)[Playlist do curso](https://www.youtube.com/watch?v=05WeJCU8CJ4&list=PLnex8IkmReXwCyR-cGkyy8tCVAW7fGZow&pp=iAQB)

***


## EN

Section in English.

# REST API with NodeJS
#### Lesson taught by Professor Edson Maia through YouTube.

In this project, JavaScript with NodeJS was used, running with the help of some installed modules. This way, I learned to make better use of Express, MySQL, and JSDoc, and I implemented a CRUD MVC for the application pattern concept, which was quite important in the 70s.

## Requirements
NodeJS                  - [NodeJS Installation](https://nodejs.org/en/download)

VSCode                  - [VSCode Installation](https://code.visualstudio.com/download)

MySQL Workbench Server  - [MySQL Installation](https://dev.mysql.com/downloads/windows/installer/8.0.html)

CURL                    - [CURL Installation](https://curl.se/download.html)

## Documentation
After installing the necessary requirements, we will start the project for it to work. If you already have them installed, you can skip this step.

Let's open MySQL Workbench and follow these steps:
1. Authenticate in `MySQL Workbench`.
2. Create a database with the name `bdcopa`.
3. Create the columns `idselecoes` with _int, AI, PK_, `selecao` with _varchar(25)_, and `grupo` with _char(1)_;

or:

Open `MYSQL COMMAND LINE CLIENT` and execute the SQL command:
``` sql
CREATE SCHEMA `dbcopa` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE `selecoes` (
  `idselecoes` int NOT NULL AUTO_INCREMENT,
  `selecao` varchar(25) COLLATE utf8mb3_unicode_ci NOT NULL,
  `grupo` char(1) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`idselecoes`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--To exit
\q
```

After creating the database, inform it in `connection.js.sample` and rename it to `connection.js`, located inside the project folder `.\src\app\database\`.

# Running the Application

``` node
npm run dev 
``` 

It will start the application with instructions. Nevertheless, you also have endpoints for:
#### List all        = get()
```curl
curl --request GET \
  --url http://localhost:3000/selecoes \
  --header 'User-Agent: localhostApp' 
```
#### List by ID       = get(:id)
```curl
curl --request GET \
  --url http://localhost:3000/selecoes/1 \
  --header 'User-Agent: localhostApp' 
```
#### Create data       = post()
```curl
curl --request POST \
  --url http://localhost:3000/selecoes \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: localhostApp' \
  --data '{
	"idselecoes": "1",
	"selecao": "Brazil",
	"grupo": "A"
}'
```
#### Update data    = put()
```curl
curl --request PUT \
  --url http://localhost:3000/selecoes/1 \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: localhostApp' \
  --data '{
	"idselecoes": 50,
	"selecao": "Angola",
	"grupo": "B"
}'
```
#### Delete data      = delete()
```curl
curl --request DELETE \
  --url http://localhost:3000/selecoes/50 \
  --header 'User-Agent: localhostApp' \
```

![Icon](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA7FJREFUaEPtWU1vG1UUPefZcamwk/GMTVPRIiQ2RUK0NbBDiKiFBeumGxASsEQqEghoJNqqQRD4GVUlJAS/gFC6QCwaYqdZtEukVnxVOJOUJCKknnfQDLZrStpamjeNI3lWHvndc+659755d+4QO/ziDvcfQwHbncFhBoYZSBmB/5XQRSDvVSrPS3oawF4Bo7S2RMOihS1RpgyJJL2YW9BukQ91/ZAKJB/eyi9J6yA3O/9R+ovgRoIjrYCUaJcNzKqs1mTMKoE/AfwGRos3mys/TACtXuz/CFiolF+VOANgf8rAZGV+ndTU4ebyF90gdH40Kv40hFNZMTvFJaZrzfBMjJlk4HKlMhHJXmD73ilZBmAClKM5cqjZvJgIqJfL39FwIgOu7CCFC7UwPMr5SmUvZX8mYLJjc48swIpmH+u+f5zEl+4pskekcJyNIJgBdDJ7uiwY+BkXguC8oNeygM8c0+o864E3S5ijTsik30GOO8HqC8TOsuH7P4J4tq/191mUb0X+rZHcJK2dBs0eF5j3xrBzbATlqwCfdEGWy48UD964sX6lWi3+bVtvA5wCMOYCeysMQVfZCPzrrlqHjoAO2aVSKRgpFN6H7AmQuzMQci0WsATAdwF+p4AO5qLv77PAKRFvAsi74GpjLLEeBBuEdrkAvZuADvaC5z0OY6ZEvAUgl5pT2ogzoNRAbYD7CegKqXqHFJlPQLySlntbBHScrgflDwh+nkbEtghYLJefinI8DWEyjfOx7QMVMB8EB3LUWStMumrdH8gmnvP9/SPAR86fQu1NnNljtDFerOLWrvcg+w5635vT1k3HnmjGJXQNwGMuMLsn8eiov1HIn4DVuyRLLrDvghEfZE5biT1Ra/MNgScJJFOLLC8LXGHd9+ZI85wjotDVqd6fP0kz530DmJf6Mxi0VXaW80H5nAFfHzTX+vTnXLwHPm23vX3aDNIyzcQvNMdAfDVIbvXti3CMc9XqeM5Gv+zEsUpkco8mg62G738L4kjfygdioZ2tLa28/K+AqveCrInHdDtiuBUPtWD04jN/LH/fnU43Kv5ZCKcHIrj3cCKei1I4UwvDj5NutHdtsqGlKRjWBlEIhZ8EfFgLw69vt0NbeDr/yNgTjPIHDXAAjCqCifuZMch6Qq5AqZiYSWMkTUQViNsfNdqleOc0oiVgtYc4juRKAkOsQ9iEwQaENTD5qHGTwJrie+hXiJcPh+ElxuXTcw0/8m13qQ0zMMxAyggMSyhlAFOb/wNqMFNPCHQb8AAAAABJRU5ErkJggg==)[Playlist](https://www.youtube.com/watch?v=05WeJCU8CJ4&list=PLnex8IkmReXwCyR-cGkyy8tCVAW7fGZow&pp=iAQB)
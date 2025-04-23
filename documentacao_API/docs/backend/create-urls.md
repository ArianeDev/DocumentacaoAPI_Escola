---
sidebar_position: 4
---

# Criando as URLs

## Do projeto

Não se esqueça de importar o include.

**Admin** - permite o super usuário (superuser) logar no sistema e ter acesso a informações e credenciais de Administrador. Para ter acesso basta digitar na url ‘admin/’.

```py title="urls.py"
path('admin/', admin.site.urls),
```

**api** -  Importa as URLs definidas no módulo api.urls, permitindo que sejam organizadas separadamente.

```py title="urls.py"
path('api/', include('api.urls')),
```

## Da aplicação

### Importações

O arquivo urls.py está importando path, uma função que é utilizada para definir um padrão para criação de URLs no projeto.
Em seguida, o programa está importando do arquivo .views.

```py title="urls.py"
from django.urls import path
from .viewa import *
```

asterisco (*) significa que ele está pegando tudo de views.

Abaixo estará rotas de JWT simples que foi implementado:

```py title="urls.py"
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
```

**TokenObtainPairView:** Classe para obter um token assim que o usuário se logar.
**TokenRefreshView:** Classe para renovar o access token assim que ele expira, desde que o usuário forneça um refresh token válido.

Logo em seguida temos a lista urlpatterns que define os caminhos (ou rotas) que a aplicação web irá reconhecer. Cada elemento dessa lista corresponde a uma URL específica da aplicação e aponta para a view que deve ser executada quando essa URL é acessada.

**listar_professores** - que está na lista é a ‘professores’, que é para a execução da view ‘listar_professores’. Para acessar basta inserir no navegador o seguinte caminho:
‘api/professores’.

```py title="urls.py"
path('professores', listar_professores),
```

**ProfessoresView** - está associada a uma classe genérica do Django Rest Framework utilizada para gerenciar operações de visualização, atualização e exclusão de instâncias do model Cadastro. É necessário incluir na URL um número inteiro que seria o Identificador.

```py title="urls.py"
path('prof', ProfessoresView.as_view()),
```

**ProfessoresDetailVIew** - é uma classe baseada em Views genéricas da Django REST Framework (DRF). Ela fornece uma interface para manipular registros individuais do modelo Cadastro, permitindo as operações de visualização, atualização e exclusão. O acesso é restrito a usuários autenticados, garantindo segurança.

```py title="urls.py"
path('id/<int:pk>', ProfessoresDetailView.as_view()),
```

**TokenObtainPairVIew** -  está interligada com a view que é uma classe genérica, que implementa uma funcionalidade para autenticação de usuários usando JSON Web Tokens (JWT). O seu caminho da URL é ‘token/’

```py title="urls.py"
path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
```

**TokenRefreshVIew** -  é uma classe baseada no Django REST Framework e fornecida pelo pacote Simple JWT. Sua principal funcionalidade é renovar um token de acesso (access token) a partir de um token de atualização (refresh token), desde que o token de atualização seja válido. Para ter acesso a URL basta inserir o caminho ‘refresh/’

```py title="urls.py"
path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
```

**buscar_ nome_professor** -  Esse endpoint permite buscar professores cadastrados, filtrando por nome ou retornando todos os professores, dependendo dos parâmetros da requisição.Para ter acesso a URL basta inserir o caminho ‘buscar/nome/’

```py title="urls.py"
path('buscar/nome/', buscar_nome_professor),
```

**ProfessorSearchView** - fornece uma interface para listar e buscar registros do model Cadastro, com suporte a filtros e buscas dinâmicas, enquanto garante o acesso restrito a usuários autenticados. Para ter acesso a URL basta inserir o caminho ‘search/’.

```py title="urls.py"
path('search/', ProfessoresSearchView.as_view()),
```

### Disciplinas

**DisciplinasView** - permite listar todas as disciplinas cadastradas no sistema e criar novas disciplinas. O acesso é restrito a usuários autenticados, garantindo a segurança dos dados. Para ter acesso a URL basta inserir o caminho ‘disciplinas/’.

```py title="urls.py"
path('disciplinas', DisciplinasView.as_view()),
```

**DisciplinasDetailView** - fornece uma interface para gerenciar (visualizar, atualizar ou excluir) registros individuais do modelo Disciplinas. O acesso ao endpoint é restrito a usuários autenticados, garantindo a proteção dos dados. Para ter acesso a URL basta inserir o caminho ‘disciplinas/’, com um número inteiro que seria um identificador.

```py title="urls.py"
path('disciplina/<int:pk>', DisciplinaDetaiView.as_view()),
```

### Ambientes

**AmbientesView** -  é uma classe baseada em Views genéricas da Django REST Framework (DRF). Ela permite listar todos os ambientes cadastrados no sistema e criar novos registros de ambientes.Para ter acesso a URL basta inserir o caminho ‘ambientes/’

```py title="urls.py"
path('ambientes', AmbientesView.as_view()),
```

**AmbientesDetailView** -  gerenciar um registro individual do modelo Ambiente, permitindo visualizar, atualizar ou excluir informações específicas. O acesso é restrito a usuários autenticados para garantir segurança.Para ter acesso a URL basta inserir o caminho ‘ambientes/’, e em seguida um número inteiro que seria o identificador.

```py title="urls.py"
path('ambientes/<int:pk>', AmbientesDetailView.as_view()),
```

### Turmas

**TurmasVIew** - lista todas as turmas cadastradas e cria novas turmas no banco de dados. O acesso a essa View é restrito a usuários autenticados, assegurando proteção e privacidade das informações.Para ter acesso a URL basta inserir o caminho ‘turmas/’.

```py title="urls.py"
path('turmas', TurmasView.as_view()),
```

### Cursos

**CursosView** - permite listar GET e criar POST objetos do modelo Curso. Ela usa CursoSerializer para converter os dados e restringe o acesso apenas a usuários autenticados IsAuthenticated. Para ter acesso a URL basta inserir o caminho cursos/’.

```py title="urls.py"
path('cursos', CursosView.as_view()),
```

**DisciplinaDeView** - permite permite recuperar GET, atualizar PUT e PATCH e excluir DELETE uma disciplina específica do banco de dados.Para ter acesso a URL basta inserir o caminho 'disciplina/id'.

```py title="urls.py"
path('curso/<int:pk>', CursoDetailView.as_view()),
```
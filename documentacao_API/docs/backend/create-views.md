---
sidebar_position: 3
---

# Criando as views

Os métodos da API utilizam de autenticação do usuário para a realização dos métodos através de token. Com isso, em alguns métodos será notório a presença da seguinte linha:
```js
@permission_classes([IsAuthenticated])
```

## Importações 
```js title="views.py"
from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny

from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
```

## Método GET e POST

**URL:** /professores

**Métodos:** 
  - GET: Lista todos os professores
  - POST: Criar um novo professor
  

```js title="views.py"
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def listar_professores(request):
    if request.method == 'GET':
        queryset = Cadastro.objects.all()
        serializer = CadastroSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CadastroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```

## Método GET

**URL:** /professores/buscar/'nome'

**Método:** 
  - GET: Buscar professor por nome
  - **Parâmetro:**
    - 'nome'

```py title="views.py"
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def buscar_nome_professor(request):
    termo = request.get('nome', '')
    if termo:
        professores = Cadastro.objects.filter(nome_incontains = termo)
    else:
        professores = Cadastro.objects.all()
    
    serializer = CadastroSerializer(professores, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
```
dhfksdh
```py title="views.py"
class ProfessoresView(ListCreateAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]
```

## Método GET e PUT

**URL:** /professores/'id'

**Métodos:** 
  - GET: Retornar um professor específico na área específica
  - PUT - Atualiza os dados de uma professor específico
  - DELETE - Deleta um professor específico
  - **Parâmetro:**
    - id - Chave primária do professor

```py title="views.py"
class ProfessoresDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]
```

## Método GET, PUT e DELETE

**URL:** /search

**Métodos:** 
  - get_object - Este método é utilizado para recuperar o objeto Cadastro correspondente ao id fornecido na URL. Se o objeto não for encontrado, uma exceção será levantada.
  - GET - Este método é chamado quando uma requisição get é feita. Ele retorna os detalhes do professor específico, utilizando o serializer para formatar a resposta.
  - PUT - Este método é chamado quando uma requisição put é feita. Ele permite atualizar os dados do professor específico. Os dados devem ser enviados no corpo da requisição e serão validados pelo serializer.
  - DELETE - Este método é chamado quando uma requisição delete é feita. Ele exclui o professor específico do banco de dados.
  - **Parâmetro:**
    - id - Chave primária do professor

```py title="views.py"
class ProfessoresSearchView(ListAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['nome']
```

## Método GET e POST

**URL:** /disciplina

**Métodos:** 
 - GET - Retorna a lista de todas as disciplinas
 - POST - Permite a criação de uma nova disciplina

```py title="views.py"
class DisciplinasView(ListCreateAPIView):
    queryset = Disciplinas.objects.all()
    serializer_class = DisciplinaSerializer
    permission_classes = [IsAuthenticated]
```

## Método GET e POST

**URL:** /disciplina/id

**Métodos:** 
 - GET - Retorna a lista de todas as disciplinas
 - POST - Permite a criação de uma nova disciplina

```py title="views.py"
class DisciplinaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Disciplinas.objects.all()
    serializer_class = DisciplinaSerializer
    permission_classes = [IsAuthenticated]
```

## Método GET e POST

**URL:** /ambiente

**Métodos:** 
 - GET: Retorna uma lista de todos os ambientes.
 - POST: Permite a criação de um novo ambiente.

## Atributos:
 - queryset:
   - Tipo - QuerySet
   - descrição - Retorna todos os registros do modelo Disciplinas .  
 - Serializer_class:
   - Tipo - Serializer
   - descrição - Utiliza o DisciplinaSerializer para converter os dados do modelo Disciplinas em JSON.
 - Permission_class:
   - Tipo - List
   - descrição -  IsAuthenticated garante que apenas usuários autenticados possam acessar a view.

```py title="views.py"
class DisciplinaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Disciplinas.objects.all()
    serializer_class = DisciplinaSerializer
    permission_classes = [IsAuthenticated]
```

## Método GET e POST - Ambiente

**URL:** /ambiente/id

**Métodos:** 
 - GET: Retorna uma lista de todos os ambientes.
 - POST: Permite a criação de um novo ambiente.

## Atributos:
 - queryset:
   - Tipo - QuerySet
   - descrição - Retorna todos os registros do modelo do Ambiente .  
 - Serializer_class:
   - Tipo - Serializer
   - descrição -  Utiliza o AmbienteSerializers para converter os dados do modelo Ambiente em JSON.
 - Permission_class:
   - Tipo - List
   - descrição - IsAuthenticated garante que apenas usuários autenticados possam acessar a view.

```py title="views.py"
class AmbientesView(ListCreateAPIView):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer
    permission_classes = [IsAuthenticated]
```

## Método GET e POST - Ambiente

**URL:** /ambiente/id

**Métodos:** 
 - GET: Retorna os detalhes do ambiente específico.
 - PUT: Atualiza os dados do ambiente específico.
 - DELETE: Exclui o ambiente específico.

## Atributos:
 - queryset:
   - Tipo - QuerySet
   - descrição - Retorna todos os registros do modelo do Ambiente .  
 - Serializer_class:
   - Tipo - Serializer
   - descrição -  Utiliza o AmbienteSerializer para converter os dados do modelo Ambiente em JSON.
 - Permission_class:
   - Tipo - List
   - descrição - IsAuthenticated garante que apenas usuários autenticados possam acessar a view.

```py title="views.py"
class AmbienteDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer
    permission_classes = [IsAuthenticated]
```

## Método GET e POST - Curso

**URL:** /curso

**Métodos:** 
 - GET - Retorna uma lista de todos os cursos. 
 - POST - Permite a criação de um novo curso.

## Atributos:
 - queryset:
   - Tipo - QuerySet
   - descrição - Retorna todos os registros do modelo Curso.
 - Serializer_class:
   - Tipo - Serializer
   - descrição -  Utiliza o CursoSerializers para converter os dados do modelo Curso em JSON.
 - Permission_class:
   - Tipo - List
   - descrição - IsAuthenticated garante que apenas usuários autenticados possam acessar a view.

```py title="views.py"
class CursosView(ListCreateAPIView):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
    permission_classes = [IsAuthenticated]
```

## Método GET, POST PATH e DELETE - Curso

**URL:** /curso/id

**Métodos:** 
 - GET - Este método é utilizado para recuperar uma instância específica do modelo Curso.  
 - PUT - Este método é utilizado para atualizar uma instância existente do modelo Curso.
 - PATCH - Este método é semelhante ao PUT, mas é usado para atualizar parcialmente uma instância do modelo. 
 - DELETE - Este método é utilizado para excluir uma instância do modelo Curso. Quando você faz uma requisição DELETE para a URL correspondente a um curso específico, o método destroy é chamado, removendo o curso do banco de dados.

## Atributos:
 - queryset:
   - Tipo - QuerySet
   - descrição - Retorna todos os registros dos modelos curso
 - Serializer_class:
   - Tipo - Serializer
   - descrição -  Utiliza o CursoSerializer  para converter os dados do modelo Curso em JSON.
 - Permission_class:
   - Tipo - List
   - descrição - IsAuthenticated garante que apenas usuários autenticados possam acessar a view.

```py title="views.py"
class CursoDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
    permission_classes = [IsAuthenticated]
```

## Método GET e POST - Curso

**URL:** /turma

**Métodos:** 
 - GET - Recupera uma lista de todas as instâncias do modelo Turma.
 - POST - Cria uma nova instância do modelo Turma.

## Atributos:
 - queryset:
   - Tipo - QuerySet
   - descrição - Este atributo define a consulta que será utilizada para recuperar as instâncias do modelo Turma. Neste caso, ele retorna todas as instâncias do modelo.
 - Serializer_class:
   - Tipo - Serializer
   - descrição -  Este atributo especifica o serializer que será utilizado para validar e transformar os dados do modelo Turma em JSON e vice-versa.
 - Permission_class:
   - Tipo - List
   - descrição - IsAuthenticated garante que apenas usuários autenticados possam acessar a view.

```py title="views.py"
class TurmasView(ListCreateAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer
    permission_classes = [IsAuthenticated]
```

## Método GET e POST - Curso

**URL:** /turma

**Métodos:** 
 - GET - Recupera uma instância específica do modelo Turma.
 - PUT - Atualiza uma instância existente do modelo Turma.
 - PATCH - Atualiza parcialmente uma instância do modelo Turma.
 - DELETE: Exclui uma instância do modelo Turma.

## Atributos:
 - queryset:
   - Tipo - QuerySet
   - descrição - Este atributo define a consulta que será utilizada para recuperar as instâncias do modelo Turma. Neste caso, ele retorna todas as instâncias do modelo.
 - Serializer_class:
   - Tipo - Serializer
   - descrição -  Este atributo especifica o serializer que será utilizado para validar e transformar os dados do modelo Turma em JSON e vice-versa
 - Permission_class:
   - Tipo - List
   - descrição - IsAuthenticated garante que apenas usuários autenticados possam acessar a view.

```py title="views.py"
class TurmaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer
    permission_classes = [IsAuthenticated]
```
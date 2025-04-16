---
sidebar_position: 3
---

# Criando as views

Os métodos da API utilizam de autenticação do usuário para a realização dos métodos através de token. Com isso, em alguns métodos será notório a presença da seguinte linha:
```js
@permission_classes([IsAuthenticated])
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

**URL:** ver isso aqui

**Métodos:** 
  
```py title="views.py"
class ProfessoresSearchView(ListAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['nome']
```
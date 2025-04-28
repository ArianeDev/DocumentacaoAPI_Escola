---
sidebar_position: 5
---

# Saídas da API

### POST - URL: http://127.0.0.1:8000/api/token/

- Gera o token para o funcionamento das outras funções.

Input:
```json
{
  "username":"lin",
  "password":123
}
```

Output:
```json
{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0NTQ5MzA1NywiaWF0IjoxNzQ1NDA2NjU3LCJqdGkiOiI0NGIxMjhiZGNkNTA0ZGVkYmE5YWQ2ODc4YmI1YWQ5YSIsInVzZXJfaWQiOjJ9.A3ar2f6hNORzQY9PLrj53FybVmtUi7YekRl6oQ2nqkk",
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ1NDEwMjU3LCJpYXQiOjE3NDU0MDY2NTcsImp0aSI6ImRjYWMzZDUwNTczOTQyOGI5M2UxMmNiZDUyYzNmMTNhIiwidXNlcl9pZCI6Mn0.X8OodLYfxu4XvFh3Ful55MmhehPa2DVZ2lFDFnRR8ZI"
}
```
Todas as requisições a baixo precisam do token para funcionar.

### GET - URL: http://127.0.0.1:8000/api/professores

- Lista todos os professores cadastrardos

### GET - URL: http://127.0.0.1:8000/api/id

- Lista todos um professor específico


### POST - URL: http://127.0.0.1:8000/api/refresh/ 

Input:
```json
{
  "refresh":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0NTQ5NTQ4NCwiaWF0IjoxNzQ1NDA5MDg0LCJqdGkiOiI1NThmZTk4ZDQwZWQ0ZjJiOTVhZjFlM2ZkNWNmZjY2MiIsInVzZXJfaWQiOjF9.nlxcNPySwST1cU1K1NSI7MCQnpxMWIH7_qGHetk3N_0"
}
```

Output:
```json
{
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ1NDEyNzQ0LCJpYXQiOjE3NDU0MDkwODQsImp0aSI6ImMxZWIzZDcyZjMzZDRlZTA5ZDhmZWYxYjQ1OGVhM2FkIiwidXNlcl9pZCI6MX0.Lsvpi1LQHtLN1vTqr27w_5cu39Ohux7fzeLIN82B8CI"
}

```

### GET - URL: http://127.0.0.1:8000/api/buscar/nome/?nome=José 

- Retona um professor específico por pesquisa

### GET - URL: http://127.0.0.1:8000/api/search/

- Retona professor(es) atraves de pesquisas

### GET - URL: http://127.0.0.1:8000/api/disciplinas

- Retona todas as disciplinas
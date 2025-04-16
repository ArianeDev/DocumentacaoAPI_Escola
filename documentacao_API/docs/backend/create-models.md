---
sidebar_position: 2
---

# Criando o models

Este arquivo contém a definição dos modelos de banco de dados para o projeto, utilizando o Django ORM (Object-Relational Mapping). Os modelos aqui descritos representam as entidades centrais do sistema, como cadastro de usuários, disciplinas, turmas e cursos. Cada modelo é mapeado para uma tabela no banco de dados, com campos que armazenam dados essenciais para o funcionamento da aplicação.
O comando from django.db import models é utilizado para importar o módulo models do Django, que contém todas as classes e funcionalidades necessárias para definir modelos de banco de dados em uma aplicação Django

```bash
from django.db import models
```

## Model Cadastro

O modelo de cadastro tem por objetivo realizar o cadastro de algum docente no sistema. Ele armazena informações básicas de contato e dados pessoas:

**Campos:**
- ni (CharField): Número de identificação (máximo de 15 caracteres). Identificador único para o cadastro da pessoa.
- nome (CharField): Nome completo da pessoa (máximo de 255 caracteres).
- email (EmailField): Endereço de email da pessoa. Deve ser um email válido.
- cel (CharField): Número de celular da pessoa (máximo de 255 caracteres).
- ocup (FloatField): Ocupação ou carga horária associada à pessoa (valor numérico flutuante).

```js title="models"
class Cadastro(models.Model):
  ni = models.CharField(max_length=15)
  nome = models.CharField(max_length=255)
  email = models.EmailFields()
  cel = models.CharField(max_length=255)
  ocup = models.FloatField()
```

## Model Disciplina

O modelo Disciplinas armazena informações sobre as disciplinas oferecidas, como o código da disciplina, o nome da disciplina e a carga horária.

**Campos:**
- cod (CharField): Código da disciplina (máximo de 100 caracteres). Exemplo: "PWBE" (Programação Web Back End).
- disc (CharField): Nome da disciplina (máximo de 100 caracteres). Exemplo: "Programação Web Back End".
- ch (IntegerField): Carga horária da disciplina em horas. Exemplo: 45 horas.

```js title="models"
class Disciplina(models.Model):
  cod = models.CharField(max_length=100)
  disc = models.CharField(max_length=100)
  ch = models.IntegerField()
```

## Model Ambiente

O modelo Ambiente representa os ambientes físicos onde as aulas acontecem, como laboratórios de informática ou salas de aula. Ele armazena informações sobre o código do ambiente, a descrição da sala e a capacidade dos alunos.

**Campos:**
- cod (CharField): Código do ambiente (máximo de 255 caracteres). Exemplo: "LabA101".
- sala (CharField): Descrição do ambiente ou sala (máximo de 255 caracteres). Exemplo: "Laboratório de Informática".
- cap (IntegerField): Capacidade máxima de alunos para o ambiente (número inteiro).
- resp (CharField): Nome da pessoa responsável pelo ambiente (máximo de 255 caracteres).
- per (CharField): Período em que o ambiente está disponível. Escolha entre os valores definidos em PERIODOS:
  - 'M' para Manhã
  - 'T' para Tarde
  - 'N' para Noite
  - 'I' para Integral O valor padrão é "M" (Manhã).

```js title="models"
PERIODO = [
  ('M', 'Manhã'),
  ('T', 'Tarde'),
  ('N', 'Noite'),
  ('I', 'Integral'),
]

class Disciplina(models.Model):
  cod = models.CharField(max_length=255)
  sala = models.CharField(max_length=255)
  cap = models.IntegerField()
  resp = models.CharField(max_length=255)
  per = models.CharField(choices=PERIODOS, max_length=255)
```

## Model - Turma

O modelo Turma armazena informações sobre as turmas específicas de um curso, incluindo o código da turma e sua descrição.

**Campos:**
- cod (CharField): Código da turma (máximo de 255 caracteres). Exemplo: "13".
- turma (CharField): Descrição da turma (máximo de 255 caracteres). Exemplo: "2DS-TB".

```js title="models"
  cod = models.CharField(max_length=255)
  turrma = models.CharField(max_length=255) 
```

## Model - Curso

O modelo Curso representa os cursos oferecidos pela instituição, incluindo o código do curso, nome do curso, tipo de curso e a carga horária das aulas.

**Campo:**
- cod (CharField): Código do curso (máximo de 255 caracteres). Exemplo: "TEC".
- curso (CharField): Nome do curso (máximo de 255 caracteres). Exemplo: "Técnico em Desenvolvimento de Sistemas".
- tipo (CharField): Tipo de curso. Escolha entre os valores definidos em TIPOS:
  - 'CAI' para Aprendizagem
  - 'CT' para Técnico
  - 'CS' para Superior
  - 'FIC' para Formação O valor padrão é "CT" (Técnico).
- ha (CharField): Hora aula do curso (máximo de 255 caracteres). Representa a quantidade de horas-aula para o curso, por exemplo, "45".

```js title="models"
  TIPOS = [
      ('CAI', 'Aprendizagem'),
      ('CT','Técnico'),
      ('CS','Superior'),
      ('FIC','Formação')
  ]
  class Curso(models.Model):
      cod = models.CharField(max_length=255)
      curso = models.CharField(max_length=255)
      tipo = models.CharField(max_length=20, choices=TIPOS, default="CT")
      ha =  models.CharField(max_length=255) 
```
---
sidebar_position: 1
---

# Criando a estrutura

Nesse arquivo será possível criar toda a estrutura do projeto.

## Criação do projeto

Para a criação do projeto em Django é preciso digitar o seguinte código no terminal:

```bach
django-admin startproject cadastro
```

Depois terá que entrar na pasta do projeto.
```bach
cd cadastro
```

## Criação do aplicativo

Após a criação do projeto, será preciso criar uma aplicação com o seguinte código no terminal:

```bach
python manage.py startapp app
```

No projeto terá que cadastrar a aplicação e inserir o rest_framework no arquivo **settings.py**. 

### Instalação do app

Motivo da inserção dos pacotes:
- Rest_framework - utilizaremos esse pacote para a realização da API.
- Rest_framework_simplejwt - para a realização do token.

```python  title="cadastro/settings.py"
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework_simplejwt',
    'rest_framework',
    'api',
]

```

<!-- - `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar` -->

<!-- Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
``` -->

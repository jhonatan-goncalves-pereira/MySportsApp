
# AtletaApp

Um aplicativo mobile desenvolvido em React Native utilizando Expo, que permite pesquisar atletas de diferentes esportes, visualizar suas informações e gerenciar uma lista de favoritos.

## Funcionalidades

- **Tela de Login**: Acesso rápido ao aplicativo com um botão que leva à tela principal.
- **Busca de Atletas**: Permite a pesquisa de atletas por nome utilizando uma API pública de esportes.
- **Exibição de Atletas**: Mostra informações dos atletas em um componente chamado `CardAtleta`, incluindo nome e imagem.
- **Favoritos**: Adiciona atletas a uma lista de favoritos que pode ser visualizada em um componente separado chamado `PainelFavoritos`.

## Tecnologias Utilizadas

- **React Native**: Biblioteca para desenvolvimento de aplicativos móveis.
- **Expo**: Ferramenta para facilitar o desenvolvimento com React Native.
- **React Navigation**: Biblioteca para navegação entre telas.
- **Axios**: Biblioteca para fazer requisições HTTP.

## Pré-requisitos

- Node.js
- Expo CLI

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/jhonatan-goncalves-pereira/MySportsApp/
   cd MySportsApp
   cd my-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o aplicativo:
   ```bash
   expo start
   ```

4. Abra o aplicativo em um emulador ou dispositivo físico utilizando o aplicativo Expo Go.

## Estrutura do Projeto

```plaintext
AtletaApp/
│
├── components/            # Componentes reutilizáveis
│   ├── CardAtleta.tsx    # Componente que exibe informações de um atleta
│   └── PainelFavoritos.tsx # Componente que exibe a lista de atletas favoritos
│
├── screens/              # Telas do aplicativo
│   ├── LoginScreen.tsx   # Tela de login
│   ├── HomeScreen.tsx    # Tela principal com navegação
│   └── SearchScreen.tsx  # Tela de busca de atletas
│
└── App.tsx               # Componente raiz do aplicativo
```

## API Utilizada

O aplicativo utiliza a API Sports Open Data para buscar informações sobre atletas. Para mais detalhes sobre a API, acesse: [Sports Open Data](https://sportsopendata.net/).

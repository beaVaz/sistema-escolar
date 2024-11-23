# Sistema Escolar

## Descrição
O **Sistema Escolar** Desenvolvido para facilitar a gestão das informações escolares. Através de uma interface simples e intuitiva, o aplicativo oferece aos alunos, acesso a funcionalidades como boletim escolar, calendário, eventos e contatos da escola.

## Funcionalidades
O aplicativo inclui as seguintes funcionalidades:

- **Home**: Tela inicial com mensagem de boas-vindas e links rápidos para outras páginas.
- **Boletim**: Exibição do boletim escolar com disciplinas, notas e avaliação de desempenho. O sistema utiliza lógica condicional para categorizar os resultados (Muito Bom, Bom, Regular).
- **Calendário**: Exibição do calendário escolar com a opção de download em PDF. 
- **Eventos**: Lista de eventos escolares com título, descrição e data.
- **Contatos**: Exibe ícones e links interativos para WhatsApp, telefone e Instagram, facilitando a comunicação com a escola.
- **Menu Lateral**: Navegação entre páginas utilizando a biblioteca **Drawer**.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo**: Plataforma para executar desenvolvimento com React Native.
- **Bibliotecas**:
  - `expo-google-fonts/roboto`: Para usar fonte personalizada.
  - `react-native-svg`: Ícones e vetores (SVG).
  - `expo-linking`: Links interativos dentro do aplicativo.
  - `react-navigation`: Para navegação entre telas.
  - `react-navigation-drawer`: Para a criação do menu lateral (Drawer).
  - `flatList`: Componente utilizado para renderizar a lista de disciplinas e suas respectivas notas e status.


## Instalação e Execução
 **node_modules** npm install.
 **inciar** npm start.

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/beaVaz/sistema-escolar.git
   cd sistema-escolar

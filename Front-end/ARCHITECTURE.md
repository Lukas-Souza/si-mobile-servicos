# Arquitetura em camadas

O projeto usa Expo Router para navegação e organiza a implementacao por feature. As rotas ficam em `src/app`; telas e componentes de cada funcionalidade ficam em `src/features/<feature>/presentation`.

## Camadas

- `src/app`: adaptadores de rota e composicao da navegacao. Uma rota declara a tela correspondente e nao deve conter regra de negocio.
- `src/features/<feature>/presentation`: telas, componentes e estado visual. Pode depender da camada de aplicacao e de componentes compartilhados; nao acessa API ou armazenamento diretamente.
- `src/features/<feature>/application`: casos de uso, coordenacao de fluxo e contratos de entrada/saida. Nao depende de React Native, Expo ou detalhes de infraestrutura.
- `src/features/<feature>/domain`: entidades, objetos de valor, regras e contratos do dominio. Permanece independente de framework e das outras camadas externas.
- `src/features/<feature>/infrastructure`: implementacoes de contratos, clientes HTTP, persistencia e adaptadores de plataforma. Depende de contratos internos, nunca o contrario.
- `src/components`: componentes visuais compartilhados entre funcionalidades.

## Direcao das dependencias

`app -> presentation -> application -> domain`

`infrastructure -> application/domain contracts`

As dependencias apontam para dentro. A infraestrutura concreta deve ser conectada na composicao da aplicacao, e os casos de uso recebem contratos em vez de clientes HTTP ou armazenamento concretos.

## Estado atual

As tres telas iniciais foram extraidas de `src/app` para suas respectivas camadas de apresentacao. O starter ainda nao possui regras de negocio, persistencia ou integracao remota; por isso, as camadas de dominio, aplicacao e infraestrutura devem ser criadas dentro da feature quando houver um caso de uso real, sem adicionar classes ou repositorios artificiais.
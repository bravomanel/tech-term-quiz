export interface TechTerm {
  term: string;
  definition: string;
}

export const TERMS_DB: TechTerm[] = [
  { term: 'Oracle DataBase', definition: 'Sistema gerenciador de banco de dados relacional robusto e amplamente utilizado em grandes corporações.' },
  { term: 'Race Condition', definition: 'Falha onde o resultado de um sistema depende da sequência ou tempo incontrolável de eventos.' },
  { term: 'Atomicidade', definition: 'Propriedade ACID que garante que uma transação seja tratada como uma unidade única: ou tudo acontece, ou nada acontece.' },
  { term: 'Quebra de Atomicidade', definition: 'Quando uma transação falha no meio e o sistema permanece em um estado parcial inválido.' },
  { term: 'Inconsistência entre dados', definition: 'Estado onde dados redundantes ou relacionados não coincidem entre si.' },
  { term: 'Rollback Automático', definition: 'Reversão automática de uma transação para o estado anterior após uma falha.' },
  { term: 'Connection Pool', definition: 'Cache de conexões de banco de dados mantidas abertas para serem reutilizadas, melhorando a performance.' },
  { term: 'Lock de Tabela', definition: 'Mecanismo que impede o acesso simultâneo a uma tabela inteira para garantir integridade durante escritas.' },
  { term: 'DBA', definition: 'Profissional responsável pela instalação, configuração, upgrade e monitoramento de bancos de dados.' },
  { term: 'Chave de Idempotência', definition: 'Identificador único usado para garantir que uma mesma operação não seja processada mais de uma vez.' },
  { term: 'Idempotência', definition: 'Propriedade onde realizar uma operação várias vezes produz o mesmo resultado que realizá-la apenas uma vez.' },
  { term: 'Fail Fast', definition: 'Filosofia de design onde o sistema tenta falhar imediatamente ao encontrar um erro, evitando operações continuadas.' },
  { term: 'RabbitMQ', definition: 'Software de mensageria open-source (Message Broker) que implementa o protocolo AMQP.' },
  { term: 'Sistemas Distribuídos', definition: 'Componentes localizados em computadores em rede que se comunicam e coordenam ações apenas passando mensagens.' },
  { term: 'Backpressure', definition: 'Mecanismo onde um consumidor sinaliza ao produtor para diminuir a taxa de envio de dados para evitar sobrecarga.' },
  { term: 'DDoS Autoinflingido', definition: 'Quando um sistema derruba a si mesmo devido a loops de retentativas ou configurações erradas de escala.' },
  { term: 'Exponential Backoff', definition: 'Algoritmo que aumenta o tempo de espera exponencialmente entre retentativas de operações falhas.' },
  { term: 'ACID', definition: 'Conjunto de propriedades (Atomicidade, Consistência, Isolamento, Durabilidade) que garantem transações seguras.' },
  { term: 'BASE', definition: 'Modelo de consistência para NoSQL: Basicamente Disponível, Estado leve (Soft state), Consistência Eventual.' },
  { term: 'API Gateway', definition: 'Servidor que atua como um ponto de entrada único para um conjunto de microsserviços.' },
  { term: 'Saga Pattern', definition: 'Padrão para gerenciar transações distribuídas através de uma sequência de transações locais.' },
  { term: 'Kubernetes', definition: 'Plataforma open-source para automatizar a implantação, o dimensionamento e o gerenciamento de aplicações em contêineres.' },
  { term: 'Microsserviços em Java', definition: 'Arquitetura usando frameworks como Spring Boot ou Quarkus para criar serviços pequenos e independentes.' },
  { term: 'Monolito Relacional', definition: 'Arquitetura onde toda a lógica e dados estão centralizados em um único banco de dados grande e acoplado.' },
  { term: 'Sharding', definition: 'Método de distribuição de dados em múltiplas máquinas (particionamento horizontal).' },
  { term: 'Circuit Breaker', definition: 'Padrão que impede uma aplicação de tentar executar uma operação que provavelmente falhará repetidamente.' },
  { term: 'Protocolo TCP/IP', definition: 'Conjunto de protocolos de comunicação que baseia a Internet (Transmissão e Endereçamento).' },
  { term: 'Deadlock', definition: 'Situação onde dois processos ficam bloqueados esperando um pelo recurso do outro infinitamente.' },
  { term: 'CAP Theorem', definition: 'Teorema que afirma ser impossível um sistema distribuído garantir Consistência, Disponibilidade e Tolerância a Partição simultaneamente.' },
  { term: 'Event Sourcing', definition: 'Padrão onde o estado de uma aplicação é determinado por uma sequência de eventos armazenados.' }
];
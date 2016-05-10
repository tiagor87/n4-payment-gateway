export enum EnumMoeda {
  REAL = 986
}

export interface IDadosPedido {
  /**
  * Número do pedido da loja. Recomenda-se que seja um valor único por pedido.
  */
  numero: string;
  /**
  * Valor a ser cobrado pelo pedido (já deve incluir valores de frete, embrulho, custos extras, taxa de embarque, etc). Esse valor é o que será debitado do consumidor.
  */
  valor: number;
  /**
  *  Código numérico da moeda na norma ISO 4217. Para o Real, o código é 986.
  */
  moeda: EnumMoeda;
  /**
  * Data hora do pedido. Formato: aaaa-MM-ddTHH24:mm:ss
  */
  dataHora: string;
  /**
  * Descrição do pedido.
  */
  descricao?: string;
  /**
  *  Idioma do pedido: PT (português), EN (inglês) ou ES (espanhol). Com base nessa informação é definida a língua a ser utilizada nas telas da Cielo. Caso não seja enviado, o sistema assumirá “PT”.
  */
  idioma?: string;
  /**
  *  Montante do valor da autorização que deve ser destinado à taxa de embarque.
  */
  taxaEmbarque?: number;
  /**
  * Texto de até 13 caracteres que será exibido na fatura do portador, após o nome do Estabelecimento Comercial.
  */
  softDescriptor?: string;
  /**
  * Converte o modelo em XML.
  */
   converterEmXML(): string;
}

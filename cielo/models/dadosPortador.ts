export enum EnumIndicadorCodigoSeguranca {
  NAO_INFORMADO = 0,
  INFORMADO = 1,
  ILEGIVEL = 2,
  INEXISTENTE = 9
}

export interface IDadosPortador {
  /**
  * Número do cartão.
  */
  numero: number;
  /**
  * Validade do cartão no formato aaaamm. Exemplo: 201212 (dez/2012).
  */
  validade: number;
  /**
  * Indicador sobre o envio do Código de segurança: 0 – não informado, 1 – informado, 2 – ilegível, 9 – inexistente
  */
  indicador: EnumIndicadorCodigoSeguranca;
  /**
  * Obrigatório se o indicador for 1.
  */
  codigoSeguranca?: number;
  /**
  * Nome como impresso no cartão.
  */
  nomePortador?: string;
  /**
  * Token que deve ser utilizado em substituição aos dados do cartão para uma autorização direta ou uma transação recorrente. Não é permitido o envio do token junto com os dados do cartão na mesma transação.
  */
  token?: string;
  /**
  * Converte o modelo em XML.
  */
   converterEmXML(): string;
}

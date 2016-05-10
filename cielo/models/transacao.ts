import {IDadosPedido} from "./dadosPedido";
import {IFormaPagamento} from "./formaPagamento";

export enum EnumStatusTransacao {
  TRANSACAO_CRIADA = 0,
  TRANSACAO_EM_ANDAMENTO = 1,
  TRANSACAO_AUTENTICADA = 2,
  TRANSACAO_NAO_AUTENTICADA = 3,
  TRANSACAO_AUTORIZADA = 4,
  TRANSACAO_NAO_AUTORIZADA = 5,
  TRANSACAO_CAPTURADA = 6,
  TRANSACAO_CANCELADA = 9,
  TRANSACAO_EM_AUTENTICACAO = 10,
  TRANSACAO_EM_CANCELAMENTO = 12
}

export interface ITransacao {
  /**
  * Identificador da transação.
  */
  tid: string;
  /**
  * Dados do pedido.
  */
  dadosPedido: IDadosPedido;
  /**
  * Forma de pagamento.
  */
  formaPagamento: IFormaPagamento;
  /**
  * Código de status da transação.
  */
  Status: EnumStatusTransacao;
  /**
  * URL de redirecionamento à Cielo.
  */
  urlAutenticacao: string;
}

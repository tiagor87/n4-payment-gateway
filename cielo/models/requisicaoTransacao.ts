import {IDadosEC} from "./dadosEC";
import {IDadosPortador} from "./dadosPortador";
import {IDadosPedido} from "./dadosPedido";
import {IFormaPagamento} from "./formaPagamento";

export interface IRequisicaoTransacao {
  /**
  * Dados do estabelecimento comercial.
  */
  dadosEC: IDadosEC;
  /**
  * Dados do cartão.
  */
  dadosPortador: IDadosPortador;
  /**
  * Dados do pedido.
  */
  dadosPedido: IDadosPedido;
  /**
  * Forma de pagamento.
  */
  formaPagamento: IFormaPagamento;
  /**
  * URL da página de retorno. É para essa página que a Cielo vai direcionar o browser ao fim da autenticação ou da autorização. Não é obrigatório apenas para autorização direta, porém o campo dever ser inserido como null.
  */
  urlRetorno: string;
  /**
  * Define se a transação será automaticamente capturada caso seja autorizada.
  */
  capturar: boolean;
  /**
  * Campo livre disponível para o Estabelecimento.
  */
  campoLivre?: string;
  /**
  * Seis primeiros números do cartão.
  */
  bin?: number;
  /**
  * Define se a transação atual deve gerar um token associado ao cartão.
  */
  gerarToken?: boolean;
  /**
  * String contendo um bloco XML, encapsulado pelo CDATA, contendo as informações necessárias para realizar a consulta ao serviço.
  */
  "avs#avs"?: string;
  /**
  * Converte o modelo em XML.
  */
  converterEmXML(): string;
}

export interface IFormaPagamento {
  /**
  * Nome da bandeira (minúsculo): “visa”, “mastercard”, “diners”, “discover”, “elo”, “amex”, “jcb”, “aura”
  */
  bandeira: string;
  /**
  * Código do produto: 1 – Crédito à Vista, 2 – Parcelado loja, A – Débito.
  */
  produto: string;
  /**
  * Número de parcelas. Para crédito à vista ou débito, utilizar 1.
  */
  parcelas: number;
  /**
  * Converte o modelo em XML.
  */
   converterEmXML(): string;
}

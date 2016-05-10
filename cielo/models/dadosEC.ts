export interface IDadosEC {
  /**
  * Número de afiliação da loja com a Cielo.
  */
  numero: number;
  /**
  * Chave de acesso da loja atribuída pela Cielo.
  */
  chave: string;
  /**
  * Converte o modelo em XML.
  */
   converterEmXML(): string;
}

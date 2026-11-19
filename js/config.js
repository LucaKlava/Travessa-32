/* =====================================================================
   TRAVESSA 32 — CONFIGURAÇÕES CENTRAIS
   Altere os valores abaixo para atualizar o site inteiro. Nenhum outro
   arquivo precisa ser tocado para trocar um link.
   ===================================================================== */
window.TRAVESSA32 = {
  // Número usado para montar todos os links de WhatsApp (apenas dígitos, com DDI 55).
  telefoneWhatsapp: "5519989656363",

  // Link de agendamento via WhatsApp. Troque a mensagem pré-escrita se quiser.
  whatsapp: "https://wa.me/5519989656363?text=" +
    encodeURIComponent("Olá! Vim pelo site e gostaria de agendar um horário na Travessa 32."),

  // Página oficial de agendamento da Travessa 32 no AVEC.
  avec: "https://www.avec.app/travessa32/",

  instagram: "https://www.instagram.com/travessa32",

  // Telefone em formato legível, usado nos textos e no link tel:
  telefoneExibicao: "(19) 98965-6363",
  telefoneLink: "tel:+5519989656363",

  endereco: "R. Pres. Vargas, 905 - Vila Pavan, Americana - SP, 13465-222",

  // Mapa incorporado sem necessidade de chave de API (gerado a partir do endereço acima).
  mapaEmbedSrc: "https://maps.google.com/maps?q=" +
    encodeURIComponent("R. Pres. Vargas, 905 - Vila Pavan, Americana - SP, 13465-222") +
    "&output=embed",
  mapaDirecoesUrl: "https://maps.google.com/?q=" +
    encodeURIComponent("R. Pres. Vargas, 905 - Vila Pavan, Americana - SP, 13465-222"),

  // TODO: assim que tiver o link direto da ficha do Google (Google Maps/Meu
  // Negócio), troque por ele. Por enquanto aponta para uma busca no Google.
  googleReviewsUrl: "https://www.google.com/search?q=" +
    encodeURIComponent("Travessa 32 barbearia Americana SP avaliações")
};

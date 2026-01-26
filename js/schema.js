{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.botl2go.com/#organization",
      "name": "Botl2go",
      "url": "https://www.botl2go.com",
      "logo": "https://www.botl2go.com/img/logo.png",
      "description": "Botl2go es una marca de botellas térmicas reutilizables de aluminio, enfocada en diseño, funcionalidad y sustentabilidad.",
      "sameAs": [
        "https://www.instagram.com/botl2go",
        "https://www.facebook.com/botl2go"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.botl2go.com/#website",
      "url": "https://www.botl2go.com",
      "name": "Botl2go",
      "publisher": {
        "@id": "https://www.botl2go.com/#organization"
      }
    },
    {
      "@type": "Brand",
      "@id": "https://www.botl2go.com/#brand",
      "name": "Botl2go",
      "logo": "https://www.botl2go.com/img/logo.png"
    },
    {
      "@type": "Product",
      "@id": "https://www.botl2go.com/#product",
      "name": "Botella térmica reutilizable Botl2go",
      "description": "Botella térmica de aluminio reutilizable, diseñada para mantener bebidas frías o calientes y reducir el uso de plásticos descartables.",
      "brand": {
        "@id": "https://www.botl2go.com/#brand"
      },
      "manufacturer": {
        "@id": "https://www.botl2go.com/#organization"
      }
    }
  ]
}
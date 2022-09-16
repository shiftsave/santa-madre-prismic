const website = require("./website");

module.exports = {
  "es-mx": {
    path: "mx",
    locale: "es-mx",
    siteLanguage: "es",
    ogLang: "es_MX",
    defaultTitle: website.title,
    defaultTitleAlt: website.titleAlt,
    defaultDescription: "En español",
    producer:"Productor",
    region:"Región",
    agave_type:"Agave",
    oven_type:"Horno",
    mash:"Molienda",
    fermentation:"Fermentación",
    distillation:"Destilación",
    coming_soon: "Ventas muy pronto!",
    home: "Inicio",
    about: "Nosotros",
    cocktails: "Cocteles",
    coming_soon: "Ventas muy pronto!"
  },
  "en-us": {
    default: true,
    path: "nz",
    locale: "en-us",
    siteLanguage: "en",
    ogLang: "en_US",
    defaultTitle: website.title,
    defaultTitleAlt: website.titleAlt,
    defaultDescription: website.description,
    headline: website.headline,
    producer:"Producer",
    region:"Region",
    agave_type:"Agave Type",
    oven_type:"Oven Type",
    mash:"Mash",
    fermentation:"Fermentation",
    distillation:"Distillation",
    coming_soon: "Sales coming soon",
    home: "Home",
    about: "Our story",
    cocktails: "Cocktails",
    destilados:"Our distillates",
    coming_soon: "Sales coming soon!"
  }
};

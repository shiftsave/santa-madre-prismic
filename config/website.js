module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Matrero", // Navigation and Site Title
  titleAlt: "Santa Madre Ltd", // Title for JSONLD
  description: "Website for Santa Madre Ltd",
  headline: "Mezcales de Mexico", // Headline for schema.org JSONLD
  url: "https://matrero.mx", // Domain of your site. No trailing slash!
  logo: "/logos/logo-1024.png", // Used for SEO
  ogLanguage: "en_US", // Facebook Language

  // JSONLD / Manifest
  favicon: "src/favicon.png", // Used for manifest favicon generation
  shortName: "Santa Madre", // shortname for manifest. MUST be shorter than 12 characters
  author: "Ivan Cruz", // Author for schemaORGJSONLD
  twitter: "@esmatrero", // Twitter Username
  facebook: "esmatrero", // Facebook Site Name
  googleAnalyticsID: "UA-XXXXXX-X",

  skipNavId: "reach-skip-nav" // ID for the "Skip to content" a11y feature
};

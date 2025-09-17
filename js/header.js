// ====================================================

function getBrowserLanguage() {
  const nav = window.navigator;
  const browserLanguagePropertyKeys = [
    "language",
    "browserLanguage",
    "systemLanguage",
    "userLanguage",
  ];

  // Check for HTML 5.1 "navigator.languages"
  if (Array.isArray(nav.languages)) {
    for (const lang of nav.languages) {
      if (lang && lang.length) {
        return lang;
      }
    }
  }

  // Check for other well-known properties in browsers
  for (const key of browserLanguagePropertyKeys) {
    const lang = nav[key];
    if (lang && lang.length) {
      return lang;
    }
  }

  return null;
}

function redirectToLocalizedSite() {
  const language = getBrowserLanguage();
  const sessionStorageKey = "lang";
  const hasRedirected = sessionStorage.getItem(sessionStorageKey);

  if (hasRedirected === "Y") {
    return;
  }

  const languageMap = {
    "ja-JP": "https://example.com/ja/",
    "it-IT": "https://example.com/it/",
    "it-CH": "https://example.com/it/",
    "ko-KR": "https://example.com/ko/",
    // ... add other languages and their mappings
    "en-gb": "English (United Kingdom)",
    "en-us": "English (United States)",
  };

  const redirectUrl = languageMap[language];
  if (redirectUrl) {
    window.location.href = redirectUrl;
    sessionStorage.setItem(sessionStorageKey, "Y");
  }
}

redirectToLocalizedSite();

import { createContext, useContext, useState, useEffect } from 'react';

const CookieConsentContext = createContext();

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) throw new Error('useCookieConsent must be used within CookieConsentProvider');
  return context;
};

export const CookieConsentProvider = ({ children }) => {
  const [consent, setConsent] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookieConsent');
    if (stored) {
      setConsent(JSON.parse(stored));
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const consentData = { necessary: true, analytics: true, marketing: true, timestamp: Date.now() };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setConsent(consentData);
    setShowBanner(false);
  };

  const declineAll = () => {
    const consentData = { necessary: true, analytics: false, marketing: false, timestamp: Date.now() };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setConsent(consentData);
    setShowBanner(false);
  };

  const updatePreferences = (prefs) => {
    const consentData = { necessary: true, ...prefs, timestamp: Date.now() };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setConsent(consentData);
    setShowBanner(false);
  };

  const openSettings = () => setShowBanner(true);

  return (
    <CookieConsentContext.Provider value={{ consent, showBanner, acceptAll, declineAll, updatePreferences, openSettings }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

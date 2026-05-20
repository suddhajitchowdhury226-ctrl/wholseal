import { useState } from 'react';
import { useCookieConsent } from '../../context/CookieConsentContext';
import './CookieConsent.css';

export const CookieConsentBanner = () => {
  const { showBanner, acceptAll, declineAll, updatePreferences } = useCookieConsent();
  const [showPreferences, setShowPreferences] = useState(false);
  const [prefs, setPrefs] = useState({ targeting: true, socialMedia: true, performance: true, functional: true });
  const [expanded, setExpanded] = useState({});

  if (!showBanner) return null;

  const handleSavePreferences = () => {
    updatePreferences(prefs);
    setShowPreferences(false);
  };

  const toggleExpand = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="cookie-consent-overlay" role="dialog" aria-labelledby="cookie-title" aria-modal="true">
      <div className="cookie-consent-modal">
        {!showPreferences ? (
          <>
            <div className="cookie-content">
              <h3 id="cookie-title">Cookie Preferences</h3>
              <p>We use cookies to enhance your experience, analyze site traffic, and for marketing. By clicking "Accept All Cookies", you consent to our use of cookies. <a href="/private-policy#manage-cookies" target="_blank" rel="noopener noreferrer">More information</a></p>
            </div>
            <div className="cookie-actions">
              <button onClick={() => setShowPreferences(true)} className="btn-settings" aria-label="Cookie settings">Cookies Settings</button>
              <button onClick={declineAll} className="btn-reject" aria-label="Reject all cookies">Reject All</button>
              <button onClick={acceptAll} className="btn-accept" aria-label="Accept all cookies">Accept All Cookies</button>
            </div>
          </>
        ) : (
          <>
            <button onClick={() => setShowPreferences(false)} className="btn-close" aria-label="Close">×</button>
            <div className="cookie-content">
              <h3>Privacy Preference Center</h3>
              <p>When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer. <a href="/private-policy#manage-cookies" target="_blank" rel="noopener noreferrer">More information</a></p>
              
              <h4>Manage Consent Preferences</h4>
              
              <div className="cookie-category">
                <div className="category-header" onClick={() => toggleExpand('targeting')}>
                  <span className="expand-icon">{expanded.targeting ? '−' : '+'}</span>
                  <span className="category-title">Targeting Cookies</span>
                  <label className="toggle-switch" onClick={(e) => e.stopPropagation()}>
                    <input type="checkbox" checked={prefs.targeting} onChange={(e) => setPrefs({...prefs, targeting: e.target.checked})} />
                    <span className="slider"></span>
                  </label>
                </div>
                {expanded.targeting && (
                  <div className="category-description">
                    These cookies are set by a range of social media services that we have added to the site to enable you to share our content with your friends and networks. They are capable of tracking your browser across other sites and building up a profile of your interests. This may impact the content and messages you see on other websites you visit. If you do not allow these cookies you may not be able to use or see these sharing tools.
                  </div>
                )}
              </div>

              <div className="cookie-category">
                <div className="category-header" onClick={() => toggleExpand('socialMedia')}>
                  <span className="expand-icon">{expanded.socialMedia ? '−' : '+'}</span>
                  <span className="category-title">Social Media Cookies</span>
                  <label className="toggle-switch" onClick={(e) => e.stopPropagation()}>
                    <input type="checkbox" checked={prefs.socialMedia} onChange={(e) => setPrefs({...prefs, socialMedia: e.target.checked})} />
                    <span className="slider"></span>
                  </label>
                </div>
                {expanded.socialMedia && (
                  <div className="category-description">
                    These cookies are set by a range of social media services that we have added to the site to enable you to share our content with your friends and networks. They are capable of tracking your browser across other sites and building up a profile of your interests. This may impact the content and messages you see on other websites you visit. If you do not allow these cookies you may not be able to use or see these sharing tools.
                  </div>
                )}
              </div>

              <div className="cookie-category">
                <div className="category-header" onClick={() => toggleExpand('performance')}>
                  <span className="expand-icon">{expanded.performance ? '−' : '+'}</span>
                  <span className="category-title">Performance Cookies</span>
                  <label className="toggle-switch" onClick={(e) => e.stopPropagation()}>
                    <input type="checkbox" checked={prefs.performance} onChange={(e) => setPrefs({...prefs, performance: e.target.checked})} />
                    <span className="slider"></span>
                  </label>
                </div>
                {expanded.performance && (
                  <div className="category-description">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
                  </div>
                )}
              </div>

              <div className="cookie-category">
                <div className="category-header" onClick={() => toggleExpand('functional')}>
                  <span className="expand-icon">{expanded.functional ? '−' : '+'}</span>
                  <span className="category-title">Functional Cookies</span>
                  <label className="toggle-switch" onClick={(e) => e.stopPropagation()}>
                    <input type="checkbox" checked={prefs.functional} onChange={(e) => setPrefs({...prefs, functional: e.target.checked})} />
                    <span className="slider"></span>
                  </label>
                </div>
                {expanded.functional && (
                  <div className="category-description">
                    These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.
                  </div>
                )}
              </div>
            </div>
            <div className="cookie-actions">
              <button onClick={declineAll} className="btn-reject" aria-label="Reject all">Reject All</button>
              <button onClick={handleSavePreferences} className="btn-confirm" aria-label="Confirm choices">Confirm My Choices</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

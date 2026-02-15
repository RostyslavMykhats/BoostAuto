// Meta Pixel Event Tracking
// Замініть YOUR_PIXEL_ID на ваш реальний Pixel ID

export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
};

// Стандартні події для відстеження конверсій
export const trackViewContent = (contentName, contentCategory, value, currency = "USD") => {
  trackEvent("ViewContent", {
    content_name: contentName,
    content_category: contentCategory,
    value: value,
    currency: currency,
  });
};

export const trackLead = (contentName = "Lead Form", value = 0) => {
  trackEvent("Lead", {
    content_name: contentName,
    value: value,
    currency: "USD",
  });
};

export const trackInitiateCheckout = (value, currency = "USD") => {
  trackEvent("InitiateCheckout", {
    value: value,
    currency: currency,
  });
};

export const trackCompleteRegistration = (method = "Telegram") => {
  trackEvent("CompleteRegistration", {
    method: method,
  });
};

export const trackContact = () => {
  trackEvent("Contact");
};

// Кастомні події
export const trackButtonClick = (buttonName, buttonLocation) => {
  trackEvent("CustomButtonClick", {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

export const trackCalculatorInteraction = (carValue) => {
  trackEvent("CalculatorInteraction", {
    car_value: carValue,
  });
};

export const trackTelegramClick = (location) => {
  trackEvent("TelegramClick", {
    location: location, // "navbar", "hero", "floating_cta", "cta_section", etc.
  });
  trackLead(`Telegram Click - ${location}`);
};

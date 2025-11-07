// /config/fbpixel.js

// ✅ Initialize the Meta Pixel
export const initFacebookPixel = () => {
  if (typeof window === 'undefined') return // prevent SSR crash
  if (window.fbq) return // avoid initializing twice

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

  // 👇 Use your real Pixel ID here
  window.fbq('init', process.env.NEXT_PUBLIC_FB_PIXEL_ID)
  window.fbq('track', 'PageView') // optional first view
}

// ✅ Track standard Page Views
export const trackPageView = () => {
  if (typeof window === 'undefined' || !window.fbq) return
  window.fbq('track', 'PageView')
}

// ✅ Track custom events (like button clicks)
export const trackEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined' || !window.fbq) return
  window.fbq('trackCustom', eventName, params)
}

/* 
// 🚀 Future setup for Conversion API (Server Side)
export const sendConversionToServer = async (eventName, eventData) => {
  // Example: send to your Next.js API route that calls Meta Conversion API with token
  // await fetch('/api/meta-conversion', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ eventName, eventData })
*/
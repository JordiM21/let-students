// hooks/useGsapScrollAnim.js
import { useEffect } from 'react'

export function useGsapScrollAnim(animations = [], dependencies = []) {
  useEffect(() => {
    if (!animations.length) return

    // ✅ Dynamically import GSAP only on the client
    ;(async () => {
      const gsapModule = await import('gsap')
      const scrollTriggerModule = await import('gsap/ScrollTrigger')
      const { gsap } = gsapModule
      const { ScrollTrigger } = scrollTriggerModule

      gsap.registerPlugin(ScrollTrigger)

      // ✅ Create a GSAP context for auto cleanup
      const ctx = gsap.context(() => {
        // Helper for scroll-triggered animations
        const createScrollAnim = (target, fromVars, toVars, options = {}) => {
          if (!target) return

          gsap.fromTo(target, fromVars, {
            ...toVars,
            scrollTrigger: {
              trigger: target,
              start: options.start || '0px 85%',
              toggleActions: options.toggleActions || 'play none none reverse',
              once: options.once ?? true, // run once by default
              ...options.scrollTrigger, // allow custom overrides
            },
          })
        }

        // Apply will-change for smoother GPU performance
        animations.forEach(({ ref }) => {
          if (ref?.current) gsap.set(ref.current, { willChange: 'transform, opacity' })
        })

        // Create each animation
        animations.forEach(({ ref, from, to, options }) => {
          createScrollAnim(ref.current, from, to, options)
        })
      })

      // ✅ Cleanup GSAP context + ScrollTriggers
      return () => {
        ctx.revert()
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    })()
  }, dependencies) // Re-run only when dependencies change
}

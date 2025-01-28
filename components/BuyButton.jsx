// BuyButton.js
import React, { useEffect, useRef } from 'react'

const BuyButton = () => {
  const stripeBuyButtonRef = useRef(null)

  useEffect(() => {
    const loadBuyButton = () => {
      // Check if the script is already loaded
      if (!document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')) {
        const script = document.createElement('script')
        script.src = 'https://js.stripe.com/v3/buy-button.js'
        script.async = true
        script.onload = () => {
          const stripeBuyButton = document.createElement('stripe-buy-button')
          stripeBuyButton.setAttribute('buy-button-id', 'buy_btn_1QmM8LBjLDLVBoAyfggZbU4X')
          stripeBuyButton.setAttribute(
            'publishable-key',
            'pk_live_51NYA5oBjLDLVBoAyxLUTxwdvl60uIrTsKAeruXWEGSTwyPH7O4xASxGWXqfnSMst1B0Ba2n0nNqlyQlceCTdt9Mf00QbSeCsVd'
          )
          if (stripeBuyButtonRef.current && !stripeBuyButtonRef.current.querySelector('stripe-buy-button')) {
            stripeBuyButtonRef.current.appendChild(stripeBuyButton)
          }
        }
        document.body.appendChild(script)
      } else {
        const stripeBuyButton = document.createElement('stripe-buy-button')
        stripeBuyButton.setAttribute('buy-button-id', 'buy_btn_1PMUblBjLDLVBoAyfmnII6js')
        stripeBuyButton.setAttribute(
          'publishable-key',
          'pk_live_51NYA5oBjLDLVBoAyxLUTxwdvl60uIrTsKAeruXWEGSTwyPH7O4xASxGWXqfnSMst1B0Ba2n0nNqlyQlceCTdt9Mf00QbSeCsVd'
        )
        if (stripeBuyButtonRef.current && !stripeBuyButtonRef.current.querySelector('stripe-buy-button')) {
          stripeBuyButtonRef.current.appendChild(stripeBuyButton)
        }
      }
    }

    loadBuyButton()

    // Cleanup function to remove the script and button if necessary
    return () => {
      const script = document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')
      if (script) {
        document.body.removeChild(script)
      }
      if (stripeBuyButtonRef.current) {
        stripeBuyButtonRef.current.innerHTML = ''
      }
    }
  }, [])

  return <div ref={stripeBuyButtonRef}></div>
}

export default BuyButton

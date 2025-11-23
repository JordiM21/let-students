import BackHeader from '@/components/BackHeader'
import LoadingScreen from '@/components/LoadingScreen'
import withUserData from '@/components/WithUserData'
import React, { useState } from 'react'

const planAdmin = ({ userData, tutor }) => {
  if (!userData) {
    return <LoadingScreen />
  }
  const [loading, setLoading] = useState(true)
  const [userMatched] = useState(userData)

  // Pick the right payment method based on userData.paymentMethod
  const getPaymentOption = () => {
    switch (userMatched.payment.method) {
      case 'bnb-monthly':
        return { type: 'iframe', value: tutor.paymentMethod.bnb.monthlyQr }
      case 'bnb-biweekly':
        return { type: 'iframe', value: tutor.paymentMethod.bnb.biweeklyQr }
      case 'stripe-monthly':
        return { type: 'iframe', value: tutor.paymentMethod.stripe.monthlyQr }
      case 'stripe-biweekly':
        return { type: 'iframe', value: tutor.paymentMethod.stripe.biweeklyQr }
      case 'usd-stripe-monthly':
        return { type: 'iframe', value: tutor.paymentMethod.stripe.usdMonthly }
      default:
        return null
    }
  }

  const paymentOption = getPaymentOption()

  return (
    <>
      <BackHeader largeTitle={'Administra tu Plan'} parentTitle={'Volver'} />
      <div className="bg-[var(--bluebg)] h-full min-h-screen shadow-2xl mx-auto py-20 md:pb-0">
        <div className="w-[300px] md:w-[450px] mx-auto my-4">
          <div className="bg-[var(--blueDarkbg)] py-2 px-4 rounded-t-2xl">
            <p className="text-white">
              <span className="text-slate-400">Frecuencia:</span> {userMatched.payment.frequency}
            </p>
          </div>
          <div className="bg-[var(--blueDarkbg)] py-2 px-4">
            <p className="text-white">
              <span className="text-slate-400">Fecha:</span> {userMatched.payment.date}
            </p>
          </div>
          <div className="bg-[var(--blueDarkbg)] py-2 px-4 rounded-b-2xl">
            <p className="text-white">
              <span className="text-slate-400">Ente:</span> {userMatched.payment.platform}
            </p>
          </div>
        </div>
        <div className="relative w-[300px] md:w-[450px] h-[430px] md:h-[640px] mx-auto text-center">
          {paymentOption ? (
            paymentOption.type === 'iframe' ? (
              <>
                {loading && (
                  <div className="absolute inset-0 flex justify-center items-center bg-gray-200 animate-pulse rounded-2xl">
                    <span className="text-gray-500">Loading PDF...</span>
                  </div>
                )}
                <iframe
                  src={paymentOption.value}
                  className={`w-full h-full rounded-2xl shadow-lg ${
                    loading ? 'opacity-0' : 'opacity-100'
                  } transition-opacity duration-500`}
                  title="Payment Viewer"
                  onLoad={() => setLoading(false)}
                />
              </>
            ) : (
              <a
                href={paymentOption.value}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[var(--bluebg)] px-6 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
              >
                Go to Payment
              </a>
            )
          ) : (
            <p className="text-center text-white">No valid payment method found.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default withUserData(planAdmin)

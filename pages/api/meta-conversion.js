import crypto from 'crypto'
//THIS IS THE IMPLEMENTATION OF THE CONVERSION API (ACESS TOKEN)
//Which only works if you want to send data from back-end to meta
//for example the email or name of a user that register in a controlled form
//in the latest update we only have a embedded google form which we can't control
//so we're not using the token just for now, only the pixel tracking for buttons
//later implementation pending...

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { event_name, email, phone } = req.body

  const event = {
    event_name,
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    user_data: {
      em: email ? crypto.createHash('sha256').update(email).digest('hex') : undefined,
      ph: phone ? crypto.createHash('sha256').update(phone).digest('hex') : undefined,
    },
  }

  const response = await fetch(
    `https://graph.facebook.com/v17.0/${process.env.NEXT_PUBLIC_FB_PIXEL_ID}/events?access_token=${process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [event] }),
    }
  )


  const result = await response.json()
  res.status(200).json(result)
}

const mergeWithDefaults = (defaults, userProgress = {}) => {
  const merged = { ...userProgress }

  Object.keys(defaults).forEach((category) => {
    if (!merged[category]) {
      merged[category] = defaults[category]
    } else {
      Object.keys(defaults[category]).forEach((level) => {
        if (merged[category][level] === undefined) {
          merged[category][level] = defaults[category][level]
        }
      })
    }
  })

  return merged
}
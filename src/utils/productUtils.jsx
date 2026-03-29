export function getProductStatus(expiryDate) {
    const today = new Date()
    const expiry = new Date(expiryDate)
    const dayLeft = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24))

    if (daysLeft < 0) return 'expired'
    if (daysLeft <= 3) return 'warning'
    return 'ok'
}
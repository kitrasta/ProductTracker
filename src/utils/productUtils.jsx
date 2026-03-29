export function getProductStatus(expiryDate) {
    const today = new Date()
    const expiry = new Date(expiryDate)
    const dayLeft = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24))

    if (dayLeft < 0) return 'expired'
    if (dayLeft <= 3) return 'warning'
    return 'ok'
}
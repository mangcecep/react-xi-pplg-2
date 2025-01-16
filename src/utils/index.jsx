
const rupiahFormat = (value) => (new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
}).format(value))

export {
    rupiahFormat
}
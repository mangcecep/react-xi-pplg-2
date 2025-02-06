import axios from "axios"

const rupiahFormat = (value) => (new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
}).format(value))

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        "Accept": "Application/json"
    }
})

export {
    api,
    rupiahFormat
}
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

const Home = () => {
    const [bannerData, setBanner] = useState([])

    useEffect(() => {
        fetch('https://reverb.simulasi-minat-bakat-siswa.hitungdong.online/api/banners', {
            headers: {
                accept: 'Application/json'
            }
        }).then(async (result) => {
            const data = await result.json()
            console.log(data)
        })
    }, [])

    return (
        <>
            <Navbar />
        </>
    )
}

export default Home
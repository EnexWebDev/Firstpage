import React from 'react'
import axios from 'axios'
const Jxios = () => {
    const [Data, setData] = useState("")
    const getData = () => {
        axios.get(`${BASE_URL}`)
            .then(res => {
                console.log(res.data.products)
                setData(res.data.products)
            }).catch(err => {
                console.log(err + "Can't fetch Data")
            })
    }

    return (
        <>
            <div className='App'>
                <button onClick={getData}>Get Quote</button>
                <p>{JSON.stringify(Data, 2, null)}</p>

            </div>
        </>
    )
}

export default Jxios
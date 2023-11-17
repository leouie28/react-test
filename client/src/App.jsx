import { useEffect, useState } from 'react'
import './App.css'

import useApi from './utils/api'
import RestaurantItem from './components/RestaurantItem'
import Skeleton from './components/Skeleton'

function App() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const api = useApi()


    useEffect(() => {
        const asyncFetch = async () => {
            const data = await api.getData()
            setTimeout(() => {
                setItems(data)
                setLoading(false)
            }, 800) // <----- Fake delay
        }
        asyncFetch()
    }, [])

    const DataItems = () => {
        return (
            <>
                {Object.keys(items).map(state => (
                    <RestaurantItem 
                        key={state} 
                        state={state}
                        restaurants={items[state]}
                    />
                ))}
            </>
        )
    }

    return (
        <div className='bg-zinc-900 border-l border-cyan-500 w-fit mx-auto'>
            { loading ? <Skeleton /> : <DataItems /> }
        </div>
    )
}

export default App

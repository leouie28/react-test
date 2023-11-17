const useApi = () => {

    /**
     * Categorize restaurant
     */
    const filterRestaurant = (data) => {
        const categorized = {}
        data.forEach(element => {
            const { restaurant_name, state } = element
            if (!categorized[state]) {
                categorized[state] = []
            }
            categorized[state].push(restaurant_name)
        });
        return categorized
    }

    /**
     * Fetch api
     */
    const getData = async () => {
        try {
            const api_url = import.meta.env.VITE_API_URL
            const response = await fetch(`${api_url}/data`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            const filtered = filterRestaurant(data)
            return filtered
        }catch (error) {
            console.log(error, 'test')
        };
    }

    return {
        getData
    }
}

export default useApi
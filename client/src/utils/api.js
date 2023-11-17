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
            const response = await fetch('http://localhost:4001/data', {
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
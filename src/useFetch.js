import { useEffect, useState } from 'react';


const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(
            () => {
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw Error("Could not fetch resource.")
                        }
                        return response.json()
                    })
                    .then(data => { setData(data) })
                    .catch((e) => { setError(e.message) })
            }, 1000)
    }, [url])

    return { data, error }

}


export default useFetch;
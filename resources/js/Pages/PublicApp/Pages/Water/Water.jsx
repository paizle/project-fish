import './Water.scss'
import React from "react"

export default function Water({children, id, route, ...rest}) {

    const [results, setResults] = React.useState([])

    React.useEffect(() => {
        console.log({route})

        axios.get(route(id, ''))
            .then((result) => {
                //debugger
                setResults(result.data.limits ?? [])
            })
    }, [])


    return (
        <div className="Water">

            <ul className={`results ${results.length ? 'has-results' : null}`}>
            {true
                ? results.map((result) => {
                        return (result?.fish ? <li>{result?.fish.name}</li> : null)
                })       
                : null
            }
            </ul>
               
        </div>
    )
}
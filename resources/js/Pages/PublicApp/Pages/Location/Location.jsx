import './Location.scss'
import React from 'react'

import {
    InternalLink,
    useInternalRouting,
} from '../../Components/InternalRouter/InternalRouter';

export default function Location({ children, id, route, ...rest }) {
    const [results, setResults] = React.useState([]);

    const [filteredResults, setFilteredResults] = React.useState([]);

    const [waterName, setWaterName] = React.useState('');

    const resultsRef = React.useRef(null);

    const changeWaterName = (e) => {
        const value = e.target.value;
        setWaterName(value);
        console.log(value);
        if (value.length) {
            const newFilteredResults = results.filter((result) =>
                result.water
                    ? result.water.name
                          .toLowerCase()
                          .includes(value.trim().toLowerCase())
                    : false,
            );
            setFilteredResults(newFilteredResults);
        } else {
            setFilteredResults([]);
        }
    };

    React.useEffect(() => {
        if (resultsRef.current) {
            const size = 28;
            if (waterName && filteredResults.length === 0) {
                //resultsRef.current.style.height = size + 'px'
            } else {
                //resultsRef.current.style.height = filteredResults.length * size + 'px'
            }
        }
    }, [filteredResults, waterName]);

    React.useEffect(() => {
        console.log({ route });

        axios.get(route(id, '')).then((result) => {
            setResults(result.data.limits ?? []);
        });
    }, []);

    const internalRouting = useInternalRouting();
    React.useEffect(() => {
        internalRouting.setLoading(false);
    }, []);

    return (
        <div className="Location">
            <div className="autocomplete">
                <header>
                    <label>
                        <span>Search by Waters</span>
                        <input
                            onChange={changeWaterName}
                            placeholder='hint: Try searching "lake" or "stream"'
                        />
                    </label>
                </header>
                <ul
                    ref={resultsRef}
                    className={`results ${filteredResults.length || waterName ? 'has-results' : null}`}
                >
                    {filteredResults.length ? (
                        filteredResults.map((result) =>
                            result?.water ? (
                                <li>
                                    <InternalLink
                                        name="water"
                                        params={{ id: result.water.id }}
                                        breadCrumb={{
                                            position: 2,
                                            label: result.water.name,
                                        }}
                                    >
                                        {result.water.name}
                                    </InternalLink>
                                </li>
                            ) : null,
                        )
                    ) : waterName ? (
                        <div>(no results)</div>
                    ) : null}
                </ul>
            </div>
        </div>
    );
}

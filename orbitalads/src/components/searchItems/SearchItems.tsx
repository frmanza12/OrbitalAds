import React, {  useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useFetch from "../../hooks/useFetch";

const SearchItems = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const url = `https://swapi.dev/api/people/?search=${debouncedSearchTerm}`
    const {data, isLoading, error } = useFetch(url);

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error</p>

        return (
        <div>
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {data.length > 0 && (
                <ul>
                    {data.map((item: any) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchItems;
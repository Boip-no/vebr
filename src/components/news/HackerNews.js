import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import HackerNewsItem from "./HackerNewsItem";
import { HACKERS_URL } from "../../constants/api";

function HackerNews() {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(HACKERS_URL)
            .then((response) => response.json())
            .then((json) => setNewsList(json))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    // spining border
    if (loading) {
        return <Spinner animation="border" className="Spinner" />;
    }

    function renderNews() {
        let items = [];
        console.log(newsList);
        for (let i = 0; i < 7; i++) {
            console.log(newsList[i]);
            items.push(<HackerNewsItem newsItemId={newsList[i]} key={newsList[i]} />);
        }
        return items;
    }

    return (
        <>
            <h2>Hackers news</h2>
                <Row>{renderNews()}</Row>
        </>         
    );
}

export default HackerNews;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function HackerNewsItem({ newsItemId }) {
    const [news, setNews] = useState({});
    const [loading, setLoading] = useState(true);

    console.log("newsItemId", newsItemId);

    const url = `https://hacker-news.firebaseio.com/v0/item/${newsItemId}.json?print=pretty`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setNews(json);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    });

    if (loading) {
        return <Spinner animation="border" className="Spinner" />;
    }

    return (
        <Container>
            <Card xs={12} md={6} className="card__header">
                <div className="news--item">
                    <h5>{news.title}</h5>
                    <a href={news.url} target="_blank" rel="noopener noreferrer">
                        <Button className="btn-link">Read the full story</Button>
                    </a>
                </div>
            </Card>
        </Container>
    );
}

HackerNewsItem.propTypes = {
    newsItemId: PropTypes.string.isRequired,
};

export default HackerNewsItem;

import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Row, Container } from "react-bootstrap";
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
    //    console.log(newsList);
        for (let i = 0; i < 6; i++) {
    //        console.log(newsList[i]);
            items.push(<HackerNewsItem newsItemId={newsList[i]} key={newsList[i]} />);
        }
        return items;
    }

//     function AlertErrors() {
//         const [show, setShow] = useState(true);


//         if (show) {
//             return (
//                 <Alert variant="danger" onClose={() => setShow(false)} dismissible>
//                     <Alert.Heading>Oh snap! there is an error!</Alert.Heading>
//                     <p>I do not know how to fix it, my cpu caled brain is overheated.</p>
//                 </Alert>
//             );
//         }
//         return <Button onClick={() => setShow(true)}>Show Alert</Button>;
//     }
// render(<AlertErrors />);

    return (
        <Container>
            <h2>Hackers news</h2>
                <Row>{renderNews()}</Row>
        </Container>  

    );
}

export default HackerNews;

import styled from 'styled-components';
import { switchProp } from 'styled-tools';
import { Container } from 'react-bootstrap';

const StyledHeader = styled(Container)`
    background-image: url(/images/${switchProp("path",{
        "/" : "../../images/background-colour1db2.jpg"
    },
        "headerDark.jpg"
    )});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: ${switchProp("path", {
        "/" : "50vh",
    }, 
    "40vh"
    )};

    @media (max-width: 768px) {
        height: ${switchProp("path", {
            "/" : "100vh",
        }, 
        "50vh"
        )};
    }
`;

export default StyledHeader;
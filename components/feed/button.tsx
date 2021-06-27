import { Button } from "@chakra-ui/button";
import sty

const HeaderButton = styled(Button)`
position: relative; 
padding: 0.4rem 0.5rem; 
font-weight: normal; 

&:hover {
    color: #3B49DF; 

    &::after {
        width: 100%;
    }
}

&:focus {
    box-shadow: none; 
}

${props => props.isCurrent && css`
    font-weight: 500; 

    &::after {
        transition: width 0.2s ease; 
        position: absolute; 
        botton: 0; 
        margin: auto; 
        content: ""; 
        height: 3px; 
        width: 70%; 
        border-radius: 4px; 
        background-color: #3B49DF;
    }
`}
`;
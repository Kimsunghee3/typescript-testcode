import styled from "styled-components"

interface IBtn {
    width: string,
    height: string,
    margin?: string,
    backgroundColor: string,
    content?: string,
}

const Btn = styled.button<IBtn>`
    cursor: pointer;
    width: ${props => props.width  || "30%"};
    height: ${props => props.height || ""};
    margin: ${props => props.margin || ""};
    border-radius: 35px;
    border: none;
    box-shadow: 3.5px 3.5px 3.5px 3.5px #3a3939;
    font-size: 1.2rem;
    color: ${props => props.theme.btnTheme.btnColor };
    background-color: ${ props => props.theme.btnTheme.primaryColor };
    &:hover{
        background-color: ${ props => props.theme.btnTheme.btnHover };
    }
    transition: all 0.2s ease-out; 
`

export const Button:React.FC<IBtn> = ({ width, height, margin, backgroundColor, content }) => {
    
    return(
        <Btn 
            width={width} 
            height={height} 
            margin={margin} 
            backgroundColor={backgroundColor}
        >
            {content}
        </Btn>
    )
}

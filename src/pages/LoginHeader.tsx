import styled from "styled-components"

interface IHeader {
    width: string,
    height: string,
    backgroundColor: string,
    margin?: string
}   

const LoginHeaderWrapper = styled.div<IHeader>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    margin-left: "20px"
`


export const LoginHeader:React.FC<IHeader> = ({ width, height, backgroundColor, margin }) => {

    return(
        <LoginHeaderWrapper 
            width={width} 
            height={height} 
            backgroundColor={backgroundColor} 
            margin={margin}
        />
    )
}
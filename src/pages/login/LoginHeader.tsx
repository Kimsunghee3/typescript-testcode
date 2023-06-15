import styled from "styled-components"
import a from "../../image/logo192.png"
import b from "../../image/logo192.png"
import c from "../../image/logo192.png"
import { useState } from "react"
interface IFrame {
    width: string,
    height: string
}

interface IColor extends IFrame {
    backgroundColor: string,
}

interface ITerm extends IColor {
    margin: string
}

const LoginHeaderWrapper = styled.div<ITerm>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor || props.theme.LoginHeaderTheme.backgroundColor};
    margin: 50px;
`

const StepperWrap = styled.ol`
    width: 620px;
    height: 100px;
    background-color: #323232;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
`

const BackBtn = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f2f2f2;
    background-color: transparent;
    border: none;
    font-size: 2.5rem;
    font-weight: 800;
`

const Step = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 100px;
    text-align: center;
    color: #f2f2f2;
`

const A = styled.li`
    width: 75px;
    height: 1px;
    background-color: #f2f2f2;
`
const Button = styled.button`
    width: 75px;
    height: 10px;
`

const I = styled.img`
    width: 50px;
    height: 50px;
`

const items = [
    {id:a,content:"니모니 입력"}, 
    {id:b, content:"정보입력"},
    {id:c, content:"가져오기 완료"},
]

const items2 = [ 
    {id:a, content:"니모니 입력"}, 
    {id:b, content:"정보입력"},
    {id:c, content:"가져오기 완료"},
    {id:c, content:"완료"},
]

const success = [
    {id:a, content:"완료"},
]


export const LoginHeader:React.FC<ITerm> = ({ width, height, backgroundColor, margin }) => {
    const Items = (lockpage: boolean): JSX.Element[] => {
        const a = items.map((v,index) => { 
            return(
                <>
                    <I src={v.id} />
                    <Step>{v.content}</Step>
                    {index===2 ? <></>:<A/> }
                </>
            )
        })
        
        const b = items2.map(v => {
            return(
                <>
                    <Step>{v.content}</Step><A/>
                </>
            )
        }
    )

    return ( lockpage === true ? a : b )};
    const[state, setState] =useState(true)
    const a = () => {
        console.log(state)
        setState(!state)
    }
    return(
        <>
        <LoginHeaderWrapper 
            width={width} 
            height={height} 
            backgroundColor={backgroundColor} 
            margin={margin}
        >
            <StepperWrap className="stepperWrap">
                <BackBtn> ← </BackBtn>
                {state && Items(state)}
            </StepperWrap>
        </LoginHeaderWrapper>

        <Button onClick={()=>a()}>131</Button> 
        </>
    )
}



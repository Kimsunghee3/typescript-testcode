import { ThemeProvider } from "styled-components";

type Props = {
    children: JSX.Element,
}

export const GlobalTheme = ({children}: Props ) => {
    const Theme = {
        btnTheme:{
            primaryColor: "#555555",
            secondaryColor: "#4C6F45",
            btnHover: "#799D71",
            btnColor: "#f2f2f2",
        },

        LoginHeaderTheme:{
            backgroundColor: "#534343"
        }
    }
    return(
            <ThemeProvider theme={Theme}>
                {children}
            </ThemeProvider>
    )
}
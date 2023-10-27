import RootLayout from "../app/RootLayout";
import "../app/globals.css";

const MyApp = ({ Component, pageProps }) => {

    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    )
};

export default MyApp;
import { useEffect } from 'react';
import { initGA, logPageView } from '@/app/util/analytics';
import RootLayout from "../app/RootLayout";
import "../app/globals.css";

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
          initGA();
          window.GA_INITIALIZED = true;
        }
        logPageView();
      }, []);

    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    )
};

export default MyApp;
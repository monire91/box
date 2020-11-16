import '../styles/index.css'
import '../styles/fontIcons.css'
import {CookiesProvider} from 'react-cookie';
import {UserProvider} from "../contexts/user";

function MyApp({Component, pageProps}) {
    return (
        <UserProvider>
            <CookiesProvider>
                <Component {...pageProps} />
            </CookiesProvider>
        </UserProvider>
    )

}

export default MyApp

import '../styles/index.css'
import '../styles/fontIcons.css'
import {CookiesProvider} from 'react-cookie';
import {UserProvider} from "../contexts/user";
import {ResourcesProvider} from "../contexts/resources";

function MyApp({Component, pageProps}) {
    return (
        <UserProvider>
            <ResourcesProvider>
                <CookiesProvider>
                    <Component {...pageProps} />
                </CookiesProvider>
            </ResourcesProvider>
        </UserProvider>
    )

}

export default MyApp

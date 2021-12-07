import Header from '../comps/Header'
import Footer from '../comps/Footer'


export default function Layout ({ children }) {
    return( 
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )}
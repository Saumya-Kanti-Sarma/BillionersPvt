import './home.css'
import Nav from '../components/Nav/nav.jsx';
function Home() {
    return (
        <>
            <Nav></Nav>
            <div className="main">
                <div className="TEXTAREA-main">
                    <div className="HASHtag">
                        #growExponentially
                    </div>
                    <h1>We are Billioners Pvt.</h1>
                    <p className='olddP'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia exercitationem id eligendi ratione iste neque accusamus, adipisci, sapiente atque voluptatibus impedit facilis architecto illum hic ipsam doloremque perspiciatis facere placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eum!.... <br />
                    </p>
                    <p className='newP'>
                        <strong>Click the below Button to check our Fobes list!</strong>
                    </p>
                    <div className="submit-TEXTAREA-main">
                        <button id='btnin_TEXTMAIN'>
                            Check Fobes list <img src="/rightarrow.svg" />
                        </button>
                    </div>
                </div>
                <div className="IMGarea">
                    <img src="https://media.istockphoto.com/id/1478126816/photo/mans-hands-using-laptop.jpg?s=612x612&w=0&k=20&c=CPjYRk2zIdmCMYX1kICYicJoDwNxDuIVh1pNCyeCp6E=" />
                </div>
            </div >
        </>
    )
}
export default Home;
import image from './play.png'
import './Home.css'

const Home = () =>{
    return <div className='site-home'>
    <section className='home-headings'>
    <h3 className='home-heading'>Get our latest Album</h3>
    <img src={image} className='home-img' alt=''></img>
    </section>
    <ul className='tours'>
        <h3>Tours</h3>
        <li>JUL 16 &nbsp;&nbsp; DETROID MI &nbsp;&nbsp;&nbsp; DIE ENERY MUSIC THEATRE
        &nbsp;&nbsp;&nbsp;&nbsp;<button> BUY TICKETS</button>
        </li><hr></hr>
        <li>JUL 19 &nbsp;&nbsp; TORONTO,ON &nbsp;&nbsp;&nbsp; BUDWEISER STAGE
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button> BUY TICKETS</button>
        </li><hr></hr>
        <li>JUL 22 &nbsp;&nbsp; BRISTOW, VA &nbsp;&nbsp;&nbsp; JIGGY LUBE LIVE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button> BUY TICKETS</button>
        </li><hr></hr>
        <li>JUL 29 &nbsp;&nbsp; PHEONIX, AZ &nbsp;&nbsp;&nbsp; AK-CHIN PAVILION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button> BUY TICKETS</button>
        </li><hr></hr>
        <li>AUG 2 &nbsp;&nbsp; LAS VEGAS NV &nbsp;&nbsp;&nbsp; T-MOBILE ARENA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button> BUY TICKETS</button>
        </li><hr></hr>
        <li>AUG 7 &nbsp;&nbsp; CONCORD, CA &nbsp;&nbsp;&nbsp; CONCORD PAVILION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;<button> BUY TICKETS</button>
        </li>
    </ul>
    <footer className='footer'>
    <h1> The Generics</h1>
    </footer>
    </div>
}

export default Home;
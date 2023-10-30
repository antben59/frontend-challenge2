import '../App.css';
import Header from './Header';
import articleFirstImg from '../assets/images/image-web-3-mobile.jpg';

function App() {
  return (
    <div className='app'>
      <Header></Header>

      <main>
        <article>
          <img src={articleFirstImg} alt="Geometric forms article" />
          <h1>The Bright Future of Web 3.0?</h1>
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promine ?</p>
          <button>Read more</button>
        </article>
        <aside>
          <h2 className='orange'>New</h2>
          <article>
            <h3 className='off-white'>Hydrogen VS Electric Cars</h3>
            <p className='off-white'>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <article>
            <h3 className='off-white'>The Downsides of AI Artistry</h3>
            <p className='off-white'>What are the possible adverse effects of on-demand AI image generation?</p>
          </article>
          <article>
            <h3 className='off-white'>Is VC Funding Drying Up?</h3>
            <p className='off-white'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </article>
        </aside>
        <section>
          <article>
            <img />
            <h2>01</h2>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </article>
          <article>
            <img />
            <h2>02</h2>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </article>
          <article>
            <img />
            <h2>03</h2>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;

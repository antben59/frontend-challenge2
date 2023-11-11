import '../App.css';
import Header from './Header';
import articleFirstImg from '../assets/images/image-web-3-mobile.jpg';
import gridArticle1 from '../assets/images/image-retro-pcs.jpg';
import gridArticle2 from '../assets/images/image-top-laptops.jpg';
import gridArticle3 from '../assets/images/image-gaming-growth.jpg';

function App() {
  return (
    <div className='app'>
      <Header></Header>

      <main>
        <article className='article-1'>
          <img src={articleFirstImg} alt="Geometric forms article" width="100%" />
          <h1 className='dark-blue '>The Bright Future of Web 3.0?</h1>
          <p className='dark-grayish-blue '>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promine ?</p>
          <button className='button'>Read more</button>
        </article>

        <aside>
          <h2 className='orange'>New</h2>
          <article className='article-2'>
            <h3 className='off-white'>Hydrogen VS Electric Cars</h3>
            <p className='grayish-blue'>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <hr />
          <article className='article-2'>
            <h3 className='off-white'>The Downsides of AI Artistry</h3>
            <p className='grayish-blue'>What are the possible adverse effects of on-demand AI image generation?</p>
          </article>
          <hr />
          <article className='article-2'>
            <h3 className='off-white'>Is VC Funding Drying Up?</h3>
            <p className='grayish-blue'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </article>
        </aside>

        <section>
          <article className='article-3'>
            <img src={gridArticle1} />
            <h2>01</h2>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </article>

          <article className='article-3'>
            <img src={gridArticle2} />
            <h2>02</h2>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </article>

          <article className='article-3'>
            <img src={gridArticle3} />
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

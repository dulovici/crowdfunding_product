import "./App.scss";
import mastercraftLogo from './images/logo-mastercraft.svg';
import bookmarkLogo from './images/icon-bookmark.svg';

import Header from "./Components/Header/Header";
import Numbers from "./Components/Numbers/Numbers";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="bookmark-wr">
          <div className='img-wr'>
            <img src={mastercraftLogo} alt='logo' />
          </div>
          <div className='text-wr'>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          </div>
          <div className='buttons-wr'>
            <div className='back'>Back this project</div>
            <div className='bookmark'>
              <img src={bookmarkLogo} alt='bookmark'/>
              <p>Bookmark</p>
            </div>
          </div>
        </div>

        <Numbers />

        <div className='content-wr'>
          <article>
            <h3>About this project.</h3>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
          </article>

          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

      </main>
    </div>
  );
}

export default App;

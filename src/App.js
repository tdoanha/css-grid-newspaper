import "./App.css";

function App() {
  return (
    <div className="grid__container">
      <header className="grid__item grid__header-container">
        <div className="grid__item header__quote">
          "All the News That's Fit to Print"
        </div>
        <h2 className="grid__item header">The New York Times</h2>
        <div className="grid__item header__edition-container">
          <div className="header__edition">City Edition</div>
          <p className="header__edition-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            ratione molestias sed dolor.
          </p>
        </div>
      </header>
      <div className="grid__item date__container">
        New York, Monday, July 21, 1969
      </div>
      <h1 className="grid__item title">
        MAN WALKS ON MOON
        <hr />
      </h1>
      <h2 className="grid__item subtitle">
        ASTRONAUTS LAND ON A PLAIN AFTER STEERING PAST CRATER
      </h2>
      <div className="grid__item img-1__container">
        <img
          src="images/neil_armstrong.jpg"
          alt="Neil Armstrong in spacesuit"
          className="grid__item img-1"
        />
        <p className="grid__item img-1__caption">Neil A. Armstrong</p>
      </div>
      <div className="grid__item img-2__container">
        <img
          src="images/Edwin_Buzz_Aldrin.jpg"
          alt="Edwin Aldrin in spacesuit"
          className="grid__item img-2"
        />
        <p className="grid__item img-2__caption">Edwin E. Aldrin Jr.</p>
      </div>
      <div className="img-3__container">
        <img src="images/NASA.jpg" alt="NASA" className="grid__item img-3" />
        <p className="grid__item img-3__caption">NASA</p>
      </div>
      <div className="grid__item column-1">
        <h3 className="column-1__header">
          Voice From Moon: 'Eagle Has Landed'
        </h3>
        <p className="column-1__content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure rerum
          aspernatur est, totam vel explicabo optio! Nisi aliquid quaerat
          possimus officia quasi molestiae inventore voluptatum, illum dicta
          ipsum perferendis cumque?
        </p>
        <p className="column-1__content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure rerum
          aspernatur est, totam vel explicabo optio! Nisi aliquid quaerat
          possimus officia quasi molestiae inventore voluptatum, illum dicta
          ipsum perferendis cumque?
        </p>
        <div className="grid__item bordered-column">
          <h4 className="bordered-column__header">VOYAGE TO THE MOON</h4>
          <p className="bordered-column__content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            ipsam aliquam quas quos sint laboriosam voluptatum molestias saepe!
            Eius repudiandae obcaecati ratione nam ea suscipit natus libero,
            harum accusantium debitis.
          </p>
          <p className="bordered-column__content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            ipsam aliquam quas quos sint laboriosam voluptatum molestias saepe!
          </p>
        </div>
      </div>
      <div className="grid__item column-2">
        <h3 className="column-2__header">
          Voice From Moon: 'Eagle Has Landed'
        </h3>
        <p className="column-2__content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure rerum
          aspernatur est, totam vel explicabo optio! Nisi aliquid quaerat
          possimus officia quasi molestiae inventore voluptatum, illum dicta
          ipsum perferendis cumque?
        </p>
        <p className="column-2__content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure rerum
          aspernatur est, totam vel explicabo optio! Nisi aliquid quaerat
          possimus officia quasi molestiae inventore voluptatum, illum dicta
          ipsum perferendis cumque?
        </p>
        <p className="column-2__content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure rerum
          aspernatur est, totam vel explicabo optio! Nisi aliquid quaerat
          possimus officia quasi molestiae inventore voluptatum, illum dicta
          ipsum perferendis cumque?
        </p>
        <p className="column-2__content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure rerum
          aspernatur est, totam vel explicabo optio! Nisi aliquid quaerat
          possimus officia quasi molestiae inventore voluptatum, illum dicta
          ipsum perferendis cumque?
        </p>
      </div>
    </div>
  );
}

export default App;

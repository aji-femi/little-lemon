import menu from "./assets/a.jpg";
import worktime from "./assets/c.jpg";
import tablebook from "./assets/b.jpg";

function Content() {
  return (
    <main>
      <section>
        <article className="bgimage">
          <h1>30% Off This Weekend</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            eius eum. Porro suscipit optio ratione, totam quod excepturi
            veritatis quaerat voluptate nostrum reiciendis delectus autem, ex
            explicabo inventore eos id.
          </p>
        </article>
      </section>
      <section>
        <article className="card">
          <h2>Our New Menu</h2>
          <img src={menu} alt="menu" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            nihil illum tempora est qui reiciendis laudantium, adipisci facere
            similique necessitatibus nisi sunt totam saepe provident, explicabo
            natus ipsam molestias laboriosam?
          </p>
          <a href="#">See our new menu</a>
        </article>
        <article className="card">
          <h2>Book a Table</h2>
          <img src={tablebook} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            alias quasi soluta ducimus dolore. Quibusdam tempore perspiciatis ex
            optio eaque. Architecto inventore tenetur ex a sint nulla aut
            adipisci necessitatibus!
          </p>
          <a href="#">Book your table now</a>
        </article>
        <article className="card">
          <h2>Opening Hours</h2>
          <img src={worktime} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            alias quasi soluta ducimus dolore. Quibusdam tempore perspiciatis ex
            optio eaque.
          </p>
          <p>
            Mon-Fri:10am to 10pm <br />
            Sat-Sun:10am to 2pm
          </p>
        </article>
      </section>
    </main>
  );
}
export default Content;

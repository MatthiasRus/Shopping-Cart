import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home">
        <section className="home-content">
            <p>Here is the home page you will go from here to the shopping page</p>
        </section>
        <Link to={'contents'} className="shop-link">Shop Now</Link>
    </div>
  )
}

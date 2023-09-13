import { Link } from "react-router-dom"


const Public = () => {
    const content = (
        <section >
            <header>
                <h1>Welcome to authorization unit</h1>
            </header>
            <main>
                <p>Men fallout in Squad one right now</p>
                <address>
                    <p>Upper iretutu junction behind close up</p>
                </address>
                <footer>
                    {/* <Link to={'/employee'}>Employees</Link> <br />
                    <Link to={'/user'}>Users</Link>  <br />
                    <Link to={'/admin'}>Admin</Link>  <br />
                    <Link to={'/editor'}>Editor</Link>  <br /> */}
                    <Link to={'/login'}>Login brah</Link>  <br />
                </footer>
            </main>
        </section>
    );

  return content
}

export default Public

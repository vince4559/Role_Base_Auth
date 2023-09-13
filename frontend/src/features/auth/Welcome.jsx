import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectCurrentUser } from "./authSlice"


const Welcome = () => {
    const user = useSelector(selectCurrentUser);
    const welcome = user? `Welcome ${user}!` : 'Welcome';

    const content = (
        <section>
            <h1>{welcome}</h1>
            <p>
                    <Link to={'/employee'}>Employees</Link> <br />
                    <Link to={'/user'}>Users</Link>  <br />
                    <Link to={'/admin'}>Admin</Link>  <br />
                    <Link to={'/editor'}>Editor</Link>  <br />
            </p>
        </section>
    )
  return content;
}

export default Welcome

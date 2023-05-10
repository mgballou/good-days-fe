import { Link } from 'react-router-dom'

function Timeline(props){

    return (
        <section>
            <p> Timeline view</p>
            <Link to="/timeline/create">
            <button>Add a Day</button>
            </Link>
        </section>
    )

}

export default Timeline
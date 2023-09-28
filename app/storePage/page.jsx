import {Card, CardBody, CardHeader} from 'react-bootstrap'
import './storeStyles.css';

export default function StorePageUI() {
    return (
        <section className='outsideBackground'> 
            <Card>
                <CardHeader style={{height: "4rem", fontSize: "x-large"}}>All Pets</CardHeader>
                <CardBody>
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </CardBody>
            </Card>
        </section>
    )
}

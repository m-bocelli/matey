import {Card, CardBody, CardHeader} from 'react-bootstrap';
import './storeStyles.css';

export default function StorePageUI() {
    return (
        <div className='backgroundArea'> 
            <div className='card shopCard'>
                <div className='card card-header shopCardHeader'>All Pets {">>"} Mammals</div>
                <div className='card card-body shopCard'>
                    <div className='card itemCard'>
                        <div className='card card-body itemCard'>
                            <h5 className="card-title shopCardText">Dog $25</h5>
                            <p className="card-text mb-2 text-mute">What the dog doing?</p>
                            <a href="#" className="card-link btn btn-dark shopCardButton">Buy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

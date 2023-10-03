import { Card, Col, Row } from 'react-bootstrap';
import { COSMETICS } from '../constants/cosmetics';
import StoreItem from '../components/StoreItem/StoreItem';
import styles from './page.module.css';

export default function StorePageUI() {
    return (
        <Col className={styles.container}>
            <Row>
                <h1>Marketplace</h1>
            </Row>
            <Row>
                <Card>
                    {COSMETICS.map((item) => {
                        return (
                            <StoreItem
                                key={item.id}
                                nanme={item.name}
                                desc={item.desc}
                                price={item.price}
                                img={item.img}
                            ></StoreItem>
                        );
                    })}
                </Card>
            </Row>
        </Col>
    );
}

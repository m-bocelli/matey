'use client';
import { Card, Col, Row } from 'react-bootstrap';
import { SEACREATURES } from '../constants/seacreatures';
import StoreItem from '../components/StoreItem/StoreItem';
import styles from './page.module.css';
import Button from '../components/Button/Button';
import { useState } from 'react';

export default function StorePageUI() {
    const [selected, setSelected] = useState([]);
    const [shop, setShop] = useState(SEACREATURES);
    const [total, setTotal] = useState(0);

    function select(_id) {
        const selectedItem = shop.find((item) => item.id === _id);
        const selectedCopy = [...selected];
        selectedCopy.splice(selected.length, 0, selectedItem);

        if (selected.includes(selectedItem)) {
            console.log('dup');
        } else {
            setSelected(selectedCopy);
            updateTotal(selectedCopy);
        }
    }

    function updateTotal(items) {
        const sum = items.reduce((sum, item) => sum + item.price, 0);
        setTotal(sum);
    }

    function dummyBuy() {
        const newSelected = [];
        setSelected(newSelected);
        updateTotal(newSelected);
    }

    return (
        <Col className={styles.container}>
            <Row className={styles.row}>
                <h1>Marketplace</h1>
            </Row>
            <Row className={styles.row}>
                <div className={styles.cart_bar}>
                    <h2>🛒</h2>
                    <p>Total: {total}</p>
                    <Button onClick={dummyBuy}>BUY</Button>
                </div>
                <div className={styles.section}>
                    {selected.map((item) => {
                        return (
                            <StoreItem
                                key={item.id}
                                name={item.name}
                                desc={item.desc}
                                price={item.price}
                                img={item.img}
                                isSelected={true}
                            ></StoreItem>
                        );
                    })}
                </div>
            </Row>
            <Row className={styles.row}>
                <h2>Shop:</h2>
                <div className={styles.section}>
                    {shop.map((item) => {
                        return (
                            <StoreItem
                                key={item.id}
                                name={item.name}
                                desc={item.desc}
                                price={item.price}
                                img={item.img}
                                onClick={() => select(item.id)}
                                isSelected={false}
                            ></StoreItem>
                        );
                    })}
                </div>
            </Row>
        </Col>
    );
}

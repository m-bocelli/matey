'use client';
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/StoreItem/StoreItem';
import styles from './page.module.css';
import Button from '../components/Button/Button';
import { useEffect, useState } from 'react';
import { UserAuth } from '../js/AuthContext';

export default function StorePage() {
    const { userData, bearerToken } = UserAuth();
    const [selected, setSelected] = useState([]);
    const [shop, setShop] = useState([]);
    const [total, setTotal] = useState(0);
    const [points, setPoints] = useState(0);

    useEffect(() => {
        fetch('https://matey.onrender.com/fish')
        .then((res) => res.json())
        .then((data) => setShop(Object.keys(data).map((key) => data[key])));
    }, []);

    useEffect(() => {
        if (userData) {
            setPoints(userData.points);
        }
    }, [userData]);

    const select = (_id) => {
        if (userData.fish && userData.fish.includes(_id)) {
            alert('You already own this fish.');
        } else {
            const selectedItem = shop.find((item) => item.id === _id);
            const selectedCopy = [...selected];
            selectedCopy.splice(selected.length, 0, selectedItem);

            if (selected.includes(selectedItem)) {
                console.log('duplicate');
            } else {
                setSelected(selectedCopy);
                updateTotal(selectedCopy);
            }
        }
    }

    const unselect = (_id) => {
        const itemIdx = selected.findIndex((item) => item.id === _id);
        const selectedCopy = [...selected];
        selectedCopy.splice(itemIdx, 1);
        setSelected(selectedCopy);
        updateTotal(selectedCopy);
    }

    const updateTotal = (items) => {
        const sum = items.reduce((sum, item) => sum + item.price, 0);
        setTotal(sum);
    }

    const purchase = async () => {
        if (points >= total) {
            try {
                const res = await fetch(`https://matey.onrender.com/users/${userData.id}/fish`, {
                    method: 'POST',
                    headers: {"Content-Type": "application/json", Authorization : `Bearer ${bearerToken}`},
                    body: JSON.stringify(selected)
                });
                if (res.status === 200) {
                    fetch(`https://matey.onrender.com/users/${userData.id}/points?lost=${total}`, {
                        method: 'POST',
                        headers: {Authorization : `Bearer ${bearerToken}`}
                    })
                    .then(() => {
                        window.location.href = '/storePage';
                    });
                }
            } catch (err) {
                alert('Failed to purchase fish.');
                console.error('Failed to purchase fish', err);
            }
        } else {
            alert('Not enough points.');
        }
    }

    return (
        <div>
            <Col className={styles.container}>
                <Row className={styles.row}>
                </Row>
                <Row className={styles.row}>
                    <div className={styles.cart_bar}>
                        <p>Points: {points}</p>
                        <p>Total: {total}</p>
                        <Button onClick={purchase}>BUY</Button>
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
                                    onClick={() => unselect(item.id)}
                                ></StoreItem>
                            );
                        })}
                    </div>
                </Row>
                <Row className={styles.row}>
                    <h2 className={styles.shop}>Shop 🛒</h2>
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
        </div>
    );
}

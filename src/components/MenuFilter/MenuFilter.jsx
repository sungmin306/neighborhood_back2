import React from 'react';
import styles from './MenuFilter.module.css'

const MenuFilter = (props) => {
        return (
                <div className={styles.container}>
                        <button className={styles.dessert}>커피 / 디저트</button>
                        <button className={styles.fastfood}>패스트푸드</button>
                        <button className={styles.lunchBox}>도시락</button>
                        <button className={styles.asian}>아시안</button>
                        <button className={styles.bunsik}>분식</button>
                        <button className={styles.korean}>한식</button>
                        <button className={styles.chinese}>중식</button>
                        <button className={styles.japanese}>일식</button>
                        <button className={styles.western}>양식</button>
                </div>
        );       
}

export default MenuFilter;
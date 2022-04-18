import React, { useContext, useEffect, useState } from 'react';
import { Container } from '../../components/Container/Container';
import { CatalogItem } from './components/CatalogItem/CatalogItem';
import { CatalogSort } from './components/CatalogSort/CatalogSort';
import styles from './CatalogPage.module.scss';
import { AppContext } from '../../context';
import { ESort } from '../../context/reducer';

export const CatalogPage = () => {
  const { state: { data: originalData, sort } } = useContext(AppContext)
  const [sortData, setSortData] = useState([...originalData]);

  useEffect(() => {
    switch (sort) {
      case ESort.desc:
        setSortData([ ...sortData.sort((a, b) => a.price - b.price)])
        break;
      case ESort.asc:
        setSortData([ ...sortData.sort((a, b) => b.price - a.price)])
        break;
      default:
        setSortData([ ...originalData])
        break;
    }
  }, [sort])


  return (
    <div>
      <Container>
        <div className={styles.catalogSortRow}>
          <CatalogSort />
        </div>
        <section className={styles.catalog}>
          {
           sortData.map(item => (
              <CatalogItem key={item.id} data={item} />
            ))
          }
        </section>
      </Container>
    </div>
  )
}
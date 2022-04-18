import React, { ChangeEvent, useContext } from 'react';
import { AppContext } from '../../../../context';
import { EAction, ESort } from '../../../../context/reducer';
import styles from './CatalogSort.module.scss'

const SORT_OPTIONS = [
  {
    code: ESort.default,
    title: 'Порядок: по умолчанию'
  },
  {
    code: ESort.asc,
    title: 'Порядок: сперва дороже'
  },
  {
    code: ESort.desc,
    title: 'Порядок: сперва дешевле'
  }
];


export const CatalogSort = () => {
  const { state: { sort }, dispatch } = useContext(AppContext)

  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: EAction.setSort,
      sort: event.target.value as ESort
    })
  }

  return (
    <div>
      <select className={styles.select} value={sort} onChange={handleChangeSelect}>
        {
          SORT_OPTIONS.map(({ code, title }) => <option key={code} value={code}>{title}</option>)
        }
      </select>
    </div>
  )
}
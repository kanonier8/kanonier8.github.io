import React, { ChangeEvent, FormEvent, Fragment, useContext, useEffect, useState } from 'react';
import { Button } from '../../../../components/Button/Button';
import { AppContext } from '../../../../context';
import { formatPrice } from '../../../../utils';
import styles from './CartForm.module.scss';

interface IFormState {
  name: string,
  phone: string,
  address: string
}

const initialFormState: IFormState = {
  name: '',
  phone: '',
  address: ''
}

export const CartForm = () => {
  const { state: { cart } } = useContext(AppContext);
  const [formState, setFormState] = useState<IFormState>(initialFormState);
  const [totalSum, setTotalSum] = useState<number>(0); 
  const [submitComplete, setSubmitComplete] = useState<boolean>(false);
  const [disableOrderButton, setDisableOrderButton] = useState<boolean>(true);
  
  useEffect(() => {
    const isDisabled = !Object.values(formState).filter(field => field.length > 0).length;
    setDisableOrderButton(isDisabled);
  }, [formState])

  useEffect(() => {
    const sum = cart.reduce((sum, product) => {
      sum += product.price * product.count
      return sum;
    }, 0);
    setTotalSum(sum);
  }, [cart]);

  const handleChangeField = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value});
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitComplete(true);
  };



  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {
        submitComplete ?
          <div className={styles.formComplete}>
            Ваш заказ успешно оформлен!
          </div>
        : 
          <Fragment>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Оформление заказа</h3>
              </div>
              <div className={styles.formBody}>
                <div className={styles.formRow}>
                  <input className={styles.formInputText} type="text" name="name" onChange={handleChangeField} value={formState.name} placeholder="Имя Фамилия" />
                </div>
                <div className={styles.formRow}>
                  <input className={styles.formInputText} type="tel" name="phone" onChange={handleChangeField} value={formState.phone} placeholder="Телефон" />
                </div>
                <div className={styles.formRow}>
                <input className={styles.formInputText} type="text"  name="address" onChange={handleChangeField} value={formState.address} placeholder="Адрес доставки" />
                </div>
              </div>
              <div className={styles.formFooter}>
                <div className={styles.formTotalSum}>Итого: {formatPrice(totalSum)}</div>
                <Button type="submit" disabled={disableOrderButton} style={{ width: 'calc(100% - 50px) ' }}>Оформить заказ</Button>
              </div>
          </Fragment>
      }
      
    </form>
  )
}
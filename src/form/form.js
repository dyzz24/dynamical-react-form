import React from 'react';
import './form.css';
import FormItems from './form-items/form-items';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formArray: [
        {
          name: 'email',
          formType: 'email',
          title: 'Введите email адрес',
          placeholder: 'email',
          validator: {
            pattern: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
          },
          validatorMessage: 'Поле формата lalala@mail.ru'
        },
        {
          name: 'login',
          formType: 'text',
          title: 'Введите логин',
          placeholder: 'Логин',
          validator: { pattern: /^[A-Za-z\d]+$/, maxLength: 10 },
          validatorMessage: 'Англ. буквы, цифры, максимум 10 символов'
        },
        {
          name: 'password',
          formType: 'text',
          title: 'Пароль',
          placeholder: 'Пароль',
          validator: { minLength: 8, required: true },
          validatorMessage: 'Обязательное поле'
        },
        {
          name: 'number',
          formType: 'number',
          title: 'Номер',
          placeholder: 'Номер',
          validator: { pattern: /^[\d]+$/, maxLength: 15 },
          validatorMessage: 'Только числа, максимум 15 знаков',
          setStyle: {'height': '40px', 'width': '240px', 'font-size': '18px'}
        }
      ],
      formName: 'Настраиваемая форма',
      formResult: []
    };
  }

  getFormResult = childData => {
    this.setState(state => ({
      formResult: [...childData]
    }));
  };

  clearResult = () => {
    this.setState(state => ({
      formResult: []
    }));
  };

  render() {
    const result = this.state.formResult.map(formElem => (
      <li key={formElem.name}>
        <p>{`Имя поля: ${formElem.name}`}</p>
        <p>{`Текст: ${formElem.value}`}</p>
      </li>
    ));

    return (
      <React.Fragment>
        <FormItems
          formArray={this.state.formArray}
          formName={this.state.formName}
          parentCallback={this.getFormResult}
          clear={this.clearResult}
        ></FormItems>
        {result.length > 0 ? (
          <div className="formResult">
            <ul>{result}</ul>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

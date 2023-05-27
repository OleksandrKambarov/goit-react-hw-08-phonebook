import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setStatusModal } from 'redux/modalSlice';

import { Button, Form, Label } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleName = e => {
    setName(e.currentTarget.value);
  };
  const handleNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setName('');
    setNumber('');
    dispatch(setStatusModal(false));
  };

  return (
    <>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Label htmlFor="name">
          <p>Name:</p>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleName}
            required
          />
        </Label>
        <br />
        <Label htmlFor="number">
          <p>Number:</p>
          <input
            type="tel"
            id="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={number}
            onChange={handleNumber}
            required
          />
        </Label>
        <br />
        <Button type="submit">Add Contact</Button>
      </Form>
    </>
  );
};
export default ContactForm;

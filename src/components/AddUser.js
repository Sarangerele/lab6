import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
      email,
      phone,

    }
    addUser(newUser);
    history.push("/");
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Шинэ ажилтан</Label>
        <Input type="text" value={name} onChange={e => setName(e.target.value)} name="name" placeholder="Нэр оруулах" required></Input>
        <Input type="text" value={email} onChange={e => setEmail(e.target.value)} name="email" placeholder="Имэйл хаяг оруулах" required></Input>
        <Input type="text" value={phone} onChange={e => setPhone(e.target.value)} name="phone" placeholder="утас оруулах" required></Input>
      </FormGroup>
      <Button type="submit">Нэмэх</Button>
      <Link to="/" className="btn btn-danger ml-2">Буцах</Link>
    </Form>
  )
}

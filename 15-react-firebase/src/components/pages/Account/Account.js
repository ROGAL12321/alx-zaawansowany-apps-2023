import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../../services/firebase';
import Button from "../../atoms/Button/Button";
import InputField from "../../sections/InputField/InputField";
import Main from "../../templates/Main/Main";

import styles from './Account.module.css'

const Account = () => {
  const [nameInput, setNameInput] = useState('');
  const [photoInput, setPhotoInput] = useState('')
  const [photoInputName, setPhotoInputName] = useState('')
  const navigate = useNavigate();

  const handleNameChange = event => {
    setNameInput(event.target.value)
  }

  const handlePhotoChange = event => {
    setPhotoInput(event.target.files[0])
    setPhotoInputName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    updateProfile(photoInput, photoInputName, nameInput)
      .then(() => navigate('/dashboard'))
  }

  return (
    <Main>
      <form className={styles.container} onSubmit={handleSubmit}>
        <InputField
          label="My name"
          value={nameInput}
          handleChange={handleNameChange}
        />

        <InputField
          label="my photo"
          type="file"
          value={photoInputName}
          handleChange={handlePhotoChange}
        />
        <Button type="submit" text="Zapisz"/>
      </form>
    </Main>
  )
}

export default Account;
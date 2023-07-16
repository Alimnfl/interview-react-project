import React, { useState } from 'react';

function FormValidation() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = async (event) => {
    event.preventDefault();

    if (!email) {
      setEmailError('Email harus diisi');
    } else if (!isValidEmail(email)) {
      setEmailError('Email tidak valid');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password harus diisi');
    } else if (password.length < 8) {
      setPasswordError('Password harus memiliki setidaknya 8 karakter');
    } else {
      setPasswordError('');
    }

    try {
      const response = await fetch('https://next-backend-example.vercel.app/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer AowhcxMxFzwjrUV7nHpBcahKasozheYUmL6izefZds6ibz1XlmY6TsOWRBeOXqJY',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'OPTION,POST,GET',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        console.log('Autentikasi sukses');
      } else {
        console.log('Failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isValidEmail = (email) => {
    // Implementasi validasi email sesuai kebutuhan Anda
    // Contoh sederhana menggunakan regular expression
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  return (
    <div className=" flex items-center w-full h-screen justify-center drop-shadow-md ">
      <div className="bg-white gap-4 flex flex-col border justify-start rounded-3xl w-[508px] h-[415px] text-black px-[40px] py-[32px]">
        <div>
          <h1 className="font-bold text-[28px] py-4">Masuk</h1>
        </div>

        <div>
          <p className="text-xs font-normal mb-6">Masukkan alamat email / nomor telepon dan kata sandi yang telah anda daftarkan.</p>
          <form onSubmit={validateForm}>
            <div className="rounded-[36px] w-[428px] h-[52px] border mb-4 flex items-center px-5 py-4">
              <label htmlFor="email"></label>
              <img src="/src/img/person.svg" alt="" className="w-[24px] h-[24px]" />
              <input type="email" className="text-base font-normal w-full bg-to-r drop-shadow-none to-transparent" value={email} onChange={(e) => setEmail(e.target.value)} id="email" required />
              {emailError && <span className="error-message">{emailError}</span>}
            </div>
            <div className="rounded-[36px] w-[428px] h-[52px] border mb-6 flex items-center px-5 py-4">
              <label htmlFor="password"></label>
              <img src="/src/img/lock.svg" alt="" className="w-[24px] h-[24px]" />
              <input type="password" className="text-base font-normal w-full bg-to-r drop-shadow-none to-transparent" id="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required />
              {passwordError && <span className="error-message">{passwordError}</span>}
            </div>
            <button type="submit" className="w-full bg-orange-500 text-base font-bold py-4 px-16 rounded-[100px] text-white">
              Masuk Sekarang
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormValidation;

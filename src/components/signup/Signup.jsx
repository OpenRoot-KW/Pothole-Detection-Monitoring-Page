import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-toastify';

export function SignUp({ open, onClose }){
  const initialFormState = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    auth: '',
    phoneNumber: ''
  };
  
  const [form, setForm] = useState(initialFormState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (open) {
      setForm(initialFormState);
      setShowPassword(false);
      setShowConfirmPassword(false);
    }
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSubmit = async () => {
    if (form.password !== form.confirmPassword) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await axios.post('/users', {
        email: form.email,
        password: form.password,
        name: form.name,
        auth: form.auth,
        phoneNumber: form.phoneNumber,
      });
      toast.success("회원가입 성공!");
      onClose(); // 회원가입 성공 후 모달 창 닫기
    } catch (error) {
      console.error('회원가입 실패:', error);
      toast.error("회원가입 실패. 다시 시도해주세요.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>회원가입</DialogTitle>
      <DialogContent>
        <TextField
          name="email"
          label="이메일"
          type="string"
          fullWidth
          margin="dense"
          onChange={handleChange}
          value={form.email}
        />
        <TextField
          name="password"
          label="비밀번호"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          margin="dense"
          onChange={handleChange}
          value={form.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="confirmPassword"
          label="비밀번호 확인"
          type={showConfirmPassword ? 'text' : 'password'}
          fullWidth
          margin="dense"
          onChange={handleChange}
          value={form.confirmPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleShowConfirmPassword} edge="end">
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="name"
          label="이름"
          fullWidth
          margin="dense"
          onChange={handleChange}
          value={form.name}
        />
        <TextField
        name="auth"
        label="이메일 인증 코드"
        fullWidth
        margin="dense"
        onChange={handleChange}
        value={form.auth}
        />
        <TextField
        name="phoneNumber"
        label="전화번호"
        fullWidth
        margin="dense"
        onChange={handleChange}
        value={form.phoneNumber}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button onClick={handleSubmit} color="primary">회원가입</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUp;

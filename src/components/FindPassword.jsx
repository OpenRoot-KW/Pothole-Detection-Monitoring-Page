import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-toastify';

export function FindPassword({ open, onClose }) {
  const initialFormState = {
    email: '',
    name: '',
    auth: '',
    newPassword: '',
    confirmPassword: ''
  };

  const [form, setForm] = useState(initialFormState);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isAuthValid, setIsAuthValid] = useState(false);

  useEffect(() => {
    if (open) {
      setForm(initialFormState);
      setShowNewPassword(false);
      setShowConfirmPassword(false);
      setIsAuthValid(false);
    }
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword((prev) => !prev);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleAuthCheck = async () => {
      // 인증 코드 확인을 위한 API 호출
      
  };

  const handleSubmit = async () => {
    if (!isAuthValid) {
      toast.error('먼저 인증 코드를 확인해야 합니다.');
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      toast.error('비밀번호가 일치하지 않습니다.');
      return;
    }
    // 새로운 비밀번호 입력을 위한 API 호출
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>비밀번호 찾기</DialogTitle>
      <DialogContent>
        <TextField
          name="email"
          label="이메일"
          type="email"
          fullWidth
          margin="dense"
          onChange={handleChange}
          value={form.email}
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
          label="인증 코드"
          fullWidth
          margin="dense"
          onChange={handleChange}
          value={form.auth}
        />
        <Button onClick={handleAuthCheck} color="primary">
          인증 확인
        </Button>

        {isAuthValid && (
          <>
            <TextField
              name="newPassword"
              label="새 비밀번호"
              type={showNewPassword ? 'text' : 'password'}
              fullWidth
              margin="dense"
              onChange={handleChange}
              value={form.newPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleShowNewPassword} edge="end">
                      {showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="confirmPassword"
              label="새 비밀번호 확인"
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
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button onClick={handleSubmit} color="primary">
          비밀번호 변경
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FindPassword;
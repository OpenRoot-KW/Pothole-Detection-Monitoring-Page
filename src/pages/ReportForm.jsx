import React, { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

function FormPage({ onSubmit }) {
  const [formData, setFormData] = useState({
    location: '',
    details: '',
    file: null,
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPreview(null);
      return;
    }

    if (file.type.indexOf('image') === -1) {
      toast.error('이미지 파일만 업로드 가능합니다.');
      e.target.value = null;
      setPreview(null);
      return;
    }

    setFormData((prev) => ({ ...prev, file }));

    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      setPreview(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.file === null) {
      toast.error('파일을 첨부해주세요.');
      return;
    }

    const { presignedUrl, fileUrl } = await axios
      .get('/presigned-report-url')
      .then((res) => res.data);

    await fetch(presignedUrl, {
      method: 'PUT',
      body: formData.file,
    });

    await axios.post('/managements/reports', {
      location: formData.location,
      content: formData.details,
      imageUrl: fileUrl,
    });

    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div>
      <h2>신청서 작성</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <strong>위치:</strong>
          <input
            type="text"
            name="location"
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '16px',
            }}
            value={formData.location}
            onChange={handleChange}
            required
          />
          <br />
        </label>
        <br />
        <label>
          <strong>불편내용:</strong>
          <textarea
            name="details"
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '16px',
              height: '300px',
              resize: 'none',
            }}
            value={formData.details}
            onChange={handleChange}
            required
          />
          <br />
        </label>
        <label>
          <strong>첨부파일</strong>&nbsp;&nbsp;
          <input type="file" name="file" onChange={handleFileChange} />
        </label>
        {preview && (
          <>
            <strong>미리보기:</strong>
            <img
              src={preview}
              alt="미리보기"
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
          </>
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button variant="contained" type="submit">
            신고하기
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormPage;

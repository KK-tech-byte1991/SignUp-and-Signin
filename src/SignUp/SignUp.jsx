import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box, { BoxProps } from '@mui/material/Box';
import PropTypes from 'prop-types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import validator from 'validator';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#101010' : '#fff',
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        // border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function SignUp() {
  const [value, setValue] = React.useState(null);
  const required = (value) => {
    if (!value.toString().trim().length) {
      // We can return string or jsx as the 'error' prop for the validated Component
      return 'require';
    }
  };
  const email = (value) => {
    if (!validator.isEmail(value)) {
      alert`${value} is not a valid email.`;
    }
  };
  return (
    <div
      style={{
        width: '80%',
        margin: 'auto',
        padding: '50px',
        border: 'solid',
        borderRadius: '10px',
      }}
    >
      <h4>Sign Up</h4>
      <Box
        sx={{
          display: 'grid',
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <Item>
          <TextField
            style={{ width: '100%' }}
            id="first-name"
            label="First Name"
            variant="standard"
          />
        </Item>
        <Item>
          <TextField
            style={{ width: '100%' }}
            id="last-name"
            label="Last Name"
            variant="standard"
          />
        </Item>
        <Item style={{ textAlign: 'center' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              style={{ width: '100%' }}
              variant="standard"
              label="Date Of Birth"
              value={value}
              margin="none"
              maxDate={new Date()}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Item>
        <Item>
          <TextField
            style={{ width: '100%' }}
            id="email"
            label="Email"
            variant="standard"
            type="email"
            validations={[required, email]}
          />
        </Item>
        <Item>
          <TextField
            style={{ width: '100%' }}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </Item>
        <Item>
          <TextField
            style={{ width: '100%' }}
            variant="standard"
            id="outlined-number"
            label="Phone Number"
            type="number"
          />
        </Item>
      </Box>

      <Button
        style={{ marginLeft: '$calc(100% - 80px)', width: '100px' }}
        variant="contained"
      >
        Sign Up
      </Button>
    </div>
  );
}

import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

//regular expration
let patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let patternNumber = /^\d{5,11}$/;
function showAlert() {
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Your action was successful!",
    confirmButtonText: "OK",
  });
}
function Profile() {
  const [form, setForm] = useState({
    fristName: "",
    lastName: "",
    email: "",
    number: "",
    address1: "",
    address2: "",
  });
  //FormControl
  const [age, setAge] = useState("User");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function datasubmit(ele) {
    showAlert();
    console.log(form);
    setForm({
      fristName: "",
      lastName: "",
      email: "",
      number: "",
      address1: "",
      address2: "",
    });
  }
  return (
    <Box
      onSubmit={handleSubmit(datasubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography
          sx={{
            color: "#0288d1",
            fontSize: "25px",
            fontWeight: "900",
          }}
        >
          CREATE USER
        </Typography>
        <Typography sx={{ fontSize: "16px" }}>
          Create a New User Profile
        </Typography>
      </div>

      <div style={{ display: "flex", flexDirection: "row", columnGap: "30px" }}>
        <TextField
          label="Frist Name"
          variant="filled"
          sx={{ flex: 1 }}
          error={errors.fristname}
          helperText={errors.fristname ? "This field is requied." : null}
          {...register("fristname", { required: true, maxLength: 20 })}
          value={form.fristName}
          onChange={(e) => setForm({ ...form, fristName: e.target.value })}
        />
        <TextField
          label="Last Name"
          variant="filled"
          sx={{ flex: 1 }}
          error={errors.lastname}
          helperText={errors.lastname ? "This field is requied." : null}
          {...register("lastname", { required: true, maxLength: 20 })}
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
      </div>
      <TextField
        label="Email"
        variant="filled"
        error={errors.email}
        helperText={errors.email ? "enter your email" : null}
        {...register("email", {
          required: true,
          pattern: patternEmail,
        })}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <TextField
        label="Contact Number"
        variant="filled"
        error={errors.number}
        helperText={errors.number ? "Length Number (5 to 11)" : null}
        {...register("number", {
          required: true,
          maxLength: 20,
          pattern: patternNumber,
        })}
        value={form.number}
        onChange={(e) => setForm({ ...form, number: e.target.value })}
      />
      <TextField
        label="Adress1"
        variant="filled"
        value={form.address1}
        onChange={(e) => setForm({ ...form, address1: e.target.value })}
      />
      <TextField
        label="Adress2"
        variant="filled"
        value={form.address2}
        onChange={(e) => setForm({ ...form, address2: e.target.value })}
      />

      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Role</InputLabel>
        <Select value={age} onChange={handleChange}>
          <MenuItem value={"User"}>User</MenuItem>
          <MenuItem value={"Admin"}>Admin</MenuItem>
          <MenuItem value={"Manger"}>Manger</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ width: "250px", padding: "15px" }}
          variant="contained"
        >
          Create New User
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;

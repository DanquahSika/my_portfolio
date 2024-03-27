import {
  Alert,
  Box,
  Collapse,
  Container,
  IconButton,
  MenuItem,
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

export default function Addblog() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("New Blog Added Successfully!");

  const newBlog = async (event) => {
    const baseUrl = import.meta.env.VITE_API_URL;
    // Set loading to true
    setLoading(true);
    // Prevent default form submit behavior
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    // Post form data to the backend

    try {
      const response = await fetch(`${baseUrl}/blogs`, {
        method: "POST",
        body: formData,
      });
      if (response.status !== 201) {
        setMessage("Failed to add Blog!");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    // Update message based on response status'

    // Open collapsible Alert
    setOpen(true);
    // Set loading to false
    setLoading(false);
  };
  return (
    <>
      <Container sx={{ my: "2rem" }} maxWidth="sm">
        <h1>Add A New Blog</h1>
        <form onSubmit={newBlog}>
          <TextField
            sx={{ mb: "2rem" }}
            fullWidth
            name="title"
            label="Blog Title"
          />
          <TextField
            sx={{ mb: "2rem" }}
            fullWidth
            name="blogcontent"
            label="Blog Content"
            multiline
            rows={4}
          />
          <TextField
            sx={{ mb: "2rem" }}
            InputLabelProps={{
              shrink: true,
            }}
            type="file"
            fullWidth
            name="image"
            label="Blog Image"
          />
          <TextField
            sx={{ mb: "2rem" }}
            fullWidth
            type="date"
            name="date"
            label="Blog date"
          />
          <Box textAlign="center">
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <Close fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                {message}
              </Alert>
            </Collapse>

            <LoadingButton
              sx={{ width: "50%" }}
              loading={loading}
              type="submit"
              size="large"
              variant="contained"
            >
              Add New Blog
            </LoadingButton>
          </Box>
        </form>
      </Container>
    </>
  );
}

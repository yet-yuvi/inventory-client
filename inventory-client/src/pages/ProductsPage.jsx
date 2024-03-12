import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "../ui";

export const ProductsPage = () => {
  const navigate = useNavigate();
  const routeToProductForm = () => navigate("/product-form");

  return (
    <Stack>
      <Box justifyContent="flex-end" px={2} py={2}>
        <Link to="/product-form">
          <Button 
          variant="contained" 
          size="small">
            Add Product
          </Button>
        </Link>
      </Box>

      <Box justifyContent="flex-end" px={2} py={2}>
        <Button variant="contained" size="small" onClick={routeToProductForm}>
          Add Product
        </Button>
      </Box>
      <Outlet />
    </Stack>
  );
};
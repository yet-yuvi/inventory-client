import React from "react";

import { Box, Table } from "../ui";

import { useProducts } from "../hooks";
import { ProductActions } from "../components";

export const InventoryPage = () => {
  const { isLoading, products } = useProducts();

  const getFormattedRows = () => {
    return products.map((product, index) => ({
      id: product._id,
      ID: index + 1,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      createdAt: new Date(product.createdAt),
    }));
  };

  return (
    <Box px={8} py={4}>
      <Table
        autoHeight
        loading={isLoading}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        columns={[
          { field: "ID" },
          { field: "name", headerName: "Product Name", width: 300 },
          { field: "description", headerName: "Description", width: 300 },
          {
            align: "center",
            field: "createdAt",
            headerName: "Added On",
            headerAlign: "center",
            width: 200,
            type: "dateTime",
          },
          {
            align: "right",
            field: "price",
            headerName: "Price (TK)",
            headerAlign: "right",
            type: "number",
            width: 180,
          },
          {
            align: "center",
            field: "quantity",
            headerName: "Quantity",
            headerAlign: "center",
            type: "number",
          },
          {
            align: "center",
            field: "action",
            headerName: "Actions",
            headerAlign: "center",
            flex: 1,
            // width: "300",
            renderCell: (rowData) => (
              <ProductActions productRowData={rowData} />
            ),
          },
        ]}
        rows={getFormattedRows()}
        slots={{ noRowsOverlay: () => <h1>No Data found!!</h1> }}
        pageSizeOptions={[5, 10, 25]}
        sx={{ "--DataGrid-overlayHeight": "300px" }}
      />
    </Box>
  );
};

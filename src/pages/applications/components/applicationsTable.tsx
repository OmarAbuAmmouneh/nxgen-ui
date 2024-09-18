import { Box } from "@mui/material";
import { ButtonComponent, Table } from "src/components";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { SearchApplicationsResponse } from "src/types/applications";
import UpdateApplicationStatusModal from "./updateApplicationStatusModal";
import { useSelector } from "react-redux";
import { getUser } from "src/state";

type IProps = {
  data?: Array<SearchApplicationsResponse>;
  isLoading: boolean | undefined;
};

const initialState: {
  show: boolean;
  info?: { status: string; id: number };
} = {
  show: false,
  info: { status: '', id: 0 },
};
const ApplicationsTable = ({ data, isLoading }: IProps) => {
  const [modal, setModal] = useState(initialState);
  const user = useSelector(getUser);
  const isUser = user.role == "user";

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Id" ?? "",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      minWidth: 100,
      flex: 1,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        return <Box>{params.row.id}</Box>;
      },
    },
    {
      field: "userEmail",
      headerName: "Email" ?? "",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      minWidth: 100,
      flex: 1,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        return <Box>{params.row.userEmail}</Box>;
      },
    },
    {
      field: "status",
      headerName: "Status" ?? "",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      minWidth: 100,
      flex: 1,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        return <Box>{params.row.status}</Box>;
      },
    },
    {
      field: "jobTitle",
      headerName: "Job Title" ?? "",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      minWidth: 100,
      flex: 1,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        return <Box>{params.row.jobTitle}</Box>;
      },
    },
    {
      field: "Actions",
      headerName: "Actions" ?? "",
      sortable: false,  
      hide: isUser,
      width: 220,
      renderCell: (params) => {
        return (
          <>
            <ButtonComponent
              isLoading={isLoading}
              customStyle={{ width: "100%" }}
              title={"Update Status"}
              type={"primary"}
              onClick={() => {
                setModal({show: true, info: {id: params.row.id, status: params.row.status}})
              }}
              disabled={false}
            />
          </>
        );
      },
    },
  ];
  return (
    <Box>
      {modal.show && 
        <UpdateApplicationStatusModal
          onClose={() => setModal(initialState)}
          values={modal.info!}
        />
      }
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        width={"100%"}
        columnGap={2}
        paddingBottom={"10px"}
      ></Box>
      <Table
        rows={data ?? []} // No need to slice the data since all elements are available
        rowCount={data?.length ?? 0} // Set the rowCount to the total number of rows in the data array
        columns={columns}
        isLoading={isLoading}
        autoHeight
        customHeader
        paginationMode="client" // Still client-side pagination if you want to paginate on the frontend
        pageSize={50} // You can control how many rows are shown per page
        onPageSizeChange={(pageSize: number) => {
          //   setQueryModel({
          //     ...queryModel,
          //     limit: pageSize, // Update limit only
          //   });
        }}
        onPageChange={(page: number) => {
          // No need for offset anymore; just handle page changes
        }}
      />
    </Box>
  );
};
export default ApplicationsTable;

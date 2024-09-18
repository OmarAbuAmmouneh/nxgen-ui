import { Box } from "@mui/material";
import { ButtonComponent, Table } from "src/components";
import { GridColDef } from "@mui/x-data-grid";
import Button from "components/button";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { SearchJobsResponse } from "src/types/jobs";
import {
  useUpdateJobMutation,
  useCreateJobMutation,
  useDeleteJobMutation,
  useCreateApplicationMutation,
} from "src/data/jobs";
import CreateJobModal from "./createJobModal";
import UpdateJobModal from "./updateJobModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { getUser } from "src/state";

type IProps = {
  data?: Array<SearchJobsResponse>;
  isLoading: boolean | undefined;
};

type modalNames = "NONE" | "Create" | "Update";
const initialState: {
  type: modalNames;
  info?: { title: string; description: number; location: string; id: number };
} = {
  type: "NONE",
  info: { title: "", description: 0, location: "", id: 0 },
};
const JobsTable = ({ data, isLoading }: IProps) => {
  const [modal, setModal] = useState(initialState);
  const [createJob, createJobResponse] = useCreateJobMutation();
  const [updateJob, updateJobResponse] = useUpdateJobMutation();
  const [deleteJob, deleteJobResponse] = useDeleteJobMutation();
  const [createApplication, createApplicationResponse] =
    useCreateApplicationMutation();
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
      field: "title",
      headerName: "Title" ?? "",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      minWidth: 100,
      flex: 1,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        return <Box>{params.row.title}</Box>;
      },
    },
    {
      field: "description",
      headerName: "Description" ?? "",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      minWidth: 100,
      flex: 1,
      align: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => {
        return <Box>{params.row.description}</Box>;
      },
    },
    {
      field: "Actions",
      headerName: "Actions" ?? "",
      sortable: false,
      width: 220,
      renderCell: (params) => {
        return (
          <>
            {!isUser && (
              <>
                <EditIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setModal({ type: "Update", info: params.row });
                  }}
                />
                <DeleteIcon
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => {
                    deleteJob(params.row.id);
                  }}
                />
              </>
            )}
            {isUser && (
              <ButtonComponent
                isLoading={createApplicationResponse.isLoading}
                customStyle={{ width: "100%" }}
                title={"Apply"}
                type={"primary"}
                onClick={async () => {
                  await createApplication({
                    jobId: params.row.id,
                    userId: user.id!,
                    resume: "",
                  });
                }}
                disabled={createApplicationResponse.isLoading}
              />
            )}
          </>
        );
      },
    },
  ];
  return (
    <Box>
      {modal.type === "Create" && (
        <CreateJobModal
          isLoading={createJobResponse.isLoading}
          onCreate={async (values) => {
            const res = await createJob(values!);
            if ("data" in res) {
              setModal(initialState);
            }
          }}
          onClose={() => setModal(initialState)}
        />
      )}
      {modal.type === "Update" && (
        <UpdateJobModal
          isLoading={updateJobResponse.isLoading}
          values={modal?.info! as any}
          onUpdate={async (values) => {
            const res = await updateJob(values!);
            if ("data" in res) {
              setModal(initialState);
            }
          }}
          onClose={() => {
            setModal(initialState);
          }}
        />
      )}

      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        width={"100%"}
        columnGap={2}
        paddingBottom={"10px"}
      >
        {!isUser && (
          <Button
            title={"Create"}
            customStyle={{ width: "200px" }}
            onClick={() => setModal({ type: "Create" })}
            type={"primary"}
          />
        )}
      </Box>
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
export default JobsTable;

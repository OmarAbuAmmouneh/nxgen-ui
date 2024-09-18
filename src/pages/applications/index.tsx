import {Grid} from "@mui/material";
import { useSearchApplicationsQuery } from "src/data/jobs";
import ApplicationsTable from "./components/applicationsTable";
import { getUser } from "src/state";
import { useSelector } from "react-redux";

const Applications = () => {
    const user = useSelector(getUser);
    const isUser = user.role == "user";
    const {data, isFetching} = useSearchApplicationsQuery({userId: isUser ? user.id : undefined})
    return (
        <Grid item container xs={12} direction='column' gap='1.5rem'>
            <Grid item marginBottom={"5rem"}>
                <ApplicationsTable
                    data={data}
                    isLoading={isFetching}
                />
            </Grid>
        </Grid>
    )
}
export default Applications;

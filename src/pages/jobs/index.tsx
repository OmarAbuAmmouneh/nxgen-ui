import {Grid} from "@mui/material";
import { useSearchJobsQuery } from "src/data/jobs";
import JobsTable from "./components/jobsTable";
import { useSelector } from "react-redux";
import { getUser } from "src/state";

const Jobs = () => {
    const user = useSelector(getUser);
    const isUser = user.role == "user";
  
    const {data, isFetching} = useSearchJobsQuery({userId: isUser ? user.id : undefined, isUser: false})
    return (
        <Grid item container xs={12} direction='column' gap='1.5rem'>
            <Grid item marginBottom={"5rem"}>
                <JobsTable
                    data={data}
                    isLoading={isFetching}
                />
            </Grid>
        </Grid>
    )
}
export default Jobs;
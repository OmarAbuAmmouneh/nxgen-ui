import {Modal, SingleSelect, TextInput} from "src/components";
import {useState} from "react";
import {Box} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import { useUpdateApplicationStatusMutation } from "src/data/jobs";
import { UpdateApplicationBody } from "src/types/applications";

type IProps = {
    onClose: () => void
    values: UpdateApplicationBody
}
const SignupSchema = Yup.object().shape({
    status: Yup.string().required('this field is required'),
})


const UpdateApplicationStatusModal = ({onClose, values}: IProps) => {
    const [updateStatus, updateStatusResponse] = useUpdateApplicationStatusMutation()
    const [validateOnChange, setValidateOnChange] = useState(false)
    const formik = useFormik({
        initialValues: {
            id: values?.id,
            status: values?.status
        },
        validateOnBlur: false,
        validateOnChange: validateOnChange,
        validationSchema: SignupSchema,
        onSubmit: async (values) => {
            const res = await updateStatus(values)
            if ('data' in res) {
                onClose()
            }
        }
    })
    return <Modal isLoading={updateStatusResponse.isLoading} onClose={() => onClose()} isOpen={true}
                  primaryButtonTitle={'Update'}
                  title={'Update Status'}
                  secondaryButtonTitle={'Cancel'}
                  secondaryButtonAction={() => onClose()}
                  primaryButtonAction={() => {
                      formik.handleSubmit();
                      setValidateOnChange(true)
                  }}>
        <Box width={"100%"} display={'flex'} alignItems={'center'} flexDirection={'column'}>
            <Box width={'350px'} display={'flex'}>
                <SingleSelect
                    name={'role'}
                    label={'Status'}
                    error={formik.errors.status}
                    value={formik.values?.status}
                    onChange={async (inputValue: any) => {
                        await formik.setFieldValue("status", inputValue)
                    }}
                    items={RolesSelection}
                />
            </Box>
        </Box>
    </Modal>

}
export default UpdateApplicationStatusModal

export const RolesSelection = [
    {
        label: "Under Review",
        value: "under review",
    },
    {
        label: "Rejected",
        value: "rejected",
    },
    {
        label: "Accepted",
        value: "accepted",
    },
]
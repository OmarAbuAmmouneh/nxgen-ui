import {Modal, SingleSelect, TextInput} from "src/components";
import {useState} from "react";
import {Box} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useTranslation} from "react-i18next";
import { UpdateJobBody } from "src/types/jobs";

type IProps = {
    onClose: () => void
    onUpdate: (values: UpdateJobBody | undefined) => void
    values: UpdateJobBody
    isLoading: boolean;
}
const SignupSchema = Yup.object().shape({
    title: Yup.string().required('this field is required'),
    description: Yup.string().required('this field is required'),
    location: Yup.string().required('this field is required'),
})


const UpdateJobModal = ({onClose, onUpdate, values, isLoading}: IProps) => {
    const {t} = useTranslation('translation')
    const [validateOnChange, setValidateOnChange] = useState(false)
    const formik = useFormik({
        initialValues: {
            title: values?.title,
            id: values?.id,
            description: values?.description,
            location: values?.location
        },
        validateOnBlur: false,
        validateOnChange: validateOnChange,
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            onUpdate(values)
        }
    })
    return <Modal isLoading={isLoading} onClose={() => onClose()} isOpen={true}
                  primaryButtonTitle={'Update'}
                  title={'Update Job'}
                  secondaryButtonTitle={'Cancel'}
                  secondaryButtonAction={() => onClose()}
                  primaryButtonAction={() => {
                      formik.handleSubmit();
                      setValidateOnChange(true)
                  }}>
        <Box width={"100%"} display={'flex'} alignItems={'center'} flexDirection={'column'}>
            <Box width={'350px'} display={'flex'}>
                <TextInput className={'width:100px'} label={'Title'} value={formik?.values.title ?? ''}
                           onChange={(e) => formik.setFieldValue('title', e)}
                           error={formik.errors.title}
                />
            </Box>
            <Box width={'350px'} display={'flex'}>
                <TextInput className={'width:100px'} label={'Description'} value={formik?.values.description ?? ''}
                           onChange={(e) => formik.setFieldValue('description', e)}
                           error={formik.errors.description}/>
            </Box>
            <Box width={'350px'} display={'flex'}>
                <TextInput password={true} className={'width:100px'} label={'Location'}
                           value={formik?.values.location ?? ''}
                           onChange={(e) => formik.setFieldValue('location', e)}
                           error={formik.errors.location}/>
            </Box>
        </Box>
    </Modal>

}
export default UpdateJobModal

import {Modal, TextInput} from "src/components";
import {useState} from "react";
import {Box} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useTranslation} from "react-i18next";
import { CreateJobBody } from "src/types/jobs";

type Props = {
    onClose: () => void
    onCreate: (values: CreateJobBody | undefined) => void
    isLoading: boolean;
}
const SignupSchema = Yup.object().shape({
    title: Yup.string().required('this field is required'),
    description: Yup.string().required('this field is required'),
    location: Yup.string().required('this field is required'),
})


const CreateJobModal = (props: Props) => {
    const {t} = useTranslation('translation')
    const [validateOnChange, setValidateOnChange] = useState(false)
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            location: '',
        },
        validateOnBlur: false,
        validateOnChange: validateOnChange,
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            props.onCreate(values)
        }
    })
    return <Modal isLoading={props.isLoading} onClose={() => props.onClose()} isOpen={true}
                  primaryButtonTitle={'Create'}
                  title={'Create'}
                  secondaryButtonTitle={'Cancel'} secondaryButtonAction={() => props.onClose()}
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
export default CreateJobModal

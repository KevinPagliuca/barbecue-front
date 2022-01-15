import * as yup from 'yup';

export const userSignInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('O e-mail é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
});

export const userSignUpFormSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  birthday: yup.date().required('A data de nascimento é obrigatória'),

  email: yup
    .string()
    .email('E-mail inválido')
    .required('O e-mail é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não conferem'),
});

export const userUpdateFormSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup
    .string()
    .email('E-mail inválido')
    .required('O e-mail é obrigatório'),
  birthday: yup.date().required('A data de nascimento é obrigatória'),
});

export const userChangePasswordFormSchema = yup.object().shape({
  password: yup.string().required('A senha é obrigatória'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não conferem'),
});

export const churrasFormSchema = yup.object().shape({
  title: yup.string().required('O título é obrigatório'),
  date: yup.string().required('A data é obrigatória'),
  hour: yup.string().required('O hora é obrigatória'),
  location: yup.string().required('O local é obrigatório'),
  description: yup.string(),
  participants: yup.array().of(
    yup.object().shape({
      name: yup.string().required('O nome é obrigatório'),
      value: yup
        .number()
        .typeError('O valor é obrigatório')
        .required('O valor é obrigatório'),
    })
  ),
});

export const addParticipantFormSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  value: yup.number().required('O valor é obrigatório'),
});

import React from 'react';
import { Container, Text, Input, Button } from './styles/Opt-form';


export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
OptForm.Text=function OptFormText({children,...restProps}){
    return <Text {...restProps} >{children}</Text>
    }
OptForm.Input=function OptFormInput({children,...restProps}){
    return <Input {...restProps} />
}
OptForm.Button=function OptFormButton({children,...restProps}){
return <Button {...restProps} >{children} <img src='/images/icons/chevron-right.png' alt='img'/></Button>
}
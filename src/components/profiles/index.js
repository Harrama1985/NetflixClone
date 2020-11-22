import React from 'react'
import {Container, Title, Picture, List, Item, Name } from './styles/profiles'

export default function Profiles({children,...restProps}) {
    return (
    <Container {...restProps}>{children}</Container>
    )
}

Profiles.Title = function ProfilesTitle({children,...restProps}) {
    return (
    <Title {...restProps}>{children}</Title>
    )
}

Profiles.Picture = function ProfilesPicture({src, ...restProps}) {
    return (
    <Picture {...restProps} src={!src ? '/images/misc/loading.gif' : `/images/users/${src}.png`}/>
    )
}

Profiles.List = function ProfilesList({children,...restProps}) {
    return (
    <List {...restProps}>{children}</List>
    )
}

Profiles.User = function ProfilesUser({children,...restProps}) {
    return (
    <Item {...restProps}>{children}</Item>
    )
}


Profiles.Name = function ProfilesName({children,...restProps}) {
    return (
    <Name {...restProps}>{children}</Name>
    )
}


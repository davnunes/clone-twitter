import React from "react";

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar /> 
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar Perfil</EditButton> */}
        <h1>Meu nome</h1>
        <h2>@meunome</h2>

        <p>
          Sou um dev júnior
        </p>

        <ul>
          <li>
            <LocationIcon />
            Ceará, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 26 de Junho de 2002
          </li>
        </ul>

        <Followage>
          <span>Seguindo <strong>40</strong></span>
          <span><strong>304 </strong> seguidores</span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export default ProfilePage;
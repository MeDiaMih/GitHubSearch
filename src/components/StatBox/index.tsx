import React, { FC } from 'react';
import {
  StatBoxContainer,
  StatBoxContent,
  StatBoxIcon,
  StatBoxInfoContainer,
  StatBoxText,
} from './styles';
import { StatBoxProps } from '../../types';
import { RepoText } from '../DetailInfoBox/styles';

const StatBox: FC<StatBoxProps> = ({ icon, value, label }) => {
  return (
    <StatBoxContainer>
      <StatBoxContent>
        <StatBoxIcon>{icon}</StatBoxIcon>
      </StatBoxContent>

      <StatBoxInfoContainer>
        <RepoText>{value}</RepoText>
        <StatBoxText>{label}</StatBoxText>
      </StatBoxInfoContainer>
    </StatBoxContainer>
  );
};

export default StatBox;

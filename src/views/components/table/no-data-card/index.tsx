import React from 'react';

import * as Style from '../style';
import { Box } from "@components/box";
import { Card } from "@components/card";
import { Typography } from "@components/typography";

interface Props {
  title?: string;
}

const fallbackTitle = 'No Data';

export const NoDataCard: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <Box sx={Style.TableEmptyLabelContainer}>
      <Card>
        <Typography variant='title' size='large'>
          {title ?? fallbackTitle}
        </Typography>
      </Card>
    </Box>
  );
};

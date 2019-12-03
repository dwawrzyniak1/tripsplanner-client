import React from 'react';
import { Flag, Header, Icon, Label } from 'semantic-ui-react';
import moment from 'moment';
import 'moment/locale/pl';

const subheaderStyles = {
  padding: '2px 0px',
};

const TripHeader = props => {
  let tagsLabels = props.tags.map((tag, key) => (
    <Label key={key} color="teal">
      {tag.value}
    </Label>
  ));

  return (
    <Header>
      <Header.Content>{props.name}</Header.Content>
      <Header.Subheader style={subheaderStyles}>
        <Flag name={props.flag} />
        {props.destination}
      </Header.Subheader>
      <Header.Subheader style={subheaderStyles}>
        <Icon name="calendar alternate outline" />
        {moment(props.startDate).format('LL')}-
        {moment(props.endDate).format('LL')}
      </Header.Subheader>
      <Header.Subheader style={subheaderStyles}>{tagsLabels}</Header.Subheader>
    </Header>
  );
};

export default TripHeader;

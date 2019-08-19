import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function EpisodeCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.ep.name}</Card.Header>
        <Card.Meta>
          <span>{props.ep.episode},</span>
          <span>Aired: {props.ep.air_date}</span>
        </Card.Meta>

        <Card.Content extra className="residents">
          <Icon name="user" />
          Characters: {props.ep.characters.length}
        </Card.Content>
      </Card.Content>
    </Card>
  );
}

import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

export default function CharacterCard(props) {
  return (
    <Card key={props.char.id}>
      <Image src={props.char.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.char.name}</Card.Header>
        <Card.Meta>
          <span>
            {props.char.species} {props.char.status}
          </span>
        </Card.Meta>
        <Card.Description>
          <p>
            <strong>Location:</strong> {props.char.location.name}
          </p>
          <p>
            <strong>Origin:</strong> {props.char.origin.name}
          </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="film" />
          Episodes: {props.char.episode.length}
        </a>
      </Card.Content>
    </Card>
  );
}

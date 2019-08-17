import React from "react";
import { Card } from "semantic-ui-react";

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.location.name}</Card.Header>
        <Card.Meta>
          <span>
            {props.location.type} {props.location.dimension}
          </span>
        </Card.Meta>

        <Card.Content extra className="residents">
          Residents: {props.location.residents.length}
        </Card.Content>
      </Card.Content>
    </Card>
  );
}

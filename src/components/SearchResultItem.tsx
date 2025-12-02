import React from "react";

type DTCard = {
  type: string;
  setup: string; 
  punchline: string;
  id: string | number;
}
type SearchResultItemProps = {
  cards: DTCard[];
};
const Card = (card: DTCard) => { 
  return (
    <div className="card">
      <h5 className="card-header">{ card.type }</h5>
        <div className="card-body">
        <h5 className="card-title">{ card.setup }</h5>
          <p className="card-text">
            { card.punchline }
          </p>
        </div>
    </div>
  );
}
const CardContainer = ({ cards }:SearchResultItemProps) => { 
  return (
    <div className="container py-4">
      <div className="row g-3">
        {cards.map((r) => (
          <div className="col-md-4" key={r.id}>
            <div className="card h-100">
              <Card {...r} />  
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <button 
          className="btn btn-primary" 
          data-bs-toggle="collapse" 
          data-bs-target="#extraCards"
          aria-expanded="false"
          aria-controls="extraCards"
        >
          Ver más
        </button>
      </div>
    </div>
  );
}

class SearchResultItem extends React.Component<SearchResultItemProps> { 
  constructor(props: SearchResultItemProps) { 
    super(props);
  }
  render() { 
    return (
      <CardContainer cards={this.props.cards} />
    )
  }
}

export { SearchResultItem, SearchResultItemProps }
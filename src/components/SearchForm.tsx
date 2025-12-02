import React from "react";

type SearchFormPropsTypes = {
  onSearch: (query:string) => Promise<void>;
}

class SearchForm extends React.Component<SearchFormPropsTypes> {
  constructor(props: SearchFormPropsTypes) { 
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e:React.FormEvent<HTMLFormElement>) { 
    e.preventDefault();
    const query = JSON.stringify((e.target as any).elements.Buscar.value);
    this.props.onSearch(query);
  }
  render() { 
    return (
      <div className="position-sticky top-0 bg-white p-2 shadow-sm" style={{ zIndex: 1050 }}>
        <form className="input-group" role="search" onSubmit={this.handleSubmit}>
          <span className="input-group-text" id="basic-addon1">🔍</span>
          <input 
            type="text"
            name="Buscar"
            className="form-control" 
            placeholder="Buscar..." 
            aria-label="Buscar" 
            aria-describedby="basic-addon1"
          />
          <button className="btn btn-primary" type="submit">
            Buscar
          </button>
        </form>
      </div>
    );
  }
}

export { SearchForm }
import React from "react";
import { SearchForm } from "./SearchForm";
import { SearchResultItem, SearchResultItemProps } from "./SearchResultItem";

class App extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      results: [],
    };
  }
  render() {
    const handleSearch = async (search: string) => {
      const resp = await fetch("https://fakestoreapi.com/products");
      const products = await resp.json();
      console.log(products);
      const filtered = products.filter((p: any) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
      console.log(filtered);
    };

    return (
      <div>
        <SearchForm onSearch={handleSearch} />
        {
          this.state.results.length > 0
            ? <SearchResultItem cards={this.state.results} />
            : <p className="text-center text-muted mt-3">No hay resultados de búsqueda</p>
        }
      </div>
    );
  }
}

export { App };
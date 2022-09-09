import React from "react";
class  CocktailCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isSelect: false};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        const newSel=!this.state.isSelect;
        this.setState({isSelect: newSel});
        if(newSel)this.props.select(this.props.drink.idDrink)
    }
    render() {
        const {isSelect}=this.state;
        const {drink}=this.props;
        return(
            <div className={`p-3 m-3 card pointer ${isSelect?'bg-warning':'bg-white'}` }
                 style={{width:"20rem",cursor:"pointer"}}
                 onClick={ this.handleChange}
                 data-testid="card"
            >
                <img src={drink.strDrinkThumb} className="card-img-top" alt="logo" />
                <div className="card-body">
                    <h5 className="card-title">{drink.strDrink}</h5>
                    <p className="card-text">{drink.strInstructions}</p>
                </div>
                <h5>Ingredients</h5>
                <ul className="list-group list-group-flush text-start border">
                    <li className="list-group-item">{drink.strIngredient1||""}</li>
                    <li className="list-group-item">{drink.strIngredient2||""}</li>
                    <li className="list-group-item">{drink.strIngredient3||""}</li>
                    <li className="list-group-item">{drink.strIngredient4||""}</li>
                </ul>
            </div>
        );
    }
}

export default CocktailCard;
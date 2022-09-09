import React from "react";
import CocktailCard from "../cocktail-card/card.component";
import Loading from "../../images/circle-loading.svg"
import {getDrinks} from "./service";


class MainPage extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {drinks: [],value: '',isLoading:false,selected:[]};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.myRef = React.createRef();
    }
    onSelect(id){
        const array=this.state.selected;
        array.push(id)
        console.log(array);
        this.setState({selected: array})
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    getData(value){
        getDrinks(value).then(res=>{
            if(res.error){
                this.setState({drinks:[]})
                this.setState({isLoading:false})
            }
            else{
                this.setState({drinks:res.drinks||[]})
                this.setState({isLoading:false})
            }
        })
    }
    async handleSubmit(event) {
        event.preventDefault();
        this.setState({isLoading:true})
        this.getData(this.state.value)
    }
     componentDidMount() {
         this.getData('')
         const node = this.myRef.current;
         if(node){node.focus();         }
     }
    render() {
       const {isLoading,value,drinks}=this.state;
        return(
            <>
                <div className={'row p-3 text-start main-page__header'} onClick={this.handleSubmit}>
                    <form >
                        <label className={'form-label col-1'}>Enter Cocktail:</label>
                        <input type={'text '} className={'form-text col-3'} value={value} onChange={this.handleChange} ref={this.myRef}/>
                        <button type="submit" className="btn btn-info col-auto ms-2" >Send</button>
                        <span className={'col-1 ms-2'}>Selected:{this.state.selected.length}</span>
                    </form>
                </div>
                {isLoading &&  <img src={Loading} alt={'...Loading'}/>}
                {!isLoading&&drinks.length > 0 &&
                    <div className='row p-3 align-items-start justify-content-start'>
                        {drinks.map((drink => {
                            return <CocktailCard drink={drink} key={drink.idDrink} select={this.onSelect}/>}
                        ))}
                    </div>}
                {!isLoading&&drinks.length ===0&&<h5>No Items</h5>}
            </>)
    }
}


export default MainPage;
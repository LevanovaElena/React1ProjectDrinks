export const getDrinks=(value)=>{
    const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
    return  fetch(url)
        .then(res => res.json())
        .then(
            (res) => {
                return {drinks: res.drinks, error: null}
            },
            (error) => {
                return {drinks:[],error:error}
            }
        ).catch((error) => {
            return {drinks:[],error:error}
        })
}
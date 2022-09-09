import React from "react";
import {render,screen} from "@testing-library/react";
import CocktailCard from "../card.component";
// eslint-disable-next-line jest/no-mocks-import
import {mockDrink} from "../../../__mocks__/drinks.mocks";
import userEvent from "@testing-library/user-event";


describe("CocktailCard", () => {
    const drink=mockDrink.drinks[0];
    test("CocktailCard should be render correct", async () => {
        await render(
            <CocktailCard drink={drink} select={jest.fn()}/>
        );
        expect(screen.getByText(drink.strDrink)).toBeInTheDocument();
        expect(screen.getByText(drink.strIngredient1)).toBeInTheDocument();
        expect(screen.getByText(drink.strIngredient2)).toBeInTheDocument();
        expect(screen.getByText(drink.strIngredient3)).toBeInTheDocument();
        expect(screen.getByText(drink.strIngredient4)).toBeInTheDocument();
        expect(screen.getByText(drink.strInstructions)).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem').length).toBe(4);

    });
    test("CocktailCard should be selected", async () => {
        const selected=jest.fn();
        await render(
            <CocktailCard drink={drink} select={selected}/>
        );
        const card=screen.getByTestId('card');
        expect(card).toBeInTheDocument();
        expect(card).toHaveClass('bg-white')
        await userEvent.click(card);
        expect(card).toHaveClass('bg-warning')
        expect(selected).toBeCalledTimes(1);
        expect(selected).toHaveBeenCalledWith(drink.idDrink);
    });
})
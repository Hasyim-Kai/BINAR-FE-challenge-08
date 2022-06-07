import HomePage from "../pages/HomePage";
import { render, screen } from "@testing-library/react";

describe('Home Page Test', () => {
    // const page: JSX.Element = <BrowserRouter><HomePage /></BrowserRouter>
    const page: JSX.Element = <HomePage />

    it('Should have React Image', () => {
        render(page);
        const elemet = screen.getByAltText(/logo/i)
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })

    it('Should have Header Text', () => {
        render(page);
        const elemet = screen.getByText(/Challenge 08/i)
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })

    it('Should have Subtitle Text', () => {
        render(page);
        const elemet = screen.getByText(/Implementing CI\/CD Flows with Github Actions/i)
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })
});
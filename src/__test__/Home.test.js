import React from "react";
import renderer from 'react-test-renderer';
import home from "../components/home";
import '@testing-library/jest-dom';

describe('Test of home page', () => {
    it('test if home page is rendered', () => {
        const homeTest = renderer
            .create(<Home />)
            .toJSON();
        expect(homeTest).toMatchSnapshot();
    });
});

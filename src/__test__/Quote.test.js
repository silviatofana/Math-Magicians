import React from "react";
import renderer from 'react-test-renderer';
import Quote from "../components/quote";
import '@testing-library/jest-dom';

describe('Test of Quote page', () => {
    it('test if Quote page is rendered', () => {
        const quoteTest = renderer
            .create(<quote />)
            .toJSON();
        expect(quoteTest).toMatchSnapshot();
    });
});

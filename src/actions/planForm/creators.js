import {cityAutocomplete} from "./cityAutocomplete";

const requestCitySuggestion = () => ({
    type: 'REQUEST_CITY_SUGGESTION'
});

const retrieveCitySuggestion = (suggestions) => ({
    type: 'RETRIEVE_CITY_SUGGESTION',
    suggestions
});

const fillField = (label, value) => ({
    type: 'FILL_FIELD',
    label,
    value
});

const storeCityData = (city, locationId) => ({
    type: 'FILL_CITY_STORE_LOCATION',
    city,
    locationId
});

export const PLAN_FORM = {
    requestCitySuggestion,
    retrieveCitySuggestion,
    storeCityData,
    fillField,
    cityAutocomplete
};
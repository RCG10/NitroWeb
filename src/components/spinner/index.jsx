// MyComponent.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOptions, getOptionsError, getOptionsLoading } from '../../redux/slices/spinnerSlice';
import { getSpinnerOptions } from '../../redux/actions/spinnerActions';

const Spinner = () => {
    const dispatch = useDispatch();
    const options = useSelector(getOptions);
    const isLoading = useSelector(getOptionsLoading);
    const error = useSelector(getOptionsError);

    useEffect(() => {
        dispatch(getSpinnerOptions());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {options && options.length > 0 ? (
                options.map((option, index) => (
                    <div key={index}>{option.rarity}</div>
                ))
            ) : (
                <div>No options available</div>
            )}
        </div>
    );
};

export default Spinner;

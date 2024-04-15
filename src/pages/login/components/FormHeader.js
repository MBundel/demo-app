import React from 'react';

const FormHeader = (props) => {
    const company = props.selectedCompany;
    const formattedCompanyName = company.name.charAt(0).toUpperCase() + company.name.slice(1);
    const HeaderComponent = React.lazy(() => import(`./headers/${formattedCompanyName}FH`));

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <HeaderComponent />
        </React.Suspense>
    );
};

export default FormHeader;
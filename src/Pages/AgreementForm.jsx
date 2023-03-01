import React from 'react';
import {connect} from 'react-redux';
import {updateAgreement} from '../Utils/action';

const AgreementForm = ({agreement, updateAgreement}) => {
    const handleCheckboxChange = (e) => {
        updateAgreement(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <div className={"WrapperLicense"}>
            <div>This End User License Agreement ("License") is an agreement between you and me. This
                License governs your use of this application and all related software, documentation, and
                updates and upgrades that replace or supplement the application and are not distributed
                with a separate license (together, the "Application"). This Application is licensed to you
                free of charge. You do not own the Application.
            </div>
            <form className={"FormLicense"} onSubmit={handleSubmit}>
                <input type="checkbox" checked={agreement} onChange={handleCheckboxChange}/>
                <button type="submit" disabled={!agreement}>Submit</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    agreement: state.agreement,
});

const mapDispatchToProps = {
    updateAgreement,
};

export default connect(mapStateToProps, mapDispatchToProps)(AgreementForm);
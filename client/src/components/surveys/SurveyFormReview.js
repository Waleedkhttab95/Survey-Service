import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';
const SurveyReview = ({ onCancel, formValues,SubmitSurvey,history }) => {
    return (
        <div>
            <div>
            <div>
                    <h2>Review Your Survey Information</h2>
                  
                </div>
                <div>
                    <label>Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
                <div>
                    <label>Survey subject</label>
                    <div>{formValues.subject}</div>
                </div>
                <div>
                    <label>Survey Body</label>
                    <div>{formValues.body}</div>
                </div>
                <div>
                    <label>Recipient List</label>
                    <div>{formValues.recipients}</div>
                </div>
            </div>

            <button  className="yellow darken-3 white-text btn-flat" onClick={onCancel}>Back</button>
            <button onClick={() =>SubmitSurvey(formValues,history)} className="green btn-flat right white-text">Send Survey<i className="material-icons right">email</i></button>
        </div>
    );
};
function mapStateToProps(state) {

    return { formValues: state.form.surveyForm.values };

}
export default connect(mapStateToProps,actions) (withRouter(SurveyReview));
import React, {Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import SurveyField from'./SurveyField';
import {Link} from 'react-router-dom';
import validateEmail from '../../utils/validateEmail';
class SurveyForm extends Component{
    renderFields(){
        return(
<div>
    <Field label="Survey Title" type="text" name="title" component={SurveyField} />
    <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
    <Field label="Email Body" type="text" name="body" component={SurveyField} />
    <Field label="Recipient List" type="text" name="recipients" component={SurveyField} />
   
</div>

        );
    }
render(){
    return (
<div>
    <form onSubmit={this.props.handleSubmit( this.props.onSurveySubmit)}>
 {this.renderFields()}
 <Link to="/surveys"  className="red btn-flat left white-text">Cancel</Link>
 <button type="submit" className="teal btn-flat right white-text">Next
 <i className="material-icons right">done</i>
  </button>

 </form>
</div>

    );
}


}
function validate(values){
    const error={};
    error.recipients=validateEmail(values.recipients||'');

    if(!values.title){
        error.title='You must provide a title';
    }

    if(!values.subject){
        error.subject='You must provide a Subject';
    }

    if(!values.body){
        error.body='You must provide a body';
    }

    return error;
}
export default reduxForm({
    validate: validate,
form: 'surveyForm',
destroyOnUnmount: false
}) (SurveyForm);
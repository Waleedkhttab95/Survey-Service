const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



export default (emails) =>{
const invalidemailsArray=emails.split(',').map(email =>email.trim()).filter(email => re.test(email)===false);

if(invalidemailsArray.length){
    return `these emails is not valid : ${invalidemailsArray}`;
}
return;
};
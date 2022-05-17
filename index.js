const v = new Validator();

const schema = v.string();

chema.isValid(''); 
schema.isValid(null); 
schema.isValid(undefined); 

schema.required();

schema.isValid('what does the fox say'); 
schema.isValid('hexlet'); 
schema.isValid(null); 
schema.isValid(''); 

schema.contains('what').isValid('what does the fox say'); 
schema.contains('whatthe').isValid('what does the fox say'); 

schema.isValid('what does the fox say');
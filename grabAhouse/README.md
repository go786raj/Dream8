
# stack

MEAN stack-(angula1.5)

# dynamic-form

This project is generated with yo 

          {type: "text", name: "firstname", label: "Name" , required: true, data:""},
          {type: "radio", name: "gender", label: "Gender" ,
           options:[
           {id: 1, name: "male"},
           {id: 4, name: "female"}],
            required: true, data:""},
          {type: "email", name: "emailUser", label: "Email" , required: true, data:""},
          {type: "select", name: "profession_id", label: "Iam" , options:[{name: "BussinessMan"},
          {name: "IT Employee"},{name: "Student"},{name: "Retired"}], required: true, data:""}

types of fields handled


#Sails js

backend framework as sails .
for running => 
npm install
sails lift

#mongo db 

database used mongo so have to start mongodb before ruuning sails lift



## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

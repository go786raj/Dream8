/**
 * EntitiesController
 *
 * @description :: Server-side logic for managing entities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	
	
	  postData: function(req, res) {
		  

	 
  Entities.findOne({name:req.body.name}).exec(function(err,entity){
    console.log("entity")
    var a=[];
console.log(entity.fields);
   console.log("req.body.fields")
     console.log(req.body.fields)

 entity.fields.push(req.body.fields);
      // entity.fields=a;
    entity.save(function(err){
      if (err) { return res.serverError(err); }
      return res.ok();
    });//</save()>


    // entity.fields =req.body.name

    // entity.save(
    //   function(err){
    //     console.log(entity);
    //   });

  });

      console.log("req.body");
     console.log(req.body);


    // Entities.create(req.body, function entitiesCreated(err, entities) {
		
		
    //   if (err) {
    //     console.log(err);
    //    // return res.redirect('/feedback/new');
    //   }
    //   res.json(entities);
    // });
  }
	
};


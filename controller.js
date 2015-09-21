 /*
  * Tyler Deans
  * 9/21/15
  * controller.js
  */

 /*
  * Create the sim controller
  */
 function SimController() {
     // create a data model that exposes parameters to smart sparrow
     this.simModel = new SimModel(this);

     // expose model data to Smart Sparrow
     /*pipit.CapiAdapter.expose('mastery', this.simModel);
     pipit.CapiAdapter.expose('numerator', this.simModel);
     pipit.CapiAdapter.expose('denominator', this.simModel);
     pipit.CapiAdapter.expose('firstQuestion', this.simModel);
     pipit.CapiAdapter.expose('lastQuestion', this.simModel);
     */

     // let smart sparrow know that the sim is ready to accept values
     pipit.Controller.notifyOnReady();
     // create the view controller
     this.simView = new SimView(this);
 }

 SimController.prototype.initializeController = function() {
     // initialize the model
     this.simModel.initializeModel();
     // initialize the view
     this.setupDisplay();
 }


 SimController.prototype.setModelValue = function(_name, _newValue) {
     this.simModel.set(_name, _newValue);
 }


 SimController.prototype.getModelValue = function(_name) {
     return this.simModel.get(_name);
 }


 SimController.prototype.triggerCheck = function() {
     pipit.Controller.triggerCheck();
 }


 SimController.prototype.setupDisplay = function() {
     // shows the question 
     var question = this.simModel.questionBank.createQuestion();
     // shows the let expression
     var expression = this.simModel.questionBank.getLetExpression();
     // shows the answer choices
     var answerChoices = this.simModel.questionBank.getAnswerChoices();
 }


 // Create a new Controller for sim
 // The controller interacts with the model and the view
 var simController = new SimController();


 $(document).ready(function() {
     // let smart sparrow know that the sim is ready to accept values
     //pipit.Controller.notifyOnReady();
 });
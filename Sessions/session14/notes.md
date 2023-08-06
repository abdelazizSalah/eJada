# Extending Workflows
* we extend workflows to be able to control multiple records not only one record or one field. 
* to create a project:
  * Class Library (.NET Framework)
  * open VSCode
* el C# mbyb2ash ader eno yfhm eno byt3aml m3 dynamics : 
  * right click on the project name
  * manage NuGets Package
  * download Microsoft.CrmSdk.CoreAssemblies
  * download Microsoft.CrmSdk.Workflow
  * (you will have to install them each time -> but i think that there will be a way to make a permenant installation, and we can just add the packages.)
* enta dayman wnta btt3aml m3 el dynamics enta dayman btt3aml m3 service, el hwa api. 
* el mfrod te3ml inherite le class esmo CodeActivity
* lama t3mlha hydek error, lazm t3ml add System.Activities fl imports.
* w b3d keda hydek error, 34an el function bt3tk lazm t3mlo overwrite le function esmha Execute
* fa lazm te3ml function esmha Execute w tb3tha override
* gowaha htla2y haga esmha CodeActivityContext
* da 3bara 3n
* bn3ml object esmo IWorkFlowContext, w lazm ne3ml import le library 34an yeshtghl
* w 34an n3ml assignment lazm ne3ml context.GetExtension<IWorkflowContext>() 34an hya 3bara 3n template class. 
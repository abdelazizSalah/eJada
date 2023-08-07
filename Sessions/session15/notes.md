# Notes
* app.config
  * de tre2a bdl ma bn7ot el 7agat static, bn7otha f el app.config w ne2dr mnha enna nndh 3leha mn bara el file 3ady. 
  * 34an ne3ml keda, bn3ml tag, w gowah bn7ot add, w n2ol name = "the required name"
  * example:
    * <add name = "CRM_connection" connectionString ="AuthType=Office365;Url=urlofyourdynamics365instance;Username=yourusername;Password=yourpassword"
  * we can apply the requests on the web url, 
    * example: https://yourinstance.crm.dynamics.com/api/data/v9.2/new_employee?$select=new_name,new_email.
var _service = (IOrganizationService)conn.OrganizationServiceProxy; >

# SLA, Service Level Agreements.
* open the entity information
* select enable sla
* save
* publish
* go for SLA KPI Instance
* now we have two options:
  * either we choose 1:N in the relationship of the SLA KPI
  * or we create N:1 at the entity you have choosen. 
* on creating a new relation:
  * always keep the schema name in small letters. 
* save and close
* now we need to create a timer. 
* from the Form, select new  quick view form
* then select the timer
  * fill the Name section
  * and on the Data source section:
      * Failure time field: search about the options  (usually we put the failure time.)
        * da byb2a field by3rd 7aga on case of failure
      * Success Condition
        * emta bn2ol en el 7aga succedded 
        * usualy we select Status -> Succeedded
      * Faliure Condition
        * emta bn2ol en el 7aga failed
        * usualy we select Status -> NonCompliant
      * Warning Condition
        * emta bn2ol en el 7aga warning
        * usualy we select Status -> Nearing Noncompilance
      * Cancel Condition
        * emta bn2ol en el 7aga cancelled
        * usualy we select Status -> Cancelled
      * Pause Condition
        * emta bn2ol en el 7aga paused
        * usualy we select Status -> Paused  
  * now we have finshed our work here.
  * we then go to the lead (the entity we have chosen)
  * Note: we can make more than one sla on the same record
  * so we go to forms 
  * select the main form. 
  * insert a new tab in the form (usually above the footer)
    * insert into it a quick view form 
    * btbos 3la el quick view form el enta lesa kont 3amlo.
    * select from lookup field the lookup you have made
    * Quick view field that you have created( do not forget to rename it, if you did not it will appear as a **new form**)
  
# Now how can we create a new SLA? 
* go to advanced settings.
* select service management
* select service level agreements
* select new:
  * Entity:
    * select the entity you want to apply the sla on.
  * Applicable from:
    * created on:
    * changed on:
    * ...
  * Business Hours:
    * lw feh record el sla bta3o 3 ayam msln, w ana b5ud 5mes gom3a agaza w 3mlto um el khmed, fa my3dsh um el gom3a w el sbt, w ykml mn el 7d.. 
  * SLA type; Search
  * allow pause and resume. 
* SLA items: 
  * hwa da el bn7ot baa feh el logic wl conditions.
* on success:
  * take certain action
* save
* publish
* set as default (do not forget it.). 
  
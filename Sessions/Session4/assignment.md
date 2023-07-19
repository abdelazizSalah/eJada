
<!DOCTYPE html>
<html>
<head>
<style>
    table {
        width: 100%;
    }
    td {
        font-size: 16px;
        padding: 8px; 
    }
</style>
</head>
<body>

<table>
  <tr>
    <td>Name: Abdelaziz Salah</td>
    <td>Supervised by: Eng/ Ethraa Hassan</td>
  </tr>
  <tr>
    <td>Subject: Searching Results</td>
    <td>Date:19/7/2023</td>
  </tr>
</table>

</body>
</html>

----

## Special symbols used in search
* they are called **Advanced query syntax**
* examples:
  * value: search for value
  * !value: search for all existing elements except that value
  * x..y: return all elements between x and y, including both x and  y.
  * ..x: this returns all elements smaller than or equal x
  * x..: returns all the elements greater than x.
* you can find more in [here](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/get-started/advanced-filtering-query-options)

##  2 ways to create opportunity other than lead (Sales Cycle)
* you should have licesne and security role to be able to do this.
* License: 
  * Dynamics 365 Sales Premium
  * Dynamics 365 Sales Enterprise
  * Dynamics 365 Sales Professional 
* Security role: 
  * Any primary sales role:
    * sales-person
    * sales-manager
    * etc...
* The common way for creating an opportunity is to convert a lead to an opportunity.
* so the system will copy the informations from lead record to the opportunity records.
* and they will be linked, so all the activitie and notes in the lead record also becomes available in the corresponding opportunity record.
* but this is not the only way for doing so. 
* we can create a new opportunity record from scratch.
* this is by doing the following steps:
* 1. Manual method:
  * 1. In the sales hub, go to the **Opportunities** area.
  * 2. On the command bar, select **New**.
  * 3. in the summary tab, capture important details about the opportunity. 
  * 4. save the record.
* 2. Convert an activity to an opportunity
  * In Dynamics 365 for Sales, you can also convert certain activities, such as tasks or appointments, into opportunities. This method can be useful when an activity with a customer indicates a potential sales opportunity. To convert an activity to an opportunity, follow these steps:
  
      1. Open the activity record (e.g., task or appointment) that suggests a potential sales opportunity.
      2. On the activity form, click the "Convert to Opportunity" button (or similar functionality depending on the version and configuration of Dynamics 365).
      
      3. Dynamics 365 will create a new opportunity record and prepopulate it with relevant information from the original activity.
      
      4. Review and update any necessary details, then save the opportunity record.
      5. here is a video for doing so [converting activity into opportunity](https://learn.microsoft.com/en-us/dynamics365/sales/create-edit-opportunity-sales). 

* you can find more in [here](https://learn.microsoft.com/en-us/dynamics365/sales/create-edit-opportunity-sales)


## Is it refresh, or number of processes? 
* This task mainly talks about the reversed symbol in the business process flow part. 
* It maily represents the number of workflows in that card
* as you increment the workflows in the card, the number will increase,and vice versa.


## 3 Types for search in the filter
* In Dynamics 365 for Sales (or other Dynamics 365 modules), the filter functionality allows you to narrow down and search for specific records within a view. When you apply a filter, you can specify certain criteria to display only the records that meet those conditions. There are generally three types of search options available in the filter:

   1. Simple Filter:
    The Simple Filter provides basic search capabilities and allows you to filter records based on a single field's value. You can use this type of filter to find records that match a specific value exactly. For example, you might use a simple filter to search for all opportunities with a specific opportunity status or all accounts with a particular account type.

    2. Advanced Filter (Or Multi-Filter):
    The Advanced Filter, also known as Multi-Filter, offers more advanced search options by allowing you to create complex queries with multiple conditions. You can combine different fields and apply conditions such as equal to, not equal to, contains, does not contain, greater than, less than, etc. Using the Advanced Filter, you can perform more sophisticated searches, especially when you need to find records that meet multiple criteria simultaneously.

    3. Related Filter:
    The Related Filter enables you to search for records based on related entities' fields. This type of filter is particularly useful when you want to find records based on information stored in related records. For example, you might use a related filter to find all opportunities related to a specific account or all activities associated with a particular contact.

* To apply any of these filters, you typically navigate to the relevant entity's view, locate the filter options, and specify your search criteria using one of the available filter types. The actual steps and options might vary slightly based on the version and configuration of Dynamics 365 you are using, but the basic concepts remain the same across most implementations.
* what is the difference between on-premise and on cloud? 
  * the main difference is the location, the On-Premise is installed and runs on the company's hardware and hosted locally, whereas the cloud software is stored and managed on the provider's servers and accessed by the user through the internet and web.
  
* search leh dayman el option value prefix should start from 10,000. 
    * this is mainly in the option set, An option set is a type of field that can be included in an entity. It defines a set of options. When an option set is displayed in a form it uses a drop-down list control. When displayed in Advanced Find it uses a picklist control. Sometimes option sets are called picklists by developers.
    * As of my last knowledge update in September 2021, Dynamics 365 doesn't have a specific requirement to start counting from 10000 when adding an option into the options set. The numbering convention is not enforced by the system but is often considered a best practice recommended by developers and consultants.

    * Starting option values from 10000 (or any other large number) allows room for inserting new options in between existing ones without the need to renumber all the subsequent options. For example, if you initially have options with values 10000, 10001, 10002, and you need to add a new option between 10001 and 10002, you can assign it the value 10001.5 or 10001.1 without disrupting the existing order. This practice helps maintain consistency and makes it easier to manage the options set in the long run, especially if you anticipate future changes or additions to the options.

    * Keep in mind that practices and conventions might vary depending on the organization and the specific Dynamics 365 implementation. Always follow the guidelines provided by your team or organization when working with Dynamics 365 to maintain consistency and avoid potential issues.

    * no specific answer for this question, but this is the best answer I found.
  

* what is the configuration page, and what is the version.

* read more about the managed and the unmanaged solution. 
  * before talking about the managed and the unmanaged, lets talk about the solution.
  * the solution mainly is how the customizers and developers authors, package and maintain units of software that extend the functionality of the system.
  * fa enta bt4of ezay te2dr test5dm el tools elly fe dynamics, w lw feh 7aga msh mwgoda btdefha 34an te2dr t3ml el task bta3 el user elly m3ak aw el client da. 
  *  Customizers and developers distribute solutions so that organizations can use Dynamics 365 Customer Engagement (on-premises) to install and uninstall the business functionality defined by the solution.
  *  fa da m3nah en el customizers bybd2i enhom yewz3o el soltions de 34an ye2dro y5lo el clients yest5dmoha 3la el on-premise versions. 
  *  any on-Premis application consists of two main parts, Microsoft Components (out of the box) and the custom components (external components).
  *  there are two main types of on-premis solutions which are:
     *  managed:
        *  it is a complete solution, that is intended to be distributed, and installed.
     * unmanaged:
        *  solution under development, or unintended to be distributed. 
     * when we complete an unmanaged solution, and intend to distribute it, we just export it and package it into managed solution. 
### types of solutions: 
* System solution:
  * they are the solution components already existing in the system (default components), and they define the default system behaviour. 
* Managed solutions:
  * they are installed on top of the system, and can modify any customizable solution components or add mode solutions components.
  * bm3na enha btnzl 3la el system, w tebd2 t3dl feh el 7agat elly mmkn tet3dl, 3la 7asab el managed components de kant m3mola ezay, w 7ata lw ms7t el solution de b3d keda, fa brdo byfdl el system configurations elly enta 8yrtha zy ma hya. 
  * it can also be layered on top of other managed solutions, as long as a managed solution enables customization of its solutions, other managed soltions can be installed on top of it. 
  * bm3na brdu en ana mmkn wna b3ml el managed solutions, a7ot limitations, b7es m7dsh ye2dr ye3ml configurations 3la el 7agat elly ana 3amelha, fa lw ana msh 3aml el restrictions de baa, a2dr a7ot multiple levels 3ady, lakn lw 3amlha w fe layer 3auza te3ml modify 3la 7aga ana aslun mane3ha, fa sa3etha msh bynf3.
* Unmanaged solutions:
  * when a solution is unmanaged, then there are some operations that you can apply:
    * Add components 
    * Remove components. 
    * Delete components that are allow for deletion
    * Export and import these unmanaged solutions
    * export the solution as a managed one. 
  
* what is the difference between managed solution and managed properties.
  * The managed properties will take effect after you package the managed solution and install it in a different organization. After the managed solution is installed, the managed properties cannot be updated except by an update of the solution by the original publisher.
  * bm3na en el managed properties hya de el restrictions elly enta bt7otha 3la el system bta3k, 34an lma te3mlo export m7dsh ye2dr eno y3dl 3leha. 
  
* shoof eh el fr2 ben el activity entity w entity el 3adeya. 
  * we can first talk about the different types of entities
  * there are different types of entities, but once a custom is created, these types can not be changed. 
  * we have two major divisions
    * Entity ownership: -> men ely ye2dr eno ybos 3la el data bta3t el entity de. 
      * it is categorized into main 4 categories
        * Business owned:
          * fe kaza sherka 3ndha ownership lel entity de
        * None: mfesh 7d owner leha. 
        * Organization owned: fe organization hya elly 3ndha ownership lel entity de.
        * User/Team owned: team mo3yn bs aw user mo3yn bs hwa elly leh el access. 
    > the custom entities that you create, and most customizble system entites are either organization owned or user/team owned.
    * Activity entity:
      * An activity can be thought of as any action for which an entry can be made on a calendar. An activity has time dimensions (start time, stop time, due date, and duration) that help determine when the action occurred or will occur. Activities also contain data that helps determine what action the activity represents, for example, subject and description. An activity can be opened, canceled, or completed. The completed status of an activity will have several sub-status values associated with it to clarify the way that the activity was completed.
      * Activity entity can only be owned by user/team, they can not be owned to organization, and this make sense, because there can not be an activity that include the whole organization, instead, each activity corresponds to certain team or certain person. 
      * there are many system entities that represents activities such as: 
        * Appointment
        * Campaign response
        * Email
        * Fax
        * Letter
        * Phone call
        * and so on
        * check this link : https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/customize/types-of-entities?view=op-9-1
* what does those mean? 
  * Appers in global filter in interactive experience. 
    * to be able to check this we need to understand what does interactive experience means:
      * it is a one-stop workplace where you review your workload, and stop to take actions. 
      * The information in the interactive dashboard is shown in real time, coming from views and queues. The interactive dashboards with their modern and intuitive interface are optimized for the customer service experience. For example, instead of paging through the application looking for a case, you’ll be able to open and update the case right from the dashboard. This will save you time, help to focus on tasks at hand, and get more work done. You’ll need sufficient permissions to use the interactive dashboards. The permissions will be assigned to you by an administrator.
      * there are many dashboards such as Tier1. 
      * they are like some statistical and graphical representations for the data to help you visualize your performance. 
      * they come into two flavors:
        * Multi-stream.
          * displays data in real-time over multiple data streams. -> y3ny a baa? / azon m3naha eno bygeblk tfasel 3n 7agat mo5talefa fe nfs el w2t, mn queues mo5tlfa w keda. 
        * Single-stream.
          * de baa byb2a gowaha information 3n entity wahda bs. 
        * check this link: https://learn.microsoft.com/en-us/dynamics365/customer-service/customer-service-hub-user-guide-dashboard
  * Sortable in interactive experience dashboard.  
* IME Mode: search 3leha. 
  * when enabled, it allows users to enter characters from East Asian languages,like japaneese and chineese. 
  * it is an acronym for Input Method Editor.
  * it has no impact on the modern unified interface.  
* Look-up when created it creates another element in the choosen value, what it is -> **SubGrid.**
* No3od nel3b fe el app, 34an nefhm el donya. 


# Task 
* create an entity.
* create two look-ups. 
* each of them is dependent on the other. 
* the first one contains the vendors names. 
* the second one contains the workers.
* Keywords "Filtered lookup", "Related"
* de 7aga gowa el field nafso. 
* w el fekra enk lama tdos 3la vendor, yezhrlk el workers bto3 el vendor da.
* ddl bukra :).   
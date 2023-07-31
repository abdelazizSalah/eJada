---
Name: Abdelaziz Salah
Title: Searching Assignment
Delivered To: Eng. Ethraa
Date: 31/7/2023
---

## Search about the **Share Security Fields** in CRM.
 > I am explaining this in this video -> [Share Security Fields](https://youtu.be/V2sFz22O0_o)
## search about the difference between the adminstrator and the manager of the team, and what does each one do.
> The terms "administrator" and "manager" are often used in organizational settings to refer to individuals with different roles and responsibilities. While there can be some overlap between the two roles, they generally serve distinct functions within a company or team. Here are the primary differences:

Administrator:

    Responsibilities: An administrator is typically responsible for overseeing the overall operations and management of a system, department, or organization. They focus on ensuring that processes run smoothly, policies are implemented, and resources are allocated efficiently.

    Decision-making: Administrators are often involved in strategic decision-making, policy creation, and long-term planning for the organization. They set goals and objectives and work towards achieving them.

    Authority: Administrators generally have higher levels of authority within the organization. They might have the power to make critical decisions and set guidelines for managers and other employees to follow.

    Scope: Administrators usually have a broader scope of responsibility, looking at the big picture of the organization's functioning rather than focusing on specific operational tasks.

Manager:

    Responsibilities: A manager is typically responsible for overseeing a specific team, department, or project within the organization. They are more focused on day-to-day operations, task delegation, and ensuring that team members meet their objectives.

    Decision-making: Managers are involved in operational decision-making, such as assigning tasks, setting deadlines, and addressing immediate issues within their area of responsibility.

    Authority: Managers have authority over the employees within their team or department. They are responsible for managing and guiding their team members to achieve their goals.

    Scope: Managers have a narrower scope of responsibility compared to administrators. They are more involved in the detailed aspects of their team's work and might not be as engaged in high-level strategic planning.

> In summary, administrators are higher-level executives who focus on the overall functioning of an organization and have broader decision-making authority, while managers are responsible for specific teams or departments and focus on day-to-day operations and team management within a more limited scope. Both roles are crucial for the success of an organization, and they often work collaboratively to achieve common goals.
## and does the adminstrator replace the manager role, or they are two different roles.
> The Admin and Manager are not interchangeable roles. 
> <br> each has his own responsibilities. 
>     Scope of Responsibility:

     As mentioned earlier, administrators have a broader scope of responsibility. They oversee the overall operations and management of the organization, including setting strategic goals, creating policies, and making high-level decisions that affect the entire company. On the other hand, managers are responsible for specific teams or departments and focus on day-to-day operations, task delegation, and team management within their area of responsibility.

    Decision-Making Authority: Administrators typically have higher levels of decision-making authority within the organization. They are involved in setting guidelines, policies, and long-term plans that managers and other employees must follow. While managers have authority over their respective teams and can make operational decisions within their scope, they generally do not have the same level of decision-making power as administrators.

    Specialization: Managers often have specialized knowledge and expertise related to the specific functions of their teams or departments. They understand the intricacies of their team's work and are best suited to manage and lead the team effectively. Administrators, on the other hand, need a broader understanding of various organizational functions and may not have the same level of specialization as managers.

    Collaboration: Administrators and managers work collaboratively to achieve the organization's goals. The administrator's role is to provide guidance, resources, and support to managers and their teams, ensuring that they align with the organization's overall vision. Managers, in turn, implement the administrator's directives and manage their teams to contribute to the organization's success.

    Organizational Structure: Most organizations have a hierarchical structure, and both administrators and managers play critical roles within this structure. Removing one role and replacing it with the other would disrupt the balance and efficiency of the organization's management.
## Access team is divided into :
  * user created team 
  * auto created system managed team
  ## do a detailed search about each one of them.

    In Microsoft Dynamics 365, both User-Created Access Teams and Auto-Created System Managed Teams are used to manage record access and collaboration among users. However, there are significant differences between the two types of teams in terms of how they are created, managed, and their purpose. Here's a comparison:

User-Created Access Team:

    You can share multiple records with a user-created access team. To create an access team, use the team entity and set the Team.TeamType attribute to Access. For a list of the TeamType values, refer to the Team entity metadata. You can find this information in the metadata for your organization. See the preceding metadata browser information.

Auto-Created (System Managed) Access Team:

    An auto-created (system-managed) team is created for a specific record and can’t be shared with other records. For system-managed teams, you have to provide a team template. To create a template, use the team template entity. In the template, you have to specify the entity type and the access rights on the entity record, such as Read or Write that are granted to the team users when the team is created. The entity that you specify in the template must be enabled for auto created access teams. To provide the team members with different access rights on the record, create several team templates. For example, for the account entity, provide one template with the Read access right for team that only needs to view the record. Provide a second template with the Read, Write and Share access rights, for team that require more access to the same record.
    The users are automatically added and removed in the system-managed team, when you add or remove the users in a particular record by using the AddUserToRecordTeamRequest message and the RemoveUserFromRecordTeamRequest message. The actual team is created when you add the first user to the record and the team ID is returned in AccessTeamId. The Team.SystemManaged attribute for this team is set to true. For a list of the Team.SystemManaged values, refer to the Team entity metadata. You can find this information in the metadata for your organization. See the preceding metadata browser information. The caller of the message must have the Share privilege on the entity and the access rights on the record that match the access rights provided in the template. For example, if the template specifies the Read access rights, the calling user must have the Read access rights on the record. To be added to the team, a minimum access level a user must have on the entity specified in the template is Basic (User) Read.

> [Read More About the Differences](https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/use-access-teams-owner-teams-collaborate-share-information?view=op-9-1)
  ## and wethere we can edit their security roles or not.
## The access team can read-write-append, so can we make it read only, and how?
I am explaining this in this video -> [how To Prevent Access Team From Modifing The System](https://youtu.be/a-dNFmOV36w)  
## what is the Azure AD Object ID?
> Azure Active Directory (Azure AD) is a cloud-based identity and access management service. Azure AD enables your employees access external resources, such as Microsoft 365, the Azure portal, and thousands of other SaaS applications. Azure Active Directory also helps them access internal resources like apps on your corporate intranet, and any cloud apps developed for your own organization<br> You can read more about Azure AD from this link ->  [Azure AD](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-whatis)  <br> Object Id. ObjectId will be a unique value for application object and each of the service principal. This uniquely identifies the object in Azure AD. It's a property that you will find with all Azure AD objects, like even a user, group or anything else with Azure AD
## what is the division in the business unit.  
> [Business units documentation](https://learn.microsoft.com/en-us/power-platform/admin/create-edit-business-units)

>Division: a distinct and separate organizational unit within the company that operates semi-autonomously. Each division typically has its own specific responsibilities, functions, products, or services that contribute to the overall goals of the company. <br><br>
Divisions are often established to help manage large companies more efficiently by dividing the organization into smaller, more manageable units. This allows the company to focus on different markets, products, or geographic regions, and enables better decision-making and resource allocation
